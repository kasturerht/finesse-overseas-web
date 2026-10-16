// src/pages/api/cron/publish-social.ts
// ☁️ Enterprise Vercel Cloud Serverless Social Media Dispatcher
// Powered by TiDB Cloud Serverless & 100% Zero-PC Cloud Engine.
import type { APIRoute } from 'astro';
import { connect } from '@tidbcloud/serverless';
import fs from 'node:fs';
import path from 'node:path';

function getLocalQueue(): any[] {
  try {
    const p = path.resolve('src/data/social-queue.json');
    if (fs.existsSync(p)) {
      return JSON.parse(fs.readFileSync(p, 'utf-8'));
    }
  } catch (_) {}
  return [];
}

export const prerender = false;

const CRON_SECRET = process.env.CRON_SECRET || 'finesse_cloud_cron_2026_super_secure_token';
const PERMANENT_TOKEN_FALLBACK =
  'EAANhZBRKnTpsBStZB7ZCNmJikD9NeQ0MMAvoFyZBSxFgFA74l3TNtfZAOrhFlhrMemqSfBNHoZABzjwSUYgghhRcOgPtHLnOwdQNJsaSJBOHeZB9rauCu2m1QZBKPAddOICHAY6669tZAkc01aBrvLvfoFQ3UCylhgxRSElZCdreFMmHkp4CjGHPU0AcZBf34qj9g2Y498ZD';

const TIDB_URL =
  process.env.TIDB_DATABASE_URL ||
  'mysql://3EG6Dp1YBiQZq9t.root:OExhrLg6B5z7fpEV@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/finesse';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const secretParam = url.searchParams.get('secret');
  const authHeader = request.headers.get('authorization');
  const isVercelCron = request.headers.get('x-vercel-cron') !== null;
  const isDryRun = url.searchParams.get('dry_run') === 'true';

  // Authorization check
  const isAuthorized =
    isVercelCron ||
    secretParam === CRON_SECRET ||
    authHeader === `Bearer ${CRON_SECRET}` ||
    isDryRun;

  if (!isAuthorized) {
    return new Response(JSON.stringify({ error: 'Unauthorized: Invalid Cron Secret' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const token =
    (process.env.META_PAGE_ACCESS_TOKEN && process.env.META_PAGE_ACCESS_TOKEN.startsWith('EAANhZBRKnTpsBSt'))
      ? process.env.META_PAGE_ACCESS_TOKEN
      : PERMANENT_TOKEN_FALLBACK;
  const pageId = process.env.META_PAGE_ID || '101105755777020';
  const igId = process.env.META_INSTAGRAM_ACCOUNT_ID || '17841450168474580';

  // Current IST time
  const now = new Date();
  const istDateStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(now);
  const istTimeStr = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(now);
  const istNowFormatted = `${istDateStr} ${istTimeStr}:59`;

  const conn = connect({ url: TIDB_URL });

  // 1. Fetch pending posts from TiDB Cloud Database
  let queueToProcess: any[] = [];
  try {
    const dueRows: any = await conn.execute(
      `SELECT * FROM social_posts WHERE scheduled_at <= ? AND status = 'pending'`,
      [istNowFormatted]
    );

    if (Array.isArray(dueRows)) {
      queueToProcess = dueRows.map((r: any) => ({
        id: r.id,
        studentName: r.title,
        imageUrl: r.image_url,
        caption: r.caption,
        platforms: typeof r.platforms === 'string' ? JSON.parse(r.platforms) : r.platforms,
        scheduledDate: String(r.scheduled_at).slice(0, 10),
        scheduledTime: String(r.scheduled_at).slice(11, 16),
        source: 'tidb'
      }));
    }
  } catch (err) {
    console.error('TiDB fetch error:', err);
  }

  // 2. Fallback to local queue if TiDB has no pending posts
  if (queueToProcess.length === 0) {
    for (const p of getLocalQueue()) {
      if (p.scheduledDate === istDateStr && istTimeStr >= (p.scheduledTime || '00:00')) {
        queueToProcess.push({ ...p, source: 'local_json' });
      }
    }
  }

  // Status check only
  if (isDryRun) {
    let pendingCount = 0;
    try {
      const pRows: any = await conn.execute(`SELECT COUNT(*) AS cnt FROM social_posts WHERE status = 'pending'`);
      pendingCount = pRows[0]?.cnt || 0;
    } catch (_) {}

    return new Response(
      JSON.stringify({
        status: 'online',
        database: 'TiDB Cloud Serverless (Active)',
        istCurrentDate: istDateStr,
        istCurrentTime: istTimeStr,
        tokenConfigured: !!token,
        pendingInTiDB: pendingCount,
        dueForDispatch: queueToProcess.length
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const results: any[] = [];

  for (const post of queueToProcess) {
    console.log(`[Cloud Cron] Processing post: ${post.id} (${post.studentName}) at ${istTimeStr} IST`);

    const postResult: any = {
      id: post.id,
      studentName: post.studentName,
      scheduledDate: post.scheduledDate,
      instagram: null,
      facebook: null
    };

    // 1. INSTAGRAM DISPATCH
    if (post.platforms.includes('instagram')) {
      try {
        const cRes = await fetch(`https://graph.facebook.com/v21.0/${igId}/media`, {
          method: 'POST',
          body: new URLSearchParams({
            image_url: post.imageUrl,
            caption: post.caption,
            access_token: token
          })
        });
        const cData = await cRes.json();

        if (cData.id) {
          await new Promise((r) => setTimeout(r, 4000));
          const pRes = await fetch(`https://graph.facebook.com/v21.0/${igId}/media_publish`, {
            method: 'POST',
            body: new URLSearchParams({
              creation_id: cData.id,
              access_token: token
            })
          });
          const pData = await pRes.json();
          postResult.instagram = {
            status: pData.id ? 'success' : 'failed',
            mediaId: pData.id || null,
            error: pData.error || null
          };
        } else {
          postResult.instagram = { status: 'failed', error: cData.error };
        }
      } catch (err: any) {
        postResult.instagram = { status: 'error', message: err.message };
      }
    }

    // 2. FACEBOOK DISPATCH
    if (post.platforms.includes('facebook')) {
      try {
        const fbRes = await fetch(`https://graph.facebook.com/v21.0/${pageId}/photos`, {
          method: 'POST',
          body: new URLSearchParams({
            url: post.imageUrl,
            caption: post.caption,
            access_token: token
          })
        });
        const fbData = await fbRes.json();
        postResult.facebook = {
          status: fbData.id ? 'success' : 'failed',
          photoId: fbData.id || null,
          error: fbData.error || null
        };
      } catch (err: any) {
        postResult.facebook = { status: 'error', message: err.message };
      }
    }

    results.push(postResult);

    // 3. UPDATE STATUS IN TIDB CLOUD DATABASE
    try {
      const igResStr = postResult.instagram?.mediaId ? `https://www.instagram.com/p/${postResult.instagram.mediaId}/` : JSON.stringify(postResult.instagram);
      const fbResStr = postResult.facebook?.photoId ? `https://www.facebook.com/photo.php?fbid=${postResult.facebook.photoId}` : JSON.stringify(postResult.facebook);
      await conn.execute(
        `UPDATE social_posts SET status = 'published', ig_result = ?, fb_result = ?, published_at = NOW() WHERE id = ?`,
        [igResStr, fbResStr, post.id]
      );
    } catch (dbErr) {
      console.error('Failed to update TiDB status:', dbErr);
    }

    // 4. REAL-TIME TELEGRAM NOTIFICATION TO ADMIN
    try {
      const adminChatId = process.env.ADMIN_TELEGRAM_CHAT_ID || '847419012';
      const botToken = process.env.TELEGRAM_BOT_TOKEN || '8866326692:AAEwyXC3ih8mmykNcT_UYvujUj1ZH-iQMJQ';

      let igLink = 'स्किप केले';
      if (postResult.instagram?.status === 'success') {
        igLink = `https://www.instagram.com/p/${postResult.instagram.mediaId}/`;
      } else if (postResult.instagram?.error) {
        igLink = `Error: ${JSON.stringify(postResult.instagram.error)}`;
      }

      let fbLink = 'स्किप केले';
      if (postResult.facebook?.status === 'success') {
        fbLink = `https://www.facebook.com/photo.php?fbid=${postResult.facebook.photoId}`;
      } else if (postResult.facebook?.error) {
        fbLink = `Error: ${JSON.stringify(postResult.facebook.error)}`;
      }

      const notifyMsg =
        `🎉 <b>अभिनंदन! तुमची पोस्ट लाईव्ह झाली आहे!</b> 🚀\n\n` +
        `👤 <b>कंटेंट / विषय:</b> ${post.studentName || post.id}\n` +
        `📅 <b>वेळ:</b> ${istDateStr} | ${istTimeStr} IST\n\n` +
        `📸 <b>Instagram:</b> ${igLink}\n` +
        `📘 <b>Facebook:</b> ${fbLink}\n\n` +
        `⚡ <i>100% Zero-PC TiDB Cloud Engine द्वारे स्वयंचलित पब्लिश झाले.</i>`;

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: adminChatId,
          text: notifyMsg,
          parse_mode: 'HTML'
        })
      });
    } catch (tgErr) {
      console.error('Failed to send Telegram notification from cron:', tgErr);
    }
  }

  return new Response(
    JSON.stringify({
      timestamp: new Date().toISOString(),
      istDate: istDateStr,
      istTime: istTimeStr,
      processedCount: results.length,
      results
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};

export const POST = GET;
