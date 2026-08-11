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
