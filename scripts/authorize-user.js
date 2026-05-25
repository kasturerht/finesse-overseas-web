// scripts/authorize-user.js
// 👑 GOD-LEVEL USER OAUTH2 AUTHENTICATION Bypasses the GSC Service Account Bug
// Run this script locally to authorize the Google Indexing API under your own Owner account!

import fs from 'fs';
import path from 'path';
import http from 'http';
import { google } from 'googleapis';

const CREDENTIALS_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKENS_FILE = path.join(process.cwd(), 'oauth-tokens.json');

async function main() {
  console.log('\n===============================================================');
  console.log('🛡️  Finesse Indexer: Personal Owner OAuth2 Consent Flow');
  console.log('===============================================================\n');

  if (!fs.existsSync(CREDENTIALS_FILE)) {
    console.error('❌ ERROR: oauth-client-secret.json not found in the root directory!');
    console.log('\n💡 To generate this file:');
    console.log('1. Go to Google Cloud Console: https://console.cloud.google.com/apis/credentials');
    console.log('2. Click "+ CREATE CREDENTIALS" -> "OAuth client ID".');
    console.log('3. Select Application Type: "Desktop app" (Desktop application).');
    console.log('4. Name it "Finesse Indexer Desktop" and click "Create".');
    console.log('5. Download the JSON file, rename it to "oauth-client-secret.json", and put it in your project root.');
    console.log('6. Then, re-run this script!\n');
    process.exit(1);
  }

  let credentials;
  try {
    credentials = JSON.parse(fs.readFileSync(CREDENTIALS_FILE, 'utf8'));
  } catch (err) {
    console.error('❌ ERROR: Failed to parse oauth-client-secret.json as valid JSON.', err.message);
    process.exit(1);
  }

  const web = credentials.installed || credentials.web;
  if (!web) {
    console.error('❌ ERROR: Invalid credentials file structure. Must contain "installed" or "web" config.');
    process.exit(1);
  }

  const { client_id, client_secret, redirect_uris } = web;
  const redirectUri = 'http://localhost:3000/oauth2callback';

  const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirectUri
  );

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline', // Requests a refresh token for long-term automated use
    prompt: 'consent',     // Forces consent screen to ensure refresh token is returned
    scope: ['https://www.googleapis.com/auth/indexing'],
  });

  console.log('🔑 STEP 1: Click the link below to authorize with your GSC owner account:');
  console.log('\x1b[36m%s\x1b[0m', authUrl);
  console.log('\n🌐 STEP 2: Waiting for browser authentication callback on port 3000...');

  const server = http.createServer(async (req, res) => {
    try {
      if (req.url.startsWith('/oauth2callback')) {
        const urlObj = new URL(req.url, 'http://localhost:3000');
        const code = urlObj.searchParams.get('code');

        if (!code) {
          res.writeHead(400, { 'Content-Type': 'text/html' });
          res.end('<h1>Auth Failed</h1><p>No authorization code found.</p>');
          console.error('❌ Callback failed: Authorization code not found in request.');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
          <html>
            <body style="font-family: system-ui, sans-serif; background: #0f0f10; color: #e4e4e7; text-align: center; padding-top: 100px;">
              <div style="background: #18181b; padding: 40px; border-radius: 12px; display: inline-block; box-shadow: 0 4px 20px rgba(0,0,0,0.5); border: 1px solid #27272a;">
                <h1 style="color: #10b981; margin-bottom: 10px;">👑 Authentication Successful!</h1>
                <p style="color: #a1a1aa; font-size: 16px;">Antigravity has securely retrieved your OAuth2 tokens.</p>
                <p style="color: #71717a; font-size: 14px;">You can close this tab and return to the terminal.</p>
              </div>
            </body>
          </html>
        `);
        
        server.close();

        console.log('⏳ Exchanging authorization code for tokens...');
        const { tokens } = await oauth2Client.getToken(code);
        
        fs.writeFileSync(TOKENS_FILE, JSON.stringify(tokens, null, 2));
        console.log('\n🎉 SUCCESS! Securely saved OAuth2 tokens to: oauth-tokens.json');
        console.log('🚀 You can now run "npm run ping-google" and it will use your owner credentials directly!');
        console.log('================================================================================\n');
        process.exit(0);
      }
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error during token exchange: ' + err.message);
      console.error('❌ ERROR during token exchange:', err.message);
      process.exit(1);
    }
  }).listen(3000);
}

main().catch(err => {
  console.error('💥 Fatal error running OAuth workflow:', err);
  process.exit(1);
});
