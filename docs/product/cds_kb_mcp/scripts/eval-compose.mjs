#!/usr/bin/env node
/**
 * Golden eval harness for search_cds / search_query_library / compose_query.
 *
 * Deterministic: uses local cds_kb_data indexes only (no live SAP / no network
 * required when the sibling index is present). Exit non-zero on regressions.
 *
 * Usage:
 *   node scripts/eval-compose.mjs [path-to-cds-kb-data]
 *   npm run test:eval
 *
 * Fixtures: scripts/fixtures/eval-compose.json
 */
import { spawn } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mcpRoot = path.resolve(__dirname, '..');
const defaultDataPath = path.resolve(mcpRoot, '..', 'cds_kb_data');
const dataPath = path.resolve(process.argv[2] || defaultDataPath);
const serverPath = path.join(mcpRoot, 'src', 'server.mjs');
const fixturesPath = path.join(__dirname, 'fixtures', 'eval-compose.json');

if (!existsSync(path.join(dataPath, 'index', 'search_index.json'))) {
  console.error(`Missing data index at ${path.join(dataPath, 'index', 'search_index.json')}`);
  console.error('Pass an explicit path: node scripts/eval-compose.mjs /path/to/cds_kb_data');
  process.exit(1);
}
if (!existsSync(fixturesPath)) {
  console.error(`Missing fixtures at ${fixturesPath}`);
  process.exit(1);
}

const fixtures = JSON.parse(readFileSync(fixturesPath, 'utf8'));
const cases = Array.isArray(fixtures.cases) ? fixtures.cases : [];

const proc = spawn('node', [serverPath, '--data', dataPath], {
  stdio: ['pipe', 'pipe', 'pipe'],
  env: {
    ...process.env,
    // Keep eval offline / BM25-stable: hybrid needs ONNX download on cold hosts.
    // Ranking assertions use anyViewInTop, which must pass under BM25 alone.
    CDS_KB_EMBED_API_KEY: '',
  },
});

let id = 0;
const pending = new Map();
const rl = createInterface({ input: proc.stdout });

rl.on('line', (line) => {
  try {
    const msg = JSON.parse(line);
    if (msg.id != null && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
  } catch { /* ignore non-JSON */ }
});

proc.stderr.on('data', (d) => {
  const s = String(d);
  // Surface boot errors; ignore noisy transformers progress if any.
  if (/error|Error|ENOENT|Missing|failed/i.test(s)) process.stderr.write(s);
});

function call(method, params = {}) {
  return new Promise((resolve, reject) => {
    const reqId = ++id;
    const timer = setTimeout(() => {
      pending.delete(reqId);
      reject(new Error(`timeout waiting for ${method}`));
    }, 90000);
    pending.set(reqId, (msg) => {
      clearTimeout(timer);
      resolve(msg);
    });
    proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: reqId, method, params }) + '\n');
  });
}

function upper(s) {
  return String(s || '').toUpperCase();
}

function textBlob(msg) {
  const sc = msg?.result?.structuredContent;
  const contentText = (msg?.result?.content || []).map((c) => c.text || '').join('\n');
  return { sc, text: contentText, raw: msg };
}

function checkCase(c, msg) {
  const failures = [];
  const expect = c.expect || {};
  const { sc, text } = textBlob(msg);
  if (msg?.error) {
    failures.push(`RPC error: ${JSON.stringify(msg.error)}`);
    return failures;
  }

  if (c.tool === 'search_cds') {
    const names = (sc?.results || []).map((r) => upper(r.name));
    const topN = expect.topN || names.length;
    const top = names.slice(0, topN);
    if (expect.anyViewInTop?.length) {
      // Substring match: fixture token "I_PURCHASEORDER" hits "I_PURCHASEORDERTP_2".
      const hit = expect.anyViewInTop.some((v) => {
        const needle = upper(v);
        return top.some((n) => n.includes(needle) || needle.includes(n));
      });
      if (!hit) {
        failures.push(
          `expected one of [${expect.anyViewInTop.join(', ')}] (substring) in top ${topN}; got [${top.slice(0, 8).join(', ')}]`,
        );
      }
    }
  }

  if (c.tool === 'search_query_library') {
    const results = sc?.results || [];
    if (expect.libraryTitleIncludes) {
      const ok = results.some((r) => String(r.title || '').includes(expect.libraryTitleIncludes));
      if (!ok) {
        failures.push(
          `expected library title including "${expect.libraryTitleIncludes}"; got [${results.map((r) => r.title).join(' | ')}]`,
        );
      }
    }
    if (expect.anyViewInLibraryHit?.length) {
      const views = results.flatMap((r) => (r.views || []).map(upper));
      const hit = expect.anyViewInLibraryHit.some((v) => {
        const needle = upper(v);
        return views.some((n) => n.includes(needle) || needle.includes(n));
      });
      if (!hit) {
        failures.push(
          `expected library view one of [${expect.anyViewInLibraryHit.join(', ')}]; got [${views.join(', ')}]`,
        );
      }
    }
  }

  if (c.tool === 'compose_query') {
    const openSql = sc?.openSql || '';
    const cdsView = sc?.cdsView || '';
    const warnings = sc?.warnings || [];
    const blob = [openSql, cdsView, text, ...warnings].join('\n');

    for (const needle of expect.cdsContains || []) {
      if (!cdsView.includes(needle) && !blob.includes(needle)) {
        failures.push(`cds/output missing "${needle}"`);
      }
    }
    for (const needle of expect.openSqlContains || []) {
      if (!openSql.includes(needle) && !blob.includes(needle)) {
        failures.push(`openSql/output missing "${needle}"`);
      }
    }
    for (const hint of expect.fieldHints || []) {
      if (!blob.includes(hint)) failures.push(`field hint missing "${hint}"`);
    }
    if (expect.warningAnyMatch?.length) {
      const wtext = warnings.join('\n') + '\n' + text;
      const hit = expect.warningAnyMatch.some((p) => {
        try {
          return new RegExp(p, 'i').test(wtext);
        } catch {
          return wtext.toLowerCase().includes(String(p).toLowerCase());
        }
      });
      if (!hit) {
        failures.push(
          `expected a warning matching one of [${expect.warningAnyMatch.join(', ')}]; got [${warnings.join(' | ') || '(none)'}]`,
        );
      }
    }
    if (expect.warningMustNotMatch?.length) {
      const wtext = warnings.join('\n');
      for (const p of expect.warningMustNotMatch) {
        if (new RegExp(p, 'i').test(wtext)) {
          failures.push(`unexpected warning matching /${p}/i: ${wtext}`);
        }
      }
    }
  }

  return failures;
}

async function run() {
  console.log(`Golden eval — data: ${dataPath}`);
  console.log(`Fixtures: ${fixturesPath} (${cases.length} cases)\n`);

  await call('initialize', {
    protocolVersion: '2025-03-26',
    capabilities: {},
    clientInfo: { name: 'eval-compose', version: '1.0' },
  });
  await call('notifications/initialized', {});

  let passed = 0;
  let failed = 0;
  const failures = [];

  for (const c of cases) {
    const label = `${c.id} (${c.tool})`;
    try {
      const msg = await call('tools/call', { name: c.tool, arguments: c.args || {} });
      const errs = checkCase(c, msg);
      if (errs.length) {
        failed += 1;
        failures.push({ id: c.id, errs });
        console.error(`❌ ${label}`);
        for (const e of errs) console.error(`   - ${e}`);
      } else {
        passed += 1;
        console.log(`✅ ${label}`);
      }
    } catch (e) {
      failed += 1;
      failures.push({ id: c.id, errs: [String(e?.message || e)] });
      console.error(`❌ ${label}: ${e?.message || e}`);
    }
  }

  // Library-first prompt smoke (guided path must mention search_query_library)
  {
    const label = 'prompt-compose_query-library-first';
    const msg = await call('prompts/get', {
      name: 'compose_query',
      arguments: { intent: 'open purchase orders' },
    });
    const t = msg?.result?.messages?.[0]?.content?.text || '';
    if (!/search_query_library/i.test(t)) {
      failed += 1;
      failures.push({ id: label, errs: ['compose_query prompt missing library-first search_query_library step'] });
      console.error(`❌ ${label}`);
    } else {
      passed += 1;
      console.log(`✅ ${label}`);
    }
  }

  console.log(`\n${passed} passed, ${failed} failed`);
  proc.kill();
  if (failed) {
    console.error('\nRegressions detected — see failures above.');
    process.exit(1);
  }
  console.log('✅ Golden eval passed');
  process.exit(0);
}

run().catch((e) => {
  console.error('Eval failed:', e);
  proc.kill();
  process.exit(1);
});

setTimeout(() => {
  console.error('Timeout!');
  proc.kill();
  process.exit(1);
}, 180000);
