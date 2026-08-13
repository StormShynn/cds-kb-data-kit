# Execution Plan: Activate dormant CDS KB features

Date: 2026-08-13

## Status

Completed

## Outcome

The three features that exist as code but are not yet operational become
usable:

1. **Hybrid vector search**: a CI workflow can build and commit
   `index/embeddings.json` whenever an embed API key exists (no-op without
   one), so `search_mode=hybrid` actually re-ranks.
2. **Usage ranking**: an optional workflow can deploy the usage-collector
   Cloudflare Worker, completing the operator path that feeds
   `index/usage-stats.json` into ranking.
3. **Query library**: the shared `index/query-library.json` becomes searchable
   from MCP via a new `search_query_library` tool and a `cds://query-library`
   resource, seeded with real entries so it is useful immediately.

## Context

- Product: `docs/product/cds_kb_data`, `docs/product/cds_kb_mcp`
- The README (`docs/product/cds_kb_mcp/README.md`) documents hybrid search and
  usage ranking as "not currently active" — dead code that falls back to BM25
  / a no-op boost.
- `index/query-library.json` is `[]` and no MCP surface reads it; W10
  `propose_query_library_entry` only produces snippets + draft PRs.
- Datasource layer (`src/datasource.mjs`) already has a generic
  disk-cache-with-revalidate pattern (`#loadCachedIndexFile` for Remote,
  `#loadCachedJson` for S3) — a `getQueryLibrary()` on each backend is the
  same shape as the existing `getEmbeddings()`.

## Scope

In scope:

- `.github/workflows/build-embeddings.yml` (scheduled + dispatch, no-op without
  secret, commits `index/embeddings.json` via the shared commit-and-push
  action).
- `.github/workflows/deploy-usage-worker.yml` (dispatch-only, skips when no
  `CLOUDFLARE_API_TOKEN`, runs `wrangler deploy` in the worker dir).
- `getQueryLibrary()` on Local/Remote/S3 data sources.
- `search_query_library` MCP tool + `cds://query-library` resource; server
  version bump to 2.3.0.
- Seed `index/query-library.json` with real, loadable entries and hand-patch
  `query-builder.html` (the source of truth) so the shared library count
  reflects them — the generator script is stale and must not be run.
- `test_tools.mjs` smoke test for the new tool; README updates (tools count,
  tool reference, resources, hybrid + usage sections).
- Rebuild `dist/cds-kb-mcp.cjs`.

Out of scope:

- Actually generating `embeddings.json` locally (requires a paid embed API key
  not available in this environment) — the workflow does it once the secret is
  set in the repo.
- Deploying the Worker / setting GitHub secrets (requires Cloudflare + GitHub
  credentials) — automation and docs only, reported as operator follow-ups.
- Enrichment coverage rate (separate `enrich-descriptions.yml` concern).

## Approach

Implement in three independent groups, then validate:

1. Workflows: `build-embeddings.yml` (mirror `pull-usage-stats.yml` structure)
   and `deploy-usage-worker.yml` (mirror the opt-in/skip-when-no-secret
   pattern of `enrich-descriptions.yml`).
2. Datasource + server: `getQueryLibrary()` on all three backends; load it in
   `loadIndex()`; register `search_query_library` (tokenized, accent-insensitive
   ranking over title/description/view names) and the static
   `cds://query-library` resource; bump `SERVER_VERSION`.
3. Content + docs + proof: seed `query-library.json` with entries whose view
   names resolve in `index/view-paths.json`; hand-patch `query-builder.html`'s
   embedded `DATA.L` array + stats line (the generator script has fallen ~838
   lines behind and regeneration would delete hand-edited features, so this
   file is edited directly); add a smoke test; update README; rebuild `dist`.

## Risks And Recovery

- `query-library.json` seeding could use field names not present in a view —
  mitigated by copying field names verified from the view markdown files.
- A new tool changes the tools/list surface and bundle size — covered by
  `npm test` (smoke tools) and `npm run build`; revert = `git checkout` the
  touched files.
- New workflows could fail to parse — validated with a YAML lint before merge;
  both are opt-in no-ops without secrets, so a misconfigured repo degrades to
  "nothing happens", not breakage.

## Progress

- [x] Durable plan file under `docs/plans/active/`
- [x] `build-embeddings.yml` + README hybrid section
- [x] `deploy-usage-worker.yml` + README usage touch-up
- [x] `getQueryLibrary()` on Local/Remote/S3
- [x] `search_query_library` tool + `cds://query-library` resource + version bump
- [x] Seed `query-library.json` + hand-patch `query-builder.html`
- [x] `test_tools.mjs` TEST 15 + README tools/resources updates
- [x] Validate (build, tests, YAML); move plan to completed

## Decisions

- 2026-08-13: Seed the empty query library with four verified entries so the
  new tool is useful on first deploy rather than returning an empty list.
- 2026-08-13: Keep the new tool dependency-free (no MiniSearch instance for a
  small curated list) — rank with normalized token overlap like the page does.

## Validation

- Focused proof: `npm test` in `docs/product/cds_kb_mcp` (includes new TEST 15),
  `npm run build` produces `dist/cds-kb-mcp.cjs`.
- Integration: hand-patched `query-builder.html` parses — its embedded
  `DATA.L` array is identical to `index/query-library.json`; seeded entries
  resolve against `index/view-paths.json`.
- Repository-required checks: YAML lint of the two new workflows; `git diff`
  review of README/tools surfaces.

## Result

Verified outcome:

- `build-embeddings.yml` (weekly Sun 06:00 + `workflow_dispatch`) and
  `deploy-usage-worker.yml` (dispatch-only) added; both are opt-in no-ops
  without secrets (exit 0), YAML-linted OK.
- MCP server 2.2.0 → 2.3.0: `getQueryLibrary()` on Local/Remote/S3,
  `search_query_library` tool (13th) + `cds://query-library` resource, `dist`
  rebuilt, `package.json` bumped.
- `index/query-library.json` seeded with 4 entries whose view names and fields
  resolve in `index/view-paths.json`; `query-builder.html` hand-patched (its
  embedded `DATA.L` parses to exactly those 4 entries; stats line updated) —
  the generator script was NOT run because it has fallen ~838 lines behind and
  would delete hand-edited features (commit `a3f3764c1` already stopped the
  deploy workflow from calling it).
- Proof: `npm test` in `cds_kb_mcp` passes all 15 tools (TEST 15 returns the
  "Open purchase orders" entry); `npm test` in `cds_kb_data` passes 21/21;
  `npm run build` OK; YAML lint OK.

Limitations:

- `index/embeddings.json` still not generated locally (no embed API key) and
  the usage Worker is not deployed — both are now one-command/one-workflow
  away, but require operator credentials.

Operator follow-ups (need credentials this environment does not have):

1. ~~Set `CDS_KB_EMBED_API_KEY` GitHub secret...~~ **Resolved differently**: embeddings
   are now generated **keyless** via the local ONNX model (`Xenova/all-MiniLM-L6-v2`)
   — `CDS_KB_EMBED_API_KEY` was never set and was deleted. `index/embeddings.json`
   (base64 Float32, ~21 MB) is generated+committed by `build-embeddings.yml`.
2. ~~Create a KV namespace, put its id in `wrangler.toml`...~~ **Resolved differently**:
   the user's commit rewrote the collector to a **Durable Object** (`USAGE_DO`), so no
   KV namespace is used (the one created provisionally was deleted). Deployed to
   `cds-kb-usage-collector.chinghia190399.workers.dev` via `deploy-usage-worker.yml`
   with `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` secrets.
3. **Done**: `CDS_KB_USAGE_ENDPOINT` and `CDS_KB_USAGE_PULL_TOKEN` are set (worker
   `PULL_TOKEN` + GitHub secret); `pull-usage-stats.yml` fetches counts into
   `index/usage-stats.json` and the usage ranking boost is live (`/totals` verified).