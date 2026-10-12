import fs from 'fs';
import path from 'path';

// Scripts from 10-10-2026 (Saturday - 2 days ago)
const SAT_SCRIPTS = [
  'scripts/apply-video-optimization.js',
  'scripts/apply-video-2-optimization.js',
  'scripts/apply-video-3-optimization.js',
  'scripts/apply-video-4-optimization.js'
];

// Plus the 3 flagship testimonials that were already live in the Saturday audit:
const SAT_EXTRA = [
  {
    id: 'wfI4Iqwg0eg',
    title: 'Study in Germany from Kolhapur | Shejal Patil Masters in Logistics Review | Finesse Overseas'
  },
  {
    id: '2IroG_Hf2YE',
    title: 'Kolhapur to University of Milan (World Rank #270)! Harshada Chougale Reviews Finesse Overseas'
  },
  {
    id: 'JOFX-w611HQ',
    title: 'Best Overseas Education Consultancy in Kolhapur | Prem Pachore Student Experience at Finesse'
  }
];

// Scripts from 12-10-2026 (Today - Monday)
const TODAY_SCRIPTS = [
  'scripts/apply-video-grdoelH5jUw.js',
  'scripts/apply-video-0LyzLXr8r04.js',
  'scripts/apply-batch-ielts-optimization.js',
  'scripts/apply-batch-mbbs-guide-series.js',
  'scripts/apply-batch-crimea-gayatri.js',
  'scripts/apply-batch-degree-series.js',
  'scripts/apply-batch-standalone-5.js',
  'scripts/apply-batch-akshada-canada.js'
];

function extractFromScript(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const items = [];
  
  // Check if single video style: const VIDEO_ID = '...'; const TARGET_TITLE = '...';
  const singleId = content.match(/const VIDEO_ID\s*=\s*['"]([^'"]+)['"]/);
  const singleTitle = content.match(/const TARGET_TITLE\s*=\s*[`'"]([^`'"]+)[`'"]/);
  if (singleId && singleTitle) {
    items.push({ id: singleId[1], title: singleTitle[1] });
    return items;
  }

  // Check if batch array style: id: '...', title: '...'
  const idRegex = /id:\s*['"]([a-zA-Z0-9_-]{11})['"]/g;
  let match;
  while ((match = idRegex.exec(content)) !== null) {
    const id = match[1];
    // Find title near this id
    const sub = content.slice(match.index, match.index + 500);
    const titleMatch = sub.match(/title:\s*[`'"]([^`'"]+)[`'"]/);
    items.push({
      id,
      title: titleMatch ? titleMatch[1] : 'Title'
    });
  }
  return items;
}

const satList = [...SAT_EXTRA];
SAT_SCRIPTS.forEach(f => {
  satList.push(...extractFromScript(f));
});

const todayList = [];
TODAY_SCRIPTS.forEach(f => {
  todayList.push(...extractFromScript(f));
});

console.log('=== SATURDAY (2 DAYS AGO) LIST ===');
satList.forEach((v, i) => {
  console.log(`${i+1}. [${v.id}] ${v.title}`);
  console.log(`   URL: https://www.youtube.com/watch?v=${v.id}`);
});

console.log('\n=== TODAY LIST ===');
todayList.forEach((v, i) => {
  console.log(`${i+1}. [${v.id}] ${v.title}`);
  console.log(`   URL: https://www.youtube.com/watch?v=${v.id}`);
});
