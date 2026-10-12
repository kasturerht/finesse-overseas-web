import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const CLIENT_SECRET_FILE = path.join(process.cwd(), 'oauth-client-secret.json');
const TOKEN_FILE = path.join(process.cwd(), 'youtube-tokens.json');

const IDS = [
  'pQkf1LQuiRQ',
  'P6sAy3Xssa0',
  '5JhVU1g7CPw',
  'n4hcktwtcR8',
  '75uOi5RfXv0',
  'QOR70LPd5zg',
  'TLW65mjQmbo',
  'yBYAwnJi_do',
  '4eAGaEK1nOA',
  'sivCp31yvuM',
  'saF1W79FsG0',
  'ByJWrMyIHm4',
  'ukj6B55etNc',
  'APOHXpC8-ls'
];

async function main() {
  const clientSecret = JSON.parse(fs.readFileSync(CLIENT_SECRET_FILE, 'utf8'));
  const web = clientSecret.installed || clientSecret.web;
  const tokens = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf8'));
  const oauth2Client = new google.auth.OAuth2(
    web.client_id,
    web.client_secret,
    'http://localhost:3000/oauth2callback'
  );
  oauth2Client.setCredentials(tokens);

  const youtube = google.youtube({ version: 'v3', auth: oauth2Client });

  const res = await youtube.videos.list({
    part: ['snippet', 'contentDetails'],
    id: IDS
  });

  const out = res.data.items.map(v => ({
    id: v.id,
    title: v.snippet.title,
    categoryId: v.snippet.categoryId,
    duration: v.contentDetails.duration,
    tagsCount: v.snippet.tags ? v.snippet.tags.length : 0,
    tags: v.snippet.tags,
    descriptionStart: v.snippet.description ? v.snippet.description.slice(0, 200).replace(/\n/g, ' ') : ''
  }));

  console.log(JSON.stringify(out, null, 2));
}

main().catch(console.error);
