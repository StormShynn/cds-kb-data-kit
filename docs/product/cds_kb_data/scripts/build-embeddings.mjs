#!/usr/bin/env node
// scripts/build-embeddings.mjs
// Embed view semantic_en/description into index/embeddings.json so
// cds-kb-mcp's search_mode=hybrid can re-rank BM25 with cosine similarity.
//
// Two modes:
//   - Remote (default when CDS_KB_EMBED_API_KEY is set): OpenAI-compatible
//     embeddings API. CDS_KB_EMBED_URL / CDS_KB_EMBED_MODEL override defaults.
//   - Local (default when NO API key is set): transformers.js (ONNX) running
//     all-MiniLM-L6-v2 in-process — free, keyless, offline-friendly. Uses
//     `@huggingface/transformers` (devDependency). Set CDS_KB_EMBED_LOCAL_MODEL
//     to override the model id.
//
// The output always records which model produced the vectors
// (embeddings.json.model), and the MCP server's embedQueryText() picks the
// same local model when no CDS_KB_EMBED_API_KEY is configured — so build and
// query stay in agreement.
//
// Vectors are stored as base64-encoded Float32 buffers (format: "f32-base64"),
// one string per view, instead of nested JSON number arrays. 10,000+ views ×
// 384 dims as plain JSON numbers is ~110 MB — over GitHub's 100 MB per-file
// limit — while the Float32 base64 form is ~22 MB (comparable to
// search_index.json) and stays a single plain JSON file in git. The MCP server
// decodes each value back to a Float32Array on load (server.mjs
// decodeEmbeddings).
//
// Usage:
//   node scripts/build-embeddings.mjs [dataDir] [--limit N]
//
// Env:
//   CDS_KB_EMBED_API_KEY   (optional — remote mode when set)
//   CDS_KB_EMBED_URL       default https://api.openai.com/v1/embeddings
//   CDS_KB_EMBED_MODEL     default text-embedding-3-small (remote)
//   CDS_KB_EMBED_LOCAL_MODEL default Xenova/all-MiniLM-L6-v2 (local)

import fs from 'node:fs/promises';
import path from 'node:path';
import { listViewFiles } from './lib/view-files.mjs';
import { extractFrontmatter, scalar } from './lib/frontmatter.mjs';
import { writeJson } from './lib/json-file.mjs';

const apiKey = (process.env.CDS_KB_EMBED_API_KEY || '').trim();
const LOCAL_MODEL = (process.env.CDS_KB_EMBED_LOCAL_MODEL || 'Xenova/all-MiniLM-L6-v2').trim();
const LOCAL_MODE = !apiKey;

if (LOCAL_MODE) {
  console.log(`No CDS_KB_EMBED_API_KEY — using LOCAL embeddings via transformers.js (${LOCAL_MODEL}).`);
} else {
  console.log('CDS_KB_EMBED_API_KEY set — using remote embeddings API.');
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
const model = LOCAL_MODE ? LOCAL_MODEL : (process.env.CDS_KB_EMBED_MODEL || 'text-embedding-3-small').trim();
const BATCH = 64;

async function embedBatchRemote(texts) {
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

// Lazy pipeline singleton so repeated calls reuse the loaded ONNX model.
let localExtractorPromise = null;
function localExtractor() {
  if (!localExtractorPromise) {
    localExtractorPromise = (async () => {
      const { pipeline } = await import('@huggingface/transformers');
      // mean pooling + L2 normalize matches how the MCP server embeds queries
      // (server.mjs embedQueryText local branch) — same model, same settings.
      return pipeline('feature-extraction', model, { dtype: 'q8' });
    })();
  }
  return localExtractorPromise;
}

async function embedBatchLocal(texts) {
  const extractor = await localExtractor();
  const out = await extractor(texts, { pooling: 'mean', normalize: true });
  // output is a Tensor; .tolist() gives nested arrays of numbers
  return out.tolist();
}

async function embedBatch(texts) {
  return LOCAL_MODE ? embedBatchLocal(texts) : embedBatchRemote(texts);
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

  const b64 = (arr) => Buffer.from(new Float32Array(arr).buffer).toString('base64');
  const out = {
    model,
    dim,
    mode: LOCAL_MODE ? 'local' : 'remote',
    format: 'f32-base64',
    builtAt: new Date().toISOString(),
    vectors: Object.fromEntries(Object.entries(vectors).map(([name, v]) => [name, b64(v)])),
  };
  const outFile = path.join(dataDir, 'index', 'embeddings.json');
  await writeJson(outFile, out);
  console.log(`✅ Wrote ${outFile} (${Object.keys(vectors).length} vectors, dim=${dim}, mode=${out.mode})`);
}

main().catch((e) => {
  console.error(`❌ ${e.message}`);
  process.exit(1);
});
