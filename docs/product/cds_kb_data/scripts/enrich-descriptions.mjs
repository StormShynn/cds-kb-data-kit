#!/usr/bin/env node
// scripts/enrich-descriptions.mjs
// Generate human-quality business descriptions (semantic_en / semantic_vi)
// + search keywords for views that don't have them yet, using a free/low-cost
// LLM API from a GitHub Actions workflow (or locally with your own key).
//
// src/synthesizer.mjs's heuristic descriptions are template-y ("X — Basic CDS
// view based on ekko"). This script replaces that for views that still lack
// a real semantic_en/semantic_vi: it sends each view's name/label/fields as
// context to a small LLM and writes back its answers into the .md frontmatter
// (semantic_en, semantic_vi, keywords) — the exact fields enrich_index.mjs
// already reads, so the search index picks them up on the next rebuild.
//
// Design goals:
//   - Strictly opt-in. No API key configured => the script says so and exits 0.
//   - Zero new runtime dependencies (plain fetch, OpenAI-compatible JSON API).
//   - Chips away over time: --limit per run, missing views sorted with
//     released (Hub-confirmed) views first, so daily scheduled runs fill the
//     highest-value gaps first.
//   - Never overwrites an existing semantic_en/semantic_vi (those are assumed
//     human-reviewed or already generated).
//
// Usage:
//   node scripts/enrich-descriptions.mjs [dataDir] [--limit N] [--dry-run]
//       [--provider groq|openrouter] [--model <name>] [--base-url <url>]
//
// API key resolution (first present wins): the provider's own env var
// (GROQ_API_KEY / OPENROUTER_API_KEY) or the generic LLM_ENRICH_API_KEY.
//
// Provider defaults (see PROVIDERS below):
//   groq       -> llama-3.1-8b-instant   (14,400 req/day free tier)
//   openrouter -> meta-llama/llama-3.1-8b-instruct:free (50 req/day free)

import fs from 'node:fs/promises';
import path from 'node:path';
import { listViewFiles } from './lib/view-files.mjs';
import { extractFrontmatter, scalar, listBlock } from './lib/frontmatter.mjs';
import { parseMdTable } from './lib/md-table.mjs';

// ── Provider config ─────────────────────────────────────────────────────────

const PROVIDERS = {
  groq: {
    baseUrl: 'https://api.groq.com/openai/v1',
    defaultModel: 'llama-3.1-8b-instant',
    apiKeyEnv: ['GROQ_API_KEY', 'LLM_ENRICH_API_KEY'],
  },
  openrouter: {
    baseUrl: 'https://openrouter.ai/api/v1',
    defaultModel: 'meta-llama/llama-3.1-8b-instruct:free',
    apiKeyEnv: ['OPENROUTER_API_KEY', 'LLM_ENRICH_API_KEY'],
  },
};

// ── CLI args ────────────────────────────────────────────────────────────────
// Parsed as (positional dataDir, then --flags) regardless of order, so a
// flags-first invocation like `--provider groq` can't swallow the dataDir.

const args = process.argv.slice(2);
const opts = { dataDir: '.', limit: 0, dryRun: false, provider: 'groq', model: undefined, baseUrl: undefined };
const VALUE_FLAGS = new Set(['limit', 'provider', 'model', 'base-url']);
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a.startsWith('--')) {
    const name = a.slice(2);
    if (name === 'dry-run') opts.dryRun = true;
    else if (VALUE_FLAGS.has(name)) opts[name === 'base-url' ? 'baseUrl' : name] = args[++i] ?? '';
  } else {
    opts.dataDir = a;
  }
}

const LIMIT = Number(opts.limit || 0); // 0 = no limit
const DRY_RUN = opts.dryRun;
const dataDir = opts.dataDir.trim() || '.';
const providerName = String(opts.provider || 'groq').toLowerCase();
const provider = PROVIDERS[providerName];
if (!provider) {
  console.error(`Unknown provider "${providerName}". Supported: ${Object.keys(PROVIDERS).join(', ')}`);
  process.exit(2);
}
const model = opts.model || provider.defaultModel;
const baseUrl = (opts.baseUrl || provider.baseUrl).replace(/\/+$/, '');
const apiKey = provider.apiKeyEnv.map((k) => process.env[k]).find(Boolean) || '';

// ── Free-text YAML quoting (same convention as src/template.mjs) ───────────

function yamlScalar(value) {
  return JSON.stringify(String(value));
}

// ── Frontmatter editing ─────────────────────────────────────────────────────
// Line-based upsert into the leading --- ... --- block: replace the key if it
// exists, otherwise insert it after a stable anchor. Key order doesn't matter
// to the readers (enrich_index.mjs's scalar()/listBlock(), github.com's YAML
// renderer) — anchor choice is only about producing a tidy diff.

function insertAfterKey(lines, anchorKey, newLines) {
  const anchorIdx = lines.findIndex((l) => new RegExp(`^${anchorKey}:`).test(l));
  const at = anchorIdx !== -1 ? anchorIdx + 1 : 1; // after the opening ---
  return [...lines.slice(0, at), ...newLines, ...lines.slice(at)];
}

function upsertScalar(fmLines, key, value) {
  const re = new RegExp(`^${key}:.*$`);
  if (fmLines.some((l) => re.test(l))) {
    return fmLines.map((l) => (re.test(l) ? `${key}: ${yamlScalar(value)}` : l));
  }
  return insertAfterKey(fmLines, 'description', [`${key}: ${yamlScalar(value)}`]);
}

function upsertKeywords(fmLines, keywords, existingKeywords) {
  const start = fmLines.findIndex((l) => /^keywords:$/.test(l));
  // Merge, never replace: curated keywords already in the frontmatter stay
  // (LLM output only adds what's missing), so an enrichment run can't
  // destroy hand-maintained terms.
  const merged = [];
  for (const k of [...existingKeywords, ...keywords]) {
    const clean = String(k).trim();
    if (clean && !merged.includes(clean)) merged.push(clean);
  }
  const block = ['keywords:', ...merged.map((k) => `  - ${yamlScalar(k)}`)];
  if (start !== -1) {
    // Replace the whole existing block (indented "  - x" lines until the
    // next top-level key).
    let end = start + 1;
    while (end < fmLines.length && /^[ \t]-/.test(fmLines[end])) end++;
    return [...fmLines.slice(0, start), ...block, ...fmLines.slice(end)];
  }
  return insertAfterKey(fmLines, 'semantic_vi', block);
}

/**
 * Upsert semantic_en / semantic_vi / keywords into a view .md's frontmatter.
 * Exported (plus the import.meta.main guard below) so the editing logic can
 * be unit-tested without calling an LLM. Preserves the file's own line
 * ending (CRLF stays CRLF) — rewriting a CRLF file as LF would produce
 * mixed-EOL diffs.
 */
export function upsertFrontmatter(md, { semanticEn, semanticVi, keywords }) {
  const m = md.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return md;
  const existingKeywords = listBlock(m[1], 'keywords');
  const eol = m[1].includes('\r\n') ? '\r\n' : '\n';
  let lines = m[1].split(/\r?\n/);
  if (semanticEn) lines = upsertScalar(lines, 'semantic_en', semanticEn);
  if (semanticVi) lines = upsertScalar(lines, 'semantic_vi', semanticVi);
  if (keywords && keywords.length) lines = upsertKeywords(lines, keywords, existingKeywords);
  return md.replace(/^---\r?\n[\s\S]*?\r?\n---/, `---${eol}${lines.join(eol)}${eol}---`);
}

// ── Candidate selection ─────────────────────────────────────────────────────

const DDL_BLOCK_RE = /```(?:abap|sql)?\s*\r?\n([\s\S]*?)\r?\n```/;

async function loadCandidates() {
  const viewsDir = path.join(dataDir, 'views');
  const files = await listViewFiles(viewsDir);
  const candidates = [];
  for (const { name, relPath } of files) {
    const abs = path.join(viewsDir, ...relPath.split('/'));
    const content = await fs.readFile(abs, 'utf-8');
    const fm = extractFrontmatter(content);
    const semEn = scalar(fm, 'semantic_en');
    const semVi = scalar(fm, 'semantic_vi');
    // NOTE: fully-enriched views are kept in the list (flagged) so the
    // summary counts below are correct — main() filters them out of the
    // target set.
    const ddlMatch = content.match(DDL_BLOCK_RE);
    const fieldsTable = parseMdTable(content, 'Fields');
    const fieldNames = fieldsTable
      ? fieldsTable.rows
          .map((r) => (fieldsTable.header[1] === 'Key' ? (r[2] === '✓' ? null : r[0]) : r[0]))
          .filter(Boolean)
          .slice(0, 10)
      : [];
    candidates.push({
      name,
      relPath,
      description: scalar(fm, 'description'),
      appComponent: scalar(fm, 'app_component'),
      releaseState: scalar(fm, 'release_state') || 'released',
      tags: listBlock(fm, 'tags'),
      hasDdl: !!ddlMatch,
      fieldNames,
      semEn: !!semEn,
      semVi: !!semVi,
    });
  }
  // Highest-value first: Hub-confirmed released views, then those with real
  // DDL (richer context for the model), then alphabetical for determinism.
  // Fully-enriched views sort last (they're filtered out of the target set
  // anyway — this only keeps the ordering stable for the dry-run listing).
  candidates.sort((a, b) => {
    const aFull = a.semEn && a.semVi ? 1 : 0;
    const bFull = b.semEn && b.semVi ? 1 : 0;
    if (aFull !== bFull) return aFull - bFull;
    if (a.releaseState !== b.releaseState) return a.releaseState === 'released' ? -1 : 1;
    if (a.hasDdl !== b.hasDdl) return a.hasDdl ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
  return candidates;
}

// ── LLM call ────────────────────────────────────────────────────────────────

function buildPrompt(view) {
  const tags = view.tags.length ? view.tags.join(', ') : '(none)';
  return [
    'You are enriching a SAP CDS knowledge base. Write a concise, factual business description of the following CDS view for ABAP/cloud developers.',
    '',
    `View name: ${view.name}`,
    `SAP label / short description: ${view.description || '(none)'}`,
    `App component: ${view.appComponent || '(unknown)'}`,
    `Tags: ${tags}`,
    `Release state: ${view.releaseState}`,
    view.hasDdl ? 'DDL source: available (field list below)' : 'DDL source: not available (metadata only)',
    `Key fields: ${view.fieldNames.length ? view.fieldNames.join(', ') : '(none listed)'}`,
    '',
    'Return STRICT JSON only, no prose, no markdown fences, exactly this shape:',
    '{"semantic_en": "...", "semantic_vi": "...", "keywords": ["...", "..."]}',
    '',
    'Rules:',
    '- semantic_en: 1-2 plain-English sentences describing what real-world business data this view exposes and when you would use it. Do not start with "This view is" / "This CDS view"; do not invent facts not implied by the name/label/fields.',
    '- semantic_vi: the same description in natural Vietnamese.',
    '- keywords: 8-12 lowercase search terms covering English + Vietnamese business vocabulary and SAP terms (e.g. "purchase order", "đơn mua hàng", "ekko").',
  ].join('\n');
}

async function callLLM(view) {
  const body = {
    model,
    messages: [
      { role: 'system', content: 'You produce strict JSON. No markdown, no extra text.' },
      { role: 'user', content: buildPrompt(view) },
    ],
    temperature: 0.2,
    max_tokens: 400,
  };
  const resp = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      ...(providerName === 'openrouter' ? { 'HTTP-Referer': 'https://github.com/StormShynn/cds-kb-data-kit', 'X-Title': 'cds-kb-data enrichment' } : {}),
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(60000),
  });
  if (!resp.ok) {
    const text = await resp.text().catch(() => '');
    throw new Error(`${providerName} API ${resp.status}: ${text.slice(0, 200)}`);
  }
  const data = await resp.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) throw new Error('LLM returned an empty completion');
  // Robustly extract the first {...} JSON object (tolerates stray prose).
  const start = content.indexOf('{');
  const end = content.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error(`No JSON object in LLM response: ${content.slice(0, 160)}`);
  const parsed = JSON.parse(content.slice(start, end + 1));
  const semanticEn = String(parsed.semantic_en || '').trim();
  const semanticVi = String(parsed.semantic_vi || '').trim();
  const keywords = Array.isArray(parsed.keywords)
    ? parsed.keywords.map((k) => String(k).trim().toLowerCase()).filter(Boolean).slice(0, 12)
    : [];
  if (!semanticEn || !semanticVi) throw new Error('LLM response missing semantic_en/semantic_vi');
  return { semanticEn, semanticVi, keywords };
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  if (!apiKey) {
    console.log('ℹ️  No LLM API key configured (GROQ_API_KEY / OPENROUTER_API_KEY / LLM_ENRICH_API_KEY). Skipping enrichment — this is an opt-in feature.');
    return;
  }
  console.log(`Provider: ${providerName} (${model}) | dataDir: ${dataDir} | limit: ${LIMIT || 'unlimited'} | dry-run: ${DRY_RUN}`);

  const candidates = await loadCandidates();
  // Target anything not FULLY enriched — a view with semantic_en but no
  // semantic_vi gets its vi (and any missing keywords) filled in, keeping
  // its existing en untouched.
  const missing = candidates.filter((c) => !c.semEn || !c.semVi);
  console.log(`Views total: ${candidates.length} | fully enriched: ${candidates.length - missing.length} | missing semantic_en and/or semantic_vi: ${missing.length}`);

  if (DRY_RUN) {
    const shown = missing.slice(0, LIMIT || 10);
    console.log(`[dry-run] Would enrich ${shown.length} view(s):`);
    for (const c of shown) console.log(`  - ${c.name} (${c.releaseState}${c.hasDdl ? ', DDL' : ', metadata-only'}${c.semEn ? ', has semantic_en' : ''}${c.semVi ? ', has semantic_vi' : ''})`);
    return;
  }

  const targets = LIMIT ? missing.slice(0, LIMIT) : missing;
  if (targets.length === 0) {
    console.log('Nothing to enrich — every view already has semantic_en. ✅');
    return;
  }

  let ok = 0, failed = 0, unchanged = 0;
  for (let i = 0; i < targets.length; i++) {
    const view = targets[i];
    try {
      const { semanticEn, semanticVi, keywords } = await callLLM(view);
      const abs = path.join(dataDir, 'views', ...view.relPath.split('/'));
      const md = await fs.readFile(abs, 'utf-8');
      // Keep an existing semantic_en (it's human-reviewed or already
      // generated) — only fill what this view is actually missing.
      const updated = upsertFrontmatter(md, {
        semanticEn: view.semEn ? undefined : semanticEn,
        semanticVi: view.semVi ? undefined : semanticVi,
        keywords,
      });
      if (updated === md) { unchanged++; continue; }
      await fs.writeFile(abs, updated, 'utf-8');
      ok++;
      console.log(`✅ ${i + 1}/${targets.length} ${view.name} — ${semanticEn.slice(0, 80)}${semanticEn.length > 80 ? '…' : ''}`);
    } catch (err) {
      failed++;
      console.error(`❌ ${i + 1}/${targets.length} ${view.name} — ${err.message}`);
    }
    // Respect free-tier rate limits (Groq ~30 RPM): one request at a time,
    // tiny pause between calls.
    if (i < targets.length - 1) await new Promise((r) => setTimeout(r, 250));
  }

  console.log(`\nDone: ${ok} enriched, ${failed} failed, ${unchanged} unchanged.`);
  console.log('Next: run `npm run rebuild-index` (and the search-page generators) so the new semantic_en/vi reach the index.');
}

// Only run when executed directly — importing this module (e.g. from a test
// that exercises upsertFrontmatter) must not trigger a full enrichment run.
if (import.meta.main) {
  main().catch((err) => {
    console.error(`❌ ${err.message}`);
    process.exit(1);
  });
}
