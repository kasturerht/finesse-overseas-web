import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const KEY_FILE = path.join(process.cwd(), 'service-account-key.json');
const PROPERTY_ID = 'properties/383411509';
const GSC_SITE_URL = 'sc-domain:finesseoverseas.com';

const key = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
const auth = new google.auth.GoogleAuth({
  credentials: key,
  scopes: [
    'https://www.googleapis.com/auth/webmasters.readonly',
    'https://www.googleapis.com/auth/analytics.readonly'
  ]
});

async function main() {
  console.log('=== FORENSIC GSC & GA4 DEEP TELEMETRY PROBE (OCT 9, 2026) ===\n');

  const analyticsdata = google.analyticsdata({ version: 'v1beta', auth });
  const searchconsole = google.searchconsole({ version: 'v1', auth });

  // -------------------------------------------------------------
  // 1. GA4: REALTIME REPORT (Right Now)
  // -------------------------------------------------------------
  console.log('--- 1. GA4 REALTIME TELEMETRY (Last 30 Minutes) ---');
  try {
    const rt = await analyticsdata.properties.runRealtimeReport({
      property: PROPERTY_ID,
      requestBody: {
        metrics: [{ name: 'activeUsers' }],
        dimensions: [
          { name: 'country' },
          { name: 'city' },
          { name: 'unifiedScreenName' },
          { name: 'deviceCategory' }
        ]
      }
    });
    if (rt.data.rows && rt.data.rows.length > 0) {
      console.log(`Active Users Right Now: ${rt.data.rowCount}`);
      rt.data.rows.forEach(r => {
        console.log(`- Country: ${r.dimensionValues[0].value}, City: ${r.dimensionValues[1].value}, Page: ${r.dimensionValues[2].value}, Device: ${r.dimensionValues[3].value} => Users: ${r.metricValues[0].value}`);
      });
    } else {
      console.log('Active Users Right Now: 0');
    }
  } catch (e) {
    console.error('GA4 Realtime Error:', e.message);
  }

  // -------------------------------------------------------------
  // 2. GA4: 28-DAY AGGREGATE CORE VITALS (Engagement & Users)
  // -------------------------------------------------------------
  console.log('\n--- 2. GA4 28-DAY CORE METRICS ---');
  try {
    const core = await analyticsdata.properties.runReport({
      property: PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'newUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' },
          { name: 'userEngagementDuration' },
          { name: 'bounceRate' },
          { name: 'engagementRate' }
        ]
      }
    });
    if (core.data.rows && core.data.rows.length > 0) {
      const m = core.data.rows[0].metricValues;
      const totalSec = parseFloat(m[4].value);
      const activeUsers = parseInt(m[0].value);
      const avgDurationPerUser = activeUsers > 0 ? (totalSec / activeUsers).toFixed(1) : 0;
      console.log(`Total Active Users:        ${m[0].value}`);
      console.log(`New Users:                 ${m[1].value}`);
      console.log(`Total Sessions:            ${m[2].value}`);
      console.log(`Total Page Views:          ${m[3].value}`);
      console.log(`Total Engagement Duration: ${(totalSec / 60).toFixed(1)} minutes`);
      console.log(`Avg Duration / User:       ${avgDurationPerUser} seconds`);
      console.log(`Bounce Rate:               ${(parseFloat(m[5].value) * 100).toFixed(1)}%`);
      console.log(`Engagement Rate:           ${(parseFloat(m[6].value) * 100).toFixed(1)}%`);
    }
  } catch (e) {
    console.error('GA4 Core Error:', e.message);
  }

  // -------------------------------------------------------------
  // 3. GA4: USER ACQUISITION CHANNELS (Where users come from)
  // -------------------------------------------------------------
  console.log('\n--- 3. GA4 TRAFFIC ACQUISITION CHANNELS (Last 28 Days) ---');
  try {
    const channels = await analyticsdata.properties.runReport({
      property: PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'sessionDefaultChannelGroup' }, { name: 'sessionSourceMedium' }],
        metrics: [{ name: 'activeUsers' }, { name: 'sessions' }, { name: 'engagementRate' }],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }]
      }
    });
    if (channels.data.rows) {
      console.log('Channel Group'.padEnd(25) + 'Source / Medium'.padEnd(30) + 'Users'.padStart(8) + 'Sessions'.padStart(10) + 'Engage Rate'.padStart(14));
      console.log('-'.repeat(87));
      channels.data.rows.forEach(r => {
        const ch = r.dimensionValues[0].value;
        const sm = r.dimensionValues[1].value;
        const u = r.metricValues[0].value;
        const s = r.metricValues[1].value;
        const er = (parseFloat(r.metricValues[2].value) * 100).toFixed(1) + '%';
        console.log(ch.padEnd(25) + sm.padEnd(30) + u.padStart(8) + s.padStart(10) + er.padStart(14));
      });
    }
  } catch (e) {
    console.error('GA4 Channels Error:', e.message);
  }

  // -------------------------------------------------------------
  // 4. GA4: GEOGRAPHIC & CITY BREAKDOWN
  // -------------------------------------------------------------
  console.log('\n--- 4. GA4 GEOGRAPHIC BREAKDOWN (Top Cities in Last 28 Days) ---');
  try {
    const geo = await analyticsdata.properties.runReport({
      property: PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'country' }, { name: 'city' }],
        metrics: [{ name: 'activeUsers' }, { name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
        limit: 10
      }
    });
    if (geo.data.rows) {
      console.log('Country'.padEnd(20) + 'City'.padEnd(25) + 'Users'.padStart(8) + 'Sessions'.padStart(10));
      console.log('-'.repeat(63));
      geo.data.rows.forEach(r => {
        console.log(r.dimensionValues[0].value.padEnd(20) + r.dimensionValues[1].value.padEnd(25) + r.metricValues[0].value.padStart(8) + r.metricValues[1].value.padStart(10));
      });
    }
  } catch (e) {
    console.error('GA4 Geo Error:', e.message);
  }

  // -------------------------------------------------------------
  // 5. GA4: EVENT ACTIONS (What do visitors actually do?)
  // -------------------------------------------------------------
  console.log('\n--- 5. GA4 EVENT ACTIONS & CONVERSIONS (Last 28 Days) ---');
  try {
    const ev = await analyticsdata.properties.runReport({
      property: PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }],
        dimensions: [{ name: 'eventName' }],
        metrics: [{ name: 'eventCount' }, { name: 'totalUsers' }],
        orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
        limit: 15
      }
    });
    if (ev.data.rows) {
      console.log('Event Name'.padEnd(30) + 'Count'.padStart(10) + 'Users'.padStart(10));
      console.log('-'.repeat(50));
      ev.data.rows.forEach(r => {
        console.log(r.dimensionValues[0].value.padEnd(30) + r.metricValues[0].value.padStart(10) + r.metricValues[1].value.padStart(10));
      });
    }
  } catch (e) {
    console.error('GA4 Events Error:', e.message);
  }

  // -------------------------------------------------------------
  // 6. GSC: OVERALL ORGANIC SEARCH AUDIT (28 Days)
  // -------------------------------------------------------------
  console.log('\n--- 6. GSC OVERALL SEARCH HEALTH (Last 28 Days) ---');
  const today = new Date();
  const end = new Date(today.getTime() - 2 * 24 * 3600 * 1000).toISOString().split('T')[0];
  const start28 = new Date(today.getTime() - 30 * 24 * 3600 * 1000).toISOString().split('T')[0];

  try {
    const gscTotals = await searchconsole.searchanalytics.query({
      siteUrl: GSC_SITE_URL,
      requestBody: {
        startDate: start28,
        endDate: end
      }
    });
    if (gscTotals.data.rows && gscTotals.data.rows.length > 0) {
      const tot = gscTotals.data.rows[0];
      console.log(`Date Window:       ${start28} to ${end}`);
      console.log(`Total Clicks:      ${tot.clicks}`);
      console.log(`Total Impressions: ${tot.impressions}`);
      console.log(`Average CTR:       ${(tot.ctr * 100).toFixed(2)}%`);
      console.log(`Average Position:  ${tot.position.toFixed(1)}`);
    }
  } catch (e) {
    console.error('GSC Totals Error:', e.message);
  }

  // -------------------------------------------------------------
  // 7. GSC: TOP SEARCH QUERIES BREAKDOWN
  // -------------------------------------------------------------
  console.log('\n--- 7. GSC TOP QUERIES (Last 28 Days) ---');
  try {
    const gscQ = await searchconsole.searchanalytics.query({
      siteUrl: GSC_SITE_URL,
      requestBody: {
        startDate: start28,
        endDate: end,
        dimensions: ['query'],
        rowLimit: 25
      }
    });
    if (gscQ.data.rows) {
      console.log('Query'.padEnd(45) + 'Clicks'.padStart(8) + 'Impr'.padStart(8) + 'CTR'.padStart(10) + 'Position'.padStart(10));
      console.log('-'.repeat(81));
      gscQ.data.rows.sort((a,b) => b.impressions - a.impressions).forEach(r => {
        console.log(r.keys[0].slice(0, 43).padEnd(45) + r.clicks.toString().padStart(8) + r.impressions.toString().padStart(8) + ((r.ctr * 100).toFixed(1) + '%').padStart(10) + r.position.toFixed(1).padStart(10));
      });
    }
  } catch (e) {
    console.error('GSC Queries Error:', e.message);
  }

  // -------------------------------------------------------------
  // 8. GSC: TOP INDEXED PAGES IN SEARCH
  // -------------------------------------------------------------
  console.log('\n--- 8. GSC TOP PAGES IN GOOGLE SEARCH (Last 28 Days) ---');
  try {
    const gscP = await searchconsole.searchanalytics.query({
      siteUrl: GSC_SITE_URL,
      requestBody: {
        startDate: start28,
        endDate: end,
        dimensions: ['page'],
        rowLimit: 20
      }
    });
    if (gscP.data.rows) {
      console.log('Page'.padEnd(55) + 'Clicks'.padStart(8) + 'Impr'.padStart(8) + 'CTR'.padStart(10) + 'Position'.padStart(10));
      console.log('-'.repeat(91));
      gscP.data.rows.sort((a,b) => b.impressions - a.impressions).forEach(r => {
        const cleanP = r.keys[0].replace('https://finesseoverseas.com', '').replace('https://www.finesseoverseas.com', '(www)') || '/';
        console.log(cleanP.slice(0, 53).padEnd(55) + r.clicks.toString().padStart(8) + r.impressions.toString().padStart(8) + ((r.ctr * 100).toFixed(1) + '%').padStart(10) + r.position.toFixed(1).padStart(10));
      });
    }
  } catch (e) {
    console.error('GSC Pages Error:', e.message);
  }

  // -------------------------------------------------------------
  // 9. GSC: SITEMAPS STATUS
  // -------------------------------------------------------------
  console.log('\n--- 9. GSC SITEMAPS TELEMETRY ---');
  try {
    const sitemaps = await searchconsole.sitemaps.list({
      siteUrl: GSC_SITE_URL
    });
    if (sitemaps.data.sitemap) {
      sitemaps.data.sitemap.forEach(s => {
        console.log(`Path: ${s.path} | Last Downloaded: ${s.lastDownloaded} | Warnings: ${s.warnings} | Errors: ${s.errors}`);
      });
    } else {
      console.log('No submitted sitemaps listed or auto-detected by GSC indexer.');
    }
  } catch (e) {
    console.error('GSC Sitemap Error:', e.message);
  }
}

main().catch(console.error);
