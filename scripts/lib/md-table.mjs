// scripts/lib/md-table.mjs
// Reads the "## Fields" / "## Associations" markdown table under a view's
// body, if any — used both to power coverage-report.html's expandable field
// list (view-fields.js) and to build the field-name reverse index
// (index/field-index.json), both derived from enrich_index.mjs's single
// pass over every view file.
//
// Line-scanned rather than regex-matched across the whole body: a single
// regex trying to bound "everything up to the next heading" is easy to get
// wrong across the two different table shapes template.mjs can emit (see
// its renderFieldsTable) plus the trailing ```abap block some views have
// right after Associations.
export function parseMdTable(content, heading) {
  const lines = content.split(/\r?\n/);
  const headingIdx = lines.findIndex((l) => l.trim() === `## ${heading}`);
  if (headingIdx === -1) return null;

  const tableLines = [];
  for (let i = headingIdx + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('|')) tableLines.push(line.trim());
    else if (tableLines.length > 0) break;
    else if (line.trim() !== '') break;
  }
  if (tableLines.length < 2) return null;

  const cells = (line) => line.split('|').slice(1, -1).map((s) => s.trim().replace(/`/g, ''));
  return { header: cells(tableLines[0]), rows: tableLines.slice(2).map(cells) };
}
