# Execution Plan: CDS KB W3b–W10 upgrade

Date: 2026-08-12

## Status

Completed

## Outcome

S3-compatible tenant remotes + JWKS auth, VSP-to-overlay ingest, optional hybrid embeddings, RAP search filters, usage visibility, shared compose module, and propose_query_library_entry.

## Progress

- [x] Durable plan file
- [x] W3b S3 datasource + JWKS auth
- [x] W5 VSP `--overlay`
- [x] W6 optional embeddings + hybrid search
- [x] W7 RAP search filters
- [x] W8 usage kb_info + docs
- [x] W9 shared query-compose
- [x] W10 propose_query_library_entry
- [x] Validate; move plan to completed

## Result

Implemented W3b–W10 in `cds_kb_mcp` 1.5.0 and related data scripts.

- W3b: `S3DataSource` + `s3Configured()`, JWKS/`API_KEY` via `auth.mjs`, deps `@aws-sdk/client-s3` + `jose`
- W5: `apply_vsp_ddl.mjs --overlay` + `run-vsp-batch.mjs --overlay` (keeps Z*)
- W6: `build-embeddings.mjs`; hybrid `search_mode` when embeddings + embed API key present
- W7: RAP filters on `search_cds` / `suggest_base_views`
- W8: `kb_info` reports embeddings / usageEndpoint / usageStatsConfigured / privateOverlay
- W9: query-compose injected into Query Builder; `composeFromSavedObject`
- W10: `propose_query_library_entry` (local snippet + optional draft PR)

Validation: `npm install && npm run build && npm test` in `docs/product/cds_kb_mcp` → exit 0. `npm run generate-query-builder` in data package → exit 0.
