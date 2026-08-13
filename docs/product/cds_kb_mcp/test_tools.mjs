#!/usr/bin/env node
// Quick smoke test for the MCP server tools
// Usage: node test_tools.mjs [path-to-cds-kb-data]
// Default: sibling harness folder ../cds_kb_data
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultDataPath = path.resolve(__dirname, '..', 'cds_kb_data');
const dataPath = path.resolve(process.argv[2] || defaultDataPath);
const serverPath = path.join(__dirname, 'src', 'server.mjs');

if (!existsSync(path.join(dataPath, 'index', 'search_index.json'))) {
  console.error(`Missing data index at ${path.join(dataPath, 'index', 'search_index.json')}`);
  console.error('Pass an explicit path: node test_tools.mjs /path/to/cds_kb_data');
  process.exit(1);
}

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
  return new Promise((resolve) => {
    const reqId = ++id;
    pending.set(reqId, resolve);
    const req = JSON.stringify({ jsonrpc: '2.0', id: reqId, method, params });
    proc.stdin.write(req + '\n');
  });
}

async function run() {
  // Initialize
  await call('initialize', {
    protocolVersion: '2025-03-26',
    capabilities: {},
    clientInfo: { name: 'test', version: '1.0' },
  });
  await call('notifications/initialized', {});

  console.log('\n=== TEST 1: search_cds("VBAK") ===');
  const r1 = await call('tools/call', { name: 'search_cds', arguments: { query: 'VBAK', limit: 5 } });
  console.log(r1.result?.content?.[0]?.text?.slice(0, 500));

  // Vietnamese tests require a data index built WITH viKeywords/viModuleKeywords
  // (the local clone of the data repo is fine); an older index without the
  // Vietnamese synonyms returns no hits and these will fail.
  console.log('\n=== TEST 1.5: search_cds Vietnamese (accented) ===');
  const r15 = await call('tools/call', { name: 'search_cds', arguments: { query: 'đơn mua hàng', limit: 10 } });
  console.log(r15.result?.content?.[0]?.text?.slice(0, 400));
  const vi15 = r15.result?.content?.[0]?.text || '';
  if (!vi15 || !/I_PURCHASEORDER|I_PURCHASING|I_SUPPLIER/i.test(vi15)) {
    console.error('❌ Vietnamese search failed — expected purchase-related views for "đơn mua hàng"');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ Vietnamese accent-insensitive search works');

  console.log('\n=== TEST 1.6: search_cds Vietnamese (unaccented "don mua hang") ===');
  const r16 = await call('tools/call', { name: 'search_cds', arguments: { query: 'don mua hang', limit: 10 } });
  console.log(r16.result?.content?.[0]?.text?.slice(0, 400));
  const vi16 = r16.result?.content?.[0]?.text || '';
  if (!vi16 || !/I_PURCHASEORDER|I_PURCHASING|I_SUPPLIER/i.test(vi16)) {
    console.error('❌ Unaccented Vietnamese search failed');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ Unaccented form matches the same views');

  console.log('\n=== TEST 2: search_cds with module alias "Finance" ===');
  const r2 = await call('tools/call', { name: 'search_cds', arguments: { query: 'journal entry', module: 'Finance', limit: 3 } });
  console.log(r2.result?.content?.[0]?.text?.slice(0, 500));

  console.log('\n=== TEST 3: get_taxonomy ===');
  const r3 = await call('tools/call', { name: 'get_taxonomy', arguments: {} });
  console.log(r3.result?.content?.[0]?.text?.slice(0, 800));

  console.log('\n=== TEST 3.5: get_views_by_tag ===');
  const r35 = await call('tools/call', { name: 'get_views_by_tag', arguments: { tag: 'bo:salesorder', limit: 3 } });
  console.log(r35.result?.content?.[0]?.text?.slice(0, 800));

  console.log('\n=== TEST 3.6: get_views_by_field (field lookup) ===');
  const r36a = await call('tools/call', { name: 'get_views_by_field', arguments: { name: 'CompanyCode', limit: 5 } });
  console.log(r36a.result?.content?.[0]?.text?.slice(0, 600));

  console.log('\n=== TEST 3.7: get_views_by_field (table/view lookup) ===');
  const r36b = await call('tools/call', { name: 'get_views_by_field', arguments: { name: 'I_MaterialStock_2', limit: 5 } });
  console.log(r36b.result?.content?.[0]?.text?.slice(0, 600));

  console.log('\n=== TEST 3.8: get_views_by_field (raw DDIC column lookup) ===');
  const r36c = await call('tools/call', { name: 'get_views_by_field', arguments: { name: 'VWERK', limit: 5 } });
  console.log(r36c.result?.content?.[0]?.text?.slice(0, 600));

  console.log('\n=== TEST 3.9: get_view_dependencies ===');
  const r37 = await call('tools/call', { name: 'get_view_dependencies', arguments: { name: 'I_MaterialStock_2', limit: 5 } });
  console.log(r37.result?.content?.[0]?.text?.slice(0, 800));

  console.log('\n=== TEST 4: get_cds_view with sections ===');
  const r4 = await call('tools/call', { name: 'get_cds_view', arguments: { name: 'C_PURCHASEORDERDEX', sections: ['metadata', 'fields'] } });
  const text4 = r4.result?.content?.[0]?.text || '';
  console.log(`Sections output length: ${text4.length} chars`);
  console.log(text4.slice(0, 400));

  console.log('\n=== TEST 5: get_cds_view full (for comparison) ===');
  const r5 = await call('tools/call', { name: 'get_cds_view', arguments: { name: 'C_PURCHASEORDERDEX' } });
  const text5 = r5.result?.content?.[0]?.text || '';
  console.log(`Full output length: ${text5.length} chars`);
  console.log(`Token savings: ${((1 - text4.length / text5.length) * 100).toFixed(0)}%`);

  console.log('\n=== TEST 6: kb_info ===');
  const r6 = await call('tools/call', { name: 'kb_info', arguments: {} });
  console.log(r6.result?.content?.[0]?.text);

  console.log('\n=== TEST 7: suggest_base_views ===');
  const r7 = await call('tools/call', { name: 'suggest_base_views', arguments: { query: 'purchase order', limit: 3 } });
  const t7 = r7.result?.content?.[0]?.text || '';
  console.log(t7.slice(0, 500));
  if (!t7 || !/Suggested base views|I_PURCHASEORDER|I_PURCHASING/i.test(t7)) {
    console.error('❌ suggest_base_views failed — expected purchase-related base suggestions');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ suggest_base_views');

  console.log('\n=== TEST 8: compose_query ===');
  const r8 = await call('tools/call', {
    name: 'compose_query',
    arguments: {
      views: [{ alias: 't1', name: 'I_PurchaseOrder' }],
      select: 'PurchaseOrder,\n  PurchaseOrderType',
      viewName: 'Z_TestPo',
    },
  });
  const t8 = r8.result?.content?.[0]?.text || '';
  console.log(t8.slice(0, 500));
  if (!/FROM I_PurchaseOrder/i.test(t8) || !/define view entity Z_TestPo/i.test(t8)) {
    console.error('❌ compose_query failed — expected OpenSQL FROM + CDS define view entity');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ compose_query');

  console.log('\n=== TEST 9: generate_cds_view ===');
  const r9 = await call('tools/call', {
    name: 'generate_cds_view',
    arguments: {
      name: 'Z_TestPoGen',
      baseView: 'I_PurchaseOrder',
      select: 'PurchaseOrder',
      label: 'Test PO',
    },
  });
  const t9 = r9.result?.content?.[0]?.text || '';
  console.log(t9.slice(0, 500));
  if (!/@AccessControl/i.test(t9) || !/define view entity Z_TestPoGen/i.test(t9)) {
    console.error('❌ generate_cds_view failed — expected annotated DDL skeleton');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ generate_cds_view');

  console.log('\n=== TEST 10: validate_cds_ddl (good) ===');
  const goodDdl = `@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Test'
define view entity Z_GoodView
  as select from I_Product
{
  key Product
}`;
  const r10 = await call('tools/call', { name: 'validate_cds_ddl', arguments: { ddl: goodDdl } });
  const t10 = r10.result?.content?.[0]?.text || '';
  console.log(t10);
  if (!/parsed: true/i.test(t10)) {
    console.error('❌ validate_cds_ddl (good) failed — expected parsed: true');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ validate good DDL');

  console.log('\n=== TEST 11: validate_cds_ddl (bad) ===');
  const r11 = await call('tools/call', {
    name: 'validate_cds_ddl',
    arguments: { ddl: 'this is not valid cds ddl !!!' },
  });
  const t11 = r11.result?.content?.[0]?.text || '';
  console.log(t11);
  if (!/ok: false/i.test(t11)) {
    console.error('❌ validate_cds_ddl (bad) failed — expected ok: false');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ validate bad DDL');

  console.log('\n=== TEST 12: search_cds hasDdl:true ===');
  const r12 = await call('tools/call', {
    name: 'search_cds',
    arguments: { query: 'purchase order', hasDdl: true, limit: 5 },
  });
  const t12 = r12.result?.content?.[0]?.text || '';
  console.log(t12.slice(0, 400));
  if (!t12 || /No CDS views matched/i.test(t12) || !/I_PURCHASEORDER|I_PURCHASING|Top \d+ CDS views/i.test(t12)) {
    console.error('❌ search_cds hasDdl:true failed — expected results');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ search_cds hasDdl:true');

  console.log('\n=== TEST 13: propose_query_library_entry ===');
  const r13 = await call('tools/call', {
    name: 'propose_query_library_entry',
    arguments: {
      title: 'Test PO select',
      views: [{ name: 'I_PurchaseOrder' }],
      select: 'PurchaseOrder',
      viewName: 'Z_TestPropose',
    },
  });
  const t13 = r13.result?.content?.[0]?.text || '';
  console.log(t13.slice(0, 500));
  if (!t13 || !/"title":\s*"Test PO select"/i.test(t13) || !/query-library\.json/i.test(t13)) {
    console.error('❌ propose_query_library_entry failed — expected JSON snippet');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ propose_query_library_entry');

  console.log('\n=== TEST 14: kb_info embeddings / usageEndpoint / privateOverlay ===');
  const r14 = await call('tools/call', { name: 'kb_info', arguments: {} });
  const t14 = r14.result?.content?.[0]?.text || '';
  console.log(t14);
  if (!/embeddings:/i.test(t14) || !/usageEndpoint:/i.test(t14) || !/privateOverlay:/i.test(t14)) {
    console.error('❌ kb_info missing embeddings / usageEndpoint / privateOverlay lines');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ kb_info visibility fields');

  console.log('\n=== TEST 15.5: view_changelog ===');
  const rch = await call('tools/call', {
    name: 'view_changelog',
    arguments: { action: 'added', limit: 5 },
  });
  const tch = rch.result?.content?.[0]?.text || '';
  console.log(tch.slice(0, 500));
  if (tch && !/No changelog available/i.test(tch)) {
    const s = rch.result?.structuredContent;
    if (!s || !Array.isArray(s.results) || s.results.length === 0 || !s.results.every((r) => r.action === 'added' && r.viewName)) {
      console.error('❌ view_changelog failed — expected added entries with viewName');
      proc.kill();
      process.exit(1);
    }
    console.log('✅ view_changelog');
  } else {
    // changelog.json may be absent in a minimal data tree — accept a graceful message.
    console.log('ℹ️  view_changelog returned a no-data message (changelog.json absent)');
  }

  console.log('\n=== TEST 15: search_query_library ===');
  const rlib = await call('tools/call', {
    name: 'search_query_library',
    arguments: { query: 'open purchase orders', limit: 5 },
  });
  const tlib = rlib.result?.content?.[0]?.text || '';
  console.log(tlib.slice(0, 500));
  if (!tlib || !/Open purchase orders|saved quer/i.test(tlib)) {
    console.error('❌ search_query_library failed — expected the seeded "Open purchase orders" entry');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ search_query_library');

  console.log('\n=== TEST 16: resources/read (cds://stats, cds://query-library, cds://view/{name}) ===');
  const r16a = await call('resources/read', { uri: 'cds://stats' });
  const t16a = r16a.result?.contents?.[0]?.text || '';
  console.log('cds://stats:', t16a.slice(0, 200));
  if (!/viewCount/.test(t16a) && !/embeddings/.test(t16a)) {
    console.error('❌ cds://stats failed — expected kb_info-shaped JSON');
    proc.kill();
    process.exit(1);
  }
  const r16b = await call('resources/read', { uri: 'cds://query-library' });
  const t16b = r16b.result?.contents?.[0]?.text || '';
  console.log('cds://query-library:', t16b.slice(0, 200));
  if (!/Open purchase orders/.test(t16b)) {
    console.error('❌ cds://query-library failed — expected the seeded library entries');
    proc.kill();
    process.exit(1);
  }
  const r16c = await call('resources/read', { uri: 'cds://view/I_MaterialStock_2' });
  const t16c = r16c.result?.contents?.[0]?.text || '';
  console.log('cds://view/I_MaterialStock_2:', t16c.slice(0, 200));
  if (!/I_MaterialStock_2/i.test(t16c)) {
    console.error('❌ cds://view/I_MaterialStock_2 failed — expected view markdown');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ resources/read');

  console.log('\n=== TEST 17: prompts/get (explain_view, compose_query, validate_ddl) ===');
  const r17a = await call('prompts/get', { name: 'explain_view', arguments: { name: 'I_MaterialStock_2' } });
  const t17a = r17a.result?.messages?.[0]?.content?.text || '';
  console.log('explain_view:', t17a.slice(0, 160));
  if (!/get_cds_view/.test(t17a)) {
    console.error('❌ explain_view prompt failed');
    proc.kill();
    process.exit(1);
  }
  const r17b = await call('prompts/get', { name: 'compose_query', arguments: { intent: 'overdue invoices', baseView: 'I_SalesOrder' } });
  const t17b = r17b.result?.messages?.[0]?.content?.text || '';
  console.log('compose_query:', t17b.slice(0, 160));
  if (!/Compose a CDS view/.test(t17b)) {
    console.error('❌ compose_query prompt failed');
    proc.kill();
    process.exit(1);
  }
  const r17c = await call('prompts/get', { name: 'validate_ddl', arguments: { ddl: 'define view entity Z_X as select from I_Product { key Product }' } });
  const t17c = r17c.result?.messages?.[0]?.content?.text || '';
  console.log('validate_ddl:', t17c.slice(0, 160));
  if (!/Validate this CDS DDL/.test(t17c)) {
    console.error('❌ validate_ddl prompt failed');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ prompts/get');

  console.log('\n=== TEST 18: completion/complete (prompt arg + resource template) ===');
  const r18a = await call('completion/complete', {
    ref: { type: 'ref/prompt', name: 'explain_view' },
    argument: { name: 'name', value: 'I_Material' },
  });
  const compA = r18a.result?.completion?.values || [];
  console.log('prompt completions:', compA.slice(0, 5).join(', '));
  if (compA.length === 0) {
    console.error('❌ completion/complete (prompt) returned no values');
    proc.kill();
    process.exit(1);
  }
  const r18b = await call('completion/complete', {
    ref: { type: 'ref/resource', uri: 'cds://view/{name}' },
    argument: { name: 'name', value: 'I_Material' },
  });
  const compB = r18b.result?.completion?.values || [];
  console.log('resource completions:', compB.slice(0, 5).join(', '));
  if (compB.length === 0) {
    console.error('❌ completion/complete (resource) returned no values');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ completion/complete');

  console.log('\n=== TEST 19: search_cds search_mode=hybrid ===');
  const r19 = await call('tools/call', { name: 'search_cds', arguments: { query: 'purchase order', search_mode: 'hybrid', limit: 5 } });
  const t19 = r19.result?.content?.[0]?.text || '';
  console.log(t19.slice(0, 400));
  if (!t19 || /No CDS views matched/i.test(t19)) {
    console.error('❌ search_cds hybrid failed — expected results (hybrid or BM25 fallback)');
    proc.kill();
    process.exit(1);
  }
  console.log('✅ search_cds search_mode=hybrid');

  console.log('\n✅ All tests passed!');
  proc.kill();
  process.exit(0);
}

run().catch((e) => {
  console.error('Test failed:', e);
  proc.kill();
  process.exit(1);
});

// Timeout safety — large local indexes can take >30s to load on CI
setTimeout(() => { console.error('Timeout!'); proc.kill(); process.exit(1); }, 120000);
