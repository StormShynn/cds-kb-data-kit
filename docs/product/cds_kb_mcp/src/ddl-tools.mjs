// ddl-tools.mjs — generate a CDS view-entity skeleton and validate DDL
// with @abaplint/core (same CDSParser the data repo's cross-check uses).
// Soft diagnostics only — never throws for "invalid" DDL.

import { composeQuery } from './query-compose.mjs';

/**
 * @param {{
 *   name?: string,
 *   label?: string,
 *   accessControl?: string,
 *   views?: import('./query-compose.mjs').ComposeView[],
 *   select?: string,
 *   where?: string,
 *   groupBy?: string,
 *   having?: string,
 *   orderBy?: string,
 *   baseView?: string,
 * }} input
 */
export function generateCdsView(input = {}) {
  const name = (input.name && String(input.name).trim()) || 'Z_MyView';
  const label = (input.label && String(input.label).trim()) || name;
  const access = (input.accessControl && String(input.accessControl).trim()) || '#CHECK';

  let views = Array.isArray(input.views) ? input.views : [];
  if ((!views.length || !views[0]?.name) && input.baseView) {
    views = [{ alias: 't1', name: String(input.baseView).trim(), joinType: null, on: null }];
  }

  const composed = composeQuery({
    viewName: name,
    views,
    select: input.select,
    where: input.where,
    groupBy: input.groupBy,
    having: input.having,
    orderBy: input.orderBy,
  });

  const warnings = [...composed.warnings];
  if (!views.length || !views[0]?.name) {
    warnings.push('generate_cds_view needs baseView or views[0].name');
  }

  const header = [
    '@AccessControl.authorizationCheck: ' + access,
    "@EndUserText.label: '" + label.replace(/'/g, "''") + "'",
    '',
  ].join('\n');

  // composeQuery already emits "define view entity Name …" — prepend annotations.
  let body = composed.cdsView || '';
  if (body && !/^@/m.test(body.split('\n')[0] || '')) {
    body = header + body;
  } else if (!body) {
    body = header +
      'define view entity ' + name + '\n' +
      '  as select from ' + (input.baseView || '<BaseView>') + '\n' +
      '{\n  *\n}';
  }

  return { ddl: body, openSql: composed.openSql, warnings };
}

/**
 * Validate CDS DDL via abaplint CDSParser.
 * @param {string} ddl
 * @returns {Promise<{ ok: boolean, parsed: boolean, name: string, diagnostics: string[], fieldCount: number, assocCount: number }>}
 */
export async function validateCdsDdl(ddl) {
  const text = (ddl || '').trim();
  const diagnostics = [];
  if (!text) {
    return { ok: false, parsed: false, name: '', diagnostics: ['Empty DDL'], fieldCount: 0, assocCount: 0 };
  }

  let CDSParser;
  let MemoryFile;
  let E;
  try {
    const core = await import('@abaplint/core');
    CDSParser = core.CDSParser;
    MemoryFile = core.MemoryFile;
    E = core.ExpressionsCDS;
  } catch (e) {
    return {
      ok: false,
      parsed: false,
      name: '',
      diagnostics: ['@abaplint/core is not installed: ' + (e.message || e)],
      fieldCount: 0,
      assocCount: 0,
    };
  }

  let node;
  try {
    node = new CDSParser().parse(new MemoryFile('view.asddls', text));
  } catch (e) {
    return {
      ok: false,
      parsed: false,
      name: '',
      diagnostics: ['abaplint threw: ' + (e.message || String(e))],
      fieldCount: 0,
      assocCount: 0,
    };
  }

  if (!node) {
    diagnostics.push('abaplint CDSParser returned null — DDL may be incomplete or use a construct outside the grammar sample set.');
    // Soft: still report a best-effort name from text
    const m = text.match(/define\s+(?:root\s+)?(?:abstract\s+)?(?:view\s+(?:entity\s+)?)?(\w+)/i);
    return { ok: false, parsed: false, name: m?.[1] || '', diagnostics, fieldCount: 0, assocCount: 0 };
  }

  const nameNode = node.findDirectExpression?.(E.CDSName);
  const name = nameNode ? nameNode.concatTokens().toUpperCase() : '';

  // Light structural counts — best-effort walk (same idea as the data-repo cross-check).
  let fieldCount = 0;
  let assocCount = 0;
  try {
    const walk = (n) => {
      for (const c of n.getChildren?.() || []) {
        const ctor = c.get?.()?.constructor?.name || '';
        if (ctor.includes('CDSAssociation') || /association/i.test(c.concatTokens?.() || '')) assocCount++;
        if (ctor.includes('CDSElement') || ctor.includes('CDSAs')) fieldCount++;
        walk(c);
      }
    };
    walk(node);
  } catch {
    /* counts are informational */
  }

  if (!name) diagnostics.push('Parsed AST but could not extract view name (CDSName).');
  if (!/define\s+/i.test(text)) diagnostics.push('No "define …" keyword found in text (unexpected if parse succeeded).');

  return {
    ok: diagnostics.length === 0,
    parsed: true,
    name,
    diagnostics,
    fieldCount,
    assocCount,
  };
}
