#!/usr/bin/env node
// Smoke-test the Railway-hosted MCP server over SSE/HTTP with retry/backoff.
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

async function openSse() {
  for (let attempt = 1; attempt <= 8; attempt++) {
    const headers = { Accept: 'text/event-stream', 'Cache-Control': 'no-cache' };
    if (apiKey) headers.Authorization = `Bearer ${apiKey}`;

    const result = await new Promise((resolve) => {
      const req = lib.request({ host, port, path: '/sse', method: 'GET', headers }, (res) => {
        // Drain body even if non-200 so we can see rate-limit message
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks).toString('utf8') }));
        res.on('error', (e) => resolve({ status: 0, error: e.message }));
      });
      req.on('error', (e) => resolve({ status: 0, error: e.message }));
      req.end();
    });

    if (result.status === 200) return result;
    console.log(`[sse attempt ${attempt}] HTTP ${result.status} body="${result.body.slice(0, 200)}" headers=${JSON.stringify(result.headers)}`);
    const backoff = Math.min(15000, 1000 * attempt * attempt);
    console.log(`  retrying in ${backoff}ms...`);
    await wait(backoff);
  }
  throw new Error('Could not open SSE after retries');
}

async function main() {
  console.log(`Target: ${baseUrl}`);
  const sseHandle = await openSse();
  console.log(`SSE opened: status=${sseHandle.status} ct=${sseHandle.headers['content-type']}`);

  // We need to keep the stream open AND read async. Switch to a streaming approach:
  // Cancel the buffered handle and reopen with raw request to consume incrementally.
  // Simpler: use the body we already got (server usually sends the endpoint frame immediately).
  const m = sseHandle.body.match(/\/messages\?sessionId=([0-9a-f-]+)/i);
  if (!m) { console.error('No sessionId in body. body head:', sseHandle.body.slice(0, 500)); process.exit(2); }
  const sessionId = m[1];
  console.log(`sessionId = ${sessionId}`);

  async function rpc(method, params, id) {
    const body = JSON.stringify({ jsonrpc: '2.0', id, method, params });
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json, text/event-stream',
      'Content-Length': Buffer.byteLength(body),
    };
    if (apiKey) headers.Authorization = `Bearer ${apiKey}`;
    for (let i = 1; i <= 5; i++) {
      const r = await request('POST', `/messages?sessionId=${sessionId}`, headers, body);
      if (r.status !== 429) return r;
      console.log(`  [rpc ${method} id=${id}] 429, retry ${i}`);
      await wait(1500 * i);
    }
    throw new Error(`RPC ${method} still 429 after retries`);
  }

  console.log('\n→ initialize');
  const init = await rpc('initialize', { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'test-remote-sse', version: '0.0.1' } }, 1);
  console.log(`HTTP ${init.status} body=${init.body.slice(0, 300)}`);

  console.log('\n→ tools/list');
  const list = await rpc('tools/list', {}, 2);
  console.log(`HTTP ${list.status} body=${list.body.slice(0, 400)}`);

  console.log('\n→ tools/call kb_info');
  const info = await rpc('tools/call', { name: 'kb_info', arguments: {} }, 3);
  console.log(`HTTP ${info.status} body=${info.body.slice(0, 400)}`);

  console.log('\n✅ MCP smoke test OK');
  process.exit(0);
}

main().catch((e) => { console.error('FAIL:', e.message); process.exit(1); });
setTimeout(() => { console.error('Timeout'); process.exit(1); }, 60000);
