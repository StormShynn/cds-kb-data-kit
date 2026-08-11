# Connecting a new consumer to this repo

Guide for hooking up a *different* MCP server (or any other tool) to this
data — not `cds_kb_mcp` specifically, which already has its own reader
(`../cds_kb_mcp/src/datasource.mjs`) and, in this harness, auto-detects the
sibling `cds_kb_data` folder. This guide is for anyone else who wants to read
`views/`/`index/` directly.

## 1. Get access

This repo is **private**. Before any code, the owner needs to grant read
access — recommended way:

1. GitHub → this repo → **Settings → Developer settings → Personal access
   tokens → Fine-grained tokens** → generate one scoped to **only this
   repository**, permission **Contents: Read-only**. Nothing else.
2. Hand the **token value** to whoever's building the new consumer — not
   GitHub account credentials, and don't add them as a collaborator unless
   they genuinely need to push here too. A leaked read-only, single-repo
   token is a much smaller problem than a leaked collaborator invite.
3. Rotate it if it ever leaks (Settings → that token → Delete, issue a new one).

## 2. Fetching files: the GitHub Contents API

`raw.githubusercontent.com` **cannot authenticate at all** — it 404s on a
private repo no matter what headers you send. Use the Contents API instead:

```
GET https://api.github.com/repos/StormShynn/cds-kb-data/contents/<path>?ref=main
Authorization: Bearer <token>
Accept: application/vnd.github.raw+json
```

Quick test from a terminal:

```bash
curl -H "Authorization: Bearer <token>" \
     -H "Accept: application/vnd.github.raw+json" \
     "https://api.github.com/repos/StormShynn/cds-kb-data/contents/index/version.json?ref=main"
```

A working reference implementation already exists: `cds_kb_mcp`'s
`src/datasource.mjs` (`RemoteDataSource` / sibling auto-detect) — same auth
pattern, plus ETag caching and retry/backoff. Worth reading even if the new
consumer isn't Node.js, just to see the request shape and caching strategy.

### S3 / MinIO (tenant remotes)

`cds_kb_mcp` can also read the same layout from an S3-compatible bucket when
`CDS_KB_S3_BUCKET` + `CDS_KB_S3_ACCESS_KEY_ID` + `CDS_KB_S3_SECRET_ACCESS_KEY`
are set (optional `CDS_KB_S3_PREFIX`, `CDS_KB_S3_REGION`, `CDS_KB_S3_ENDPOINT`,
`CDS_KB_S3_FORCE_PATH_STYLE=true` for MinIO). Objects mirror the repo layout
(`index/search_index.json`, `views/...`). See `S3DataSource` in
`../cds_kb_mcp/src/datasource.mjs`. Local `--data` / `CDS_KB_DATA` still wins.

Optional `index/embeddings.json` (built by `scripts/build-embeddings.mjs` when
`CDS_KB_EMBED_API_KEY` is set) enables hybrid search in the MCP.

## 3. What's actually in here

| Path | Format | Use it for |
|---|---|---|
| `index/version.json` | `{schemaVersion, commit, builtAt, viewCount, enrichedCount}` | Cheap poll (~200 bytes) — compare `commit` to the last one you saw before fetching anything bigger |
| `index/view-paths.json` | `{ "NAME": "views/<MODULE>/.../NAME.md", ... }` | Look up a view's real file path by name |
| `index/taxonomy.json` | LoB → Business Object → keyword map, plus `viKeywords` (per lob/bo tag) and `viModuleKeywords` (per module code) Vietnamese synonyms | Business-domain categorization; plain JSON, language-agnostic — the Vietnamese maps are what make "đơn mua hàng" find purchase-order views |
| `index/search_index.json` | Serialized [MiniSearch](https://github.com/lucaong/minisearch) index | **Only useful from Node.js with the `minisearch` package.** In any other stack, use `index/search.db` instead (see §4) |
| `index/search.db` | SQLite FTS5 database (built by `scripts/build-sqlite-index.mjs`) | Plain SQL, any language with an SQLite driver — no MiniSearch dependency. See §4 |
| `views/<MODULE>/.../<NAME>.md` | YAML frontmatter + Markdown body | The actual view: name, description, tags, app_component, release_state, fields, associations, and DDL source when available. Nested one folder per app_component segment — depth varies per view, always resolve via view-paths.json |
| `overlays/private/**/*.md` | Same markdown shape as `views/` | Optional **local private overlay** (customer Z*/Y*). Merged by `enrich_index.mjs` (env `CDS_KB_OVERLAY` overrides the folder). Same view name → **private wins**. Paths land in `view-paths.json` with an `overlays/private/...` prefix; indexed docs carry `sourceKind: "private"`. Do not commit secrets |

> **Vietnamese search needs an accent-stripping `processTerm`.**
> `search_index.json` is built with normalized (diacritic-stripped) terms, so
> "đơn mua hàng", "don mua hang" and "đơn mua hang" all match the same
> documents. `processTerm` is a function, so it is **not** serialized into the
> index — every MiniSearch consumer must pass its own when loading:
>
> ```js
> const RE = /[\u0300-\u036f]/g;
> const mini = MiniSearch.loadJSON(data.minisearch, {
>   ...data.options,
>   processTerm: (t) => t.normalize('NFD').replace(/đ/gi, 'd').replace(RE, '').toLowerCase()
> });
> ```
>
> Without it, accented queries return no matches (the index only contains
> stripped terms); unaccented queries still work. `search.html` embeds this
> same copy — keep consumers in sync if it ever changes.

## 4. Not using Node.js / MiniSearch?

Don't try to parse `search_index.json` — it's a MiniSearch-internal
serialization, not a generic format. Use `index/search.db` instead: a plain
SQLite database, rebuilt from `search_index.json` on every `enrich_index.mjs`
run (see `scripts/build-sqlite-index.mjs`). Schema v2:

```sql
CREATE TABLE views (
  id INTEGER PRIMARY KEY, name TEXT, path TEXT, description TEXT,
  semanticDescription TEXT, module TEXT, lob TEXT, bo TEXT,
  appComponent TEXT, synonyms TEXT, usageCount INTEGER,
  releaseState TEXT, sourceUrl TEXT  -- sourceUrl: recorded fetch-time link
);
CREATE VIRTUAL TABLE views_fts USING fts5(
  name, semanticDescription, description, synonyms, appComponent,
  content='views', content_rowid='id'
);
CREATE TABLE fields (
  view_id INTEGER REFERENCES views(id), name TEXT, is_key INTEGER,
  source TEXT, type TEXT, description TEXT
);  -- per-view field rows, incl. the raw DDIC source column when known
CREATE TABLE associations (
  view_id INTEGER REFERENCES views(id), alias TEXT, target TEXT, cardinality TEXT
);  -- declared association aliases and their target views
```

Note: since schema v2 the file is ~26-27 MB (it carries the fields and
associations tables plus `source_url`, not just the FTS index; Vietnamese
module synonyms added per view grow it a little more with each taxonomy
expansion) — budget accordingly if you re-download it on every refresh.

Query it with plain SQL, from any language with an SQLite driver:

```sql
-- full-text, same as before:
SELECT v.name, v.path, v.module, bm25(views_fts) AS score
FROM views_fts
JOIN views v ON v.id = views_fts.rowid
WHERE views_fts MATCH 'purchase order' AND v.module = 'MM'
ORDER BY score
LIMIT 10;

-- which views expose a semantic field (e.g. Material), plus their source link:
SELECT v.name, v.path, v.sourceUrl
FROM fields f JOIN views v ON v.id = f.view_id
WHERE f.name = 'Material'
LIMIT 10;

-- which views route a raw DDIC column (lowercase, e.g. vwerk) through a field:
SELECT v.name, f.name AS semantic_field
FROM fields f JOIN views v ON v.id = f.view_id
WHERE f.source = 'vwerk'
LIMIT 10;

-- which views associate to I_CompanyCode:
SELECT v.name, a.alias, a.cardinality
FROM associations a JOIN views v ON v.id = a.view_id
WHERE a.target = 'I_CompanyCode'
LIMIT 10;
```

`path` is relative to the data repo root — resolve it the same way as any
other consumer (`views/<MODULE>/.../<NAME>.md`, fetched via the Contents API
per §2). If you need per-field/table reverse lookups too, `field-index.json`,
`table-index.json`, and `raw-field-index.json` are already plain JSON —
no MiniSearch involved in those at all.

If you'd rather not depend on this repo's build script, the fallback is
still available: fetch `index/view-paths.json`, fetch each view `.md` and
parse its YAML frontmatter yourself, and build whatever index structure
fits your stack (Elasticsearch, a simple in-memory keyword map, etc.).

## 5. Be a good citizen

- **Cache, and use conditional requests.** Send `If-None-Match: <etag>` from
  a previous response; a `304 Not Found` costs nothing on both sides
  compared to a full re-download.
- **Poll `version.json`, not the big files.** New views land roughly daily
  (`daily-fetch.yml`) plus a slower Hub-confirmed trickle
  (`hub-metadata-fetch.yml`) — polling every few minutes is harmless (it's
  tiny), but there's no reason to re-fetch `search_index.json` or re-walk
  every view file that often. Only do the expensive refresh when `commit`
  actually changed.
- **Respect GitHub's API rate limit** — 5,000 requests/hour for an
  authenticated token. Fetching individual view files one-by-one for all
  ~7,400 views would burn a meaningful chunk of that; prefer caching what
  you've already fetched over re-fetching on every request.

## 6. Known gaps to design around

- **Not every view has DDL source.** A `metadata-only` tag (or an empty
  `## Source Code` section) means only field names/types are known — no
  ABAP source, because the SAP Hub catalog this data partly comes from
  doesn't expose DDL publicly at all. After `enrich_index.mjs`, MiniSearch
  `storeFields` expose this as `hasDdl` / `metadataOnly` (MCP `kb_info`
  summarizes the counts; `get_cds_view` can append an **Index RAP facets**
  block).
- **RAP / completeness signals in the index.** `enrich_index.mjs` also
  stores `accessControl`, `vdmViewType`, `sourceKind`, `isAbstract`,
  `isMasterData`, `usageCount`, and `referencedByCount` on each doc.
  Consumers that load `search_index.json` should treat missing fields as
  older indexes (re-run enrich). Enrichment % (`enrichedCount` /
  `viewCount`) rises only when semantic-description workflows have run
  with configured secrets — missing keys leave ranking functional but
  popularity/`usageCount` at 0 (no-op).
- **Private overlay is local-first.** Drop Z*/Y* markdown under
  `overlays/private/` (see that folder’s README), rebuild the index, point
  MCP at the local tree. Do not push customer DDL to a public remote.
- **`release_state: unverified` means "name-matched, never SAP-confirmed."**
  These live under `views/_UNVERIFIED/` regardless of module. Surface this
  distinction in whatever UI/response the new consumer builds — don't
  present an unverified entry with the same confidence as a Hub-confirmed
  `released` one.
- **A view's folder can change.** `app_component` gets corrected by hand
  sometimes (see the main README's "Fixing a wrong `app_component` by hand"),
  which moves the file. Look views up by name via `view-paths.json`, never
  by assuming a fixed path.
