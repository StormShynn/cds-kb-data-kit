#!/usr/bin/env node
// add_view.mjs — CLI to add a single CDS view from DDL source.
//
// Usage:
//   node add_view.mjs VIEW_NAME --ddl <file|text>                    # From DDL file or inline text
//   node add_view.mjs VIEW_NAME --ddl-file path/to/view.ddl          # From DDL file
//   node add_view.mjs VIEW_NAME --app-component MM-PUR-PO-2CL        # With app component override
//   node add_view.mjs VIEW_NAME --description "Purchase Order"       # With description override
//   node add_view.mjs VIEW_NAME --software-component SAPSCORE        # With software component
//   node add_view.mjs VIEW_NAME --dry-run                            # Preview only, don't write
//   node add_view.mjs VIEW_NAME --no-build                           # Don't rebuild index
//
// Examples:
//   # Read DDL from file
//   node add_view.mjs I_PurchaseOrderAPI01 --ddl-file ./samples/purchase_order.ddl
//
//   # Read DDL from stdin (paste DDL then Ctrl+D)
//   cat view.ddl | node add_view.mjs I_MyView --stdin
//
//   # Paste DDL inline (for quick tests)
//   node add_view.mjs I_TestView --ddl "@EndUserText.label:'Test View' define view I_TestView as select from ..."

import fs from 'node:fs/promises';
import path from 'node:path';
import { parseDDL, describeParsedView, readDDLContent } from './src/parser.mjs';
import { autoTagWithMetadataFlag, loadTaxonomy } from './src/auto-tagger.mjs';
import { renderViewMd } from './src/template.mjs';
import { synthesizeView, describeSynthesis } from './src/synthesizer.mjs';
import { fetchViewDDL, describeFetchResult } from './src/fetcher.mjs';
import { addChangelogEntry, getDailySummary, getChangelogStats, describeDailySummary } from './src/changelog.mjs';
import { resolveViewFolder, findExistingView } from './scripts/lib/view-files.mjs';
import { rebuildIndex } from './scripts/lib/rebuild-index.mjs';
import { spawn } from 'node:child_process';

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

  // If first arg starts with '--', it's a standalone flag, not a view name
  const isStandalone = args.length > 0 && args[0].startsWith('--');
  const viewName = isStandalone ? '' : args[0];
  const opts = {
    viewName,
    ddlText: '',
    ddlFile: '',
    appComponent: '',
    description: '',
    softwareComponent: '',
    releaseState: '',
    cleanCoreLevel: 'A',
    systemType: 'S/4HANA Cloud Public Edition',
    source: '',
    sourceUrl: '',
    track: false,
    changelogSummary: false,
    changelogStats: false,
    changelogDays: 7,
    changelogSource: '',
    changelogSince: '',
    changelogUntil: '',
    dashboard: false,
    githubToken: '',
    sapUsername: '',
    sapPassword: '',
    sapApiKey: '',
    semantic_en: '',
    semantic_vi: '',
    keywords: [],
    dryRun: false,
    noBuild: false,
    stdin: false,
    verbose: false,
    mode: 'heuristic',
  };

  for (let i = isStandalone ? 0 : 1; i < args.length; i++) {
    switch (args[i]) {
      case '--source':
        opts.source = args[++i] || '';
        break;
      case '--source-url':
        opts.sourceUrl = args[++i] || '';
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
      case '--track':
        opts.track = true;
        break;
      case '--changelog-summary':
        opts.changelogSummary = true;
        break;
      case '--changelog-stats':
        opts.changelogStats = true;
        break;
      case '--changelog-days':
        opts.changelogDays = parseInt(args[++i], 10) || 7;
        break;
      case '--changelog-source':
        opts.changelogSource = args[++i] || '';
        break;
      case '--since':
        opts.changelogSince = args[++i] || '';
        break;
      case '--until':
        opts.changelogUntil = args[++i] || '';
        break;
      case '--dashboard':
        opts.dashboard = true;
        break;
      case '--ddl':
        opts.ddlText = args[++i] || '';
        break;
      case '--ddl-file':
        opts.ddlFile = args[++i] || '';
        break;
      case '--stdin':
        opts.stdin = true;
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
        opts.systemType = args[++i] || 'S/4HANA Cloud Public Edition';
        break;
      case '--clean-core-level':
        opts.cleanCoreLevel = args[++i] || 'A';
        break;
      case '--semantic-en':
        opts.semantic_en = args[++i] || '';
        break;
      case '--semantic-vi':
        opts.semantic_vi = args[++i] || '';
        break;
      case '--keyword':
        opts.keywords.push(args[++i] || '');
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
Usage: node add_view.mjs VIEW_NAME [options]

Add a CDS view to the knowledge base.

Source options (choose one):
  --ddl <text>             DDL source code as inline text
  --ddl-file <path>        Path to DDL source file
  --stdin                  Read DDL from stdin (pipe)
  --source <backend>       Auto-fetch DDL from external source:
                           github (default), odata, sap-api
  --source-url <url>       URL for odata or sap-api backends

Auto-fetch options:
  --github-token <token>   GitHub token (or set GITHUB_TOKEN env var)
  --sap-username <user>    SAP OData username
  --sap-password <pass>    SAP OData password (or set SAP_PASSWORD env var)
  --sap-api-key <key>      SAP API Business Hub / Business Accelerator Hub API key
                           (or set SAP_API_KEY env var). Used with --source sap-api.
                           Note: this source returns field metadata only, never DDL
                           source — combine with --source github for real DDL.

View metadata:
  --app-component <code>   App component (e.g. MM-PUR-PO-2CL)
  --description <text>     Business description
  --software-component <c> Software component (default: SAPSCORE)
  --release-state <state>  Release state (default: released; auto-fetched
                           --source views default to unverified instead)
  --system-type <type>     System type (default: S/4HANA Cloud Public Edition)
  --clean-core-level <lvl> Clean core level (default: A)

Semantic options:
  --semantic-en <text>     English semantic description (override)
  --semantic-vi <text>     Vietnamese semantic description (override)
  --keyword <text>         Additional keyword (can be repeated)

Changelog options:
  --track                  Write entry to changelog.json
  --changelog-summary      Show recent activity summary and exit
  --changelog-stats        Show changelog statistics and exit
  --changelog-days <n>     Days to look back for summary and dashboard (default: 7)
  --changelog-source <s>   Filter changelog by source (github, manual, odata, sap-api)
  --since <date>           Include entries after this date (ISO: 2026-07-01 or 2026-07-01T00:00:00Z)
  --until <date>           Include entries before this date (ISO format)
  --dashboard              Generate HTML dashboard from changelog data (respects --changelog-days, --since, --until)

Other:
  --dry-run                Preview only, don't write files
  --no-build               Skip index rebuild after adding
  --mode <mode>            Synthesis mode: heuristic (default)
  --verbose / -v           Verbose output
  --help / -h              Show this help
`);
}

// ── Read DDL source (with fetch support) ────────────────────────────────────

async function readDDLSource(opts) {
  // Auto-fetch from external source
  if (opts.source) {
    const source = opts.source.toLowerCase();
    console.log(`   📡 Fetching from ${source}...`);
    const result = await fetchViewDDL(opts.viewName, {
      source,
      sourceUrl: opts.sourceUrl,
      githubToken: opts.githubToken,
      username: opts.sapUsername,
      password: opts.sapPassword,
      apiKey: opts.sapApiKey,
    });

    if (opts.verbose) {
      console.log(`   ${describeFetchResult(result)}`);
    }

    // Merge metadata returned from fetcher
    if (result.metadata) {
      if (result.metadata.appComponent && !opts.appComponent) {
        opts.fetchedAppComponent = result.metadata.appComponent;
      }
      if (result.metadata.label && !opts.description) {
        opts.fetchedDescription = result.metadata.label;
      }
      if (result.metadata.softwareComponent) {
        opts.fetchedSoftwareComponent = result.metadata.softwareComponent;
      }
      // fileUrl (GitHub blob link) takes priority over sourceUrl (the
      // odata/sap-api/hub-catalog service endpoint) when both are absent —
      // either way, this is the link back to where the content came from,
      // which previously wasn't captured at all for GitHub-fetched views.
      if (result.metadata.fileUrl || result.metadata.sourceUrl) {
        opts.fetchedSourceUrl = result.metadata.fileUrl || result.metadata.sourceUrl;
      }
    }

    if (result.ddl) {
      return result.ddl;
    }

    // sap-api backend may not have DDL source, only metadata
    // In that case, generate synthetic DDL-like data from the metadata
    if (result.syntheticFields && result.syntheticFields.length > 0) {
      console.log('   ℹ️  SAP API Hub returned field metadata (no raw DDL source)');
      opts.fetchedFields = result.syntheticFields;
      return null; // Caller will handle this case
    }

    throw new Error(`No DDL source or field metadata returned from ${source}`);
  }

  // Local sources
  if (opts.ddlFile) {
    return await readDDLContent(opts.ddlFile);
  }
  if (opts.ddlText) {
    return opts.ddlText;
  }
  if (opts.stdin) {
    const chunks = [];
    for await (const chunk of process.stdin) {
      chunks.push(chunk);
    }
    return Buffer.concat(chunks).toString('utf-8');
  }
  throw new Error('No DDL source provided. Use --ddl, --ddl-file, --stdin, or --source.');
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const opts = parseArgs();
  const viewName = opts.viewName.toUpperCase();

  // Handle changelog commands
  if (opts.changelogSummary) {
    const parts = [];
    if (opts.changelogSince) parts.push(`since ${opts.changelogSince}`);
    if (opts.changelogUntil) parts.push(`until ${opts.changelogUntil}`);
    if (!opts.changelogSince && !opts.changelogUntil) parts.push(`last ${opts.changelogDays} days`);
    const filterInfo = parts.join(', ');
    const sourceInfo = opts.changelogSource ? ` (source: ${opts.changelogSource})` : '';
    console.log(`\n📋 Changelog Summary (${filterInfo})${sourceInfo}:\n`);
    const summary = await getDailySummary(DATA_DIR, {
      days: opts.changelogDays,
      source: opts.changelogSource || undefined,
      since: opts.changelogSince || undefined,
      until: opts.changelogUntil || undefined,
    });
    console.log(describeDailySummary(summary));
    const totalDays = summary.daily ? summary.daily.length : 0;
    const totalEntries = summary.daily ? summary.daily.reduce((sum, d) => sum + d.added + d.updated + d.skipped + d.errors, 0) : 0;
    console.log(`   ${totalDays} days · ${totalEntries} entries`);
    return;
  }

  if (opts.changelogStats) {
    const sourceInfo = opts.changelogSource ? ` (source: ${opts.changelogSource})` : '';
    console.log(`\n📊 Changelog Statistics${sourceInfo}:\n`);
    const stats = await getChangelogStats(DATA_DIR, {
      source: opts.changelogSource || undefined,
      since: opts.changelogSince || undefined,
      until: opts.changelogUntil || undefined,
    });
    console.log(`   Total entries: ${stats.totalEntries}`);
    console.log(`   Total added:   ${stats.totalAdded}`);
    console.log(`   Total errors:  ${stats.totalErrors}`);
    console.log(`   Top sources:   ${stats.topSources.map(s => `${s.source} (${s.count})`).join(', ')}`);
    console.log('');
    return;
  }

  if (opts.dashboard) {
    // Detect which filters were explicitly provided
    const hasDaysFlag = process.argv.includes('--changelog-days');
    const hasSinceFlag = process.argv.includes('--since');
    const hasUntilFlag = process.argv.includes('--until');
    const parts = [];
    if (hasDaysFlag) parts.push(`${opts.changelogDays} days`);
    if (hasSinceFlag) parts.push(`since ${opts.changelogSince}`);
    if (hasUntilFlag) parts.push(`until ${opts.changelogUntil}`);
    const filterStr = parts.length > 0 ? ` (${parts.join(', ')})` : '';
    const outputFile = path.join(DATA_DIR, 'dashboard.html');
    console.log(`📊 Generating HTML dashboard${filterStr}...`);
    return new Promise((resolve, reject) => {
      const args = ['scripts/generate-dashboard.mjs', DATA_DIR, outputFile];
      if (hasDaysFlag) args.push('--days', String(opts.changelogDays));
      if (hasSinceFlag) args.push('--since', opts.changelogSince);
      if (hasUntilFlag) args.push('--until', opts.changelogUntil);
      const proc = spawn('node', args, {
        stdio: 'inherit',
        shell: true,
      });
      proc.on('close', (code) => {
        if (code === 0) resolve();
        else reject(new Error(`Dashboard generation failed with code ${code}`));
      });
      proc.on('error', reject);
    });
  }

  console.log(`\n📋 Adding CDS view: ${viewName}\n`);

  // Step 1: Read DDL source
  console.log('📖 Reading DDL source...');
  const ddlSource = await readDDLSource(opts);
  if (opts.verbose && ddlSource) {
    console.log(`   DDL length: ${ddlSource.length} chars`);
  }

  // Step 2: Parse DDL (or handle sap-api metadata-only case)
  let parsed;
  if (ddlSource) {
    console.log('🔍 Parsing DDL...');
    parsed = parseDDL(ddlSource, { viewName });
  } else {
    // sap-api mode: create a minimal view object from metadata
    console.log('🔍 Building view from API metadata...');
    parsed = {
      name: viewName,
      label: opts.fetchedDescription || viewName,
      sourceTable: '',
      annotations: {},
      fields: opts.fetchedFields || [],
      associations: [],
    };
  }

  // Merge CLI overrides and fetched metadata
  if (opts.appComponent) parsed.appComponent = opts.appComponent;
  else if (opts.fetchedAppComponent) parsed.appComponent = opts.fetchedAppComponent;
  if (opts.description) parsed.description = opts.description;
  else if (opts.fetchedDescription) parsed.description = opts.fetchedDescription;
  if (opts.softwareComponent) parsed.softwareComponent = opts.softwareComponent;
  else if (opts.fetchedSoftwareComponent) parsed.softwareComponent = opts.fetchedSoftwareComponent;
  if (opts.releaseState) parsed.releaseState = opts.releaseState;
  if (opts.systemType) parsed.systemType = opts.systemType;
  if (opts.cleanCoreLevel) parsed.cleanCoreLevel = opts.cleanCoreLevel;

  if (opts.verbose) {
    console.log(`\n   ${describeParsedView(parsed)}`);
  }

  if (parsed.fields.length === 0) {
    const isSAPApi = opts.source === 'sap-api';
    if (isSAPApi) {
      console.warn('   ℹ️  SAP API Hub mode: no raw DDL source available. The generated file will contain metadata only.');
      console.warn('      To add DDL source, use --ddl-file or --ddl with the actual DDL source code.');
    } else {
      console.warn('   ⚠️  No fields found in DDL. The DDL may be incomplete or in an unexpected format.');
    }
  }

  // Load taxonomy for enriched tagging
  const taxonomy = await loadTaxonomy(DATA_DIR);
  if (taxonomy) {
    console.log('📂 Loaded taxonomy for tagging');
  }

  // Step 3: Auto-tag
  console.log('🏷️  Auto-tagging...');
  const tags = autoTagWithMetadataFlag({
    name: parsed.name,
    appComponent: parsed.appComponent,
    description: parsed.description || parsed.label,
    label: parsed.label,
    sourceTable: parsed.sourceTable,
    fields: parsed.fields,
  }, taxonomy, !!ddlSource);
  if (opts.verbose) {
    console.log(`   Tags: ${tags.join(', ')}`);
  }

  // Step 4: Synthesize descriptions
  if (ddlSource) {
    console.log('🧠 Synthesizing descriptions...');
  }
  const synthesis = await synthesizeView(ddlSource || '', {
    name: parsed.name,
    label: parsed.label,
    description: parsed.description,
    appComponent: parsed.appComponent,
    fields: parsed.fields,
    sourceTable: parsed.sourceTable,
  }, { mode: opts.mode });

  if (opts.semantic_en) synthesis.semantic_en = opts.semantic_en;
  if (opts.semantic_vi) synthesis.semantic_vi = opts.semantic_vi;
  if (opts.keywords.length > 0) {
    synthesis.keywords = [...new Set([...synthesis.keywords, ...opts.keywords])];
  }

  if (opts.verbose && ddlSource) {
    console.log(`\n   ${describeSynthesis(synthesis)}`);
  }

  // Step 5: Build view data object
  const viewData = {
    name: parsed.name,
    label: parsed.label,
    description: parsed.description || parsed.label || viewName,
    appComponent: parsed.appComponent || '',
    softwareComponent: parsed.softwareComponent || 'SAPSCORE',
    releaseState: parsed.releaseState || (opts.source === 'github' ? 'unverified' : 'released'),
    cleanCoreLevel: parsed.cleanCoreLevel || 'A',
    systemType: parsed.systemType || 'S/4HANA Cloud Public Edition',
    semantic_en: synthesis.semantic_en,
    semantic_vi: synthesis.semantic_vi,
    keywords: synthesis.keywords,
    tags,
    fields: parsed.fields,
    associations: parsed.associations,
    ddlSource: ddlSource ? ddlSource.trimEnd() : '',
    sourceUrl: opts.fetchedSourceUrl || opts.sourceUrl || '',
  };

  // Step 6: Render markdown
  console.log('📝 Rendering markdown...');
  const md = renderViewMd(viewData);

  if (opts.dryRun) {
    console.log('\n' + '='.repeat(60));
    console.log('📄 PREVIEW (dry-run mode — not written)\n');
    console.log(md);
    console.log('\n' + '='.repeat(60));
    console.log(`\n✅ Dry-run complete. Use without --dry-run to write.`);
    return;
  }

  // Step 7: Write file — reuse the view's existing location if it's already
  // in the tree somewhere (update), otherwise place it under its module
  // folder (new). Avoids re-adding an existing view at the old flat path
  // once it's been migrated into a subfolder.
  const existingFile = await findExistingView(VIEWS_DIR, parsed.name);
  const outputFile = existingFile || path.join(VIEWS_DIR, resolveViewFolder(viewData.appComponent, viewData.releaseState), `${parsed.name}.md`);
  console.log(`💾 Writing to ${outputFile}...`);

  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  await fs.writeFile(outputFile, md, 'utf-8');
  console.log(`   ✅ View file written: ${outputFile}`);

  // Step 8: Track changelog
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
    console.log('📝 Changelog entry written');
  }

  // Step 9: Rebuild index
  if (!opts.noBuild) {
    console.log('🔨 Rebuilding search index...');
    await rebuildIndex(DATA_DIR);
  }

  // Summary
  console.log('\n' + '─'.repeat(40));
  console.log(`📊 Summary:`);
  console.log(`   Name:         ${parsed.name}`);
  console.log(`   Description:  ${viewData.description}`);
  console.log(`   App Comp:     ${viewData.appComponent || '(auto-detected)'}`);
  console.log(`   Source:       ${opts.source || 'manual'}`);
  console.log(`   Fields:       ${parsed.fields.length}`);
  console.log(`   Associations: ${parsed.associations.length}`);
  console.log(`   Tags:         ${tags.length}`);
  if (opts.track) console.log(`   Tracked:      yes`);
  console.log(`   File:         ${outputFile}`);
  console.log('✅ Done!\n');
}

// ── Run ─────────────────────────────────────────────────────────────────────

main().catch((err) => {
  console.error(`\n❌ Error: ${err.message}`);
  if (process.argv.includes('--verbose') || process.argv.includes('-v')) {
    console.error(err);
  }
  process.exit(1);
});
