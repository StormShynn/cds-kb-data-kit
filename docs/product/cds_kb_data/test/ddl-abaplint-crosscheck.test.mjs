// test/ddl-abaplint-crosscheck.test.mjs
// Cross-check src/parser.mjs (hand-rolled regexes) against abaplint's real
// CDS DDL parser (@abaplint/core — the MIT-licensed parser the ABAP
// community lints with, which has a dedicated CDS grammar: CDSParser +
// ExpressionsCDS). Both parse the same sampled DDL; this test asserts they
// agree on the structurally unambiguous facts and REPORTS the noisy ones.
//
// Why this exists: src/parser.mjs is regex-based and every bug so far was
// found by hand against one real view ("define root abstract entity",
// "cast() argument", association redirects...). abaplint is a full grammar
// parser — if our parser silently regresses on some construct, this test is
// the first to notice, because abaplint still extracts the ground truth.
//
// What's asserted (measured baseline on a 189-view sample, 2026-08):
//   - abaplint parses the DDL at all            -> measured 100%
//   - view name agreement                       -> measured 100%
//   - association alias set agreement           -> measured ~97%
//   - field name set agreement (softer signal)  -> measured ~84-90%
// Field-set agreement is inherently noisier: the two parsers classify a
// bare `_Alias` select item and annotated association references slightly
// differently, and expression-heavy fields (case/when, function calls) have
// genuinely different granularity. So fields are gated at a lower threshold
// and printed as a report for eyeballing, not treated as a hard contract.
//
// Thresholds are env-overridable (e.g. ABA_THRESHOLD_ASSOC=0.9) so a
// deliberate parser change can be evaluated against a stricter bar locally.
//
// Runtime: samples ~120 views deterministically (sorted by path), well under
// a few seconds — safe for every PR in CI.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CDSParser, MemoryFile, ExpressionsCDS as E } from '@abaplint/core';
import path from 'node:path';
import fs from 'node:fs/promises';
import { parseDDL } from '../src/parser.mjs';
import { listViewFiles } from '../scripts/lib/view-files.mjs';

const VIEWS_DIR = path.join(process.cwd(), 'views');
const SAMPLE_SIZE = Number(process.env.ABA_CROSSCHECK_SAMPLE || 120);
const THRESHOLDS = {
  parseOk: Number(process.env.ABA_THRESHOLD_PARSE ?? 0.98),
  name: Number(process.env.ABA_THRESHOLD_NAME ?? 0.95),
  assoc: Number(process.env.ABA_THRESHOLD_ASSOC ?? 0.85),
  field: Number(process.env.ABA_THRESHOLD_FIELD ?? 0.75),
};

const DDL_BLOCK_RE = /```(?:abap|sql)?\s*\r?\n([\s\S]*?)\r?\n```/;

// ── abaplint extraction ─────────────────────────────────────────────────────
// Walk the CDS AST (see the dumps this was built against in the session that
// added this file): CDSDefineView/CDSDefineProjection/CDSDefineAbstract roots,
// CDSSelect -> CDSSource/CDSAssociation, CDSElement -> CDSAs/CDSPrefixedName.

function lastIdentifier(txt) {
  const parts = txt.replace(/\s+/g, ' ').trim().split(/[\s.]+/);
  return parts[parts.length - 1];
}

function collect(node, cls) {
  const out = [];
  function walk(n) {
    for (const c of n.getChildren?.() || []) {
      if (c.get?.() instanceof cls) out.push(c);
      walk(c);
    }
  }
  walk(node);
  return out;
}

function extractWithAbaplint(ddl) {
  const node = new CDSParser().parse(new MemoryFile('view.asddls', ddl));
  if (!node) return null;
  const kind = node.get().constructor.name;
  const nameNode = node.findDirectExpression(E.CDSName);
  const name = nameNode ? nameNode.concatTokens().toUpperCase() : '';
  const out = { name, assocs: [], fields: [] };

  // Abstract entities declare fields as "Name : type;" direct children —
  // not CDSElement nodes (verified against real D_* action-parameter views).
  if (kind === 'CDSDefineAbstract') {
    let first = true;
    for (const c of node.getChildren()) {
      if (c.get?.() instanceof E.CDSName) {
        if (first) { first = false; continue; } // the entity's own name
        out.fields.push(c.concatTokens());
      }
    }
    return out;
  }

  const src = node.findDirectExpression(E.CDSSelect)?.findDirectExpression(E.CDSSource);
  out.sourceTable = src ? src.concatTokens() : '';

  // Declared associations ("association [0..1] to X as _X") live inside
  // CDSSelect for views and at the root for projections — recursive collect
  // finds both without caring which shape the DDL used.
  for (const a of collect(node, E.CDSAssociation)) {
    const rel = a.findDirectExpression(E.CDSRelation);
    if (rel) out.assocs.push(lastIdentifier(rel.concatTokens()));
  }
  for (const el of collect(node, E.CDSElement)) {
    const text = el.concatTokens().replace(/\s+/g, ' ');
    // Projection redirect re-declarations: "_X : redirected to parent Y" /
    // "_X : association to parent Y" — an association, not a field.
    const redirect = text.match(/^(_\w+)\s*:\s*(?:redirected\s+to|association\s+to)\b/i);
    if (redirect) { out.assocs.push(redirect[1]); continue; }
    // A bare association reference in the select list ("_ChildToParent,"
    // possibly with leading annotations like @ObjectModel.association.type
    // gluing them onto the element's token text): the element *ends* with a
    // bare "_X" identifier. Our parser files these under associations; keep
    // the comparison apples-to-apples by doing the same here.
    const bareUnderscore = text.match(/(?:^|\s)(_\w+)$/);
    if (bareUnderscore) { out.assocs.push(bareUnderscore[1]); continue; }
    // Everything else is a field: "X as Y" -> Y, "_Alias.Field" -> Field,
    // expression element -> last identifier (same fallback heuristic as
    // src/parser.mjs, so the two are measuring the same thing).
    const as = el.findDirectExpression(E.CDSAs);
    const prefixed = el.findDirectExpression(E.CDSPrefixedName);
    out.fields.push(as ? lastIdentifier(as.concatTokens()) : prefixed ? lastIdentifier(prefixed.concatTokens()) : lastIdentifier(text));
  }
  out.assocs = [...new Set(out.assocs)];
  out.fields = [...new Set(out.fields)];
  return out;
}

// ── Sample collection ───────────────────────────────────────────────────────

async function loadSample() {
  const files = (await listViewFiles(VIEWS_DIR)).sort((a, b) => a.relPath.localeCompare(b.relPath));
  const step = Math.max(1, Math.floor(files.length / SAMPLE_SIZE));
  const sample = [];
  for (let i = 0; i < files.length; i += step) {
    const { name, relPath } = files[i];
    const content = await fs.readFile(path.join(VIEWS_DIR, ...relPath.split('/')), 'utf-8');
    const m = content.match(DDL_BLOCK_RE);
    const ddl = m ? m[1].trim() : '';
    if (!ddl || !/define\s+(view|abstract)/i.test(ddl)) continue; // metadata-only view
    sample.push({ name, ddl });
  }
  return sample;
}

// ── Run the comparison once, assert per metric ──────────────────────────────

const stats = {
  total: 0, parsed: 0, parseFails: [],
  name: { agree: 0, total: 0 },
  assoc: { agree: 0, total: 0, examples: [] },
  field: { agree: 0, total: 0, examples: [] },
};

await (async () => {
  const sample = await loadSample();
  stats.total = sample.length;
  for (const { name, ddl } of sample) {
    const ours = parseDDL(ddl, { viewName: name });
    const abap = extractWithAbaplint(ddl);
    if (!abap) { stats.parseFails.push(name); continue; }
    stats.parsed++;

    if (abap.name === ours.name) stats.name.agree++;
    stats.name.total++;

    const ourAssocs = new Set(ours.associations.map((a) => a.alias));
    const abapAssocs = new Set(abap.assocs);
    stats.assoc.total++;
    if (ourAssocs.size === abapAssocs.size && [...ourAssocs].every((a) => abapAssocs.has(a))) {
      stats.assoc.agree++;
    } else if (stats.assoc.examples.length < 8) {
      stats.assoc.examples.push([name, [...abapAssocs].join(','), [...ourAssocs].join(',')]);
    }

    const ourFields = new Set(ours.fields.map((f) => f.name));
    const abapFields = new Set(abap.fields);
    stats.field.total++;
    if (ourFields.size === abapFields.size && [...ourFields].every((f) => abapFields.has(f))) {
      stats.field.agree++;
    } else if (stats.field.examples.length < 8) {
      stats.field.examples.push([name, [...abapFields].join(','), [...ourFields].join(',')]);
    }
  }
})();

function rate(agree, total) {
  return total === 0 ? 1 : agree / total;
}

test('found view files to cross-check (not running against an empty views/)', () => {
  assert.ok(stats.total > 0, `no DDL-bearing view files found under ${VIEWS_DIR} — is the test running from the package dir?`);
});

test(`abaplint parses the sampled DDL (≥${THRESHOLDS.parseOk} of ${stats.total})`, () => {
  if (stats.parseFails.length) {
    console.log(`abaplint could not parse: ${stats.parseFails.join(', ')}`);
  }
  assert.ok(
    rate(stats.parsed, stats.total) >= THRESHOLDS.parseOk,
    `abaplint parse success ${stats.parsed}/${stats.total} below threshold ${THRESHOLDS.parseOk}`,
  );
});

test(`view name agrees with abaplint (≥${THRESHOLDS.name})`, () => {
  assert.ok(
    rate(stats.name.agree, stats.name.total) >= THRESHOLDS.name,
    `name agreement ${stats.name.agree}/${stats.name.total} below threshold ${THRESHOLDS.name}`,
  );
});

test(`association aliases agree with abaplint (≥${THRESHOLDS.assoc})`, () => {
  if (stats.assoc.examples.length) {
    console.log('association mismatches (view, abaplint, ours):');
    for (const e of stats.assoc.examples) console.log(`  ${e[0]}: abaplint=[${e[1]}] ours=[${e[2]}]`);
  }
  assert.ok(
    rate(stats.assoc.agree, stats.assoc.total) >= THRESHOLDS.assoc,
    `association agreement ${stats.assoc.agree}/${stats.assoc.total} below threshold ${THRESHOLDS.assoc}`,
  );
});

test(`field name sets agree with abaplint (≥${THRESHOLDS.field})`, () => {
  if (stats.field.examples.length) {
    console.log('field mismatches (view, abaplint, ours) — report only, threshold is a soft gate:');
    for (const e of stats.field.examples) {
      console.log(`  ${e[0]}\n    abaplint=[${e[1]}]\n    ours    =[${e[2]}]`);
    }
  }
  assert.ok(
    rate(stats.field.agree, stats.field.total) >= THRESHOLDS.field,
    `field agreement ${stats.field.agree}/${stats.field.total} below threshold ${THRESHOLDS.field}`,
  );
});
