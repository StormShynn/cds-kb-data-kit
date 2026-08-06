// src/auto-tagger.mjs
// Automatically generate tags for CDS views based on:
//   - app_component → module hierarchy + component tag
//   - View name prefix → view type (I_=interface, C_=consumption, D_=data-extraction)
//   - Taxonomy mapping → lob, bo
//   - Description keywords → business object inference
//
// Usage:
//   import { autoTag } from './src/auto-tagger.mjs';
//   const tags = autoTag({ name, appComponent, description });

import fs from 'node:fs/promises';
import path from 'node:path';

// ── View type prefix mapping ────────────────────────────────────────────────

const VIEW_TYPE_PREFIXES = [
  { prefix: 'I_',  tag: 'interface-view',     description: 'Interface / Basic view' },
  { prefix: 'C_',  tag: 'consumption-view',   description: 'Consumption view' },
  { prefix: 'D_',  tag: 'data-extraction',    description: 'Data extraction view' },
  { prefix: 'E_',  tag: 'extension-view',     description: 'Extension view' },
  { prefix: 'P_',  tag: 'parameter-view',     description: 'Parameter view' },
  { prefix: 'R_',  tag: 'reuse-view',         description: 'Reuse view' },
  { prefix: 'V_',  tag: 'value-help',         description: 'Value help view' },
];

// ── Build indexed lookups from taxonomy data ───────────────────────────────

/**
 * Build LOB and BO lookup maps from taxonomy.json data.
 * Returns { lobByModule: {}, boKeywords: [] } or null if taxonomy is empty.
 */
function _buildTaxonomyLookups(taxonomy) {
  if (!taxonomy || !taxonomy.lobs || !taxonomy.bos) return null;

  // Build module-code → LOB tag mapping from taxonomy LOB entries
  // E.g., if lob has keywords ["MM-PUR", "MM", "Purchase Order"...]
  // we map MM → lob:sourcing & procurement
  const lobByModule = {};
  for (const lob of taxonomy.lobs) {
    if (!lob.keywords) continue;
    for (const kw of lob.keywords) {
      // Map short uppercase module codes (MM, FI, SD, CO, etc.)
      const upper = kw.toUpperCase();
      if (/^[A-Z][A-Z0-9]{1,3}$/.test(upper)) {
        lobByModule[upper] = lob.name || lob.tag;
      }
    }
  }

  // Build BO keyword matchers from taxonomy BO entries
  // Filter to only include entries with tag starting with 'bo:'
  // (taxonomy.bos also contains component:*, module tags, and other generic entries)
  const boKeywords = [];
  for (const bo of taxonomy.bos) {
    if (!bo.keywords || !bo.tag || !bo.tag.startsWith('bo:')) continue;
    const boName = bo.tag.slice(3); // strip 'bo:' prefix
    boKeywords.push({
      bo: boName,
      tag: bo.tag,
      keywords: bo.keywords.map(k => k.toLowerCase()),
    });
  }

  // Build component keyword matchers from taxonomy component:* entries.
  // These are used to auto-detect app_component from view name/description
  // when app_component is not explicitly provided.
  const componentKeywords = [];
  for (const entry of taxonomy.bos) {
    if (!entry.keywords || !entry.tag || !entry.tag.startsWith('component:')) continue;
    const compName = entry.tag.slice(10); // strip 'component:' prefix
    // Extract the actual SAP app component code from keywords
    // (matches patterns like "MM-PUR-PO-2CL", "FI-GL-2CL", "SD-SLS-SO-2CL")
    // Extract app component code from keywords (matches both multi-segment "MM-PUR-PO-2CL"
    // and single-segment "MM", "FI", "SD" codes)
    const appCompCode = entry.keywords.find(k => /^[A-Z]{2,}(?:-[A-Z0-9]+)*$/.test(k)) || '';
    componentKeywords.push({
      tag: entry.tag,
      name: compName,
      appComponent: appCompCode,
      keywords: entry.keywords.map(k => k.toLowerCase()),
    });
  }

  return { lobByModule, boKeywords, componentKeywords };
}

// ── Fallback hardcoded maps (when taxonomy is not available) ────────────────

const FALLBACK_LOB_MAP = {
  'FI':       'Finance',
  'FIN':      'Finance',
  'CO':       'Controlling',
  'SD':       'Sales & Distribution',
  'MM':       'Sourcing & Procurement',
  'PP':       'Manufacturing',
  'PM':       'Plant Maintenance',
  'QM':       'Quality Management',
  'LE':       'Logistics Execution',
  'LO':       'Logistics General',
  'CA':       'Cross-Application',
  'BC':       'Basis Components',
  'CRM':      'Customer Relationship',
  'SCM':      'Supply Chain',
  'TM':       'Transportation Management',
  'EHS':      'Environment Health & Safety',
  'PLM':      'Product Lifecycle Management',
  'RE':       'Real Estate',
  'SUS':      'Sustainability',
  'PPM':      'Portfolio and Project Management',
  'PS':       'Project Management',
  'PSM':      'Public Sector Management',
  'CM':       'Claim Management',
  'SLC':      'Supplier Lifecycle Management',
  'IS':       'Other',
  'FT':       'Foreign Trade',
  'FS':       'Financial Services',
  'MOB':      'Logistics General',
  'BNS':      'Other',
  'EC':       'Controlling',
  'AC':       'Cross-Application',
};

const FALLBACK_BO_MAP = [
  { bo: 'PurchaseOrder',          keywords: ['purchaseorder', 'purchase order', 'po', 'ekko', 'purchasing', 'pur'] },
  { bo: 'SalesOrder',             keywords: ['salesorder', 'sales order', 'so', 'vbak', 'sales document'] },
  { bo: 'SalesDocument',          keywords: ['salesdocument', 'sales document', 'sales'] },
  { bo: 'BillingDocument',        keywords: ['billingdocument', 'billing document', 'invoice', 'vbrk', 'billing'] },
  { bo: 'Material',               keywords: ['material', 'product', 'mara', 'makt'] },
  { bo: 'BusinessPartner',        keywords: ['businesspartner', 'business partner', 'bp', 'but000'] },
  { bo: 'Supplier',               keywords: ['supplier', 'vendor', 'lfa1'] },
  { bo: 'Customer',               keywords: ['customer', 'kna1'] },
  { bo: 'CompanyCode',            keywords: ['companycode', 'company code', 't001'] },
  { bo: 'CostCenter',             keywords: ['costcenter', 'cost center', 'csks'] },
  { bo: 'ProfitCenter',           keywords: ['profitcenter', 'profit center', 'cepc'] },
  { bo: 'JournalEntry',           keywords: ['journalentry', 'journal entry', 'accounting document', 'acdoca', 'bkpf'] },
  { bo: 'DeliveryDocument',       keywords: ['deliverydocument', 'delivery', 'likp'] },
  { bo: 'Inventory',              keywords: ['inventory', 'stock', 'mard', 'mchb'] },
  { bo: 'Asset',                  keywords: ['asset', 'fixed asset', 'depreciation'] },
  { bo: 'Bank',                   keywords: ['bank', 'house bank'] },
  { bo: 'Plant',                  keywords: ['plant', 't001w'] },
  { bo: 'ProductionOrder',        keywords: ['productionorder', 'production order', 'manufacturing order', 'afko'] },
  { bo: 'MaintenanceOrder',       keywords: ['maintenanceorder', 'maintenance order', 'afih'] },
  { bo: 'Project',                keywords: ['project', 'wbs', 'proj', 'prps'] },
  { bo: 'PricingCondition',       keywords: ['pricingcondition', 'pricing condition', 'condition', 'konv', 'konp'] },
  { bo: 'PurchasingOrganization', keywords: ['purchasingorganization', 'purchasing org', 't024e'] },
  { bo: 'SalesOrganization',      keywords: ['salesorganization', 'sales org', 'tvko'] },
  { bo: 'WBS',                    keywords: ['wbs', 'work breakdown'] },
];

// ── Main auto-tag function ─────────────────────────────────────────────────

/**
 * Auto-generate tags for a CDS view based on its metadata.
 *
 * @param {object} view - View metadata
 * @param {string} view.name - View name (e.g. "I_PurchaseOrderAPI01")
 * @param {string} [view.appComponent] - App component (e.g. "MM-PUR-PO-2CL")
 * @param {string} [view.description] - Description text
 * @param {string} [view.label] - EndUserText label
 * @param {string} [view.sourceTable] - Source table or view name
 * @param {Array}  [view.fields] - Field names (for context)
 * @param {object} [taxonomy] - Optional taxonomy data from loadTaxonomy()
 * @returns {Array<string>} List of tags
 */
export function autoTag(view, taxonomy) {
  const tags = [];
  const name = (view.name || '').toUpperCase();
  const appComponent = view.appComponent || '';
  const description = (view.description || view.label || '').toLowerCase();
  const sourceTable = (view.sourceTable || '');

  // Build or fallback lookups
  const taxonomyLookups = taxonomy ? _buildTaxonomyLookups(taxonomy) : null;
  const lobMap = (taxonomyLookups && taxonomyLookups.lobByModule) || FALLBACK_LOB_MAP;
  const boMap = (taxonomyLookups && taxonomyLookups.boKeywords) || FALLBACK_BO_MAP;

  // Auto-detect app_component from view name/description when not provided.
  // Uses taxonomy component:* entries which have keywords matching view names.
  let actualAppComponent = appComponent;
  if (!appComponent && taxonomyLookups && taxonomyLookups.componentKeywords && taxonomyLookups.componentKeywords.length > 0) {
    const searchText = `${name} ${description} ${sourceTable}`.toLowerCase();
    let bestMatch = null;
    let bestScore = 0;
    for (const entry of taxonomyLookups.componentKeywords) {
      // Score = number of matching keywords
      const score = entry.keywords.filter(kw => searchText.includes(kw)).length;
      if (score > bestScore) {
        bestScore = score;
        bestMatch = entry;
      }
    }
    if (bestMatch && bestScore > 0) {
      actualAppComponent = bestMatch.appComponent || bestMatch.name.toUpperCase().replace(/_/g, '-');
    }
  }

  // ── 1. Module tag (from app_component first segment) ──
  // Uses actualAppComponent (inferred or provided)
  if (actualAppComponent) {
    const parts = actualAppComponent.split('-');
    const moduleCode = parts[0];
    if (moduleCode) {
      tags.push(moduleCode.toUpperCase());

      // Add sub-module hierarchy tags (e.g., MM-PUR, MM-PUR-PO)
      let hierarchy = '';
      for (const part of parts) {
        hierarchy = hierarchy ? `${hierarchy}-${part}` : part;
        if (hierarchy !== moduleCode.toUpperCase()) {
          tags.push(hierarchy.toUpperCase());
        }
      }
    }
  }

  // ── 2. Component tag ──
  if (actualAppComponent) {
    tags.push(`component:${actualAppComponent}`);
  }

  // ── 3. View type tag (from prefix) ──
  for (const vtp of VIEW_TYPE_PREFIXES) {
    if (name.startsWith(vtp.prefix)) {
      tags.push(vtp.tag);
      break;
    }
  }

  // ── 4. LOB tag ──
  if (actualAppComponent) {
    const parts = actualAppComponent.split('-');
    const moduleCode = parts[0];
    // Try taxonomy-derived map first (which may have dynamic entries),
    // then fall back to hardcoded map (handled by merge above)
    const lobName = lobMap[moduleCode];
    if (lobName) {
      // lob tag from taxonomy might already be formatted (e.g. "lob:sourcing & procurement")
      // or a plain name from fallback map
      const tag = lobName.startsWith('lob:') ? lobName : `lob:${lobName}`;
      tags.push(tag);
      // Also try matching the full app component path against LOB keywords
      // for more precise LOB assignment
      const appCompUpper = actualAppComponent.toUpperCase();
      if (taxonomyLookups && taxonomyLookups.lobByModule) {
        for (const [key, val] of Object.entries(taxonomyLookups.lobByModule)) {
          if (key !== moduleCode && appCompUpper.includes(key)) {
            const extraTag = val.startsWith('lob:') ? val : `lob:${val}`;
            if (!tags.includes(extraTag)) {
              tags.push(extraTag);
            }
          }
        }
      }
    }
  }

  // ── 5. Business object tag ──
  const searchText = `${name} ${description} ${sourceTable}`.toLowerCase();
  for (const entry of boMap) {
    if (entry.keywords.some(kw => searchText.includes(kw))) {
      const boTag = entry.bo.charAt(0).toLowerCase() + entry.bo.slice(1);
      const tag = entry.tag && entry.tag.startsWith('bo:') ? entry.tag : `bo:${boTag}`;
      tags.push(tag);
      break;
    }
  }

  // ── 6. Additional business keywords from description ──
  if (description) {
    const businessTerms = [
      'purchase order', 'sales order', 'invoice', 'billing', 'delivery',
      'goods receipt', 'goods issue', 'payment', 'customer', 'supplier',
      'vendor', 'material', 'product', 'stock', 'inventory',
      'contract', 'quotation', 'pricing', 'budget', 'plan',
      'document', 'master data', 'transaction', 'notification',
      'order', 'account', 'project', 'task', 'claim',
    ];
    for (const term of businessTerms) {
      if (description.includes(term)) {
        const tag = term.replace(/\s+/g, '-');
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      }
    }
  }

  // ── 7. Deduplicate and sort ──
  const unique = [...new Set(tags)];
  unique.sort((a, b) => {
    const aIsModule = /^[A-Z]{2,4}$/.test(a);
    const bIsModule = /^[A-Z]{2,4}$/.test(b);
    if (aIsModule && !bIsModule) return -1;
    if (!aIsModule && bIsModule) return 1;
    return a.localeCompare(b);
  });

  return unique;
}

// ── autoTag + metadata-only tag-push, shared by every caller that writes a
// view file (add_view.mjs, batch_add.mjs, scripts/add_hub_metadata.mjs) ────

/**
 * autoTag(), plus pushing the "metadata-only" tag when the caller has no
 * DDL source for this view (a Hub-catalog fetch, or an sap-api fallback).
 *
 * @param {object} view - View metadata (see autoTag)
 * @param {object} [taxonomy] - Optional taxonomy data from loadTaxonomy()
 * @param {boolean} hasSource - Whether real DDL source is available
 * @returns {Array<string>} List of tags
 */
export function autoTagWithMetadataFlag(view, taxonomy, hasSource) {
  const tags = autoTag(view, taxonomy);
  if (!hasSource && !tags.includes('metadata-only')) {
    tags.push('metadata-only');
  }
  return tags;
}

// ── Load taxonomy from file and use it for enhanced tagging ─────────────────

/**
 * Load taxonomy.json and use its content to enhance auto-tagging.
 * This provides richer keyword-to-LOB and keyword-to-BO mapping.
 */
export async function loadTaxonomy(dataDir) {
  try {
    const filePath = path.join(dataDir, 'index', 'taxonomy.json');
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return null;
  }
}
