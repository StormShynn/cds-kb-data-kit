// Consistent SAP tool result envelopes (export-contract.md).
import { randomUUID } from 'node:crypto';

/**
 * @param {{ ok?: boolean, configured?: boolean, data?: object, warnings?: string[], errors?: string[], trace_id?: string }} opts
 */
export function sapEnvelope(opts = {}) {
  return {
    ok: opts.ok !== false && !(opts.errors && opts.errors.length),
    configured: opts.configured !== false,
    data: opts.data ?? {},
    warnings: Array.isArray(opts.warnings) ? opts.warnings : [],
    errors: Array.isArray(opts.errors) ? opts.errors : [],
    trace_id: opts.trace_id || randomUUID(),
  };
}

/** Envelope when SAP ADT env is not configured — server stays dataless. */
export function unconfiguredEnvelope(toolName, extra = {}) {
  return sapEnvelope({
    ok: false,
    configured: false,
    data: { tool: toolName, ...extra },
    errors: [
      'SAP ADT not configured. Set SAP_ADT_BASE_URL, SAP_ADT_USERNAME, SAP_ADT_PASSWORD, SAP_ADT_CLIENT (HTTPS DEV only).',
    ],
  });
}

export function mcpFromEnvelope(envelope) {
  const text = JSON.stringify(envelope, null, 2);
  return {
    content: [{ type: 'text', text }],
    structuredContent: envelope,
  };
}
