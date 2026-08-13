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

// dev_ext_status is a SEPARATE axis from release_state above — see
// docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md.
// release_state reflects the Hub's general artifact catalog ("Released API" —
// does this entity exist / is it a public API at all); dev_ext_status
// reflects SAP's ReleaseStateDeveloperExtensibility field specifically — can
// this entity be used via `association to` / `select from` in a CUSTOM CDS
// view under S/4HANA Cloud ABAP Developer Extensibility. A view can be
// release_state: released and dev_ext_status: not_released at the same time;
// neither implies the other. Absent (null/undefined) means this KB has no
// signal either way — NOT the same as "not released" — fall back to the
// ADT compiler / content-assist check described in that doc.
export function devExtStatusLabel(status) {
  if (!status) return null;
  const map = {
    'released': 'Released',
    'not_released': 'Not Released',
  };
  return map[status.toLowerCase()] || status;
}

// key_user_ext_status is a SEPARATE axis again — SAP's
// ReleaseStateKeyUserExtensibility. Same question as dev_ext_status above
// ("can this entity be a data source for a new custom CDS view") but for the
// no-code/low-code "Custom CDS Views" (Key User Extensibility) app instead of
// ABAP Developer Extensibility. An entity can be released for one and not
// the other — see the hook doc.
export function keyUserExtStatusLabel(status) {
  if (!status) return null;
  const map = {
    'released': 'Released',
    'not_released': 'Not Released',
  };
  return map[status.toLowerCase()] || status;
}

// extensible_key_user / extensible_dev_ext are a DIFFERENT question from
// dev_ext_status/key_user_ext_status above: those ask "can I USE this entity
// as a data source when building a new custom view"; these ask "can CUSTOM
// FIELDS be added directly to THIS entity itself" (SAP's
// ExtensibleWithKeyUserExtensibility / ExtensibleWithDeveloperExtensibility).
// Independent of every other axis on this page.
export function extensibleLabel(value) {
  if (!value) return null;
  const map = { 'yes': 'Yes', 'no': 'No' };
  return map[value.toLowerCase()] || value;
}

// atc_state is a THIRD, independent axis from both release_state and
// dev_ext_status — SAP's own ABAP Cloud "released objects" list (the same
// public dataset ATC/Clean Core checks use), a second opinion specifically
// on release/deprecation that also names a concrete successor object when
// one exists (atc_successor), which neither of the other two signals do.
// Absent means this KB has no signal — not "released", not "deprecated".
function atcStateLabel(state) {
  if (!state) return null;
  const map = {
    'released': 'Released',
    'deprecated': 'Deprecated',
    'nottobereleased': 'Not To Be Released',
  };
  return map[state.toLowerCase()] || state;
}

// ── YAML frontmatter ────────────────────────────────────────────────────────

// Free-text fields (Hub descriptions, synthesized semantic_en/vi, keywords)
// need real YAML quoting: a plain scalar containing ": " (colon immediately
// followed by a space) is only valid YAML as the start of a nested mapping,
// so an unquoted description like "...business question: What is..." is a
// YAML syntax error, not just untidy. Our own extractFrontmatter (a plain
// regex line-reader, not a YAML parser) never noticed; github.com's
// markdown renderer does, since it treats a leading `---`-fenced block as
// Jekyll front matter and renders it with a real YAML parser — visibly, as
// a red error banner across the whole file's Preview tab. JSON's string
// escaping is a valid subset of YAML's double-quoted scalar escaping (both
// escape `"`, `\`, and control chars the same way), so JSON.stringify is a
// simple, safe way to always produce one. Structured/coded fields (name,
// app_component, release_state, source_url, tags — SAP taxonomy codes and
// URLs, never free text) are left bare as before; none of them can contain
// ": " by construction.
function yamlScalar(value) {
  return JSON.stringify(String(value));
}

export function renderFrontmatter(view) {
  const tags = view.tags || [];
  const frontmatter = [
    '---',
    `name: ${view.name}`,
    `description: ${yamlScalar(view.description || view.label || view.name)}`,
  ];

  if (view.appComponent) {
    frontmatter.push(`app_component: ${view.appComponent}`);
  }
  if (view.softwareComponent) {
    frontmatter.push(`software_component: ${view.softwareComponent}`);
  }

  // Default release state
  frontmatter.push(`release_state: ${view.releaseState || 'released'}`);
  // Distinct axis — see devExtStatusLabel() above. Omitted entirely (not
  // written as "unknown") when this KB has no signal, so its absence is
  // never confused with a fetched "not_released" value.
  if (view.devExtStatus) {
    frontmatter.push(`dev_ext_status: ${view.devExtStatus}`);
  }
  // Distinct axis again — see keyUserExtStatusLabel() above. Same
  // omit-when-unknown convention as dev_ext_status.
  if (view.keyUserExtStatus) {
    frontmatter.push(`key_user_ext_status: ${view.keyUserExtStatus}`);
  }
  // Two more independent axes — see extensibleLabel() above. Same
  // omit-when-unknown convention.
  if (view.extensibleKeyUser) {
    frontmatter.push(`extensible_key_user: ${view.extensibleKeyUser}`);
  }
  if (view.extensibleDevExt) {
    frontmatter.push(`extensible_dev_ext: ${view.extensibleDevExt}`);
  }
  // Third, independent axis — see atcStateLabel() above. Same
  // omit-when-unknown convention as dev_ext_status.
  if (view.atcState) {
    frontmatter.push(`atc_state: ${view.atcState}`);
  }
  if (view.atcSuccessor) {
    frontmatter.push(`atc_successor: ${view.atcSuccessor}`);
  }

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
    frontmatter.push(`semantic_en: ${yamlScalar(view.semantic_en)}`);
  }
  if (view.semantic_vi) {
    frontmatter.push(`semantic_vi: ${yamlScalar(view.semantic_vi)}`);
  }
  if (view.keywords && view.keywords.length > 0) {
    frontmatter.push('keywords:');
    for (const kw of view.keywords) {
      frontmatter.push(`  - ${yamlScalar(kw)}`);
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
  const devExtLabel = devExtStatusLabel(view.devExtStatus);
  if (devExtLabel) {
    // Absolute GitHub URL, not a relative link — view files nest at varying
    // depth under views/ (one folder per app_component segment), so no
    // single relative path back to hook/ would be correct for all of them.
    rows.push(`| Release State (Developer Extensibility) | ${devExtLabel} — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-mcp-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before \`association to\`/\`select from\` this entity in custom ABAP Developer Extensibility CDS views |`);
  }
  const keyUserExtLabel = keyUserExtStatusLabel(view.keyUserExtStatus);
  if (keyUserExtLabel) {
    rows.push(`| Release State (Key User Extensibility) | ${keyUserExtLabel} — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |`);
  }
  const extensibleKeyUserLabel = extensibleLabel(view.extensibleKeyUser);
  if (extensibleKeyUserLabel) {
    rows.push(`| Extensible (Key User Extensibility) | ${extensibleKeyUserLabel} — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |`);
  }
  const extensibleDevExtLabel = extensibleLabel(view.extensibleDevExt);
  if (extensibleDevExtLabel) {
    rows.push(`| Extensible (Developer Extensibility) | ${extensibleDevExtLabel} — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |`);
  }
  const atcLabel = atcStateLabel(view.atcState);
  if (atcLabel) {
    const successorNote = view.atcSuccessor ? ` — SAP names \`${view.atcSuccessor}\` as the successor to use instead` : '';
    rows.push(`| Release State (SAP ATC / Clean Core) | ${atcLabel}${successorNote} — a third, independent signal from SAP's ABAP Cloud released-objects list |`);
  }
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

// Splits a field's source expression into the association alias it's
// reached through (if any) and the field behind it — "_Assoc.Field" becomes
// via="_Assoc", source="Field" — instead of leaving that in one dotted
// string. Only pure "alias.field[.field...]" paths qualify; anything with
// an operator/call/space in it (a cast, case, or other computed expression)
// is left whole in `source` with no `via`, since there's no alias to pull
// out of it. Returns both blank when there's no expression, or the
// expression is just the field's own name repeated (nothing to add).
function splitViaSource(expression, fieldName) {
  if (!expression || expression === fieldName) return { via: '', source: '' };
  const isPureQualifiedPath = /^\w+(?:\.\w+)*$/.test(expression);
  if (isPureQualifiedPath && expression.includes('.')) {
    const dot = expression.lastIndexOf('.');
    const via = expression.slice(0, dot);
    const source = expression.slice(dot + 1);
    // Only surface `via` for a real association traversal — by CDS
    // convention its alias starts with "_" (see parser.mjs's association
    // regexes). A qualified reference through anything else is just the
    // view's own base FROM alias repeated on every column (a DDL style
    // choice, not a traversal) and adds no information beyond the field
    // name — treat it like an unqualified reference instead of surfacing
    // that alias as "Via" on every single row.
    if (via.startsWith('_')) return { via, source };
    return { via: '', source: source === fieldName ? '' : source };
  }
  return { via: '', source: expression };
}

// One column layout for every view, DDL-derived or Hub-metadata-only:
// Field | Key | Association | Via | Source | Type | Description. A field
// only ever fills the columns its actual source can supply — DDL parsing
// gives Via/Source (and Key), the Hub catalog gives Type/Description; a
// field with only one of those just leaves the other blank, rather than
// this repo running two different table shapes depending on which source
// happened to produce a given view (which is what forced a "hasRichMetadata"
// branch here before scripts/enrich_ddl_fields.mjs existed to backfill
// Type/Description onto DDL-derived fields from the Hub after the fact).
export function renderFieldsTable(view) {
  const fields = view.fields || [];
  const associations = view.associations || [];

  if (fields.length === 0 && associations.length === 0) {
    return '';
  }

  const rows = [];

  for (const f of fields) {
    const { via, source } = splitViaSource(f.expression, f.name);
    const type = f.dataType ? `\`${f.dataType}${f.length ? `(${f.length})` : ''}\`` : '';
    rows.push(`| \`${f.name}\` | ${f.isKey ? '✓' : ''} | | ${via ? `\`${via}\`` : ''} | ${source ? `\`${source}\`` : ''} | ${type} | ${f.description || ''} |`);
  }

  // Associations listed in select list
  for (const a of associations) {
    if (a.isInSelect !== false) {
      rows.push(`| \`${a.alias}\` | | ✓ | | | | |`);
    }
  }

  if (rows.length === 0) return '';

  return [
    '## Fields',
    '',
    '| Field | Key | Association | Via | Source | Type | Description |',
    '|---|---|---|---|---|---|---|',
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
