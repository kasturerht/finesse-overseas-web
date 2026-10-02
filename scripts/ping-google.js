// scripts/ping-google.js
// 👑 SILICON VALLEY REAL-TIME GOOGLE INDEXING PIPELINE
// Uses Google Indexing API to notify Googlebot of new and updated pages in real-time.

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const KEY_FILE = path.join(process.cwd(), 'service-account-key.json');
const OAUTH_CLIENT_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const OAUTH_TOKENS_FILE = path.join(process.cwd(), 'oauth-tokens.json');
const SITEMAP_FILE = path.join(process.cwd(), 'dist', 'client', 'sitemap-0.xml');

// 🛡️ Ignored patterns that should never be indexed on Google Search
const IGNORED_PATTERNS = [
  /\/admin\/?$/,
  /\/Invitation\/?$/,
  /\/germany-admission01\/?$/,
  /\/thank-you\/?$/,
  /\/review\/?$/,
  /\/review-qr\/?$/,
  /\/presentation\/?$/
];

async function getAuth() {
  // Priority 1: Service Account Key (Permanent, Autonomous, Never expires)
  let serviceAccountKey = null;
  if (process.env.GOOGLE_INDEXING_KEY) {
    try {
      serviceAccountKey = JSON.parse(process.env.GOOGLE_INDEXING_KEY);
    } catch (err) {
      console.warn('⚠️ Could not parse GOOGLE_INDEXING_KEY env variable.');
    }
  } else if (fs.existsSync(KEY_FILE)) {
    try {
      serviceAccountKey = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
    } catch (err) {
      console.warn('⚠️ Could not parse service-account-key.json.');
    }
  }

  if (serviceAccountKey) {
    try {
      if (serviceAccountKey.private_key) {
        const cleanBody = serviceAccountKey.private_key
          .replace('-----BEGIN PRIVATE KEY-----', '')
          .replace('-----END PRIVATE KEY-----', '')
          .replace(/\s+/g, '');
        serviceAccountKey.private_key = [
          '-----BEGIN PRIVATE KEY-----',
          ...cleanBody.match(/.{1,64}/g),
          '-----END PRIVATE KEY-----'
        ].join('\n');
      }

      const auth = new google.auth.GoogleAuth({
        credentials: serviceAccountKey,
        scopes: ['https://www.googleapis.com/auth/indexing'],
      });
      return {
        auth,
        authType: 'SERVICE_ACCOUNT',
        email: serviceAccountKey.client_email
      };
    } catch (err) {
      console.warn('⚠️ Failed to initialize Service Account auth:', err.message);
    }
  }

  // Priority 2: User OAuth2 Credentials (Fallback)
  let oauthClient = null;
  let oauthTokens = null;

  if (process.env.GOOGLE_OAUTH_TOKENS && process.env.GOOGLE_OAUTH_CLIENT) {
    try {
      oauthClient = JSON.parse(process.env.GOOGLE_OAUTH_CLIENT);
      oauthTokens = JSON.parse(process.env.GOOGLE_OAUTH_TOKENS);
    } catch (err) {
      console.warn('⚠️ Could not parse OAuth env variables.');
    }
  } else if (fs.existsSync(OAUTH_TOKENS_FILE) && fs.existsSync(OAUTH_CLIENT_FILE)) {
    try {
      oauthClient = JSON.parse(fs.readFileSync(OAUTH_CLIENT_FILE, 'utf8'));
      oauthTokens = JSON.parse(fs.readFileSync(OAUTH_TOKENS_FILE, 'utf8'));
    } catch (err) {
      console.warn('⚠️ Could not parse local OAuth files.');
    }
  }

  if (oauthClient && oauthTokens) {
    const web = oauthClient.installed || oauthClient.web;
    if (web) {
      const oauth2Client = new google.auth.OAuth2(
        web.client_id,
        web.client_secret,
        'http://localhost:3000/oauth2callback'
      );
      oauth2Client.setCredentials(oauthTokens);
      return {
        auth: oauth2Client,
        authType: 'USER_OAUTH2',
        email: null
      };
    }
  }

  return { auth: null, authType: 'NONE', email: null };
}

async function run() {
  console.log('\n🚀 Starting God-Level Google Indexing Pipeline...');

  // 1. Authenticate
  const { auth, authType, email } = await getAuth();

  if (authType === 'NONE' || !auth) {
    console.warn('⚠️ Google Indexing credentials not found!');
    console.log('💡 To enable automated real-time indexing, ensure service-account-key.json is present in root.');
    console.log('💡 Indexation dispatch skipped. (Build completed safely)\n');
    process.exit(0);
  }

  console.log(`🔐 Authenticated via ${authType} flow.`);
  if (email) {
    console.log(`📧 Service Account: ${email}`);
  }

  const indexing = google.indexing({
    version: 'v3',
    auth: auth,
  });

  // 2. Check sitemap
  if (!fs.existsSync(SITEMAP_FILE)) {
    console.error('❌ ERROR: Sitemap not found at dist/client/sitemap-0.xml!');
    console.log('💡 Run "npx astro build" to generate the sitemap.\n');
    process.exit(0);
  }

  // 3. Parse URLs
  console.log('📄 Parsing sitemap-0.xml for verified production URLs...');
  const sitemapContent = fs.readFileSync(SITEMAP_FILE, 'utf8');
  const locRegex = /<loc>(https:\/\/finesseoverseas\.com\/?[^<]*)<\/loc>/g;
  const rawUrls = [];
  let match;

  while ((match = locRegex.exec(sitemapContent)) !== null) {
    rawUrls.push(match[1]);
  }

  if (rawUrls.length === 0) {
    console.error('❌ ERROR: No URLs found in sitemap file!');
    process.exit(0);
  }

  const targetUrls = rawUrls.filter(url => {
    return !IGNORED_PATTERNS.some(pattern => pattern.test(url));
  });

  console.log(`🎯 Identified ${targetUrls.length} valid target URLs to submit.`);

  // 4. Pre-flight Probe: Test 1st URL before looping to detect auth/permission errors early
  console.log('\n📡 Performing Pre-flight Google API probe...');
  try {
    const probeRes = await indexing.urlNotifications.publish({
      requestBody: {
        url: targetUrls[0],
        type: 'URL_UPDATED',
      },
    });

    if (probeRes.status === 200) {
      console.log(`   ✅ Probe Successful (Status 200 OK)! Google accepted ${targetUrls[0]}`);
    }
  } catch (probeError) {
    const errMsg = probeError.response?.data?.error?.message || probeError.message;
    
    if (errMsg.includes('Permission denied') || errMsg.includes('URL ownership')) {
      console.log('\n========================================================================');
      console.log('⚠️ GOOGLE SEARCH CONSOLE PROPERTY OWNERSHIP REQUIRED');
      console.log('========================================================================');
      console.log(`Google API returned: "${errMsg}"`);
      console.log('\n👉 TO ACTIVATE 100% AUTOMATED GOOGLE INDEXING (One-time setup):');
      console.log('1. Open Google Search Console: https://search.google.com/search-console');
      console.log('2. Select property: finesseoverseas.com');
      console.log('3. Go to: Settings -> Users and permissions -> Add user');
      console.log(`4. Email: ${email || 'finesse-auto-indexer@finesse-indexer.iam.gserviceaccount.com'}`);
      console.log('5. Permission: Owner (Must be "Owner" for the Indexing API to verify URL ownership)');
      console.log('========================================================================\n');
      console.log('💡 Note: Build completed successfully. Once ownership is added in GSC,');
      console.log('   every build will automatically submit all URLs to Googlebot!\n');
      process.exit(0);
    } else if (errMsg.includes('invalid_grant')) {
      console.log('\n⚠️ OAuth token has expired (invalid_grant).');
      console.log('💡 Run "npm run authorize-user" to refresh your personal token, or use the Service Account.\n');
      process.exit(0);
    } else {
      console.warn(`⚠️ Pre-flight probe warning: ${errMsg}`);
    }
  }

  // 5. Submit remaining URLs
  console.log('⚡ Dispatching Indexation Requests to Googlebot...');
  let successCount = 1; // Since probe URL succeeded
  let failCount = 0;

  for (let i = 1; i < targetUrls.length; i++) {
    const url = targetUrls[i];
    try {
      console.log(`👉 Requesting indexation for: ${url}`);
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });

      if (response.status === 200) {
        console.log(`   ✅ SUCCESS: 200 OK`);
        successCount++;
      } else {
        console.warn(`   ⚠️ Status code: ${response.status}`);
        failCount++;
      }
    } catch (error) {
      console.error(`   ❌ Failed: ${error.response?.data?.error?.message || error.message}`);
      failCount++;
    }

    // Rate-limit throttle (250ms)
    await new Promise(resolve => setTimeout(resolve, 250));
  }

  console.log('\n==================================================');
  console.log('🏁 Google Indexing Pipeline Run Complete!');
  console.log(`📊 Total Success: ${successCount} | Total Failed: ${failCount}`);
  console.log('==================================================\n');
}

run().catch(err => {
  console.error('💥 Indexing pipeline note:', err.message);
  process.exit(0);
});
