# Execution Plan: Query library contribution + seeding + shape telemetry

Date: 2026-08-13

## Status

Completed

## Outcome

Richer, still-curated sample-query pipeline: Propose from Query Builder, offline
usage/catalog seeding, and opt-in anonymous query-shape telemetry. Shared library
remains PR-/Issue-reviewed (never silent auto-merge).

## Result

- Query Builder: Propose + Export local saves; opt-in shape checkbox
- Issue template: `.github/ISSUE_TEMPLATE/query-library-proposal.yml`
- MCP propose path fixed (`CDS_KB_PROPOSE_PATH`, default monorepo path)
- Seed script + `query-proposals.json`; promoted 10 starters → library now 14; `DATA.L` synced
- Worker `/ping-shapes` + `/shape-totals` + CORS; MCP `recordQueryShape`; pull script
- Validation: `buildQueryShape` privacy check passed; embed sync verified (14 entries)

## Follow-up

- Redeploy usage worker for shape endpoints to go live
- Set `CDS_KB_SHAPE_TELEMETRY=1` on MCP instances that should report shapes
- Review remaining entries in `query-proposals.json` before further promotes
