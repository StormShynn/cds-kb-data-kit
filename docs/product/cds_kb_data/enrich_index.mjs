#!/usr/bin/env node
// enrich_index.mjs — Build search_index.json from the view .md files.
//
// Usage: node enrich_index.mjs <path-to-cds-kb-data>
//
// The view .md files are the single source of truth. For each view we read the
// YAML frontmatter (name, description, app_component, tags) plus the DDL
// @EndUserText.label, and derive the searchable document. Optional frontmatter
// fields make richer enrichment possible without touching this script again:
//
//   semantic_en: <one-line English business description>
//   semantic_vi: <one-line Vietnamese business description>
//   keywords:                      # extra synonyms (any language)
//     - đơn mua hàng
//     - procurement
//
// Backward compatible: views without semantic_*/keywords fall back to the DDL
// label exactly like before. bo/lob/module are now taken from the frontmatter
// (tags + app_component), not from the previous index, so edits to the data
// repo are reflected and deleted views drop out.

import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { listViewFiles, toPathMap } from './scripts/lib/view-files.mjs';
import { extractFrontmatter, scalar, listBlock } from './scripts/lib/frontmatter.mjs';
import { parseMdTable } from './scripts/lib/md-table.mjs';

const dataRoot = process.argv[2];
if (!dataRoot) {
  console.error('Usage: node enrich_index.mjs <path-to-cds-kb-data>');
  process.exit(1);
}

const viewsDir = path.join(dataRoot, 'views');
const indexFile = path.join(dataRoot, 'index', 'search_index.json');

// ── Read current index (for options/schemaVersion only) & taxonomy ─────────
console.log('Reading index options and taxonomy...');
const indexData = JSON.parse(await fs.readFile(indexFile, 'utf-8'));
const options = indexData.options;
if (!options.fields.includes('synonyms')) options.fields.push('synonyms');
if (!options.storeFields.includes('synonyms')) options.storeFields.push('synonyms');
// usageCount isn't tokenized/searched (no place in `fields`) — it's only
// ever read back via storedFields, for cds-kb-mcp-kit's boostDocument to
// rank popular views higher in search_cds results.
if (!options.storeFields.includes('usageCount')) options.storeFields.push('usageCount');
// releaseState: same deal — read back via storedFields so search ranking
// can push "released" (confirmed SAP-delivered) views ahead of "unverified"
// ones (community-sourced Z/Y-namespace DDL under views/_UNVERIFIED/ with
// no confirmation they exist in any real SAP system).
if (!options.storeFields.includes('releaseState')) options.storeFields.push('releaseState');
// isAbstract/isMasterData/referencedByCount: same field/table/raw-column
// lookup signals field-search.html and get_views_by_field already rank by
// (see isAbstractEntity/isMasterDataEntity below), now also read back via
// storedFields so search_cds/search.html's boostDocument can sink an
// action-parameter/data-structure entity (no runtime entity set to query
// even when released) and favor a master-data view the same way, instead
// of ranking purely on text relevance.
if (!options.storeFields.includes('isAbstract')) options.storeFields.push('isAbstract');
if (!options.storeFields.includes('isMasterData')) options.storeFields.push('isMasterData');
if (!options.storeFields.includes('referencedByCount')) options.storeFields.push('referencedByCount');
// W3a/W4: private overlay + RAP / completeness signals for MCP kb_info and get_cds_view.
for (const f of ['sourceKind', 'accessControl', 'vdmViewType', 'hasDdl', 'metadataOnly']) {
  if (!options.storeFields.includes(f)) options.storeFields.push(f);
}

let taxonomy = null;
try {
  taxonomy = JSON.parse(await fs.readFile(path.join(dataRoot, 'index', 'taxonomy.json'), 'utf-8'));
  console.log('Loaded taxonomy with', Object.keys(taxonomy.tagToKeywords || {}).length, 'tag→keyword maps,', Object.keys(taxonomy.viKeywords || {}).length, 'viKeywords and', Object.keys(taxonomy.viModuleKeywords || {}).length, 'viModuleKeywords maps.');
} catch { console.log('No taxonomy.json found, skipping taxonomy synonyms.'); }
// Vietnamese business-term synonyms (taxonomy.json's viKeywords section, keyed
// by the same lowercase lob:/bo: tags as tagToKeywords) — merged into every
// view's `synonyms` so a Vietnamese query like "đơn mua hàng" finds the
// purchase-order views. Accent-insensitive matching (don mua hang ==
// đơn mua hàng) is handled separately by options.processTerm below.
const viKw = taxonomy?.viKeywords || {};
// Module-level Vietnamese terms (taxonomy.json's viModuleKeywords section,
// keyed by the lowercase module code from app_component, e.g. mm/sd/fi) —
// merged into every view whose module matches, so a Vietnamese query like
// "hoạch định sản xuất" finds the PP views even when their bo/lob tags
// carry no Vietnamese vocabulary. Covers modules whose views are thin on
// lob/bo Vietnamese coverage (CA, FS, PSM, MOB, ...) and adds module-domain
// vocabulary on top of the lob/bo terms.
const viMod = taxonomy?.viModuleKeywords || {};

// Vietnamese is accent-insensitive: "don mua hang", "đơn mua hàng" and
// "đơn mua hang" must all match the same views. Terms are normalized (NFD
// decomposition + strip combining marks + đ→d + lowercase) BOTH here at
// index time and at query time in search.html (generate-search-page.mjs
// embeds the same function) — the stored index terms are already
// normalized, so a query processed the same way matches. Also used for the
// accent-insensitive keys in index/suggestions.json (autocomplete), so it
// has to live above the view-scanning loop below (const = temporal dead
// zone until this line runs).
//
// NOTE: processTerm is a function and is therefore NOT serialized into
// search_index.json's `options` — MiniSearch's toJSON keeps the normalized
// terms, and each consumer must pass its own processTerm when loading.
// Keep the two copies (here and generate-search-page.mjs) in sync.
const VIETNAMESE_DIACRITIC_RE = /[\u0300-\u036f]/g;
function normalizeTerm(term) {
  return term
    .normalize('NFD')
    .replace(/\u0111/gi, 'd') // đ/Đ — a stroked letter, NFD can't decompose it
    .replace(VIETNAMESE_DIACRITIC_RE, '') // á à ả ã ạ... -> a
    .toLowerCase();
}

// usage-stats.json is written by scripts/pull-usage-stats.mjs, which is a
// no-op until CDS_KB_USAGE_ENDPOINT is configured — so every view's
// usageCount is just 0 (a no-op boost multiplier) until that pipeline has
// pulled real data at least once.
let usageCounts = {};
try {
  const usageStats = JSON.parse(await fs.readFile(path.join(dataRoot, 'index', 'usage-stats.json'), 'utf-8'));
  usageCounts = usageStats.counts || {};
  console.log(`Loaded usage stats for ${Object.keys(usageCounts).length} view(s).`);
} catch { console.log('No usage-stats.json found, usageCount defaults to 0 for all views.'); }

// ── Build one document per view file (source of truth) ──────────────────────
// Public tree: views/**. Optional private overlay: overlays/private/** (or
// CDS_KB_OVERLAY). Same view name → private wins. Paths in view-paths.json
// keep the real relative path so MCP datasource can open either tree.
console.log('Scanning view files...');
const publicFiles = await listViewFiles(viewsDir);
const overlayDir = process.env.CDS_KB_OVERLAY
  ? path.resolve(process.env.CDS_KB_OVERLAY)
  : path.join(dataRoot, 'overlays', 'private');
const overlayRelPrefix = path.relative(dataRoot, overlayDir).split(path.sep).join('/');
const overlayFiles = await listViewFiles(overlayDir);
const byName = new Map();
for (const f of publicFiles) {
  byName.set(f.name, {
    name: f.name,
    relPath: f.relPath,
    absPath: path.join(viewsDir, ...f.relPath.split('/')),
    pathPrefix: 'views',
    sourceKind: 'public',
  });
}
let privateOverlayCount = 0;
for (const f of overlayFiles) {
  if (f.name === 'README' || f.relPath.toLowerCase().endsWith('/readme.md') || f.relPath.toLowerCase() === 'readme.md') continue;
  byName.set(f.name, {
    name: f.name,
    relPath: f.relPath,
    absPath: path.join(overlayDir, ...f.relPath.split('/')),
    pathPrefix: overlayRelPrefix || 'overlays/private',
    sourceKind: 'private',
  });
  privateOverlayCount++;
}
const viewEntries = [...byName.values()];
if (privateOverlayCount) {
  console.log(`Private overlay: ${privateOverlayCount} view(s) from ${overlayDir} (private wins on name collision).`);
} else {
  console.log(`No private overlay views under ${overlayDir} (optional).`);
}

const docs = [];
const fieldsMap = {};
const fieldIndex = {}; // FIELD_NAME (uppercase) -> [{ view, isKey, appComponent, lob, bo, releaseState, isAbstract, isMasterData, usageCount, referencedByCount }]
const tableIndex = {}; // TABLE/VIEW NAME (uppercase) -> [{ view, relation: 'source'|'association', alias, appComponent, lob, bo, releaseState, isAbstract, isMasterData, usageCount, referencedByCount }]
const rawFieldIndex = {}; // RAW DDIC COLUMN NAME (uppercase) -> [{ view, field: <semantic name>, isKey, appComponent, lob, bo, releaseState, isAbstract, isMasterData, usageCount, referencedByCount }]
let enriched = 0, withLabel = 0, withBo = 0, synCount = 0;
let metadataOnlyCount = 0, withDdlCount = 0;
// Keyword-phrase frequency map for index/suggestions.json (search.html's
// autocomplete): keyed by the accent-insensitive normalized form, counting
// how many views carry each keyword. Collected from the same per-view `kw`
// Set as `synonyms` (taxonomy tagToKeywords/viKeywords + frontmatter
// keywords) BEFORE it's flattened into a space-joined string, so multi-word
// phrases like "đơn mua hàng" survive as phrases here (in `synonyms` they
// only exist as separate tokens). Keeps the original accented display form;
// the precomputed normalized key means search.html never needs to re-derive
// it (the two normalizeTerm copies stay limited to query-time matching).
const suggestionCounts = new Map();

// A CDS view almost always renames a raw DDIC column to a semantic name
// ("vwerk as SupplyingPlant") — src/template.mjs's Fields table already
// carries that raw name in its Source column (via splitViaSource's fallback
// branch, whenever the source is anything other than a qualified
// association path). Real DDIC column/domain names are conventionally all
// lowercase (vwerk, matnr, gjahr); a bare or cast-wrapped identifier that
// isn't — ProductName, ValidityStartDate, IsNaturalPerson — is virtually
// always another CDS-level field being routed through a type coercion, not
// a raw table column, so requiring lowercase here is a precision filter,
// not just a style preference (confirmed empirically: of ~26k source
// expressions across every view, ~2.6k are exactly this mixed-case,
// non-raw shape — indexing them as "raw DDIC columns" would be wrong often
// enough to matter).
const BARE_IDENTIFIER_RE = /^[a-z][a-z0-9_]*$/;
// The other place a raw name commonly hides: `cast(vwerks as werks_d
// preserving type) as SupplyingPlant` — splitViaSource's fallback treats
// the whole cast expression as one opaque "source" string (correctly, for
// rendering — a cast isn't a single column reference), so this repo-wide
// index needs its own targeted extraction: only the first bare argument of
// a *single*, non-nested cast(...) call, immediately followed by "as"
// (skips string literals like `cast('' as ...)` and nested/function-call
// arguments like `cast(substring(x,1,1) as ...)`, neither of which is one
// real column either). The argument may optionally be qualified by the
// view's own base table — `cast(mara.matnr as productnumber preserving
// type)` in I_PRODUCT (as select from mara) — in which case group 1 holds
// the qualifier for the caller to check against that view's sourceTable
// before trusting it; a qualifier pointing at some OTHER table, e.g.
// `cast(dd07l.domname as ...)`, is a value-help/domain lookup join, not a
// column of the view's own source, so it's deliberately left for the
// caller to reject rather than captured unconditionally here.
const CAST_RE = /^cast\s*\(\s*(?:(\w+)\.)?([A-Za-z_]\w*)\s+as\b/i;

// The immediate `as select from X` / `as projection on X` target isn't
// rendered as its own table anywhere in the .md (only association targets
// are, via the Associations table) — pull it straight out of the embedded
// DDL fenced code block instead, same pattern src/parser.mjs's
// findSelectListStart/readDDLContent use, but with no dependency on either
// (this only needs the one line, not a full parse).
const DDL_BLOCK_RE = /```(?:abap|sql)?\s*\r?\n([\s\S]*?)\r?\n```/;
function extractSourceTable(content) {
  const m = content.match(DDL_BLOCK_RE);
  if (!m) return '';
  const sm = m[1].match(/as\s+select\s+from\s+(\w+)/i) || m[1].match(/as\s+projection\s+on\s+(\w+)/i);
  return sm ? sm[1] : '';
}

// "define abstract entity" / "define root abstract entity"
// (action-parameter/data structures, e.g. D_BillOfMaterialCompareBOMP's
// "Parameters for BOM Comparison") have no runtime entity set — nothing to
// query by field, even when released — but still contain real fields
// (including renamed DDIC columns like matnr), so they otherwise surface in
// field/table/raw-column lookups indistinguishably from an actual queryable
// view. Flagged here so those lookups can rank them last instead of
// alongside real "define view entity" results.
//
// Checked line-by-line, skipping comments, for two reasons: (1) a
// commented-out annotation shouldn't count (same reasoning as
// isMasterDataEntity below), and (2) the "define (root )?abstract entity"
// keyword itself was previously matched against the whole DDL in one regex
// with no "root" branch — missed 86 "define root abstract entity" views
// entirely (e.g. D_SalesDocCreateWithRefDocP).
//
// Deliberately does NOT also check @ObjectModel.modelingPattern /
// .supportedCapabilities: #DATA_STRUCTURE — tried that as a second signal,
// but it produces false positives: I_BusinessPlace and
// I_JP_InvoiceSummaryDocument are genuine `define view`/`define view
// entity` (real runtime entity set, queryable) that both carry
// modelingPattern: #DATA_STRUCTURE anyway, describing their *shape*
// (flat, structure-like) rather than the "no runtime instance" property
// this flag needs. @VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE] doesn't
// have that problem (confirmed empirically: never appears without the
// "abstract entity" keyword also present, across the whole repo), so it's
// kept as a defensive fallback for a DDL shape the keyword regex might not
// anticipate, without reopening that false-positive risk.
function isAbstractEntity(content) {
  const m = content.match(DDL_BLOCK_RE);
  if (!m) return false;
  return m[1].split('\n').some((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('//')) return false;
    return /define\s+(root\s+)?abstract\s+entity/i.test(trimmed)
      || /#ACTION_PARAMETER_STRUCTURE\b/i.test(trimmed);
  });
}

// SAP's standard master-data marker: @ObjectModel.usageType.dataClass: #MASTER
// (dot-notation scalar, e.g. I_Product) or the equivalent nested block form
// @ObjectModel: { usageType: { dataClass: #MASTER } }. Checked line-by-line
// so a commented-out annotation ("//@ObjectModel...dataClass: #MASTER") —
// common in these DDLs when a view overrides an inherited default — doesn't
// falsely mark the view as master data.
function isMasterDataEntity(content) {
  const m = content.match(DDL_BLOCK_RE);
  if (!m) return false;
  return m[1].split('\n').some((line) => {
    const trimmed = line.trim();
    return !trimmed.startsWith('//') && /dataClass\s*:\s*#MASTER\b/i.test(trimmed);
  });
}

for (let i = 0; i < viewEntries.length; i++) {
  const { name, relPath, absPath, pathPrefix, sourceKind } = viewEntries[i];
  const content = await fs.readFile(absPath, 'utf-8');
  const fm = extractFrontmatter(content);

  const fieldsTable = parseMdTable(content, 'Fields');
  const assocTable = parseMdTable(content, 'Associations');
  if (fieldsTable || assocTable) fieldsMap[name] = { f: fieldsTable, a: assocTable };

  const tags = listBlock(fm, 'tags');
  const lob = (tags.find((t) => t.startsWith('lob:')) || '').slice(4);
  const bo = (tags.find((t) => t.startsWith('bo:')) || '').slice(3);
  const appComponent = scalar(fm, 'app_component');
  const module = appComponent ? appComponent.split('-')[0] : '';
  const releaseState = scalar(fm, 'release_state') || 'released';
  const isAbstract = isAbstractEntity(content);
  const isMasterData = isMasterDataEntity(content);
  const usageCount = usageCounts[name] || 0;
  const sourceTable = extractSourceTable(content);

  // field-index.json: FIELD_NAME -> which views expose it, so a lookup like
  // "which views have a material code field" resolves straight to a
  // short list of views instead of scanning all of them. Built from the
  // same fieldsTable already parsed above — a row is a real field ("Field |
  // Data Source" or "Field | Type | Description" depending on which shape
  // renderFieldsTable used), except when its last cell is "*Association*",
  // which means the row is actually one of the view's associations
  // (appended to the same table) rather than a data field.
  if (fieldsTable) {
    // Current table shape has Key/Association as their own columns (index
    // 1/2) — see src/template.mjs's renderFieldsTable. Older files
    // reparse-fields.mjs hasn't rewritten yet (or Hub-metadata-only views,
    // which it skips entirely) still have the "key `Name`" text + trailing
    // "*Association*" cell it replaced; both are handled here so
    // field-index.json stays correct regardless of which shape a given
    // view's Fields table is currently in.
    const isNewShape = fieldsTable.header[1] === 'Key';
    for (const row of fieldsTable.rows) {
      let fieldName, isKey;
      if (isNewShape) {
        if (row[2] === '✓') continue; // association row, not a data field
        fieldName = row[0];
        isKey = row[1] === '✓';
        const source = row[4];
        if (source) {
          const bareMatch = BARE_IDENTIFIER_RE.test(source) ? source : null;
          const castResult = !bareMatch ? source.match(CAST_RE) : null;
          const castQualifierOk = !castResult?.[1] || castResult[1].toLowerCase() === sourceTable.toLowerCase();
          const castMatch = castQualifierOk ? castResult?.[2] : null;
          const rawName = bareMatch || (castMatch && BARE_IDENTIFIER_RE.test(castMatch) ? castMatch : null);
          if (rawName && rawName.toUpperCase() !== fieldName.toUpperCase()) {
            const rawKey = rawName.toUpperCase();
            (rawFieldIndex[rawKey] ||= []).push({ view: name, field: fieldName, isKey, appComponent, lob, bo, releaseState, isAbstract, isMasterData, usageCount });
          }
        }
      } else {
        if (row[row.length - 1] === '*Association*') continue;
        fieldName = row[0];
        isKey = fieldName.startsWith('key ');
        if (isKey) fieldName = fieldName.slice(4).trim();
      }
      if (!fieldName) continue;
      const key = fieldName.toUpperCase();
      (fieldIndex[key] ||= []).push({ view: name, isKey, appComponent, lob, bo, releaseState, isAbstract, isMasterData, usageCount });
    }
  }

  // table-index.json: TABLE/VIEW NAME -> which views build on it (as their
  // FROM source) or associate to it — the reverse lookup for "I found table
  // BKPF / view I_JournalEntryItem in some ABAP code, which of our CDS
  // views involve it" instead of grepping every DDL source block by hand.
  if (sourceTable) {
    const key = sourceTable.toUpperCase();
    (tableIndex[key] ||= []).push({ view: name, relation: 'source', alias: null, appComponent, lob, bo, releaseState, isAbstract, isMasterData, usageCount });
  }
  if (assocTable) {
    for (const [alias, targetView] of assocTable.rows) {
      if (!targetView) continue;
      const key = targetView.toUpperCase();
      (tableIndex[key] ||= []).push({ view: name, relation: 'association', alias, appComponent, lob, bo, releaseState, isAbstract, isMasterData, usageCount });
    }
  }

  const label = (content.match(/@EndUserText\.label\s*:\s*'([^']+)'/) || [])[1]?.trim() || '';
  let description = scalar(fm, 'description') || label;
  if ((description.length < 40 || !description.includes(' ')) && label) description = label;

  const semEn = scalar(fm, 'semantic_en');
  const semVi = scalar(fm, 'semantic_vi');
  const semantic = [semEn, semVi].filter(Boolean).join(' — ');
  const semanticDescription = semantic || label || description;
  if (semEn || semVi) enriched++;
  if (label) withLabel++;
  if (bo) withBo++;

  // synonyms: taxonomy keywords (EN) + Vietnamese keywords (viKeywords) for
  // lob+bo, plus per-view frontmatter keywords (the LLM enrichment pipeline
  // writes Vietnamese terms there).
  const kw = new Set();
  const t2k = taxonomy?.tagToKeywords || {};
  if (lob && t2k[`lob:${lob.toLowerCase()}`]) for (const k of t2k[`lob:${lob.toLowerCase()}`]) kw.add(k);
  if (bo && t2k[`bo:${bo.toLowerCase()}`]) for (const k of t2k[`bo:${bo.toLowerCase()}`]) kw.add(k);
  if (lob && viKw[`lob:${lob.toLowerCase()}`]) for (const k of viKw[`lob:${lob.toLowerCase()}`]) kw.add(k);
  if (bo && viKw[`bo:${bo.toLowerCase()}`]) for (const k of viKw[`bo:${bo.toLowerCase()}`]) kw.add(k);
  if (module && viMod[module.toLowerCase()]) for (const k of viMod[module.toLowerCase()]) kw.add(k);
  for (const k of listBlock(fm, 'keywords')) kw.add(k);
  if (kw.size) synCount++;
  for (const k of kw) {
    if (typeof k !== 'string' || !k.trim()) continue;
    const phrase = k.trim();
    const key = normalizeTerm(phrase);
    if (key.length < 2) continue;
    const cur = suggestionCounts.get(key);
    if (cur) {
      cur.n++;
      // Prefer an accented display form (đơn mua hàng over don mua hang) —
      // same normalized key, but the diacritics are what you want shown.
      if (!/[à-ỹ]/i.test(cur.t) && /[à-ỹ]/i.test(phrase)) cur.t = phrase;
    } else {
      suggestionCounts.set(key, { t: phrase, n: 1 });
    }
  }

  const ddlBlock = content.match(DDL_BLOCK_RE);
  const hasDdl = !!(ddlBlock && /define\s+/i.test(ddlBlock[1]));
  const metadataOnly = tags.includes('metadata-only') || (!hasDdl && !scalar(fm, 'source_available'));
  if (hasDdl) withDdlCount++;
  if (metadataOnly) metadataOnlyCount++;
  const accessControl =
    (content.match(/@AccessControl\.authorizationCheck\s*:\s*(#[A-Za-z0-9_]+)/) || [])[1] ||
    (content.match(/@AccessControl\s*:\s*\{[\s\S]*?authorizationCheck\s*:\s*(#[A-Za-z0-9_]+)/) || [])[1] ||
    '';
  const vdmViewType =
    (content.match(/viewType\s*:\s*(#[A-Za-z0-9_]+)/) || [])[1] || '';

  docs.push({
    id: i,
    name,
    semanticDescription,
    description,
    tagText: tags.join(' '),
    appComponent,
    synonyms: [...kw].join(' '),
    path: `${pathPrefix}/${relPath}`,
    module,
    lob,
    bo,
    usageCount: usageCounts[name] || 0,
    releaseState,
    isAbstract,
    isMasterData,
    sourceKind,
    accessControl,
    vdmViewType,
    hasDdl,
    metadataOnly,
  });
}

console.log(`Views: ${docs.length} | with DDL label: ${withLabel} | with bo: ${withBo}`);
console.log(`Genuinely enriched (semantic_en/vi): ${enriched} | with synonyms: ${synCount}`);
console.log(`DDL present: ${withDdlCount} | metadata-only: ${metadataOnlyCount} | private overlay: ${privateOverlayCount}`);

// ── referencedByCount: how many OTHER CDS views build FROM or associate to
// this one — tableIndex[VIEW] is exactly that list, but only known once every
// view has been scanned, so this can't be computed inline in the loop above
// like isAbstract/isMasterData/usageCount. A rough "how central is this view
// to the rest of the model" popularity signal for field/table/raw-column
// lookups, independent of usageCount (real runtime call telemetry, which
// stays 0 for every view until pull-usage-stats.mjs's endpoint is configured).
const referencedByCount = {};
for (const [tkey, entries] of Object.entries(tableIndex)) {
  referencedByCount[tkey] = entries.length;
}
function attachReferencedByCount(indexObj) {
  for (const entries of Object.values(indexObj)) {
    for (const e of entries) e.referencedByCount = referencedByCount[e.view] || 0;
  }
}
attachReferencedByCount(fieldIndex);
attachReferencedByCount(tableIndex);
attachReferencedByCount(rawFieldIndex);
for (const doc of docs) doc.referencedByCount = referencedByCount[doc.name] || 0;

// ── Build MiniSearch index ─────────────────────────────────────────────────
// (normalizeTerm + VIETNAMESE_DIACRITIC_RE are defined above, before the
// view-scanning loop — the loop accumulates suggestionCounts with them.)
const MiniSearch = (await import('minisearch')).default;
const mini = new MiniSearch({ ...options, processTerm: normalizeTerm });
mini.addAll(docs);

const output = {
  schemaVersion: indexData.schemaVersion,
  builtAt: new Date().toISOString(),
  viewCount: docs.length,
  enrichedCount: enriched, // now: views with a real semantic_en/semantic_vi (not just a copied label)
  options,
  minisearch: JSON.stringify(mini),
};

try { await fs.copyFile(indexFile, indexFile + '.bak'); } catch {}
await fs.writeFile(indexFile, JSON.stringify(output), 'utf-8');
const sizeKB = (Buffer.byteLength(JSON.stringify(output)) / 1024).toFixed(0);
console.log(`\nWrote ${indexFile} (${sizeKB} KB) — viewCount=${docs.length}, enrichedCount=${enriched}`);

// ── suggestions.json — keyword phrases for search.html's autocomplete ───────
// Ranked by how many views share the phrase (frequency), capped so the
// embedded copy in search.html stays small; search.html re-ranks by match
// quality (prefix > word-prefix > contains) with frequency as tie-breaker.
const MAX_SUGGESTIONS = 4000;
const suggestionItems = [...suggestionCounts.entries()]
  .map(([k, v]) => ({ t: v.t, n: v.n, k }))
  .sort((a, b) => b.n - a.n || a.t.localeCompare(b.t))
  .slice(0, MAX_SUGGESTIONS);
const suggestionsFile = path.join(dataRoot, 'index', 'suggestions.json');
await fs.writeFile(
  suggestionsFile,
  JSON.stringify({ builtAt: output.builtAt, itemCount: suggestionItems.length, items: suggestionItems }),
  'utf-8',
);
console.log(`Wrote ${suggestionsFile} (${suggestionItems.length} of ${suggestionCounts.size} unique keyword phrases)`);

// ── version manifest ───────────────────────────────────────────────────────
function resolveCommit() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA;
  try { return execSync(`git -C "${dataRoot}" rev-parse HEAD`, { encoding: 'utf-8' }).trim(); }
  catch { return `builtAt:${output.builtAt}`; }
}
const versionManifest = {
  schemaVersion: output.schemaVersion ?? 1,
  commit: resolveCommit(),
  builtAt: output.builtAt,
  viewCount: output.viewCount,
  enrichedCount: output.enrichedCount,
};
await fs.writeFile(path.join(dataRoot, 'index', 'version.json'), JSON.stringify(versionManifest, null, 2) + '\n', 'utf-8');
console.log(`version manifest commit=${versionManifest.commit.slice(0, 8)}`);

// ── view-paths.json — NAME -> real path, consulted by cds-kb-mcp-kit's ─────
// datasource.mjs before it falls back to guessing views/<NAME>.md. Lets
// views live in per-module subfolders without the server needing to know
// the folder scheme at all.
const pathMapFile = path.join(dataRoot, 'index', 'view-paths.json');
const pathMap = {};
for (const e of viewEntries) pathMap[e.name] = `${e.pathPrefix}/${e.relPath}`;
await fs.writeFile(pathMapFile, JSON.stringify(pathMap), 'utf-8');
console.log(`Wrote ${pathMapFile} (${viewEntries.length} entries, private=${privateOverlayCount})`);

// ── view-fields.js — NAME -> {f: fields table, a: associations table} ──────
// A .js file assigning a global, not a .json file, so coverage-report.html
// can load it with a plain <script src>: that works when the report is
// opened straight off disk (file://), unlike fetch()/XHR, which Chrome
// blocks cross-file under file://. Kept out of coverage.json/report.html
// themselves so this ~10MB of largely-static field data doesn't get
// rewritten into those on every 6-hourly check-coverage.yml run — it only
// changes here, when views/** actually changes.
const fieldsFile = path.join(dataRoot, 'index', 'view-fields.js');
const fieldsJson = JSON.stringify(fieldsMap);
await fs.writeFile(fieldsFile, `window.__VIEW_FIELDS__ = ${fieldsJson};\n`, 'utf-8');
console.log(`Wrote ${fieldsFile} (${(Buffer.byteLength(fieldsJson) / 1024 / 1024).toFixed(1)} MB, ${Object.keys(fieldsMap).length} entries)`);

// ── field-index.json — FIELD_NAME -> [{view, isKey, appComponent, lob, bo}] ─
// The reverse of view-fields.js: given a field name (e.g. "MATNR" / a
// business term already resolved to it), look up which views expose it
// instead of scanning every view's Fields table. Consumers (e.g. an MCP
// server) needing fuzzy/business-language lookup ("material code" ->
// MATNR) should resolve the term to a field name themselves (e.g. via
// taxonomy.json's keyword maps) before querying this index — it's an exact,
// case-insensitive map, not a search index.
for (const key of Object.keys(fieldIndex)) {
  fieldIndex[key].sort((a, b) => a.view.localeCompare(b.view));
}
const fieldIndexFile = path.join(dataRoot, 'index', 'field-index.json');
const fieldIndexOutput = {
  builtAt: output.builtAt,
  fieldCount: Object.keys(fieldIndex).length,
  fields: fieldIndex,
};
await fs.writeFile(fieldIndexFile, JSON.stringify(fieldIndexOutput), 'utf-8');
console.log(`Wrote ${fieldIndexFile} (${Object.keys(fieldIndex).length} distinct field name(s))`);

// ── table-index.json — TABLE/VIEW NAME -> [{view, relation, alias, appComponent, lob, bo}] ─
// Same idea as field-index.json but keyed on what a view is built FROM
// (its base source table/view) or associates TO, rather than what fields
// it exposes — "which CDS views touch table/view X" instead of "which CDS
// views have field X".
for (const key of Object.keys(tableIndex)) {
  tableIndex[key].sort((a, b) => a.view.localeCompare(b.view));
}
const tableIndexFile = path.join(dataRoot, 'index', 'table-index.json');
const tableIndexOutput = {
  builtAt: output.builtAt,
  tableCount: Object.keys(tableIndex).length,
  tables: tableIndex,
};
await fs.writeFile(tableIndexFile, JSON.stringify(tableIndexOutput), 'utf-8');
console.log(`Wrote ${tableIndexFile} (${Object.keys(tableIndex).length} distinct table/view name(s))`);

// ── raw-field-index.json — RAW DDIC COLUMN NAME -> [{view, field, isKey, appComponent, lob, bo}] ─
// The lookup field-index.json and table-index.json can't do: "I found VWERK
// in an old ABAP report / SE11 — which CDS views is that, under whatever
// semantic name the view renamed it to?" (here, `vwerk as SupplyingPlant`).
for (const key of Object.keys(rawFieldIndex)) {
  rawFieldIndex[key].sort((a, b) => a.view.localeCompare(b.view));
}
const rawFieldIndexFile = path.join(dataRoot, 'index', 'raw-field-index.json');
const rawFieldIndexOutput = {
  builtAt: output.builtAt,
  rawFieldCount: Object.keys(rawFieldIndex).length,
  fields: rawFieldIndex,
};
await fs.writeFile(rawFieldIndexFile, JSON.stringify(rawFieldIndexOutput), 'utf-8');
console.log(`Wrote ${rawFieldIndexFile} (${Object.keys(rawFieldIndex).length} distinct raw DDIC column name(s))`);
