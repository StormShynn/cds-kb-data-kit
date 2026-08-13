// Re-export shared query-library helpers from the data package (harness monorepo).
export {
  buildLibraryIndex,
  entryKind,
  featuredLibraryEntries,
  indexLibraryById,
  resolveLibraryEntry,
  shapeFingerprint,
  slugifyLibraryId,
  toIndexEntry,
} from '../../cds_kb_data/scripts/lib/query-library.mjs';
