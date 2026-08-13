// Snapshot plan / write / diff — local filesystem only, no overwrite.
import fs from 'node:fs/promises';
import path from 'node:path';
import { EXTRACTOR_VERSION, isCustomObjectName, matchesNamespace } from './config.mjs';
import { extractDdlDependencies } from './connector.mjs';
import {
  assertContained,
  hashContent,
  objectDir,
  stableStringify,
} from './paths.mjs';

/**
 * Dry-run export plan for Z* / Y* scope only.
 */
export async function planExport(connector, config, { packages, maxObjects = 100 } = {}) {
  const warnings = [];
  const roots = [];
  const unsupported = [];
  const skippedStandard = [];

  let packageList = packages;
  if (!packageList?.length) {
    const listed = await connector.listPackages({ max: 50 });
    warnings.push(...(listed.warnings || []));
    packageList = listed.items.map((p) => p.name);
  }

  for (const pkg of packageList) {
    if (!matchesNamespace(pkg, config.packageInclude)) {
      warnings.push(`skip package ${pkg}: outside include`);
      continue;
    }
    if (matchesNamespace(pkg, config.packageExclude)) {
      warnings.push(`skip package ${pkg}: excluded`);
      continue;
    }
    const objs = await connector.listObjects({
      packageName: pkg,
      objectType: 'data_definition',
      max: maxObjects,
    });
    for (const o of objs.items) {
      if (!isCustomObjectName(o.name)) {
        skippedStandard.push({ name: o.name, reason: 'sap_standard' });
        continue;
      }
      roots.push({
        name: o.name,
        objectType: o.objectType || 'data_definition',
        package: o.package || pkg,
        inclusionReason: 'root-package',
      });
    }
  }

  roots.sort((a, b) => a.name.localeCompare(b.name));

  return {
    systemAlias: config.systemAlias,
    selection: {
      packageInclude: config.packageInclude,
      packageExclude: config.packageExclude,
      relatedObjectInclude: config.relatedObjectInclude,
      objectTypeInclude: config.objectTypeInclude,
      dryRun: true,
    },
    packages: packageList,
    roots,
    relatedPreview: [],
    skippedStandard,
    unsupported,
    counts: {
      packages: packageList.length,
      roots: roots.length,
      skippedStandard: skippedStandard.length,
    },
    warnings,
  };
}

/**
 * Write snapshot under outputRoot (explicit override allowed if contained policy).
 * Skip-if-exists: never overwrite existing object files.
 */
export async function exportSnapshot(connector, config, {
  outputRoot,
  packages,
  objects,
  maxObjects = 50,
} = {}) {
  if (!config.outputRoot) {
    throw new Error('SAP_ADT_OUTPUT_ROOT must be configured before snapshot writes');
  }
  const configuredRoot = path.resolve(config.outputRoot);
  const root = path.resolve(outputRoot || configuredRoot);
  // Defense in depth: callers outside the MCP tools layer must not be able
  // to redirect a snapshot beyond the configured allowlisted root.
  assertContained(configuredRoot, root);
  await fs.mkdir(root, { recursive: true });

  const plan = objects?.length
    ? {
        roots: objects.map((o) => ({
          name: o.name || o,
          objectType: o.objectType || 'data_definition',
          package: o.package || null,
          inclusionReason: 'explicit',
        })),
        warnings: [],
        skippedStandard: [],
        unsupported: [],
      }
    : await planExport(connector, config, { packages, maxObjects });

  const snapshotUtc = new Date().toISOString();
  const manifestObjects = [];
  const externalDeps = [];
  const failures = [];
  const unsupported = [...(plan.unsupported || [])];
  const warnings = [...(plan.warnings || [])];
  let written = 0;
  let skippedExisting = 0;

  for (const rootObj of plan.roots.slice(0, maxObjects)) {
    if (!isCustomObjectName(rootObj.name)) {
      warnings.push(`skip ${rootObj.name}: not Z*/Y*`);
      continue;
    }
    try {
      const obj = await connector.getObject({
        objectType: rootObj.objectType || 'data_definition',
        name: rootObj.name,
      });
      if (!obj.supported) {
        unsupported.push({
          name: rootObj.name,
          objectType: rootObj.objectType,
          reason: obj.reason,
        });
        continue;
      }

      const dir = objectDir(root, 'data_definition', obj.identity.name);
      const sourcePath = path.join(dir, 'source.asddls');
      const metaPath = path.join(dir, 'metadata.json');

      const sourceHash = hashContent(obj.source || '');
      const deps = extractDdlDependencies(obj.source, obj.identity.name, config);
      for (const e of deps.external) {
        externalDeps.push({
          from: obj.identity.name,
          ...e,
        });
      }

      const metadata = {
        identity: obj.identity,
        package: obj.metadata?.package || rootObj.package,
        objectType: 'data_definition',
        language: obj.metadata?.language || 'EN',
        active: true,
        inclusionReason: rootObj.inclusionReason || 'root-package',
        handler: 'data_definition',
        extractorVersion: config.extractorVersion || EXTRACTOR_VERSION,
        dependencies: deps.dependencies,
        externalDependencies: deps.external,
        files: {
          source: 'source.asddls',
          metadata: 'metadata.json',
        },
        hashes: {
          source_sha256: sourceHash.sha256,
        },
        warnings: obj.warnings || [],
      };
      // Do not put snapshot_utc inside per-object metadata (determinism)
      const metaHash = hashContent(stableStringify(metadata));
      metadata.hashes.metadata_sha256 = metaHash.sha256;

      const existsSource = await fileExists(sourcePath);
      const existsMeta = await fileExists(metaPath);
      if (existsSource || existsMeta) {
        skippedExisting += 1;
        manifestObjects.push({
          ...metadata,
          writeStatus: 'skipped_exists',
        });
        continue;
      }

      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(sourcePath, sourceHash.text, 'utf8');
      // Recompute metadata with final hashes for file write (metadata hash includes hashes.source only first)
      const metadataForWrite = {
        ...metadata,
        hashes: {
          source_sha256: sourceHash.sha256,
        },
      };
      const metaBody = hashContent(stableStringify(metadataForWrite));
      metadataForWrite.hashes.metadata_sha256 = metaBody.sha256;
      // Write stable metadata without embedding metadata_sha256 in hashed content loop —
      // store source hash only in file for repeatability; put metadata_sha256 in manifest.
      const fileMeta = {
        identity: metadataForWrite.identity,
        package: metadataForWrite.package,
        objectType: metadataForWrite.objectType,
        language: metadataForWrite.language,
        active: metadataForWrite.active,
        inclusionReason: metadataForWrite.inclusionReason,
        handler: metadataForWrite.handler,
        extractorVersion: metadataForWrite.extractorVersion,
        dependencies: metadataForWrite.dependencies,
        externalDependencies: metadataForWrite.externalDependencies,
        files: metadataForWrite.files,
        hashes: { source_sha256: sourceHash.sha256 },
        warnings: metadataForWrite.warnings,
      };
      const fileMetaBody = hashContent(stableStringify(fileMeta));
      await fs.writeFile(metaPath, fileMetaBody.text, 'utf8');

      written += 1;
      manifestObjects.push({
        ...fileMeta,
        hashes: {
          source_sha256: sourceHash.sha256,
          metadata_sha256: fileMetaBody.sha256,
        },
        writeStatus: 'written',
      });
    } catch (e) {
      failures.push({
        name: rootObj.name,
        objectType: rootObj.objectType,
        error: e.message,
      });
    }
  }

  manifestObjects.sort((a, b) =>
    String(a.identity?.name || '').localeCompare(String(b.identity?.name || '')),
  );
  externalDeps.sort((a, b) =>
    `${a.from}:${a.name}`.localeCompare(`${b.from}:${b.name}`),
  );

  const manifest = {
    schema_version: 1,
    extractor_version: config.extractorVersion || EXTRACTOR_VERSION,
    system_alias: config.systemAlias,
    snapshot_utc: snapshotUtc,
    selection: {
      packageInclude: config.packageInclude,
      relatedObjectInclude: config.relatedObjectInclude,
      objectTypeInclude: ['data_definition'],
      outputRoot: root,
    },
    objects: manifestObjects,
    external_dependencies: externalDeps,
    unsupported,
    failures,
    skipped_standard: plan.skippedStandard || [],
    counts: {
      written,
      skipped_existing: skippedExisting,
      failed: failures.length,
      unsupported: unsupported.length,
    },
  };

  const manifestPath = path.join(root, 'manifest.json');
  // Always write/replace top-level manifest for this snapshot run (object files skip-if-exists)
  await fs.writeFile(manifestPath, stableStringify(manifest), 'utf8');

  return {
    outputRoot: root,
    manifestPath,
    counts: manifest.counts,
    warnings,
    manifest,
  };
}

/**
 * Compare two snapshot roots via manifest hashes.
 */
export async function diffSnapshots(leftRoot, rightRoot) {
  const left = await readManifest(leftRoot);
  const right = await readManifest(rightRoot);
  const leftMap = indexByName(left.objects || []);
  const rightMap = indexByName(right.objects || []);
  const names = new Set([...leftMap.keys(), ...rightMap.keys()]);
  const added = [];
  const removed = [];
  const changed = [];
  const same = [];

  for (const name of [...names].sort()) {
    const L = leftMap.get(name);
    const R = rightMap.get(name);
    if (L && !R) removed.push(name);
    else if (!L && R) added.push(name);
    else {
      const lh = L.hashes?.source_sha256;
      const rh = R.hashes?.source_sha256;
      if (lh !== rh) changed.push({ name, left: lh, right: rh });
      else same.push(name);
    }
  }

  return {
    left: { root: path.resolve(leftRoot), snapshot_utc: left.snapshot_utc, objects: leftMap.size },
    right: { root: path.resolve(rightRoot), snapshot_utc: right.snapshot_utc, objects: rightMap.size },
    added,
    removed,
    changed,
    same_count: same.length,
  };
}

async function readManifest(root) {
  const p = path.join(path.resolve(root), 'manifest.json');
  const raw = await fs.readFile(p, 'utf8');
  return JSON.parse(raw);
}

function indexByName(objects) {
  const m = new Map();
  for (const o of objects) {
    const name = o.identity?.name || o.name;
    if (name) m.set(String(name).toUpperCase(), o);
  }
  return m;
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}
