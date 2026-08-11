// propose-library.mjs — build a query-library.json entry + optional draft PR.
// Never merges. On GitHub API failure, still returns the local snippet.

import { composeQuery } from './query-compose.mjs';

/**
 * @param {string} title
 */
function slugify(title) {
  return String(title || 'query')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48) || 'query';
}

/**
 * @param {object} input — same shape as compose_query + title/description/contributor
 * @returns {Promise<{ jsonSnippet: string, markdown: string, prUrl?: string, error?: string }>}
 */
export async function proposeQueryLibraryEntry(input = {}) {
  const entry = {
    title: (input.title && String(input.title).trim()) || '',
    description: (input.description && String(input.description).trim()) || undefined,
    contributor: (input.contributor && String(input.contributor).trim()) || undefined,
    views: Array.isArray(input.views) ? input.views : [],
    select: input.select,
    where: input.where,
    groupBy: input.groupBy,
    having: input.having,
    orderBy: input.orderBy,
    viewName: input.viewName,
  };
  // Drop undefined keys for a clean PR snippet
  for (const k of Object.keys(entry)) {
    if (entry[k] === undefined || entry[k] === '') delete entry[k];
  }

  const composed = composeQuery(entry);
  const jsonSnippet = JSON.stringify(entry, null, 2) + ',';

  let markdown =
    `## Propose query library entry\n\n` +
    `Add the following object to \`index/query-library.json\` (array of saved queries), then rebuild the Query Builder page.\n\n` +
    `\`\`\`json\n${jsonSnippet}\n\`\`\`\n`;
  if (composed.warnings?.length) {
    markdown += `\n### Compose warnings\n${composed.warnings.map((w) => `- ${w}`).join('\n')}\n`;
  }
  if (composed.openSql) {
    markdown += `\n### OpenSQL preview\n\`\`\`sql\n${composed.openSql}\n\`\`\`\n`;
  }

  const token = (process.env.GITHUB_TOKEN || '').trim();
  const repo = (process.env.CDS_KB_PROPOSE_REPO || '').trim(); // owner/name
  if (!token || !repo || !/^[^\s/]+\/[^\s/]+$/.test(repo)) {
    return { jsonSnippet, markdown };
  }

  const [owner, name] = repo.split('/');
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'cds-kb-mcp-propose',
  };

  try {
    const repoRes = await fetch(`https://api.github.com/repos/${owner}/${name}`, { headers });
    if (!repoRes.ok) throw new Error(`GET repo -> ${repoRes.status}`);
    const repoInfo = await repoRes.json();
    const defaultBranch = repoInfo.default_branch || 'main';

    const refRes = await fetch(
      `https://api.github.com/repos/${owner}/${name}/git/ref/heads/${defaultBranch}`,
      { headers },
    );
    if (!refRes.ok) throw new Error(`GET ref ${defaultBranch} -> ${refRes.status}`);
    const baseSha = (await refRes.json()).object?.sha;
    if (!baseSha) throw new Error('missing base SHA');

    const branch = `propose/query-${slugify(entry.title || 'untitled')}-${Date.now().toString(36).slice(-4)}`;
    const createRef = await fetch(`https://api.github.com/repos/${owner}/${name}/git/refs`, {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ ref: `refs/heads/${branch}`, sha: baseSha }),
    });
    if (!createRef.ok) throw new Error(`POST ref -> ${createRef.status} ${await createRef.text()}`);

    const path = 'index/query-library.json';
    let existingSha = null;
    let list = [];
    const fileRes = await fetch(
      `https://api.github.com/repos/${owner}/${name}/contents/${path}?ref=${branch}`,
      { headers },
    );
    if (fileRes.ok) {
      const fileJson = await fileRes.json();
      existingSha = fileJson.sha;
      const raw = Buffer.from(fileJson.content || '', 'base64').toString('utf-8');
      try {
        const parsed = JSON.parse(raw);
        list = Array.isArray(parsed) ? parsed : [];
      } catch {
        list = [];
      }
    } else if (fileRes.status !== 404) {
      throw new Error(`GET ${path} -> ${fileRes.status}`);
    }

    list.push(entry);
    const content = Buffer.from(JSON.stringify(list, null, 2) + '\n', 'utf-8').toString('base64');
    const putRes = await fetch(`https://api.github.com/repos/${owner}/${name}/contents/${path}`, {
      method: 'PUT',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: `chore: propose query library entry — ${entry.title || 'untitled'}`,
        content,
        branch,
        ...(existingSha ? { sha: existingSha } : {}),
      }),
    });
    if (!putRes.ok) throw new Error(`PUT contents -> ${putRes.status} ${await putRes.text()}`);

    const prRes = await fetch(`https://api.github.com/repos/${owner}/${name}/pulls`, {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: `Propose query: ${entry.title || 'untitled'}`,
        head: branch,
        base: defaultBranch,
        body: markdown + '\n\n_Opened as a **draft** by cds-kb-mcp `propose_query_library_entry`. Do not merge without review._',
        draft: true,
      }),
    });
    if (!prRes.ok) throw new Error(`POST pull -> ${prRes.status} ${await prRes.text()}`);
    const pr = await prRes.json();
    return {
      jsonSnippet,
      markdown,
      prUrl: pr.html_url || pr.url,
    };
  } catch (e) {
    return {
      jsonSnippet,
      markdown,
      error: e?.message || String(e),
    };
  }
}
