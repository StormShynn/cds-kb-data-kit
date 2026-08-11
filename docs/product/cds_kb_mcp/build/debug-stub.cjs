// build/debug-stub.cjs
// Stands in for the `debug` npm package during bundling (see build.mjs's
// esbuild `alias`). debug's real implementation does `require('tty')` /
// `require('supports-color')` at runtime to detect terminal color support —
// harmless in a normal Node process, but esbuild can't statically resolve
// those dynamic requires when bundling to ESM, so it emits a shim that
// throws "Dynamic require of ... is not supported" the moment anything
// (here: express, via body-parser) pulls debug in. This server never reads
// DEBUG=... env output anyway, so debug's actual job (namespaced console
// logging) has no reason to be in the bundle at all — this stub just no-ops
// every call instead.
function debug() {
  return function () {};
}
debug.enable = function () {};
debug.disable = function () {};
debug.enabled = function () { return false; };
debug.log = function () {};
debug.default = debug;

module.exports = debug;
