// src/pages/api/meta-conversions.ts
import type { APIRoute } from 'astro';
import crypto from 'node:crypto';

export const prerender = false;

// 🔒 SHA-256 Normalizer according to Meta CAPI specification
function hashSha256(value?: string | null): string | undefined {
  if (!value || typeof value !== 'string') return undefined;
  const normalized = value.trim().toLowerCase();
  if (!normalized) return undefined;
  return crypto.createHash('sha256').update(normalized).digest('hex');
}

// 🔒 Phone Normalizer (strips symbols, ensures international country code)
function hashPhone(phone?: string | null): string | undefined {
  if (!phone || typeof phone !== 'string') return undefined;
  let digits = phone.replace(/\D/g, '');
  if (!digits) return undefined;
  // If user entered 10 digits (common in India), prefix 91
  if (digits.length === 10) {
    digits = `91${digits}`;
  }
  return crypto.createHash('sha256').update(digits).digest('hex');
}

// Helper to extract cookies from cookie header
function parseCookie(cookieHeader: string | null, name: string): string | undefined {
  if (!cookieHeader) return undefined;
  const match = cookieHeader.match(new RegExp(`(^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[2]) : undefined;
}

export const GET: APIRoute = async () => {
  const pixelId = process.env.META_PIXEL_ID || '1655365958787346';
  return new Response(
    JSON.stringify({
      status: 'active',
      engine: 'Silicon Valley Meta CAPI Dual-Engine Architecture (v21.0)',
      dataset_id: pixelId,
      timestamp: new Date().toISOString()
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const token = process.env.META_ACCESS_TOKEN;
    const pixelId = process.env.META_PIXEL_ID || '1655365958787346';

    if (!token) {
      console.error('❌ [Meta CAPI] Server configuration error: META_ACCESS_TOKEN is missing.');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json().catch(() => ({}));
    const {
      event_name = 'Lead',
      event_id,
      event_source_url,
      user_data = {},
      custom_data = {}
    } = body;

    // Must have event_id for client-server deduplication
    const finalEventId = event_id || `srv_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    const currentTimestamp = Math.floor(Date.now() / 1000);

    // Header telemetry extraction
    const cookieHeader = request.headers.get('cookie');
    const userAgent = request.headers.get('user-agent') || user_data.client_user_agent || undefined;
    
    // IP extraction priority: x-forwarded-for -> cf-connecting-ip -> clientAddress -> user_data
    const xForwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = (xForwardedFor ? xForwardedFor.split(',')[0].trim() : null) ||
                     request.headers.get('cf-connecting-ip') ||
                     request.headers.get('x-real-ip') ||
                     clientAddress ||
                     user_data.client_ip_address ||
                     undefined;

    // Cookie extraction for Meta first-party cookies (_fbp and _fbc)
    const fbp = user_data.fbp || parseCookie(cookieHeader, '_fbp');
    let fbc = user_data.fbc || parseCookie(cookieHeader, '_fbc');

    // 🎯 Silicon Valley FBC Generator: If user arrived via Meta Ad (?fbclid=...), auto-synthesize standard fbc format
    if (!fbc) {
      try {
        const sourceUrl = event_source_url || request.headers.get('referer');
        if (sourceUrl) {
          const urlObj = new URL(sourceUrl);
          const fbclid = urlObj.searchParams.get('fbclid');
          if (fbclid) {
            fbc = `fb.1.${Date.now()}.${fbclid}`;
          }
        }
      } catch (_) {}
    }

    // SHA-256 PII Hashing
    const hashedEmail = user_data.em ? (user_data.em.length === 64 ? user_data.em : hashSha256(user_data.em)) : undefined;
    const hashedPhone = user_data.ph ? (user_data.ph.length === 64 ? user_data.ph : hashPhone(user_data.ph)) : undefined;
    const hashedFirstName = user_data.fn ? (user_data.fn.length === 64 ? user_data.fn : hashSha256(user_data.fn)) : undefined;
    const hashedLastName = user_data.ln ? (user_data.ln.length === 64 ? user_data.ln : hashSha256(user_data.ln)) : undefined;

    const metaUserData: Record<string, any> = {
      client_ip_address: clientIp,
      client_user_agent: userAgent
    };

    if (hashedEmail) metaUserData.em = [hashedEmail];
    if (hashedPhone) metaUserData.ph = [hashedPhone];
    if (hashedFirstName) metaUserData.fn = [hashedFirstName];
    if (hashedLastName) metaUserData.ln = [hashedLastName];
    if (fbp) metaUserData.fbp = fbp;
    if (fbc) metaUserData.fbc = fbc;

    const payload = {
      data: [
        {
          event_name,
          event_time: currentTimestamp,
          event_id: finalEventId,
          event_source_url: event_source_url || request.headers.get('referer') || 'https://finesseoverseas.com/',
          action_source: 'website',
          user_data: metaUserData,
          custom_data: {
            ...custom_data,
            currency: custom_data.currency || 'INR',
            value: custom_data.value ?? 0.00
          }
        }
      ]
    };

    const graphUrl = `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${encodeURIComponent(token)}`;

    const metaRes = await fetch(graphUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const metaJson = await metaRes.json();

    if (!metaRes.ok || metaJson.error) {
      console.error('⚠️ [Meta CAPI] Dispatch warning:', metaJson);
      return new Response(
        JSON.stringify({ success: false, error: metaJson.error }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        events_received: metaJson.events_received,
        fbtrace_id: metaJson.fbtrace_id,
        event_id: finalEventId
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error: any) {
    console.error('❌ [Meta CAPI] Fatal execution exception:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
