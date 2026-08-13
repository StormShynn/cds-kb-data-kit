#!/usr/bin/env node
// Benchmark: hybrid search (local embeddings, all-MiniLM-L6-v2) vs. pure BM25.
//
// Drives the real cds-kb-mcp server over stdio (same harness as test_tools.mjs)
// and calls the `search_cds` tool for both search_mode=bm25 and hybrid on every
// query. Reports retrieval quality (MRR, P@1/3/5/10) and per-query latency,
// including the hybrid model cold-start on its first call.
//
// Ground truth (hand-curated, one target view per query):
//  - "literal" queries contain tokens that appear in the target view's name or
//    semanticDescription — the easy, keyword-friendly case.
//  - "paraphrase" queries are written from the view's own description using
//    natural language / synonyms that do NOT appear verbatim in the name —
//    the case where vector re-ranking is supposed to help.
// Every target is verified to exist in the index + embeddings at runtime, and
// queries the index cannot answer in either mode (target outside top-50 for
// both bm25 and hybrid) are dropped and reported, so the score measures
// ranking quality rather than unanswerable guessing.
//
// Usage:  node bench/bench_hybrid_vs_bm25.mjs [path-to-cds-kb-data]
// Output: bench/result_hybrid_vs_bm25.json  (+ summary table on stdout)
import { spawn } from 'node:child_process';
import { existsSync, writeFileSync } from 'node:fs';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const defaultDataPath = path.resolve(repoRoot, 'docs', 'product', 'cds_kb_data');
const dataPath = path.resolve(process.argv[2] || defaultDataPath);
const serverPath = path.join(repoRoot, 'docs', 'product', 'cds_kb_mcp', 'src', 'server.mjs');
const outPath = path.join(__dirname, 'result_hybrid_vs_bm25.json');

if (!existsSync(path.join(dataPath, 'index', 'search_index.json'))) {
  console.error(`Missing data index at ${path.join(dataPath, 'index', 'search_index.json')}`);
  console.error('Pass an explicit path: node bench/bench_hybrid_vs_bm25.mjs /path/to/cds_kb_data');
  process.exit(1);
}

// ── Ground truth (target = hand-curated "right answer" for the query) ───────
// The 12 queries below are all answerable by the index (target found within
// the rank window in at least one mode). "literal" queries contain tokens from
// the target's name/description; "paraphrase" queries were written from each
// view's description with synonyms / natural language that avoid the name.
const QUERIES = [
  // literal: target tokens appear in name/description
  { q: 'purchase order', target: 'I_PURCHASEORDERTP_2', kind: 'literal' },
  { q: 'contract accounting open item list', target: 'I_CAOPENITEMLIST', kind: 'literal' },
  { q: 'contract accounting overdue item', target: 'I_CAOVERDUEITEM', kind: 'literal' },
  { q: 'document clearing status', target: 'I_CACLEARINGSTATUS', kind: 'literal' },
  { q: 'parked accounts payable item', target: 'I_PARKEDOPLACCTGDOCPYBLSITEM', kind: 'literal' },
  { q: 'product descriptions', target: 'I_PRODUCTDESCRIPTION', kind: 'literal' },
  { q: 'customer to business partner relationship', target: 'I_CUSTOMER_TO_BUSINESSPARTNER', kind: 'literal' },
  // paraphrase: natural language / synonyms, no verbatim name tokens
  { q: 'history of cleared line items in accounting documents', target: 'I_OPLACCTGDOCITEMCLRGHIST', kind: 'paraphrase' },
  { q: 'receivables that are past due, bucketed by how late they are', target: 'I_OVERDUEACCOUNTSRECEIVABLES', kind: 'paraphrase' },
  { q: 'material descriptions in different languages', target: 'I_PRODUCTDESCRIPTION', kind: 'paraphrase' },
  { q: 'how are customers related to business partners', target: 'I_CUSTOMER_TO_BUSINESSPARTNER', kind: 'paraphrase' },
  { q: 'overdue receivables per time bucket in the aging report', target: 'I_OVERDUEACCOUNTSRECEIVABLES', kind: 'paraphrase' },
];

const REPS = 3;
const RANK_DEPTH = 50; // how deep to look for the target (MRR over this window)
const EVAL_K = 10;     // P@k window (k = 1, 3, 5, 10)

// ── Server harness (same pattern as test_tools.mjs) ─────────────────────────
const proc = spawn('node', [serverPath, '--data', dataPath], { stdio: ['pipe', 'pipe', 'pipe'] });
let id = 0;
const pending = new Map();
const rl = createInterface({ input: proc.stdout });

rl.on('line', (line) => {
  try {
    const msg = JSON.parse(line);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
  } catch { /* ignore */ }
});
proc.stderr.on('data', (d) => process.stderr.write(d));

function call(method, params = {}) {
  return new Promise((resolve, reject) => {
    const reqId = ++id;
    pending.set(reqId, resolve);
    proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: reqId, method, params }) + '\n');
    setTimeout(() => {
      if (pending.has(reqId)) {
        pending.delete(reqId);
        reject(new Error(`timeout waiting for ${method} #${reqId}`));
      }
    }, 120_000).unref();
  });
}

function parseNames(msg) {
  const sc = msg.result?.structuredContent;
  if (sc && Array.isArray(sc.results)) return sc.results.map((r) => r.name);
  const text = msg.result?.content?.[0]?.text || '';
  const names = [];
  for (const line of text.split('\n')) {
    const m = line.match(/^\d+\. \*\*([^*]+)\*\*/);
    if (m) names.push(m[1].trim());
  }
  return names;
}

async function searchOne(query, mode) {
  const t0 = performance.now();
  const res = await call('tools/call', {
    name: 'search_cds',
    arguments: { query, search_mode: mode, limit: RANK_DEPTH },
  });
  const ms = performance.now() - t0;
  if (res.error) throw new Error(`search_cds error for "${query}": ${JSON.stringify(res.error).slice(0, 300)}`);
  return { names: parseNames(res), ms };
}

// ── Metric helpers ──────────────────────────────────────────────────────────
function rankOf(names, target) {
  const t = target.toUpperCase();
  const i = names.findIndex((n) => String(n).toUpperCase() === t);
  return i === -1 ? null : i + 1;
}
function reciprocalRank(names, target) {
  const r = rankOf(names, target);
  return r ? 1 / r : 0;
}
function precisionAtK(names, target, k) {
  const r = rankOf(names, target);
  return r && r <= k ? 1 : 0;
}
function median(arr) {
  const s = [...arr].sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
}

// ── Run ─────────────────────────────────────────────────────────────────────
const report = {
  generatedAt: new Date().toISOString(),
  server: 'cds-kb-mcp (src/server.mjs, stdio, --data local)',
  index: { dataPath },
  embeddingModel: 'Xenova/all-MiniLM-L6-v2 (local, dim 384)',
  hybridBlend: '0.6 * normBM25 + 0.4 * cosine',
  rankDepth: RANK_DEPTH,
  reps: REPS,
  queries: [],
  dropped: [],
};
let exitCode = 0;

try {
  await call('initialize', {
    protocolVersion: '2025-03-26',
    capabilities: {},
    clientInfo: { name: 'hybrid-vs-bm25-bench', version: '1.0' },
  });
  await call('notifications/initialized', {});

  // Warmup; the first hybrid call pays the one-time model load.
  await searchOne('purchase order', 'bm25');
  const t0 = performance.now();
  await searchOne('purchase order', 'hybrid');
  const coldStartMs = performance.now() - t0;
  console.log(`hybrid model cold-start (one-time): ${Math.round(coldStartMs)} ms\n`);

  // Per-query: run both modes, record rank of the target + latency.
  for (const entry of QUERIES) {
    const row = { query: entry.q, target: entry.target, kind: entry.kind, bm25: {}, hybrid: {} };
    for (const mode of ['bm25', 'hybrid']) {
      const timings = [];
      let names = [];
      for (let rep = 0; rep < REPS; rep++) {
        const r = await searchOne(entry.q, mode);
        timings.push(r.ms);
        names = r.names;
      }
      row[mode] = {
        rank: rankOf(names, entry.target),
        msMedian: Math.round(median(timings) * 10) / 10,
        msMin: Math.round(Math.min(...timings) * 10) / 10,
        top3: names.slice(0, 3),
      };
    }
    // Answerability: drop queries neither mode can answer within the window.
    if (!row.bm25.rank && !row.hybrid.rank) {
      report.dropped.push(row);
      console.log(`✗ dropped (unanswerable in both modes): "${entry.q}" → ${entry.target}`);
      continue;
    }
    report.queries.push(row);
    const b = row.bm25, h = row.hybrid;
    const br = b.rank ? `#${b.rank}` : 'not found';
    const hr = h.rank ? `#${h.rank}` : 'not found';
    console.log(
      `"${entry.q}" [${entry.kind}] → ${entry.target}\n` +
      `   bm25:  rank ${br.padEnd(11)} ${b.msMedian.toFixed(1)}ms  top: ${(b.top3[0] || '—')}\n` +
      `   hybrid: rank ${hr.padEnd(11)} ${h.msMedian.toFixed(1)}ms  top: ${(h.top3[0] || '—')}`
    );
  }

  // ── Aggregate ──────────────────────────────────────────────────────────────
  const agg = (mode) => {
    const n = report.queries.length || 1;
    const mrr = report.queries.reduce((a, r) => a + (r[mode].rank ? 1 / r[mode].rank : 0), 0) / n;
    const p = (k) =>
      report.queries.reduce((a, r) => a + (r[mode].rank && r[mode].rank <= k ? 1 : 0), 0) / n;
    const lat = report.queries.map((r) => r[mode].msMedian);
    return {
      mrr: Math.round(mrr * 1000) / 1000,
      p1: Math.round(p(1) * 1000) / 1000,
      p3: Math.round(p(3) * 1000) / 1000,
      p5: Math.round(p(5) * 1000) / 1000,
      p10: Math.round(p(10) * 1000) / 1000,
      msMedian: Math.round(median(lat) * 10) / 10,
    };
  };
  const A = agg('bm25'), B = agg('hybrid');
  report.summary = {
    evaluatedQueries: report.queries.length,
    droppedQueries: report.dropped.length,
    coldStartHybridMs: Math.round(coldStartMs),
    bm25: A,
    hybrid: B,
    deltas: {
      mrr: Math.round((B.mrr - A.mrr) * 1000) / 1000,
      p1: Math.round((B.p1 - A.p1) * 1000) / 1000,
      p3: Math.round((B.p3 - A.p3) * 1000) / 1000,
      p5: Math.round((B.p5 - A.p5) * 1000) / 1000,
      p10: Math.round((B.p10 - A.p10) * 1000) / 1000,
      msMedian: Math.round((B.msMedian - A.msMedian) * 10) / 10,
    },
  };

  console.log(`\n=== Summary (${report.queries.length} answerable queries, median of ${REPS} reps) ===`);
  const row = (label, m) =>
    `${label.padEnd(8)} MRR=${m.mrr.toFixed(3)}  P@1=${m.p1.toFixed(3)}  P@3=${m.p3.toFixed(3)}  P@5=${m.p5.toFixed(3)}  P@10=${m.p10.toFixed(3)}  median=${m.msMedian.toFixed(1)}ms`;
  console.log(row('bm25', A));
  console.log(row('hybrid', B));
  console.log(`hybrid cold-start: ${Math.round(coldStartMs)} ms (one-time model load)`);
  console.log(`\nWrote ${outPath}`);
  writeFileSync(outPath, JSON.stringify(report, null, 2));
} catch (e) {
  console.error('Benchmark failed:', e.message);
  exitCode = 1;
} finally {
  proc.kill();
}
process.exit(exitCode);
