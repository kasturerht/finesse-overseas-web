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

async function run() {
  console.log('================================================================');
  console.log('   FINESSE OVERSEAS - WEEKEND FORENSIC TELEMETRY AUDIT');
  console.log('   Target Weekend: Saturday (Oct 10, 2026) & Sunday (Oct 11, 2026)');
  console.log('================================================================\n');

  const analyticsdata = google.analyticsdata({ version: 'v1beta', auth });
  const searchconsole = google.searchconsole({ version: 'v1', auth });

  // -------------------------------------------------------------
  // 1. GA4: WEEKEND AGGREGATE & DAILY BREAKDOWN
  // -------------------------------------------------------------
  console.log('>>> 1. GA4: SATURDAY & SUNDAY TRAFFIC & ENGAGEMENT');
  try {
    const daily = await analyticsdata.properties.runReport({
      property: PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '2026-10-10', endDate: '2026-10-11' }],
        dimensions: [{ name: 'date' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'newUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' },
          { name: 'userEngagementDuration' },
          { name: 'engagementRate' }
        ],
        orderBys: [{ dimension: { dimensionName: 'date' } }]
      }
    });

    if (daily.data.rows && daily.data.rows.length > 0) {
      console.log('Date'.padEnd(14) + 'Users'.padStart(8) + 'New'.padStart(8) + 'Sessions'.padStart(10) + 'Views'.padStart(8) + 'Avg Time'.padStart(12) + 'Engage%'.padStart(10));
      console.log('-'.repeat(70));
      daily.data.rows.forEach(r => {
        const rawDate = r.dimensionValues[0].value;
        const formattedDate = `${rawDate.slice(0,4)}-${rawDate.slice(4,6)}-${rawDate.slice(6,8)}`;
        const u = parseInt(r.metricValues[0].value);
        const nu = r.metricValues[1].value;
        const s = r.metricValues[2].value;
        const v = r.metricValues[3].value;
        const dur = u > 0 ? (parseFloat(r.metricValues[4].value) / u).toFixed(1) + 's' : '0s';
        const er = (parseFloat(r.metricValues[5].value) * 100).toFixed(1) + '%';
        console.log(formattedDate.padEnd(14) + u.toString().padStart(8) + nu.padStart(8) + s.padStart(10) + v.padStart(8) + dur.padStart(12) + er.padStart(10));
      });
    } else {
      console.log('No GA4 sessions recorded for 2026-10-10 to 2026-10-11 yet.');
    }
  } catch (e) {
    console.error('GA4 Daily Error:', e.message);
  }

  // -------------------------------------------------------------
  // 2. GA4: TOP PAGES VISITED OVER THE WEEKEND
  // -------------------------------------------------------------
  console.log('\n>>> 2. GA4: PAGES VISITED OVER THE WEEKEND (Oct 10 - Oct 11)');
  try {
    const pages = await analyticsdata.properties.runReport({
      property: PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '2026-10-10', endDate: '2026-10-11' }],
        dimensions: [{ name: 'pagePath' }, { name: 'pageTitle' }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'activeUsers' },
          { name: 'userEngagementDuration' }
        ],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 10
      }
    });

    if (pages.data.rows && pages.data.rows.length > 0) {
      console.log('Page Path'.padEnd(45) + 'Views'.padStart(8) + 'Users'.padStart(8) + 'Time (sec)'.padStart(12));
      console.log('-'.repeat(73));
      pages.data.rows.forEach(r => {
        const pathStr = r.dimensionValues[0].value.slice(0, 42);
        const v = r.metricValues[0].value;
        const u = r.metricValues[1].value;
        const t = Math.round(parseFloat(r.metricValues[2].value));
        console.log(pathStr.padEnd(45) + v.padStart(8) + u.padStart(8) + t.toString().padStart(12));
      });
    } else {
      console.log('No page views recorded over the weekend.');
    }
  } catch (e) {
    console.error('GA4 Pages Error:', e.message);
  }

  // -------------------------------------------------------------
  // 3. GA4: TRAFFIC ACQUISITION SOURCES OVER WEEKEND
  // -------------------------------------------------------------
  console.log('\n>>> 3. GA4: TRAFFIC SOURCES OVER THE WEEKEND');
  try {
    const src = await analyticsdata.properties.runReport({
      property: PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '2026-10-10', endDate: '2026-10-11' }],
        dimensions: [{ name: 'sessionDefaultChannelGroup' }, { name: 'sessionSourceMedium' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'sessions' },
          { name: 'engagementRate' }
        ],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }]
      }
    });

    if (src.data.rows && src.data.rows.length > 0) {
      console.log('Channel'.padEnd(20) + 'Source / Medium'.padEnd(30) + 'Users'.padStart(8) + 'Sessions'.padStart(10) + 'Engage%'.padStart(10));
      console.log('-'.repeat(78));
      src.data.rows.forEach(r => {
        const ch = r.dimensionValues[0].value;
        const sm = r.dimensionValues[1].value;
        const u = r.metricValues[0].value;
        const s = r.metricValues[1].value;
        const er = (parseFloat(r.metricValues[2].value) * 100).toFixed(1) + '%';
        console.log(ch.padEnd(20) + sm.padEnd(30) + u.padStart(8) + s.padStart(10) + er.padStart(10));
      });
    } else {
      console.log('No traffic sources data for the weekend.');
    }
  } catch (e) {
    console.error('GA4 Sources Error:', e.message);
  }

  // -------------------------------------------------------------
  // 4. GA4: USER GEOGRAPHY (Cities over weekend)
  // -------------------------------------------------------------
  console.log('\n>>> 4. GA4: GEOGRAPHY & CITIES (Oct 10 - Oct 11)');
  try {
    const geo = await analyticsdata.properties.runReport({
      property: PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '2026-10-10', endDate: '2026-10-11' }],
        dimensions: [{ name: 'city' }, { name: 'region' }, { name: 'country' }],
        metrics: [{ name: 'activeUsers' }, { name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }],
        limit: 10
      }
    });

    if (geo.data.rows && geo.data.rows.length > 0) {
      console.log('City'.padEnd(25) + 'Region'.padEnd(20) + 'Country'.padEnd(15) + 'Users'.padStart(8) + 'Sessions'.padStart(10));
      console.log('-'.repeat(78));
      geo.data.rows.forEach(r => {
        console.log(r.dimensionValues[0].value.padEnd(25) + r.dimensionValues[1].value.padEnd(20) + r.dimensionValues[2].value.padEnd(15) + r.metricValues[0].value.padStart(8) + r.metricValues[1].value.padStart(10));
      });
    } else {
      console.log('No geo data for the weekend.');
    }
  } catch (e) {
    console.error('GA4 Geo Error:', e.message);
  }

  // -------------------------------------------------------------
  // 5. GA4: EVENT INTERACTIONS OVER WEEKEND
  // -------------------------------------------------------------
  console.log('\n>>> 5. GA4: INTERACTIONS & EVENTS (Oct 10 - Oct 11)');
  try {
    const events = await analyticsdata.properties.runReport({
      property: PROPERTY_ID,
      requestBody: {
        dateRanges: [{ startDate: '2026-10-10', endDate: '2026-10-11' }],
        dimensions: [{ name: 'eventName' }],
        metrics: [{ name: 'eventCount' }, { name: 'totalUsers' }],
        orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }]
      }
    });

    if (events.data.rows && events.data.rows.length > 0) {
      console.log('Event Name'.padEnd(30) + 'Count'.padStart(10) + 'Users'.padStart(10));
      console.log('-'.repeat(50));
      events.data.rows.forEach(r => {
        console.log(r.dimensionValues[0].value.padEnd(30) + r.metricValues[0].value.padStart(10) + r.metricValues[1].value.padStart(10));
      });
    } else {
      console.log('No events recorded for the weekend.');
    }
  } catch (e) {
    console.error('GA4 Events Error:', e.message);
  }

  // -------------------------------------------------------------
  // 6. GSC: SEARCH CONSOLE LATEST AVAILABLE DATES & LATENCY CHECK
  // -------------------------------------------------------------
  console.log('\n>>> 6. GSC: SEARCH PERFORMANCE & LATEST DATA LOG');
  try {
    // Check daily search performance from Oct 1 to Oct 12
    const gscDaily = await searchconsole.searchanalytics.query({
      siteUrl: GSC_SITE_URL,
      requestBody: {
        startDate: '2026-10-01',
        endDate: '2026-10-12',
        dimensions: ['date'],
        dataState: 'ALL'
      }
    });

    if (gscDaily.data.rows && gscDaily.data.rows.length > 0) {
      console.log('Date'.padEnd(15) + 'Clicks'.padStart(8) + 'Impressions'.padStart(14) + 'CTR'.padStart(10) + 'Avg Pos'.padStart(10));
      console.log('-'.repeat(57));
      gscDaily.data.rows.forEach(r => {
        const d = r.keys[0];
        const c = r.clicks;
        const imp = r.impressions;
        const ctr = (r.ctr * 100).toFixed(2) + '%';
        const pos = r.position.toFixed(1);
        console.log(d.padEnd(15) + c.toString().padStart(8) + imp.toString().padStart(14) + ctr.padStart(10) + pos.padStart(10));
      });
    } else {
      console.log('No GSC daily data returned for the requested range.');
    }

    // Query Top Keywords for the latest 3-5 days
    console.log('\n>>> 7. GSC: TOP SEARCH QUERIES ACROSS RECENT DAYS');
    const gscQueries = await searchconsole.searchanalytics.query({
      siteUrl: GSC_SITE_URL,
      requestBody: {
        startDate: '2026-10-05',
        endDate: '2026-10-12',
        dimensions: ['query'],
        rowLimit: 15,
        dataState: 'ALL'
      }
    });

    if (gscQueries.data.rows && gscQueries.data.rows.length > 0) {
      console.log('Search Query'.padEnd(45) + 'Clicks'.padStart(8) + 'Impr'.padStart(8) + 'CTR'.padStart(10) + 'Avg Pos'.padStart(10));
      console.log('-'.repeat(81));
      gscQueries.data.rows.forEach(r => {
        const q = r.keys[0].slice(0, 43);
        const c = r.clicks;
        const imp = r.impressions;
        const ctr = (r.ctr * 100).toFixed(1) + '%';
        const pos = r.position.toFixed(1);
        console.log(q.padEnd(45) + c.toString().padStart(8) + imp.toString().padStart(8) + ctr.padStart(10) + pos.padStart(10));
      });
    }

  } catch (e) {
    console.error('GSC Error:', e.message);
  }

  // -------------------------------------------------------------
  // 8. GA4: TODAY (Monday Oct 12) REALTIME SNAPSHOT
  // -------------------------------------------------------------
  console.log('\n>>> 8. GA4: TODAY (Monday Morning Oct 12) REALTIME');
  try {
    const rt = await analyticsdata.properties.runRealtimeReport({
      property: PROPERTY_ID,
      requestBody: {
        metrics: [{ name: 'activeUsers' }],
        dimensions: [{ name: 'city' }, { name: 'unifiedScreenName' }]
      }
    });
    console.log(`Realtime Active Users (Last 30 Mins): ${rt.data.rowCount || 0}`);
    if (rt.data.rows) {
      rt.data.rows.forEach(r => {
        console.log(`- City: ${r.dimensionValues[0].value}, Page: ${r.dimensionValues[1].value} => Users: ${r.metricValues[0].value}`);
      });
    }
  } catch (e) {
    console.error('GA4 Realtime Error:', e.message);
  }

  console.log('\n================================================================');
  console.log('   AUDIT COMPLETE');
  console.log('================================================================');
}

run();
