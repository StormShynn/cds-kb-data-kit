# Execution Plan: CDS KB W1–W4 upgrade (W3a overlay)

Date: 2026-08-11

## Status

Completed

## Outcome

Agents can discover → compose → generate → validate CDS view DDL via MCP against a public catalog, with optional local private overlay for customer Z/Y views, plus stronger search/ranking signals from RAP annotations, enrichment completeness, and usage stats (when secrets exist).

## Context

- Product: `docs/product/cds_kb_data`, `docs/product/cds_kb_mcp`
- Locked: W3a local overlay only; compose ported into MCP (no Query Builder HTML refactor); validate via `@abaplint/core`; no mass LLM without secrets

## Scope

In scope:

- W1–W2 MCP tools + tests + README
- W3a overlay + enrich_index merge + kb_info + CONNECTING/auth docs
- W4 RAP facets + completeness + usage wiring docs

Out of scope:

- W3b multi-tenant object store / in-process XSUAA
- Auto-publish into live SAP
- Shared compose module refactor of Query Builder HTML

## Approach

Implemented wave-by-wave: W1 suggest/compose → W2 generate/validate → W3a overlay → W4 signals.

## Risks And Recovery

- Compose drift from Query Builder: keep JSON shape; HTML share later
- abaplint soft diagnostics: never crash MCP
- Overlay private-wins on name collision; log on rebuild
- Missing secrets: W4 code/docs complete, enrichment % rises only when workflows run

## Progress

- [x] Durable plan file under `docs/plans/active/`
- [x] W1: `suggest_base_views` + `compose_query` + tests + README + dist
- [x] W2: `generate_cds_view` + `validate_cds_ddl` + abaplint + tests
- [x] W3a: overlay scan in enrich_index + kb_info + CONNECTING docs
- [x] W4: RAP facets + completeness in kb_info + usage wiring docs
- [x] Wave validations; move plan to completed

## Decisions

- 2026-08-11: W3a local overlay (`overlays/private/`, env `CDS_KB_OVERLAY`)
- 2026-08-11: Port compose to `query-compose.mjs`; do not refactor Query Builder HTML in this plan

## Validation

- Focused proof: mcp `test_tools.mjs` tests 1–11 exit 0 (suggest/compose/generate/validate)
- Index rebuild: `viewCount=10618`, `privateOverlay: 1` (`Z_CDS_KB_OVERLAY_DEMO`), RAP completeness in `kb_info`
- Repository-required checks: data-test + mcp-test CI jobs (run on PR)

## Result

Shipped cds-kb-mcp **v1.4.0** with 11 tools. Data enrich_index merges `overlays/private` (private wins) and stores `sourceKind`, `accessControl`, `vdmViewType`, `hasDdl`, `metadataOnly`. Usage/LLM enrichment remain operator-gated via existing workflows/secrets. Follow-up: W3b object-store multi-tenant; share compose module with Query Builder HTML.
