#!/usr/bin/env node
// scripts/run-vsp-batch.mjs
// One-shot, no-agent-required pipeline: pick the next N Hub-confirmed
// metadata-only CDS views, fetch their real ABAP DDL straight from the SAP
// tenant via vsp's CLI mode (tools/vsp/vsp.exe source DDLS <name> — no MCP
// server, no Claude session needed, just the same cookie session used by the
// MCP tool), apply them through the existing parse -> tag -> synthesize ->
// render pipeline, backfill Field Type/Description from the Hub catalog,
// rebuild the search index + dashboard, then commit and push.
//
// Meant to be launched by double-clicking run-vsp-batch.cmd at the repo
// root, so every step here has to be fully unattended:
//   - vsp CLI failures (object not found, session expired) are logged and
//     skipped per-view, not fatal — except N consecutive failures in a row,
//     which almost always means the cookie session died, so we stop early
//     rather than burning through the whole candidate list against a dead
//     session.
//   - a merge conflict against origin/main is only auto-resolved when every
//     conflicted file is one of our own generated/tracking files (index,
//     changelog, dashboard, manifests) — anything else aborts the merge and
//     leaves the local commit unpushed rather than guessing.
//
// Usage:
//   node scripts/run-vsp-batch.mjs [--count 25] [--no-push] [--no-commit]
//     [--modules FI-,CO-,MM-,SD-,LO-,PP-,QM-,PM-]
//
// Requires: tools/vsp/vsp.exe, .vsp.json (run `vsp config mcp-to-vsp` once
// from the repo root if missing), and a live SAP session cookie in
// tools/vsp/cookies.txt (re-export from the browser when it expires —
// consecutive-failure detection below will tell you when that's needed).

import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { extractFrontmatter, scalar } from './lib/frontmatter.mjs';
import { findExistingView } from './lib/view-files.mjs';
import { readJson, writeJson } from './lib/json-file.mjs';
import { rebuildIndex } from './lib/rebuild-index.mjs';

const DATA_DIR = '.';
const VIEWS_DIR = path.join(DATA_DIR, 'views');
const VSP_EXE = path.join(DATA_DIR, 'tools', 'vsp', 'vsp.exe');
const VSP_CONFIG = path.join(DATA_DIR, '.vsp.json');
const REQUEST_FILE = path.join(DATA_DIR, 'ddl-field-enrichment-request.json');
const DEFAULT_MODULES = ['FI-', 'CO-', 'MM-', 'SD-', 'LO-', 'PP-', 'QM-', 'PM-'];
const MAX_CONSECUTIVE_FAILURES = 5;

// Files our own automation writes on every run — safe to auto-resolve on a
// merge conflict by regenerating rather than hand-merging.
const GENERATED_FILES = new Set([
  'changelog.json', 'dashboard.html', 'coverage.json', 'coverage-report.html',
  'hub-metadata-manifest.json', 'ddl-field-enrichment-manifest.json',
  'vsp-ddl-applied-manifest.json', 'ddl-field-enrichment-request.json',
  'index/search_index.json', 'index/field-index.json', 'index/version.json',
  'index/view-fields.js', 'index/view-paths.json', 'index/suggestions.json',
]);

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { count: 25, push: true, commit: true, modules: DEFAULT_MODULES };
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--count': opts.count = parseInt(args[++i], 10) || 25; break;
      case '--no-push': opts.push = false; break;
      case '--no-commit': opts.commit = false; opts.push = false; break;
      case '--modules': opts.modules = args[++i].split(',').map(s => s.trim()).filter(Boolean); break;
      case '--help': case '-h':
        console.log('Usage: node scripts/run-vsp-batch.mjs [--count 25] [--no-push] [--no-commit] [--modules FI-,CO-,...]');
        process.exit(0);
    }
  }
  return opts;
}

// No shell:true here on purpose — with shell:true, spawnSync re-joins argv
// and hands it to cmd.exe for re-parsing, so a multi-word argument (a commit
// message, a DDL string) gets split back apart on spaces unless manually
// quoted. git.exe/node.exe are real executables Windows can spawn directly
// off PATH, so plain argv passing (each element as its own arg, unmangled)
// works correctly without a shell in between.
function run(cmd, args, opts = {}) {
  const result = spawnSync(cmd, args, { stdio: 'inherit', ...opts });
  return result.status === 0;
}

// maxBuffer defaults to 1MB in spawnSync, which silently truncates stdout
// once exceeded rather than erroring — index/search_index.json and
// index/view-fields.js both run well past that (10-15MB), so a plain
// `git show :2:<file>` capture came back as truncated, invalid JSON that
// then failed to parse two steps later during the post-merge rebuild.
function runCapture(cmd, args, opts = {}) {
  return spawnSync(cmd, args, { encoding: 'utf-8', maxBuffer: 200 * 1024 * 1024, ...opts });
}

async function selectCandidates(count, modulePrefixes) {
  const coverage = await readJson(path.join(DATA_DIR, 'coverage.json'), null);
  if (!coverage) throw new Error('coverage.json not found — run `node scripts/check-coverage.mjs` first');

  const picked = [];
  for (const row of coverage.rows) {
    if (picked.length >= count) break;
    if (row.status !== 'metadata-only') continue;
    if (row.name.startsWith('_DCO_') || row.name.startsWith('Z')) continue;

    const file = await findExistingView(VIEWS_DIR, row.name.toUpperCase());
    if (!file) continue;

    const fm = extractFrontmatter(await fs.readFile(file, 'utf-8'));
    if (scalar(fm, 'source_available') === 'true') continue; // already upgraded since coverage.json was generated

    const appComponent = scalar(fm, 'app_component');
    if (!modulePrefixes.some(p => appComponent.startsWith(p))) continue;

    picked.push(row.name.toUpperCase());
  }
  return picked;
}

async function fetchBatch(names, systemName) {
  const tmpDir = path.join(os.tmpdir(), `vsp-batch-${process.pid}`);
  await fs.mkdir(tmpDir, { recursive: true });

  let fetched = 0;
  let consecutiveFailures = 0;
  const skipped = [];

  for (const name of names) {
    const result = runCapture(VSP_EXE, ['-s', systemName, 'source', 'DDLS', name]);
    const ddl = result.stdout?.trim();
    if (result.status === 0 && ddl) {
      await fs.writeFile(path.join(tmpDir, `${name}.ddl`), ddl, 'utf-8');
      fetched++;
      consecutiveFailures = 0;
      console.log(`   OK   ${name} (${ddl.length} chars)`);
    } else {
      consecutiveFailures++;
      const reason = (result.stderr || '').split('\n').find(l => l.includes('Error:')) || 'unknown error';
      skipped.push({ name, reason: reason.trim() });
      console.log(`   SKIP ${name} — ${reason.trim()}`);
      if (consecutiveFailures >= MAX_CONSECUTIVE_FAILURES) {
        console.log(`\n${consecutiveFailures} lỗi liên tiếp — session cookie có thể đã hết hạn. Dừng batch sớm.`);
        console.log('Export cookie mới từ browser (đăng nhập lại SAP tenant) rồi ghi vào tools/vsp/cookies.txt.');
        break;
      }
    }
  }

  return { tmpDir, fetched, skipped };
}

/**
 * A view .md conflict where we just upgraded it to Full DDL (ours has
 * `source_available: true`) and the other side's version is still the old
 * metadata-only content (`source_available: false`) isn't a real conflict —
 * it's the daily Hub-metadata-fetch/resync-folders bots re-touching the same
 * view we raced against. Since this script only ever fetches views that
 * were metadata-only *before* this run, that race is the expected, common
 * case (bots run on a schedule independent of this script), not a rare
 * edge case worth aborting over every time. Ours strictly supersedes theirs
 * here, so it's safe to auto-take ours — genuinely divergent edits (e.g.
 * both sides independently have source_available: true with different
 * content) still fall through to the unsafe-abort path below.
 */
async function isSafeViewSupersession(file) {
  if (!file.replace(/\\/g, '/').startsWith('views/') || !file.endsWith('.md')) return false;
  const ours = runCapture('git', ['show', `:2:${file}`]).stdout;
  const theirs = runCapture('git', ['show', `:3:${file}`]).stdout;
  return /^source_available:\s*true\s*$/m.test(ours) && /^source_available:\s*false\s*$/m.test(theirs);
}

async function resolveMergeConflicts() {
  const conflicted = runCapture('git', ['diff', '--name-only', '--diff-filter=U'])
    .stdout.split('\n').map(s => s.trim()).filter(Boolean);
  if (conflicted.length === 0) return true;

  const generated = [];
  const supersessions = [];
  const unsafe = [];
  for (const f of conflicted) {
    const normalized = f.replace(/\\/g, '/');
    if (GENERATED_FILES.has(normalized)) generated.push(f);
    else if (await isSafeViewSupersession(f)) supersessions.push(f);
    else unsafe.push(f);
  }

  if (unsafe.length > 0) {
    console.log(`\nMerge conflict trong file không tự resolve được an toàn: ${unsafe.join(', ')}`);
    console.log('Đang huỷ merge — cần agent/người xử lý tay.');
    run('git', ['merge', '--abort']);
    return false;
  }

  if (supersessions.length > 0) {
    console.log(`\n${supersessions.length} view vừa upgrade bị bot khác đụng vào bản metadata-only cũ — giữ bản Full DDL của mình: ${supersessions.join(', ')}`);
    for (const f of supersessions) {
      const ours = runCapture('git', ['show', `:2:${f}`]);
      await fs.writeFile(f, ours.stdout, 'utf-8');
    }
  }

  console.log(`\nTự động resolve conflict trong ${generated.length} file generated: ${generated.join(', ')}`);
  for (const f of generated) {
    if (f === 'changelog.json') {
      const ours = runCapture('git', ['show', ':2:changelog.json']).stdout;
      const theirs = runCapture('git', ['show', ':3:changelog.json']).stdout;
      try {
        const oursArr = JSON.parse(ours);
        const theirsArr = JSON.parse(theirs);
        const seen = new Set();
        const merged = [];
        for (const e of [...oursArr, ...theirsArr]) {
          const key = `${e.viewName}|${e.timestamp}|${e.action}`;
          if (seen.has(key)) continue;
          seen.add(key);
          merged.push(e);
        }
        merged.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
        await fs.writeFile('changelog.json', JSON.stringify(merged, null, 2) + '\n', 'utf-8');
      } catch {
        await fs.writeFile('changelog.json', ours, 'utf-8');
      }
    } else {
      const ours = runCapture('git', ['show', `:2:${f}`]);
      await fs.writeFile(f, ours.stdout, 'utf-8');
    }
  }
  return true;
}

async function main() {
  const opts = parseArgs();

  try {
    await fs.access(VSP_EXE);
  } catch {
    console.error(`Không tìm thấy ${VSP_EXE}. Chạy lại từ đúng thư mục repo.`);
    process.exit(1);
  }

  const vspConfig = await readJson(VSP_CONFIG, null);
  if (!vspConfig) {
    console.error('Không tìm thấy .vsp.json. Chạy 1 lần: tools\\vsp\\vsp.exe config mcp-to-vsp (từ thư mục gốc repo, cần .mcp.json sẵn có).');
    process.exit(1);
  }
  const systemName = vspConfig.default || Object.keys(vspConfig.systems || {})[0];
  if (!systemName) {
    console.error('.vsp.json không có system nào. Xem lại tools/vsp/cookies.txt và .mcp.json.');
    process.exit(1);
  }

  console.log(`Đang chọn tối đa ${opts.count} candidate (module: ${opts.modules.join(', ')})...`);
  const names = await selectCandidates(opts.count, opts.modules);
  console.log(`Chọn được ${names.length} candidate: ${names.join(', ')}\n`);
  if (names.length === 0) {
    console.log('Không còn candidate nào phù hợp (đã xử lý hết trong các module đang chọn).');
    return;
  }

  console.log(`Đang fetch DDL qua vsp CLI (system: ${systemName})...`);
  const { tmpDir, fetched, skipped } = await fetchBatch(names, systemName);
  console.log(`\nFetch xong: ${fetched} OK, ${skipped.length} skip.`);

  if (fetched === 0) {
    console.log('Không fetch được view nào — dừng, không chạm gì tới git.');
    await fs.rm(tmpDir, { recursive: true, force: true });
    process.exit(1);
  }

  console.log('\nApply DDL vào knowledge base...');
  if (!run('node', ['scripts/apply_vsp_ddl.mjs', '--dir', tmpDir])) {
    console.error('apply_vsp_ddl.mjs lỗi — dừng lại, kiểm tra output ở trên.');
    process.exit(1);
  }
  await fs.rm(tmpDir, { recursive: true, force: true });

  console.log('\nBackfill Type/Description từ Hub catalog...');
  const fetchedNames = names.filter(n => !skipped.some(s => s.name === n));
  const existingRequests = await readJson(REQUEST_FILE, []);
  await writeJson(REQUEST_FILE, [...new Set([...existingRequests, ...fetchedNames])]);
  run('node', ['scripts/enrich_ddl_fields.mjs', '--limit', String(fetchedNames.length + 15), '--delay-ms', '400']);

  console.log('\nRebuild search index...');
  await rebuildIndex(DATA_DIR);
  console.log('\nRebuild dashboard...');
  run('node', ['scripts/generate-dashboard.mjs']);

  if (!opts.commit) {
    console.log('\n--no-commit: dừng ở đây, tự kiểm tra rồi commit tay.');
    return;
  }

  console.log('\nCommit...');
  run('git', ['add', '-A']);
  const commitMsg = `Upgrade ${fetched} Hub-confirmed views to Full DDL via vsp CLI batch\n\n${fetchedNames.join(', ')}`;
  if (!run('git', ['commit', '-m', commitMsg])) {
    console.log('Không có gì để commit (hoặc commit lỗi) — dừng.');
    return;
  }

  if (!opts.push) {
    console.log('\n--no-push: đã commit local, tự push tay khi sẵn sàng.');
    return;
  }

  console.log('\nFetch + merge origin/main...');
  run('git', ['fetch', 'origin', 'main']);
  const behind = runCapture('git', ['log', '--oneline', 'HEAD..origin/main']).stdout.trim();
  if (behind) {
    const mergeOk = spawnSync('git', ['merge', '--no-edit', 'origin/main'], { stdio: 'inherit' }).status === 0;
    if (!mergeOk) {
      if (!(await resolveMergeConflicts())) {
        console.log('\nMerge bị huỷ — commit local vẫn còn, chưa push. Cần xử lý tay.');
        return;
      }
      run('git', ['add', '-A']); // covers both GENERATED_FILES and any resolved view-supersession .md files
      console.log('Rebuild lại index/dashboard sau merge...');
      await rebuildIndex(DATA_DIR);
      run('node', ['scripts/generate-dashboard.mjs']);
      run('git', ['add', '-A']);
      run('git', ['commit', '--no-edit']);
    }
  }

  console.log('\nPush...');
  if (run('git', ['push', 'origin', 'main'])) {
    console.log('\n✅ Xong! Đã push lên main.');
  } else {
    console.log('\n⚠️  Push thất bại — commit vẫn còn local, kiểm tra tay (`git push`).');
  }
}

main().catch(err => {
  console.error(`Lỗi: ${err.message}`);
  process.exit(1);
});
