// scripts/gmb-auth.js
// 📍 Autonomous OAuth 2.0 Authenticator for Google Business Profile (GMB) API
// Authorizes Finesse Overseas Education GMB Listing Management (Reviews, Posts, Performance, Info)

import fs from 'fs';
import path from 'path';
import http from 'http';
import { google } from 'googleapis';

const CREDENTIALS_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKENS_FILE = path.join(process.cwd(), 'gmb-tokens.json');

async function main() {
  if (!fs.existsSync(CREDENTIALS_FILE)) {
    console.error('❌ ERROR: oauth-client-secret.json not found in root directory!');
    process.exit(1);
  }

  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_FILE, 'utf8'));
  const web = credentials.installed || credentials.web;
  const { client_id, client_secret } = web;

  const PORT = 3000;
  const redirectUri = `http://localhost:${PORT}/oauth2callback`;

  const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirectUri
  );

  const scopes = [
    'https://www.googleapis.com/auth/business.manage',
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ];

  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: scopes
  });

  console.log('\n===============================================================');
  console.log('📍 FINESSE GOOGLE BUSINESS PROFILE (GMB) OAUTH 2.0 CONNECT 📍');
  console.log('===============================================================\n');
  console.log('👉 Click or copy this link into your browser to authorize GMB:\n');
  console.log(authUrl);
  console.log('\n🌐 Waiting for Google authentication callback on port 3000...');

  const server = http.createServer(async (req, res) => {
    try {
      if (req.url.startsWith('/oauth2callback')) {
        const urlObj = new URL(req.url, `http://localhost:${PORT}`);
        const code = urlObj.searchParams.get('code');
        const error = urlObj.searchParams.get('error');

        if (error) {
          res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(`
            <html>
              <body style="font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding-top: 80px;">
                <div style="background: #1e293b; padding: 40px; border-radius: 16px; display: inline-block; max-width: 500px; border: 1px solid #ef4444;">
                  <h1 style="color: #ef4444; margin-bottom: 12px;">❌ Access Denied</h1>
                  <p style="color: #94a3b8; font-size: 16px;">Error: ${error}</p>
                </div>
              </body>
            </html>
          `);
          console.error(`❌ Google Auth Callback Error: ${error}`);
          server.close();
          process.exit(1);
        }

        if (!code) {
          res.writeHead(400, { 'Content-Type': 'text/html' });
          res.end('<h1>Auth Failed: No authorization code received.</h1>');
          return;
        }

        console.log('\n⏳ Exchanging authorization code for tokens...');
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        fs.writeFileSync(TOKENS_FILE, JSON.stringify(tokens, null, 2));
        console.log('✔ Successfully saved GMB tokens to: gmb-tokens.json');

        // Fetch User Info
        let userEmail = 'Google Account Owner';
        try {
          const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
          const userInfo = await oauth2.userinfo.get();
          userEmail = userInfo.data.email || userEmail;
          console.log(`👤 Connected as: ${userEmail} (${userInfo.data.name || ''})`);
        } catch (e) {
          console.log('ℹ Could not fetch user profile details:', e.message);
        }

        // Send Success HTML to Browser
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Google Business Profile Connected</title>
            </head>
            <body style="font-family: system-ui, -apple-system, sans-serif; background: #0b0f19; color: #f8fafc; text-align: center; padding: 80px 20px;">
              <div style="background: #131c31; padding: 48px; border-radius: 20px; display: inline-block; box-shadow: 0 20px 50px rgba(0,0,0,0.6); border: 1px solid #1e293b; max-width: 520px; width: 100%;">
                <div style="font-size: 48px; margin-bottom: 16px;">📍</div>
                <h1 style="color: #10b981; font-size: 26px; margin: 0 0 12px 0;">GMB Connected Successfully!</h1>
                <p style="color: #94a3b8; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                  Google Business Profile access for <strong>Finesse Overseas Education</strong> is now securely authenticated under:
                </p>
                <div style="background: #1e293b; padding: 12px 20px; border-radius: 8px; color: #38bdf8; font-weight: 600; font-family: monospace; margin-bottom: 24px;">
                  ${userEmail}
                </div>
                <p style="color: #64748b; font-size: 14px; margin: 0;">
                  You can safely close this browser window and return to chat.
                </p>
              </div>
            </body>
          </html>
        `);

        server.close();
        console.log('\n🎉 SUCCESS! Google Business Profile OAuth setup completed.');
        console.log('================================================================================\n');
        process.exit(0);
      }
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error during token exchange: ' + err.message);
      console.error('❌ ERROR during token exchange:', err.message);
      server.close();
      process.exit(1);
    }
  }).listen(PORT);
}

main().catch(err => {
  console.error('💥 Fatal error in GMB OAuth:', err);
  process.exit(1);
});
