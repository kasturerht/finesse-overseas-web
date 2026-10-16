// scripts/gmb-telemetry.js
// 📊 Google Business Profile (GMB) Telemetry & Management Engine
// Inspects Finesse Overseas Education GMB listing, reviews, and updates.

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const CREDENTIALS_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKENS_FILE = path.join(process.cwd(), 'gmb-tokens.json');

async function main() {
  if (!fs.existsSync(TOKENS_FILE)) {
    console.error('❌ GMB tokens not found! Run "node scripts/gmb-auth.js" first.');
    process.exit(1);
  }

  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_FILE, 'utf8'));
  const web = credentials.installed || credentials.web;
  const tokens = JSON.parse(fs.readFileSync(TOKENS_FILE, 'utf8'));

  const oauth2Client = new google.auth.OAuth2(
    web.client_id,
    web.client_secret,
    'http://localhost:3000/oauth2callback'
  );
  oauth2Client.setCredentials(tokens);

  // Handle token refresh automatically
  oauth2Client.on('tokens', (newTokens) => {
    const updated = { ...tokens, ...newTokens };
    fs.writeFileSync(TOKENS_FILE, JSON.stringify(updated, null, 2));
    console.log('🔄 OAuth token refreshed and saved.');
  });

  const accessToken = (await oauth2Client.getAccessToken()).token;

  console.log('\n===============================================================');
  console.log('📍 FINESSE GOOGLE BUSINESS PROFILE TELEMETRY & AUDIT 📍');
  console.log('===============================================================\n');

  // 1. Fetch Accounts
  console.log('🔍 1. Fetching GMB Accounts...');
  const accountsRes = await fetch('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  
  const accountsData = await accountsRes.json();
  if (accountsData.error) {
    console.error('❌ Error fetching accounts:', accountsData.error);
    return;
  }

  console.log(`✔ Found ${accountsData.accounts ? accountsData.accounts.length : 0} account(s).`);
  console.log(JSON.stringify(accountsData, null, 2));

  if (!accountsData.accounts || accountsData.accounts.length === 0) {
    console.log('⚠️ No Business Profile accounts found under this Google ID.');
    return;
  }

  const account = accountsData.accounts[0];
  const accountName = account.name; // e.g. accounts/1234567890

  // 2. Fetch Locations
  console.log(`\n🔍 2. Fetching Locations for account: ${accountName}...`);
  const locationsRes = await fetch(`https://mybusinessbusinessinformation.googleapis.com/v1/${accountName}/locations?readMask=name,title,storefrontAddress,websiteUri,phoneNumbers,categories,metadata`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  const locationsData = await locationsRes.json();
  console.log(JSON.stringify(locationsData, null, 2));

  // Save telemetry report
  const auditReport = {
    timestamp: new Date().toISOString(),
    account: accountsData,
    locations: locationsData
  };
  fs.writeFileSync(path.join(process.cwd(), 'gmb-audit-report.json'), JSON.stringify(auditReport, null, 2));
  console.log('\n💾 Saved GMB telemetry report to: gmb-audit-report.json');
}

main().catch(err => {
  console.error('💥 Fatal error in GMB telemetry:', err);
  process.exit(1);
});
