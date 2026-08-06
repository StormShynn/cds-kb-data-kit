# Connecting a new consumer to this repo

Guide for hooking up a *different* MCP server (or any other tool) to this
data — not `cds-kb-mcp-kit` specifically, which already has its own reader
(`src/datasource.mjs`) and just needs the setup in its own README. This is
for anyone else who wants to read `views/`/`index/` directly.

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

A working reference implementation already exists: `cds-kb-mcp-kit`'s
`src/datasource.mjs` (`RemoteDataSource` class) — same auth pattern, plus
ETag caching and retry/backoff. Worth reading even if the new consumer isn't
Node.js, just to see the request shape and caching strategy.

## 3. What's actually in here

| Path | Format | Use it for |
|---|---|---|
| `index/version.json` | `{schemaVersion, commit, builtAt, viewCount, enrichedCount}` | Cheap poll (~200 bytes) — compare `commit` to the last one you saw before fetching anything bigger |
| `index/view-paths.json` | `{ "NAME": "views/<MODULE>/.../NAME.md", ... }` | Look up a view's real file path by name |
| `index/taxonomy.json` | LoB → Business Object → keyword map | Business-domain categorization; plain JSON, language-agnostic |
| `index/search_index.json` | Serialized [MiniSearch](https://github.com/lucaong/minisearch) index | **Only useful from Node.js with the `minisearch` package.** In any other stack, ignore this file and build your own index from the `.md` frontmatter instead (see §4) |
| `views/<MODULE>/.../<NAME>.md` | YAML frontmatter + Markdown body | The actual view: name, description, tags, app_component, release_state, fields, associations, and DDL source when available. Nested one folder per app_component segment — depth varies per view, always resolve via view-paths.json |

## 4. Not using Node.js / MiniSearch?

Don't try to parse `search_index.json` — it's a MiniSearch-internal
serialization, not a generic format. Instead:

1. Fetch `index/view-paths.json` once — it's the full list of view names and
   where each one lives.
2. Fetch each `views/<MODULE>/.../<NAME>.md` (cache these — see §5), parse the
   YAML frontmatter block between the first two `---` lines yourself
   (`name`, `description`, `app_component`, `release_state`, `tags`).
3. Build whatever search/index structure your own stack already has good
   tools for (SQLite FTS5, Elasticsearch, a simple in-memory keyword map —
   whatever fits). There's nothing MiniSearch-specific about the *data*,
   only about that one pre-built file.

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
  doesn't expose DDL publicly at all.
- **`release_state: unverified` means "name-matched, never SAP-confirmed."**
  These live under `views/_UNVERIFIED/` regardless of module. Surface this
  distinction in whatever UI/response the new consumer builds — don't
  present an unverified entry with the same confidence as a Hub-confirmed
  `released` one.
- **A view's folder can change.** `app_component` gets corrected by hand
  sometimes (see the main README's "Fixing a wrong `app_component` by hand"),
  which moves the file. Look views up by name via `view-paths.json`, never
  by assuming a fixed path.
