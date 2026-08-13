// SAP ADT export config — secrets only from environment, never files/logs.
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MCP_ROOT = path.resolve(__dirname, '..', '..');
const DATA_SIBLING = path.resolve(MCP_ROOT, '..', 'cds_kb_data');

/** Default snapshot root: sibling data tree, NOT overlays/private markdown views. */
export const DEFAULT_OUTPUT_ROOT = path.join(DATA_SIBLING, '.sap_export');

export const EXTRACTOR_VERSION = 'cds-kb-mcp-sap-adt/0.1.0';

const ALLOWED_ALIASES = new Set(['DEV']);

/**
 * @param {NodeJS.ProcessEnv} [env]
 * @returns {{ configured: false } | { configured: true, ...config }}
 */
export function loadSapConfig(env = process.env) {
  const baseUrl = (env.SAP_ADT_BASE_URL || '').trim();
  const username = (env.SAP_ADT_USERNAME || '').trim();
  const password = env.SAP_ADT_PASSWORD || '';
  const client = (env.SAP_ADT_CLIENT || '').trim();
  const alias = (env.SAP_ADT_SYSTEM_ALIAS || 'DEV').trim().toUpperCase();

  if (!baseUrl && !username && !password && !client) {
    return { configured: false };
  }

  const errors = [];
  if (!baseUrl) errors.push('SAP_ADT_BASE_URL is required');
  if (!username) errors.push('SAP_ADT_USERNAME is required');
  if (!password) errors.push('SAP_ADT_PASSWORD is required');
  if (!client) errors.push('SAP_ADT_CLIENT is required');

  let parsedUrl;
  try {
    parsedUrl = new URL(baseUrl);
  } catch {
    errors.push('SAP_ADT_BASE_URL must be a valid URL');
  }

  if (parsedUrl) {
    if (parsedUrl.protocol !== 'https:') {
      errors.push('SAP_ADT_BASE_URL must use https:// (TLS required)');
    }
    if (parsedUrl.username || parsedUrl.password) {
      errors.push('SAP_ADT_BASE_URL must not embed credentials');
    }
  }

  if (!ALLOWED_ALIASES.has(alias)) {
    errors.push(`system alias must be DEV (got ${alias || '(empty)'}); PRD and other aliases are rejected`);
  }

  // Reject obvious production SID/host cues (s4prd, .prd., -prd-, etc.)
  if (parsedUrl && /(?:^|[.\-_])prd(?:[.\-_]|$)|s4prd|eccprd|\.prd\./i.test(parsedUrl.hostname)) {
    errors.push('hostname looks like PRD; only DEV is allowed');
  }

  const tlsVerify = env.SAP_ADT_TLS_VERIFY;
  if (tlsVerify !== undefined && tlsVerify !== '' && !['1', 'true', 'yes'].includes(String(tlsVerify).toLowerCase())) {
    errors.push('TLS verification is mandatory; SAP_ADT_TLS_VERIFY cannot disable verify');
  }

  const packageInclude = parseList(env.SAP_ADT_PACKAGE_INCLUDE, ['Z*', 'Y*']);
  const packageExclude = parseList(env.SAP_ADT_PACKAGE_EXCLUDE, ['$TMP']);
  const relatedInclude = parseList(env.SAP_ADT_RELATED_INCLUDE, ['Z*', 'Y*']);
  const objectTypes = parseList(env.SAP_ADT_OBJECT_TYPES, ['data_definition']);

  // Locked product policy: only custom Z*/Y*
  for (const pat of packageInclude) {
    if (!isCustomNamespacePattern(pat)) {
      errors.push(`package_include pattern "${pat}" rejected — only Z*/Y* custom namespaces`);
    }
  }
  for (const pat of relatedInclude) {
    if (!isCustomNamespacePattern(pat)) {
      errors.push(`related_object_include pattern "${pat}" rejected — only Z*/Y* custom namespaces`);
    }
  }

  let dependencyMaxDepth = Number.parseInt(env.SAP_ADT_DEPENDENCY_MAX_DEPTH || '5', 10);
  if (!Number.isFinite(dependencyMaxDepth) || dependencyMaxDepth < 0 || dependencyMaxDepth > 20) {
    errors.push('SAP_ADT_DEPENDENCY_MAX_DEPTH must be an integer 0–20');
    dependencyMaxDepth = 5;
  }

  const timeoutMs = Math.min(
    Math.max(Number.parseInt(env.SAP_ADT_TIMEOUT_MS || '30000', 10) || 30000, 1000),
    120000,
  );

  const outputRootRaw = (env.SAP_ADT_OUTPUT_ROOT || '').trim() || DEFAULT_OUTPUT_ROOT;
  let outputRoot;
  try {
    outputRoot = path.resolve(outputRootRaw);
  } catch {
    errors.push('SAP_ADT_OUTPUT_ROOT is not a valid path');
  }

  if (errors.length) {
    const err = new Error(errors.join('; '));
    err.code = 'SAP_CONFIG_INVALID';
    err.details = errors;
    throw err;
  }

  return {
    configured: true,
    systemAlias: alias,
    connector: 'adt',
    baseUrl: parsedUrl.origin + (parsedUrl.pathname.replace(/\/$/, '') || ''),
    username,
    // password kept on object but never logged
    password,
    sapClient: client,
    readOnly: true,
    tlsVerify: true,
    productionEnabled: false,
    packageInclude,
    packageExclude,
    relatedObjectInclude: relatedInclude,
    dependencyMaxDepth,
    includeInactive: false,
    includeGenerated: false,
    includeTableContents: false,
    objectTypeInclude: objectTypes,
    outputRoot,
    concurrency: Math.min(Math.max(Number.parseInt(env.SAP_ADT_CONCURRENCY || '2', 10) || 2, 1), 8),
    requestTimeoutMs: timeoutMs,
    extractorVersion: EXTRACTOR_VERSION,
  };
}

/** Safe summary for logs / kb_info — no secrets. */
export function describeSapConfig(config) {
  if (!config || !config.configured) {
    return { configured: false };
  }
  return {
    configured: true,
    systemAlias: config.systemAlias,
    connector: config.connector,
    baseHost: safeHost(config.baseUrl),
    sapClient: config.sapClient,
    packageInclude: config.packageInclude,
    relatedObjectInclude: config.relatedObjectInclude,
    objectTypeInclude: config.objectTypeInclude,
    outputRoot: config.outputRoot,
    tlsVerify: true,
    readOnly: true,
  };
}

export function isCustomNamespacePattern(pat) {
  const p = String(pat || '').trim().toUpperCase();
  if (!p) return false;
  // Z*, Y*, ZFOO*, YY* etc. — must start with Z or Y
  return /^[ZY][A-Z0-9_/*]*$/.test(p);
}

export function matchesNamespace(name, patterns) {
  const n = String(name || '').toUpperCase();
  return (patterns || []).some((pat) => matchGlob(n, String(pat).toUpperCase()));
}

export function isCustomObjectName(name) {
  const n = String(name || '').trim().toUpperCase();
  return n.startsWith('Z') || n.startsWith('Y');
}

function matchGlob(value, pattern) {
  if (pattern.endsWith('*')) {
    return value.startsWith(pattern.slice(0, -1));
  }
  return value === pattern;
}

function parseList(raw, fallback) {
  if (raw === undefined || raw === null || String(raw).trim() === '') return [...fallback];
  return String(raw)
    .split(/[,;\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function safeHost(urlStr) {
  try {
    return new URL(urlStr).hostname;
  } catch {
    return '(invalid)';
  }
}
