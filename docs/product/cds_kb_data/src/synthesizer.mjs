// src/synthesizer.mjs
// Generate semantic descriptions for CDS views by heuristic-based synthesis:
// derives descriptions from DDL annotations, field names, and associations.
//
// Usage:
//   import { synthesizeView } from './src/synthesizer.mjs';
//   const enriched = await synthesizeView(ddlSource, { name: 'I_PurchaseOrder' });

import { parseDDL } from './parser.mjs';

// ── Heuristic description synthesis ─────────────────────────────────────────

/**
 * Synthesize an English business description purely from DDL analysis (no AI).
 * Uses annotations, field names, source table, and associations to infer meaning.
 *
 * @param {object} view - Parsed view data (from parseDDL)
 * @param {object} [options]
 * @param {string[]} [options.additionalKeywords] - Extra keywords to incorporate
 * @returns {object} { semantic_en, semantic_vi, keywords }
 */
export function synthesizeHeuristic(view, options = {}) {
  const label = view.label || view.name;
  const annotations = view.annotations || {};
  const name = view.name;

  // ── Determine view type description ──
  let viewTypeDesc = '';
  const vdmType = annotations.vdmViewType || '';
  if (vdmType === '#BASIC') viewTypeDesc = 'Basic CDS view';
  else if (vdmType === '#CONSUMPTION') viewTypeDesc = 'Consumption CDS view';
  else if (vdmType === '#COMPOSITE') viewTypeDesc = 'Composite CDS view';
  else if (name.startsWith('I_')) viewTypeDesc = 'Interface CDS view';
  else if (name.startsWith('C_')) viewTypeDesc = 'Consumption CDS view';
  else if (name.startsWith('D_')) viewTypeDesc = 'Data extraction view';
  else if (name.startsWith('E_')) viewTypeDesc = 'Extension CDS view';
  else viewTypeDesc = 'CDS view';

  // ── Derive data category ──
  let dataDesc = '';
  const dataClass = annotations.dataClass || '';
  const analyticsCat = annotations.analyticsDataCategory || '';
  if (analyticsCat === '#DIMENSION') dataDesc = ' (dimension/master data)';
  else if (analyticsCat === '#FACT') dataDesc = ' (transactional/fact data)';
  else if (dataClass === '#TRANSACTIONAL') dataDesc = ' (transactional data)';
  else if (dataClass === '#MASTER') dataDesc = ' (master data)';
  else if (dataClass === '#ORGANIZATIONAL') dataDesc = ' (organizational data)';
  else if (dataClass === '#CONFIGURATION') dataDesc = ' (configuration data)';

  // ── Source description ──
  const sourceDesc = view.sourceTable ? ` based on ${view.sourceTable}` : '';

  // ── Build English description ──
  const semantic_en = `${label} — ${viewTypeDesc}${dataDesc}${sourceDesc}.`;

  // ── Build Vietnamese description ──
  const vnTypeMap = {
    'Basic CDS view': 'CDS view cơ bản',
    'Consumption CDS view': 'CDS view tiêu dùng',
    'Composite CDS view': 'CDS view tổng hợp',
    'Interface CDS view': 'CDS view giao diện',
    'Data extraction view': 'CDS view trích xuất dữ liệu',
    'Extension CDS view': 'CDS view mở rộng',
    'CDS view': 'CDS view',
  };
  const vnType = vnTypeMap[viewTypeDesc] || 'CDS view';
  const semantic_vi = `${label} — ${vnType}${dataDesc} dựa trên ${view.sourceTable || label}.`;

  // ── Extract keywords ──
  const keywords = [];
  // Business terms from label/name
  const labelWords = label.replace(/[_-]/g, ' ').split(/\s+/);
  for (const word of labelWords) {
    if (word.length > 2 && !/^(I_|C_|D_|E_|API\d*|CDS|View)$/i.test(word)) {
      keywords.push(word.toLowerCase());
    }
  }

  // Add field-derived keywords (pick top meaningful field names)
  const fieldWords = new Set();
  for (const f of (view.fields || []).slice(0, 5)) {
    const parts = f.name.split(/(?=[A-Z])/).map(w => w.toLowerCase());
    for (const p of parts) {
      if (p.length > 3 && !['with', 'from', 'this', 'that', 'key'].includes(p)) {
        fieldWords.add(p);
      }
    }
  }
  for (const w of fieldWords) {
    if (!keywords.includes(w)) keywords.push(w);
  }

  // Add custom keywords
  if (options.additionalKeywords) {
    for (const kw of options.additionalKeywords) {
      if (!keywords.includes(kw.toLowerCase())) keywords.push(kw.toLowerCase());
    }
  }

  return {
    semantic_en,
    semantic_vi,
    keywords: keywords.slice(0, 15), // limit to 15 keywords
  };
}

// ── Main synthesis entry point ──────────────────────────────────────────────

/**
 * Synthesize view descriptions heuristically from DDL annotations, field
 * names, and associations (no AI/LLM involved).
 *
 * @param {string} ddlSource - Raw DDL source code
 * @param {object} viewMeta - View metadata (name, appComponent, etc.)
 * @param {object} [options]
 * @returns {Promise<{ semantic_en, semantic_vi, keywords }>}
 */
export async function synthesizeView(ddlSource, viewMeta = {}, options = {}) {
  const view = ddlSource ? parseDDL(ddlSource, { viewName: viewMeta.name }) : viewMeta;
  return synthesizeHeuristic(view, options);
}

// ── CLI helper ──────────────────────────────────────────────────────────────

export function describeSynthesis(result) {
  return [
    `semantic_en: ${result.semantic_en}`,
    `semantic_vi: ${result.semantic_vi}`,
    `keywords: ${result.keywords.join(', ')}`,
  ].join('\n');
}
