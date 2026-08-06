#!/usr/bin/env node
// batch_add.mjs — Add multiple CDS views from a list or directory of DDL files.
//
// Usage:
//   node batch_add.mjs --list views.txt                          # List of view names with DDL file paths
//   node batch_add.mjs --dir ./samples/ddl/                      # Directory of .ddl / .abap files
//   node batch_add.mjs --list views.txt --app-component MM-PUR   # Shared app component for all
//   node batch_add.mjs --dir ./ddl/ --software-component SAPSCORE
//   node batch_add.mjs --dir ./ddl/ --dry-run                    # Preview all without writing
//   node batch_add.mjs --dir ./ddl/ --no-build                   # Skip index rebuild
//
// File format for --list (each line):
//   ViewName | path/to/view.ddl | app_component | description
//   (pipe-delimited, only first 2 columns required)

import fs from 'node:fs/promises';
import path from 'node:path';
import { parseDDL, readDDLContent } from './src/parser.mjs';
import { autoTagWithMetadataFlag, loadTaxonomy } from './src/auto-tagger.mjs';
import { renderViewMd } from './src/template.mjs';
import { synthesizeView } from './src/synthesizer.mjs';
import { fetchViewDDL, fetchViewList, fetchRawGitHubFile, describeFetchResult } from './src/fetcher.mjs';
import { addChangelogEntry } from './src/changelog.mjs';
import { resolveViewFolder, findExistingView } from './scripts/lib/view-files.mjs';
import { rebuildIndex } from './scripts/lib/rebuild-index.mjs';

// ── Config ──────────────────────────────────────────────────────────────────

const DATA_DIR = '.';
const VIEWS_DIR = path.join(DATA_DIR, 'views');

// ── Argument parsing ────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    printUsage();
    process.exit(0);
  }

  const opts = {
    listFile: '',
    ddlDir: '',
    source: '',
    sourceUrl: '',
    track: false,
    githubToken: '',
    sapUsername: '',
    sapPassword: '',
    sapApiKey: '',
    appComponent: '',
    description: '',
    softwareComponent: 'SAPSCORE',
    releaseState: '',
    systemType: 'S/4HANA Cloud Public Edition',
    cleanCoreLevel: 'A',
    dryRun: false,
    noBuild: false,
    verbose: false,
    mode: 'heuristic',
    force: false,
    concurrency: 3,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--list':
        opts.listFile = args[++i] || '';
        break;
      case '--dir':
        opts.ddlDir = args[++i] || '';
        break;
      case '--source':
        opts.source = args[++i] || '';
        break;
      case '--source-url':
        opts.sourceUrl = args[++i] || '';
        break;
      case '--track':
        opts.track = true;
        break;
      case '--github-token':
        opts.githubToken = args[++i] || '';
        break;
      case '--sap-username':
        opts.sapUsername = args[++i] || '';
        break;
      case '--sap-password':
        opts.sapPassword = args[++i] || '';
        break;
      case '--sap-api-key':
        opts.sapApiKey = args[++i] || '';
        break;
      case '--app-component':
        opts.appComponent = args[++i] || '';
        break;
      case '--description':
        opts.description = args[++i] || '';
        break;
      case '--software-component':
        opts.softwareComponent = args[++i] || '';
        break;
      case '--release-state':
        opts.releaseState = args[++i] || '';
        break;
      case '--system-type':
        opts.systemType = args[++i] || '';
        break;
      case '--clean-core-level':
        opts.cleanCoreLevel = args[++i] || 'A';
        break;
      case '--dry-run':
        opts.dryRun = true;
        break;
      case '--no-build':
        opts.noBuild = true;
        break;
      case '--mode':
        opts.mode = args[++i] || 'heuristic';
        break;
      case '--force':
      case '-f':
        opts.force = true;
        break;
      case '--verbose':
      case '-v':
        opts.verbose = true;
        break;
      default:
        console.error(`Unknown option: ${args[i]}`);
        process.exit(1);
    }
  }

  return opts;
}

function printUsage() {
  console.log(`
Usage: node batch_add.mjs --list <file> | --dir <directory> | --source <backend> [options]

Add multiple CDS views to the knowledge base at once.

Input options (one required):
  --list <file>            Text file with view names and DDL paths (pipe-delimited)
  --dir <directory>        Directory containing .ddl or .abap DDL source files
  --source <backend>       Auto-fetch views from external source:
                           github (default), odata, sap-api
  --source-url <url>       URL for odata or sap-api backends

File format for --list:
  ViewName|path/to/view.ddl|app_component|description
  I_PurchaseOrder|./ddl/purchase_order.ddl|MM-PUR-PO-2CL|Purchase Order

Common options:
  --app-component <code>   Default app component for all views
  --description <text>     Default description for all views
  --software-component <c> Default software component (default: SAPSCORE)
  --release-state <state>  Default release state (default: released; --source
                           github defaults to unverified instead, since a
                           filename match on GitHub isn't proof a view is a
                           genuine SAP-released one)
  --system-type <type>     Default system type (default: S/4HANA Cloud Public Edition)
  --clean-core-level <lvl> Default clean core level (default: A)
  --mode <mode>            Synthesis mode: heuristic (default)

Fetch options:
  --github-token <token>   GitHub token (or set GITHUB_TOKEN env var)
  --sap-username <user>    SAP OData username
  --sap-password <pass>    SAP OData password (or set SAP_PASSWORD env var)
  --sap-api-key <key>      SAP API Business Hub / Business Accelerator Hub API key
                           (or set SAP_API_KEY env var). With --source sap-api,
                           each view gets a GitHub DDL lookup first; if none is
                           found, a metadata-only stub is written (tagged
                           "metadata-only", field list from the Hub only).
  --track                  Write entries to changelog.json

Other:
  --dry-run                Preview only, don't write files
  --no-build               Skip index rebuild after adding
  --force / -f             Overwrite existing view files
  --verbose / -v           Verbose output
  --help / -h              Show this help
`);
}

// ── Load view entries (with fetch support) ─────────────────────────────────

async function loadViewEntries(opts) {
  // If --source is provided, fetch list from external source
  if (opts.source) {
    console.log(`   📡 Fetching view list from ${opts.source}...`);
    const result = await fetchViewList({
      source: opts.source,
      sourceUrl: opts.sourceUrl,
      githubToken: opts.githubToken,
      username: opts.sapUsername,
      password: opts.sapPassword,
      apiKey: opts.sapApiKey,
      limit: 30,
    });

    if (!result.views || result.views.length === 0) {
      console.log('   No views found from this source.');
      return [];
    }

    console.log(`   Found ${result.views.length} view(s)`);

    // A filename match on GitHub isn't proof a view is a genuine SAP-released
    // one — default to 'unverified' unless the caller explicitly overrides it.
    const defaultReleaseState = opts.releaseState || (opts.source === 'github' ? 'unverified' : 'released');

    return result.views.map(v => ({
      name: v.name,
      ddlPath: v.filePath || '', // For github source, this is the file path in repo
      appComponent: opts.appComponent || v.appComponent || '',
      description: opts.description || '',
      softwareComponent: opts.softwareComponent,
      releaseState: defaultReleaseState,
      systemType: opts.systemType,
      cleanCoreLevel: opts.cleanCoreLevel,
      // Store GitHub-specific info for fetching
      repository: v.repository,
      filePath: v.filePath,
      fileUrl: v.fileUrl,
      defaultBranch: v.defaultBranch,
      // sap-api source: field metadata from the Hub (no DDL) — used as a
      // fallback in processView() when GitHub doesn't have the DDL either
      sapApiFields: v.fields && v.fields.length > 0 ? v.fields : undefined,
    }));
  }

  // Original local file sources
  const entries = [];

  if (opts.listFile) {
    const content = await fs.readFile(opts.listFile, 'utf-8');
    for (const line of content.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const parts = trimmed.split('|').map(p => p.trim());
      entries.push({
        name: parts[0],
        ddlPath: parts[1] || '',
        appComponent: parts[2] || opts.appComponent,
        description: parts[3] || opts.description,
        softwareComponent: opts.softwareComponent,
        releaseState: opts.releaseState || 'released',
        systemType: opts.systemType,
        cleanCoreLevel: opts.cleanCoreLevel,
      });
    }
  }

  if (opts.ddlDir) {
    const files = await fs.readdir(opts.ddlDir);
    const ddlFiles = files.filter(f => /\.(ddl|abap|ddls|txt)$/i.test(f));
    for (const file of ddlFiles.sort()) {
      const name = path.basename(file).replace(/\.[^.]+$/, '').toUpperCase();
      entries.push({
        name,
        ddlPath: path.join(opts.ddlDir, file),
        appComponent: opts.appComponent,
        description: opts.description,
        softwareComponent: opts.softwareComponent,
        releaseState: opts.releaseState || 'released',
        systemType: opts.systemType,
        cleanCoreLevel: opts.cleanCoreLevel,
      });
    }
  }

  return entries;
}

// ── Process a single view ───────────────────────────────────────────────────

async function processView(entry, opts, stats, taxonomy) {
  const { name, ddlPath, appComponent, description,
          softwareComponent, releaseState, systemType, cleanCoreLevel } = entry;

  // Look for the view anywhere in the tree (not just the flat guess) so a
  // view already migrated into a module folder is correctly recognized as
  // existing, instead of --force-less runs silently trying to re-add it.
  const existingFile = await findExistingView(VIEWS_DIR, name);

  if (existingFile && !opts.force) {
    console.log(`   ⏭️  ${name}: already exists, skipping (use --force to overwrite)`);
    stats.skipped++;
    return;
  }

  // Read DDL (from file, direct fetch source, or sap-api metadata fallback)
  let ddlSource = '';
  let metadataFields = null;
  let sourceUrl = '';
  try {
    if (entry.repository) {
      // Download directly from the path the listing step already found —
      // re-searching per view here would hit the Search API's much stricter
      // rate limit for no reason, since we already know exactly where the
      // file lives.
      const fetchResult = await fetchRawGitHubFile(entry.repository, entry.filePath, {
        githubToken: opts.githubToken,
        defaultBranch: entry.defaultBranch,
        fileUrl: entry.fileUrl,
      });
      ddlSource = fetchResult.ddl;
      sourceUrl = fetchResult.metadata.fileUrl || entry.fileUrl || '';
      if (opts.verbose) {
        console.log(`   ${describeFetchResult(fetchResult)}`);
      }
    } else if (ddlPath) {
      ddlSource = await readDDLContent(ddlPath);
    } else if (entry.sapApiFields) {
      // sap-api gives metadata only (no DDL). Try a best-effort GitHub lookup
      // first; fall back to a metadata-only stub if GitHub doesn't have it.
      try {
        const ghResult = await fetchViewDDL(name, { source: 'github', githubToken: opts.githubToken });
        ddlSource = ghResult.ddl;
        sourceUrl = ghResult.metadata.fileUrl || '';
        if (opts.verbose) console.log(`   ${describeFetchResult(ghResult)}`);
      } catch {
        console.log(`   ℹ️  ${name}: no public DDL found on GitHub, writing metadata-only stub`);
        metadataFields = entry.sapApiFields;
      }
    } else {
      throw new Error('No DDL path or fetch source available for this view');
    }
  } catch (err) {
    console.error(`   ❌ ${name}: cannot get DDL: ${err.message}`);
    stats.errors++;
    return;
  }

  // Parse (or build a minimal object when only sap-api metadata is available)
  const parsed = ddlSource
    ? parseDDL(ddlSource, { viewName: name })
    : { name, label: description || name, sourceTable: '', annotations: {}, fields: metadataFields || [], associations: [] };
  if (appComponent) parsed.appComponent = appComponent;
  if (description) parsed.description = description;
  parsed.softwareComponent = softwareComponent;
  parsed.releaseState = releaseState;
  parsed.systemType = systemType;
  parsed.cleanCoreLevel = cleanCoreLevel;

  if (parsed.fields.length === 0) {
    console.warn(`   ⚠️  ${name}: no fields found`);
  }

  // Auto-tag (pass loaded taxonomy for enriched LOB/BO matching)
  const tags = autoTagWithMetadataFlag({
    name: parsed.name,
    appComponent: parsed.appComponent,
    description: parsed.description || parsed.label,
    label: parsed.label,
    sourceTable: parsed.sourceTable,
    fields: parsed.fields,
  }, taxonomy, !!ddlSource);

  // Synthesize
  const synthesis = await synthesizeView(ddlSource, {
    name: parsed.name,
    label: parsed.label,
    description: parsed.description,
    appComponent: parsed.appComponent,
    fields: parsed.fields,
    sourceTable: parsed.sourceTable,
  }, { mode: opts.mode });

  // Build view data
  const viewData = {
    name: parsed.name,
    label: parsed.label,
    description: parsed.description || parsed.label || name,
    appComponent: parsed.appComponent || '',
    softwareComponent: parsed.softwareComponent || 'SAPSCORE',
    releaseState: parsed.releaseState || 'released',
    cleanCoreLevel: parsed.cleanCoreLevel || 'A',
    systemType: parsed.systemType || 'S/4HANA Cloud Public Edition',
    semantic_en: synthesis.semantic_en,
    semantic_vi: synthesis.semantic_vi,
    keywords: synthesis.keywords,
    tags,
    fields: parsed.fields,
    associations: parsed.associations,
    ddlSource: ddlSource ? ddlSource.trimEnd() : '',
    sourceUrl: sourceUrl || opts.sourceUrl || '',
  };

  // Render
  const md = renderViewMd(viewData);

  // Write — reuse the existing location on an overwrite (--force), otherwise
  // place a new view under its module folder.
  const outputFile = existingFile || path.join(VIEWS_DIR, resolveViewFolder(viewData.appComponent, viewData.releaseState), `${name}.md`);
  const metaSuffix = ddlSource ? '' : ', metadata-only';
  if (opts.dryRun) {
    console.log(`   📄 ${name}: ${parsed.fields.length} fields, ${parsed.associations.length} assocs${metaSuffix} (dry-run)`);
    stats.previewed++;
  } else {
    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, md, 'utf-8');
    console.log(`   ✅ ${name}: written (${parsed.fields.length} fields, ${parsed.associations.length} assocs, ${tags.length} tags${metaSuffix})`);
    stats.added++;

    // Track in changelog
    if (opts.track) {
      await addChangelogEntry(DATA_DIR, {
        viewName: parsed.name,
        action: 'added',
        source: opts.source || 'manual',
        fields: parsed.fields.length,
        associations: parsed.associations.length,
        tags: tags.length,
        sourceUrl: viewData.sourceUrl || null,
      });
    }
  }
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const opts = parseArgs();

  if (!opts.listFile && !opts.ddlDir && !opts.source) {
    console.error('❌ Either --list, --dir, or --source must be provided.');
    process.exit(1);
  }

  // Load taxonomy for enriched tagging
  const taxonomy = await loadTaxonomy(DATA_DIR);
  if (taxonomy) {
    console.log('📂 Loaded taxonomy for tagging');
  } else {
    console.log('   ℹ️  No taxonomy file found, using fallback mappings');
  }

  // Load entries (local files or fetch from source)
  console.log('📋 Loading view entries...');
  const entries = await loadViewEntries(opts);
  console.log(`   Found ${entries.length} view(s) to process.\n`);

  if (entries.length === 0) {
    console.log('No views to process.');
    return;
  }

  // Ensure views directory exists
  if (!opts.dryRun) {
    await fs.mkdir(VIEWS_DIR, { recursive: true });
  }

  // Process entries sequentially (DDL parsing can be resource-intensive)
  const stats = { added: 0, skipped: 0, errors: 0, previewed: 0, total: entries.length };

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    console.log(`[${i + 1}/${entries.length}] Processing ${entry.name}...`);
    await processView(entry, opts, stats, taxonomy);
  }

  // Rebuild index
  if (!opts.noBuild && stats.added > 0) {
    console.log('\n🔨 Rebuilding search index...');
    await rebuildIndex(DATA_DIR);
  }

  // Summary
  console.log('\n' + '═'.repeat(50));
  console.log('📊 Batch Summary:');
  console.log(`   Total:     ${stats.total}`);
  console.log(`   Added:     ${stats.added}`);
  if (stats.skipped) console.log(`   Skipped:   ${stats.skipped}`);
  if (stats.errors) console.log(`   Errors:    ${stats.errors}`);
  if (stats.previewed) console.log(`   Previewed: ${stats.previewed}`);
  console.log('✅ Batch complete!\n');
}

// ── Run ─────────────────────────────────────────────────────────────────────

main().catch((err) => {
  console.error(`\n❌ Batch error: ${err.message}`);
  process.exit(1);
});
