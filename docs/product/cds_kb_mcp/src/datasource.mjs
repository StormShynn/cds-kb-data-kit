// datasource.mjs
// Pluggable access to the CDS data, kept fully separate from the data itself.
// Backends, same interface:
//   - LocalDataSource(rootDir):  reads <root>/index/search_index.json and <root>/views/<NAME>.md
//   - S3DataSource():            S3/MinIO when CDS_KB_S3_BUCKET + credentials are set
//   - RemoteDataSource(baseUrl): downloads the index once (cached), lazy-fetches views (cached)
//
// View files don't have to sit flat in views/ — index/view-paths.json (built by
// enrich_index.mjs in the data repo) maps NAME -> its real relative path (e.g.
// "views/FI/I_SALESDOCUMENT.md" once the data repo groups views by module). A
// data repo without that file (or missing an entry) falls back to the flat
// views/<NAME>.md guess, so this is backward compatible with older data.
//
// Interface:
//   async loadIndexWrapper() -> { schemaVersion, options, minisearch, viewCount, ... }
//   async getView(name)      -> markdown string  (throws if not found)
//   async getViewSections(name, sections) -> filtered markdown (only requested sections)
//   async getTaxonomy()      -> returns parsed taxonomy JSON (or null if not available)
//   async getFieldIndex()    -> returns parsed field-index.json (or null if not available)
//   async getTableIndex()    -> returns parsed table-index.json (or null if not available)
//   async getRawFieldIndex() -> returns parsed raw-field-index.json (or null if not available)
//   async getQueryLibrary()  -> returns parsed index/query-library.json (array of saved queries, or null if not available)
//   async getChangelog()     -> returns parsed changelog.json (array of {viewName, action, timestamp, ...}, or null if not available)
//   describe()               -> short human string for logs

import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import crypto from 'node:crypto';
import { logError, logWarn } from './log.mjs';

// Harness monorepo layout: docs/product/cds_kb_mcp next to docs/product/cds_kb_data.
// Prefer process.argv[1] / cwd — not import.meta.url — so the CJS dist bundle works
// (esbuild empties import.meta under format:cjs).
function resolveSiblingDataDir() {
  const candidates = [];
  const entry = process.argv[1] ? path.resolve(process.argv[1]) : null;
  if (entry) {
    const entryDir = path.dirname(entry);
    // src/server.mjs or dist/cds-kb-mcp.cjs → ../../cds_kb_data
    candidates.push(path.resolve(entryDir, '..', '..', 'cds_kb_data'));
    // package-root entry → ../cds_kb_data
    candidates.push(path.resolve(entryDir, '..', 'cds_kb_data'));
  }
  candidates.push(
    path.resolve(process.cwd(), '..', 'cds_kb_data'),
    path.resolve(process.cwd(), 'cds_kb_data'),
    path.resolve(process.cwd(), 'docs', 'product', 'cds_kb_data'),
  );
  for (const candidate of candidates) {
    if (existsSync(path.join(candidate, 'index', 'search_index.json'))) return candidate;
  }
  return null;
}

// ── Section parser ──────────────────────────────────────────────────────────
// Splits a CDS view markdown file into named sections for selective retrieval.
// Recognised sections: metadata (frontmatter + heading + property table),
// fields, associations, source (DDL source code).

const SECTION_NAMES = ['metadata', 'fields', 'associations', 'source'];

function parseViewSections(md) {
  const sections = { metadata: '', fields: '', associations: '', source: '' };

  // --- frontmatter + heading + property table → metadata
  const fmEnd = md.indexOf('---', 4);            // second '---'
  const fieldsStart = md.indexOf('## Fields');
  if (fieldsStart === -1) {
    // No structured sections — return everything as metadata
    sections.metadata = md;
    return sections;
  }
  sections.metadata = md.slice(0, fieldsStart).trimEnd();

  // --- fields table
  const assocStart = md.indexOf('## Associations');
  const sourceStart = md.indexOf('## Source Code');
  const fieldsEnd = assocStart !== -1 ? assocStart : sourceStart !== -1 ? sourceStart : md.length;
  sections.fields = md.slice(fieldsStart, fieldsEnd).trimEnd();

  // --- associations table
  if (assocStart !== -1) {
    const assocEnd = sourceStart !== -1 ? sourceStart : md.length;
    sections.associations = md.slice(assocStart, assocEnd).trimEnd();
  }

  // --- source code block
  if (sourceStart !== -1) {
    sections.source = md.slice(sourceStart).trimEnd();
  }

  return sections;
}

function filterSections(md, requestedSections) {
  if (!requestedSections || requestedSections.length === 0) return md;
  const valid = requestedSections.filter((s) => SECTION_NAMES.includes(s));
  if (valid.length === 0) return md;

  const parsed = parseViewSections(md);
  return valid.map((s) => parsed[s]).filter(Boolean).join('\n\n');
}

// ── Cache TTL ──────────────────────────────────────────────────────────────
// Default 1 hour — short enough that a long-running session picks up upstream
// updates without restart. The version.json check at startup short-circuits
// this anyway: if upstream commit matches, cache is reused regardless of age.
const CACHE_TTL_MS = (parseFloat(process.env.CDS_KB_CACHE_TTL_HOURS) || 1) * 60 * 60 * 1000;

// ── Fetch tunables ─────────────────────────────────────────────────────────
// Per-request timeout and retry policy for the remote backend.
const FETCH_TIMEOUT_MS = parseInt(process.env.CDS_KB_FETCH_TIMEOUT_MS, 10) || 20000;
const FETCH_RETRIES = Math.max(1, parseInt(process.env.CDS_KB_FETCH_RETRIES, 10) || 3);

async function isCacheFresh(filePath) {
  try {
    const stat = await fs.stat(filePath);
    return Date.now() - stat.mtimeMs < CACHE_TTL_MS;
  } catch {
    return false; // file does not exist
  }
}

async function cacheExists(filePath) {
  try { await fs.stat(filePath); return true; } catch { return false; }
}

// Atomic write: tmp file in same dir + rename. Prevents half-written cache when killed mid-write.
async function atomicWriteFile(filePath, content) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  const tmp = path.join(dir, `.${path.basename(filePath)}.${process.pid}.${Date.now()}.tmp`);
  await fs.writeFile(tmp, content, 'utf-8');
  await fs.rename(tmp, filePath);
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

// ── Local backend ───────────────────────────────────────────────────────────

export class LocalDataSource {
  constructor(rootDir) {
    this.root = path.resolve(rootDir);
  }
  describe() {
    return `local:${this.root}`;
  }
  async loadIndexWrapper() {
    const file = path.join(this.root, 'index', 'search_index.json');
    try {
      return JSON.parse(await fs.readFile(file, 'utf-8'));
    } catch (e) {
      throw new Error(`Cannot read index at ${file}. Build it in the data repo (npm run build:index). ${e.message}`);
    }
  }
  async getView(name) {
    const safe = path.basename(name).replace(/\.md$/i, '').toUpperCase();
    let relPath = path.join('views', `${safe}.md`);
    try {
      const pathMap = JSON.parse(await fs.readFile(path.join(this.root, 'index', 'view-paths.json'), 'utf-8'));
      if (pathMap[safe]) relPath = pathMap[safe];
    } catch { /* no view-paths.json (older/unindexed data dir) — flat guess above stands */ }
    const file = path.join(this.root, relPath);
    return fs.readFile(file, 'utf-8'); // throws ENOENT if missing; server maps to a friendly error
  }
  async getViewSections(name, sections) {
    const md = await this.getView(name);
    return filterSections(md, sections);
  }
  async getTaxonomy() {
    const file = path.join(this.root, 'index', 'taxonomy.json');
    try {
      return JSON.parse(await fs.readFile(file, 'utf-8'));
    } catch {
      return null;
    }
  }
  async getVersion() {
    const file = path.join(this.root, 'index', 'version.json');
    try {
      return JSON.parse(await fs.readFile(file, 'utf-8'));
    } catch {
      return null;
    }
  }
  async getFieldIndex() {
    const file = path.join(this.root, 'index', 'field-index.json');
    try {
      return JSON.parse(await fs.readFile(file, 'utf-8'));
    } catch {
      return null; // older data repo without field-index.json yet
    }
  }
  async getTableIndex() {
    const file = path.join(this.root, 'index', 'table-index.json');
    try {
      return JSON.parse(await fs.readFile(file, 'utf-8'));
    } catch {
      return null; // older data repo without table-index.json yet
    }
  }
  async getRawFieldIndex() {
    const file = path.join(this.root, 'index', 'raw-field-index.json');
    try {
      return JSON.parse(await fs.readFile(file, 'utf-8'));
    } catch {
      return null; // older data repo without raw-field-index.json yet
    }
  }
  async getEmbeddings() {
    const file = path.join(this.root, 'index', 'embeddings.json');
    try {
      return JSON.parse(await fs.readFile(file, 'utf-8'));
    } catch {
      return null;
    }
  }
  async getQueryLibrary() {
    const file = path.join(this.root, 'index', 'query-library.json');
    try {
      return JSON.parse(await fs.readFile(file, 'utf-8'));
    } catch {
      return null;
    }
  }
  async getChangelog() {
    const file = path.join(this.root, 'changelog.json');
    try {
      return JSON.parse(await fs.readFile(file, 'utf-8'));
    } catch {
      return null;
    }
  }
}

// ── Remote backend ──────────────────────────────────────────────────────────

export class RemoteDataSource {
  // baseUrl example: https://raw.githubusercontent.com/<user>/<repo>/<branch>
  //
  // raw.githubusercontent.com has no way to authenticate a request, so it
  // 404s on a private repo no matter what headers you send. When a token is
  // available AND baseUrl matches that standard shape, requests are
  // transparently rewritten to the authenticated GitHub Contents API
  // instead (same configured URL shape either way — only the transport
  // changes) so a private data repo works without changing how CDS_KB_REMOTE
  // is written.
  constructor(baseUrl, { cacheDir, token } = {}) {
    this.base = baseUrl.replace(/\/+$/, '');
    this.token = token || process.env.CDS_KB_DATA_TOKEN || process.env.GITHUB_TOKEN || '';

    const m = /^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)$/.exec(this.base);
    this._gh = this.token && m ? { owner: m[1], repo: m[2], branch: m[3] } : null;

    const key = crypto.createHash('sha1').update(this.base).digest('hex').slice(0, 12);
    // Honour XDG_CACHE_HOME on Linux/BSD; fall back to ~/.cache otherwise.
    const cacheRoot = process.env.XDG_CACHE_HOME || path.join(os.homedir(), '.cache');
    this.cacheDir = cacheDir || path.join(cacheRoot, 'cds-kb', key);
    this.etagFile = path.join(this.cacheDir, 'etags.json');
    this._etags = null;             // lazy-loaded {url: etag}
    this._inflightRevalidate = new Map();  // url -> Promise, dedupes background refetches
  }
  describe() {
    const mode = this._gh ? 'authenticated GitHub Contents API' : 'unauthenticated raw';
    return `remote:${this.base} (${mode}, cache ${this.cacheDir})`;
  }

  // Resolve a data-relative path (e.g. "index/version.json") to the URL to
  // actually fetch — the authenticated Contents API when a token+repo are
  // known, otherwise the plain raw.githubusercontent.com URL.
  #resolveUrl(relPath) {
    if (this._gh) {
      return `https://api.github.com/repos/${this._gh.owner}/${this._gh.repo}/contents/${relPath}?ref=${this._gh.branch}`;
    }
    return `${this.base}/${relPath}`;
  }

  async #loadEtags() {
    if (this._etags) return this._etags;
    try { this._etags = JSON.parse(await fs.readFile(this.etagFile, 'utf-8')); }
    catch { this._etags = {}; }
    return this._etags;
  }
  async #saveEtag(url, etag) {
    const map = await this.#loadEtags();
    if (!etag) return;
    map[url] = etag;
    try { await atomicWriteFile(this.etagFile, JSON.stringify(map)); } catch {}
  }

  // Fetch with timeout, retry (exponential backoff), and conditional GET via ETag.
  // Returns { text, status } where status ∈ {200, 304, ...}; throws on terminal failure.
  async #fetchText(url, { conditional = false, retries = FETCH_RETRIES } = {}) {
    const etags = conditional ? await this.#loadEtags() : null;
    const prevEtag = conditional ? etags?.[url] : undefined;
    let lastErr;
    for (let attempt = 0; attempt < retries; attempt++) {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
      try {
        const headers = {};
        if (prevEtag) headers['If-None-Match'] = prevEtag;
        if (this._gh) {
          headers['Authorization'] = `Bearer ${this.token}`;
          headers['Accept'] = 'application/vnd.github.raw+json';
        }
        const res = await fetch(url, { signal: ctrl.signal, headers });
        clearTimeout(timer);
        if (res.status === 304) return { text: null, status: 304, etag: prevEtag };
        if (res.ok) {
          const text = await res.text();
          const etag = res.headers.get('etag') || undefined;
          if (conditional && etag) await this.#saveEtag(url, etag);
          return { text, status: res.status, etag };
        }
        // 4xx (except 408/429) is terminal — no point retrying.
        const err = new Error(`GET ${url} -> ${res.status} ${res.statusText}`);
        if (res.status >= 400 && res.status < 500 && res.status !== 408 && res.status !== 429) {
          err.terminal = true;
        }
        throw err;
      } catch (e) {
        clearTimeout(timer);
        lastErr = e;
        if (e.terminal) break; // terminal 4xx — stop immediately, don't burn the remaining retries/backoff
      }
      if (attempt < retries - 1) {
        const backoff = Math.min(500 * 2 ** attempt, 5000);
        await sleep(backoff);
      }
    }
    throw lastErr || new Error(`GET ${url} failed after ${retries} attempts`);
  }

  // Validate that text is parseable JSON before persisting cache.
  async #persistJsonCache(cacheFile, text) {
    JSON.parse(text);  // throws if corrupt → caller decides what to do
    await atomicWriteFile(cacheFile, text);
  }

  // Background revalidation — silently refresh stale cache without blocking the caller.
  #revalidateInBackground(url, cacheFile, { json = false } = {}) {
    if (this._inflightRevalidate.has(url)) return;
    const task = (async () => {
      try {
        const { text, status } = await this.#fetchText(url, { conditional: true });
        if (status === 304) {
          // Upstream unchanged — just refresh mtime so we don't keep refetching.
          try { const now = new Date(); await fs.utimes(cacheFile, now, now); } catch {}
          return;
        }
        if (json) await this.#persistJsonCache(cacheFile, text);
        else await atomicWriteFile(cacheFile, text);
      } catch (e) {
        logWarn('background revalidate failed', { url, err: e });
      } finally {
        this._inflightRevalidate.delete(url);
      }
    })();
    this._inflightRevalidate.set(url, task);
  }

  // Fetch upstream version manifest (tiny ~200 B file). Used to short-circuit
  // TTL: if upstream commit equals what we cached on the previous run, the
  // index is provably current and we can skip the 800 KB index fetch.
  async getVersion() {
    const url = this.#resolveUrl('index/version.json');
    try {
      const { text } = await this.#fetchText(url, { conditional: false });
      return JSON.parse(text);
    } catch {
      return null;  // older data repo without version.json → fall back to TTL
    }
  }

  async #readCachedVersion() {
    const file = path.join(this.cacheDir, 'version.json');
    try { return JSON.parse(await fs.readFile(file, 'utf-8')); } catch { return null; }
  }

  async #writeCachedVersion(v) {
    if (!v) return;
    try { await atomicWriteFile(path.join(this.cacheDir, 'version.json'), JSON.stringify(v)); } catch {}
  }

  async loadIndexWrapper() {
    const cacheFile = path.join(this.cacheDir, 'search_index.json');
    const url = this.#resolveUrl('index/search_index.json');
    const forceRefresh = process.env.CDS_KB_REFRESH === '1';

    // ── Step 1: version manifest probe (~200 B, no TTL). Short-circuits everything ──
    let upstreamVersion = null;
    let cachedVersion = null;
    if (!forceRefresh) {
      upstreamVersion = await this.getVersion();
      cachedVersion = await this.#readCachedVersion();
    }

    const cacheHasIndex = await cacheExists(cacheFile);
    const versionsMatch = !!(upstreamVersion && cachedVersion
      && upstreamVersion.commit === cachedVersion.commit
      && upstreamVersion.schemaVersion === cachedVersion.schemaVersion);

    // ── Step 2: cache path — use cache if version matches OR if version probe failed and TTL is fresh ──
    if (!forceRefresh && cacheHasIndex) {
      if (versionsMatch) {
        try {
          return JSON.parse(await fs.readFile(cacheFile, 'utf-8'));
        } catch {
          logWarn('index cache corrupt despite version match, re-downloading', {});
        }
      } else if (!upstreamVersion) {
        // Upstream has no version.json or probe failed → legacy TTL behaviour
        const fresh = await isCacheFresh(cacheFile);
        try {
          const parsed = JSON.parse(await fs.readFile(cacheFile, 'utf-8'));
          if (!fresh) {
            logWarn('index cache stale, serving from cache + revalidating in background', {});
            this.#revalidateInBackground(url, cacheFile, { json: true });
          }
          return parsed;
        } catch {
          logWarn('index cache corrupt, re-downloading', {});
        }
      } else {
        logWarn('upstream commit differs from cached — refreshing index', { upstream: upstreamVersion.commit.slice(0, 8), cached: (cachedVersion?.commit || 'none').slice(0, 8) });
      }
    }

    // ── Step 3: full download ─────────────────────────────────────────────
    const { text } = await this.#fetchText(url, { conditional: true });
    await this.#persistJsonCache(cacheFile, text);
    if (upstreamVersion) await this.#writeCachedVersion(upstreamVersion);
    return JSON.parse(text);
  }

  // Same disk-cache-with-background-revalidate pattern as getTaxonomy() below
  // — this file is small and changes rarely, so a stale read for up to
  // CACHE_TTL_MS is an acceptable trade-off, same as the taxonomy.
  async #loadPathMap() {
    const cacheFile = path.join(this.cacheDir, 'view-paths.json');
    const url = this.#resolveUrl('index/view-paths.json');
    const forceRefresh = process.env.CDS_KB_REFRESH === '1';

    if (!forceRefresh && await cacheExists(cacheFile)) {
      const fresh = await isCacheFresh(cacheFile);
      try {
        const parsed = JSON.parse(await fs.readFile(cacheFile, 'utf-8'));
        if (!fresh) this.#revalidateInBackground(url, cacheFile, { json: true });
        return parsed;
      } catch { /* corrupt — re-download */ }
    }

    try {
      const { text } = await this.#fetchText(url, { conditional: true });
      await this.#persistJsonCache(cacheFile, text);
      return JSON.parse(text);
    } catch {
      // Older data repo without view-paths.json yet — cache the miss as `{}`
      // too (same TTL as a hit) so getView() doesn't refetch this on every
      // single call; it'll pick up the real file automatically once it
      // exists upstream and this cache entry goes stale.
      try { await atomicWriteFile(cacheFile, '{}'); } catch {}
      return null;
    }
  }

  async getView(name) {
    const safe = path.basename(name).replace(/\.md$/i, '').toUpperCase();
    const pathMap = await this.#loadPathMap();
    const relPath = (pathMap && pathMap[safe]) || `views/${safe}.md`;
    const cacheFile = path.join(this.cacheDir, relPath);
    const url = this.#resolveUrl(relPath);

    if (await cacheExists(cacheFile)) {
      const md = await fs.readFile(cacheFile, 'utf-8');
      // View files rarely change between rebuilds; only revalidate when stale.
      if (!(await isCacheFresh(cacheFile))) {
        this.#revalidateInBackground(url, cacheFile);
      }
      return md;
    }
    const { text } = await this.#fetchText(url, { conditional: true });
    await atomicWriteFile(cacheFile, text);
    return text;
  }

  async getViewSections(name, sections) {
    const md = await this.getView(name);
    return filterSections(md, sections);
  }

  async getTaxonomy() {
    const cacheFile = path.join(this.cacheDir, 'taxonomy.json');
    const url = this.#resolveUrl('index/taxonomy.json');
    const forceRefresh = process.env.CDS_KB_REFRESH === '1';

    if (!forceRefresh && await cacheExists(cacheFile)) {
      const fresh = await isCacheFresh(cacheFile);
      try {
        const parsed = JSON.parse(await fs.readFile(cacheFile, 'utf-8'));
        if (!fresh) this.#revalidateInBackground(url, cacheFile, { json: true });
        return parsed;
      } catch { /* corrupt — re-download */ }
    }

    try {
      const { text } = await this.#fetchText(url, { conditional: true });
      await this.#persistJsonCache(cacheFile, text);
      return JSON.parse(text);
    } catch {
      return null;
    }
  }

  // field-index.json / table-index.json follow the exact same
  // disk-cache-with-background-revalidate shape as getTaxonomy() above —
  // both are small, change only on a full index rebuild, and a data repo
  // predating either file should just report "not available" rather than
  // error the whole server.
  async #loadCachedIndexFile(fileName) {
    const cacheFile = path.join(this.cacheDir, fileName);
    const url = this.#resolveUrl(`index/${fileName}`);
    const forceRefresh = process.env.CDS_KB_REFRESH === '1';

    if (!forceRefresh && await cacheExists(cacheFile)) {
      const fresh = await isCacheFresh(cacheFile);
      try {
        const parsed = JSON.parse(await fs.readFile(cacheFile, 'utf-8'));
        if (!fresh) this.#revalidateInBackground(url, cacheFile, { json: true });
        return parsed;
      } catch { /* corrupt — re-download */ }
    }

    try {
      const { text } = await this.#fetchText(url, { conditional: true });
      await this.#persistJsonCache(cacheFile, text);
      return JSON.parse(text);
    } catch {
      return null;
    }
  }

  async getFieldIndex() {
    return this.#loadCachedIndexFile('field-index.json');
  }

  async getTableIndex() {
    return this.#loadCachedIndexFile('table-index.json');
  }

  async getRawFieldIndex() {
    return this.#loadCachedIndexFile('raw-field-index.json');
  }

  async getEmbeddings() {
    return this.#loadCachedIndexFile('embeddings.json');
  }

  async getQueryLibrary() {
    return this.#loadCachedIndexFile('query-library.json');
  }

  // changelog.json lives at the data repo root (not under index/) and can be
  // large (one entry per view per refresh), so the same disk-cache-with-
  // background-revalidate shape applies — just the path differs.
  async getChangelog() {
    const cacheFile = path.join(this.cacheDir, 'changelog.json');
    const url = this.#resolveUrl('changelog.json');
    const forceRefresh = process.env.CDS_KB_REFRESH === '1';

    if (!forceRefresh && await cacheExists(cacheFile)) {
      const fresh = await isCacheFresh(cacheFile);
      try {
        const parsed = JSON.parse(await fs.readFile(cacheFile, 'utf-8'));
        if (!fresh) this.#revalidateInBackground(url, cacheFile, { json: true });
        return parsed;
      } catch { /* corrupt — re-download */ }
    }

    try {
      const { text } = await this.#fetchText(url, { conditional: true });
      await this.#persistJsonCache(cacheFile, text);
      return JSON.parse(text);
    } catch {
      return null;
    }
  }
}

// ── S3 / MinIO backend ──────────────────────────────────────────────────────

/** True when bucket + access key + secret are all set. */
export function s3Configured() {
  const bucket = (process.env.CDS_KB_S3_BUCKET || '').trim();
  const key = (process.env.CDS_KB_S3_ACCESS_KEY_ID || '').trim();
  const secret = (process.env.CDS_KB_S3_SECRET_ACCESS_KEY || '').trim();
  return !!(bucket && key && secret);
}

export class S3DataSource {
  constructor({ cacheDir } = {}) {
    this.bucket = (process.env.CDS_KB_S3_BUCKET || '').trim();
    if (!this.bucket) throw new Error('CDS_KB_S3_BUCKET is required for S3DataSource');
    this.prefix = (process.env.CDS_KB_S3_PREFIX || '').replace(/^\/+|\/+$/g, '');
    this.region = (process.env.CDS_KB_S3_REGION || 'us-east-1').trim();
    this.endpoint = (process.env.CDS_KB_S3_ENDPOINT || '').trim() || undefined;
    this.forcePathStyle = String(process.env.CDS_KB_S3_FORCE_PATH_STYLE || '').toLowerCase() === 'true';
    this.accessKeyId = (process.env.CDS_KB_S3_ACCESS_KEY_ID || '').trim();
    this.secretAccessKey = (process.env.CDS_KB_S3_SECRET_ACCESS_KEY || '').trim();

    const keyMaterial = `${this.bucket}|${this.prefix}|${this.endpoint || ''}|${this.region}`;
    const hash = crypto.createHash('sha1').update(keyMaterial).digest('hex').slice(0, 12);
    const cacheRoot = process.env.XDG_CACHE_HOME || path.join(os.homedir(), '.cache');
    this.cacheDir = cacheDir || path.join(cacheRoot, 'cds-kb', `s3-${hash}`);
    this._client = null;
    this._inflightRevalidate = new Map();
  }

  describe() {
    const ep = this.endpoint ? ` endpoint=${this.endpoint}` : '';
    return `s3:${this.bucket}/${this.prefix || ''} (${this.region}${ep}, cache ${this.cacheDir})`;
  }

  async #client() {
    if (this._client) return this._client;
    const { S3Client, GetObjectCommand } = await import('@aws-sdk/client-s3');
    this._GetObjectCommand = GetObjectCommand;
    const cfg = {
      region: this.region,
      credentials: {
        accessKeyId: this.accessKeyId,
        secretAccessKey: this.secretAccessKey,
      },
    };
    if (this.endpoint) {
      cfg.endpoint = this.endpoint;
      cfg.forcePathStyle = this.forcePathStyle;
    } else if (this.forcePathStyle) {
      cfg.forcePathStyle = true;
    }
    this._client = new S3Client(cfg);
    return this._client;
  }

  #objectKey(relPath) {
    const clean = String(relPath).replace(/^\/+/, '');
    return this.prefix ? `${this.prefix}/${clean}` : clean;
  }

  async #getObjectText(relPath) {
    const client = await this.#client();
    const Key = this.#objectKey(relPath);
    const out = await client.send(new this._GetObjectCommand({ Bucket: this.bucket, Key }));
    const body = out.Body;
    if (!body) throw new Error(`S3 empty body for s3://${this.bucket}/${Key}`);
    if (typeof body.transformToString === 'function') return body.transformToString('utf-8');
    // Fallback for older stream shapes
    const chunks = [];
    for await (const chunk of body) chunks.push(chunk);
    return Buffer.concat(chunks).toString('utf-8');
  }

  async #persistJsonCache(cacheFile, text) {
    JSON.parse(text);
    await atomicWriteFile(cacheFile, text);
  }

  #revalidateInBackground(relPath, cacheFile, { json = false } = {}) {
    if (this._inflightRevalidate.has(relPath)) return;
    const task = (async () => {
      try {
        const text = await this.#getObjectText(relPath);
        if (json) await this.#persistJsonCache(cacheFile, text);
        else await atomicWriteFile(cacheFile, text);
      } catch (e) {
        logWarn('S3 background revalidate failed', { relPath, err: e });
      } finally {
        this._inflightRevalidate.delete(relPath);
      }
    })();
    this._inflightRevalidate.set(relPath, task);
  }

  async #loadCachedJson(relPath, fileName) {
    const cacheFile = path.join(this.cacheDir, fileName);
    const forceRefresh = process.env.CDS_KB_REFRESH === '1';

    if (!forceRefresh && await cacheExists(cacheFile)) {
      const fresh = await isCacheFresh(cacheFile);
      try {
        const parsed = JSON.parse(await fs.readFile(cacheFile, 'utf-8'));
        if (!fresh) this.#revalidateInBackground(relPath, cacheFile, { json: true });
        return parsed;
      } catch { /* corrupt — re-download */ }
    }

    try {
      const text = await this.#getObjectText(relPath);
      await this.#persistJsonCache(cacheFile, text);
      return JSON.parse(text);
    } catch {
      return null;
    }
  }

  async getVersion() {
    try {
      return await this.#loadCachedJson('index/version.json', 'version.json');
    } catch {
      return null;
    }
  }

  async loadIndexWrapper() {
    const cacheFile = path.join(this.cacheDir, 'search_index.json');
    const relPath = 'index/search_index.json';
    const forceRefresh = process.env.CDS_KB_REFRESH === '1';

    let upstreamVersion = null;
    let cachedVersion = null;
    if (!forceRefresh) {
      upstreamVersion = await this.getVersion();
      try {
        cachedVersion = JSON.parse(await fs.readFile(path.join(this.cacheDir, 'version.json'), 'utf-8'));
      } catch { cachedVersion = null; }
    }

    const cacheHasIndex = await cacheExists(cacheFile);
    const versionsMatch = !!(upstreamVersion && cachedVersion
      && upstreamVersion.commit === cachedVersion.commit
      && upstreamVersion.schemaVersion === cachedVersion.schemaVersion);

    if (!forceRefresh && cacheHasIndex) {
      if (versionsMatch) {
        try {
          return JSON.parse(await fs.readFile(cacheFile, 'utf-8'));
        } catch {
          logWarn('S3 index cache corrupt despite version match, re-downloading', {});
        }
      } else if (!upstreamVersion) {
        const fresh = await isCacheFresh(cacheFile);
        try {
          const parsed = JSON.parse(await fs.readFile(cacheFile, 'utf-8'));
          if (!fresh) {
            logWarn('S3 index cache stale, serving from cache + revalidating in background', {});
            this.#revalidateInBackground(relPath, cacheFile, { json: true });
          }
          return parsed;
        } catch {
          logWarn('S3 index cache corrupt, re-downloading', {});
        }
      } else {
        logWarn('S3 upstream commit differs from cached — refreshing index', { upstream: String(upstreamVersion.commit || '').slice(0, 8) });
      }
    }

    const text = await this.#getObjectText(relPath);
    await this.#persistJsonCache(cacheFile, text);
    if (upstreamVersion) {
      try {
        await atomicWriteFile(path.join(this.cacheDir, 'version.json'), JSON.stringify(upstreamVersion));
      } catch { /* ignore */ }
    }
    return JSON.parse(text);
  }

  async #loadPathMap() {
    const parsed = await this.#loadCachedJson('index/view-paths.json', 'view-paths.json');
    if (parsed) return parsed;
    try {
      await atomicWriteFile(path.join(this.cacheDir, 'view-paths.json'), '{}');
    } catch { /* ignore */ }
    return null;
  }

  async getView(name) {
    const safe = path.basename(name).replace(/\.md$/i, '').toUpperCase();
    const pathMap = await this.#loadPathMap();
    const relPath = (pathMap && pathMap[safe]) || `views/${safe}.md`;
    const cacheFile = path.join(this.cacheDir, relPath);

    if (await cacheExists(cacheFile)) {
      const md = await fs.readFile(cacheFile, 'utf-8');
      if (!(await isCacheFresh(cacheFile))) {
        this.#revalidateInBackground(relPath, cacheFile);
      }
      return md;
    }
    const text = await this.#getObjectText(relPath);
    await atomicWriteFile(cacheFile, text);
    return text;
  }

  async getViewSections(name, sections) {
    const md = await this.getView(name);
    return filterSections(md, sections);
  }

  async getTaxonomy() {
    return this.#loadCachedJson('index/taxonomy.json', 'taxonomy.json');
  }

  async getFieldIndex() {
    return this.#loadCachedJson('index/field-index.json', 'field-index.json');
  }

  async getTableIndex() {
    return this.#loadCachedJson('index/table-index.json', 'table-index.json');
  }

  async getRawFieldIndex() {
    return this.#loadCachedJson('index/raw-field-index.json', 'raw-field-index.json');
  }

  async getEmbeddings() {
    return this.#loadCachedJson('index/embeddings.json', 'embeddings.json');
  }

  async getQueryLibrary() {
    return this.#loadCachedJson('index/query-library.json', 'query-library.json');
  }

  async getChangelog() {
    return this.#loadCachedJson('changelog.json', 'changelog.json');
  }
}

// ── Resolver ────────────────────────────────────────────────────────────────
// Precedence: --data / CDS_KB_DATA → s3Configured() → --remote / CDS_KB_REMOTE →
// sibling harness folder docs/product/cds_kb_data → default GitHub remote.
export function resolveDataSource(argv = process.argv.slice(2)) {
  const getFlag = (name) => {
    const i = argv.indexOf(name);
    return i !== -1 ? argv[i + 1] : undefined;
  };
  const dataPath = getFlag('--data') || process.env.CDS_KB_DATA;
  if (dataPath) return new LocalDataSource(dataPath);

  if (s3Configured()) return new S3DataSource();

  const remote = getFlag('--remote') || process.env.CDS_KB_REMOTE;
  if (remote) return new RemoteDataSource(remote);

  const sibling = resolveSiblingDataDir();
  if (sibling) return new LocalDataSource(sibling);

  const defaultRemote = 'https://raw.githubusercontent.com/StormShynn/cds-kb-mcp-data-kit/main/docs/product/cds_kb_data';
  return new RemoteDataSource(defaultRemote);
}

// Export for server use
export { SECTION_NAMES };
