import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const KEY_FILE = path.join(process.cwd(), 'service-account-key.json');
const GSC_SITE_URL = 'sc-domain:finesseoverseas.com';

const ALL_22_URLS = [
  'https://finesseoverseas.com/',
  'https://finesseoverseas.com/contact',
  'https://finesseoverseas.com/germany-admission',
  'https://finesseoverseas.com/germany-admission01',
  'https://finesseoverseas.com/mbbs-India-abroad',
  'https://finesseoverseas.com/privacy-policy',
  'https://finesseoverseas.com/review',
  'https://finesseoverseas.com/study-abroad-consultants-in-kolhapur',
  'https://finesseoverseas.com/study-in-austria',
  'https://finesseoverseas.com/study-in-germany',
  'https://finesseoverseas.com/study-in-italy',
  'https://finesseoverseas.com/study-in-uk-usa',
  'https://finesseoverseas.com/terms-and-conditions',
  'https://finesseoverseas.com/intelligence',
  'https://finesseoverseas.com/intelligence/best-study-abroad-overseas-education-consultants-kolhapur-scams-guide',
  'https://finesseoverseas.com/intelligence/italy-isee-parificato-scholarship-scam-guide',
  'https://finesseoverseas.com/intelligence/neet-2026-re-exam-post-mortem-mbbs-europe',
  'https://finesseoverseas.com/intelligence/study-in-austria-zero-blocked-account-guide',
  'https://finesseoverseas.com/intelligence/the-bilingual-degree-trap-germany-hidden-language-requirements',
  'https://finesseoverseas.com/intelligence/the-demographic-cliff-why-europe-needs-indian-talent-2026',
  'https://finesseoverseas.com/intelligence/the-germany-tuition-fee-myth-14-states-zero-tuition-matrix',
  'https://finesseoverseas.com/intelligence/the-macroeconomic-study-abroad-shift-2026-canada-uk-vs-europe',
  'https://finesseoverseas.com/intelligence/the-nmc-approved-colleges-list-scam-how-to-legally-verify-compliance',
  'https://finesseoverseas.com/intelligence/trapped-in-neet-2026-re-exam-loop-mental-financial-toll'
];

async function main() {
  const key = JSON.parse(fs.readFileSync(KEY_FILE, 'utf8'));
  const auth = new google.auth.GoogleAuth({
    credentials: key,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
  });
  const searchconsole = google.searchconsole({ version: 'v1', auth });

  console.log('Inspecting all active URLs against Google Index...\n');
  const results = [];

  for (const url of ALL_22_URLS) {
    try {
      const res = await searchconsole.urlInspection.index.inspect({
        requestBody: { inspectionUrl: url, siteUrl: GSC_SITE_URL }
      });
      const st = res.data.inspectionResult.indexStatusResult;
      results.push({
        url,
        verdict: st.verdict,
        coverageState: st.coverageState,
        indexingState: st.indexingState,
        lastCrawlTime: st.lastCrawlTime || 'Never',
        pageFetchState: st.pageFetchState,
        crawledAs: st.crawledAs
      });
      console.log(`[${st.verdict}] ${url} -> ${st.coverageState} (Last crawl: ${st.lastCrawlTime})`);
    } catch (err) {
      console.log(`[ERROR] ${url} -> ${err.message}`);
      results.push({ url, error: err.message });
    }
  }

  fs.writeFileSync('gsc-active-urls-status.json', JSON.stringify(results, null, 2));
  console.log('\nWrote full results to gsc-active-urls-status.json');
}

main().catch(console.error);
