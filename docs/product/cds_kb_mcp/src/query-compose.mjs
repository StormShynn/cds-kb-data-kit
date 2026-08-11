// Re-export shared compose from the data package (harness monorepo).
// esbuild bundles this into dist/cds-kb-mcp.cjs.
export { fromClauseLines, composeQuery } from '../../cds_kb_data/scripts/lib/query-compose.mjs';
