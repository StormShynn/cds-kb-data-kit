// scripts/lib/rebuild-index.mjs
// Shared helper to rebuild the search index (spawns enrich_index.mjs as a
// separate process, same as running `npm run rebuild-index`). Callers pass
// the data directory they're already working against (normally '.').

import { spawn } from 'node:child_process';

export async function rebuildIndex(dataDir) {
  return new Promise((resolve, reject) => {
    const proc = spawn('node', ['enrich_index.mjs', dataDir], { stdio: 'inherit', shell: true });
    proc.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Index rebuild failed with code ${code}`));
    });
    proc.on('error', reject);
  });
}
