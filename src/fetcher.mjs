// src/fetcher.mjs
// Fetch CDS view DDL source code from multiple backends:
//   - github:   Search public GitHub repos for .asddls / .ddls files
//   - odata:    Fetch from a custom OData service (user-deployed in SAP system)
//   - sap-api:  Query SAP API Business Hub for service metadata (field list only)
//
// Usage:
//   import { fetchViewDDL, fetchViewList } from './src/fetcher.mjs';
//   const { ddl, metadata } = await fetchViewDDL('I_PurchaseOrder', { source: 'github' });

const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com';

// ── Shared helpers ──────────────────────────────────────────────────────────

/** Create a fetch with timeout using AbortController */
async function fetchWithTimeout(url, options = {}, timeout = 30000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const resp = await fetch(url, { ...options, signal: controller.signal });
    return resp;
  } finally {
    clearTimeout(id);
  }
}

/** Create auth headers for GitHub API */
function githubHeaders(token) {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'cds-kb-mcp-fetcher',
  };
  if (token) headers.Authorization = `token ${token}`;
  return headers;
}

/**
 * GitHub's Code Search API has a much stricter rate limit than the general
 * REST API (and enforces it even with a valid token) — a couple of retries
 * that back off using the `retry-after`/`x-ratelimit-reset` headers is
 * usually enough to survive a burst of requests instead of hard-failing.
 */
async function fetchGitHubSearch(url, headers, { retries = 2 } = {}) {
  for (let attempt = 0; ; attempt++) {
    const resp = await fetchWithTimeout(url, { headers });
    if (resp.status !== 429 && resp.status !== 403) return resp;
    if (attempt >= retries) return resp;

    const retryAfterSec = Number(resp.headers.get('retry-after'));
    const resetEpochSec = Number(resp.headers.get('x-ratelimit-reset'));
    let waitMs = 5000 * (attempt + 1);
    if (retryAfterSec > 0) waitMs = retryAfterSec * 1000;
    else if (resetEpochSec > 0) waitMs = Math.max(0, resetEpochSec * 1000 - Date.now());
    waitMs = Math.min(waitMs, 65000);

    console.warn(`   ⏳ GitHub search rate-limited (${resp.status}), retrying in ${Math.round(waitMs / 1000)}s...`);
    await new Promise(r => setTimeout(r, waitMs));
  }
}

// ── GitHub backend ──────────────────────────────────────────────────────────

/**
 * Search GitHub for a CDS view DDL source file.
 * Searches for `.asddls` files containing the view name.
 */
async function fetchFromGitHub(viewName, options = {}) {
  const token = options.githubToken || process.env.GITHUB_TOKEN || '';
  if (!token) {
    console.warn('   ⚠️  No GITHUB_TOKEN set. GitHub API is rate-limited to 60 req/hr. Set GITHUB_TOKEN or use --github-token.');
  }
  const headers = githubHeaders(token);

  // Collect items from multiple searches for broader coverage
  const items = [];

  const queries = [
    `${viewName} extension:asddls`,
    `${viewName} extension:ddls`,
    `${viewName} language:"ABAP"`,
  ];

  for (const q of queries) {
    const searchUrl = `${GITHUB_API_BASE}/search/code?q=${encodeURIComponent(q)}&per_page=10`;
    try {
      const resp = await fetchGitHubSearch(searchUrl, headers);
      if (resp.ok) {
        const data = await resp.json();
        if (data.items) items.push(...data.items);
      }
    } catch {
      // Try next query on failure
    }
    // If we already have enough items, stop searching
    if (items.length >= 20) break;
  }

  // Deduplicate by file URL
  const seen = new Set();
  const uniqueItems = items.filter(item => {
    const key = item.html_url || `${item.repository?.full_name}:${item.path}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Try to find the most relevant file
  const ddlFiles = uniqueItems.filter(item => {
    const name = item.name.toLowerCase();
    return name.includes(viewName.toLowerCase()) &&
           (name.endsWith('.asddls') || name.endsWith('.ddls') || name.endsWith('.abap'));
  });

  if (ddlFiles.length === 0) {
    throw new Error(`View "${viewName}" not found on GitHub. Searched with multiple queries (asddls, ddls, ABAP).`);
  }

  // Pick the best match (exact name match preferred)
  const exactMatch = ddlFiles.find(f => {
    const baseName = f.name.replace(/\.(asddls|ddls|abap)$/i, '');
    return baseName.toUpperCase() === viewName.toUpperCase();
  });
  const bestFile = exactMatch || ddlFiles[0];

  // Download the raw file content
  const rawUrl = bestFile.download_url || `${GITHUB_RAW_BASE}/${bestFile.repository.full_name}/${bestFile.repository.default_branch || 'main'}/${bestFile.path}`;

  const rawResp = await fetchWithTimeout(rawUrl, { headers });
  if (!rawResp.ok) {
    throw new Error(`Failed to download ${rawUrl} (${rawResp.status})`);
  }

  const ddlSource = await rawResp.text();

  // Also check for companion .xml metadata file (optional enrichment)
  let metadata = null;
  try {
    const xmlPath = bestFile.path.replace(/\.(asddls|ddls)$/i, '.ddls.xml');
    if (xmlPath !== bestFile.path) {
      const xmlUrl = `${GITHUB_RAW_BASE}/${bestFile.repository.full_name}/${bestFile.repository.default_branch || 'main'}/${xmlPath}`;
      const xmlResp = await fetchWithTimeout(xmlUrl, { headers });
      if (xmlResp.ok) {
        metadata = { xml: await xmlResp.text() };
      }
    }
  } catch { /* optional, ignore */ }

  return {
    ddl: ddlSource.trimEnd(),
    metadata: {
      source: 'github',
      repository: bestFile.repository.full_name,
      filePath: bestFile.path,
      fileUrl: bestFile.html_url,
      ...(metadata ? { companionXml: metadata.xml } : {}),
    },
  };
}

/**
 * Download a file's raw content directly from a known GitHub repo path.
 * Use this when the caller already knows repository/filePath (e.g. from
 * listFromGitHub's search results) — it skips the Search API entirely,
 * which matters because that API's rate limit is much stricter than plain
 * raw-content downloads and re-searching for a file you've already found
 * just burns through it faster.
 */
export async function fetchRawGitHubFile(repository, filePath, options = {}) {
  const token = options.githubToken || process.env.GITHUB_TOKEN || '';
  const headers = githubHeaders(token);
  const branch = options.defaultBranch || 'main';
  const rawUrl = `${GITHUB_RAW_BASE}/${repository}/${branch}/${filePath}`;

  const resp = await fetchWithTimeout(rawUrl, { headers });
  if (!resp.ok) {
    throw new Error(`Failed to download ${rawUrl} (${resp.status})`);
  }
  const ddlSource = await resp.text();

  return {
    ddl: ddlSource.trimEnd(),
    metadata: {
      source: 'github',
      repository,
      filePath,
      fileUrl: options.fileUrl || rawUrl,
    },
  };
}

// ── SAP Business Accelerator Hub catalog backend ────────────────────────────

const HUB_CATALOG_BASE = 'https://api.sap.com/odata/1.0/catalog.svc';

/** Strip HTML tags and collapse whitespace from the Hub's rich-text description fields. */
function stripHtml(html) {
  return (html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Fetch structured field metadata for a CDS view from the SAP Business
 * Accelerator Hub's public catalog. No login/API key required — confirmed
 * by testing this exact entity set (CdsViewsContent.CdsViews) unauthenticated;
 * unlike the generic Artifacts entity set on the same OData service, this one
 * isn't gated. An API key (options.apiKey or SAP_API_HUB_KEY — distinct from
 * fetchFromSAPApi's SAP_API_KEY below, which is for a different, user-owned
 * sandbox service) is sent if present, but is a forward-looking fallback,
 * not something this endpoint currently needs.
 *
 * Gives field name/type/length/description and business context (LoB, app
 * component) straight from SAP's own catalog — but no raw DDL source, since
 * the Hub doesn't expose that publicly at all (confirmed via $metadata: the
 * CDSVIEW entity type has no such property).
 */
async function fetchFromHubCatalog(viewName, options = {}) {
  const url = `${HUB_CATALOG_BASE}/CdsViewsContent.CdsViews('${encodeURIComponent(viewName)}')/$value`;
  const apiKey = options.apiKey || process.env.SAP_API_HUB_KEY || '';
  const headers = { 'User-Agent': 'cds-kb-mcp-fetcher', Accept: 'application/json' };
  if (apiKey) headers.APIKey = apiKey;
  const resp = await fetchWithTimeout(url, { headers }, options.timeout || 30000);
  if (!resp.ok) {
    throw new Error(`Hub catalog fetch failed for "${viewName}" (${resp.status})`);
  }
  const data = await resp.json();

  const fields = (data.fields || []).map(f => ({
    name: f.fieldname,
    dataType: f.datatype || '',
    length: f.fieldlength ? String(parseInt(f.fieldlength, 10)) : '',
    description: f.description || '',
    isKey: false, // the Hub doesn't expose key-field info
  }));

  return {
    ddl: '', // never available from the Hub — confirmed via its OData $metadata
    metadata: {
      source: 'hub-catalog',
      sourceUrl: url,
      label: data.cdsview_title || viewName,
      description: stripHtml(data.short_description) || data.cdsview_title || '',
      appComponent: data.application_component || '',
      lob: data.LoB || '',
      businessContexts: (data.business_contexts || []).map(c => c.context_description).filter(Boolean),
      state: data.status || '',
    },
    syntheticFields: fields,
  };
}

// ── OData backend ───────────────────────────────────────────────────────────

/**
 * Fetch CDS view DDL from a custom OData service.
 * The service should be deployed in the SAP system and expose DDL via READ REPORT.
 *
 * Expected endpoint format:
 *   GET {baseUrl}/ddl?view={viewName}
 *
 * Response format (JSON):
 *   { "viewName": "...", "ddlSource": "...", "appComponent": "...", "label": "..." }
 */
async function fetchFromOData(viewName, options = {}) {
  const baseUrl = options.sourceUrl || process.env.SAP_ODATA_URL || '';
  if (!baseUrl) {
    throw new Error('OData source URL required. Set --source-url or SAP_ODATA_URL env var.');
  }

  const username = options.username || process.env.SAP_USERNAME || '';
  const password = options.password || process.env.SAP_PASSWORD || '';

  const url = `${baseUrl.replace(/\/+$/, '')}/ddl?view=${encodeURIComponent(viewName)}`;
  const headers = { Accept: 'application/json' };

  if (username && password) {
    headers.Authorization = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
  }

  const resp = await fetchWithTimeout(url, { headers });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`OData fetch failed (${resp.status}): ${text}`);
  }

  const data = await resp.json();
  if (!data.ddlSource) {
    throw new Error(`OData response missing ddlSource for view "${viewName}"`);
  }

  return {
    ddl: data.ddlSource.trimEnd(),
    metadata: {
      source: 'odata',
      sourceUrl: baseUrl,
      appComponent: data.appComponent || '',
      label: data.label || '',
      ...(data.softwareComponent ? { softwareComponent: data.softwareComponent } : {}),
    },
  };
}

// ── SAP API Business Hub backend ────────────────────────────────────────────

/**
 * Look up the field list for one entity (view) out of a parsed sap-api metadata
 * object, matching by EntityType name first, then by EntitySet name.
 */
function getFieldsForEntity(metadata, name) {
  const normalized = (name || '').toUpperCase();
  const direct = (metadata.entityDetails || []).find(e => e.name.toUpperCase() === normalized);
  if (direct) return direct.fields;

  const setDetail = (metadata.entitySetDetails || []).find(s => s.name.toUpperCase() === normalized);
  if (setDetail) {
    const viaSet = (metadata.entityDetails || []).find(e => e.name.toUpperCase() === setDetail.entityType.toUpperCase());
    if (viaSet) return viaSet.fields;
  }
  return [];
}

/**
 * Fetch CDS view metadata from SAP API Business Hub / SAP Business Accelerator Hub.
 * Note: SAP API Hub does NOT expose raw DDL source. This fetches the OData $metadata
 * to extract field list, entity type info, and service details.
 *
 * Auth: the Hub protects its sandbox with an `APIKey` header (obtained by registering
 * on the Hub and subscribing to an app) — not a username/password.
 *
 * Usage:
 *   --source sap-api --source-url https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_PURCHASEORDER_PROCESS_SRV --sap-api-key <key>
 */
async function fetchFromSAPApi(viewName, options = {}) {
  const baseUrl = options.sourceUrl || '';
  if (!baseUrl) {
    throw new Error('SAP API Hub URL required. Use --source-url with the OData service URL (not the Hub browsing page — that page needs a logged-in browser session).');
  }
  const apiKey = options.apiKey || process.env.SAP_API_KEY || '';

  const metadataHeaders = { Accept: 'application/xml', 'User-Agent': 'cds-kb-mcp-fetcher' };
  if (apiKey) metadataHeaders.APIKey = apiKey;

  // Try common $metadata endpoint patterns
  const metadataUrls = [
    `${baseUrl.replace(/\/+$/, '')}/$metadata`,
    `${baseUrl.replace(/\/+$/, '')}/svc/$metadata`,
    `${baseUrl.replace(/\/+$/, '')}/odata/v2/$metadata`,
  ];

  let metadataXml = '';
  let metadataUrl = '';
  for (const url of metadataUrls) {
    try {
      const resp = await fetchWithTimeout(url, { headers: metadataHeaders });
      if (resp.ok) {
        metadataXml = await resp.text();
        metadataUrl = url;
        break;
      }
    } catch { /* try next */ }
  }

  if (!metadataXml) {
    // Try fetching the API Hub page to extract the service definition URL
    const pageResp = await fetchWithTimeout(baseUrl, {
      headers: apiKey ? { 'User-Agent': 'cds-kb-mcp-fetcher', APIKey: apiKey } : { 'User-Agent': 'cds-kb-mcp-fetcher' },
    });
    if (!pageResp.ok) {
      throw new Error(`Cannot access SAP API Hub at ${baseUrl} (${pageResp.status}). Provide a direct $metadata URL via --source-url` +
        (apiKey ? '.' : ', and an API key via --sap-api-key or SAP_API_KEY.'));
    }
    throw new Error(
      `SAP API Hub page fetched but no $metadata found at ${baseUrl}.\n` +
      `Tip: Find the service's $metadata URL (e.g. https://sandbox.api.sap.com/.../API_SERVICE/$metadata)` +
      ` and pass it via --source-url.`
    );
  }

  // Parse EntitySet elements (order-independent attribute matching)
  const entitySetDetails = [];
  const esTagRegex = /<EntitySet\s+([^>]*)\/?>/g;
  let esTagMatch;
  while ((esTagMatch = esTagRegex.exec(metadataXml)) !== null) {
    const attrs = esTagMatch[1];
    const nameMatch = /Name="([^"]+)"/.exec(attrs);
    const typeMatch = /EntityType="([^"]+)"/.exec(attrs);
    if (nameMatch) {
      entitySetDetails.push({
        name: nameMatch[1],
        entityType: typeMatch ? typeMatch[1].split('.').pop() : '',
      });
    }
  }

  // Parse each EntityType block separately so fields stay attributed to their
  // own entity instead of merging every Property in the document into one
  // flat list (a single OData service can expose several EntityTypes, e.g.
  // a header entity and an item entity).
  const entityDetails = [];
  const etBlockRegex = /<EntityType\s+([^>]*)>([\s\S]*?)<\/EntityType>/g;
  let etMatch;
  while ((etMatch = etBlockRegex.exec(metadataXml)) !== null) {
    const nameMatch = /Name="([^"]+)"/.exec(etMatch[1]);
    if (!nameMatch) continue;
    const block = etMatch[2];

    const keyFields = [];
    const keyBlockMatch = /<Key>([\s\S]*?)<\/Key>/.exec(block);
    if (keyBlockMatch) {
      const keyPropRegex = /<PropertyRef\s+[^>]*Name="([^"]+)"[^>]*\/?>/g;
      let keyMatch;
      while ((keyMatch = keyPropRegex.exec(keyBlockMatch[1])) !== null) {
        keyFields.push(keyMatch[1]);
      }
    }

    const fields = [];
    const propRegex = /<Property\s+[^>]*Name="([^"]+)"[^>]*Type="([^"]+)"[^>]*\/?>/g;
    let propMatch;
    while ((propMatch = propRegex.exec(block)) !== null) {
      fields.push({ name: propMatch[1], type: propMatch[2], isKey: keyFields.includes(propMatch[1]) });
    }

    entityDetails.push({ name: nameMatch[1], fields, keyFields });
  }

  // Flattened view across all entity types, for callers that just want an
  // overview of the whole service (e.g. fetchViewList('sap-api')).
  const allFields = entityDetails.flatMap(e => e.fields);
  const allKeyFields = entityDetails.flatMap(e => e.keyFields);

  const metadata = {
    source: 'sap-api',
    sourceUrl: baseUrl,
    metadataUrl,
    entitySets: entitySetDetails.map(s => s.name),
    entitySetDetails,
    entityTypes: entityDetails.map(e => e.name),
    entityDetails,
    fields: allFields,
    keyFields: allKeyFields,
  };

  // Field list for the specific requested view (or the whole service if no
  // view name was given or no match was found).
  const matched = viewName ? getFieldsForEntity(metadata, viewName) : [];
  const targetFields = matched.length > 0 ? matched : allFields;

  return {
    ddl: '',
    metadata,
    syntheticFields: targetFields.map(f => ({
      name: f.name,
      isKey: f.isKey,
      type: f.type,
    })),
  };
}

// ── List views from source ──────────────────────────────────────────────────

/**
 * Fetch a list of available views from a source.
 * Currently supported:
 *   - github-search: Search GitHub for CDS view .asddls files
 *   - odata: List views from custom OData service (GET /views)
 *   - sap-api: List entity sets from an OData $metadata
 */
export async function fetchViewList(options = {}) {
  const source = options.source || 'github';

  switch (source) {
    case 'github': {
      return await listFromGitHub(options);
    }
    case 'odata': {
      const baseUrl = options.sourceUrl || process.env.SAP_ODATA_URL || '';
      if (!baseUrl) throw new Error('OData source URL required for listing views.');
      const username = options.username || process.env.SAP_USERNAME || '';
      const password = options.password || process.env.SAP_PASSWORD || '';
      const headers = { Accept: 'application/json' };
      if (username && password) {
        headers.Authorization = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
      }
      const url = `${baseUrl.replace(/\/+$/, '')}/views`;
      const resp = await fetchWithTimeout(url, { headers });
      if (!resp.ok) throw new Error(`Failed to list views (${resp.status})`);
      return await resp.json();
    }
    case 'sap-api': {
      // Extract EntitySet names + their fields from $metadata
      const result = await fetchFromSAPApi('', options);
      return {
        views: result.metadata.entitySets.map(name => ({
          name,
          type: 'entity-set',
          fields: getFieldsForEntity(result.metadata, name),
        })),
        metadata: result.metadata,
      };
    }
    default:
      throw new Error(`Unknown source: ${source}. Supported: github, odata, sap-api`);
  }
}

/**
 * Search GitHub for .asddls files to discover available CDS views.
 */
async function listFromGitHub(options = {}) {
  const query = options.searchQuery || 'extension:asddls';
  const token = options.githubToken || process.env.GITHUB_TOKEN || '';
  const headers = githubHeaders(token);

  const url = `${GITHUB_API_BASE}/search/code?q=${encodeURIComponent(query)}&per_page=${options.limit || 30}`;
  const resp = await fetchGitHubSearch(url, headers);
  if (!resp.ok) throw new Error(`GitHub search failed (${resp.status})`);

  const data = await resp.json();
  const views = (data.items || []).map(item => {
    const name = item.name.replace(/\.(asddls|ddls|abap)$/i, '').toUpperCase();
    return {
      name,
      repository: item.repository.full_name,
      filePath: item.path,
      fileUrl: item.html_url,
      defaultBranch: item.repository.default_branch || 'main',
      score: item.score || 0,
    };
  });

  return { views, totalCount: data.total_count || 0 };
}

// ── Main fetch entry point ──────────────────────────────────────────────────

/**
 * Fetch a CDS view DDL source from an external source.
 *
 * @param {string} viewName - View name (e.g. "I_PurchaseOrderAPI01")
 * @param {object} [options]
 * @param {'github'|'odata'|'sap-api'} [options.source='github'] - Fetch backend
 * @param {string} [options.sourceUrl] - URL for OData/SAP-API backends
 * @param {string} [options.githubToken] - GitHub API token (optional)
 * @param {string} [options.username] - Username for OData basic auth
 * @param {string} [options.password] - Password for OData basic auth
 * @returns {Promise<{ ddl: string, metadata: object, syntheticFields?: Array }>}
 */
export async function fetchViewDDL(viewName, options = {}) {
  const source = options.source || 'github';

  switch (source) {
    case 'github':
      return await fetchFromGitHub(viewName, options);
    case 'odata':
      return await fetchFromOData(viewName, options);
    case 'sap-api':
      return await fetchFromSAPApi(viewName, options);
    case 'hub-catalog':
      return await fetchFromHubCatalog(viewName, options);
    default:
      throw new Error(`Unknown source: ${source}. Supported: github, odata, sap-api, hub-catalog`);
  }
}

// ── Describe fetch result ──────────────────────────────────────────────────

export function describeFetchResult(result) {
  const meta = result.metadata || {};
  const parts = [
    `Source: ${meta.source || 'unknown'}`,
    `DDL length: ${result.ddl ? result.ddl.length + ' chars' : 'N/A (metadata only)'}`,
  ];
  if (meta.repository) parts.push(`Repo: ${meta.repository}`);
  if (meta.filePath) parts.push(`File: ${meta.filePath}`);
  if (meta.sourceUrl) parts.push(`URL: ${meta.sourceUrl}`);
  if (meta.entitySets && meta.entitySets.length > 0) {
    parts.push(`EntitySets: ${meta.entitySets.length}`);
    parts.push(`Fields: ${(meta.fields || []).length}`);
  }
  return parts.join(' | ');
}
