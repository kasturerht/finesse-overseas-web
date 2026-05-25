// scripts/ping-google.js
// 👑 GOD-LEVEL AUTOMATED GOOGLE INDEXING CLIENT
// Uses Google Indexing API to forcefully crawl and index Finesse Overseas pages in real-time.

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const KEY_FILE = path.join(process.cwd(), 'service-account-key.json');
const SITEMAP_FILE = path.join(process.cwd(), 'dist', 'client', 'sitemap-0.xml');

// 🛡️ Ignored patterns that should never be indexed on Google Search
const IGNORED_PATTERNS = [
  /\/admin\/?$/,
  /\/Invitation\/?$/,
  /\/germany-admission01\/?$/,
  /\/thank-you\/?$/
];

async function run() {
  console.log('\n🚀 Starting God-Level Google Indexing Pipeline...');

  // 1. Load GCP Service Account Key (from file or environment variable)
  let key;
  if (process.env.GOOGLE_INDEXING_KEY) {
    console.log('🔑 Loading Google Indexing Key from environment variable...');
    try {
      key = JSON.parse(process.env.GOOGLE_INDEXING_KEY);
    } catch (err) {
      console.error('❌ ERROR parsing GOOGLE_INDEXING_KEY environment variable:', err.message);
      process.exit(0); // Exit safely to prevent breaking Vercel builds
    }
  } else if (fs.existsSync(KEY_FILE)) {
    console.log('🔑 Loading Google Indexing Key from service-account-key.json...');
    try {
      key = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
    } catch (err) {
      console.error('❌ ERROR parsing service-account-key.json:', err.message);
      process.exit(0); // Exit safely
    }
  } else {
    console.warn('⚠️ WARNING: Google Indexing key not found (no service-account-key.json or GOOGLE_INDEXING_KEY environment variable).');
    console.log('💡 Real-time indexation skipped. (Astro build succeeded safely)\n');
    process.exit(0); // Exit safely to prevent breaking Vercel builds
  }

  // 2. Check if the production build and sitemap exist
  if (!fs.existsSync(SITEMAP_FILE)) {
    console.error('❌ ERROR: Sitemap not found at dist/client/sitemap-0.xml!');
    console.log('💡 Please run "npm run build" first to compile the site and generate the sitemap.\n');
    process.exit(1);
  }

  // 3. Authenticate with Google Cloud APIs
  console.log('🔑 Authenticating with Google Cloud Indexing API...');
  let auth;
  try {
    // 🛡️ Fix OpenSSL private key parsing / DECODER unsupported issues (strictly formats to standard 64-char PEM)
    if (key && key.private_key) {
      const cleanBody = key.private_key
        .replace('-----BEGIN PRIVATE KEY-----', '')
        .replace('-----END PRIVATE KEY-----', '')
        .replace(/\s+/g, ''); // strip all whitespaces/newlines

      // Reconstruct standard 64-character PEM format
      key.private_key = [
        '-----BEGIN PRIVATE KEY-----',
        ...cleanBody.match(/.{1,64}/g),
        '-----END PRIVATE KEY-----'
      ].join('\n');
    }

    auth = new google.auth.GoogleAuth({
      credentials: key,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });
  } catch (error) {
    console.error('❌ Authentication configuration failed:', error.message);
    process.exit(1);
  }

  const indexing = google.indexing({
    version: 'v3',
    auth: auth,
  });

  // 4. Parse URLs from sitemap-0.xml
  console.log('📄 Parsing sitemap-0.xml for valid production URLs...');
  const sitemapContent = fs.readFileSync(SITEMAP_FILE, 'utf8');
  const locRegex = /<loc>(https:\/\/finesseoverseas\.com\/[^<]+)<\/loc>/g;
  const rawUrls = [];
  let match;

  while ((match = locRegex.exec(sitemapContent)) !== null) {
    rawUrls.push(match[1]);
  }

  if (rawUrls.length === 0) {
    console.error('❌ ERROR: No URLs found inside the sitemap file!');
    process.exit(1);
  }

  // 5. Filter out ignored utility routes
  const targetUrls = rawUrls.filter(url => {
    return !IGNORED_PATTERNS.some(pattern => pattern.test(url));
  });

  console.log(`🎯 Identified ${targetUrls.length} valid target URLs to submit (out of ${rawUrls.length} total sitemap URLs).`);

  // 6. Submit URLs sequentially to the Indexing API
  console.log('\n⚡ Dispatching Indexation Requests...');
  let successCount = 0;
  let failCount = 0;

  for (const url of targetUrls) {
    try {
      console.log(`👉 Requesting indexation for: ${url}`);
      
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED', // Can be URL_UPDATED or URL_DELETED
        },
      });

      if (response.status === 200) {
        console.log(`   ✅ SUCCESS: Subscribed for crawl. Google API Response status: 200 OK`);
        successCount++;
      } else {
        console.warn(`   ⚠️ WARNING: Received non-200 status code: ${response.status}`);
        failCount++;
      }
    } catch (error) {
      console.error(`   ❌ FAILED to submit ${url}:`, error.response?.data?.error?.message || error.message);
      failCount++;
    }

    // Delay of 250ms to prevent spamming/rate-limit triggers
    await new Promise(resolve => setTimeout(resolve, 250));
  }

  console.log('\n==================================================');
  console.log('🏁 Google Indexing Pipeline Run Complete!');
  console.log(`📊 Total Success: ${successCount} | Total Failed: ${failCount}`);
  console.log('==================================================\n');
}

run().catch(err => {
  console.error('💥 FATAL PIPELINE EXCEPTION:', err);
  process.exit(1);
});
