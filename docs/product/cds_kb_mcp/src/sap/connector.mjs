/**
 * SAP connector abstraction + ADT HTTP implementation.
 *
 * ## Endpoint compatibility (ADT varies by release / SP / SICF activation)
 *
 * Tested path shapes (probe + document per landscape):
 * - Discovery: `GET /sap/bc/adt/discovery`
 * - Repository search: `POST /sap/bc/adt/repository/informationsystem/search`
 *   with `operation=quickSearch` query params (ADT Eclipse uses this heavily).
 * - Package: `GET /sap/bc/adt/packages/{name}`
 * - DDL source (DDLS / data_definition):
 *   `GET /sap/bc/adt/ddic/ddl/sources/{name}/source/main`
 *   Accept: `text/plain` or ADT source media types.
 * - DDL object properties:
 *   `GET /sap/bc/adt/ddic/ddl/sources/{name}`
 *
 * Some systems require CSRF token (`x-csrf-token: fetch` then replay).
 * Client: `sap-client` query param and/or `sap-client` header.
 *
 * Unsupported / undocumented endpoints are not used. Failures surface as
 * structured errors; do not fall back to table/SQL reads.
 */

import { parseAdtObjectEntries, parsePackageNames } from './xml.mjs';
import { isCustomObjectName, matchesNamespace } from './config.mjs';

export class SapConnectorError extends Error {
  constructor(message, { status, path: reqPath, code } = {}) {
    super(message);
    this.name = 'SapConnectorError';
    this.status = status;
    this.path = reqPath;
    this.code = code || 'SAP_CONNECTOR';
  }
}

/** @typedef {import('./config.mjs').loadSapConfig extends Function ? any : never} SapConfig */

/**
 * @param {object} config — from loadSapConfig when configured
 * @param {{ fetch?: typeof fetch }} [deps]
 */
export function createConnector(config, deps = {}) {
  if (!config?.configured) {
    throw new SapConnectorError('SAP not configured', { code: 'NOT_CONFIGURED' });
  }
  if (config.connector === 'adt') {
    return new AdtConnector(config, deps);
  }
  throw new SapConnectorError(`unsupported connector: ${config.connector}`, { code: 'UNSUPPORTED' });
}

export class AdtConnector {
  /**
   * @param {object} config
   * @param {{ fetch?: typeof fetch }} deps
   */
  constructor(config, deps = {}) {
    this.config = config;
    this.fetchFn = deps.fetch || globalThis.fetch.bind(globalThis);
    this._csrf = null;
    this._cookie = null;
  }

  async testConnection() {
    const res = await this.request('GET', '/sap/bc/adt/discovery', {
      headers: { Accept: 'application/xml, application/atomsvc+xml, */*' },
    });
    return {
      ok: res.status >= 200 && res.status < 300,
      status: res.status,
      systemAlias: this.config.systemAlias,
      discoveryBytes: res.bodyText?.length ?? 0,
      endpoint: '/sap/bc/adt/discovery',
    };
  }

  /**
   * List packages matching include patterns (client-side re-check).
   */
  async listPackages({ max = 200 } = {}) {
    const patterns = this.config.packageInclude;
    const collected = [];
    const warnings = [];

    for (const pat of patterns) {
      const query = pat.endsWith('*') ? pat.slice(0, -1) : pat;
      try {
        // ADT quickSearch — object type DEVC/K for packages when available
        const qs = new URLSearchParams({
          operation: 'quickSearch',
          query: `${query}*`,
          maxResults: String(Math.min(max, 200)),
        });
        const res = await this.request(
          'POST',
          `/sap/bc/adt/repository/informationsystem/search?${qs}`,
          {
            headers: {
              Accept: 'application/xml, application/atom+xml, */*',
              'Content-Type': 'application/xml',
            },
            body: '',
          },
        );
        const names = parsePackageNames(res.bodyText).filter((n) =>
          matchesNamespace(n, patterns) && !matchesNamespace(n, this.config.packageExclude),
        );
        for (const name of names) {
          if (!collected.find((p) => p.name === name)) {
            collected.push({ name, systemAlias: this.config.systemAlias });
          }
        }
      } catch (e) {
        warnings.push(`package search for ${pat}: ${e.message}`);
      }
    }

    collected.sort((a, b) => a.name.localeCompare(b.name));
    return { items: collected.slice(0, max), warnings, next_cursor: null };
  }

  /**
   * List repository objects in a package (DDLS / data_definition first).
   */
  async listObjects({ packageName, objectType = 'data_definition', max = 200 } = {}) {
    if (!packageName) throw new SapConnectorError('packageName required', { code: 'BAD_INPUT' });
    if (!matchesNamespace(packageName, this.config.packageInclude)) {
      throw new SapConnectorError(`package ${packageName} outside Z*/Y* include`, { code: 'NAMESPACE' });
    }

    const adtType = toAdtType(objectType);
    const qs = new URLSearchParams({
      operation: 'quickSearch',
      query: `package:${packageName}`,
      maxResults: String(Math.min(max, 500)),
    });
    if (adtType) qs.set('objectType', adtType);

    const res = await this.request(
      'POST',
      `/sap/bc/adt/repository/informationsystem/search?${qs}`,
      {
        headers: {
          Accept: 'application/xml, application/atom+xml, */*',
          'Content-Type': 'application/xml',
        },
        body: '',
      },
    );

    let entries = parseAdtObjectEntries(res.bodyText);
    // Client-side filter: custom names only + optional type
    entries = entries.filter((e) => {
      if (!isCustomObjectName(e.name)) return false;
      if (!matchesNamespace(e.name, this.config.relatedObjectInclude) &&
          !matchesNamespace(e.package || packageName, this.config.packageInclude)) {
        // Still allow if package matches (root objects)
        if (!matchesNamespace(packageName, this.config.packageInclude)) return false;
      }
      if (objectType === 'data_definition' && e.type && !isDdlType(e.type)) return false;
      return true;
    });

    const items = entries.map((e) => ({
      name: e.name,
      objectType: fromAdtType(e.type) || objectType,
      package: e.package || packageName,
      systemAlias: this.config.systemAlias,
      adtType: e.type || null,
    }));

    items.sort((a, b) => a.name.localeCompare(b.name));
    return { items: items.slice(0, max), warnings: [], next_cursor: null };
  }

  /**
   * Fetch one object — data_definition / DDLS first.
   */
  async getObject({ objectType = 'data_definition', name, includeInactive = false } = {}) {
    if (!name) throw new SapConnectorError('name required', { code: 'BAD_INPUT' });
    if (!isCustomObjectName(name)) {
      throw new SapConnectorError(`object ${name} is not Z*/Y* — SAP standard skipped`, { code: 'NAMESPACE' });
    }
    if (includeInactive || this.config.includeInactive) {
      throw new SapConnectorError('inactive versions require explicit future opt-in', { code: 'INACTIVE' });
    }

    const ot = objectType || 'data_definition';
    if (ot !== 'data_definition' && ot !== 'ddls' && ot !== 'DDLX' && ot !== 'DDLS') {
      return {
        identity: {
          systemAlias: this.config.systemAlias,
          objectType: ot,
          name: name.toUpperCase(),
        },
        supported: false,
        reason: `object type ${ot} not in vertical slice (data_definition/DDLS only)`,
        source: null,
        metadata: null,
      };
    }

    const enc = encodeURIComponent(name.toUpperCase());
    const metaPath = `/sap/bc/adt/ddic/ddl/sources/${enc}`;
    const sourcePath = `/sap/bc/adt/ddic/ddl/sources/${enc}/source/main`;

    let metadataXml = '';
    let packageName = '';
    const warnings = [];
    try {
      const metaRes = await this.request('GET', metaPath, {
        headers: { Accept: 'application/vnd.sap.adt.ddl+xml, application/xml, */*' },
      });
      metadataXml = metaRes.bodyText || '';
      packageName = /adtcore:packageName="([^"]+)"/i.exec(metadataXml)?.[1] || '';
    } catch (e) {
      warnings.push(`metadata: ${e.message}`);
    }

    const srcRes = await this.request('GET', sourcePath, {
      headers: { Accept: 'text/plain, text/*, */*' },
    });
    const source = normalizeLf(srcRes.bodyText || '');

    return {
      identity: {
        systemAlias: this.config.systemAlias,
        objectType: 'data_definition',
        name: name.toUpperCase(),
        package: packageName || null,
      },
      supported: true,
      source,
      metadata: {
        package: packageName || null,
        language: 'EN',
        active: true,
        adtType: 'DDLS/DF',
        handler: 'data_definition',
        extractorVersion: this.config.extractorVersion,
      },
      warnings,
      rawMetadataXmlBytes: metadataXml.length,
    };
  }

  /**
   * Best-effort static dependencies from DDL source text (no live where-used).
   */
  async getDependencies({ objectType = 'data_definition', name, sourceText } = {}) {
    let source = sourceText;
    if (!source) {
      const obj = await this.getObject({ objectType, name });
      if (!obj.supported) {
        return { identity: obj.identity, dependencies: [], external: [], warnings: [obj.reason] };
      }
      source = obj.source;
    }
    return extractDdlDependencies(source, name, this.config);
  }

  /**
   * Low-level HTTPS request with Basic auth, sap-client, timeouts.
   * Injected fetch enables mocked tests.
   */
  async request(method, urlPath, { headers = {}, body } = {}) {
    if (!this.config.tlsVerify) {
      throw new SapConnectorError('TLS verify must remain enabled', { code: 'TLS' });
    }

    const url = new URL(urlPath.startsWith('http') ? urlPath : `${this.config.baseUrl}${urlPath}`);
    if (url.protocol !== 'https:') {
      throw new SapConnectorError('HTTPS only', { code: 'TLS', path: urlPath });
    }
    if (!url.searchParams.has('sap-client')) {
      url.searchParams.set('sap-client', this.config.sapClient);
    }

    const auth = Buffer.from(`${this.config.username}:${this.config.password}`, 'utf8').toString('base64');
    const reqHeaders = {
      Authorization: `Basic ${auth}`,
      'sap-client': this.config.sapClient,
      ...headers,
    };
    if (this._csrf) reqHeaders['x-csrf-token'] = this._csrf;
    if (this._cookie) reqHeaders.Cookie = this._cookie;

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.config.requestTimeoutMs);
    let res;
    try {
      res = await this.fetchFn(url.toString(), {
        method,
        headers: reqHeaders,
        body: body === undefined ? undefined : body,
        signal: controller.signal,
        redirect: 'manual',
      });
    } catch (e) {
      clearTimeout(timer);
      if (e.name === 'AbortError') {
        throw new SapConnectorError(`timeout after ${this.config.requestTimeoutMs}ms`, {
          code: 'TIMEOUT',
          path: url.pathname,
        });
      }
      throw new SapConnectorError(e.message || 'network error', { code: 'NETWORK', path: url.pathname });
    }
    clearTimeout(timer);

    const csrf = res.headers?.get?.('x-csrf-token');
    if (csrf && csrf !== 'Required') this._csrf = csrf;
    const setCookie = res.headers?.get?.('set-cookie');
    if (setCookie) this._cookie = setCookie.split(';')[0];

    // CSRF retry once on 403
    if (res.status === 403 && method !== 'GET' && !headers['x-csrf-token']) {
      await this._fetchCsrf();
      return this.request(method, urlPath, {
        headers: { ...headers, 'x-csrf-token': this._csrf || 'Fetch' },
        body,
      });
    }

    const bodyText = typeof res.text === 'function' ? await res.text() : '';
    if (res.status < 200 || res.status >= 300) {
      throw new SapConnectorError(`HTTP ${res.status} for ${url.pathname}`, {
        status: res.status,
        path: url.pathname,
        code: 'HTTP',
      });
    }

    return { status: res.status, bodyText, headers: res.headers };
  }

  async _fetchCsrf() {
    const res = await this.request('GET', '/sap/bc/adt/discovery', {
      headers: { 'x-csrf-token': 'Fetch', Accept: 'application/xml, */*' },
    });
    return res;
  }
}

/** Static DDL dependency extraction (shared for tests). */
export function extractDdlDependencies(source, rootName, config) {
  const text = String(source || '');
  const names = new Set();
  // as select from X / association [ ] to Y / redirect to Z / define view entity extending W
  const patterns = [
    /\bas\s+select\s+from\s+([\/A-Za-z_][\w\/]*)/gi,
    /\bselect\s+from\s+([\/A-Za-z_][\w\/]*)/gi,
    /\bassociation\b[^;]*?\bto\s+([\/A-Za-z_][\w\/]*)/gi,
    /\bcomposition\b[^;]*?\bof\s+([\/A-Za-z_][\w\/]*)/gi,
    /\bredirect\s+(?:to\s+)?(?:parent\s+)?([\/A-Za-z_][\w\/]*)/gi,
    /\bextending\s+([\/A-Za-z_][\w\/]*)/gi,
    /\bprovider\s+contract\s+\w+\s+view\s+entity\s+\w+\s+as\s+projection\s+on\s+([\/A-Za-z_][\w\/]*)/gi,
    /\bas\s+projection\s+on\s+([\/A-Za-z_][\w\/]*)/gi,
  ];
  for (const re of patterns) {
    let m;
    while ((m = re.exec(text)) !== null) {
      const n = m[1].replace(/"/g, '').toUpperCase();
      if (n && n !== String(rootName || '').toUpperCase()) names.add(n);
    }
  }

  const related = config?.relatedObjectInclude || ['Z*', 'Y*'];
  const dependencies = [];
  const external = [];
  for (const n of [...names].sort()) {
    const entry = {
      name: n,
      objectType: 'data_definition',
      confidence: 'static_ddl_parse',
    };
    if (isCustomObjectName(n) && matchesNamespace(n, related)) {
      dependencies.push({ ...entry, inclusion: 'related_custom' });
    } else {
      external.push({ ...entry, inclusion: 'external_reference' });
    }
  }

  return {
    identity: {
      systemAlias: config?.systemAlias || 'DEV',
      objectType: 'data_definition',
      name: String(rootName || '').toUpperCase(),
    },
    dependencies,
    external,
    warnings: [
      'Dependencies are best-effort static parses of DDL text; dynamic references are not resolved.',
    ],
  };
}

function toAdtType(objectType) {
  const t = String(objectType || '').toLowerCase();
  if (t === 'data_definition' || t === 'ddls') return 'DDLS/DF';
  if (t === 'package') return 'DEVC/K';
  return null;
}

function fromAdtType(adtType) {
  const t = String(adtType || '').toUpperCase();
  if (t.startsWith('DDLS')) return 'data_definition';
  if (t.startsWith('DEVC')) return 'package';
  return null;
}

function isDdlType(adtType) {
  return String(adtType || '').toUpperCase().startsWith('DDLS');
}

function normalizeLf(s) {
  return String(s).replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}
