#!/usr/bin/env node
// scripts/fix-frontmatter-quoting.mjs
// One-time repo-wide fix: rewrites every view file's frontmatter block
// through the now-quoting-aware src/template.mjs renderFrontmatter(), so a
// free-text value containing ": " (description, semantic_en/vi, a keyword)
// is properly YAML-double-quoted instead of a bare scalar github.com's
// markdown renderer chokes on (see the commit that added yamlScalar() in
// template.mjs for why this matters and why extractFrontmatter/scalar/
// listBlock never noticed on our own read path).
//
// Surgical: only the `---...---` frontmatter block is touched (found and
// replaced as one contiguous region at the very start of the file) — the
// property table, Fields/Associations tables, and Source Code block below
// it are copied through byte-for-byte. Values are round-tripped through the
// EXISTING (already unquote-aware) scalar()/listBlock() readers and re-run
// through renderFrontmatter(), so a file that's already correctly quoted
// (or was never affected — no field contains ": ") comes out byte-identical
// and is skipped, not rewritten.
//
// Usage:
//   node scripts/fix-frontmatter-quoting.mjs [--dry-run] [--limit N]

import fs from 'node:fs/promises';
import path from 'node:path';
import { listViewFiles } from './lib/view-files.mjs';
import { extractFrontmatter, scalar, listBlock } from './lib/frontmatter.mjs';
import { renderFrontmatter } from '../src/template.mjs';

const VIEWS_DIR = path.join('.', 'views');

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { dryRun: false, limit: 0 };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--dry-run') opts.dryRun = true;
    else if (args[i] === '--limit') opts.limit = parseInt(args[++i], 10) || 0;
  }
  return opts;
}

const FRONTMATTER_BLOCK_RE = /^---\r?\n[\s\S]*?\r?\n---/;

async function processFile(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  const fm = extractFrontmatter(content);
  if (!fm) return null; // no frontmatter at all — not one of our view files

  const sourceAvailable = scalar(fm, 'source_available') === 'true';
  const view = {
    name: scalar(fm, 'name'),
    description: scalar(fm, 'description'),
    appComponent: scalar(fm, 'app_component'),
    softwareComponent: scalar(fm, 'software_component'),
    releaseState: scalar(fm, 'release_state'),
    devExtStatus: scalar(fm, 'dev_ext_status'),
    atcState: scalar(fm, 'atc_state'),
    atcSuccessor: scalar(fm, 'atc_successor'),
    cleanCoreLevel: scalar(fm, 'clean_core_level'),
    systemType: scalar(fm, 'system_type'),
    sourceUrl: scalar(fm, 'source_url'),
    semantic_en: scalar(fm, 'semantic_en'),
    semantic_vi: scalar(fm, 'semantic_vi'),
    keywords: listBlock(fm, 'keywords'),
    tags: listBlock(fm, 'tags'),
    // renderFrontmatter only checks this for truthiness (to render
    // `source_available: true|false`) — never rendered itself, so a dummy
    // non-empty string stands in for "yes" without needing the real DDL.
    ddlSource: sourceAvailable ? 'x' : '',
  };

  const newFrontmatter = renderFrontmatter(view);
  if (!FRONTMATTER_BLOCK_RE.test(content)) return null; // shouldn't happen given fm was non-empty, but don't touch if it does

  const nl = content.includes('\r\n') ? '\r\n' : '\n';
  const normalizedNew = nl === '\r\n' ? newFrontmatter.replace(/\r?\n/g, '\r\n') : newFrontmatter;
  const newContent = content.replace(FRONTMATTER_BLOCK_RE, normalizedNew);

  if (newContent === content) return null; // already correctly quoted (or nothing needed quoting)
  return newContent;
}

async function main() {
  const opts = parseArgs();
  const files = await listViewFiles(VIEWS_DIR);
  const items = opts.limit > 0 ? files.slice(0, opts.limit) : files;

  console.log(`📋 Checking ${items.length} view file(s)...`);
  let changed = 0, errors = 0;

  for (const { name, relPath } of items) {
    const filePath = path.join(VIEWS_DIR, ...relPath.split('/'));
    let newContent;
    try {
      newContent = await processFile(filePath);
    } catch (e) {
      console.error(`   ❌ ${name}: ${e.message}`);
      errors++;
      continue;
    }
    if (newContent === null) continue;

    changed++;
    if (opts.dryRun) {
      console.log(`   📄 ${name}: would fix frontmatter quoting [dry-run]`);
    } else {
      await fs.writeFile(filePath, newContent, 'utf-8');
    }
  }

  console.log('\n' + '═'.repeat(50));
  console.log(`📊 Summary: ${changed} file(s) ${opts.dryRun ? 'would be' : 'were'} fixed, ${items.length - changed - errors} already OK, ${errors} error(s)`);
}

main().catch(err => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
