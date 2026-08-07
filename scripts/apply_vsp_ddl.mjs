#!/usr/bin/env node
// scripts/apply_vsp_ddl.mjs
// Takes real ABAP DDL already fetched via an SAP-connected MCP tool (vsp,
// see tools/vsp/) for views this KB only had Hub-catalog metadata for (or
// was missing entirely) and writes/upgrades their .md files to full DDL —
// same rendering pipeline as add_view.mjs/batch_add.mjs. This script has
// no SAP/GitHub network access of its own; it's fed DDL an agent already
// pulled via MCP tool calls (vsp's session is tied to a live browser-cookie
// login, so it can't run unattended the way the Hub-catalog scripts do).
//
// Input: either
//   - a JSON file: [{ "name": "C_FOO", "ddl": "...full DDL source..." }, ...]
//   - a directory of raw <NAME>.ddl files (--dir) — avoids hand-writing DDL
//     containing quotes/backslashes into JSON, which is easy to get wrong
//     for a large batch; the filename (minus extension) is the view name.
// Tracks progress in vsp-ddl-applied-manifest.json so re-running the same
// batch is a no-op for names already applied.
//
// Usage:
//   node scripts/apply_vsp_ddl.mjs <batch.json> [--dry-run] [--no-build]
//   node scripts/apply_vsp_ddl.mjs --dir <folder-of-NAME.ddl-files> [--dry-run] [--no-build]

import fs from 'node:fs/promises';
import path from 'node:path';
import { parseDDL } from '../src/parser.mjs';
import { autoTagWithMetadataFlag, loadTaxonomy } from '../src/auto-tagger.mjs';
import { renderViewMd } from '../src/template.mjs';
import { synthesizeView } from '../src/synthesizer.mjs';
import { addChangelogEntry } from '../src/changelog.mjs';
import { resolveViewFolder, findExistingView } from './lib/view-files.mjs';
import { readJson, writeJson } from './lib/json-file.mjs';
import { rebuildIndex } from './lib/rebuild-index.mjs';
import { extractFrontmatter, scalar, listBlock } from './lib/frontmatter.mjs';

const DATA_DIR = '.';
const VIEWS_DIR = path.join(DATA_DIR, 'views');
const MANIFEST_FILE = path.join(DATA_DIR, 'vsp-ddl-applied-manifest.json');

function parseArgs() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log('Usage: node scripts/apply_vsp_ddl.mjs <batch.json> [--dry-run] [--no-build]');
    console.log('       node scripts/apply_vsp_ddl.mjs --dir <folder-of-NAME.ddl-files> [--dry-run] [--no-build]');
    process.exit(args.length === 0 ? 1 : 0);
  }
  if (args[0] === '--dir') {
    return {
      dirPath: args[1],
      dryRun: args.includes('--dry-run'),
      noBuild: args.includes('--no-build'),
    };
  }
  return {
    batchFile: args[0],
    dryRun: args.includes('--dry-run'),
    noBuild: args.includes('--no-build'),
  };
}

async function loadBatch(opts) {
  if (opts.dirPath) {
    const files = (await fs.readdir(opts.dirPath)).filter(f => f.toLowerCase().endsWith('.ddl'));
    return Promise.all(files.map(async f => ({
      name: f.slice(0, -4),
      ddl: await fs.readFile(path.join(opts.dirPath, f), 'utf-8'),
    })));
  }
  return JSON.parse(await fs.readFile(opts.batchFile, 'utf-8'));
}

async function main() {
  const opts = parseArgs();
  const batch = await loadBatch(opts);
  const manifest = await readJson(MANIFEST_FILE, {});
  const taxonomy = await loadTaxonomy(DATA_DIR);

  console.log(`📋 Applying ${batch.length} view(s) from ${opts.dirPath || opts.batchFile}...`);
  const stats = { applied: 0, skipped: 0, errors: 0, previewed: 0 };

  for (const item of batch) {
    const name = (item.name || '').toUpperCase();
    if (!name) { stats.skipped++; continue; }

    if (!item.ddl || !item.ddl.trim()) {
      console.warn(`   ⚠️  ${name}: empty DDL in batch, skipping`);
      stats.skipped++;
      continue;
    }

    let parsed;
    try {
      parsed = parseDDL(item.ddl, { viewName: name });
    } catch (e) {
      console.error(`   ❌ ${name}: parse failed (${e.message})`);
      stats.errors++;
      continue;
    }

    if (parsed.fields.length === 0) {
      console.warn(`   ⚠️  ${name}: parsed 0 fields — DDL may be a parameter/abstract entity, not a real view; skipping`);
      stats.skipped++;
      continue;
    }

    // DDL parsing alone never yields app_component/software_component/
    // clean_core_level — those only ever came from the Hub catalog (or a
    // manual override) when this view was first written as metadata-only.
    // Re-deriving viewData from the DDL parse without carrying these
    // forward would silently drop them on every upgrade — including
    // app_component, which auto-tagging and folder placement both key off,
    // so losing it doesn't just blank a field, it re-files the view under
    // the wrong module entirely.
    // Same reasoning extends to the Hub-sourced description/semantic_en/
    // semantic_vi/keywords/source_url/tags: the Hub catalog's hand-written
    // business description and curated tags are consistently richer than
    // what synthesizeView() can infer from DDL alone (label + field names).
    // Blindly overwriting them on every upgrade — as an earlier version of
    // this script did — replaced good Hub prose with a generic one-liner and
    // silently dropped source_url entirely. So these are kept unless the
    // existing file genuinely never had them (a bare add, not an upgrade).
    const existingFile = await findExistingView(VIEWS_DIR, name);
    let existing = {
      appComponent: '', softwareComponent: '', cleanCoreLevel: '', systemType: '',
      description: '', semanticEn: '', semanticVi: '', sourceUrl: '', keywords: [], tags: [],
    };
    if (existingFile) {
      try {
        const fm = extractFrontmatter(await fs.readFile(existingFile, 'utf-8'));
        existing = {
          appComponent: scalar(fm, 'app_component'),
          softwareComponent: scalar(fm, 'software_component'),
          cleanCoreLevel: scalar(fm, 'clean_core_level'),
          systemType: scalar(fm, 'system_type'),
          description: scalar(fm, 'description'),
          semanticEn: scalar(fm, 'semantic_en'),
          semanticVi: scalar(fm, 'semantic_vi'),
          sourceUrl: scalar(fm, 'source_url'),
          keywords: listBlock(fm, 'keywords'),
          tags: listBlock(fm, 'tags'),
        };
      } catch { /* existingFile came from findExistingView, so this really shouldn't fail */ }
    }

    const appComponent = parsed.appComponent || existing.appComponent || '';

    const newTags = autoTagWithMetadataFlag({
      name: parsed.name,
      appComponent,
      description: parsed.description || parsed.label,
      label: parsed.label,
      sourceTable: parsed.sourceTable,
      fields: parsed.fields,
    }, taxonomy, true); // hasSource = true → never tagged metadata-only

    // Only DDL-blind (label/field-name only) synthesis, so it's a fallback
    // for genuinely new adds — an upgrade prefers the Hub's own prose below.
    const synthesis = await synthesizeView(item.ddl, {
      name: parsed.name,
      label: parsed.label,
      appComponent,
      fields: parsed.fields,
      sourceTable: parsed.sourceTable,
    });

    // Union existing Hub tags with newly-derived DDL tags rather than
    // replacing — the Hub taxonomy match (e.g. "customer", "bo:businesspartner")
    // and the DDL-derived one (e.g. component/lob tags keyed off real fields)
    // each catch things the other misses.
    const tags = [...new Set([...existing.tags, ...newTags])].filter(t => t !== 'metadata-only');
    const keywords = [...new Set([...existing.keywords, ...synthesis.keywords])];

    const viewData = {
      name: parsed.name,
      label: parsed.label,
      description: existing.description || parsed.description || parsed.label || name,
      appComponent,
      softwareComponent: existing.softwareComponent || 'SAPSCORE',
      releaseState: 'released', // this script is only ever fed Hub-confirmed RELEASED candidates
      cleanCoreLevel: existing.cleanCoreLevel || undefined,
      systemType: existing.systemType || 'S/4HANA Cloud Public Edition',
      semantic_en: existing.semanticEn || synthesis.semantic_en,
      semantic_vi: existing.semanticVi || synthesis.semantic_vi,
      keywords,
      tags,
      fields: parsed.fields,
      associations: parsed.associations,
      ddlSource: item.ddl.trimEnd(),
      sourceUrl: existing.sourceUrl || '',
    };

    const md = renderViewMd(viewData);
    const outputFile = existingFile || path.join(VIEWS_DIR, resolveViewFolder(viewData.appComponent, viewData.releaseState), `${name}.md`);

    if (opts.dryRun) {
      console.log(`   📄 ${name}: would ${existingFile ? 'upgrade' : 'add'} — ${parsed.fields.length} field(s), ${parsed.associations.length} assoc(s) [dry-run]`);
      stats.previewed++;
      continue;
    }

    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, md, 'utf-8');
    manifest[name] = { appliedAt: new Date().toISOString(), fields: parsed.fields.length, action: existingFile ? 'updated' : 'added' };
    await addChangelogEntry(DATA_DIR, {
      viewName: name,
      action: existingFile ? 'updated' : 'added',
      source: 'vsp',
      fields: parsed.fields.length,
      associations: parsed.associations.length,
      tags: tags.length,
    });
    console.log(`   ✅ ${name}: ${existingFile ? 'upgraded to full DDL' : 'added'} (${parsed.fields.length} fields, ${parsed.associations.length} assoc(s))`);
    stats.applied++;
  }

  if (!opts.dryRun) {
    await writeJson(MANIFEST_FILE, manifest);
    if (!opts.noBuild && stats.applied > 0) {
      console.log('\n🔨 Rebuilding search index...');
      await rebuildIndex(DATA_DIR);
    }
  }

  console.log('\n' + '═'.repeat(50));
  console.log('📊 Summary:');
  console.log(`   Applied:   ${stats.applied}`);
  if (stats.skipped) console.log(`   Skipped:   ${stats.skipped}`);
  if (stats.errors) console.log(`   Errors:    ${stats.errors}`);
  if (stats.previewed) console.log(`   Previewed: ${stats.previewed}`);
  console.log('✅ Done!\n');
}

main().catch(err => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
