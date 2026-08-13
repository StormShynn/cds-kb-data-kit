// Path safety + deterministic hashing for SAP snapshots.
import crypto from 'node:crypto';
import path from 'node:path';

const WIN_RESERVED = /^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i;

/**
 * Normalize ABAP object name into a path-safe segment (deterministic).
 */
export function normalizeObjectPathSegment(name) {
  const raw = String(name || '').trim().toUpperCase();
  if (!raw) throw new Error('empty object name');
  if (raw.includes('..') || raw.includes('/') || raw.includes('\\') || raw.includes('\0')) {
    throw new Error(`unsafe object name: ${name}`);
  }
  // Replace characters unsafe on Windows / Git
  let seg = raw.replace(/[^A-Z0-9._-]/g, '_');
  if (WIN_RESERVED.test(seg)) seg = `_${seg}`;
  if (!seg) throw new Error(`object name normalized empty: ${name}`);
  return seg;
}

/**
 * Map logical object type to directory name.
 */
export function typeDir(objectType) {
  const t = String(objectType || 'unknown').toLowerCase().replace(/[^a-z0-9_]/g, '_');
  return t || 'unknown';
}

/**
 * Resolve object directory under output root; throws if escapes root.
 */
export function objectDir(outputRoot, objectType, objectName) {
  const root = path.resolve(outputRoot);
  const dir = path.resolve(root, 'objects', typeDir(objectType), normalizeObjectPathSegment(objectName));
  assertContained(root, dir);
  return dir;
}

export function assertContained(root, candidate) {
  const r = path.resolve(root);
  const c = path.resolve(candidate);
  const rel = path.relative(r, c);
  if (rel.startsWith('..') || path.isAbsolute(rel)) {
    throw new Error(`path escapes output root: ${candidate}`);
  }
  return c;
}

/** Stable UTF-8 LF text + SHA-256 hex. */
export function hashContent(text) {
  const normalized = String(text).replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  return {
    text: normalized,
    sha256: crypto.createHash('sha256').update(normalized, 'utf8').digest('hex'),
  };
}

export function stableStringify(obj) {
  return JSON.stringify(sortKeys(obj), null, 2) + '\n';
}

function sortKeys(value) {
  if (Array.isArray(value)) return value.map(sortKeys);
  if (value && typeof value === 'object') {
    const out = {};
    for (const k of Object.keys(value).sort()) {
      out[k] = sortKeys(value[k]);
    }
    return out;
  }
  return value;
}
