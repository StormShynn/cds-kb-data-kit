#!/usr/bin/env node
// Smoke-test the hosted MCP server over Streamable HTTP (/mcp) with retry/backoff.
// Stateless mode: each request is a self-contained POST; no session management.
import http from 'node:http';
import https from 'node:https';
import { URL } from 'node:url';

const baseUrl = process.argv[2] || 'https://cds-kb-mcp-production.up.railway.app';
const apiKey  = process.argv[3] || process.env.API_KEY || '';
const base = new URL(baseUrl);
const lib  = base.protocol === 'https:' ? https : http;
const host = base.hostname;
const port = base.port || (base.protocol === 'https:' ? 443 : 80);

function request(method, path, headers, body) {
  return new Promise((resolve, reject) => {
    const req = lib.request({ host, port, path, method, headers: { ...headers } }, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks).toString('utf8') }));
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function rpc(method, params, id) {
  const body = JSON.stringify({ jsonrpc: '2.0', id, method, params });
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/event-stream',
    'Content-Length': Buffer.byteLength(body),
  };
  if (apiKey) headers.Authorization = `Bearer ${apiKey}`;
  for (let i = 1; i <= 8; i++) {
    const r = await request('POST', '/mcp', headers, body);
    if (r.status !== 429) return r;
    console.log(`  [rpc ${method} id=${id}] 429, retry ${i} body="${r.body.slice(0, 120)}"`);
    await wait(Math.min(15000, 1000 * i * i));
  }
  throw new Error(`RPC ${method} still 429 after retries`);
}

function parseResult(raw) {
  // Stateless Streamable HTTP can answer plain JSON or a single SSE data frame.
  const text = raw.trim();
  try { return JSON.parse(text); } catch {}
  const line = text.split('\n').find((l) => l.startsWith('data:'));
  if (line) { try { return JSON.parse(line.slice(5).trim()); } catch {} }
  return { raw: text };
}

async function main() {
  console.log(`Target: ${baseUrl}`);

  console.log('\n→ GET /health');
  const health = await request('GET', '/health', { Accept: 'application/json' });
  console.log(`HTTP ${health.status} body=${health.body.slice(0, 200)}`);

  console.log('\n→ initialize');
  const init = await rpc('initialize', { protocolVersion: '2026-07-28', capabilities: {}, clientInfo: { name: 'test-remote-http', version: '0.0.1' } }, 1);
  console.log(`HTTP ${init.status} body=${init.body.slice(0, 300)}`);

  console.log('\n→ tools/list');
  const list = await rpc('tools/list', {}, 2);
  const parsed = parseResult(list.body);
  const tools = parsed?.result?.tools;
  console.log(`HTTP ${list.status} tools=${Array.isArray(tools) ? tools.length : '?'} body=${list.body.slice(0, 200)}`);

  console.log('\n→ tools/call kb_info');
  const info = await rpc('tools/call', { name: 'kb_info', arguments: {} }, 3);
  console.log(`HTTP ${info.status} body=${info.body.slice(0, 400)}`);

  console.log('\n→ resources/list');
  const res = await rpc('resources/list', {}, 4);
  const resources = parseResult(res.body)?.result?.resources;
  console.log(`HTTP ${res.status} resources=${Array.isArray(resources) ? resources.length : '?'} body=${res.body.slice(0, 200)}`);

  console.log('\n→ prompts/list');
  const prompts = await rpc('prompts/list', {}, 5);
  const pList = parseResult(prompts.body)?.result?.prompts;
  console.log(`HTTP ${prompts.status} prompts=${Array.isArray(pList) ? pList.length : '?'} body=${prompts.body.slice(0, 200)}`);

  console.log('\n✅ MCP smoke test OK');
  process.exit(0);
}

main().catch((e) => { console.error('FAIL:', e.message); process.exit(1); });
setTimeout(() => { console.error('Timeout'); process.exit(1); }, 90000);
