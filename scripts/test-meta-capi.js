// scripts/test-meta-capi.js
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// Load .env
const envPath = path.resolve('.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  for (const line of envContent.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const match = trimmed.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      let value = match[2].trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      process.env[key] = value;
    }
  }
}

const token = process.env.META_ACCESS_TOKEN;
const pixelId = process.env.META_PIXEL_ID || '1655365958787346';

if (!token) {
  console.error("❌ META_ACCESS_TOKEN missing!");
  process.exit(1);
}

function sha256(val) {
  if (!val) return undefined;
  return crypto.createHash('sha256').update(val.trim().toLowerCase()).digest('hex');
}

async function testCapi() {
  console.log(`📡 Testing Meta Conversions API for Dataset ID: ${pixelId}...`);
  
  const testEventId = `test_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const currentTimestamp = Math.floor(Date.now() / 1000);

  const payload = {
    data: [
      {
        event_name: 'Lead',
        event_time: currentTimestamp,
        event_id: testEventId,
        event_source_url: 'https://finesseoverseas.com/contact',
        action_source: 'website',
        user_data: {
          em: [sha256('test.student@finesseoverseas.com')],
          ph: [sha256('919850069600')],
          fn: [sha256('TestStudent')],
          client_ip_address: '103.246.40.10',
          client_user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
        },
        custom_data: {
          content_name: 'Test CAPI Architecture 2026',
          content_category: 'Silicon Valley Architecture Validation',
          currency: 'INR',
          value: 0.00
        }
      }
    ],
    // If you have a test event code from Meta Events Manager test events tab, e.g. TEST1234, it can go here:
    // test_event_code: "..." 
  };

  const url = `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${encodeURIComponent(token)}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  console.log("Response Status:", res.status);
  console.log("Response Body:", JSON.stringify(data, null, 2));

  if (data.events_received >= 1) {
    console.log("✅ SUCCESS! Meta Conversions API received and verified the event!");
  } else {
    console.log("⚠️ Response did not indicate events_received:", data);
  }
}

testCapi().catch(err => {
  console.error("❌ Exception during test:", err);
});
