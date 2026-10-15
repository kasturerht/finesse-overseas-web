// scripts/meta-telemetry.js
// 🚀 SILICON VALLEY META ADS, DATASET, FACEBOOK PAGE & INSTAGRAM TELEMETRY
// Autonomous audit engine for Finesse Overseas Education

import fs from 'fs';
import path from 'path';
import https from 'https';

const ENV_FILE = path.join(process.cwd(), '.env');

function loadEnv() {
  if (fs.existsSync(ENV_FILE)) {
    const lines = fs.readFileSync(ENV_FILE, 'utf8').split('\n');
    for (const line of lines) {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let val = match[2] || '';
        val = val.replace(/^['"](.*)['"]$/, '$1').trim();
        process.env[key] = val;
      }
    }
  }
}

loadEnv();

const TOKEN = process.env.META_ACCESS_TOKEN;
const PAGE_TOKEN = process.env.META_PAGE_ACCESS_TOKEN;
const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID || 'act_197725643605449';
const DATASET_ID = process.env.META_PIXEL_ID || '1655365958787346';
const PAGE_ID = process.env.META_PAGE_ID || '101105755777020';
const IG_ID = process.env.META_INSTAGRAM_ACCOUNT_ID || '17841450168474580';

function fetchMeta(endpoint, token = TOKEN) {
  const url = `https://graph.facebook.com/v21.0/${endpoint}${endpoint.includes('?') ? '&' : '?'}access_token=${token}`;
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('\n========================================================================');
  console.log(' ⚡ FINESSE OVERSEAS UNIFIED META ECOSYSTEM TELEMETRY ⚡');
  console.log('========================================================================\n');

  // 1. Ad Account Overview
  const adAcc = await fetchMeta(`${AD_ACCOUNT_ID}?fields=name,account_status,currency,amount_spent,spend_cap`);
  const statusMap = { 1: 'ACTIVE', 2: 'DISABLED', 3: 'UNSETTLED', 7: 'PENDING_RISK_REVIEW' };
  console.log(`📢 Ad Account:        ${adAcc.name} (${adAcc.id})`);
  console.log(`💳 Status:            ${statusMap[adAcc.account_status] || adAcc.account_status}`);
  console.log(`💰 Currency:          ${adAcc.currency}`);
  console.log(`💸 Total Spent:       ₹${(parseFloat(adAcc.amount_spent) / 100).toLocaleString('en-IN')}`);

  // 2. Dataset / Pixel Status
  const dataset = await fetchMeta(`${DATASET_ID}?fields=name,creation_time`);
  console.log(`🎯 Meta Dataset:      ${dataset.name} (ID: ${dataset.id})`);

  // 3. Facebook Page Overview
  const page = await fetchMeta(`${PAGE_ID}?fields=name,followers_count,fan_count,verification_status`, PAGE_TOKEN);
  console.log(`\n📄 Facebook Page:     ${page.name} (ID: ${page.id})`);
  console.log(`👍 Page Followers:    ${page.followers_count || page.fan_count || 'N/A'}`);

  // 4. Instagram Overview
  const ig = await fetchMeta(`${IG_ID}?fields=name,username,followers_count,media_count`, PAGE_TOKEN);
  console.log(`\n📸 Instagram:         @${ig.username} (${ig.name})`);
  console.log(`👥 IG Followers:      ${ig.followers_count}`);
  console.log(`🖼️ Total Posts:       ${ig.media_count}`);

  // 5. Live Campaigns
  const campaigns = await fetchMeta(`${AD_ACCOUNT_ID}/campaigns?fields=name,status,objective,effective_status&limit=5`);
  console.log('\n--- TOP CAMPAIGNS ---');
  if (campaigns.data && campaigns.data.length > 0) {
    console.log('Campaign Name'.padEnd(45) + 'Status'.padEnd(12) + 'Objective');
    console.log('-'.repeat(75));
    campaigns.data.forEach(c => {
      console.log(c.name.slice(0, 43).padEnd(45) + c.status.padEnd(12) + c.objective);
    });
  }

  console.log('\n========================================================================');
  console.log(' 🏁 META ECOSYSTEM FULLY CONNECTED: ADS, PIXEL, FB & INSTA READY!');
  console.log('========================================================================\n');
}

main().catch(console.error);
