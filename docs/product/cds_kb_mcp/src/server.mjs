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
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import { resolveDataSource, SECTION_NAMES } from './datasource.mjs';
import { recordView, flushOnExit } from './usage-tracker.mjs';
import { composeQuery } from './query-compose.mjs';
import { generateCdsView, validateCdsDdl } from './ddl-tools.mjs';
import { createAuthMiddleware, describeAuthMode } from './auth.mjs';
import { proposeQueryLibraryEntry } from './propose-library.mjs';

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
  mini = MiniSearch.loadJSON(w.minisearch, { ...w.options, processTerm: normalizeTerm });
  meta = { viewCount: w.viewCount, enrichedCount: w.enrichedCount, builtAt: w.builtAt };

  // Version manifest is best-effort — older data repos don't ship one.
  try {
    const v = await ds.getVersion?.();
    if (v) meta.commit = v.commit;
  } catch { /* ignore */ }

  // Build module stats + docsByName by iterating stored fields directly (MiniSearch has no public allDocs API).
  const ms = JSON.parse(w.minisearch);
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

const SERVER_VERSION = '1.5.0';
const SERVER_INSTRUCTIONS =
  `This is cds-kb-mcp v${SERVER_VERSION}, built by StormShyn. ` +
  'The first time you use a tool from this server in a conversation, briefly mention to the user ' +
  '(in your own words, one short sentence) that you are using the cds-kb-mcp SAP CDS knowledge base, built by StormShyn. ' +
  'Do not repeat this mention on later tool calls in the same conversation.';

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
        'search_mode=hybrid re-ranks BM25 with embeddings when available and CDS_KB_EMBED_API_KEY is set.',
      inputSchema: {
        query: z.string().describe('Natural-language or keyword query, e.g. "overdue customer invoices"'),
        module: z.string().optional().describe('Module filter — code (FI, SD, MM) or name ("Finance", "Procurement")'),
        lob: z.string().optional().describe('Line-of-business filter, e.g. "Finance" (partial match)'),
        bo: z.string().optional().describe('Business object filter, e.g. "salesorder" (partial match)'),
        accessControl: z.string().optional().describe('RAP @AccessControl.authorizationCheck value filter, e.g. "#CHECK"'),
        vdmViewType: z.string().optional().describe('VDM view type filter, e.g. "#BASIC"'),
        hasDdl: z.boolean().optional().describe('If true, only views with DDL source; if false, only without'),
        sourceKind: z.string().optional().describe('e.g. "public" or "private" (private overlay)'),
        search_mode: z.enum(['bm25', 'hybrid']).optional().describe('bm25 (default) or hybrid (BM25 + embeddings when available)'),
        limit: z.number().int().min(1).max(50).optional().describe('Max results (default 10)'),
      },
    },
    async ({ query, module, lob, bo, accessControl, vdmViewType, hasDdl, sourceKind, search_mode = 'bm25', limit = 10 }) => {
      const resolvedModule = resolveModule(module);
      const contains = (a, b) => (a || '').toLowerCase().includes((b || '').toLowerCase());
      const facetFilter = (r) =>
        (!resolvedModule || (r.module || '').toUpperCase() === resolvedModule) &&
        (!lob || contains(r.lob, lob)) &&
        (!bo || contains(r.bo, bo)) &&
        (!accessControl || contains(r.accessControl, accessControl)) &&
        (!vdmViewType || contains(r.vdmViewType, vdmViewType)) &&
        (hasDdl === undefined || !!r.hasDdl === hasDdl) &&
        (!sourceKind || (r.sourceKind || 'public').toLowerCase() === sourceKind.toLowerCase());

      const results = await rankedSearch(query, { filter: facetFilter, limit, searchMode: search_mode });
      if (results.length === 0) {
        const hint = resolvedModule ? ` (module=${resolvedModule})` : '';
        return { content: [{ type: 'text', text: `No CDS views matched "${query}"${hint}. Try broader terms or remove filters.` }] };
      }
      const lines = results.map((r, i) => {
        const desc = r.semanticDescription || r.description || '';
        return `${i + 1}. **${r.name}**  [${r.appComponent || r.module || '-'}]  (score ${r.score.toFixed(1)})\n   ${desc}\n   path: ${r.path}`;
      });
      return {
        content: [{ type: 'text', text: `Top ${results.length} CDS views for "${query}":\n\n${lines.join('\n')}\n\nUse get_cds_view(name) to read the full definition, or get_cds_view(name, sections) for specific parts.` }],
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
        return { content: [{ type: 'text', text }] };
      } catch (e) {
        // Distinguish "view does not exist" from transport/cache failure so callers know whether to retry.
        const notFound = e?.code === 'ENOENT' || /404/.test(e?.message || '');
        const msg = notFound
          ? `View "${name}" not found. Use search_cds first to get the exact name.`
          : `Failed to fetch view "${name}": ${e?.message || 'unknown error'}. The data source may be temporarily unreachable.`;
        return { content: [{ type: 'text', text: msg }], isError: true };
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
        return { content: [{ type: 'text', text }] };
      }

      // Fallback if taxonomy not available
      const sorted = Object.entries(moduleStats).sort((a, b) => b[1].count - a[1].count);
      const lines = sorted.map(([mod, info]) => {
        const boList = info.bos.length > 0 ? `  BOs: ${info.bos.join(', ')}` : '';
        return `- **${mod}** (${info.count} views) — ${info.lob}${boList}`;
      });
      return {
        content: [{ type: 'text', text: `SAP Modules (${sorted.length} modules, ${meta.viewCount} total views):\n\n${lines.join('\n')}` }],
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
      if (results.length === 0) {
        return { content: [{ type: 'text', text: `No views found for tag "${tag}". Use get_taxonomy to find valid tags.` }] };
      }

      const lines = results.map((r, i) => {
        const desc = r.semanticDescription || r.description || '';
        return `${i + 1}. **${r.name}**\n   ${desc}\n   path: ${r.path}`;
      });

      return {
        content: [{ type: 'text', text: `Found ${results.length} CDS views for tag "${tag}":\n\n${lines.join('\n')}` }],
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
        return { content: [{ type: 'text', text: `No CDS view uses "${name}" as a field, raw DDIC column, table, or association target${built}. Try search_cds for a business-language query instead.` }] };
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

      return { content: [{ type: 'text', text: `Results for "${name}":\n\n${parts.join('\n\n')}\n\nUse get_cds_view(name) to read any of these.` }] };
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
          return { content: [{ type: 'text', text: `View "${name}" not found. Use search_cds first to get the exact name.` }], isError: true };
        }
        // Non-fatal for the "depends on" half — still show "depended on by" below if the view name is otherwise valid.
      }

      const dependents = tableIndexData?.tables?.[key] || [];

      if (dependsOn.length === 0 && dependents.length === 0) {
        return { content: [{ type: 'text', text: `"${name}" has no recorded dependencies either way — it may be a base/interface view nothing else builds on, or a leaf view with no associations.` }] };
      }

      const parts = [];
      if (dependsOn.length > 0) {
        const lines = dependsOn.map((d) => `- **${d.target}** (${d.relation === 'source' ? 'FROM' : `via \`${d.alias}\``})`);
        parts.push(`## Depends on (${dependsOn.length})\n${lines.join('\n')}`);
      }
      if (dependents.length > 0) {
        const shown = dependents.slice(0, limit);
        const lines = shown.map((m) => `- **${m.view}** — ${m.relation === 'source' ? 'built FROM this' : `associates via \`${m.alias}\``}  [${m.appComponent || '-'}]`);
        parts.push(`## Depended on by (${dependents.length} view${dependents.length === 1 ? '' : 's'})\n${lines.join('\n')}` +
          (dependents.length > shown.length ? `\n...and ${dependents.length - shown.length} more (raise limit)` : ''));
      }

      return { content: [{ type: 'text', text: `Dependencies for ${name}:\n\n${parts.join('\n\n')}\n\nUse get_cds_view(name) to read any of these.` }] };
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
    },
    async () => {
      const commit = meta.commit ? meta.commit.slice(0, 8) : '(no version manifest)';
      const views = meta.viewCount ?? 0;
      const enriched = meta.enrichedCount ?? 0;
      const enrichPct = views ? ((100 * enriched) / views).toFixed(1) : '?';
      const usageEndpoint = (process.env.CDS_KB_USAGE_ENDPOINT || '').trim() ? 'set' : 'unset';
      const embeddings = embeddingsData?.vectors ? 'yes' : 'no';
      return {
        content: [{
          type: 'text', text:
            `source: ${ds.describe()}\n` +
            `server: cds-kb-mcp ${SERVER_VERSION}\n` +
            `auth: ${describeAuthMode()}\n` +
            `views: ${meta.viewCount ?? '?'}\n` +
            `enriched: ${meta.enrichedCount ?? '?'} (${enrichPct}%)\n` +
            `privateOverlay: ${meta.privateCount ?? 0}\n` +
            `withDdl: ${meta.withDdlCount ?? '?'}\n` +
            `metadataOnly: ${meta.metadataOnlyCount ?? '?'}\n` +
            `withAccessControl: ${meta.withAccessControlCount ?? '?'}\n` +
            `embeddings: ${embeddings}\n` +
            `usageEndpoint: ${usageEndpoint}\n` +
            `usageStatsConfigured: ${usageStatsConfigured ? 'yes' : 'no'}\n` +
            `modules: ${Object.keys(moduleStats).length}\n` +
            `builtAt: ${meta.builtAt ?? '?'}\n` +
            `commit: ${commit}`,
        }],
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
        search_mode: z.enum(['bm25', 'hybrid']).optional().describe('bm25 (default) or hybrid'),
        limit: z.number().int().min(1).max(20).optional().describe('Max suggestions (default 5)'),
      },
    },
    async ({ query, module, lob, bo, accessControl, vdmViewType, hasDdl, sourceKind, search_mode = 'bm25', limit = 5 }) => {
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
        !r.isAbstract &&
        r.releaseState !== 'unverified';

      const results = await rankedSearch(query, { filter: facetFilter, limit, searchMode: search_mode });
      if (results.length === 0) {
        const hint = resolvedModule ? ` (module=${resolvedModule})` : '';
        return { content: [{ type: 'text', text: `No suitable base views for "${query}"${hint}. Try broader terms or remove filters.` }] };
      }
      const lines = results.map((r, i) => {
        const reasons = [];
        if (r.isMasterData) reasons.push('master-data');
        if ((r.referencedByCount || 0) > 0) reasons.push(`referencedBy=${r.referencedByCount}`);
        if (r.hasDdl) reasons.push('has DDL');
        if (r.sourceKind === 'private') reasons.push('private-overlay');
        const why = reasons.length ? ` — ${reasons.join(', ')}` : '';
        const desc = r.semanticDescription || r.description || '';
        return `${i + 1}. **${r.name}**  [${r.appComponent || r.module || '-'}]  (score ${r.score.toFixed(1)})${why}\n   ${desc}\n   path: ${r.path}`;
      });
      return {
        content: [{
          type: 'text',
          text: `Suggested base views for "${query}":\n\n${lines.join('\n')}\n\nNext: compose_query or generate_cds_view with views[0].name = the pick above.`,
        }],
      };
    },
  );

  // ── Tool 9: compose_query ───────────────────────────────────────────────────
  server.registerTool(
    'compose_query',
    {
      title: 'Compose OpenSQL + CDS view skeleton',
      description:
        'Build OpenSQL SELECT and a CDS define view entity skeleton from a structured query object ' +
        '(same shape as the Query Builder share JSON: views[], select, where, groupBy, having, orderBy, viewName).',
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
    },
    async (args) => {
      const result = composeQuery(args);
      const parts = [];
      if (result.warnings.length) parts.push('## Warnings\n' + result.warnings.map((w) => `- ${w}`).join('\n'));
      if (result.openSql) parts.push('## OpenSQL\n```sql\n' + result.openSql + '\n```');
      if (result.cdsView) parts.push('## CDS view skeleton\n```abap\n' + result.cdsView + '\n```');
      if (!parts.length) parts.push('compose_query produced no output.');
      return { content: [{ type: 'text', text: parts.join('\n\n') }] };
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
        'pass select/where yourself. Validate with validate_cds_ddl next.',
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
    },
    async (args) => {
      const result = generateCdsView(args);
      const parts = [];
      if (result.warnings.length) parts.push('## Warnings\n' + result.warnings.map((w) => `- ${w}`).join('\n'));
      if (result.ddl) parts.push('## DDL\n```abap\n' + result.ddl + '\n```');
      if (result.openSql) parts.push('## OpenSQL\n```sql\n' + result.openSql + '\n```');
      return { content: [{ type: 'text', text: parts.join('\n\n') || 'No DDL generated.' }] };
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
      return { content: [{ type: 'text', text }] };
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
      return { content: [{ type: 'text', text: parts.join('\n') }] };
    },
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
  const useSSE = process.env.USE_SSE === 'true' || !!port;

  if (useSSE) {
    const app = express();
    const transports = new Map();
    const requireAuth = await createAuthMiddleware();
    const authMode = describeAuthMode();

    app.get("/sse", requireAuth, async (req, res) => {
      const transport = new SSEServerTransport("/messages", res);
      const sessionId = transport.sessionId;
      transports.set(sessionId, transport);

      console.error(`[cds-kb] SSE session opened: ${sessionId}`);

      res.on("close", () => {
        transports.delete(sessionId);
        console.error(`[cds-kb] SSE session closed: ${sessionId}`);
      });

      const server = createServer();
      await server.connect(transport);
    });

    app.post("/messages", requireAuth, async (req, res) => {
      const sessionId = req.query.sessionId;
      const transport = transports.get(sessionId);

      if (!transport) {
        return res.status(404).send("Session not found");
      }

      await transport.handlePostMessage(req, res);
    });

    // ── Streamable HTTP (current MCP transport spec) — single /mcp endpoint.
    // Clients that support it connect directly with just this URL, no
    // supergateway stdio bridge needed. Kept alongside /sse+/messages above
    // so existing supergateway-based client configs keep working unchanged.
    const streamableTransports = new Map();

    app.post("/mcp", requireAuth, express.json(), async (req, res) => {
      const sessionId = req.headers["mcp-session-id"];
      let transport = sessionId ? streamableTransports.get(sessionId) : undefined;

      if (!transport) {
        if (sessionId) {
          return res.status(404).json({ jsonrpc: "2.0", error: { code: -32001, message: "Session not found" }, id: null });
        }
        if (!isInitializeRequest(req.body)) {
          return res.status(400).json({ jsonrpc: "2.0", error: { code: -32000, message: "Bad Request: no valid session ID and not an initialize request" }, id: null });
        }
        transport = new StreamableHTTPServerTransport({
          sessionIdGenerator: () => uuidv4(),
          onsessioninitialized: (sid) => {
            streamableTransports.set(sid, transport);
            console.error(`[cds-kb] Streamable HTTP session opened: ${sid}`);
          },
        });
        transport.onclose = () => {
          if (transport.sessionId) {
            streamableTransports.delete(transport.sessionId);
            console.error(`[cds-kb] Streamable HTTP session closed: ${transport.sessionId}`);
          }
        };
        const server = createServer();
        await server.connect(transport);
      }

      await transport.handleRequest(req, res, req.body);
    });

    const handleStreamableSession = async (req, res) => {
      const sessionId = req.headers["mcp-session-id"];
      const transport = sessionId && streamableTransports.get(sessionId);
      if (!transport) {
        return res.status(400).send("Invalid or missing session ID");
      }
      await transport.handleRequest(req, res);
    };
    app.get("/mcp", requireAuth, handleStreamableSession);
    app.delete("/mcp", requireAuth, handleStreamableSession);

    const serverPort = port || 8080;
    app.listen(serverPort, () => {
      console.error(`[cds-kb-mcp] HTTP server ready on port ${serverPort} (legacy SSE at /sse+/messages, Streamable HTTP at /mcp). ${ds.describe()} | views=${meta.viewCount} modules=${Object.keys(moduleStats).length}`);
      if (authMode === 'none') {
        console.error(`[cds-kb-mcp] WARNING: No API_KEY / CDS_KB_JWKS_URL. Server is public!`);
      } else {
        console.error(`[cds-kb-mcp] Authentication ENABLED (${authMode})`);
      }
    });
  } else {
    // Default local behavior
    const server = createServer();
    await server.connect(new StdioServerTransport());
    console.error(`[cds-kb-mcp] Stdio server ready. ${ds.describe()} | views=${meta.viewCount} enriched=${meta.enrichedCount} modules=${Object.keys(moduleStats).length}`);
  }
}

main().catch((e) => {
  console.error('[cds-kb-mcp] fatal:', e.message);
  process.exit(1);
});
