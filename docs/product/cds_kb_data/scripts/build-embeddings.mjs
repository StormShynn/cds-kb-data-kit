#!/usr/bin/env node
// scripts/build-embeddings.mjs
// Optional: embed view semantic_en/description via an OpenAI-compatible API
// into index/embeddings.json. No-op (exit 0) when CDS_KB_EMBED_API_KEY is unset.
//
// Usage:
//   node scripts/build-embeddings.mjs [dataDir] [--limit N]
//
// Env:
//   CDS_KB_EMBED_API_KEY  (required to run)
//   CDS_KB_EMBED_URL      default https://api.openai.com/v1/embeddings
//   CDS_KB_EMBED_MODEL    default text-embedding-3-small

import fs from 'node:fs/promises';
import path from 'node:path';
import { listViewFiles } from './lib/view-files.mjs';
import { extractFrontmatter, scalar } from './lib/frontmatter.mjs';
import { writeJson } from './lib/json-file.mjs';

const apiKey = (process.env.CDS_KB_EMBED_API_KEY || '').trim();
if (!apiKey) {
  console.log('CDS_KB_EMBED_API_KEY unset — skipping embeddings build (exit 0).');
  process.exit(0);
}

const args = process.argv.slice(2);
let dataDir = '.';
let limit = Infinity;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--limit') {
    limit = parseInt(args[++i], 10) || Infinity;
  } else if (!args[i].startsWith('--')) {
    dataDir = args[i];
  }
}

const embedUrl = (process.env.CDS_KB_EMBED_URL || 'https://api.openai.com/v1/embeddings').trim();
const model = (process.env.CDS_KB_EMBED_MODEL || 'text-embedding-3-small').trim();
const BATCH = 64;

async function embedBatch(texts) {
  const res = await fetch(embedUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ model, input: texts }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`embeddings API ${res.status}: ${body.slice(0, 400)}`);
  }
  const json = await res.json();
  const data = Array.isArray(json.data) ? json.data : [];
  return data.sort((a, b) => a.index - b.index).map((d) => d.embedding);
}

async function main() {
  const viewsDir = path.join(dataDir, 'views');
  const files = await listViewFiles(viewsDir);
  const items = [];
  for (const { name, relPath } of files) {
    if (items.length >= limit) break;
    const md = await fs.readFile(path.join(viewsDir, ...relPath.split('/')), 'utf-8');
    const fm = extractFrontmatter(md);
    const text = (scalar(fm, 'semantic_en') || scalar(fm, 'description') || name).trim();
    if (!text) continue;
    items.push({ name, text: text.slice(0, 8000) });
  }

  console.log(`Embedding ${items.length} view(s) with ${model}…`);
  const vectors = {};
  let dim = 0;
  for (let i = 0; i < items.length; i += BATCH) {
    const chunk = items.slice(i, i + BATCH);
    const embeds = await embedBatch(chunk.map((c) => c.text));
    for (let j = 0; j < chunk.length; j++) {
      vectors[chunk[j].name] = embeds[j];
      if (!dim && embeds[j]) dim = embeds[j].length;
    }
    console.log(`  ${Math.min(i + BATCH, items.length)} / ${items.length}`);
  }

  const out = {
    model,
    dim,
    builtAt: new Date().toISOString(),
    vectors,
  };
  const outFile = path.join(dataDir, 'index', 'embeddings.json');
  await writeJson(outFile, out);
  console.log(`✅ Wrote ${outFile} (${Object.keys(vectors).length} vectors, dim=${dim})`);
}

main().catch((e) => {
  console.error(`❌ ${e.message}`);
  process.exit(1);
});
