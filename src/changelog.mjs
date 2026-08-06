// src/changelog.mjs
// Track additions, updates, and deletions of CDS views in the knowledge base.
// Stores a changelog as JSON in cds-kb-data/changelog.json.
//
// The changelog records:
//   - viewName: Name of the CDS view
//   - action: 'added' | 'updated' | 'skipped' | 'error'
//   - timestamp: ISO date string
//   - source: How the view was obtained (file, github, odata, sap-api, stdin)
//   - fields: Number of fields parsed
//   - associations: Number of associations
//   - tags: Number of tags assigned
//   - error: Error message (if action === 'error')
//   - previousFile: Previous file hash (for updates, to detect changes)
//
// Usage:
//   import { addChangelogEntry, getChangelog, getDailySummary } from './src/changelog.mjs';
//   await addChangelogEntry('cds-kb-data', { viewName: 'I_PO', action: 'added', ... });
//   const summary = await getDailySummary('cds-kb-data');

import fs from 'node:fs/promises';
import path from 'node:path';

const CHANGELOG_FILE = 'changelog.json';

// ── Add entry ───────────────────────────────────────────────────────────────

/**
 * Add a single entry to the changelog.
 *
 * @param {string} dataDir - Data directory path (e.g. 'cds-kb-data')
 * @param {object} entry
 * @param {string} entry.viewName - CDS view name
 * @param {'added'|'updated'|'skipped'|'error'} entry.action - What happened
 * @param {string} [entry.source] - How the view was obtained
 * @param {number} [entry.fields] - Number of fields
 * @param {number} [entry.associations] - Number of associations
 * @param {number} [entry.tags] - Number of tags
 * @param {string} [entry.error] - Error message (for error actions)
 * @param {string} [entry.sourceUrl] - Source URL (for fetched views)
 */
export async function addChangelogEntry(dataDir, entry) {
  const filePath = path.join(dataDir, CHANGELOG_FILE);

  let log = [];
  try {
    const existing = await fs.readFile(filePath, 'utf-8');
    log = JSON.parse(existing);
  } catch {
    // File doesn't exist yet, start fresh
  }

  log.push({
    viewName: entry.viewName,
    action: entry.action,
    timestamp: new Date().toISOString(),
    source: entry.source || 'manual',
    fields: entry.fields || 0,
    associations: entry.associations || 0,
    tags: entry.tags || 0,
    error: entry.error || null,
    sourceUrl: entry.sourceUrl || null,
  });

  await fs.writeFile(filePath, JSON.stringify(log, null, 2), 'utf-8');
}

// ── Get changelog ───────────────────────────────────────────────────────────

/**
 * Get all changelog entries, with optional filtering.
 *
 * @param {string} dataDir - Data directory path
 * @param {object} [options]
 * @param {'added'|'updated'|'skipped'|'error'} [options.action] - Filter by action
 * @param {string} [options.source] - Filter by source
 * @param {number} [options.limit] - Limit number of entries
 * @param {string|number|Date} [options.since] - Include entries AFTER this date (ISO string, Date, or ms timestamp)
 * @param {string|number|Date} [options.until] - Include entries BEFORE this date (ISO string, Date, or ms timestamp)
 * @returns {Promise<Array>}
 */
export async function getChangelog(dataDir, options = {}) {
  const filePath = path.join(dataDir, CHANGELOG_FILE);

  try {
    const content = await fs.readFile(filePath, 'utf-8');
    let entries = JSON.parse(content);

    if (options.action) {
      entries = entries.filter(e => e.action === options.action);
    }
    if (options.source) {
      entries = entries.filter(e => e.source === options.source);
    }
    if (options.since) {
      const sinceDate = new Date(options.since);
      entries = entries.filter(e => new Date(e.timestamp) > sinceDate);
    }
    if (options.until) {
      const untilDate = new Date(options.until);
      entries = entries.filter(e => new Date(e.timestamp) < untilDate);
    }

    // Sort by timestamp descending (newest first)
    entries.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (options.limit && options.limit > 0) {
      entries = entries.slice(0, options.limit);
    }

    return entries;
  } catch {
    return [];
  }
}

// ── Daily summary ───────────────────────────────────────────────────────────

/**
 * Get a summary grouped by day.
 *
 * @param {string} dataDir - Data directory path
 * @param {object} [options]
 * @param {number} [options.days=7] - Number of days to look back
 * @param {string} [options.source] - Filter by source
 * @param {string|number|Date} [options.since] - Include entries AFTER this date
 * @param {string|number|Date} [options.until] - Include entries BEFORE this date
 * @returns {Promise<{ daily: Array<{ date: string, added: number, updated: number, skipped: number, errors: number, views: string[], sources: object }>, totalSources: string }>}
 */
export async function getDailySummary(dataDir, options = {}) {
  const days = options.days || 7;
  const entries = await getChangelog(dataDir);

  // Apply manual date filters if provided (overrides days)
  let filtered = entries;
  if (options.source) {
    filtered = filtered.filter(e => e.source === options.source);
  }

  // Determine date range
  let sinceDate;
  if (options.since) {
    sinceDate = new Date(options.since);
  } else if (options.until) {
    // If only until is provided, show everything before that date (no lower bound)
    sinceDate = new Date(0); // epoch start
  } else {
    sinceDate = new Date();
    sinceDate.setDate(sinceDate.getDate() - days);
  }

  let recentEntries;
  if (options.until) {
    const untilDate = new Date(options.until);
    recentEntries = filtered.filter(e => {
      const ts = new Date(e.timestamp);
      return ts > sinceDate && ts < untilDate;
    });
  } else {
    recentEntries = filtered.filter(e => new Date(e.timestamp) > sinceDate);
  }

  // Group by date (YYYY-MM-DD)
  const byDate = {};
  const overallSources = {};
  for (const entry of recentEntries) {
    const dateKey = entry.timestamp.slice(0, 10); // '2026-07-04'
    if (!byDate[dateKey]) {
      byDate[dateKey] = { date: dateKey, added: 0, updated: 0, skipped: 0, errors: 0, views: [], sources: {} };
    }
    const day = byDate[dateKey];
    if (entry.action === 'added') day.added++;
    else if (entry.action === 'updated') day.updated++;
    else if (entry.action === 'skipped') day.skipped++;
    else if (entry.action === 'error') day.errors++;
    day.views.push(entry.viewName);
    const src = entry.source || 'unknown';
    day.sources[src] = (day.sources[src] || 0) + 1;
    overallSources[src] = (overallSources[src] || 0) + 1;
  }

  // Sort by date descending
  const dailySummary = Object.values(byDate).sort((a, b) => b.date.localeCompare(a.date));

  // Build total source distribution string
  const totalSources = Object.entries(overallSources)
    .sort((a, b) => b[1] - a[1])
    .map(([source, count]) => `${source} (${count})`)
    .join(', ');

  return { daily: dailySummary, totalSources };
}

// ── Stats ───────────────────────────────────────────────────────────────────

/**
 * Get overall statistics from the changelog.
 *
 * @param {string} dataDir - Data directory path
 * @param {object} [options]
 * @param {string} [options.source] - Filter by source
 * @param {string|number|Date} [options.since] - Include entries AFTER this date
 * @param {string|number|Date} [options.until] - Include entries BEFORE this date
 * @returns {Promise<{ totalEntries, totalAdded, totalErrors, sources, topSources }>}
 */
export async function getChangelogStats(dataDir, options = {}) {
  let entries = await getChangelog(dataDir, {
    since: options.since,
    until: options.until,
  });

  // Filter by source if specified
  if (options.source) {
    entries = entries.filter(e => e.source === options.source);
  }

  const totalEntries = entries.length;
  const totalAdded = entries.filter(e => e.action === 'added').length;
  const totalErrors = entries.filter(e => e.action === 'error').length;

  // Count by source
  const sourceCount = {};
  for (const entry of entries) {
    const src = entry.source || 'unknown';
    sourceCount[src] = (sourceCount[src] || 0) + 1;
  }

  const topSources = Object.entries(sourceCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([source, count]) => ({ source, count }));

  return {
    totalEntries,
    totalAdded,
    totalErrors,
    sources: sourceCount,
    topSources,
  };
}

// ── Describe ────────────────────────────────────────────────────────────────

export function describeDailySummary(summary) {
  // Handle both new format { daily: [...], totalSources: '...' } and old format [...]
  const dailyItems = Array.isArray(summary) ? summary : (summary && summary.daily) || [];
  const totalSources = summary && !Array.isArray(summary) ? summary.totalSources : '';

  if (dailyItems.length === 0) {
    return 'No activity recorded.';
  }

  const lines = dailyItems.map(day => {
    const parts = [];
    parts.push(`📅 ${day.date}:`);
    if (day.added > 0) parts.push(`+${day.added} added`);
    if (day.updated > 0) parts.push(`~${day.updated} updated`);
    if (day.skipped > 0) parts.push(`-${day.skipped} skipped`);
    if (day.errors > 0) parts.push(`❌${day.errors} errors`);
    // Show per-day source breakdown
    const srcParts = Object.entries(day.sources || {})
      .sort((a, b) => b[1] - a[1])
      .map(([src, count]) => `${src}`);
    if (srcParts.length > 0) {
      parts.push(`(${srcParts.join(', ')})`);
    }
    return parts.join(' ');
  });

  // Add total source distribution at the end
  if (totalSources) {
    lines.push('');
    lines.push(`📦 Sources: ${totalSources}`);
  }

  return lines.join('\n');
}
