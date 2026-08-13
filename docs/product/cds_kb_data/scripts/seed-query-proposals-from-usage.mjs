#!/usr/bin/env node
// scripts/seed-query-proposals-from-usage.mjs
// Offline seed of reviewable query-library proposals from:
//   1) index/usage-stats.json popularity (when present)
//   2) a curated starter catalog of common released CDS views
//
// Writes index/query-proposals.json only — never mutates query-library.json.
// Use --promote N to also append the top N pending proposals into
// query-library.json (still for human review in git before publish).
//
// Usage:
//   node scripts/seed-query-proposals-from-usage.mjs [--limit 20] [--promote 8]

import fs from 'node:fs/promises';
import path from 'node:path';

const args = process.argv.slice(2);
function flagVal(name, fallback) {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : fallback;
}
const DATA_DIR = args.find((a, i) => !a.startsWith('--') && (i === 0 || !args[i - 1].startsWith('--'))) || '.';
const LIMIT = Number(flagVal('--limit', 24));
const PROMOTE = Number(flagVal('--promote', 0));

/** Fallback starters when usage-stats is thin — common analytics / transactional views. */
const STARTER_CATALOG = [
  { name: 'I_PURCHASEORDERTP_2', title: 'Purchase order transactional processing', description: 'Purchase order header TP view — useful starting point for PO status and supplier context.' },
  { name: 'I_PURCHASEORDERITEMAPI01', title: 'Purchase order items (API)', description: 'PO item lines with material, plant and quantity fields for item-level analysis.' },
  { name: 'I_SALESORDERITEM', title: 'Sales order items', description: 'Sales order item list with product, quantity and net amount dimensions.' },
  { name: 'I_BILLINGDOCUMENT', title: 'Billing documents', description: 'Billing document headers for SD billing status and customer overview.' },
  { name: 'I_DELIVERYDOCUMENT', title: 'Outbound deliveries', description: 'Delivery document headers for logistics execution tracking.' },
  { name: 'I_BUSINESSPARTNER', title: 'Business partner master', description: 'Business partner master data excluding deleted records where a deletion flag exists.' },
  { name: 'I_CUSTOMER', title: 'Customer master', description: 'Customer master overview for account and sales-area related reporting.' },
  { name: 'I_SUPPLIER', title: 'Supplier master', description: 'Supplier master overview for procurement partner reporting.' },
  { name: 'I_JOURNALENTRYITEM', title: 'Journal entry items', description: 'FI journal entry line items for account, company code and amount analysis.' },
  { name: 'I_GLACCOUNTLINEITEM', title: 'G/L account line items', description: 'G/L line items for account balances and document drill-down.' },
  { name: 'I_COSTCENTER', title: 'Cost centers', description: 'Cost center master for CO reporting dimensions.' },
  { name: 'I_MATERIALDOCUMENTITEM_2', title: 'Material document items', description: 'Inventory movement item lines (goods movements) by material and plant.' },
  { name: 'I_PRODUCT', title: 'Product master by type', description: 'Product master with type/group — already may exist in library; seed skips duplicates.' },
  { name: 'I_SALESORDER', title: 'Sales order header list', description: 'Sales order headers — already may exist in library; seed skips duplicates.' },
  { name: 'I_MATERIALSTOCK_2', title: 'Material stock by plant', description: 'Warehouse stock — already may exist in library; seed skips duplicates.' },
  { name: 'I_PURCHASEORDERAPI01', title: 'Open purchase orders', description: 'Purchase order API header — already may exist in library; seed skips duplicates.' },
];

async function readJson(file, fallback) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'));
  } catch {
    return fallback;
  }
}

function viewNameOf(entry) {
  const v = entry?.views?.[0]?.name;
  return v ? String(v).toUpperCase() : '';
}

function pickFields(viewFieldsEntry, max = 8) {
  const rows = viewFieldsEntry?.f?.rows;
  if (!Array.isArray(rows) || rows.length === 0) return [];
  const keys = [];
  const rest = [];
  for (const row of rows) {
    const field = row?.[0];
    if (!field || typeof field !== 'string') continue;
    if (row[1]) keys.push(field);
    else rest.push(field);
  }
  return [...keys, ...rest].slice(0, max);
}

function suggestedViewName(cdsName) {
  const base = String(cdsName || 'View').replace(/^I_/, '').replace(/[^A-Za-z0-9]/g, '');
  return `Z_C_${base.slice(0, 28)}`;
}

async function loadViewFields() {
  const raw = await fs.readFile(path.join(DATA_DIR, 'index', 'view-fields.js'), 'utf8');
  const json = raw
    .replace(/^window\.__VIEW_FIELDS__\s*=\s*/, '')
    .replace(/;\s*$/, '');
  return JSON.parse(json);
}

async function main() {
  const usage = await readJson(path.join(DATA_DIR, 'index', 'usage-stats.json'), { counts: {} });
  const library = await readJson(path.join(DATA_DIR, 'index', 'query-library.json'), []);
  const shapes = await readJson(path.join(DATA_DIR, 'index', 'query-shape-stats.json'), { shapes: {} });
  const viewPaths = await readJson(path.join(DATA_DIR, 'index', 'view-paths.json'), {});
  const pathSet = new Set(Object.keys(viewPaths).map((k) => k.toUpperCase()));

  const already = new Set(library.map(viewNameOf).filter(Boolean));
  for (const q of library) {
    for (const v of q.views || []) {
      if (v?.name) already.add(String(v.name).toUpperCase());
    }
  }

  const scored = new Map(); // VIEW -> { score, title?, description? }
  for (const [view, count] of Object.entries(usage.counts || {})) {
    const name = String(view).toUpperCase();
    scored.set(name, { score: Number(count) || 0, title: null, description: null });
  }
  for (const s of STARTER_CATALOG) {
    const name = s.name.toUpperCase();
    const prev = scored.get(name) || { score: 0 };
    scored.set(name, {
      score: prev.score + 10, // catalog baseline so thin usage still seeds useful starters
      title: s.title,
      description: s.description,
    });
  }
  // Boost views that appear in anonymous shape aggregates (structure only).
  for (const meta of Object.values(shapes.shapes || {})) {
    for (const v of meta.views || []) {
      const name = String(v).toUpperCase();
      const prev = scored.get(name) || { score: 0 };
      scored.set(name, { ...prev, score: prev.score + (Number(meta.count) || 1) });
    }
  }

  console.log('📦 Loading view-fields.js for key/column picks (one-time)...');
  const fieldsIndex = await loadViewFields();

  const ranked = [...scored.entries()]
    .filter(([name]) => pathSet.has(name) || fieldsIndex[name])
    .filter(([name]) => !already.has(name))
    .sort((a, b) => b[1].score - a[1].score)
    .slice(0, LIMIT);

  const generatedAt = new Date().toISOString();
  const proposals = [];
  for (const [name, meta] of ranked) {
    const fieldEntry = fieldsIndex[name] || fieldsIndex[Object.keys(fieldsIndex).find((k) => k.toUpperCase() === name)];
    const selectFields = pickFields(fieldEntry);
    if (selectFields.length === 0) continue;
    const title = meta.title || `${name} starter query`;
    const description =
      meta.description ||
      `Starter SELECT against ${name} using key/primary columns from the field index. Review WHERE before sharing.`;
    proposals.push({
      status: 'pending',
      source: meta.score >= 10 ? 'usage+catalog' : 'usage-stats',
      score: meta.score,
      generatedAt,
      entry: {
        title,
        description,
        contributor: 'seed-query-proposals-from-usage',
        views: [{ alias: 't1', name }],
        select: selectFields.join(', '),
        viewName: suggestedViewName(name),
      },
    });
  }

  const outFile = path.join(DATA_DIR, 'index', 'query-proposals.json');
  const payload = {
    generatedAt,
    count: proposals.length,
    note: 'Reviewable proposals only. Promote into query-library.json via PR or --promote; never auto-merge.',
    proposals,
  };
  await fs.writeFile(outFile, JSON.stringify(payload, null, 2) + '\n', 'utf8');
  console.log(`✅ Wrote ${outFile} (${proposals.length} proposal(s))`);

  if (PROMOTE > 0) {
    const toAdd = proposals.slice(0, PROMOTE).map((p) => p.entry);
    const nextLib = [...library, ...toAdd];
    const libFile = path.join(DATA_DIR, 'index', 'query-library.json');
    await fs.writeFile(libFile, JSON.stringify(nextLib, null, 2) + '\n', 'utf8');
    console.log(`✅ Promoted ${toAdd.length} proposal(s) into ${libFile} (now ${nextLib.length} entries)`);
    console.log('➡️  Run: node scripts/sync-query-library-embed.mjs   to refresh DATA.L in query-builder.html');
  }
}

main().catch((err) => {
  console.error(`❌ ${err.message}`);
  process.exit(1);
});
