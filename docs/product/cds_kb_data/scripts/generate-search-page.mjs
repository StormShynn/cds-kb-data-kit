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

const GITHUB_BLOB_BASE = 'https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/';

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

  // Autocomplete dictionary — built by enrich_index.mjs into
  // index/suggestions.json (curated keyword phrases, frequency-ranked,
  // accent-insensitive keys). Embedded verbatim so the page stays
  // self-contained offline under file://; missing file just disables the
  // dropdown (search itself is unaffected).
  let suggestions = [];
  try {
    const suggestionsFile = path.join(DATA_DIR, 'index', 'suggestions.json');
    const suggestionsData = JSON.parse(await fs.readFile(suggestionsFile, 'utf-8'));
    suggestions = suggestionsData.items || [];
    console.log(`Loaded ${suggestions.length} autocomplete suggestions.`);
  } catch {
    console.log('No index/suggestions.json found — autocomplete disabled.');
  }

  const embeddedIndex = JSON.stringify(indexData).replace(/<\/script/gi, '<\\/script');
  // Same </script> hardening as embeddedIndex — a keyword whose text contains
  // that sequence would otherwise close the inline <script> block early.
  const embeddedSuggestions = JSON.stringify(suggestions).replace(/<\/script/gi, '<\\/script');

  const html = renderHtml(embeddedIndex, embeddedSuggestions, miniSearchSrc, {
    viewCount: indexData.viewCount,
    enrichedCount: indexData.enrichedCount,
    builtAt: indexData.builtAt,
  });

  await fs.writeFile(OUTPUT_FILE, html, 'utf-8');
  const sizeMb = (Buffer.byteLength(html) / 1024 / 1024).toFixed(1);
  console.log(`Wrote ${OUTPUT_FILE} (${sizeMb} MB) — ${indexData.viewCount} view(s), ${indexData.enrichedCount} enriched.`);
}

function renderHtml(embeddedIndexJson, embeddedSuggestions, miniSearchSrc, stats) {
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
    --status-warn: #d9a72c;
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
  .search-wrap { position: relative; }
  #suggestions {
    position: absolute; top: calc(100% + 4px); left: 0; right: 0; z-index: 20;
    background: var(--surface-1); border: 1px solid var(--border); border-radius: 8px;
    overflow: hidden auto; max-height: 320px; box-shadow: 0 12px 32px rgba(0,0,0,0.45);
  }
  .sugg-item {
    display: flex; align-items: baseline; gap: 10px; padding: 9px 14px;
    cursor: pointer; font-size: 13px; color: var(--text-primary);
    font-family: ui-monospace, "SF Mono", Consolas, monospace;
  }
  .sugg-item b { color: var(--accent); font-weight: 700; }
  .sugg-item .cnt { color: var(--text-muted); font-size: 11px; margin-left: auto; white-space: nowrap; }
  .sugg-item:hover, .sugg-item.active { background: rgba(76,158,255,0.14); }
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
  .badge { font-size: 10px; border: 1px solid; border-radius: 4px; padding: 1px 5px; font-weight: 600; }
  .badge.unverified { color: var(--status-warn); border-color: var(--status-warn); }
  .badge.abstract { color: var(--text-muted); border-color: var(--text-muted); }
  .badge.master { color: var(--accent); border-color: var(--accent); }
  .empty { color: var(--text-muted); font-size: 13px; padding: 20px 0; }
  .stats { color: var(--text-muted); font-size: 12px; margin-top: 32px; border-top: 1px solid var(--gridline); padding-top: 16px; }
</style>
</head>
<body class="viz-root">
<div class="container">
  <h1>CDS Knowledge Base <span>· Search</span></h1>
  <p class="subtitle">Search CDS views by business meaning, name, or tag — the browser version of cds-kb-mcp-kit's <code>search_cds</code> MCP tool. For an exact field/table/raw-column name lookup instead, use <a href="field-search.html" style="color:var(--accent)">field-search.html</a>.</p>

  <div class="search-wrap">
    <input id="q" type="text" role="combobox" aria-expanded="false" aria-controls="suggestions" aria-autocomplete="list" placeholder="e.g. purchase order, đơn mua hàng, don mua hang, overdue invoices, BKPF…" autofocus autocomplete="off" spellcheck="false" />
    <div id="suggestions" role="listbox" hidden></div>
  </div>
  <div class="filters">
    <select id="fModule"><option value="">All modules</option></select>
    <select id="fLob"><option value="">All lines of business</option></select>
  </div>
  <p class="hint">Ranked full-text search (MiniSearch/BM25), same index and weighting as search_cds. Supports Vietnamese (accent-insensitive — “đơn mua hàng”, “don mua hang” and “don mua hàng” all work) via per-view synonyms plus EN/VI semantic descriptions. Type to see keyword suggestions (↑/↓ to navigate, Enter to fill, Esc to dismiss). Runs entirely in your browser — works offline, no server. View links open on github.com (rendered markdown) — needs internet.</p>

  <div id="results"></div>

  <div class="stats" id="statsLine"></div>
</div>

<script>
${miniSearchSrc}
</script>
<script>
  const INDEX = ${embeddedIndexJson};
  const SUGGESTIONS = ${embeddedSuggestions};
  const BOOST = ${JSON.stringify(SEARCH_BOOST)};
  const GITHUB_BLOB_BASE = ${JSON.stringify(GITHUB_BLOB_BASE)};

  // Vietnamese accent-insensitive normalization — MUST match the copy in
  // enrich_index.mjs (index build time): the stored index terms are already
  // normalized, so a query must be processed the same way to match. This
  // makes "don mua hang", "đơn mua hàng" and "đơn mua hang" all find the
  // same views. NFD + strip combining marks + đ→d + lowercase.
  const VIETNAMESE_DIACRITIC_RE = /[\u0300-\u036f]/g;
  function normalizeTerm(term) {
    return term
      .normalize('NFD')
      .replace(/\u0111/gi, 'd')
      .replace(VIETNAMESE_DIACRITIC_RE, '')
      .toLowerCase();
  }
  const mini = MiniSearch.loadJSON(INDEX.minisearch, { ...INDEX.options, processTerm: normalizeTerm });

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
    const unverified = r.releaseState === 'unverified';
    return '<div class="row">' + nameHtml +
      (unverified ? ' <span class="badge unverified" title="Community-sourced Z/Y-namespace view — not confirmed to exist in any real SAP system">unverified</span>' : '') +
      (r.isAbstract ? ' <span class="badge abstract" title="define abstract entity — an action-parameter/data structure, no runtime entity set to query regardless of release state">structure, not a view</span>' : '') +
      (r.isMasterData ? ' <span class="badge master" title="@ObjectModel.usageType.dataClass: #MASTER — a master-data view (e.g. Product/Customer master), not a transactional one">master data</span>' : '') +
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

    // Mirrors cds-kb-mcp-kit's search_cds boostDocument — same signals
    // enrich_index.mjs computes per view, same weights:
    //   x0.01 isAbstract (define (root )?abstract entity / an action-param
    //         structure — no runtime entity set to query even when
    //         released, sinks below everything else regardless of text match)
    //   x0.15 unverified (community-sourced Z/Y-namespace, not confirmed to
    //         exist in any real SAP system)
    //   x1.5  isMasterData (@ObjectModel.usageType.dataClass: #MASTER) —
    //         what "which view covers <business topic>" usually means
    //   log-scaled usageCount (real runtime call telemetry, 0 for every doc
    //   until pull-usage-stats.mjs's endpoint is configured) and
    //   referencedByCount (how many other views build FROM/associate to
    //   this one right now), the latter weighted well below the former.
    const boostDocument = (id, term, storedFields) => {
      if (storedFields.isAbstract) return 0.01;
      let boost = 1;
      if (storedFields.releaseState === 'unverified') boost *= 0.15;
      if (storedFields.isMasterData) boost *= 1.5;
      boost *= 1 + Math.log10(1 + (storedFields.usageCount || 0));
      boost *= 1 + Math.log10(1 + (storedFields.referencedByCount || 0)) * 0.1;
      return boost;
    };
    // Vietnamese is accent-insensitive (see normalizeTerm above), but short
    // lowercase Vietnamese words collide with English terms via prefix/fuzzy
    // ("bán"->"ban" prefix/fuzzy-matches "bank", flooding bank views). So
    // prefix and fuzzy only apply to terms >=4 chars, or terms containing an
    // uppercase letter/digit — ABAP view codes like "PO" / "I_PURCHASEORDER"
    // still prefix-match, while Vietnamese business words match exactly.
    const prefix = (term) => /[A-Z0-9]/.test(term) || term.length >= 4;
    const fuzzy = (term) => term.length >= 4 ? 0.2 : false;
    const hits = mini.search(query, { boost: BOOST, boostDocument, prefix, fuzzy, filter }).slice(0, 50);
    if (hits.length === 0) {
      results.innerHTML = '<div class="empty">No CDS views matched "' + escapeHtml(query) + '". Try broader terms or clear the filters.</div>';
      return;
    }
    results.innerHTML = '<div class="section">' + hits.map(resultRow).join('') + '</div>';
  }

  // ── Autocomplete ────────────────────────────────────────────────────────────
  // Keyword suggestions from index/suggestions.json (built by enrich_index.mjs
  // from taxonomy viKeywords + per-view frontmatter keywords, frequency-ranked
  // and accent-insensitive: "đơn" finds "đơn mua hàng" exactly like "don").
  // The normalized keys are precomputed at build time; only the typed query is
  // normalized here (same normalizeTerm as the search query above).
  let debounce;
  const suggBox = document.getElementById('suggestions');
  const suggIndex = SUGGESTIONS.map(s => ({
    s,
    words: s.t.split(/\s+/).map(w => normalizeTerm(w)),
    orig: s.t.split(/\s+/),
  }));
  let activeSugg = -1;

  function getSuggestions(query) {
    const nq = normalizeTerm(query).trim();
    if (!nq) return [];
    const lastToken = nq.split(/\s+/).pop() || '';
    const out = [];
    for (let i = 0; i < suggIndex.length; i++) {
      const { s, words, orig } = suggIndex[i];
      let score = 0;
      if (s.k.startsWith(nq)) score = 120;                    // whole-phrase prefix: "đơn mua h" -> "đơn mua hàng"
      else if (lastToken.length >= 2 && words.some(w => w.startsWith(lastToken))) score = 80; // any-word prefix: "hang" -> "đơn mua hàng"
      else if (nq.length >= 3 && s.k.includes(nq)) score = 40; // mid-phrase substring
      // A plain lowercase query that prefix-matches an English term can be
      // Vietnamese mid-word ("ban" -> "bank" vs "bán hàng") — nudge accented
      // Vietnamese phrases ahead in that ambiguous case, without touching
      // uppercase ABAP-code queries ("PO") or genuinely English typing.
      if (score && !/[A-Z0-9]/.test(nq) && /[à-ỹ]/i.test(s.t)) score += 15;
      if (score) out.push({ i, s, words, orig, score });
    }
    out.sort((a, b) => b.score - a.score || b.s.n - a.s.n || a.s.t.localeCompare(b.s.t));
    return out.slice(0, 8);
  }

  function renderSuggestions(query) {
    const items = getSuggestions(query);
    activeSugg = -1;
    q.setAttribute('aria-expanded', items.length ? 'true' : 'false');
    if (!query.trim() || items.length === 0) {
      suggBox.hidden = true;
      suggBox.innerHTML = '';
      return;
    }
    const nq = normalizeTerm(query).trim();
    const nqWords = nq.split(/\s+/);
    const lastToken = nqWords[nqWords.length - 1];
    suggBox.innerHTML = items.map((it, idx) => {
      const fullPrefix = it.s.k.startsWith(nq);
      const body = it.orig.map((w, wi) => {
        // Same length guard as getSuggestions' word-prefix scoring, so a
        // highlighted word is always one that actually matched.
        const hit = (fullPrefix && wi < nqWords.length) ||
          (lastToken.length >= 2 && it.words[wi].startsWith(lastToken));
        return hit ? '<b>' + escapeHtml(w) + '</b>' : escapeHtml(w);
      }).join(' ');
      return '<div class="sugg-item" role="option" id="sugg-' + idx + '" data-idx="' + it.i + '">' +
        body + '<span class="cnt">' + it.s.n + ' view' + (it.s.n === 1 ? '' : 's') + '</span></div>';
    }).join('');
    suggBox.hidden = false;
  }

  function moveActive(dir) {
    const items = suggBox.querySelectorAll('.sugg-item');
    if (!items.length) return;
    activeSugg = (activeSugg + dir + items.length) % items.length;
    items.forEach((el, idx) => {
      el.classList.toggle('active', idx === activeSugg);
      if (idx === activeSugg) el.scrollIntoView({ block: 'nearest' });
    });
    q.setAttribute('aria-activedescendant', 'sugg-' + activeSugg);
  }

  function selectSuggAt(idx) {
    const el = suggBox.querySelectorAll('.sugg-item')[idx];
    if (el) fillSuggestion(el.dataset.idx);
  }

  function fillSuggestion(suggIdx) {
    const s = SUGGESTIONS[suggIdx];
    if (!s) return;
    q.value = s.t;
    suggBox.hidden = true;
    suggBox.innerHTML = '';
    q.setAttribute('aria-expanded', 'false');
    render();
    q.focus();
  }

  suggBox.addEventListener('mousedown', (e) => {
    const el = e.target.closest('.sugg-item');
    if (el) {
      e.preventDefault(); // keep focus in the input so blur's close timer doesn't race
      fillSuggestion(el.dataset.idx);
    }
  });

  q.addEventListener('input', () => {
    renderSuggestions(q.value);
    clearTimeout(debounce);
    debounce = setTimeout(render, 80);
  });
  q.addEventListener('keydown', (e) => {
    const open = !suggBox.hidden && suggBox.querySelectorAll('.sugg-item').length > 0;
    if (e.key === 'ArrowDown' && open) { e.preventDefault(); moveActive(1); }
    else if (e.key === 'ArrowUp' && open) { e.preventDefault(); moveActive(-1); }
    // Enter fills the highlighted suggestion, or the first one if none is
    // highlighted yet — standard combobox behavior.
    else if (e.key === 'Enter' && open) { e.preventDefault(); selectSuggAt(activeSugg >= 0 ? activeSugg : 0); }
    else if (e.key === 'Escape' && open) { suggBox.hidden = true; suggBox.innerHTML = ''; q.setAttribute('aria-expanded', 'false'); }
  });
  q.addEventListener('blur', () => { setTimeout(() => { suggBox.hidden = true; suggBox.innerHTML = ''; }, 150); });

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
