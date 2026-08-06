// src/parser.mjs
// Parse raw ABAP DDL source code into structured data:
//   { name, label, appComponent, fields[], associations[], annotations{} }
//
// Usage:
//   import { parseDDL } from './src/parser.mjs';
//   const view = parseDDL(ddlSourceCode);

import fs from 'node:fs/promises';
import path from 'node:path';

// ── Annotation extractors ───────────────────────────────────────────────────

/** Extract a single scalar annotation value, e.g. @EndUserText.label: 'Purchase Order' */
function extractAnnotation(text, name) {
  const re = new RegExp(`@${name}\\s*:\\s*['"]([^'"]+)['"]`);
  const m = text.match(re);
  return m ? m[1].trim() : '';
}

/** Extract a multi-line annotation block like @VDM: { viewType: #BASIC, ... } */
function extractAnnotationBlock(text, name) {
  const re = new RegExp(`@${name}\\s*:\\s*\\{([\\s\\S]*?)\\}\\s*(?:\\n|\\r\\n?)`, 'm');
  const m = text.match(re);
  return m ? m[1].trim() : '';
}

/** Extract value from a key inside an annotation block */
function extractBlockValue(blockText, key) {
  if (!blockText) return '';
  const re = new RegExp(`${key}\\s*:\\s*(#[\\w]+|'[^']+'|"[^"]+")`);
  const m = blockText.match(re);
  if (!m) return '';
  return m[1].replace(/^['"]|['"]$/g, '').trim();
}

/** Extract @ObjectModel.usageType.<key> value */
function extractUsageType(ddl, key) {
  const block = extractAnnotationBlock(ddl, 'ObjectModel');
  if (!block) return '';
  const usageMatch = block.match(new RegExp(`usageType\\s*:\\s*\\{([^}]*)\\}`));
  if (!usageMatch) return '';
  const val = extractBlockValue(usageMatch[1], key);
  return val;
}

/**
 * Find the position of the first top-level `{` that starts the select list.
 * We need to skip annotation blocks that may contain `{` (like @AccessControl:{...}).
 */
function findSelectListStart(ddl) {
  let i = 0;
  while (i < ddl.length) {
    // Check if we're at an annotation: an @ followed by word chars
    if (ddl[i] === '@') {
      // Find the end of the annotation
      let j = i + 1;
      // Skip the annotation name: @Foo.bar
      while (j < ddl.length && /[\w.]/.test(ddl[j])) j++;
      // Skip whitespace before colon (handles @Foo :{ and @Foo : {)
      while (j < ddl.length && (ddl[j] === ' ' || ddl[j] === '\t')) j++;
      // Skip optional colon
      if (j < ddl.length && ddl[j] === ':') j++;
      // Skip whitespace after colon (handles @Foo: {)
      while (j < ddl.length && (ddl[j] === ' ' || ddl[j] === '\t')) j++;

      if (j < ddl.length && ddl[j] === '{') {
        // Annotation block with braces — find the matching closing brace
        let depth = 1;
        j++;
        while (j < ddl.length && depth > 0) {
          if (ddl[j] === '{') depth++;
          else if (ddl[j] === '}') depth--;
          if (depth > 0) j++;
        }
        i = j + 1; // Move past the closing }
        continue;
      }

      // Simple annotation — skip to end of line
      const nlPos = ddl.indexOf('\n', j);
      i = nlPos !== -1 ? nlPos + 1 : ddl.length;
      continue;
    }

    if (ddl[i] === '{') {
      return i; // Found the select list start
    }

    i++;
  }
  return -1; // No select list found
}

// ── Field / Association extraction from DDL ─────────────────────────────────

/**
 * Parse the select list inside `{ ... }` of a CDS view definition.
 */
function parseSelectList(ddl) {
  const selectStart = findSelectListStart(ddl);
  if (selectStart === -1) return { fields: [], associations: [] };

  // Walk through braces to find the matching closing brace
  let depth = 0;
  let selectEnd = -1;
  for (let i = selectStart; i < ddl.length; i++) {
    const ch = ddl[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) { selectEnd = i; break; }
    }
  }
  if (selectEnd === -1) return { fields: [], associations: [] };

  const selectBody = ddl.slice(selectStart + 1, selectEnd);
  const fields = [];
  const associations = [];

  // Split by top-level commas/semicolons (not inside brackets or parentheses)
  const items = splitTopLevel(selectBody, /[,;]/);

  for (const item of items) {
    const trimmed = item.trim();
    if (!trimmed || trimmed.startsWith('//')) continue;

    // Strip leading annotations. The bare-word value alternative allows a
    // dot too (not just \w+) — a decimal like "0.8" (@Search.fuzzinessThreshold:
    // 0.8 is a real, common annotation value) would otherwise only match
    // the "0", leaving a stray ".8" to pollute whatever follows.
    const annotations = [];
    const clean = trimmed.replace(
      /@[\w.]+(?:\s*:\s*(?:'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|#?[\w.]+|\[[^\]]*\]|\{[^}]*\}))?\s*/g,
      (match) => {
        annotations.push(match.trim());
        return '';
      }
    ).trim();

    if (!clean) continue;

    // Check if it's an association reference selected bare (just "_Alias,",
    // to expose it for further associations) — NOT "_Alias.Field" (a field
    // flattened in through the association), which the last-identifier
    // fallback below handles as a field instead.
    const isAssocItem = /^_\w+$/.test(clean);
    // RAP/ABAP-Cloud projection syntax redirecting an inherited association
    // to a more specific type — "_BusinessPartner : redirected to parent
    // I_BusinessPartnerTP_3" in a projection view, or the differently-worded
    // "_JournalEntryChange : association to parent X" seen in "define
    // abstract entity" structures — an association re-declaration, not a
    // field (it has no "as" alias, so without this check it fell through to
    // the last-identifier field fallback below and got misfiled as a field
    // named after the redirect target).
    const redirectMatch = clean.match(/^(_\w+)\s*:\s*(?:redirected\s+to|association\s+to)\b/i);
    // "define abstract entity" bodies (parameter/action structures, not a
    // real queryable view) use "Name :dbColumn;" or "Name :abap.type(len);"
    // instead of the "[key] Field [as Alias]" select-list syntax those
    // branches below assume — without this, the colon and everything after
    // it landed in the "last identifier" fallback's name instead of being
    // split off as the source/type.
    const colonMatch = clean.match(/^(\w+)\s*:\s*([\w./]+(?:\([^)]*\))?)\s*$/);

    const asMatch = clean.match(/(?:as\s+)(\w+)\s*$/i);
    const nameOnly = clean.replace(/[,;]\s*$/, '').trim();
    const keyMatch = nameOnly.match(/^key\s+([\w.]+)$/);
    const simpleField = nameOnly.match(/^(\w+)$/);

    if (redirectMatch) {
      associations.push({ name: redirectMatch[1], isAssociation: true, annotations });
    } else if (colonMatch) {
      fields.push({
        name: colonMatch[1],
        isKey: false,
        alias: null,
        expression: colonMatch[2],
        annotations
      });
    } else if (isAssocItem) {
      const assocName = nameOnly.replace(/[,;].*$/, '').trim();
      if (assocName.startsWith('_')) {
        associations.push({ name: assocName, isAssociation: true, annotations });
      }
    } else if (keyMatch) {
      // "key SourceAlias.Field" as well as plain "key Field" — split off
      // everything before the last dot as the source expression, same as
      // the last-identifier fallback below, so the two columns don't end
      // up showing the identical qualified path.
      const qualified = keyMatch[1];
      const dot = qualified.lastIndexOf('.');
      fields.push({
        name: dot === -1 ? qualified : qualified.slice(dot + 1),
        isKey: true,
        alias: null,
        expression: dot === -1 ? null : qualified,
        annotations
      });
    } else if (asMatch) {
      const fieldName = asMatch[1];
      const isKey = nameOnly.toLowerCase().startsWith('key');
      // Collapsed to one line — a multi-line expression (a "case/when/end"
      // block is the common one) would otherwise land in the rendered
      // Fields table with a raw newline inside a table cell, breaking both
      // markdown table rendering and coverage-report.html's line-by-line
      // table parser.
      const expr = nameOnly
        .replace(/\s+as\s+\w+\s*$/i, '')
        .replace(/^key\s+/i, '')
        .replace(/\s+/g, ' ')
        .trim();
      fields.push({
        name: fieldName,
        isKey,
        alias: fieldName,
        expression: expr,
        annotations
      });
    } else if (simpleField) {
      fields.push({
        name: simpleField[1],
        isKey: false,
        alias: null,
        expression: null,
        annotations
      });
    } else if (nameOnly && !nameOnly.includes('=')) {
      // expression-based field — extract the last identifier as the field name
      const hasAssocAnnotation = annotations.some(a =>
        a.includes('association.type') || a.includes('foreignKey.association')
      );
      // Same distinction as isAssocItem above: only a bare "_Alias" here is
      // selecting the association itself — "_Alias.Field" (a field flattened
      // in through it, annotated with which association it came from) is a
      // field, handled by the fallback branch below.
      if (hasAssocAnnotation && /^_\w+$/.test(nameOnly)) {
        const assocName = nameOnly.replace(/[,;].*$/, '').trim();
        const words = assocName.split(/[\s,]+/);
        const lastWord = words[words.length - 1]?.replace(/[,;]/g, '') || '';
        if (lastWord.startsWith('_')) {
          associations.push({ name: lastWord, isAssociation: true, annotations });
        }
      } else {
        const lastWord = nameOnly.split(/[\s,]+/).pop()?.replace(/[,;]/g, '') || '';
        // A plain qualified reference like "SourceAlias.Field" (no rename
        // via "as") has no internal whitespace, so the split above leaves
        // it untouched — take the segment after the last dot as the local
        // field name, keeping the full reference as the expression, instead
        // of the qualified path showing up as both.
        const dot = /^[\w.]+$/.test(lastWord) ? lastWord.lastIndexOf('.') : -1;
        const displayName = dot === -1 ? lastWord : lastWord.slice(dot + 1);
        if (displayName && !displayName.startsWith('_') && !/^(#|@)/.test(displayName)) {
          fields.push({
            name: displayName,
            isKey: false,
            alias: null,
            expression: nameOnly.replace(/\s+/g, ' ').trim(),
            annotations
          });
        }
      }
    }
  }

  return { fields, associations };
}

/**
 * Split a string by a regex at the top level (not inside brackets/parens/braces).
 */
function splitTopLevel(text, separator) {
  const parts = [];
  let depthParen = 0;
  let depthBrace = 0;
  let depthBracket = 0;
  let start = 0;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '(') depthParen++;
    else if (ch === ')') depthParen--;
    else if (ch === '{') depthBrace++;
    else if (ch === '}') depthBrace--;
    else if (ch === '[') depthBracket++;
    else if (ch === ']') depthBracket--;

    if (depthParen === 0 && depthBrace === 0 && depthBracket === 0 && separator.test(ch)) {
      parts.push(text.slice(start, i));
      start = i + 1;
    }
  }
  if (start < text.length) {
    parts.push(text.slice(start));
  }
  return parts;
}

// ── Association declaration extraction ──────────────────────────────────────

/**
 * Extract association declarations from the "define view" body.
 * Gets the preamble (everything before the select list) and matches
 * "association [...] to TargetView as Alias" patterns.
 */
function extractAssociations(ddl) {
  const assocs = [];
  // Use our improved finder to get the correct select list start
  const selectStart = findSelectListStart(ddl);
  const preamble = selectStart !== -1 ? ddl.slice(0, selectStart) : ddl;

  const assocRe = /association\s*(\[[\d.*]+\])?\s*to\s+(\w+)\s+as\s+(\w+)/gi;
  let m;
  while ((m = assocRe.exec(preamble)) !== null) {
    assocs.push({
      alias: m[3],
      targetView: m[2],
      cardinality: m[1] || '[0..1]',
    });
  }

  // Extract ON conditions — iterate through lines after each declaration
  const lines = preamble.split('\n');
  let currentAssoc = null;
  for (const line of lines) {
    const declMatch = line.match(/association\s*(\[[\d.*]+\])?\s*to\s+(\w+)\s+as\s+(\w+)/i);
    if (declMatch) {
      currentAssoc = assocs.find(a => a.alias === declMatch[3]);
      continue;
    }
    if (currentAssoc && line.trim()) {
      if (!currentAssoc.onCondition) currentAssoc.onCondition = '';
      currentAssoc.onCondition += line.trim() + ' ';
    }
  }

  // Clean up ON conditions
  for (const a of assocs) {
    if (a.onCondition) {
      a.onCondition = a.onCondition
        .replace(/\s*\{.*$/, '')
        .replace(/\s*association\s.*$/i, '')
        .replace(/\s+/g, ' ')
        .trim();
      if (a.onCondition && !a.onCondition.startsWith('on ')) {
        a.onCondition = 'on ' + a.onCondition;
      }
    }
  }

  return assocs;
}

// ── Comment stripping ───────────────────────────────────────────────────────

/**
 * Remove "//...", "--..." and "/* ... *\/" comments from DDL, respecting
 * string literals (a field's default value could legitimately contain
 * "//" or "/*"). Run once up front so every downstream regex — annotation
 * extraction, select-list splitting, field naming — sees the same
 * comment-free text, instead of each one needing its own comment handling
 * (a block comment sitting between two select-list items, e.g. right
 * before a bare association like "_BusinessPartner,", previously merged
 * into one unparseable chunk with no comma between them; entire fields
 * commented out with a leading "--", SAP's other way of marking a
 * deprecated field disabled, previously parsed as a real field literally
 * named "--I_SourceView.field").
 */
function stripComments(text) {
  let out = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === "'" || ch === '"') {
      const end = text.indexOf(ch, i + 1);
      const stop = end === -1 ? text.length : end + 1;
      out += text.slice(i, stop);
      i = stop - 1;
    } else if ((ch === '/' && text[i + 1] === '/') || (ch === '-' && text[i + 1] === '-')) {
      const end = text.indexOf('\n', i);
      i = (end === -1 ? text.length : end) - 1;
    } else if (ch === '/' && text[i + 1] === '*') {
      const end = text.indexOf('*/', i + 2);
      i = (end === -1 ? text.length : end + 2) - 1;
    } else {
      out += ch;
    }
  }
  return out;
}

// ── Main parsing entry point ────────────────────────────────────────────────

/**
 * Parse full ABAP DDL source code into a structured view object.
 */
export function parseDDL(ddl, options = {}) {
  ddl = stripComments(ddl);
  let name = options.viewName || '';
  if (!name) {
    // Handle both 'define view ViewName' and 'define view entity ViewName'
    const nameMatch = ddl.match(/define\s+view\s+(?:entity\s+)?(\w+)/i);
    if (nameMatch) name = nameMatch[1];
  }

  const label = extractAnnotation(ddl, 'EndUserText.label');

  const sourceMatch = ddl.match(/as\s+select\s+from\s+(\w+)/i);
  const sourceTable = sourceMatch ? sourceMatch[1] : '';

  const annotations = {
    endUserTextLabel: label,
    sqlViewName: extractAnnotation(ddl, 'AbapCatalog\\.sqlViewName') || extractAnnotation(ddl.replace(/\n/g, ' '), 'sqlViewName'),
    vdmViewType: extractBlockValue(extractAnnotationBlock(ddl, 'VDM'), 'viewType'),
    contractType: extractBlockValue(extractAnnotationBlock(ddl, 'VDM\\.lifecycle\\.contract') || extractAnnotationBlock(ddl, 'VDM'), 'type'),
    accessControl: extractAnnotation(ddl, 'AccessControl\\.authorizationCheck') || extractBlockValue(extractAnnotationBlock(ddl, 'AccessControl'), 'authorizationCheck'),
    dataClass: extractUsageType(ddl, 'dataClass'),
    sizeCategory: extractUsageType(ddl, 'sizeCategory'),
    serviceQuality: extractUsageType(ddl, 'serviceQuality'),
    modelingPattern: extractBlockValue(extractAnnotationBlock(ddl, 'ObjectModel'), 'modelingPattern'),
    compositionRoot: ddl.includes('compositionRoot: true') || ddl.includes('@ObjectModel.compositionRoot: true'),
    analyticsDataCategory: extractAnnotation(ddl.replace(/\n/g, ' '), 'Analytics\\.dataCategory'),
    analyticsInternalName: extractAnnotation(ddl.replace(/\n/g, ' '), 'Analytics\\.internalName'),
  };

  const { fields, associations: selectAssocs } = parseSelectList(ddl);
  const declaredAssocs = extractAssociations(ddl);

  const mergedAssocs = [];
  const seenAliases = new Set();

  for (const da of declaredAssocs) {
    mergedAssocs.push({
      alias: da.alias,
      targetView: da.targetView,
      cardinality: da.cardinality,
      onCondition: da.onCondition || '',
      isInSelect: selectAssocs.some(sa => sa.name === da.alias),
      annotations: [],
    });
    seenAliases.add(da.alias);
  }

  for (const sa of selectAssocs) {
    if (!seenAliases.has(sa.name)) {
      mergedAssocs.push({
        alias: sa.name,
        targetView: '',
        cardinality: '[0..1]',
        onCondition: '',
        isInSelect: true,
        annotations: sa.annotations || [],
      });
      seenAliases.add(sa.name);
    }
  }

  const seenFields = new Set();
  const uniqueFields = [];
  for (const f of fields) {
    if (!seenFields.has(f.name)) {
      seenFields.add(f.name);
      uniqueFields.push(f);
    }
  }

  return {
    name: name.toUpperCase(),
    label: label || name,
    sourceTable,
    annotations,
    fields: uniqueFields,
    associations: mergedAssocs,
  };
}

// ── Read DDL from file (auto-detect .md) ────────────────────────────────────

const MD_DDL_BLOCK_RE = /```(?:abap|sql)?\s*\r?\n([\s\S]*?)\r?\n```/;

/**
 * Read DDL content from a file.
 * If the file has a `.md` extension, it auto-extracts the DDL source block
 * from the first ```abap ... ``` code fence.
 * Otherwise, the entire file content is returned as-is.
 */
export async function readDDLContent(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  const ext = path.extname(filePath).toLowerCase();

  if (ext === '.md') {
    const match = content.match(MD_DDL_BLOCK_RE);
    if (match) {
      return match[1].trim();
    }
    console.warn(`   ⚠️  No \`\`\`abap/\`\`\`sql/\`\`\` code block found in ${filePath}, falling back to raw content`);
  }

  return content;
}

// ── Logging helper ──────────────────────────────────────────────────────────

export function describeParsedView(view) {
  return [
    `View: ${view.name}`,
    `Label: ${view.label}`,
    `Source: ${view.sourceTable || '(none)'}`,
    `Fields: ${view.fields.length}`,
    `Associations: ${view.associations.length}`,
    `Data Class: ${view.annotations.dataClass || '?'}`,
    `Size Category: ${view.annotations.sizeCategory || '?'}`,
    `VDM Type: ${view.annotations.vdmViewType || '?'}`,
    `Contract: ${view.annotations.contractType || '?'}`,
  ].join('\n');
}
