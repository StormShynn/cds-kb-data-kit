#!/usr/bin/env node
/**
 * Focused unit tests for Reciprocal Rank Fusion helpers.
 * No index / network required.
 *
 *   node test_rrf.mjs
 */
import { reciprocalRankFusion, rankByCosine, RRF_K } from './src/rrf.mjs';

let failed = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error(`❌ ${msg}`);
    failed += 1;
  } else {
    console.log(`✅ ${msg}`);
  }
}

// Classic RRF: A is #1 BM25 / #2 vector; B is #2 BM25 / #1 vector → both score,
// order depends on ranks. With equal reciprocal ranks A and B often tie-break
// by insertion; here A wins BM25 rank-1 + vector rank-2 vs B's BM25-2 + vector-1
// → same RRF score when k equal distances… check math:
// A: 1/(60+1) + 1/(60+2) = 1/61 + 1/62
// B: 1/(60+2) + 1/(60+1) = 1/62 + 1/61  → tie
const bm25 = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];
const vector = [{ name: 'B' }, { name: 'A' }, { name: 'D' }];
const fused = reciprocalRankFusion([bm25, vector]);
assert(fused.length === 4, `fused has 4 unique ids (got ${fused.length})`);
assert(fused[0].name === 'A' || fused[0].name === 'B', 'top is A or B (symmetric RRF)');
assert(Math.abs(fused[0]._rrf - fused[1]._rrf) < 1e-12, 'A and B have equal RRF when ranks swap');
assert(fused.find((x) => x.name === 'C'), 'C survives from BM25-only');
assert(fused.find((x) => x.name === 'D'), 'D survives from vector-only');
assert(RRF_K === 60, 'default k is 60');

// Empty / missing lists degrade gracefully
assert(reciprocalRankFusion([[], null, undefined]).length === 0, 'empty lists → []');
assert(reciprocalRankFusion([bm25]).map((x) => x.name).join(',') === 'A,B,C', 'single list preserves order');

// rankByCosine
const cosine = (a, b) => {
  let d = 0;
  for (let i = 0; i < a.length; i++) d += a[i] * b[i];
  return d;
};
const q = [1, 0];
const cands = [{ name: 'X' }, { name: 'Y' }, { name: 'Z' }];
const vecs = { X: [0.1, 0], Y: [0.9, 0], Z: null };
const ranked = rankByCosine(cands, q, (n) => vecs[n], cosine);
assert(ranked.map((r) => r.name).join(',') === 'Y,X', `cosine order Y>X (got ${ranked.map((r) => r.name)})`);
assert(ranked.every((r) => typeof r._cos === 'number'), 'attaches _cos');
assert(rankByCosine(cands, null, () => [1], cosine).length === 0, 'no query vec → []');

if (failed) {
  console.error(`\n${failed} assertion(s) failed`);
  process.exit(1);
}
console.log('\n✅ test_rrf passed');
