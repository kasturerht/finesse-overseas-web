import fs from 'fs';
import path from 'path';

const dir = 'src/content/intelligence';
const files = fs.readdirSync(dir);
const list = [];

for (const f of files) {
  const text = fs.readFileSync(path.join(dir, f), 'utf8');
  const slug = f.replace('.mdoc', '');
  const lines = text.split('\n');
  let title = '', date = '', cat = '';
  for (const line of lines) {
    if (line.startsWith('title:')) title = line.replace('title:', '').trim().replace(/^['"]|['"]$/g, '');
    if (line.startsWith('publishDate:')) date = line.replace('publishDate:', '').trim().replace(/^['"]|['"]$/g, '');
    if (line.startsWith('category:')) cat = line.replace('category:', '').trim().replace(/^['"]|['"]$/g, '');
  }
  list.push({ slug, title, date, cat });
}

list.sort((a,b) => new Date(b.date) - new Date(a.date));
console.log(JSON.stringify(list, null, 2));
