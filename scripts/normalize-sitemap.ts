import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const sitemapPath = resolve(
  import.meta.dirname,
  '..',
  'dist',
  'client',
  'sitemap.xml',
);

let xml: string;
try {
  xml = readFileSync(sitemapPath, 'utf-8');
} catch {
  console.log('No sitemap.xml found at', sitemapPath);
  process.exit(0);
}

let normalized = 0;
let removed = 0;
const seen = new Set<string>();
const urlEntries: string[] = [];

const urlRegex = /<url>([\s\S]*?)<\/url>/g;
const locRegex = /<loc>(.*?)<\/loc>/;

for (const match of xml.matchAll(urlRegex)) {
  const urlBlock = match[1];
  const locMatch = urlBlock.match(locRegex);
  if (!locMatch) continue;

  const originalLoc = locMatch[1];
  let normalizedLoc = originalLoc;

  // Strip trailing slash from path (but not root "/")
  const url = new URL(originalLoc);
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    normalizedLoc = url.toString();
    normalized++;
  }

  if (seen.has(normalizedLoc)) {
    removed++;
    continue;
  }

  seen.add(normalizedLoc);

  if (normalizedLoc !== originalLoc) {
    urlEntries.push(match[0].replace(originalLoc, normalizedLoc));
  } else {
    urlEntries.push(match[0]);
  }
}

if (normalized === 0 && removed === 0) {
  console.log('Sitemap already clean — no changes needed.');
  process.exit(0);
}

// Reconstruct sitemap
const header = xml.slice(0, xml.indexOf('<url>'));
const footer = '\n</urlset>\n';
const output = header + urlEntries.join('\n  ') + footer;

writeFileSync(sitemapPath, output, 'utf-8');

console.log(
  `Sitemap normalized: ${normalized} URL(s) had trailing slashes stripped, ${removed} duplicate(s) removed. ${seen.size} URLs total.`,
);
