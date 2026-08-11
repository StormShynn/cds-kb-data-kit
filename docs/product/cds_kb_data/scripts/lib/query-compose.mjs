// scripts/lib/query-compose.mjs — shared OpenSQL + CDS skeleton builders.
// Used by cds_kb_mcp (import) and generate-query-builder.mjs (injected into HTML).
// Keep in sync with Query Builder save/share JSON shape.

/**
 * @typedef {{ alias?: string, name?: string|null, joinType?: string|null, on?: string|null, mode?: 'join'|'assoc'|null, raw?: string|null }} ComposeView
 * @typedef {{
 *   title?: string,
 *   description?: string,
 *   views?: ComposeView[],
 *   select?: string,
 *   where?: string,
 *   groupBy?: string,
 *   having?: string,
 *   orderBy?: string,
 *   viewName?: string,
 * }} ComposeQueryInput
 */

/**
 * @param {ComposeView[]} views
 * @returns {string[]}
 */
export function fromClauseLines(views) {
  const list = Array.isArray(views) ? views : [];
  const hasManualJoin = list.some((v, i) => i > 0 && v?.name && v.mode !== 'assoc' && !(v.raw && String(v.raw).trim()));
  return list.map((v, i) => {
    if (!v) return null;
    if (i === 0) {
      if (!v.name) return null;
      return 'FROM ' + v.name + (hasManualJoin && v.alias ? ' AS ' + v.alias : '');
    }
    if (v.mode === 'assoc') return null;
    if (v.raw != null && String(v.raw).trim()) return String(v.raw).trim();
    if (!v.name) return null;
    const jt = v.joinType || 'INNER JOIN';
    const alias = v.alias || ('t' + (i + 1));
    const on = (v.on || '').trim() || '<join condition>';
    return jt + ' ' + v.name + ' AS ' + alias + ' ON ' + on;
  }).filter(Boolean);
}

/**
 * @param {ComposeQueryInput} q
 * @returns {{ openSql: string, cdsView: string, warnings: string[] }}
 */
export function composeQuery(q = {}) {
  const warnings = [];
  const views = Array.isArray(q.views) ? q.views : [];
  if (!views.length || !views[0]?.name) {
    return { openSql: '', cdsView: '', warnings: ['compose_query needs views[0].name (the FROM view).'] };
  }

  for (const [i, v] of views.entries()) {
    if (i === 0) continue;
    if (v.mode === 'assoc' && !v.name && !v.alias) {
      warnings.push(`views[${i}]: association row missing name/alias`);
    }
    if (v.mode !== 'assoc' && !v.name && !(v.raw && String(v.raw).trim())) {
      warnings.push(`views[${i}]: join row missing name or raw join line`);
    }
  }

  const selectText = (q.select && String(q.select).trim()) || '*';
  const whereText = (q.where && String(q.where).trim()) || '';
  const groupText = (q.groupBy && String(q.groupBy).trim()) || '';
  const havingText = (q.having && String(q.having).trim()) || '';
  const orderText = (q.orderBy && String(q.orderBy).trim()) || '';

  const fromLines = fromClauseLines(views);
  const sqlLines = ['SELECT', '  ' + selectText, ...fromLines];
  if (whereText) sqlLines.push('WHERE\n  ' + whereText);
  if (groupText) sqlLines.push('GROUP BY ' + groupText);
  if (havingText) sqlLines.push('HAVING\n  ' + havingText);
  if (orderText) sqlLines.push('ORDER BY ' + orderText);

  const viewName = (q.viewName && String(q.viewName).trim()) || 'Z_MyView';
  const cdsFrom = fromLines.length
    ? ['as select from ' + fromLines[0].replace(/^FROM /, '')].concat(fromLines.slice(1))
    : ['as select from ' + views[0].name];
  const elementsText = selectText;
  const cdsLines = [
    'define view entity ' + viewName,
    '  ' + cdsFrom.join('\n  '),
    '{',
    '  ' + elementsText,
    '}',
  ];
  if (whereText) cdsLines.push('where ' + whereText);
  if (groupText) cdsLines.push('group by ' + groupText);
  if (havingText) cdsLines.push('having ' + havingText);
  if (orderText) {
    cdsLines.push('-- "order by ' + orderText + '" omitted: not valid inside a CDS view definition');
    cdsLines.push('-- (views don\'t guarantee row order) — apply it in the consuming SELECT instead.');
  }

  return {
    openSql: sqlLines.join('\n'),
    cdsView: cdsLines.join('\n'),
    warnings,
  };
}
