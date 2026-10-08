// scripts/growth-telemetry.js
// 🚀 SILICON VALLEY UNIFIED GROWTH & TELEMETRY ENGINE
// Integrates Google Search Console (GSC) + Google Analytics 4 (GA4)
// Autonomous real-time intelligence for Finesse Overseas Education

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const KEY_FILE = path.join(process.cwd(), 'service-account-key.json');
const PROPERTY_ID = 'properties/383411509';
const GSC_SITE_URL = 'sc-domain:finesseoverseas.com';

const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  blue: '\x1b[34m',
  gray: '\x1b[90m',
  white: '\x1b[37m'
};

async function main() {
  console.log(`\n${colors.bold}${colors.cyan}========================================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.white} ⚡ FINESSE OVERSEAS UNIFIED GROWTH INTELLIGENCE DASHBOARD (GSC + GA4) ⚡${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}========================================================================${colors.reset}\n`);

  if (!fs.existsSync(KEY_FILE)) {
    console.error(`${colors.red}❌ Error: service-account-key.json not found!${colors.reset}`);
    process.exit(1);
  }

  const key = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
  const auth = new google.auth.GoogleAuth({
    credentials: key,
    scopes: [
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/analytics.readonly'
    ]
  });

  const authClient = await auth.getClient();
  console.log(`🔐 Authenticated Service Account: ${colors.green}${key.client_email}${colors.reset}\n`);

  // 1. GA4 REALTIME ACTIVITY
  console.log(`${colors.bold}${colors.magenta}📡 [GA4] REAL-TIME ACTIVE VISITORS (Last 30 Mins)${colors.reset}`);
  console.log(`${colors.gray}------------------------------------------------------------------------${colors.reset}`);
  const analyticsdata = google.analyticsdata({ version: 'v1beta', auth });
  
  try {
    const rtRes = await analyticsdata.properties.runRealtimeReport({
      property: PROPERTY_ID,
      requestBody: {
        metrics: [{ name: 'activeUsers' }],
        dimensions: [{ name: 'country' }, { name: 'unifiedScreenName' }]
      }
    });

    if (rtRes.data.rows && rtRes.data.rows.length > 0) {
      rtRes.data.rows.forEach(r => {
        const country = r.dimensionValues[0].value || 'Global';
        const page = r.dimensionValues[1].value || '/';
        const users = r.metricValues[0].value;
        console.log(`   🟢 ${colors.bold}${users} user(s)${colors.reset} active from ${colors.cyan}${country}${colors.reset} on ${colors.yellow}${page}${colors.reset}`);
      });
    } else {
      console.log(`   ⚪ 0 active users currently on site.`);
    }
  } catch (err) {
    console.warn(`   ⚠️ GA4 Realtime error: ${err.message}`);
  }

  // 2. GA4 30-DAY TRAFFIC & TOP LANDING PAGES
  console.log(`\n${colors.bold}${colors.blue}📊 [GA4] TOP 10 VISITED PAGES (Last 30 Days)${colors.reset}`);
  console.log(`${colors.gray}------------------------------------------------------------------------${colors.reset}`);
  try {
    const reportRes = await analyticsdata.properties.runReport({
      property: PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' }
        ],
        dimensions: [{ name: 'pagePath' }],
        limit: 10
      }
    });

    if (reportRes.data.rows) {
      console.log(`   ${colors.dim}${'Path'.padEnd(50)} ${'Users'.padStart(8)} ${'Sessions'.padStart(10)} ${'Views'.padStart(8)}${colors.reset}`);
      reportRes.data.rows.forEach(r => {
        const p = r.dimensionValues[0].value;
        const u = r.metricValues[0].value;
        const s = r.metricValues[1].value;
        const v = r.metricValues[2].value;
        console.log(`   ${colors.yellow}${p.padEnd(50)}${colors.reset} ${u.padStart(8)} ${s.padStart(10)} ${v.padStart(8)}`);
      });
    }
  } catch (err) {
    console.warn(`   ⚠️ GA4 Report error: ${err.message}`);
  }

  // 3. GSC ORGANIC SEARCH QUERIES & RANKINGS
  console.log(`\n${colors.bold}${colors.green}🔍 [GSC] TOP 10 ORGANIC GOOGLE SEARCH QUERIES & RANKS (Last 28 Days)${colors.reset}`);
  console.log(`${colors.gray}------------------------------------------------------------------------${colors.reset}`);
  const searchconsole = google.searchconsole({ version: 'v1', auth });

  try {
    const today = new Date();
    const end = new Date(today.setDate(today.getDate() - 3)).toISOString().split('T')[0];
    const start = new Date(today.setDate(today.getDate() - 28)).toISOString().split('T')[0];

    const gscRes = await searchconsole.searchanalytics.query({
      siteUrl: GSC_SITE_URL,
      requestBody: {
        startDate: start,
        endDate: end,
        dimensions: ['query'],
        rowLimit: 10
      }
    });

    if (gscRes.data.rows && gscRes.data.rows.length > 0) {
      console.log(`   ${colors.dim}${'Query'.padEnd(45)} ${'Rank'.padStart(8)} ${'Clicks'.padStart(8)} ${'Impressions'.padStart(12)} ${'CTR'.padStart(8)}${colors.reset}`);
      gscRes.data.rows.forEach(r => {
        const q = r.keys[0];
        const rank = r.position.toFixed(1);
        const clicks = r.clicks;
        const imps = r.impressions;
        const ctr = (r.ctr * 100).toFixed(1) + '%';
        console.log(`   ${colors.cyan}${q.slice(0, 43).padEnd(45)}${colors.reset} ${colors.bold}${rank.padStart(8)}${colors.reset} ${clicks.toString().padStart(8)} ${imps.toString().padStart(12)} ${ctr.padStart(8)}`);
      });
    } else {
      console.log(`   ⚪ No search query rows available for this date range.`);
    }
  } catch (err) {
    console.warn(`   ⚠️ GSC Query error: ${err.message}`);
  }

  console.log(`\n${colors.bold}${colors.cyan}========================================================================${colors.reset}`);
  console.log(` ${colors.green}✔ TELEMETRY RUN COMPLETE: GSC & GA4 CONNECTED WITH FULL CONTROL!${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}========================================================================\n${colors.reset}`);
}

main().catch(err => {
  console.error('Fatal error running telemetry:', err);
  process.exit(1);
});
