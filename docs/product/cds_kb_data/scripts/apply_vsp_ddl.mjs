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
// batch is a no-op for names already applied. Also removes any upgraded
// view from hub-metadata-manifest.json, so scripts/add_hub_metadata.mjs's
// ownership check stops treating it as "mine to refresh from the Hub" and
// permanently leaves the real DDL alone (see HUB_MANIFEST_FILE below).
//
// Usage:
//   node scripts/apply_vsp_ddl.mjs <batch.json> [--dry-run] [--no-build] [--overlay]
//   node scripts/apply_vsp_ddl.mjs --dir <folder-of-NAME.ddl-files> [--dry-run] [--no-build] [--overlay]

import fs from 'node:fs/promises';
import path from 'node:path';
import { parseDDL } from '../src/parser.mjs';
import { autoTagWithMetadataFlag, loadTaxonomy } from '../src/auto-tagger.mjs';
import { renderViewMd } from '../src/template.mjs';
import { looksLikeAbapDdl, isValidAbapIdentifier } from './lib/ddl-sanity.mjs';
import { synthesizeView } from '../src/synthesizer.mjs';
import { addChangelogEntry } from '../src/changelog.mjs';
import { resolveViewFolder, findExistingView } from './lib/view-files.mjs';
import { readJson, writeJson } from './lib/json-file.mjs';
import { rebuildIndex } from './lib/rebuild-index.mjs';
import { extractFrontmatter, scalar, listBlock } from './lib/frontmatter.mjs';

const DATA_DIR = '.';
let VIEWS_DIR = path.join(DATA_DIR, 'views');
const MANIFEST_FILE = path.join(DATA_DIR, 'vsp-ddl-applied-manifest.json');
// scripts/add_hub_metadata.mjs treats presence in this manifest as "I
// created/own this file, safe to refresh from the Hub" — its guard is
// `existedBefore && !manifest[name]` → skip. A view we just upgraded to
// real DDL is still listed here from when it was first written as
// metadata-only, so without removing it, the next scheduled Hub-metadata
// run (hub-metadata-fetch.yml) sees its own manifest entry, assumes
// ownership, and silently regenerates the metadata-only version right back
// over this upgrade the next time the Hub's ModifiedAt ticks forward —
// which is exactly the merge conflict this repo kept hitting between the
// vsp-upgrade pipeline and the Hub-metadata bot. Deleting the entry here
// makes the ownership guard correctly treat this file as "not mine" from
// now on, the same protection already-external files (GitHub-sourced,
// manually added) get.
const HUB_MANIFEST_FILE = path.join(DATA_DIR, 'hub-metadata-manifest.json');

function parseArgs() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log('Usage: node scripts/apply_vsp_ddl.mjs <batch.json> [--dry-run] [--no-build] [--overlay]');
    console.log('       node scripts/apply_vsp_ddl.mjs --dir <folder-of-NAME.ddl-files> [--dry-run] [--no-build] [--overlay]');
    console.log('');
    console.log('  --overlay   Write under overlays/private (or CDS_KB_OVERLAY) instead of views/.');
    console.log('              Use for customer Z*/Y* DDL that must not land in the public tree.');
    process.exit(args.length === 0 ? 1 : 0);
  }
  const overlay = args.includes('--overlay');
  if (args[0] === '--dir') {
    return {
      dirPath: args[1],
      dryRun: args.includes('--dry-run'),
      noBuild: args.includes('--no-build'),
      overlay,
    };
  }
  return {
    batchFile: args[0],
    dryRun: args.includes('--dry-run'),
    noBuild: args.includes('--no-build'),
    overlay,
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
  if (opts.overlay) {
    VIEWS_DIR = process.env.CDS_KB_OVERLAY
      ? path.resolve(process.env.CDS_KB_OVERLAY)
      : path.join(DATA_DIR, 'overlays', 'private');
    console.log(`🔐 Overlay mode — writing under ${VIEWS_DIR}`);
  }
  const batch = await loadBatch(opts);
  const manifest = await readJson(MANIFEST_FILE, {});
  const hubManifest = await readJson(HUB_MANIFEST_FILE, {});
  let hubManifestChanged = false;
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

    // Defense in depth against the 2026-08-10 incident (see
    // scripts/lib/ddl-sanity.mjs): run-vsp-batch.mjs's fetchBatch already
    // rejects a non-DDL response before it's even written to disk, but this
    // script can also be invoked directly against a folder of pre-fetched
    // .ddl files that bypassed that check.
    if (!looksLikeAbapDdl(item.ddl)) {
      console.warn(`   ⚠️  ${name}: doesn't look like ABAP DDL (starts with '<' or has no "define" keyword) — likely an HTML error/login page from an expired session, skipping`);
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

    const badField = parsed.fields.find((f) => !isValidAbapIdentifier(f.name));
    if (badField) {
      console.warn(`   ⚠️  ${name}: parsed field name "${badField.name}" isn't a valid ABAP identifier — DDL content looks corrupted, skipping`);
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
      releaseState: '', devExtStatus: '', keyUserExtStatus: '', extensibleKeyUser: '', extensibleDevExt: '',
      atcState: '', atcSuccessor: '',
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
          releaseState: scalar(fm, 'release_state'),
          // Fetched separately (scripts/backfill-dev-ext-status.mjs /
          // scripts/backfill-atc-state.mjs / Hub catalogs), never derived
          // from DDL — always carry a pre-existing value through an
          // upgrade rather than dropping it.
          devExtStatus: scalar(fm, 'dev_ext_status'),
          keyUserExtStatus: scalar(fm, 'key_user_ext_status'),
          extensibleKeyUser: scalar(fm, 'extensible_key_user'),
          extensibleDevExt: scalar(fm, 'extensible_dev_ext'),
          atcState: scalar(fm, 'atc_state'),
          atcSuccessor: scalar(fm, 'atc_successor'),
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

    // Hub-confirmed public upgrades stay "released". Overlay Z*/Y* may keep
    // an existing release_state or default to unverified.
    let releaseState = 'released';
    if (opts.overlay) {
      if (existing.releaseState) releaseState = existing.releaseState;
      else if (/^[ZY]/i.test(name)) releaseState = 'unverified';
      else releaseState = 'released';
    }

    const viewData = {
      name: parsed.name,
      label: parsed.label,
      description: existing.description || parsed.description || parsed.label || name,
      appComponent,
      softwareComponent: existing.softwareComponent || 'SAPSCORE',
      releaseState,
      devExtStatus: existing.devExtStatus || undefined,
      keyUserExtStatus: existing.keyUserExtStatus || undefined,
      extensibleKeyUser: existing.extensibleKeyUser || undefined,
      extensibleDevExt: existing.extensibleDevExt || undefined,
      atcState: existing.atcState || undefined,
      atcSuccessor: existing.atcSuccessor || undefined,
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
    if (hubManifest[name]) {
      delete hubManifest[name];
      hubManifestChanged = true;
    }
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
    if (hubManifestChanged) {
      await writeJson(HUB_MANIFEST_FILE, hubManifest);
      console.log('\n🔓 Đã bỏ quyền sở hữu của hub-metadata-fetch trên các view vừa upgrade (xoá khỏi hub-metadata-manifest.json) — bot Hub sẽ không đè lại nữa.');
    }
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
