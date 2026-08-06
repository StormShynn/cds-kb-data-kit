// scripts/lib/view-files.mjs
// Shared helpers for locating .md view files under views/ now that they live
// nested one folder per app_component segment (views/<MODULE>/.../<NAME>.md)
// instead of flat. Used by every script that scans, adds, or reports on
// views/ so there's exactly one place that knows how to walk the tree and
// pick a view's folder.

import fs from 'node:fs/promises';
import path from 'node:path';

// Recursively collect every .md file under viewsDir. relPath uses "/"
// regardless of platform (it's what gets stored in index/view-paths.json
// and compared against), so callers join it with path.join for disk access
// but store/compare it as-is.
export async function listViewFiles(viewsDir) {
  const results = [];
  async function walk(dir, prefix) {
    let entries;
    try {
      entries = await fs.readdir(dir, { withFileTypes: true });
    } catch {
      return; // views/ doesn't exist yet — caller sees an empty list, not a crash
    }
    for (const entry of entries) {
      const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        await walk(path.join(dir, entry.name), rel);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
        results.push({ name: entry.name.replace(/\.md$/i, '').toUpperCase(), relPath: rel });
      }
    }
  }
  await walk(viewsDir, '');
  return results;
}

// Build a NAME -> "views/<relPath>" map — the exact shape written to
// index/view-paths.json and consulted by cds-kb-mcp-kit's datasource.mjs.
export function toPathMap(viewFiles) {
  const map = {};
  for (const { name, relPath } of viewFiles) map[name] = `views/${relPath}`;
  return map;
}

// Which subfolder a view belongs under. Unverified views (never confirmed
// via the Hub — auto-discovered by name match only) go to _UNVERIFIED/
// regardless of module, so everything still needing review sits in one
// place instead of scattered thin across 32 module folders. Views with no
// usable component fall under MISC rather than staying flat, so the layout
// has no silent exception to "every view has a folder". Everything else
// nests one folder per app_component segment, each named by the cumulative
// prefix up to that point (e.g. "MM-IM-GF" -> MM/MM-IM/MM-IM-GF) rather than
// the bare segment ("GF" alone would collide across unrelated modules).
export function resolveViewFolder(appComponent, releaseState) {
  if ((releaseState || '').trim().toLowerCase() === 'unverified') return '_UNVERIFIED';
  const segments = (appComponent || '')
    .split('-')
    .map((s) => s.trim().toUpperCase().replace(/[^A-Z0-9_]/g, ''))
    .filter(Boolean);
  if (segments.length === 0) return 'MISC';
  const prefixes = [];
  let prefix = '';
  for (const seg of segments) {
    prefix = prefix ? `${prefix}-${seg}` : seg;
    prefixes.push(prefix);
  }
  return prefixes.join('/');
}

// Locate an existing view by name anywhere under viewsDir, regardless of
// which subfolder it's actually in — the flat-path existence checks this
// replaces (fs.access(views/<NAME>.md)) would false-negative for any view
// that's been moved into a module folder, risking duplicate/clobbered writes.
export async function findExistingView(viewsDir, name) {
  const files = await listViewFiles(viewsDir);
  const hit = files.find((f) => f.name === name.toUpperCase());
  return hit ? path.join(viewsDir, ...hit.relPath.split('/')) : null;
}
