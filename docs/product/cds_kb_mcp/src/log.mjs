// src/log.mjs — structured one-JSON-object-per-line logging.
//
// The server logs to stderr (never stdout — stdout is reserved for MCP
// stdio JSON-RPC). Every line is a single JSON object so the BTP log drain /
// Grafana can parse it without regex, e.g.:
//
//   {"ts":"2026-08-13T10:00:00.000Z","level":"error","msg":"index refresh failed","err":"...","views":10619}
//
// No external dependency: process.stderr.write + JSON.stringify. The optional
// third argument is a flat fields object merged into the line (values are
// coerced to JSON-safe scalars; objects/errors get stringified).

export function log(level, msg, fields = {}) {
  const entry = {
    ts: new Date().toISOString(),
    level,
    msg,
  };
  for (const [k, v] of Object.entries(fields || {})) {
    if (v === undefined || v === null) continue;
    if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
      entry[k] = v;
    } else if (v instanceof Error) {
      entry[k] = v.message;
    } else {
      try {
        entry[k] = JSON.stringify(v);
      } catch {
        entry[k] = String(v);
      }
    }
  }
  process.stderr.write(JSON.stringify(entry) + '\n');
}

export const logError = (msg, fields) => log('error', msg, fields);
export const logWarn = (msg, fields) => log('warn', msg, fields);
export const logInfo = (msg, fields) => log('info', msg, fields);
