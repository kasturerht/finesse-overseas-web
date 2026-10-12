// scripts/youtube-intelligence.js
// 🚀 SILICON VALLEY YOUTUBE INTELLIGENCE & SEO ENGINE
// Full Read, Audit & Metadata Optimization for Finesse Overseas Education

import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const CLIENT_SECRET_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKEN_FILE = path.join(process.cwd(), 'youtube-tokens.json');

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

async function getYouTubeClient() {
  if (!fs.existsSync(CLIENT_SECRET_FILE) || !fs.existsSync(TOKEN_FILE)) {
    throw new Error('Credentials or Tokens file missing. Run node scripts/youtube-auth.js first.');
  }

  const clientSecret = JSON.parse(fs.readFileSync(CLIENT_SECRET_FILE, 'utf8'));
  const web = clientSecret.installed || clientSecret.web;
  const tokens = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));

  const oauth2Client = new google.auth.OAuth2(
    web.client_id,
    web.client_secret,
    'http://localhost:3000/oauth2callback'
  );

  oauth2Client.setCredentials(tokens);

  // Automatically handle token refresh and persist
  oauth2Client.on('tokens', (newTokens) => {
    const updated = { ...tokens, ...newTokens };
    fs.writeFileSync(TOKEN_FILE, JSON.stringify(updated, null, 2));
  });

  return google.youtube({ version: 'v3', auth: oauth2Client });
}

async function auditChannel() {
  console.log(`\n${colors.bold}${colors.cyan}========================================================================${colors.reset}`);
  console.log(`${colors.bold}${colors.white} ⚡ FINESSE OVERSEAS YOUTUBE INTELLIGENCE & SEO RADAR ⚡${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}========================================================================${colors.reset}\n`);

  const youtube = await getYouTubeClient();

  // 1. Channel Details
  const channelRes = await youtube.channels.list({
    part: ['snippet', 'statistics', 'contentDetails'],
    mine: true
  });

  if (!channelRes.data.items || channelRes.data.items.length === 0) {
    console.error(`${colors.red}❌ No YouTube channel found for this account.${colors.reset}`);
    return;
  }

  const channel = channelRes.data.items[0];
  console.log(`${colors.bold}📺 Channel:${colors.reset} ${colors.green}${channel.snippet.title}${colors.reset} (${channel.snippet.customUrl || 'N/A'})`);
  console.log(`${colors.bold}👥 Subscribers:${colors.reset} ${colors.yellow}${channel.statistics.subscriberCount}${colors.reset} | ${colors.bold}👁️ Total Views:${colors.reset} ${colors.yellow}${channel.statistics.viewCount}${colors.reset} | ${colors.bold}🎬 Videos:${colors.reset} ${colors.yellow}${channel.statistics.videoCount}${colors.reset}\n`);

  // 2. Fetch Uploads Playlist
  const uploadsPlaylistId = channel.contentDetails.relatedPlaylists.uploads;

  const playlistItemsRes = await youtube.playlistItems.list({
    part: ['snippet', 'contentDetails'],
    playlistId: uploadsPlaylistId,
    maxResults: 50
  });

  const videoIds = playlistItemsRes.data.items.map(item => item.contentDetails.videoId);

  if (videoIds.length === 0) {
    console.log(`${colors.yellow}No uploaded videos found in this channel.${colors.reset}`);
    return;
  }

  // 3. Fetch Full Video Details (Statistics, Tags, Snippet)
  const videosRes = await youtube.videos.list({
    part: ['snippet', 'statistics', 'contentDetails'],
    id: videoIds
  });

  console.log(`${colors.bold}${colors.magenta}📹 RECENT VIDEOS & SEO AUDIT (Total: ${videosRes.data.items.length})${colors.reset}`);
  console.log(`${colors.gray}------------------------------------------------------------------------${colors.reset}`);

  const report = [];

  videosRes.data.items.forEach((v, idx) => {
    const s = v.snippet;
    const stats = v.statistics;
    const isShort = v.contentDetails.duration && (v.contentDetails.duration.includes('M') ? false : true);

    const issues = [];
    if (!s.title.toLowerCase().includes('kolhapur')) issues.push('Missing "Kolhapur" in Title');
    if (!s.description || s.description.length < 150) issues.push('Description too short (<150 chars)');
    if (!s.description || !s.description.includes('https://finesseoverseas.com')) issues.push('Missing Website link in Description');
    if (!s.tags || s.tags.length < 5) issues.push(`Low Tag Count (${s.tags ? s.tags.length : 0} tags)`);

    console.log(`\n${colors.bold}[#${idx + 1}] ${s.title}${colors.reset}`);
    console.log(`   🔗 ID: ${colors.cyan}${v.id}${colors.reset} | 👁️ Views: ${colors.green}${stats.viewCount || 0}${colors.reset} | 👍 Likes: ${colors.green}${stats.likeCount || 0}${colors.reset} | 📅 Published: ${s.publishedAt.substring(0, 10)}`);
    console.log(`   📝 Description Length: ${s.description ? s.description.length : 0} chars | 🏷️ Tags: ${s.tags ? s.tags.length : 0}`);
    
    if (issues.length > 0) {
      console.log(`   ⚠️ ${colors.yellow}SEO Gaps:${colors.reset} ${issues.join(' · ')}`);
    } else {
      console.log(`   ✔ ${colors.green}SEO Status: Well Optimized!${colors.reset}`);
    }

    report.push({
      id: v.id,
      title: s.title,
      description: s.description,
      tags: s.tags || [],
      views: stats.viewCount,
      likes: stats.likeCount,
      issues
    });
  });

  // Save report to disk for reference
  fs.writeFileSync('youtube-audit-report.json', JSON.stringify(report, null, 2));
  console.log(`\n${colors.bold}${colors.cyan}========================================================================${colors.reset}`);
  console.log(`${colors.green}✔ YouTube Audit Complete! Report saved to: youtube-audit-report.json${colors.reset}`);
  console.log(`${colors.bold}${colors.cyan}========================================================================${colors.reset}\n`);
}

auditChannel().catch(err => {
  console.error(`${colors.red}❌ Error auditing YouTube channel:${colors.reset}`, err.message);
  process.exit(1);
});
