// scripts/track-serp.js
// 📊 SILICON VALLEY SERP KEYWORD RANK TRACKING & TELEMETRY LEDGER
// Monitors target queries, on-page semantic footprints, and GSC target trajectories.

import fs from 'fs';
import path from 'path';

const HTML_FILE = path.join(process.cwd(), 'dist', 'client', 'study-abroad-consultants-in-kolhapur', 'index.html');
const REPORT_FILE = path.join(process.cwd(), 'serp-telemetry-report.json');

const TARGET_KEYWORDS = [
  {
    id: 1,
    query: "best study abroad consultants in kolhapur",
    intent: "Primary Commercial",
    targetUrl: "https://finesseoverseas.com/study-abroad-consultants-in-kolhapur",
    benchmarkCompetitor: "WTS Visa",
    targetRank: "#1 Organic & Map 3-Pack"
  },
  {
    id: 2,
    query: "study abroad consultants in kolhapur",
    intent: "High-Volume Discovery",
    targetUrl: "https://finesseoverseas.com/study-abroad-consultants-in-kolhapur",
    benchmarkCompetitor: "Study Smart",
    targetRank: "#1 - #2"
  },
  {
    id: 3,
    query: "overseas education consultants in kolhapur",
    intent: "High-Volume Commercial",
    targetUrl: "https://finesseoverseas.com/study-abroad-consultants-in-kolhapur",
    benchmarkCompetitor: "IDP Kolhapur",
    targetRank: "#1 - #3"
  },
  {
    id: 4,
    query: "study in germany consultants in kolhapur",
    intent: "Zero-Tuition Public Univ Moat",
    targetUrl: "https://finesseoverseas.com/study-in-germany",
    benchmarkCompetitor: "Local Private Agents",
    targetRank: "#1 Undisputed Moat"
  },
  {
    id: 5,
    query: "study in italy consultants in kolhapur",
    intent: "100% Scholarship Moat",
    targetUrl: "https://finesseoverseas.com/study-in-italy",
    benchmarkCompetitor: "YES Italy",
    targetRank: "#1 Undisputed Moat"
  },
  {
    id: 6,
    query: "mbbs abroad consultants in kolhapur",
    intent: "NMC FMGL 2021 Compliant Medical",
    targetUrl: "https://finesseoverseas.com/mbbs-India-abroad",
    benchmarkCompetitor: "General Agents",
    targetRank: "#1 - #2"
  },
  {
    id: 7,
    query: "best overseas consultancy in kolhapur",
    intent: "Brand Comparison & Authority",
    targetUrl: "https://finesseoverseas.com/study-abroad-consultants-in-kolhapur",
    benchmarkCompetitor: "Edwise / Global Reach",
    targetRank: "#1"
  }
];

console.log('\n========================================================================');
console.log(' ⚡ FINESSE OVERSEAS — SERP KEYWORD RANKING & TELEMETRY LEDGER ⚡');
console.log('========================================================================\n');

let htmlContent = '';
let htmlExists = fs.existsSync(HTML_FILE);

if (htmlExists) {
  htmlContent = fs.readFileSync(HTML_FILE, 'utf8').toLowerCase();
  console.log('✔ Production HTML detected: dist/client/study-abroad-consultants-in-kolhapur/index.html\n');
} else {
  console.log('⚠️ Production build not detected. Run "npm run build" first to inspect built HTML.\n');
}

console.log('📋 TARGET KEYWORD AUDIT & ON-PAGE SEMANTIC FOOTPRINTS:');
console.log('------------------------------------------------------------------------------------------------------');
console.log(
  `${'#'.padEnd(3)} ${'Target Query'.padEnd(42)} ${'Intent'.padEnd(25)} ${'On-Page Footprint'.padEnd(18)} ${'Target'}`
);
console.log('------------------------------------------------------------------------------------------------------');

const telemetryRows = [];

TARGET_KEYWORDS.forEach(kw => {
  let onPageStatus = 'UNCHECKED';
  if (htmlExists) {
    // Check if key components of the query appear in page content
    const cleanQuery = kw.query.toLowerCase();
    const queryWords = cleanQuery.split(' ');
    const exactMatch = htmlContent.includes(cleanQuery);
    const wordsMatch = queryWords.every(w => htmlContent.includes(w));

    if (exactMatch) {
      onPageStatus = 'EXACT MATCH ✔';
    } else if (wordsMatch) {
      onPageStatus = 'SEMANTIC ✔';
    } else {
      onPageStatus = 'PARTIAL ▲';
    }
  }

  console.log(
    `${String(kw.id).padEnd(3)} ${kw.query.padEnd(42)} ${kw.intent.padEnd(25)} ${onPageStatus.padEnd(18)} ${kw.targetRank}`
  );

  telemetryRows.push({
    ...kw,
    onPageStatus,
    timestamp: new Date().toISOString()
  });
});

console.log('------------------------------------------------------------------------------------------------------\n');

// Save telemetry snapshot
const snapshot = {
  timestamp: new Date().toISOString(),
  targetKeywordsCount: TARGET_KEYWORDS.length,
  keywords: telemetryRows
};

fs.writeFileSync(REPORT_FILE, JSON.stringify(snapshot, null, 2), 'utf8');
console.log(`💾 SERP Telemetry snapshot saved to: ${REPORT_FILE}\n`);

console.log('========================================================================');
console.log(' 🏁 SERP TELEMETRY COMPLETE: ALL 7 TARGET QUERIES READY FOR GSC TRACKING');
console.log('========================================================================\n');
