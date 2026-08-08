#!/usr/bin/env node
// scripts/generate-dashboard.mjs
// Generate an HTML dashboard from changelog.json and views directory.
//
// Usage:
//   node scripts/generate-dashboard.mjs [dataDir] [outputFile]
//   node scripts/generate-dashboard.mjs                   # Default: cds-kb-data, dashboard.html
//   node scripts/generate-dashboard.mjs ./my-data ./out/dashboard.html

import fs from 'node:fs/promises';
import path from 'node:path';
import { listViewFiles } from './lib/view-files.mjs';
import { escapeHtml as esc } from './lib/html-escape.mjs';

// ── Config ──────────────────────────────────────────────────────────────────

// Parse CLI args (supports both positional and flag-based)
const args = process.argv.slice(2);
const DATA_DIR = args[0] && !args[0].startsWith('--') ? args[0] : '.';
const OUTPUT_FILE = args[1] && !args[1].startsWith('--') ? args[1] : path.join(DATA_DIR, 'dashboard.html');
const DAYS = parseInt(
  args.includes('--days') ? args[args.indexOf('--days') + 1]
    : (args[2] && !args[2].startsWith('--') ? args[2] : '0'), 10
) || 0;
const SINCE = args.includes('--since') ? args[args.indexOf('--since') + 1] || '' : '';
const UNTIL = args.includes('--until') ? args[args.indexOf('--until') + 1] || '' : '';

const CHANGELOG_FILE = 'changelog.json';
const VIEWS_DIR = 'views';

// ── Data loading ────────────────────────────────────────────────────────────

async function loadChangelog() {
  try {
    const content = await fs.readFile(path.join(DATA_DIR, CHANGELOG_FILE), 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function loadViewFiles() {
  return listViewFiles(path.join(DATA_DIR, VIEWS_DIR));
}

async function getTaxonomyStats() {
  try {
    const content = await fs.readFile(path.join(DATA_DIR, 'index', 'taxonomy.json'), 'utf-8');
    const tax = JSON.parse(content);
    return {
      lobs: (tax.lobs || []).length,
      bos: (tax.bos || []).filter(b => b.tag?.startsWith('bo:')).length,
      components: (tax.bos || []).filter(b => b.tag?.startsWith('component:')).length,
    };
  } catch {
    return { lobs: 0, bos: 0, components: 0 };
  }
}

// ── Data analysis ───────────────────────────────────────────────────────────

function analyzeEntries(entries, viewFiles, daysFilter, sinceDate, untilDate) {
  const totalViewCount = viewFiles.length;

  // Filter by day range / since / until if specified
  let filtered = entries;
  if (sinceDate) {
    const since = new Date(sinceDate);
    filtered = filtered.filter(e => new Date(e.timestamp) > since);
  } else if (daysFilter > 0) {
    const since = new Date();
    since.setDate(since.getDate() - daysFilter);
    filtered = filtered.filter(e => new Date(e.timestamp) > since);
  }
  if (untilDate) {
    const until = new Date(untilDate);
    filtered = filtered.filter(e => new Date(e.timestamp) < until);
  }

  // Group by date
  const byDate = {};
  for (const entry of filtered) {
    const dateKey = entry.timestamp?.slice(0, 10) || 'unknown';
    if (!byDate[dateKey]) {
      byDate[dateKey] = { date: dateKey, added: 0, updated: 0, skipped: 0, errors: 0, views: [] };
    }
    const day = byDate[dateKey];
    if (entry.action === 'added') day.added++;
    else if (entry.action === 'updated') day.updated++;
    else if (entry.action === 'skipped') day.skipped++;
    else if (entry.action === 'error') day.errors++;
    day.views.push(entry.viewName);
  }

  const dailySummary = Object.values(byDate).sort((a, b) => a.date.localeCompare(b.date));

  // Aggregate stats
  const totalAdded = filtered.filter(e => e.action === 'added').length;
  const totalUpdated = filtered.filter(e => e.action === 'updated').length;
  const totalSkipped = filtered.filter(e => e.action === 'skipped').length;
  const totalErrors = filtered.filter(e => e.action === 'error').length;

  // Source distribution
  const sourceCount = {};
  for (const entry of filtered) {
    const src = entry.source || 'unknown';
    sourceCount[src] = (sourceCount[src] || 0) + 1;
  }
  const topSources = Object.entries(sourceCount)
    .sort((a, b) => b[1] - a[1])
    .map(([source, count]) => ({ source, count }));

  // Recent entries (last 20)
  const recentEntries = [...filtered]
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 20);

  // Timeline data (use daysFilter, since-until range, or default to 30)
  let timelineDays = 30;
  let timelineStart;
  if (sinceDate) {
    timelineStart = new Date(sinceDate);
  } else if (daysFilter > 0) {
    timelineDays = daysFilter;
    timelineStart = new Date();
    timelineStart.setDate(timelineStart.getDate() - timelineDays);
  } else {
    timelineStart = new Date();
    timelineStart.setDate(timelineStart.getDate() - timelineDays);
  }
  // Recalculate timelineDays from since-until range if available
  if (sinceDate && untilDate) {
    timelineDays = Math.max(1, Math.ceil((new Date(untilDate) - new Date(sinceDate)) / 86400000));
  } else if (sinceDate) {
    timelineDays = Math.max(1, Math.ceil((Date.now() - new Date(sinceDate)) / 86400000));
  }
  const timelineByDate = {};
  for (let i = 0; i < timelineDays; i++) {
    const d = new Date(timelineStart);
    d.setDate(d.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    timelineByDate[key] = { date: key, added: 0, errors: 0 };
  }
  for (const entry of filtered) {
    const dateKey = entry.timestamp?.slice(0, 10);
    if (timelineByDate[dateKey]) {
      if (entry.action === 'added') timelineByDate[dateKey].added++;
      else if (entry.action === 'error') timelineByDate[dateKey].errors++;
    }
  }
  const timeline = Object.values(timelineByDate).sort((a, b) => a.date.localeCompare(b.date));

  return {
    totalViewCount,
    totalEntries: filtered.length,
    totalAdded,
    totalUpdated,
    totalSkipped,
    totalErrors,
    dailySummary,
    topSources,
    recentEntries,
    timeline,
  };
}

// ── SVG chart generation ────────────────────────────────────────────────────

function generateActivityChart(timeline) {
  if (timeline.length === 0) return '<p>No activity data</p>';

  const width = 800;
  const height = 250;
  const padding = { top: 20, right: 20, bottom: 50, left: 50 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const maxVal = Math.max(1, ...timeline.map(d => d.added + d.errors));
  const barW = Math.max(4, chartW / timeline.length - 2);
  const colors = { added: '#22c55e', errors: '#ef4444' };

  let bars = '';
  let xLabels = '';
  const formatDate = (d) => {
    const parts = d.split('-');
    return parts[2] + '/' + parts[1];
  };

  timeline.forEach((day, i) => {
    const x = padding.left + (i * (chartW / timeline.length)) + (chartW / timeline.length - barW) / 2;
    const addedH = (day.added / maxVal) * chartH;
    const errorH = (day.errors / maxVal) * chartH;

    if (addedH > 0) {
      bars += `<rect x="${x}" y="${padding.top + chartH - addedH - errorH}" width="${barW}" height="${addedH}" fill="${colors.added}" rx="2" opacity="0.9">
        <title>${day.date}: +${day.added} added, ${day.errors} errors</title>
      </rect>`;
    }
    if (errorH > 0) {
      bars += `<rect x="${x}" y="${padding.top + chartH - errorH}" width="${barW}" height="${errorH}" fill="${colors.errors}" rx="2" opacity="0.9">
        <title>${day.date}: +${day.added} added, ${day.errors} errors</title>
      </rect>`;
    }

    if (i % 5 === 0 || i === timeline.length - 1) {
      xLabels += `<text x="${x + barW / 2}" y="${height - padding.bottom + 20}" text-anchor="middle" font-size="11" fill="#888">${formatDate(day.date)}</text>`;
    }
  });

  return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:${width}px;height:auto">
    <rect x="0" y="0" width="${width}" height="${height}" fill="none"/>
    ${bars}
    ${xLabels}
    <text x="${padding.left}" y="${padding.top - 5}" font-size="12" fill="#888">Daily Activity</text>
  </svg>`;
}

function generateSourceChart(sources) {
  if (sources.length === 0) return '<p>No source data</p>';

  const colors = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#14b8a6'];
  const total = sources.reduce((sum, s) => sum + s.count, 0);
  const cx = 120, cy = 120, r = 80;

  let currentAngle = -90;
  let slices = '';
  let legend = '';

  sources.forEach((s, i) => {
    const angle = Math.min((s.count / total) * 360, 359.9);
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);

    const largeArc = angle > 180 ? 1 : 0;
    const path = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;

    slices += `<path d="${path}" fill="${colors[i % colors.length]}" stroke="#1a1a2e" stroke-width="2">
      <title>${s.source}: ${s.count} (${Math.round((s.count / total) * 100)}%)</title>
    </path>`;

    const pct = Math.round((s.count / total) * 100);
    legend += `<div style="display:flex;align-items:center;gap:8px;margin:4px 0">
      <div style="width:12px;height:12px;border-radius:3px;background:${colors[i % colors.length]}"></div>
      <span style="flex:1">${s.source}</span>
      <span style="font-weight:600">${pct}%</span>
      <span style="color:#888;font-size:13px">(${s.count})</span>
    </div>`;

    currentAngle += angle;
  });

  return `<div style="display:flex;align-items:center;gap:32px;flex-wrap:wrap">
    <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" style="width:200px;height:200px">
      ${slices}
      <text x="${cx}" y="${cy - 5}" text-anchor="middle" font-size="28" font-weight="bold" fill="#e0e0e0">${total}</text>
      <text x="${cx}" y="${cy + 14}" text-anchor="middle" font-size="12" fill="#888">entries</text>
    </svg>
    <div style="flex:1;min-width:150px">${legend}</div>
  </div>`;
}

// ── HTML generation ─────────────────────────────────────────────────────────

function generateHTML(stats, taxonomyStats) {
  const { totalViewCount, totalEntries, totalAdded, totalUpdated, totalSkipped, totalErrors, dailySummary, topSources, recentEntries, timeline } = stats;

  const activityChart = generateActivityChart(timeline);
  const sourceChart = generateSourceChart(topSources);

  const lastUpdated = timeline.length > 0
    ? timeline.filter(d => d.added > 0 || d.errors > 0).pop()?.date || 'N/A'
    : 'No activity';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CDS Knowledge Base Dashboard</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    background: #0f0f1a;
    color: #e0e0e0;
    line-height: 1.6;
    padding: 24px;
  }
  .container { max-width: 1100px; margin: 0 auto; }
  h1 { font-size: 28px; font-weight: 700; margin-bottom: 4px; }
  h1 span { color: #6366f1; }
  .subtitle { color: #888; font-size: 14px; margin-bottom: 32px; }
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
  }
  .stat-card {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    border: 1px solid #2a2a4a;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .stat-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.3); }
  .stat-value { font-size: 32px; font-weight: 700; }
  .stat-label { font-size: 13px; color: #888; margin-top: 4px; }
  .stat-card.views .stat-value { color: #6366f1; }
  .stat-card.added .stat-value { color: #22c55e; }
  .stat-card.errors .stat-value { color: #ef4444; }
  .stat-card.entries .stat-value { color: #f59e0b; }
  .stat-card.sources .stat-value { color: #3b82f6; }
  .stat-card.taxonomy .stat-value { color: #8b5cf6; }

  .section {
    background: #1a1a2e;
    border: 1px solid #2a2a4a;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 24px;
  }
  .section h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #2a2a4a;
  }
  .section h2 span { color: #6366f1; }

  table { width: 100%; border-collapse: collapse; font-size: 14px; }
  th { text-align: left; padding: 8px 12px; color: #888; font-weight: 500; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #2a2a4a; }
  td { padding: 8px 12px; border-bottom: 1px solid #1f1f38; }
  tr:hover td { background: rgba(99,102,241,0.05); }
  .badge {
    display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600;
  }
  .badge-added { background: rgba(34,197,94,0.15); color: #22c55e; }
  .badge-updated { background: rgba(59,130,246,0.15); color: #3b82f6; }
  .badge-skipped { background: rgba(245,158,11,0.15); color: #f59e0b; }
  .badge-error { background: rgba(239,68,68,0.15); color: #ef4444; }

  .recent-list { list-style: none; }
  .recent-item {
    display: flex; align-items: center; justify-content: space-between;
    padding: 10px 0; border-bottom: 1px solid #1f1f38; gap: 12px;
  }
  .recent-item:last-child { border-bottom: none; }
  .recent-name { font-weight: 500; flex: 1; }
  .recent-date { color: #888; font-size: 12px; white-space: nowrap; }
  .recent-detail { color: #888; font-size: 12px; }

  .empty { text-align: center; padding: 40px; color: #555; }
  .empty span { font-size: 48px; display: block; margin-bottom: 12px; }

  .footer { text-align: center; padding: 20px; color: #444; font-size: 12px; }
  .footer a { color: #6366f1; text-decoration: none; }
  .footer a:hover { text-decoration: underline; }

  @media (max-width: 600px) {
    body { padding: 12px; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .stat-value { font-size: 24px; }
    .section { padding: 16px; }
  }
</style>
</head>
<body>
<div class="container">

  <h1>📊 CDS <span>Knowledge Base</span></h1>
  <p class="subtitle">${DAYS > 0 ? `Last ${DAYS} days · ` : ''}Last updated: ${lastUpdated} · ${dailySummary.length} active days · ${totalViewCount} views</p>

  <!-- Stats Cards -->
  <div class="stats-grid">
    <div class="stat-card views">
      <div class="stat-value">${totalViewCount}</div>
      <div class="stat-label">Total Views</div>
    </div>
    <div class="stat-card entries">
      <div class="stat-value">${totalEntries}</div>
      <div class="stat-label">Changelog Entries</div>
    </div>
    <div class="stat-card added">
      <div class="stat-value">${totalAdded}</div>
      <div class="stat-label">Views Added</div>
    </div>
    <div class="stat-card errors">
      <div class="stat-value">${totalErrors}</div>
      <div class="stat-label">Errors</div>
    </div>
    <div class="stat-card sources">
      <div class="stat-value">${topSources.length}</div>
      <div class="stat-label">Data Sources</div>
    </div>
    <div class="stat-card taxonomy">
      <div class="stat-value">${taxonomyStats.lobs}</div>
      <div class="stat-label">LOB Categories</div>
    </div>
  </div>
  <p class="subtitle" style="margin-top:-8px">
    Entries / Added / Errors / Data Sources reflect only <code>changelog.json</code>
    (tracked additions since logging started) — most of the ${totalViewCount} total
    views predate it and were never individually logged, so this is normal, not a
    data-loss sign. This page is a static snapshot, regenerated on push to
    <code>views/**</code>/<code>changelog.json</code> — not live.
  </p>

  <!-- Activity Chart -->
  <div class="section">
    <h2>📈 <span>Activity</span> Timeline (Last ${DAYS > 0 ? DAYS : 30} Days)</h2>
    ${activityChart}
    <div style="display:flex;gap:16px;margin-top:12px;font-size:13px;color:#888">
      <span><span style="display:inline-block;width:12px;height:12px;background:#22c55e;border-radius:2px;vertical-align:middle;margin-right:4px"></span> Added</span>
      <span><span style="display:inline-block;width:12px;height:12px;background:#ef4444;border-radius:2px;vertical-align:middle;margin-right:4px"></span> Errors</span>
    </div>
  </div>

  <!-- Daily Summary -->
  <div class="section">
    <h2>📅 <span>Daily</span> Summary</h2>
    ${dailySummary.length === 0
      ? '<div class="empty"><span>📭</span>No changelog entries yet. Start by adding views!</div>'
      : `<table>
      <thead><tr><th>Date</th><th>Added</th><th>Updated</th><th>Skipped</th><th>Errors</th><th>Views</th></tr></thead>
      <tbody>
        ${dailySummary.slice().reverse().map(day => `
          <tr>
            <td style="font-weight:500">${day.date}</td>
            <td>${day.added > 0 ? '<span class="badge badge-added">+' + day.added + '</span>' : '0'}</td>
            <td>${day.updated > 0 ? '<span class="badge badge-updated">~' + day.updated + '</span>' : '0'}</td>
            <td>${day.skipped > 0 ? '<span class="badge badge-skipped">-' + day.skipped + '</span>' : '0'}</td>
            <td>${day.errors > 0 ? '<span class="badge badge-error">✕' + day.errors + '</span>' : '0'}</td>
            <td style="font-size:12px;color:#888;max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(day.views.join(', '))}">${esc(day.views.join(', '))}</td>
          </tr>`).join('\n        ')}
      </tbody>
    </table>`}
  </div>

  <!-- Source Distribution -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:24px">
    <div class="section">
      <h2>📦 <span>Source</span> Distribution</h2>
      ${sourceChart}
    </div>
    <div class="section">
      <h2>📋 <span>Recent</span> Activity</h2>
      ${recentEntries.length === 0
        ? '<div class="empty"><span>📭</span>No recent activity</div>'
        : `<table>
        <thead><tr><th>View</th><th>Action</th><th>Date</th></tr></thead>
        <tbody>
          ${recentEntries.slice(0, 15).map(entry => `
            <tr>
              <td style="font-weight:500">${esc(entry.viewName)}</td>
              <td><span class="badge badge-${entry.action}">${entry.action}</span></td>
              <td style="font-size:12px;color:#888">${entry.timestamp ? entry.timestamp.slice(0, 10) : '-'}</td>
            </tr>`).join('\n          ')}
        </tbody>
      </table>`}
    </div>
  </div>

  <div class="footer">
    Generated by <a href="#">CDS Knowledge Base</a> · ${new Date().toISOString().slice(0, 10)}<br>
    ${totalViewCount} views · ${totalAdded} added · ${totalErrors} errors
  </div>

</div>
</body>
</html>`;
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`📊 Generating dashboard from ${DATA_DIR}...`);

  const [entries, viewFiles, taxonomyStats] = await Promise.all([
    loadChangelog(),
    loadViewFiles(),
    getTaxonomyStats(),
  ]);

  const stats = analyzeEntries(entries, viewFiles, DAYS, SINCE || null, UNTIL || null);
  const html = generateHTML(stats, taxonomyStats);

  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, html, 'utf-8');

  console.log(`   Views:      ${stats.totalViewCount}`);
  console.log(`   Entries:    ${stats.totalEntries}`);
  console.log(`   Added:      ${stats.totalAdded}`);
  console.log(`   Sources:    ${stats.topSources.map(s => `${s.source} (${s.count})`).join(', ')}`);
  console.log(`   Taxonomy:   ${taxonomyStats.lobs} LOBs, ${taxonomyStats.bos} BOs, ${taxonomyStats.components} components`);
  console.log(`✅ Dashboard written to ${OUTPUT_FILE}`);
}

main().catch(err => {
  console.error(`❌ Error: ${err.message}`);
  process.exit(1);
});
