import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const KEY_FILE = path.join(process.cwd(), 'service-account-key.json');
const GSC_SITE_URL = 'sc-domain:finesseoverseas.com';

const key = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
const auth = new google.auth.GoogleAuth({
  credentials: key,
  scopes: [
    'https://www.googleapis.com/auth/webmasters',
    'https://www.googleapis.com/auth/webmasters.readonly'
  ]
});

async function main() {
  console.log('=== GSC FORENSIC INDEXING AUDIT (OCT 12, 2026) ===\n');

  const searchconsole = google.searchconsole({ version: 'v1', auth });

  // 1. Sitemaps Status
  console.log('--- 1. SITEMAPS STATUS ---');
  try {
    const sitemapsRes = await searchconsole.sitemaps.list({ siteUrl: GSC_SITE_URL });
    console.log(JSON.stringify(sitemapsRes.data, null, 2));
  } catch (err) {
    console.error('Sitemaps Error:', err.message);
  }

  // 2. All Pages with Search Analytics Data (last 30 days)
  console.log('\n--- 2. PAGES IN SEARCH ANALYTICS (Last 28 Days) ---');
  try {
    const pagesRes = await searchconsole.searchanalytics.query({
      siteUrl: GSC_SITE_URL,
      requestBody: {
        startDate: '2026-09-14',
        endDate: '2026-10-12',
        dimensions: ['page'],
        rowLimit: 50,
        dataState: 'ALL'
      }
    });
    if (pagesRes.data.rows) {
      console.log(`Found ${pagesRes.data.rows.length} pages in Search Analytics:`);
      pagesRes.data.rows.forEach(r => {
        console.log(`- ${r.keys[0]} | Impr: ${r.impressions} | Clicks: ${r.clicks} | Pos: ${r.position.toFixed(1)}`);
      });
    } else {
      console.log('No pages found in Search Analytics.');
    }
  } catch (err) {
    console.error('Search Analytics Error:', err.message);
  }

  // 3. Inspect Key URLs with URL Inspection API
  console.log('\n--- 3. URL INSPECTION API SAMPLES ---');
  const urlsToInspect = [
    'https://finesseoverseas.com/',
    'https://finesseoverseas.com/study-abroad-consultants-in-kolhapur',
    'https://finesseoverseas.com/study-in-germany',
    'https://finesseoverseas.com/study-in-italy',
    'https://finesseoverseas.com/study-in-austria',
    'https://finesseoverseas.com/study-in-uk-usa',
    'https://finesseoverseas.com/mbbs-India-abroad',
    'https://finesseoverseas.com/contact',
    'https://finesseoverseas.com/intelligence/the-nmc-approved-colleges-list-scam-how-to-legally-verify-compliance',
    'https://finesseoverseas.com/intelligence/the-germany-tuition-fee-myth-14-states-zero-tuition-matrix',
    'https://finesseoverseas.com/intelligence/trapped-in-neet-2026-re-exam-loop-mental-financial-toll',
    'https://finesseoverseas.com/intelligence/italy-isee-parificato-scholarship-scam-guide',
    'https://finesseoverseas.com/sitemap-index.xml',
    'https://finesseoverseas.com/sitemap-0.xml'
  ];

  for (const u of urlsToInspect) {
    try {
      const inspectRes = await searchconsole.urlInspection.index.inspect({
        requestBody: {
          inspectionUrl: u,
          siteUrl: GSC_SITE_URL
        }
      });
      const result = inspectRes.data.inspectionResult;
      const indexStatus = result.indexStatusResult;
      console.log(`\nURL: ${u}`);
      console.log(`  Verdict:        ${indexStatus.verdict}`);
      console.log(`  CoverageState:  ${indexStatus.coverageState}`);
      console.log(`  IndexingState:  ${indexStatus.indexingState}`);
      console.log(`  LastCrawlTime:  ${indexStatus.lastCrawlTime}`);
      console.log(`  CrawledAs:      ${indexStatus.crawledAs}`);
      console.log(`  RobotsTxt:      ${indexStatus.robotsTxtState}`);
      console.log(`  UserCanonical:  ${indexStatus.userCanonical}`);
      console.log(`  GoogleCanonical:${indexStatus.googleCanonical}`);
    } catch (e) {
      console.log(`URL: ${u} => Error: ${e.message}`);
    }
  }
}

main().catch(console.error);
