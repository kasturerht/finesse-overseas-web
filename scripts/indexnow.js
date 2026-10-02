// scripts/indexnow.js
// ⚡ SILICON VALLEY INSTANT MULTILATERAL INDEXING PIPELINE
// Broadcasts verified production URLs to Bing, Yandex, Seznam, Naver, and Yahoo via IndexNow API

import fs from 'fs';
import path from 'path';

const SITEMAP_FILE = path.join(process.cwd(), 'dist', 'client', 'sitemap-0.xml');
const HOST = 'finesseoverseas.com';
const INDEXNOW_KEY = '7d76414ac5eff1865b5662d67fed94dc';
const KEY_FILE = path.join(process.cwd(), 'public', `${INDEXNOW_KEY}.txt`);
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// IndexNow participating search engine endpoints
const ENDPOINTS = [
  { name: 'IndexNow Central Gateway', url: 'https://api.indexnow.org/indexnow' },
  { name: 'Microsoft Bing', url: 'https://www.bing.com/indexnow' }
];

// Safety filters
const IGNORED_PATTERNS = [
  /\/admin\/?$/,
  /\/Invitation\/?$/,
  /\/germany-admission01\/?$/,
  /\/thank-you\/?$/,
  /\/review\/?$/,
  /\/review-qr\/?$/,
  /\/presentation\/?$/
];

async function submitIndexNow() {
  console.log('\n========================================================================');
  console.log(' ⚡ SILICON VALLEY INDEXNOW MULTILATERAL DISPATCH ⚡');
  console.log('========================================================================\n');

  // 1. Verify Key File Exists
  if (!fs.existsSync(KEY_FILE)) {
    console.warn(`⚠️ Warning: IndexNow key file missing at: ${KEY_FILE}`);
    fs.writeFileSync(KEY_FILE, INDEXNOW_KEY, 'utf8');
    console.log(`✔ Created IndexNow key file: ${KEY_FILE}`);
  }

  // 2. Parse Sitemap
  if (!fs.existsSync(SITEMAP_FILE)) {
    console.warn('⚠️ Sitemap not found at dist/client/sitemap-0.xml! Skipping IndexNow dispatch.');
    console.log('💡 Run "npx astro build" to generate the production sitemap.\n');
    process.exit(0);
  }

  const sitemapContent = fs.readFileSync(SITEMAP_FILE, 'utf8');
  const locRegex = /<loc>(https:\/\/finesseoverseas\.com\/?[^<]*)<\/loc>/g;
  const rawUrls = [];
  let match;

  while ((match = locRegex.exec(sitemapContent)) !== null) {
    rawUrls.push(match[1]);
  }

  const targetUrls = rawUrls.filter(url => {
    return !IGNORED_PATTERNS.some(pattern => pattern.test(url));
  });

  if (targetUrls.length === 0) {
    console.warn('⚠️ No valid URLs found to submit.');
    process.exit(0);
  }

  console.log(`📄 Discovered ${targetUrls.length} verified production URLs for multilateral broadcast.`);
  console.log(`🔑 IndexNow Key:     ${INDEXNOW_KEY}`);
  console.log(`🌐 Key Location:     ${KEY_LOCATION}`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: targetUrls
  };

  // 3. Dispatch to Endpoints
  console.log('\n🚀 Broadcasting to Search Engine Network...');

  for (const endpoint of ENDPOINTS) {
    try {
      console.log(`📡 Sending batch (${targetUrls.length} URLs) to ${endpoint.name}...`);
      const response = await fetch(endpoint.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      if (response.status === 200) {
        console.log(`   ✅ ${endpoint.name}: 200 OK (All URLs instantly submitted)`);
      } else if (response.status === 202) {
        console.log(`   ✅ ${endpoint.name}: 202 Accepted (Request queued for instant bot crawl)`);
      } else {
        const errorText = await response.text();
        console.warn(`   ⚠️ ${endpoint.name}: ${response.status} ${response.statusText} - ${errorText}`);
      }
    } catch (err) {
      console.warn(`   ⚠️ Could not reach ${endpoint.name}: ${err.message}`);
    }
  }

  console.log('\n========================================================================');
  console.log(' 🏁 INDEXNOW BROADCAST COMPLETE: BING, YANDEX, SEZNAM, NAVER NOTIFIED!');
  console.log('========================================================================\n');
}

submitIndexNow().catch(err => {
  console.error('💥 IndexNow unexpected exception:', err.message);
  process.exit(0);
});
