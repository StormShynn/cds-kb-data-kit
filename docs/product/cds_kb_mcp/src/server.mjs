#!/usr/bin/env node
// cds-kb-mcp — a DATALESS MCP server for the SAP CDS knowledge base.
// Ships no view data. Points at either a local clone or a remote (public GitHub) data repo.
//
//   cds-kb-mcp --data   /path/to/cds_kb_data          # or sibling ../cds_kb_data in this harness
//   cds-kb-mcp --remote https://raw.githubusercontent.com/<user>/cds-kb-data/main
//   cds-kb-mcp                                        # auto: sibling cds_kb_data if present, else GitHub remote
//
// The index file is self-describing (carries its own MiniSearch options), so this server
// has zero schema coupling to how the data repo was built.

import MiniSearch from 'minisearch';
import { z } from 'zod';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { McpServer, ResourceTemplate, createMcpHandler } from '@modelcontextprotocol/server';
import { serveStdio } from '@modelcontextprotocol/server/stdio';
import { toNodeHandler } from '@modelcontextprotocol/node';
import express from 'express';
import { resolveDataSource, SECTION_NAMES } from './datasource.mjs';
import { recordView, flushOnExit } from './usage-tracker.mjs';
import { composeQuery } from './query-compose.mjs';
import { generateCdsView, validateCdsDdl } from './ddl-tools.mjs';
import { createAuthMiddleware, describeAuthMode } from './auth.mjs';
import { proposeQueryLibraryEntry } from './propose-library.mjs';
import { oauthEnabled, describeOAuth, buildOAuthMetadata, authorizeHandler, tokenHandler } from './oauth.mjs';
import { inc, histogram, healthHandler, metricsHandler, rateLimitMiddleware } from './metrics.mjs';

// ── Vietnamese accent-insensitive normalization ─────────────────────────────
// The data repo's enrich_index.mjs builds search_index.json with
// accent-stripped terms (NFD + strip combining marks + đ→d + lowercase), so
// "đơn mua hàng", "don mua hang" and "đơn mua hang" all match the same views.
// processTerm is a function, so it is NOT serialized into the index's
// `options` — every consumer must pass its own when loading. search.html
// (scripts/generate-search-page.mjs) embeds the same copy; keep them in
// sync if this ever changes.
const VIETNAMESE_DIACRITIC_RE = /[\u0300-\u036f]/g;
function normalizeTerm(term) {
  return term
    .normalize('NFD')
    .replace(/\u0111/gi, 'd') // đ/Đ — a stroked letter, NFD can't decompose it
    .replace(VIETNAMESE_DIACRITIC_RE, '') // á à ả ã ạ... -> a
    .toLowerCase();
}

// ── Query-time ranking knobs (tunable independently of the index) ───────────
// boostDocument multiplies MiniSearch's relevance score by structural
// signals enrich_index.mjs computes per view — the same ones get_views_by_field
// ranks by, adapted from that additive scoring to a multiplier since
// MiniSearch only exposes boostDocument, not a custom comparator:
//   × 0.01  isAbstract — "define (root)? abstract entity" / an
//           @VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE] structure has no
//           runtime entity set to query, even when released; sinks it below
//           everything else regardless of how well its text matches.
//   × 0.15  releaseState === 'unverified' — community-sourced Z/Y-namespace,
//           not confirmed to exist in any real SAP system.
//   × 1.5   isMasterData (@ObjectModel.usageType.dataClass: #MASTER) — what
//           "which view covers <business topic>" usually means, ahead of a
//           transactional view that happens to match the same terms.
//   × log-scaled usageCount (real runtime call telemetry; see
//     usage-tracker.mjs + the data repo's scripts/pull-usage-stats.mjs —
//     0 for every doc, hence a no-op ×1, until that pipeline has run) and
//     referencedByCount (how many other views build FROM/associate to this
//     one right now) — the latter weighted well below the former since it's
//     a coarser proxy, both just nudging rather than drowning out real
//     relevance matches.
const SEARCH_OPTIONS = {
  boost: { name: 3, semanticDescription: 2.5, synonyms: 2, tagText: 1.5, description: 1, appComponent: 1 },
  // prefix/fuzzy only apply to terms >= 4 chars, or terms containing an
  // uppercase letter/digit: ABAP view codes like "PO" / "I_PURCHASEORDER"
  // still prefix-match, while short lowercase Vietnamese business words
  // match exactly instead of colliding with English terms ("bán"->"ban"
  // would otherwise prefix/fuzzy-match "bank", flooding bank views). Same
  // policy as the data repo's search.html.
  prefix: (term) => /[A-Z0-9]/.test(term) || term.length >= 4,
  fuzzy: (term) => term.length >= 4 ? 0.2 : false,
  boostDocument: (_id, _term, storedFields) => {
    if (storedFields?.isAbstract) return 0.01;
    let boost = 1;
    if (storedFields?.releaseState === 'unverified') boost *= 0.15;
    if (storedFields?.isMasterData) boost *= 1.5;
    boost *= 1 + Math.log10(1 + (storedFields?.usageCount || 0));
    boost *= 1 + Math.log10(1 + (storedFields?.referencedByCount || 0)) * 0.1;
    return boost;
  },
};

// ── Module alias mapping (human-friendly → code) ────────────────────────────
// Allows AI agents to filter by natural names instead of requiring exact codes.
const MODULE_ALIASES = {
  finance: 'FI', financial: 'FI', accounting: 'FI',
  sales: 'SD', 'sales & distribution': 'SD', distribution: 'SD',
  procurement: 'MM', purchasing: 'MM', materials: 'MM', 'material management': 'MM',
  production: 'PP', manufacturing: 'PP', 'production planning': 'PP',
  controlling: 'CO', 'cost controlling': 'CO',
  'plant maintenance': 'PM', maintenance: 'PM',
  'quality management': 'QM', quality: 'QM',
  logistics: 'LE', 'logistics execution': 'LE',
  warehouse: 'LE', 'warehouse management': 'LE',
  'project management': 'PPM', project: 'PPM',
  'real estate': 'RE', realestate: 'RE',
  'supply chain': 'SCM', scm: 'SCM',
  'transportation management': 'TM', transportation: 'TM', transport: 'TM',
  crm: 'CRM', 'customer relationship': 'CRM',
  basis: 'BC', 'basis components': 'BC',
  'cross application': 'CA', cross: 'CA',
  sustainability: 'SUS',
  plm: 'PLM', 'product lifecycle': 'PLM',
  'environment health safety': 'EHS', ehs: 'EHS',
};

function resolveModule(input) {
  if (!input) return undefined;
  const lower = input.toLowerCase().trim();
  return MODULE_ALIASES[lower] || input.toUpperCase();
}

// Extracts a view's own outgoing dependencies (its base FROM target, plus
// every association's target view) straight from its rendered markdown —
// the same two facts the data repo's enrich_index.mjs pulls out to build
// table-index.json's *reverse* direction, but there's no forward index for
// this (every view only ever needs its own two facts, not "all views'
// dependencies" as a bulk lookup), so get_view_dependencies below just
// parses them fresh off whatever get_cds_view would already return.
const DDL_BLOCK_RE = /```(?:abap|sql)?\s*\r?\n([\s\S]*?)\r?\n```/;
const ASSOC_ROW_RE = /^\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|/gm;
function parseViewDependencies(md) {
  const deps = [];
  const ddlMatch = md.match(DDL_BLOCK_RE);
  if (ddlMatch) {
    const sourceMatch = ddlMatch[1].match(/as\s+select\s+from\s+(\w+)/i) || ddlMatch[1].match(/as\s+projection\s+on\s+(\w+)/i);
    if (sourceMatch) deps.push({ target: sourceMatch[1], relation: 'source', alias: null });
  }
  const assocStart = md.indexOf('## Associations');
  if (assocStart !== -1) {
    const sourceStart = md.indexOf('## Source Code');
    const assocSection = md.slice(assocStart, sourceStart !== -1 ? sourceStart : undefined);
    for (const m of assocSection.matchAll(ASSOC_ROW_RE)) {
      deps.push({ target: m[2], relation: 'association', alias: m[1] });
    }
  }
  return deps;
}

// ── Query library search ────────────────────────────────────────────────────
// index/query-library.json is a small, human-curated list of saved queries
// (the Query Builder embeds the same file), so a dependency-free token
// overlap ranking is plenty — no MiniSearch instance needed. normalizeTerm
// keeps it Vietnamese accent-insensitive like the main index.
function searchQueryLibrary(query, limit) {
  if (!query || !Array.isArray(queryLibraryData) || queryLibraryData.length === 0) return [];
  const tokens = String(query).split(/\s+/).map(normalizeTerm).filter(Boolean);
  if (tokens.length === 0) return [];
  return queryLibraryData
    .map((q) => {
      const title = normalizeTerm(q.title || '');
      const description = normalizeTerm(q.description || '');
      const viewName = normalizeTerm(q.viewName || '');
      const viewText = (q.views || []).map((v) => normalizeTerm(v.name || '')).join(' ');
      let score = 0;
      for (const t of tokens) {
        if (title === t) score += 5;
        else if (title.includes(t)) score += 4;
        if (viewName === t) score += 3;
        else if (viewName.includes(t)) score += 2;
        if (viewText.includes(t)) score += 2;
        if (description.includes(t)) score += 1;
      }
      return { q, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.q);
}

// ── State ───────────────────────────────────────────────────────────────────
const ds = resolveDataSource();
let mini;
let meta = {};
let moduleStats = {};  // { module: { count, lob } }
let docsByName = new Map(); // UPPER(name) → storedFields doc (RAP / completeness facets)
let taxonomyData = null;
let fieldIndexData = null; // field-index.json: { fields: { FIELD_NAME: [{view, isKey, appComponent, lob, bo}] } }
let tableIndexData = null; // table-index.json: { tables: { TABLE_NAME: [{view, relation, alias, appComponent, lob, bo}] } }
let rawFieldIndexData = null; // raw-field-index.json: { fields: { RAW_DDIC_NAME: [{view, field, isKey, appComponent, lob, bo}] } }
let embeddingsData = null; // index/embeddings.json or null
let queryLibraryData = null; // index/query-library.json (array of saved queries) or null
let usageStatsConfigured = false;

function cosineSimilarity(a, b) {
  if (!a || !b || a.length !== b.length || a.length === 0) return 0;
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  if (na === 0 || nb === 0) return 0;
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

async function embedQueryText(text) {
  const apiKey = (process.env.CDS_KB_EMBED_API_KEY || '').trim();
  if (!apiKey || !text) return null;
  const url = (process.env.CDS_KB_EMBED_URL || 'https://api.openai.com/v1/embeddings').trim();
  const model = (process.env.CDS_KB_EMBED_MODEL || embeddingsData?.model || 'text-embedding-3-small').trim();
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model, input: String(text).slice(0, 8000) }),
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data?.[0]?.embedding || null;
  } catch {
    return null;
  }
}

/**
 * BM25 search then optional hybrid re-rank with embeddings.
 * When search_mode=hybrid but no API key / no embeddings → BM25 only.
 */
async function rankedSearch(query, { filter, limit = 10, searchMode = 'bm25' } = {}) {
  const wantHybrid = searchMode === 'hybrid';
  const fetchN = wantHybrid && embeddingsData?.vectors ? Math.max(limit, 50) : limit;
  let results = mini.search(query, { ...SEARCH_OPTIONS, filter }).slice(0, fetchN);

  if (wantHybrid && embeddingsData?.vectors && results.length > 0) {
    const qVec = await embedQueryText(query);
    if (qVec) {
      const scores = results.map((r) => r.score);
      const maxS = Math.max(...scores, 1e-9);
      const minS = Math.min(...scores);
      const span = Math.max(maxS - minS, 1e-9);
      results = results.map((r) => {
        const name = String(r.name || '').toUpperCase();
        const vec = embeddingsData.vectors[name] || embeddingsData.vectors[r.name];
        const cos = vec ? cosineSimilarity(qVec, vec) : 0;
        const normBm25 = (r.score - minS) / span;
        const hybrid = 0.6 * normBm25 + 0.4 * cos;
        return { ...r, score: hybrid * maxS, _hybrid: hybrid, _cos: cos };
      }).sort((a, b) => b.score - a.score);
    }
  }
  return results.slice(0, limit);
}

async function loadIndex() {
  const w = await ds.loadIndexWrapper();
  if (!w || !w.minisearch || !w.options) {
    throw new Error('Index file is not in the expected self-describing format. Rebuild it in the data repo.');
  }
  // Parsed once and reused for both MiniSearch.loadJS and the stats pass below —
  // MiniSearch.loadJSON(json, opts) is just loadJS(JSON.parse(json), opts) internally,
  // so calling it directly here avoids parsing the same multi-MB index string twice
  // (each periodic refresh was holding old+new mini plus two parses of the index
  // live at once, which is what pushed the process over its heap limit on BTP).
  mini = null;
  const ms = JSON.parse(w.minisearch);
  mini = MiniSearch.loadJS(ms, { ...w.options, processTerm: normalizeTerm });
  meta = { viewCount: w.viewCount, enrichedCount: w.enrichedCount, builtAt: w.builtAt };

  // Version manifest is best-effort — older data repos don't ship one.
  try {
    const v = await ds.getVersion?.();
    if (v) meta.commit = v.commit;
  } catch { /* ignore */ }

  // Build module stats + docsByName by iterating stored fields directly (MiniSearch has no public allDocs API).
  const stored = ms.storedFields || {};
  const stats = {};
  const byName = new Map();
  let privateCount = 0;
  let metadataOnlyCount = 0;
  let withDdlCount = 0;
  let withAccessControlCount = 0;
  for (const doc of Object.values(stored)) {
    if (doc?.name) byName.set(String(doc.name).toUpperCase(), doc);
    if (doc?.sourceKind === 'private') privateCount++;
    if (doc?.metadataOnly) metadataOnlyCount++;
    if (doc?.hasDdl) withDdlCount++;
    if (doc?.accessControl) withAccessControlCount++;
    const mod = doc.module || 'UNKNOWN';
    if (!stats[mod]) stats[mod] = { count: 0, lob: doc.lob || '', bos: new Set() };
    stats[mod].count++;
    if (doc.bo) stats[mod].bos.add(doc.bo);
  }
  // Convert sets to arrays for serialization
  for (const v of Object.values(stats)) {
    v.bos = [...v.bos].sort();
  }
  moduleStats = stats;
  docsByName = byName;
  meta.privateCount = privateCount;
  meta.metadataOnlyCount = metadataOnlyCount;
  meta.withDdlCount = withDdlCount;
  meta.withAccessControlCount = withAccessControlCount;

  taxonomyData = await ds.getTaxonomy();
  fieldIndexData = await ds.getFieldIndex?.() ?? null;
  tableIndexData = await ds.getTableIndex?.() ?? null;
  rawFieldIndexData = await ds.getRawFieldIndex?.() ?? null;
  try {
    embeddingsData = await ds.getEmbeddings?.() ?? null;
  } catch {
    embeddingsData = null;
  }
  try {
    queryLibraryData = await ds.getQueryLibrary?.() ?? null;
  } catch {
    queryLibraryData = null;
  }
  usageStatsConfigured = [...docsByName.values()].some((d) => (d?.usageCount || 0) > 0);
  if (!usageStatsConfigured && ds.root) {
    usageStatsConfigured = existsSync(path.join(ds.root, 'index', 'usage-stats.json'));
  }
}

// loadIndex() only reassigns mini/meta/moduleStats/taxonomyData after every
// await above succeeds, so a throw here never leaves them half-updated —
// safe to call repeatedly and just keep serving the last-good state on error.
function refreshIndexPeriodically(intervalMs) {
  if (!(intervalMs > 0)) return;
  setInterval(async () => {
    const prevCommit = meta.commit;
    try {
      await loadIndex();
      if (meta.commit && meta.commit !== prevCommit) {
        console.error(`[cds-kb-mcp] index refreshed: ${prevCommit || '(none)'} -> ${meta.commit} (${meta.viewCount} views)`);
      }
    } catch (e) {
      console.error(`[cds-kb-mcp] periodic index refresh failed, keeping previous data: ${e.message}`);
    }
  }, intervalMs);
}

const SERVER_VERSION = '2.3.0';
const SERVER_INSTRUCTIONS =
  `This is cds-kb-mcp v${SERVER_VERSION}, built by StormShyn. ` +
  'The first time you use a tool from this server in a conversation, briefly mention to the user ' +
  '(in your own words, one short sentence) that you are using the cds-kb-mcp SAP CDS knowledge base, built by StormShyn. ' +
  'Do not repeat this mention on later tool calls in the same conversation.';

// Shared structured snapshot used by the kb_info tool and the cds://stats resource.
function buildKbInfo() {
  return {
    source: ds.describe(),
    server: `cds-kb-mcp ${SERVER_VERSION}`,
    auth: describeAuthMode(),
    views: meta.viewCount ?? 0,
    enriched: meta.enrichedCount ?? 0,
    enrichPct: meta.viewCount ? Number(((100 * (meta.enrichedCount ?? 0)) / meta.viewCount).toFixed(1)) : 0,
    privateOverlay: meta.privateCount ?? 0,
    withDdl: meta.withDdlCount ?? 0,
    metadataOnly: meta.metadataOnlyCount ?? 0,
    withAccessControl: meta.withAccessControlCount ?? 0,
    embeddings: embeddingsData?.vectors ? 'yes' : 'no',
    usageEndpoint: (process.env.CDS_KB_USAGE_ENDPOINT || '').trim() ? 'set' : 'unset',
    usageStatsConfigured: usageStatsConfigured ? 'yes' : 'no',
    modules: Object.keys(moduleStats).length,
    builtAt: meta.builtAt ?? '',
    commit: meta.commit ? meta.commit.slice(0, 8) : '',
  };
}

function createServer() {
  const server = new McpServer(
    { name: 'cds-knowledge-base', version: SERVER_VERSION },
    { instructions: SERVER_INSTRUCTIONS },
  );

  // ── Tool 1: search_cds ─────────────────────────────────────────────────────
  server.registerTool(
    'search_cds',
    {
      title: 'Search SAP CDS views',
      description:
        'Search SAP S/4HANA released CDS views by business meaning / name / tags. ' +
        'Returns a ranked shortlist (name + path + description). ' +
        'Use this INSTEAD of grepping or reading routers, then call get_cds_view to read one. ' +
        'Optionally filter by module (FI, SD, MM... or natural names like "Finance", "Procurement"), lob, or bo. ' +
        'Optional RAP filters: accessControl, vdmViewType, hasDdl, sourceKind. ' +
        'search_mode=hybrid re-ranks BM25 with embeddings when available and CDS_KB_EMBED_API_KEY is set. ' +
        'IMPORTANT for S/4HANA Cloud Developer Extensibility (custom ABAP CDS views): each result\'s ' +
        'devExtStatus (SAP\'s ReleaseStateDeveloperExtensibility) is the ONLY field here that answers ' +
        '"can I `association to`/`select from` this entity in a custom Developer Extensibility CDS view" — ' +
        'a view being "released" in general (returned by this search at all) does NOT imply devExtStatus is ' +
        '"released" too; they are independent. devExtStatus null means this KB has no signal either way — ' +
        'verify with the ADT compiler/content-assist before using such a view in a Developer Extensibility DDL. ' +
        'atcState/atcSuccessor are a THIRD, independent signal from SAP\'s own ABAP Cloud released-objects list — ' +
        'when atcState is "deprecated" or "notToBeReleased", atcSuccessor (if set) names the concrete replacement view.',
      inputSchema: {
        query: z.string().describe('Natural-language or keyword query, e.g. "overdue customer invoices"'),
        module: z.string().optional().describe('Module filter — code (FI, SD, MM) or name ("Finance", "Procurement")'),
        lob: z.string().optional().describe('Line-of-business filter, e.g. "Finance" (partial match)'),
        bo: z.string().optional().describe('Business object filter, e.g. "salesorder" (partial match)'),
        accessControl: z.string().optional().describe('RAP @AccessControl.authorizationCheck value filter, e.g. "#CHECK"'),
        vdmViewType: z.string().optional().describe('VDM view type filter, e.g. "#BASIC"'),
        hasDdl: z.boolean().optional().describe('If true, only views with DDL source; if false, only without'),
        sourceKind: z.string().optional().describe('e.g. "public" or "private" (private overlay)'),
        devExtStatus: z.enum(['released', 'not_released']).optional().describe(
          'Filter by SAP Developer Extensibility release state (ReleaseStateDeveloperExtensibility) — ' +
          'NOT the same as the general release state. Use "released" to only get views confirmed usable ' +
          'via `association to`/`select from` in a custom S/4HANA Cloud ABAP Developer Extensibility CDS view.'
        ),
        atcState: z.enum(['released', 'deprecated', 'notToBeReleased']).optional().describe(
          'Filter by SAP\'s ABAP Cloud released-objects (ATC/Clean Core) state — a third, independent signal.'
        ),
        search_mode: z.enum(['bm25', 'hybrid']).optional().describe('bm25 (default) or hybrid (BM25 + embeddings when available)'),
        limit: z.number().int().min(1).max(50).optional().describe('Max results (default 10)'),
      },
      outputSchema: z.object({
        query: z.string(),
        count: z.number(),
        results: z.array(z.object({
          name: z.string(),
          score: z.number(),
          module: z.string().nullable(),
          lob: z.string().nullable(),
          bo: z.string().nullable(),
          description: z.string().nullable(),
          devExtStatus: z.string().nullable(),
          atcState: z.string().nullable(),
          atcSuccessor: z.string().nullable(),
          path: z.string(),
        })),
      }),
    },
    async ({ query, module, lob, bo, accessControl, vdmViewType, hasDdl, sourceKind, devExtStatus, atcState, search_mode = 'bm25', limit = 10 }) => {
      const resolvedModule = resolveModule(module);
      const contains = (a, b) => (a || '').toLowerCase().includes((b || '').toLowerCase());
      const facetFilter = (r) =>
        (!resolvedModule || (r.module || '').toUpperCase() === resolvedModule) &&
        (!lob || contains(r.lob, lob)) &&
        (!bo || contains(r.bo, bo)) &&
        (!accessControl || contains(r.accessControl, accessControl)) &&
        (!vdmViewType || contains(r.vdmViewType, vdmViewType)) &&
        (hasDdl === undefined || !!r.hasDdl === hasDdl) &&
        (!sourceKind || (r.sourceKind || 'public').toLowerCase() === sourceKind.toLowerCase()) &&
        (!devExtStatus || r.devExtStatus === devExtStatus) &&
        (!atcState || r.atcState === atcState);

      const results = await rankedSearch(query, { filter: facetFilter, limit, searchMode: search_mode });
      const structured = {
        query,
        count: results.length,
        results: results.map((r) => ({
          name: r.name,
          score: r.score,
          module: r.module ?? null,
          lob: r.lob ?? null,
          bo: r.bo ?? null,
          description: r.semanticDescription || r.description || null,
          devExtStatus: r.devExtStatus ?? null,
          atcState: r.atcState ?? null,
          atcSuccessor: r.atcSuccessor ?? null,
          path: r.path,
        })),
      };
      if (results.length === 0) {
        const hint = resolvedModule ? ` (module=${resolvedModule})` : '';
        return { content: [{ type: 'text', text: `No CDS views matched "${query}"${hint}. Try broader terms or remove filters.` }], structuredContent: structured };
      }
      const lines = results.map((r, i) => {
        const desc = r.semanticDescription || r.description || '';
        const devExtNote = r.devExtStatus ? `  [dev-ext: ${r.devExtStatus}]` : '';
        const atcNote = r.atcState ? `  [atc: ${r.atcState}${r.atcSuccessor ? ` -> ${r.atcSuccessor}` : ''}]` : '';
        return `${i + 1}. **${r.name}**  [${r.appComponent || r.module || '-'}]  (score ${r.score.toFixed(1)})${devExtNote}${atcNote}\n   ${desc}\n   path: ${r.path}`;
      });
      return {
        content: [{ type: 'text', text: `Top ${results.length} CDS views for "${query}":\n\n${lines.join('\n')}\n\nUse get_cds_view(name) to read the full definition, or get_cds_view(name, sections) for specific parts.` }],
        structuredContent: structured,
      };
    },
  );

  // ── Tool 2: get_cds_view ────────────────────────────────────────────────────
  server.registerTool(
    'get_cds_view',
    {
      title: 'Get a CDS view definition',
      description:
        'Return markdown of one CDS view by its exact name. ' +
        'By default returns ALL sections. Use the sections parameter to retrieve only what you need ' +
        '(saves tokens for large views). Available sections: metadata, fields, associations, source.',
      inputSchema: {
        name: z.string().describe('Exact view name, e.g. I_SalesDocument (case-insensitive)'),
        sections: z.array(z.enum(['metadata', 'fields', 'associations', 'source']))
          .optional()
          .describe('Which sections to return. Omit for all. Options: metadata, fields, associations, source'),
      },
      outputSchema: z.object({
        name: z.string(),
        found: z.boolean(),
        sections: z.array(z.string()).nullable(),
        text: z.string(),
      }),
    },
    async ({ name, sections }) => {
      try {
        const wantAll = !sections || sections.length === 0;
        const wantMeta = wantAll || sections.includes('metadata');
        let text = sections && sections.length > 0
          ? await ds.getViewSections(name, sections)
          : await ds.getView(name);
        if (wantMeta) {
          const doc = docsByName.get(String(name).trim().toUpperCase());
          if (doc) {
            text += '\n\n## Index RAP facets\n' +
              `- sourceKind: ${doc.sourceKind || 'public'}\n` +
              `- accessControl: ${doc.accessControl || '(none)'}\n` +
              `- vdmViewType: ${doc.vdmViewType || '(none)'}\n` +
              `- hasDdl: ${doc.hasDdl ? 'yes' : 'no'}\n` +
              `- metadataOnly: ${doc.metadataOnly ? 'yes' : 'no'}\n` +
              `- isAbstract: ${doc.isAbstract ? 'yes' : 'no'}\n` +
              `- isMasterData: ${doc.isMasterData ? 'yes' : 'no'}\n` +
              `- releaseState: ${doc.releaseState || '?'}`;
          }
        }
        recordView(name);
        return { content: [{ type: 'text', text }], structuredContent: { name, found: true, sections: sections ?? null, text } };
      } catch (e) {
        // Distinguish "view does not exist" from transport/cache failure so callers know whether to retry.
        const notFound = e?.code === 'ENOENT' || /404/.test(e?.message || '');
        const msg = notFound
          ? `View "${name}" not found. Use search_cds first to get the exact name.`
          : `Failed to fetch view "${name}": ${e?.message || 'unknown error'}. The data source may be temporarily unreachable.`;
        return { content: [{ type: 'text', text: msg }], isError: true, structuredContent: { name, found: false, sections: sections ?? null, text: msg } };
      }
    },
  );

  // ── Tool 3: get_taxonomy ───────────────────────────────────────────────────
  server.registerTool(
    'get_taxonomy',
    {
      title: 'Get knowledge base taxonomy',
      description:
        'Returns the semantic map of the knowledge base (Lines of Business -> Business Objects -> Keywords). ' +
        'Use this to understand how data is organized before searching, or to discover valid tags for get_views_by_tag. ' +
        'Provides rich keywords and synonyms that can help formulate better search queries.',
      inputSchema: {},
      outputSchema: z.object({
        lobCount: z.number(),
        boCount: z.number(),
        text: z.string(),
      }),
    },
    async () => {
      if (taxonomyData && taxonomyData.lobs && taxonomyData.bos) {
        const lobLines = taxonomyData.lobs.map(l => `- **${l.tag}** (${l.name}) — Keywords: ${l.keywords.join(', ')}`);
        // Take a sample of top 20 BOs to avoid token bloat, or maybe just list BO counts
        const boSample = taxonomyData.bos.slice(0, 30).map(b => `  - **${b.tag}** — Keywords: ${b.keywords.join(', ')}`);

        const text = `SAP CDS Knowledge Base Taxonomy\n\n` +
          `## Lines of Business (${taxonomyData.lobs.length})\n${lobLines.join('\n')}\n\n` +
          `## Business Objects (${taxonomyData.bos.length} total, sample of 30)\n${boSample.join('\n')}\n\n` +
          `Use get_views_by_tag(tag) to list all views for a specific tag (e.g. "bo:salesorder").`;
        return { content: [{ type: 'text', text }], structuredContent: { lobCount: taxonomyData.lobs.length, boCount: taxonomyData.bos.length, text } };
      }

      // Fallback if taxonomy not available
      const sorted = Object.entries(moduleStats).sort((a, b) => b[1].count - a[1].count);
      const lines = sorted.map(([mod, info]) => {
        const boList = info.bos.length > 0 ? `  BOs: ${info.bos.join(', ')}` : '';
        return `- **${mod}** (${info.count} views) — ${info.lob}${boList}`;
      });
      const text = `SAP Modules (${sorted.length} modules, ${meta.viewCount} total views):\n\n${lines.join('\n')}`;
      return {
        content: [{ type: 'text', text }],
        structuredContent: { lobCount: sorted.length, boCount: Object.values(moduleStats).reduce((a, m) => a + m.bos.length, 0), text },
      };
    },
  );

  // ── Tool 4: get_views_by_tag ───────────────────────────────────────────────
  server.registerTool(
    'get_views_by_tag',
    {
      title: 'Get views by tag',
      description:
        'Retrieve a paginated list of all CDS views that possess a specific tag (e.g., "bo:salesorder" or "lob:finance"). ' +
        'This is a deterministic way to browse the knowledge base when search_cds is too broad. ' +
        'Use get_taxonomy to discover available tags.',
      inputSchema: {
        tag: z.string().describe('The exact tag to filter by, e.g. "bo:salesorder"'),
        limit: z.number().int().min(1).max(200).optional().describe('Max results (default 50)'),
      },
      outputSchema: z.object({
        tag: z.string(),
        count: z.number(),
        results: z.array(z.object({ name: z.string(), description: z.string().nullable(), path: z.string() })),
      }),
    },
    async ({ tag, limit = 50 }) => {
      // Parse tag type and value
      const parts = tag.split(':');
      let filterFn = () => false;

      if (parts.length === 2) {
        const [type, value] = [parts[0].toLowerCase(), parts[1].toLowerCase()];
        if (type === 'lob') {
          filterFn = (r) => (r.lob || '').toLowerCase() === value;
        } else if (type === 'bo') {
          filterFn = (r) => (r.bo || '').toLowerCase() === value;
        } else {
          filterFn = (r) => (r.tagText || '').toLowerCase().includes(tag.toLowerCase());
        }
      } else {
        filterFn = (r) => (r.tagText || '').toLowerCase().includes(tag.toLowerCase());
      }

      // Use MiniSearch.wildcard to return all documents that pass the filter
      const results = mini.search(MiniSearch.wildcard, { filter: filterFn }).slice(0, limit);
      const structured = {
        tag,
        count: results.length,
        results: results.map((r) => ({ name: r.name, description: r.semanticDescription || r.description || null, path: r.path })),
      };
      if (results.length === 0) {
        return { content: [{ type: 'text', text: `No views found for tag "${tag}". Use get_taxonomy to find valid tags.` }], structuredContent: structured };
      }

      const lines = results.map((r, i) => {
        const desc = r.semanticDescription || r.description || '';
        return `${i + 1}. **${r.name}**\n   ${desc}\n   path: ${r.path}`;
      });

      return {
        content: [{ type: 'text', text: `Found ${results.length} CDS views for tag "${tag}":\n\n${lines.join('\n')}` }],
        structuredContent: structured,
      };
    },
  );

  // ── Tool 5: get_views_by_field ──────────────────────────────────────────────
  server.registerTool(
    'get_views_by_field',
    {
      title: 'Find CDS views by field, table, or source view name',
      description:
        'Given an exact field name (e.g. "MATNR", "CompanyCode"), a raw DDIC column name from SE11/an old ' +
        'ABAP report (e.g. "VWERK" — which a CDS view may expose under a renamed semantic name, like ' +
        '"SupplyingPlant"), or a table/CDS-view name found in ABAP code or DDL source (e.g. "BKPF", ' +
        '"I_JournalEntryItem"), return every CDS view that exposes that field, is built FROM that table/view, ' +
        'or associates to it. Use this INSTEAD of searching the SAP Business Accelerator Hub website by hand ' +
        'when you already have a concrete name from code — it is an exact, case-insensitive lookup, not fuzzy ' +
        'search (use search_cds for business-language queries instead).',
      inputSchema: {
        name: z.string().describe('Exact field name, raw DDIC column name, or table/CDS-view name, e.g. "MATNR", "VWERK", or "I_JournalEntryItem"'),
        limit: z.number().int().min(1).max(100).optional().describe('Max results per category (default 30)'),
      },
      outputSchema: z.object({
        name: z.string(),
        fieldMatches: z.array(z.object({ view: z.string(), isKey: z.boolean(), appComponent: z.string().nullable(), devExtStatus: z.string().nullable(), atcState: z.string().nullable(), atcSuccessor: z.string().nullable() })),
        tableMatches: z.array(z.object({ view: z.string(), relation: z.string(), alias: z.string().nullable(), appComponent: z.string().nullable(), devExtStatus: z.string().nullable(), atcState: z.string().nullable(), atcSuccessor: z.string().nullable() })),
        rawMatches: z.array(z.object({ view: z.string(), field: z.string(), isKey: z.boolean(), appComponent: z.string().nullable(), devExtStatus: z.string().nullable(), atcState: z.string().nullable(), atcSuccessor: z.string().nullable() })),
      }),
    },
    async ({ name, limit = 30 }) => {
      const key = name.trim().toUpperCase();
      // Lowest (most useful) score first. Penalties compose instead of one
      // tier per combination: abstract entity/action-parameter structure
      // (define abstract entity — no runtime entity set to query at all,
      // even when released) dominates everything else; unverified
      // (community-sourced Z/Y-namespace) dominates the rest; then prefer a
      // match where the field IS the view's key over a mere attribute,
      // prefer a master-data view (@ObjectModel.usageType.dataClass:
      // #MASTER, e.g. I_Product) over a transactional one, and only then
      // break remaining ties by I_ prefix (plain alphabetical sort otherwise
      // puts other prefixes ahead of I_ views half the time purely because
      // their prefix letter sorts earlier), then by two fine tie-breaks
      // weighted well below the +1 above — usageCount (real runtime call
      // telemetry; stays 0 for every view until pull-usage-stats.mjs's
      // endpoint is configured, hence the small weight) and
      // referencedByCount (how many other views build FROM/associate to
      // this one right now, i.e. how central it is to the rest of the model).
      const rankOf = (m) => {
        let score = 0;
        if (m.isAbstract) score += 1000;
        else if (m.releaseState === 'unverified') score += 100;
        if (!m.isKey) score += 10;
        if (!m.isMasterData) score += 5;
        if (!m.view.startsWith('I_')) score += 1;
        score -= (m.referencedByCount || 0) * 0.001;
        score -= (m.usageCount || 0) * 0.002;
        return score;
      };
      const byRank = (a, b) => rankOf(a) - rankOf(b);
      const fieldMatches = [...(fieldIndexData?.fields?.[key] || [])].sort(byRank);
      const tableMatches = [...(tableIndexData?.tables?.[key] || [])].sort(byRank);
      const rawMatches = [...(rawFieldIndexData?.fields?.[key] || [])].sort(byRank);

      if (fieldMatches.length === 0 && tableMatches.length === 0 && rawMatches.length === 0) {
        const built = fieldIndexData || tableIndexData || rawFieldIndexData
          ? ''
          : ' (this data repo has no field-index.json/table-index.json/raw-field-index.json yet — rebuild its index)';
        return {
          content: [{ type: 'text', text: `No CDS view uses "${name}" as a field, raw DDIC column, table, or association target${built}. Try search_cds for a business-language query instead.` }],
          structuredContent: { name: key, fieldMatches: [], tableMatches: [], rawMatches: [] },
        };
      }

      const abstractNote = (m) => (m.isAbstract ? ' ⚠️ abstract entity/action-parameter structure, not a queryable view' : m.isMasterData ? ' (master data)' : '');
      const parts = [];
      if (fieldMatches.length > 0) {
        const shown = fieldMatches.slice(0, limit);
        const lines = shown.map((m) => `- **${m.view}**${m.isKey ? ' (key)' : ''}  [${m.appComponent || '-'}]${abstractNote(m)}`);
        parts.push(`## As a field (${fieldMatches.length} view${fieldMatches.length === 1 ? '' : 's'})\n${lines.join('\n')}` +
          (fieldMatches.length > shown.length ? `\n...and ${fieldMatches.length - shown.length} more (raise limit)` : ''));
      }
      if (tableMatches.length > 0) {
        const shown = tableMatches.slice(0, limit);
        const lines = shown.map((m) => `- **${m.view}** — ${m.relation === 'source' ? 'built FROM this' : `associates via \`${m.alias}\``}  [${m.appComponent || '-'}]${abstractNote(m)}`);
        parts.push(`## As a table/view reference (${tableMatches.length} view${tableMatches.length === 1 ? '' : 's'})\n${lines.join('\n')}` +
          (tableMatches.length > shown.length ? `\n...and ${tableMatches.length - shown.length} more (raise limit)` : ''));
      }
      if (rawMatches.length > 0) {
        const shown = rawMatches.slice(0, limit);
        const lines = shown.map((m) => `- **${m.view}** — renamed to \`${m.field}\`${m.isKey ? ' (key)' : ''}  [${m.appComponent || '-'}]${abstractNote(m)}`);
        parts.push(`## As a raw DDIC column, renamed by CDS (${rawMatches.length} view${rawMatches.length === 1 ? '' : 's'})\n${lines.join('\n')}` +
          (rawMatches.length > shown.length ? `\n...and ${rawMatches.length - shown.length} more (raise limit)` : ''));
      }

      const structured = {
        name: key,
        fieldMatches: fieldMatches.map((m) => ({ view: m.view, isKey: !!m.isKey, appComponent: m.appComponent ?? null, devExtStatus: m.devExtStatus ?? null, atcState: m.atcState ?? null, atcSuccessor: m.atcSuccessor ?? null })),
        tableMatches: tableMatches.map((m) => ({ view: m.view, relation: m.relation, alias: m.alias ?? null, appComponent: m.appComponent ?? null, devExtStatus: m.devExtStatus ?? null, atcState: m.atcState ?? null, atcSuccessor: m.atcSuccessor ?? null })),
        rawMatches: rawMatches.map((m) => ({ view: m.view, field: m.field, isKey: !!m.isKey, appComponent: m.appComponent ?? null, devExtStatus: m.devExtStatus ?? null, atcState: m.atcState ?? null, atcSuccessor: m.atcSuccessor ?? null })),
      };
      return {
        content: [{ type: 'text', text: `Results for "${name}":\n\n${parts.join('\n\n')}\n\nUse get_cds_view(name) to read any of these.` }],
        structuredContent: structured,
      };
    },
  );

  // ── Tool 6: get_view_dependencies ───────────────────────────────────────────
  server.registerTool(
    'get_view_dependencies',
    {
      title: 'Show what a CDS view depends on and what depends on it',
      description:
        'Impact analysis for a CDS view: "Depends on" is its own base FROM table/view plus association ' +
        'targets (parsed fresh from its DDL); "Depended on by" is every OTHER CDS view that selects FROM it ' +
        'or associates to it (from table-index.json, the same reverse index get_views_by_field uses). ' +
        'Use this before changing or deprecating a view to see what would break, or to understand how a ' +
        'view fits into the wider model without opening several views by hand.',
      inputSchema: {
        name: z.string().describe('Exact CDS view name, e.g. "I_MaterialStock_2"'),
        limit: z.number().int().min(1).max(100).optional().describe('Max "depended on by" results (default 30)'),
      },
      outputSchema: z.object({
        name: z.string(),
        dependsOn: z.array(z.object({ target: z.string(), relation: z.string(), alias: z.string().nullable(), devExtStatus: z.string().nullable(), atcState: z.string().nullable(), atcSuccessor: z.string().nullable() })),
        dependents: z.array(z.object({ view: z.string(), relation: z.string(), alias: z.string().nullable(), appComponent: z.string().nullable(), devExtStatus: z.string().nullable(), atcState: z.string().nullable(), atcSuccessor: z.string().nullable() })),
      }),
    },
    async ({ name, limit = 30 }) => {
      const key = name.trim().toUpperCase();

      let dependsOn = [];
      try {
        const md = await ds.getView(name);
        dependsOn = parseViewDependencies(md);
      } catch (e) {
        const notFound = e?.code === 'ENOENT' || /404/.test(e?.message || '');
        if (notFound) {
          return {
            content: [{ type: 'text', text: `View "${name}" not found. Use search_cds first to get the exact name.` }],
            isError: true,
            structuredContent: { name: key, dependsOn: [], dependents: [] },
          };
        }
        // Non-fatal for the "depends on" half — still show "depended on by" below if the view name is otherwise valid.
      }

      const dependents = tableIndexData?.tables?.[key] || [];

      if (dependsOn.length === 0 && dependents.length === 0) {
        return {
          content: [{ type: 'text', text: `"${name}" has no recorded dependencies either way — it may be a base/interface view nothing else builds on, or a leaf view with no associations.` }],
          structuredContent: { name: key, dependsOn: [], dependents: [] },
        };
      }

      // dependsOn targets come from parsing this view's own DDL text, not
      // from the index — release signals are looked up separately via
      // docsByName so callers can see, per association target, whether it's
      // safe to keep in a custom Developer Extensibility CDS view.
      const releaseSignalsOf = (target) => {
        const doc = docsByName.get(String(target).toUpperCase());
        return { devExtStatus: doc?.devExtStatus ?? null, atcState: doc?.atcState ?? null, atcSuccessor: doc?.atcSuccessor ?? null };
      };

      const parts = [];
      if (dependsOn.length > 0) {
        const lines = dependsOn.map((d) => {
          const sig = releaseSignalsOf(d.target);
          const notes = [
            sig.devExtStatus ? `dev-ext: ${sig.devExtStatus}` : '',
            sig.atcState ? `atc: ${sig.atcState}${sig.atcSuccessor ? ` -> ${sig.atcSuccessor}` : ''}` : '',
          ].filter(Boolean).join(', ');
          return `- **${d.target}** (${d.relation === 'source' ? 'FROM' : `via \`${d.alias}\``})${notes ? `  [${notes}]` : ''}`;
        });
        parts.push(`## Depends on (${dependsOn.length})\n${lines.join('\n')}`);
      }
      if (dependents.length > 0) {
        const shown = dependents.slice(0, limit);
        const lines = shown.map((m) => `- **${m.view}** — ${m.relation === 'source' ? 'built FROM this' : `associates via \`${m.alias}\``}  [${m.appComponent || '-'}]`);
        parts.push(`## Depended on by (${dependents.length} view${dependents.length === 1 ? '' : 's'})\n${lines.join('\n')}` +
          (dependents.length > shown.length ? `\n...and ${dependents.length - shown.length} more (raise limit)` : ''));
      }

      const structured = {
        name: key,
        dependsOn: dependsOn.map((d) => ({ target: d.target, relation: d.relation, alias: d.alias ?? null, ...releaseSignalsOf(d.target) })),
        dependents: dependents.map((m) => ({ view: m.view, relation: m.relation, alias: m.alias ?? null, appComponent: m.appComponent ?? null, devExtStatus: m.devExtStatus ?? null, atcState: m.atcState ?? null, atcSuccessor: m.atcSuccessor ?? null })),
      };
      return {
        content: [{ type: 'text', text: `Dependencies for ${name}:\n\n${parts.join('\n\n')}\n\nUse get_cds_view(name) to read any of these.` }],
        structuredContent: structured,
      };
    },
  );

  // ── Tool 7: kb_info ─────────────────────────────────────────────────────────
  server.registerTool(
    'kb_info',
    {
      title: 'Knowledge base info',
      description:
        'Report the active data source, server version, view count, enrichment %, private overlay count, ' +
        'DDL/metadata completeness, embeddings/usage flags, and index build time.',
      inputSchema: {},
      outputSchema: z.object({
        source: z.string(),
        server: z.string(),
        auth: z.string(),
        views: z.number(),
        enriched: z.number(),
        enrichPct: z.number(),
        privateOverlay: z.number(),
        withDdl: z.number(),
        metadataOnly: z.number(),
        withAccessControl: z.number(),
        embeddings: z.string(),
        usageEndpoint: z.string(),
        usageStatsConfigured: z.string(),
        modules: z.number(),
        builtAt: z.string(),
        commit: z.string(),
      }),
    },
    async () => {
      const info = buildKbInfo();
      return {
        content: [{
          type: 'text', text:
            `source: ${info.source}\n` +
            `server: ${info.server}\n` +
            `auth: ${info.auth}\n` +
            `views: ${info.views}\n` +
            `enriched: ${info.enriched} (${info.enrichPct}%)\n` +
            `privateOverlay: ${info.privateOverlay}\n` +
            `withDdl: ${info.withDdl}\n` +
            `metadataOnly: ${info.metadataOnly}\n` +
            `withAccessControl: ${info.withAccessControl}\n` +
            `embeddings: ${info.embeddings}\n` +
            `usageEndpoint: ${info.usageEndpoint}\n` +
            `usageStatsConfigured: ${info.usageStatsConfigured}\n` +
            `modules: ${info.modules}\n` +
            `builtAt: ${info.builtAt}\n` +
            `commit: ${info.commit}`,
        }],
        structuredContent: info,
      };
    },
  );

  // ── Tool 8: suggest_base_views ──────────────────────────────────────────────
  server.registerTool(
    'suggest_base_views',
    {
      title: 'Suggest base CDS views for a new query',
      description:
        'Recommend concrete (non-abstract) CDS views to use as the FROM base when composing a new view. ' +
        'Uses the same ranking as search_cds, then filters out abstract entities and unverified entries. ' +
        'Prefer these over inventing a base name. Next: compose_query or generate_cds_view.',
      inputSchema: {
        query: z.string().describe('Business intent or keywords for the base view'),
        module: z.string().optional().describe('Module filter — code (FI, SD, MM) or name ("Finance", "Procurement")'),
        lob: z.string().optional().describe('Line-of-business filter (partial match)'),
        bo: z.string().optional().describe('Business object filter (partial match)'),
        accessControl: z.string().optional().describe('RAP @AccessControl.authorizationCheck value filter'),
        vdmViewType: z.string().optional().describe('VDM view type filter'),
        hasDdl: z.boolean().optional().describe('If true, only views with DDL source; if false, only without'),
        sourceKind: z.string().optional().describe('e.g. "public" or "private"'),
        devExtStatus: z.enum(['released', 'not_released']).optional().describe(
          'Filter by SAP Developer Extensibility release state — see search_cds for why this is a ' +
          'separate axis from the general release state.'
        ),
        atcState: z.enum(['released', 'deprecated', 'notToBeReleased']).optional().describe(
          'Filter by SAP\'s ABAP Cloud released-objects (ATC/Clean Core) state — see search_cds.'
        ),
        search_mode: z.enum(['bm25', 'hybrid']).optional().describe('bm25 (default) or hybrid'),
        limit: z.number().int().min(1).max(20).optional().describe('Max suggestions (default 5)'),
      },
      outputSchema: z.object({
        query: z.string(),
        count: z.number(),
        results: z.array(z.object({
          name: z.string(),
          score: z.number(),
          module: z.string().nullable(),
          appComponent: z.string().nullable(),
          description: z.string().nullable(),
          devExtStatus: z.string().nullable(),
          atcState: z.string().nullable(),
          atcSuccessor: z.string().nullable(),
          path: z.string(),
        })),
      }),
    },
    async ({ query, module, lob, bo, accessControl, vdmViewType, hasDdl, sourceKind, devExtStatus, atcState, search_mode = 'bm25', limit = 5 }) => {
      const resolvedModule = resolveModule(module);
      const contains = (a, b) => (a || '').toLowerCase().includes((b || '').toLowerCase());
      const facetFilter = (r) =>
        (!resolvedModule || (r.module || '').toUpperCase() === resolvedModule) &&
        (!lob || contains(r.lob, lob)) &&
        (!bo || contains(r.bo, bo)) &&
        (!accessControl || contains(r.accessControl, accessControl)) &&
        (!vdmViewType || contains(r.vdmViewType, vdmViewType)) &&
        (hasDdl === undefined || !!r.hasDdl === hasDdl) &&
        (!sourceKind || (r.sourceKind || 'public').toLowerCase() === sourceKind.toLowerCase()) &&
        (!devExtStatus || r.devExtStatus === devExtStatus) &&
        (!atcState || r.atcState === atcState) &&
        !r.isAbstract &&
        r.releaseState !== 'unverified';

      const results = await rankedSearch(query, { filter: facetFilter, limit, searchMode: search_mode });
      const structured = {
        query,
        count: results.length,
        results: results.map((r) => ({
          name: r.name,
          score: r.score,
          module: r.module ?? null,
          appComponent: r.appComponent ?? null,
          description: r.semanticDescription || r.description || null,
          devExtStatus: r.devExtStatus ?? null,
          atcState: r.atcState ?? null,
          atcSuccessor: r.atcSuccessor ?? null,
          path: r.path,
        })),
      };
      if (results.length === 0) {
        const hint = resolvedModule ? ` (module=${resolvedModule})` : '';
        return { content: [{ type: 'text', text: `No suitable base views for "${query}"${hint}. Try broader terms or remove filters.` }], structuredContent: structured };
      }
      const lines = results.map((r, i) => {
        const reasons = [];
        if (r.isMasterData) reasons.push('master-data');
        if ((r.referencedByCount || 0) > 0) reasons.push(`referencedBy=${r.referencedByCount}`);
        if (r.hasDdl) reasons.push('has DDL');
        if (r.sourceKind === 'private') reasons.push('private-overlay');
        if (r.devExtStatus) reasons.push(`dev-ext: ${r.devExtStatus}`);
        if (r.atcState) reasons.push(`atc: ${r.atcState}${r.atcSuccessor ? ` -> ${r.atcSuccessor}` : ''}`);
        const why = reasons.length ? ` — ${reasons.join(', ')}` : '';
        const desc = r.semanticDescription || r.description || '';
        return `${i + 1}. **${r.name}**  [${r.appComponent || r.module || '-'}]  (score ${r.score.toFixed(1)})${why}\n   ${desc}\n   path: ${r.path}`;
      });
      return {
        content: [{
          type: 'text',
          text: `Suggested base views for "${query}":\n\n${lines.join('\n')}\n\nNext: compose_query or generate_cds_view with views[0].name = the pick above.`,
        }],
        structuredContent: structured,
      };
    },
  );

  // Release-signal check for compose_query/generate_cds_view: looks up each
  // referenced view's devExtStatus AND atcState (docsByName — the loaded
  // index's per-view stored fields, see enrich_index.mjs) and turns a
  // SAP-confirmed problem into an actionable warning instead of letting the
  // DDL get generated silently and fail ADT activation (or build on a
  // deprecated object) later. See
  // hook/quy-trinh-check-cds-released-developer-extensibility.md for why
  // neither signal can be inferred from the general release_state alone.
  function releaseSignalWarnings(args) {
    const names = new Set();
    if (args.baseView) names.add(args.baseView);
    for (const v of args.views || []) {
      if (v?.name) names.add(v.name);
    }
    const warnings = [];
    const unknown = [];
    for (const name of names) {
      const doc = docsByName.get(String(name).trim().toUpperCase());
      const status = doc?.devExtStatus;
      if (status === 'not_released') {
        warnings.push(
          `Developer Extensibility: ${name} is SAP-confirmed "Not Released" for Developer Extensibility — ` +
          '`association to`/`select from` it will fail ADT activation in a custom S/4HANA Cloud ABAP Developer ' +
          'Extensibility CDS view. See hook/quy-trinh-check-cds-released-developer-extensibility.md for ' +
          'mitigation options (key-field-only association, a released Value-Help view, or an app-tier join).'
        );
      } else if (!status && doc) {
        unknown.push(name);
      }
      if (doc?.atcState === 'deprecated' || doc?.atcState === 'notToBeReleased') {
        const successorNote = doc.atcSuccessor ? ` SAP names \`${doc.atcSuccessor}\` as the successor — use that instead.` : '';
        warnings.push(
          `SAP ATC/Clean Core: ${name} is "${doc.atcState}" on SAP's own ABAP Cloud released-objects list ` +
          `(independent of Developer Extensibility status above).${successorNote}`
        );
      }
    }
    if (unknown.length) {
      warnings.push(
        `Developer Extensibility: no signal in this KB for ${unknown.join(', ')} — verify with the ADT compiler ` +
        'or content-assist (Ctrl+Space) before using in a Developer Extensibility CDS view; released elsewhere ' +
        'does not imply released for Developer Extensibility.'
      );
    }
    return warnings;
  }

  // ── Tool 9: compose_query ───────────────────────────────────────────────────
  server.registerTool(
    'compose_query',
    {
      title: 'Compose OpenSQL + CDS view skeleton',
      description:
        'Build OpenSQL SELECT and a CDS define view entity skeleton from a structured query object ' +
        '(same shape as the Query Builder share JSON: views[], select, where, groupBy, having, orderBy, viewName). ' +
        'Warns when any views[].name is SAP-confirmed "Not Released" for Developer Extensibility (would fail ADT ' +
        'activation in a custom S/4HANA Cloud ABAP Developer Extensibility CDS view), has no such signal in this KB, ' +
        'or is deprecated/notToBeReleased on SAP\'s own ABAP Cloud released-objects list (names a successor when SAP does).',
      inputSchema: {
        views: z.array(z.object({
          alias: z.string().optional(),
          name: z.string().nullable().optional(),
          joinType: z.string().nullable().optional(),
          on: z.string().nullable().optional(),
          mode: z.enum(['join', 'assoc']).nullable().optional(),
          raw: z.string().nullable().optional(),
        })).describe('FROM/JOIN/assoc rows; views[0].name is required'),
        select: z.string().optional(),
        where: z.string().optional(),
        groupBy: z.string().optional(),
        having: z.string().optional(),
        orderBy: z.string().optional(),
        viewName: z.string().optional().describe('CDS view entity name (default Z_MyView)'),
      },
      outputSchema: z.object({
        openSql: z.string().nullable(),
        cdsView: z.string().nullable(),
        warnings: z.array(z.string()),
        text: z.string(),
      }),
    },
    async (args) => {
      const result = composeQuery(args);
      const warnings = [...releaseSignalWarnings(args), ...result.warnings];
      const parts = [];
      if (warnings.length) parts.push('## Warnings\n' + warnings.map((w) => `- ${w}`).join('\n'));
      if (result.openSql) parts.push('## OpenSQL\n```sql\n' + result.openSql + '\n```');
      if (result.cdsView) parts.push('## CDS view skeleton\n```abap\n' + result.cdsView + '\n```');
      if (!parts.length) parts.push('compose_query produced no output.');
      return {
        content: [{ type: 'text', text: parts.join('\n\n') }],
        structuredContent: { openSql: result.openSql ?? null, cdsView: result.cdsView ?? null, warnings, text: parts.join('\n\n') },
      };
    },
  );

  // ── Tool 10: generate_cds_view ──────────────────────────────────────────────
  server.registerTool(
    'generate_cds_view',
    {
      title: 'Generate a CDS view entity DDL skeleton',
      description:
        'Generate annotated CDS DDL (@AccessControl, @EndUserText.label + define view entity) from a base view ' +
        'or the same structured views[] used by compose_query. Does not invent field lists from Hub metadata alone — ' +
        'pass select/where yourself. Validate with validate_cds_ddl next. Same Developer Extensibility / ' +
        'SAP ATC release-signal warnings as compose_query.',
      inputSchema: {
        name: z.string().optional().describe('New view name (default Z_MyView)'),
        label: z.string().optional(),
        accessControl: z.string().optional().describe('e.g. #CHECK, #NOT_REQUIRED (default #CHECK)'),
        baseView: z.string().optional().describe('Shortcut when views[] is omitted'),
        views: z.array(z.object({
          alias: z.string().optional(),
          name: z.string().nullable().optional(),
          joinType: z.string().nullable().optional(),
          on: z.string().nullable().optional(),
          mode: z.enum(['join', 'assoc']).nullable().optional(),
          raw: z.string().nullable().optional(),
        })).optional(),
        select: z.string().optional(),
        where: z.string().optional(),
        groupBy: z.string().optional(),
        having: z.string().optional(),
        orderBy: z.string().optional(),
      },
      outputSchema: z.object({
        ddl: z.string().nullable(),
        openSql: z.string().nullable(),
        warnings: z.array(z.string()),
        text: z.string(),
      }),
    },
    async (args) => {
      const result = generateCdsView(args);
      const warnings = [...releaseSignalWarnings(args), ...result.warnings];
      const parts = [];
      if (warnings.length) parts.push('## Warnings\n' + warnings.map((w) => `- ${w}`).join('\n'));
      if (result.ddl) parts.push('## DDL\n```abap\n' + result.ddl + '\n```');
      if (result.openSql) parts.push('## OpenSQL\n```sql\n' + result.openSql + '\n```');
      const text = parts.join('\n\n') || 'No DDL generated.';
      return {
        content: [{ type: 'text', text }],
        structuredContent: { ddl: result.ddl ?? null, openSql: result.openSql ?? null, warnings, text },
      };
    },
  );

  // ── Tool 11: validate_cds_ddl ───────────────────────────────────────────────
  server.registerTool(
    'validate_cds_ddl',
    {
      title: 'Validate CDS DDL with abaplint',
      description:
        'Parse CDS DDL via @abaplint/core CDSParser and return soft diagnostics (never crashes the MCP process). ' +
        'Use after generate_cds_view. Does not connect to SAP.',
      inputSchema: {
        ddl: z.string().describe('Full CDS DDL text to validate'),
      },
      outputSchema: z.object({
        ok: z.boolean(),
        parsed: z.boolean(),
        name: z.string().nullable(),
        fieldCount: z.number(),
        assocCount: z.number(),
        diagnostics: z.array(z.string()),
        text: z.string(),
      }),
    },
    async ({ ddl }) => {
      const result = await validateCdsDdl(ddl);
      const text =
        `ok: ${result.ok}\n` +
        `parsed: ${result.parsed}\n` +
        `name: ${result.name || '(none)'}\n` +
        `fieldCount: ${result.fieldCount}\n` +
        `assocCount: ${result.assocCount}\n` +
        (result.diagnostics.length
          ? `diagnostics:\n${result.diagnostics.map((d) => `- ${d}`).join('\n')}`
          : 'diagnostics: (none)');
      return {
        content: [{ type: 'text', text }],
        structuredContent: {
          ok: result.ok,
          parsed: result.parsed,
          name: result.name ?? null,
          fieldCount: result.fieldCount,
          assocCount: result.assocCount,
          diagnostics: result.diagnostics,
          text,
        },
      };
    },
  );

  // ── Tool 12: propose_query_library_entry ───────────────────────────────────
  server.registerTool(
    'propose_query_library_entry',
    {
      title: 'Propose a query-library.json entry',
      description:
        'Build a JSON snippet + markdown PR body for adding a saved query to index/query-library.json. ' +
        'If GITHUB_TOKEN and CDS_KB_PROPOSE_REPO (owner/name) are set, opens a draft PR on a propose/query-* branch. Never merges.',
      inputSchema: {
        title: z.string().describe('Short title for the saved query'),
        description: z.string().optional(),
        contributor: z.string().optional(),
        views: z.array(z.object({
          alias: z.string().optional(),
          name: z.string().nullable().optional(),
          joinType: z.string().nullable().optional(),
          on: z.string().nullable().optional(),
          mode: z.enum(['join', 'assoc']).nullable().optional(),
          raw: z.string().nullable().optional(),
        })).describe('FROM/JOIN/assoc rows; views[0].name is required'),
        select: z.string().optional(),
        where: z.string().optional(),
        groupBy: z.string().optional(),
        having: z.string().optional(),
        orderBy: z.string().optional(),
        viewName: z.string().optional(),
      },
      outputSchema: z.object({
        jsonSnippet: z.string(),
        markdown: z.string(),
        prUrl: z.string().nullable(),
        error: z.string().nullable(),
        text: z.string(),
      }),
    },
    async (args) => {
      const result = await proposeQueryLibraryEntry(args);
      const parts = [
        '## JSON snippet for index/query-library.json',
        '```json',
        result.jsonSnippet,
        '```',
        '',
        result.markdown,
      ];
      if (result.prUrl) parts.push(`\nDraft PR: ${result.prUrl}`);
      if (result.error) parts.push(`\nGitHub propose failed (local snippet still valid): ${result.error}`);
      const text = parts.join('\n');
      return {
        content: [{ type: 'text', text }],
        structuredContent: { jsonSnippet: result.jsonSnippet, markdown: result.markdown, prUrl: result.prUrl ?? null, error: result.error ?? null, text },
      };
    },
  );

  // ── Tool 13: search_query_library ─────────────────────────────────────────
  server.registerTool(
    'search_query_library',
    {
      title: 'Search the shared query library',
      description:
        'Find a saved/reusable query in index/query-library.json by title, description, target CDS view name, or generated view name. ' +
        'Entries are curated, PR-reviewed saved queries (propose_query_library_entry produces the snippet + draft PR to add one). ' +
        'Use this to reuse a known-good query shape instead of composing from scratch: take a result\'s views[]/select/where into compose_query or generate_cds_view.',
      inputSchema: {
        query: z.string().describe('Search text — title words, CDS view name, or business intent'),
        limit: z.number().int().min(1).max(50).optional().describe('Max results (default 10)'),
      },
      outputSchema: z.object({
        query: z.string(),
        count: z.number(),
        results: z.array(z.object({
          title: z.string(),
          description: z.string().nullable(),
          contributor: z.string().nullable(),
          views: z.array(z.string()),
          viewName: z.string().nullable(),
        })),
      }),
    },
    async ({ query, limit = 10 }) => {
      const hits = searchQueryLibrary(query, limit);
      const structured = {
        query,
        count: hits.length,
        results: hits.map((q) => ({
          title: q.title || '(untitled)',
          description: q.description ?? null,
          contributor: q.contributor ?? null,
          views: (q.views || []).map((v) => v.name).filter(Boolean),
          viewName: q.viewName ?? null,
        })),
      };
      if (hits.length === 0) {
        const hint = Array.isArray(queryLibraryData) && queryLibraryData.length === 0
          ? ' The query library is empty — seed it with propose_query_library_entry or a PR adding an object to index/query-library.json.'
          : '';
        return { content: [{ type: 'text', text: `No saved query matched "${query}".${hint}` }], structuredContent: structured };
      }
      const lines = hits.map((q, i) => {
        const views = (q.views || []).map((v) => v.name).filter(Boolean).join(', ');
        const contrib = q.contributor ? `  (by ${q.contributor})` : '';
        const desc = q.description ? `\n   ${q.description}` : '';
        return `${i + 1}. **${q.title || '(untitled)'}**${contrib}\n   views: ${views}${q.viewName ? `  -> ${q.viewName}` : ''}${desc}`;
      });
      return {
        content: [{
          type: 'text',
          text: `${hits.length} saved quer${hits.length === 1 ? 'y' : 'ies'} for "${query}":\n\n${lines.join('\n')}\n\nLoad it into compose_query / generate_cds_view (views[] + select/where) to reuse the shape.`,
        }],
        structuredContent: structured,
      };
    },
  );

  // ── Resources ────────────────────────────────────────────────────────────
  // cds://view/<NAME> — full markdown of one view (dynamic template).
  server.registerResource(
    'view',
    new ResourceTemplate('cds://view/{name}', { list: undefined }),
    { title: 'CDS view definition', description: 'Full markdown definition of a single CDS view by name', mimeType: 'text/markdown' },
    async (uri, variables) => {
      const name = variables?.name || '';
      try {
        const text = await ds.getView(name);
        return { contents: [{ uri: uri.href, text, mimeType: 'text/markdown' }] };
      } catch {
        return { contents: [{ uri: uri.href, text: `View "${name}" not found. Use search_cds to find the exact name.` }] };
      }
    },
  );

  // cds://taxonomy — the semantic map as JSON.
  server.registerResource(
    'taxonomy',
    'cds://taxonomy',
    { title: 'Knowledge base taxonomy', mimeType: 'application/json' },
    async (uri) => ({
      contents: [{ uri: uri.href, text: JSON.stringify(taxonomyData || { lobs: [], bos: [] }), mimeType: 'application/json' }],
    }),
  );

  // cds://stats — live kb_info snapshot as JSON.
  server.registerResource(
    'stats',
    'cds://stats',
    { title: 'Knowledge base stats', mimeType: 'application/json' },
    async (uri) => ({
      contents: [{ uri: uri.href, text: JSON.stringify(buildKbInfo(), null, 2), mimeType: 'application/json' }],
    }),
  );

  // cds://query-library — the shared saved-query list (index/query-library.json) as JSON.
  server.registerResource(
    'query-library',
    'cds://query-library',
    { title: 'Shared query library', mimeType: 'application/json' },
    async (uri) => ({
      contents: [{ uri: uri.href, text: JSON.stringify(Array.isArray(queryLibraryData) ? queryLibraryData : [], null, 2), mimeType: 'application/json' }],
    }),
  );

  // ── Prompts ────────────────────────────────────────────────────────────────
  server.registerPrompt(
    'explain_view',
    {
      title: 'Explain a CDS view',
      description: 'Ask the model to fetch a CDS view and explain its purpose, key fields, associations, and usage.',
      argsSchema: { name: z.string().describe('CDS view name to explain, e.g. I_SalesDocument') },
    },
    ({ name }) => ({
      messages: [{
        role: 'user',
        content: { type: 'text', text: `Use get_cds_view to fetch ${name}, then explain in plain language: what it represents, its key fields, its associations, and when a developer would use it.` },
      }],
    }),
  );

  server.registerPrompt(
    'compose_query',
    {
      title: 'Compose a CDS query',
      description: 'Turn a business question into the suggest_base_views -> compose_query -> generate_cds_view -> validate_cds_ddl workflow.',
      argsSchema: {
        intent: z.string().describe('Business intent, e.g. "overdue customer invoices"'),
        baseView: z.string().optional().describe('Optional concrete base view; else one is suggested first'),
      },
    },
    ({ intent, baseView }) => ({
      messages: [{
        role: 'user',
        content: { type: 'text', text: `Compose a CDS view for: "${intent}"${baseView ? ` using ${baseView} as the base view.` : ' — first call suggest_base_views to pick a base view.'} Then generate_cds_view and validate_cds_ddl the result.` },
      }],
    }),
  );

  server.registerPrompt(
    'validate_ddl',
    {
      title: 'Validate CDS DDL',
      description: 'Ask the model to run generated DDL through validate_cds_ddl and fix any diagnostics.',
      argsSchema: { ddl: z.string().describe('The CDS DDL to validate') },
    },
    ({ ddl }) => ({
      messages: [{
        role: 'user',
        content: { type: 'text', text: `Validate this CDS DDL with validate_cds_ddl, then fix any diagnostics and re-validate:\n\n${ddl}` },
      }],
    }),
  );

  return server;
}

// ── Main ────────────────────────────────────────────────────────────────────
async function main() {
  flushOnExit();
  await loadIndex();
  // Search index/taxonomy/kb_info are otherwise loaded once at boot and never
  // touched again — without this, a long-lived deploy (Railway/BTP don't
  // restart on their own) would keep serving whatever was current at the
  // last restart no matter how much new data lands upstream. loadIndexWrapper()
  // already probes a tiny version.json before deciding whether to redownload
  // the full index, so most ticks cost one small request, not a full rebuild.
  const refreshMinutes = parseFloat(process.env.CDS_KB_INDEX_REFRESH_MINUTES) || 15;
  refreshIndexPeriodically(refreshMinutes * 60 * 1000);

  const port = process.env.PORT;
  const useHTTP = process.env.USE_SSE === 'true' || !!port;

  if (useHTTP) {
    const app = express();
    const requireAuth = await createAuthMiddleware();
    const authMode = describeAuthMode();
    const limiter = rateLimitMiddleware();

    // ── Ops endpoints (public, no auth) ──────────────────────────────────────
    app.get('/health', healthHandler(() => ({ viewCount: meta.viewCount, commit: meta.commit })));
    app.get('/metrics', metricsHandler);

    // ── OAuth 2.1 discovery + endpoints (mounted only when enabled) ──────────
    if (oauthEnabled()) {
      app.get('/.well-known/oauth-protected-resource', (req, res) => {
        const metaDoc = buildOAuthMetadata(req);
        res.json({
          resource: `${metaDoc.issuer}/mcp`,
          authorization_servers: [metaDoc.issuer],
          scopes_supported: metaDoc.scopes_supported,
          resource_name: 'cds-kb-mcp SAP CDS knowledge base',
        });
      });
      app.get('/.well-known/oauth-authorization-server', (req, res) => {
        res.json(buildOAuthMetadata(req));
      });
      // authorize/token are rate-limited too — minting codes and exchanging them
      // are both abuse surfaces on a public server, even though codes are random.
      app.get('/oauth/authorize', limiter, authorizeHandler);
      app.post('/oauth/token', limiter, express.urlencoded({ extended: false }), tokenHandler);
    }

    // ── MCP endpoint — modern stateless Streamable HTTP (2026-07-28 era) with
    // a stateless fallback for 2025-era clients. createMcpHandler serves one
    // request per fresh server instance from the factory, so no session state
    // is kept server-side: any instance behind a plain load balancer can serve
    // any request. toNodeHandler adapts the web-standard handler to Express.
    const mcpHttp = createMcpHandler(
      () => createServer(),
      { legacy: 'stateless', onerror: (e) => console.error(`[cds-kb-mcp] MCP handler error: ${e.message}`) },
    );
    const nodeMcpHandler = toNodeHandler(mcpHttp, {
      onerror: (e) => console.error(`[cds-kb-mcp] MCP node handler error: ${e.message}`),
    });

    // Request metrics (counter + latency histogram) for the MCP surface — feeds
    // the /metrics endpoint with a real tools/list · tools/call breakdown.
    const mcpMetrics = (req, res, next) => {
      const started = process.hrtime.bigint();
      const method = req.body?.method || req.method || 'unknown';
      res.on('finish', () => {
        const ms = Number(process.hrtime.bigint() - started) / 1e6;
        inc('cds_kb_http_requests_total', { method, status: String(res.statusCode) });
        histogram('cds_kb_mcp_request_duration_ms', ms, { method });
      });
      next();
    };

    app.post('/mcp', limiter, requireAuth, express.json(), mcpMetrics, (req, res) => nodeMcpHandler(req, res, req.body));
    app.get('/mcp', limiter, requireAuth, mcpMetrics, (req, res) => nodeMcpHandler(req, res));
    app.delete('/mcp', limiter, requireAuth, mcpMetrics, (req, res) => nodeMcpHandler(req, res));

    const serverPort = port || 8080;
    app.listen(serverPort, () => {
      console.error(`[cds-kb-mcp] HTTP server ready on port ${serverPort} (Streamable HTTP at /mcp). ${ds.describe()} | views=${meta.viewCount} modules=${Object.keys(moduleStats).length}`);
      if (authMode === 'none') {
        console.error(`[cds-kb-mcp] WARNING: No API_KEY / CDS_KB_JWKS_URL / CDS_KB_OAUTH_SECRET. Server is public!`);
      } else {
        console.error(`[cds-kb-mcp] Authentication ENABLED (${authMode})`);
      }
      if (oauthEnabled()) {
        console.error(`[cds-kb-mcp] OAuth 2.1: ${describeOAuth()}`);
      }
    });
  } else {
    // Default local behavior — stdio. serveStdio pins one fresh server instance
    // per connection and serves both the modern and the 2025-era protocol.
    await serveStdio(() => createServer(), { legacy: 'serve' });
    console.error(`[cds-kb-mcp] Stdio server ready. ${ds.describe()} | views=${meta.viewCount} enriched=${meta.enrichedCount} modules=${Object.keys(moduleStats).length}`);
  }
}

main().catch((e) => {
  console.error('[cds-kb-mcp] fatal:', e.message);
  process.exit(1);
});
