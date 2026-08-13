/**
 * Register optional SAP ADT MCP tools on an McpServer.
 * Tools are always registered; when SAP env is unset they return configured=false.
 */
import { z } from 'zod';
import path from 'node:path';
import { loadSapConfig, describeSapConfig, DEFAULT_OUTPUT_ROOT } from './config.mjs';
import { createConnector, SapConnectorError } from './connector.mjs';
import { mcpFromEnvelope, sapEnvelope, unconfiguredEnvelope } from './envelope.mjs';
import { assertContained } from './paths.mjs';
import { planExport, exportSnapshot, diffSnapshots } from './snapshot.mjs';
import { logInfo, logWarn } from '../log.mjs';

const envelopeSchema = z.object({
  ok: z.boolean(),
  configured: z.boolean(),
  data: z.record(z.string(), z.unknown()),
  warnings: z.array(z.string()),
  errors: z.array(z.string()),
  trace_id: z.string(),
});

/**
 * @param {import('@modelcontextprotocol/server').McpServer} server
 * @param {{ fetch?: typeof fetch, env?: NodeJS.ProcessEnv }} [deps]
 */
export function registerSapTools(server, deps = {}) {
  const env = deps.env || process.env;
  let cachedConfig = null;
  let configError = null;

  try {
    cachedConfig = loadSapConfig(env);
    if (cachedConfig.configured) {
      logInfo('SAP ADT tools enabled', describeSapConfig(cachedConfig));
    }
  } catch (e) {
    configError = e;
    logWarn('SAP ADT config rejected', { err: e.message });
  }

  function getConfig() {
    if (configError) {
      return { kind: 'invalid', error: configError };
    }
    if (!cachedConfig?.configured) {
      return { kind: 'unconfigured' };
    }
    return { kind: 'ok', config: cachedConfig };
  }

  function connectorFor(config) {
    return createConnector(config, { fetch: deps.fetch });
  }

  async function withConnector(toolName, fn) {
    const state = getConfig();
    if (state.kind === 'unconfigured') {
      return mcpFromEnvelope(unconfiguredEnvelope(toolName));
    }
    if (state.kind === 'invalid') {
      return mcpFromEnvelope(
        sapEnvelope({
          ok: false,
          configured: false,
          data: { tool: toolName },
          errors: state.error.details || [state.error.message],
        }),
      );
    }
    try {
      const connector = connectorFor(state.config);
      const data = await fn(connector, state.config);
      return mcpFromEnvelope(
        sapEnvelope({
          ok: true,
          configured: true,
          data: { ...data, systemAlias: state.config.systemAlias },
          warnings: data.warnings || [],
        }),
      );
    } catch (e) {
      const msg = e instanceof SapConnectorError ? e.message : e.message || String(e);
      return mcpFromEnvelope(
        sapEnvelope({
          ok: false,
          configured: true,
          data: { tool: toolName },
          errors: [msg],
          warnings: [],
        }),
      );
    }
  }

  const sapNote =
    'Optional SAP DEV ADT read-only slice (C3). When SAP_ADT_* env is unset, returns configured=false. ' +
    'Never PRD. Only Z*/Y* custom objects. No table/row reads. Snapshots write under SAP_ADT_OUTPUT_ROOT ' +
    `(default ${DEFAULT_OUTPUT_ROOT}) — not overlays/private markdown views. Promote to private overlay manually after review.`;

  server.registerTool(
    'sap_connection_test',
    {
      title: 'SAP ADT connection test',
      description: `${sapNote} Probe ADT discovery on the configured DEV system.`,
      inputSchema: {},
      outputSchema: envelopeSchema,
    },
    async () => withConnector('sap_connection_test', async (connector) => {
      const result = await connector.testConnection();
      return { connection: result, warnings: [] };
    }),
  );

  server.registerTool(
    'sap_list_packages',
    {
      title: 'List SAP packages (Z*/Y*)',
      description: `${sapNote} List custom packages matching configured include patterns.`,
      inputSchema: {
        max: z.number().int().min(1).max(500).optional().describe('Max packages (default 100)'),
      },
      outputSchema: envelopeSchema,
    },
    async ({ max = 100 } = {}) =>
      withConnector('sap_list_packages', async (connector) => {
        const result = await connector.listPackages({ max });
        return { items: result.items, next_cursor: result.next_cursor, warnings: result.warnings };
      }),
  );

  server.registerTool(
    'sap_list_objects',
    {
      title: 'List SAP objects in package',
      description: `${sapNote} List data_definition (DDLS) objects in a Z*/Y* package.`,
      inputSchema: {
        packageName: z.string().describe('Package name, e.g. ZSD_CUSTOM'),
        objectType: z.string().optional().describe('Default data_definition'),
        max: z.number().int().min(1).max(500).optional(),
      },
      outputSchema: envelopeSchema,
    },
    async ({ packageName, objectType = 'data_definition', max = 200 }) =>
      withConnector('sap_list_objects', async (connector) => {
        const result = await connector.listObjects({ packageName, objectType, max });
        return { items: result.items, next_cursor: result.next_cursor, warnings: result.warnings };
      }),
  );

  server.registerTool(
    'sap_get_object',
    {
      title: 'Get SAP repository object',
      description: `${sapNote} Fetch one custom object source — data_definition/DDLS first.`,
      inputSchema: {
        name: z.string().describe('Object name, e.g. ZI_MyView'),
        objectType: z.string().optional().describe('Default data_definition'),
      },
      outputSchema: envelopeSchema,
    },
    async ({ name, objectType = 'data_definition' }) =>
      withConnector('sap_get_object', async (connector) => {
        const obj = await connector.getObject({ name, objectType });
        return { object: obj, warnings: obj.warnings || [] };
      }),
  );

  server.registerTool(
    'sap_get_dependencies',
    {
      title: 'Get static DDL dependencies',
      description: `${sapNote} Best-effort static dependency names from DDL; SAP-standard refs are external.`,
      inputSchema: {
        name: z.string().describe('Root object name'),
        objectType: z.string().optional().describe('Default data_definition'),
      },
      outputSchema: envelopeSchema,
    },
    async ({ name, objectType = 'data_definition' }) =>
      withConnector('sap_get_dependencies', async (connector) => {
        const deps = await connector.getDependencies({ name, objectType });
        return { ...deps };
      }),
  );

  server.registerTool(
    'sap_plan_export',
    {
      title: 'Plan SAP export (dry-run)',
      description: `${sapNote} Dry-run only — lists Z*/Y* roots that would be exported; no filesystem writes.`,
      inputSchema: {
        packages: z.array(z.string()).optional().describe('Optional package list; otherwise discover'),
        maxObjects: z.number().int().min(1).max(500).optional(),
      },
      outputSchema: envelopeSchema,
    },
    async ({ packages, maxObjects = 100 } = {}) =>
      withConnector('sap_plan_export', async (connector, config) => {
        const plan = await planExport(connector, config, { packages, maxObjects });
        return { plan, warnings: plan.warnings };
      }),
  );

  server.registerTool(
    'sap_export_snapshot',
    {
      title: 'Export SAP snapshot (local)',
      description:
        `${sapNote} Write deterministic source+metadata+manifest under output root. ` +
        'Skip-if-exists (no overwrite). Does not write overlays/private view markdown. ' +
        'Requires explicit outputRoot or configured SAP_ADT_OUTPUT_ROOT.',
      inputSchema: {
        outputRoot: z
          .string()
          .optional()
          .describe('Absolute or relative output root (must stay under configured root unless equal)'),
        packages: z.array(z.string()).optional(),
        objects: z
          .array(z.object({ name: z.string(), objectType: z.string().optional(), package: z.string().optional() }))
          .optional(),
        maxObjects: z.number().int().min(1).max(200).optional(),
      },
      outputSchema: envelopeSchema,
    },
    async ({ outputRoot, packages, objects, maxObjects = 50 } = {}) =>
      withConnector('sap_export_snapshot', async (connector, config) => {
        const configuredRoot = path.resolve(config.outputRoot);
        const target = path.resolve(outputRoot || configuredRoot);
        // Constrain writes: target must equal configured root or be inside it
        assertContained(configuredRoot, target);
        const result = await exportSnapshot(connector, config, {
          outputRoot: target,
          packages,
          objects,
          maxObjects,
        });
        return {
          outputRoot: result.outputRoot,
          manifestPath: result.manifestPath,
          counts: result.counts,
          promotion:
            'Review files under output root, then manually create private overlay markdown / propose via compose_query or generate_cds_view — never auto-merge.',
          warnings: result.warnings,
        };
      }),
  );

  server.registerTool(
    'sap_diff_snapshot',
    {
      title: 'Diff two SAP snapshots',
      description: `${sapNote} Compare manifest source hashes between two local snapshot roots.`,
      inputSchema: {
        leftRoot: z.string().describe('Left snapshot directory (contains manifest.json)'),
        rightRoot: z.string().describe('Right snapshot directory'),
      },
      outputSchema: envelopeSchema,
    },
    async ({ leftRoot, rightRoot }) => {
      const state = getConfig();
      // Diff is local-only; allow even when SAP unconfigured, but still validate paths exist
      try {
        const diff = await diffSnapshots(leftRoot, rightRoot);
        return mcpFromEnvelope(
          sapEnvelope({
            ok: true,
            configured: state.kind === 'ok',
            data: { diff },
            warnings:
              state.kind === 'ok'
                ? []
                : ['SAP ADT env unset — diff is local filesystem only'],
          }),
        );
      } catch (e) {
        return mcpFromEnvelope(
          sapEnvelope({
            ok: false,
            configured: state.kind === 'ok',
            data: { tool: 'sap_diff_snapshot' },
            errors: [e.message],
          }),
        );
      }
    },
  );

  return {
    getConfigState: getConfig,
    describe: () => {
      const s = getConfig();
      if (s.kind === 'ok') return describeSapConfig(s.config);
      if (s.kind === 'invalid') return { configured: false, error: s.error.message };
      return { configured: false };
    },
  };
}
