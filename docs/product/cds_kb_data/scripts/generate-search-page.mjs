#!/usr/bin/env node
// scripts/generate-search-page.mjs
// Generates search.html: a self-contained, offline-first business-language
// search over every CDS view's name/description/tags — the browser
// equivalent of cds-kb-mcp-kit's search_cds tool, for anyone without an MCP
// client. field-search.html (see scripts/generate-field-search.mjs) answers
// a different question ("I have an exact field/table name") with plain
// substring matching; this page answers "what CDS view covers <business
// topic>" and needs real ranking, so it embeds MiniSearch itself (the same
// library/index enrich_index.mjs already builds) rather than reimplementing
// scoring in vanilla JS.
//
// Embeds index/search_index.json's minisearch+options verbatim (no
// fetch() at runtime — Chrome/Edge block fetch() of local files under
// file://, same constraint field-search.html works around) plus MiniSearch's
// own UMD bundle, so the whole page is one file that works via double-click.
//
// Usage:
//   node scripts/generate-search-page.mjs [dataDir] [outputFile]

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const GITHUB_BLOB_BASE = 'https://github.com/StormShynn/cds-kb-data-kit/blob/main/';

const args = process.argv.slice(2);
const DATA_DIR = args[0] && !args[0].startsWith('--') ? args[0] : '.';
const OUTPUT_FILE = args[1] && !args[1].startsWith('--') ? args[1] : path.join(DATA_DIR, 'search.html');

// Mirrors cds-kb-mcp-kit's src/server.mjs SEARCH_OPTIONS boost weights, so
// ranking here matches what search_cds returns over MCP — same index, same
// weighting, just a different client.
const SEARCH_BOOST = { name: 3, semanticDescription: 2.5, synonyms: 2, tagText: 1.5, description: 1, appComponent: 1 };

async function main() {
  console.log('Reading index/search_index.json...');
  const indexFile = path.join(DATA_DIR, 'index', 'search_index.json');
  const indexData = JSON.parse(await fs.readFile(indexFile, 'utf-8'));

  console.log('Reading MiniSearch UMD bundle...');
  const miniSearchSrc = await fs.readFile(
    path.join(DATA_DIR, 'node_modules', 'minisearch', 'dist', 'umd', 'index.js'),
    'utf-8',
  );

  const embeddedIndex = JSON.stringify(indexData).replace(/<\/script/gi, '<\\/script');

  const html = renderHtml(embeddedIndex, miniSearchSrc, {
    viewCount: indexData.viewCount,
    enrichedCount: indexData.enrichedCount,
    builtAt: indexData.builtAt,
  });

  await fs.writeFile(OUTPUT_FILE, html, 'utf-8');
  const sizeMb = (Buffer.byteLength(html) / 1024 / 1024).toFixed(1);
  console.log(`Wrote ${OUTPUT_FILE} (${sizeMb} MB) — ${indexData.viewCount} view(s), ${indexData.enrichedCount} enriched.`);
}

function renderHtml(embeddedIndexJson, miniSearchSrc, stats) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>CDS Knowledge Base · Search</title>
<style>
  .viz-root {
    --surface-1: #1a1a19;
    --page-plane: #0d0d0d;
    --text-primary: #ffffff;
    --text-secondary: #c3c2b7;
    --text-muted: #898781;
    --gridline: #2c2c2a;
    --border: rgba(255,255,255,0.10);
    --status-good: #0ca30c;
    --accent: #4c9eff;
  }
  * { box-sizing: border-box; }
  body.viz-root {
    margin: 0;
    background: var(--page-plane);
    color: var(--text-primary);
    font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  }
  .container { max-width: 900px; margin: 0 auto; padding: 32px 20px 64px; }
  h1 { font-size: 22px; font-weight: 600; margin: 0 0 4px; }
  h1 span { color: var(--text-secondary); font-weight: 400; }
  .subtitle { color: var(--text-muted); font-size: 13px; margin: 0 0 24px; }

  #q {
    width: 100%; background: var(--surface-1); border: 1px solid var(--border);
    color: var(--text-primary); border-radius: 8px; padding: 14px 16px; font-size: 16px;
    font-family: ui-monospace, "SF Mono", Consolas, monospace;
  }
  #q:focus { outline: 2px solid var(--accent); }
  .filters { display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
  .filters select {
    background: var(--surface-1); border: 1px solid var(--border); color: var(--text-primary);
    border-radius: 6px; padding: 6px 10px; font-size: 13px;
  }
  .hint { color: var(--text-muted); font-size: 12px; margin: 8px 0 0; }

  .section { margin-top: 24px; }
  .row {
    display: flex; align-items: baseline; gap: 10px; padding: 10px 10px;
    border-bottom: 1px solid var(--gridline); font-size: 13px; flex-wrap: wrap;
  }
  .row:hover { background: var(--surface-1); }
  .row a { color: var(--accent); text-decoration: none; font-family: ui-monospace, monospace; font-weight: 600; }
  .row a:hover { text-decoration: underline; }
  .desc { color: var(--text-secondary); flex-basis: 100%; }
  .tag { color: var(--text-muted); font-size: 11px; }
  .score { color: var(--text-muted); font-size: 11px; font-family: ui-monospace, monospace; }
  .empty { color: var(--text-muted); font-size: 13px; padding: 20px 0; }
  .stats { color: var(--text-muted); font-size: 12px; margin-top: 32px; border-top: 1px solid var(--gridline); padding-top: 16px; }
</style>
</head>
<body class="viz-root">
<div class="container">
  <h1>CDS Knowledge Base <span>· Search</span></h1>
  <p class="subtitle">Search CDS views by business meaning, name, or tag — the browser version of cds-kb-mcp-kit's <code>search_cds</code> MCP tool. For an exact field/table/raw-column name lookup instead, use <a href="field-search.html" style="color:var(--accent)">field-search.html</a>.</p>

  <input id="q" type="text" placeholder="e.g. overdue customer invoices, purchase order, BKPF…" autofocus autocomplete="off" spellcheck="false" />
  <div class="filters">
    <select id="fModule"><option value="">All modules</option></select>
    <select id="fLob"><option value="">All lines of business</option></select>
  </div>
  <p class="hint">Ranked full-text search (MiniSearch/BM25), same index and weighting as search_cds. Runs entirely in your browser — works offline, no server. View links open on github.com (rendered markdown) — needs internet.</p>

  <div id="results"></div>

  <div class="stats" id="statsLine"></div>
</div>

<script>
${miniSearchSrc}
</script>
<script>
  const INDEX = ${embeddedIndexJson};
  const BOOST = ${JSON.stringify(SEARCH_BOOST)};
  const GITHUB_BLOB_BASE = ${JSON.stringify(GITHUB_BLOB_BASE)};

  const mini = MiniSearch.loadJSON(INDEX.minisearch, INDEX.options);

  const q = document.getElementById('q');
  const fModule = document.getElementById('fModule');
  const fLob = document.getElementById('fLob');
  const results = document.getElementById('results');
  const statsLine = document.getElementById('statsLine');
  statsLine.textContent = ${JSON.stringify(`${stats.viewCount} view(s) · ${stats.enrichedCount} enriched · index built ${''}`)} + INDEX.builtAt;

  // Populate module/LoB filters from whatever's actually in the index —
  // no hardcoded alias table to keep in sync with the server's.
  const modules = new Set(), lobs = new Map(); // lobs: lowercase -> first-seen display casing
  mini.search(MiniSearch.wildcard, {}).forEach(r => {
    if (r.module) modules.add(r.module);
    if (r.lob) {
      const key = r.lob.toLowerCase();
      if (!lobs.has(key) || /^[a-z]/.test(lobs.get(key))) lobs.set(key, r.lob);
    }
  });
  [...modules].sort().forEach(m => fModule.add(new Option(m, m)));
  [...lobs.values()].sort().forEach(l => fLob.add(new Option(l, l)));

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function resultRow(r) {
    const desc = r.semanticDescription || r.description || '';
    const link = r.path ? GITHUB_BLOB_BASE + r.path : null;
    const nameHtml = link
      ? '<a href="' + escapeHtml(link) + '" target="_blank" rel="noopener">' + escapeHtml(r.name) + '</a>'
      : '<span style="font-family:ui-monospace,monospace;font-weight:600">' + escapeHtml(r.name) + '</span>';
    return '<div class="row">' + nameHtml +
      ' <span class="tag">' + escapeHtml(r.appComponent || r.module || '-') + '</span>' +
      ' <span class="score">score ' + r.score.toFixed(1) + '</span>' +
      (desc ? '<span class="desc">' + escapeHtml(desc) + '</span>' : '') +
      '</div>';
  }

  function render() {
    const query = q.value.trim();
    if (!query) { results.innerHTML = ''; return; }

    const mod = fModule.value, lob = fLob.value;
    const filter = (r) =>
      (!mod || (r.module || '').toUpperCase() === mod.toUpperCase()) &&
      (!lob || (r.lob || '').toLowerCase() === lob.toLowerCase());

    const hits = mini.search(query, { boost: BOOST, prefix: true, fuzzy: 0.2, filter }).slice(0, 50);
    if (hits.length === 0) {
      results.innerHTML = '<div class="empty">No CDS views matched "' + escapeHtml(query) + '". Try broader terms or clear the filters.</div>';
      return;
    }
    results.innerHTML = '<div class="section">' + hits.map(resultRow).join('') + '</div>';
  }

  let debounce;
  q.addEventListener('input', () => { clearTimeout(debounce); debounce = setTimeout(render, 80); });
  fModule.addEventListener('change', render);
  fLob.addEventListener('change', render);
</script>
</body>
</html>
`;
}

main().catch(err => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
