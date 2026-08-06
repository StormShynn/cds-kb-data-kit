// src/template.mjs
// Generate markdown view files from structured view data.
//
// Usage:
//   import { renderViewMd } from './src/template.mjs';
//   const md = renderViewMd(viewData);

// ── Release state display ───────────────────────────────────────────────────

function releaseStateLabel(state) {
  if (!state) return 'Released';
  const map = {
    'released': 'Released',
    'deprecated': 'Deprecated',
    'not_released': 'Not Released',
    'restricted': 'Restricted',
    'unverified': 'Unverified (auto-discovered, needs review)',
  };
  return map[state.toLowerCase()] || state;
}

// ── YAML frontmatter ────────────────────────────────────────────────────────

function renderFrontmatter(view) {
  const tags = view.tags || [];
  const frontmatter = [
    '---',
    `name: ${view.name}`,
    `description: ${view.description || view.label || view.name}`,
  ];

  if (view.appComponent) {
    frontmatter.push(`app_component: ${view.appComponent}`);
  }
  if (view.softwareComponent) {
    frontmatter.push(`software_component: ${view.softwareComponent}`);
  }

  // Default release state
  frontmatter.push(`release_state: ${view.releaseState || 'released'}`);

  if (view.cleanCoreLevel) {
    frontmatter.push(`clean_core_level: ${view.cleanCoreLevel}`);
  }
  if (view.systemType) {
    frontmatter.push(`system_type: ${view.systemType}`);
  }
  frontmatter.push(`source_available: ${view.ddlSource ? 'true' : 'false'}`);
  if (view.sourceUrl) {
    frontmatter.push(`source_url: ${view.sourceUrl}`);
  }

  if (view.semantic_en) {
    frontmatter.push(`semantic_en: ${view.semantic_en}`);
  }
  if (view.semantic_vi) {
    frontmatter.push(`semantic_vi: ${view.semantic_vi}`);
  }
  if (view.keywords && view.keywords.length > 0) {
    frontmatter.push('keywords:');
    for (const kw of view.keywords) {
      frontmatter.push(`  - ${kw}`);
    }
  }

  // Tags
  if (tags.length > 0) {
    frontmatter.push('tags:');
    for (const tag of tags) {
      frontmatter.push(`  - ${tag}`);
    }
  }

  frontmatter.push('---');
  return frontmatter.join('\n');
}

// ── Property table ──────────────────────────────────────────────────────────

function renderPropertyTable(view) {
  const rows = [];
  if (view.appComponent) {
    rows.push(`| App Component | \`${view.appComponent}\` |`);
  }
  if (view.softwareComponent) {
    rows.push(`| Software Component | \`${view.softwareComponent}\` |`);
  }
  rows.push(`| Release State | ${releaseStateLabel(view.releaseState)}${view.cleanCoreLevel ? ` (Level ${view.cleanCoreLevel})` : ''} |`);
  if (view.systemType) {
    rows.push(`| System Type | ${view.systemType} |`);
  }
  if (view.sourceUrl) {
    rows.push(`| Source | [${view.ddlSource ? 'View source file' : 'View Hub catalog entry'}](${view.sourceUrl}) |`);
  }

  return [
    '| Property | Value |',
    '|---|---|',
    ...rows,
  ].join('\n');
}

// ── Fields table ────────────────────────────────────────────────────────────

export function renderFieldsTable(view) {
  const fields = view.fields || [];
  const associations = view.associations || [];

  if (fields.length === 0 && associations.length === 0) {
    return '';
  }

  // Fields sourced from the Hub catalog (no DDL) carry type/length/description
  // that DDL-parsed fields don't — show the fuller table when that data is
  // actually present, otherwise keep the plain Field/Data Source layout.
  // This only changes what's DISPLAYED for a field; it has no effect on
  // frontmatter tags/release_state, which other workflows key off of.
  const hasRichMetadata = fields.some(f => f.dataType || f.description);

  const rows = [];

  if (hasRichMetadata) {
    for (const f of fields) {
      const name = f.isKey ? `key \`${f.name}\`` : `\`${f.name}\``;
      const type = f.dataType ? `\`${f.dataType}${f.length ? `(${f.length})` : ''}\`` : '';
      rows.push(`| ${name} | ${type} | ${f.description || ''} |`);
    }
    for (const a of associations) {
      if (a.isInSelect !== false) {
        rows.push(`| \`${a.alias}\` | | *Association* |`);
      }
    }
    if (rows.length === 0) return '';
    return [
      '## Fields',
      '',
      '| Field | Type | Description |',
      '|---|---|---|',
      ...rows,
    ].join('\n');
  }

  // Regular fields
  for (const f of fields) {
    const dataSource = f.expression || f.name;
    if (f.isKey) {
      rows.push(`| key \`${f.name}\` | \`${dataSource}\` |`);
    } else {
      rows.push(`| \`${f.name}\` | \`${dataSource}\` |`);
    }
  }

  // Associations listed in select list
  for (const a of associations) {
    if (a.isInSelect !== false) {
      rows.push(`| \`${a.alias}\` | *Association* |`);
    }
  }

  if (rows.length === 0) return '';

  return [
    '## Fields',
    '',
    '| Field | Data Source |',
    '|---|---|',
    ...rows,
  ].join('\n');
}

// ── Associations table ──────────────────────────────────────────────────────

export function renderAssociationsTable(view) {
  const assocs = view.associations || [];
  const declaredAssocs = assocs.filter(a => a.targetView && a.targetView.length > 0);

  if (declaredAssocs.length === 0) return '';

  const rows = declaredAssocs.map(a => {
    const cardinality = a.cardinality || '[0..1]';
    return `| \`${a.alias}\` | \`${a.targetView}\` | ${cardinality} |`;
  });

  return [
    '## Associations',
    '',
    '| Alias | Target View | Cardinality |',
    '|---|---|---|',
    ...rows,
  ].join('\n');
}

// ── DDL Source Code block ──────────────────────────────────────────────────

function renderSourceCode(view) {
  if (!view.ddlSource) return '';

  const lines = ['## Source Code', ''];
  if (view.sourceUrl) {
    lines.push(`*Source: [${view.sourceUrl}](${view.sourceUrl})*`, '');
  }
  lines.push('```abap', view.ddlSource.trimEnd(), '```');
  return lines.join('\n');
}

// ── Main render function ────────────────────────────────────────────────────

/**
 * Render a full markdown view file from structured view data.
 *
 * @param {object} view - Structured view data
 * @param {object} [view.options] - Rendering options
 * @param {string[]} [view.options.sections] - Which sections to include
 *        (e.g. ['frontmatter', 'fields', 'associations', 'source'])
 * @returns {string} Complete markdown content
 */
export function renderViewMd(view) {
  const name = view.name;
  const displayLabel = view.description || view.label || name;

  const parts = [];

  // 1. Frontmatter
  parts.push(renderFrontmatter(view));

  // 2. Heading + description
  parts.push(`# ${name}`);
  parts.push('');
  parts.push(`**${displayLabel}**`);
  parts.push('');

  // 3. Property table
  parts.push(renderPropertyTable(view));
  parts.push('');

  // 4. Fields
  const fieldsTable = renderFieldsTable(view);
  if (fieldsTable) {
    parts.push(fieldsTable);
    parts.push('');
  }

  // 5. Associations
  const assocTable = renderAssociationsTable(view);
  if (assocTable) {
    parts.push(assocTable);
    parts.push('');
  }

  // 6. Source code
  const sourceBlock = renderSourceCode(view);
  if (sourceBlock) {
    parts.push(sourceBlock);
  }

  return parts.join('\n');
}
