// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2yZA2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4a4beec169764b48";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5rOO3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "encodeIntoResult", ()=>encodeIntoResult);
parcelHelpers.export(exports, "stegaEncodeSourceMap", ()=>stegaEncodeSourceMap);
parcelHelpers.export(exports, "stegaEncodeSourceMap$1", ()=>stegaEncodeSourceMap$1);
var _browserMiddlewareZDVeirriJs = require("./browserMiddleware-zDVeirri.js");
const reKeySegment = /_key\s*==\s*['"](.*)['"]/;
function isKeySegment(segment) {
    if (typeof segment === "string") return reKeySegment.test(segment.trim());
    return typeof segment === "object" && "_key" in segment;
}
function toString(path) {
    if (!Array.isArray(path)) throw new Error("Path is not an array");
    return path.reduce((target, segment, i)=>{
        const segmentType = typeof segment;
        if (segmentType === "number") return "".concat(target, "[").concat(segment, "]");
        if (segmentType === "string") {
            const separator = i === 0 ? "" : ".";
            return "".concat(target).concat(separator).concat(segment);
        }
        if (isKeySegment(segment) && segment._key) return "".concat(target, '[_key=="').concat(segment._key, '"]');
        if (Array.isArray(segment)) {
            const [from, to] = segment;
            return "".concat(target, "[").concat(from, ":").concat(to, "]");
        }
        throw new Error("Unsupported path segment `".concat(JSON.stringify(segment), "`"));
    }, "");
}
const ESCAPE = {
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "'": "\\'",
    "\\": "\\\\"
};
const UNESCAPE = {
    "\\f": "\f",
    "\\n": "\n",
    "\\r": "\r",
    "\\t": "	",
    "\\'": "'",
    "\\\\": "\\"
};
function jsonPath(path) {
    return "$".concat(path.map((segment)=>{
        if (typeof segment === "string") {
            const escapedKey = segment.replace(/[\f\n\r\t'\\]/g, (match)=>{
                return ESCAPE[match];
            });
            return "['".concat(escapedKey, "']");
        }
        if (typeof segment === "number") return "[".concat(segment, "]");
        if (segment._key !== "") {
            const escapedKey = segment._key.replace(/['\\]/g, (match)=>{
                return ESCAPE[match];
            });
            return "[?(@._key=='".concat(escapedKey, "')]");
        }
        return "[".concat(segment._index, "]");
    }).join(""));
}
function parseJsonPath(path) {
    const parsed = [];
    const parseRe = /\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;
    let match;
    while((match = parseRe.exec(path)) !== null){
        if (match[1] !== void 0) {
            const key = match[1].replace(/\\(\\|f|n|r|t|')/g, (m)=>{
                return UNESCAPE[m];
            });
            parsed.push(key);
            continue;
        }
        if (match[2] !== void 0) {
            parsed.push(parseInt(match[2], 10));
            continue;
        }
        if (match[3] !== void 0) {
            const _key = match[3].replace(/\\(\\')/g, (m)=>{
                return UNESCAPE[m];
            });
            parsed.push({
                _key,
                _index: -1
            });
            continue;
        }
    }
    return parsed;
}
function jsonPathToStudioPath(path) {
    return path.map((segment)=>{
        if (typeof segment === "string") return segment;
        if (typeof segment === "number") return segment;
        if (segment._key !== "") return {
            _key: segment._key
        };
        if (segment._index !== -1) return segment._index;
        throw new Error("invalid segment:".concat(JSON.stringify(segment)));
    });
}
function jsonPathToMappingPath(path) {
    return path.map((segment)=>{
        if (typeof segment === "string") return segment;
        if (typeof segment === "number") return segment;
        if (segment._index !== -1) return segment._index;
        throw new Error("invalid segment:".concat(JSON.stringify(segment)));
    });
}
function resolveMapping(resultPath, csm) {
    if (!(csm == null ? void 0 : csm.mappings)) return void 0;
    const resultMappingPath = jsonPath(jsonPathToMappingPath(resultPath));
    if (csm.mappings[resultMappingPath] !== void 0) return {
        mapping: csm.mappings[resultMappingPath],
        matchedPath: resultMappingPath,
        pathSuffix: ""
    };
    const mappings = Object.entries(csm.mappings).filter(([key])=>resultMappingPath.startsWith(key)).sort(([key1], [key2])=>key2.length - key1.length);
    if (mappings.length == 0) return void 0;
    const [matchedPath, mapping] = mappings[0];
    const pathSuffix = resultMappingPath.substring(matchedPath.length);
    return {
        mapping,
        matchedPath,
        pathSuffix
    };
}
function isArray(value) {
    return value !== null && Array.isArray(value);
}
function isRecord(value) {
    return typeof value === "object" && value !== null;
}
function walkMap(value, mappingFn, path = []) {
    if (isArray(value)) return value.map((v, idx)=>{
        if (isRecord(v)) {
            const _key = v["_key"];
            if (typeof _key === "string") return walkMap(v, mappingFn, path.concat({
                _key,
                _index: idx
            }));
        }
        return walkMap(v, mappingFn, path.concat(idx));
    });
    if (isRecord(value)) return Object.fromEntries(Object.entries(value).map(([k, v])=>[
            k,
            walkMap(v, mappingFn, path.concat(k))
        ]));
    return mappingFn(value, path);
}
function encodeIntoResult(result, csm, encoder) {
    return walkMap(result, (value, path)=>{
        if (typeof value !== "string") return value;
        const resolveMappingResult = resolveMapping(path, csm);
        if (!resolveMappingResult) return value;
        const { mapping, matchedPath } = resolveMappingResult;
        if (mapping.type !== "value") return value;
        if (mapping.source.type !== "documentValue") return value;
        const sourceDocument = csm.documents[mapping.source.document];
        const sourcePath = csm.paths[mapping.source.path];
        const matchPathSegments = parseJsonPath(matchedPath);
        const sourcePathSegments = parseJsonPath(sourcePath);
        const fullSourceSegments = sourcePathSegments.concat(path.slice(matchPathSegments.length));
        return encoder({
            sourcePath: fullSourceSegments,
            sourceDocument,
            resultPath: path,
            value
        });
    });
}
const DRAFTS_PREFIX = "drafts.";
function getPublishedId(id) {
    if (id.startsWith(DRAFTS_PREFIX)) return id.slice(DRAFTS_PREFIX.length);
    return id;
}
function createEditUrl(options) {
    const { baseUrl, workspace: _workspace = "default", tool: _tool = "default", id: _id, type, path } = options;
    if (!baseUrl) throw new Error("baseUrl is required");
    if (!path) throw new Error("path is required");
    if (!_id) throw new Error("id is required");
    if (baseUrl !== "/" && baseUrl.endsWith("/")) throw new Error("baseUrl must not end with a slash");
    const workspace = _workspace === "default" ? void 0 : _workspace;
    const tool = _tool === "default" ? void 0 : _tool;
    const id = getPublishedId(_id);
    const stringifiedPath = Array.isArray(path) ? toString(jsonPathToStudioPath(path)) : path;
    const searchParams = new URLSearchParams({
        baseUrl,
        id,
        type,
        path: stringifiedPath
    });
    if (workspace) searchParams.set("workspace", workspace);
    if (tool) searchParams.set("tool", tool);
    const segments = [
        baseUrl === "/" ? "" : baseUrl
    ];
    if (workspace) segments.push(workspace);
    const routerParams = [
        "mode=presentation",
        "id=".concat(id),
        "type=".concat(type),
        "path=".concat(encodeURIComponent(stringifiedPath))
    ];
    if (tool) routerParams.push("tool=".concat(tool));
    segments.push("intent", "edit", "".concat(routerParams.join(";"), "?").concat(searchParams));
    return segments.join("/");
}
function resolveStudioBaseRoute(studioUrl) {
    let baseUrl = typeof studioUrl === "string" ? studioUrl : studioUrl.baseUrl;
    if (baseUrl !== "/") baseUrl = baseUrl.replace(/\/$/, "");
    if (typeof studioUrl === "string") return {
        baseUrl
    };
    return {
        ...studioUrl,
        baseUrl
    };
}
const filterDefault = ({ sourcePath, value })=>{
    if (isValidDate(value) || isValidURL(value)) return false;
    const endPath = sourcePath.at(-1);
    if (sourcePath.at(-2) === "slug" && endPath === "current") return false;
    if (typeof endPath === "string" && endPath.startsWith("_")) return false;
    if (typeof endPath === "number" && sourcePath.at(-2) === "marks") return false;
    if (endPath === "href" && typeof sourcePath.at(-2) === "number" && sourcePath.at(-3) === "markDefs") return false;
    if (endPath === "style" || endPath === "listItem") return false;
    if (sourcePath.some((path)=>path === "meta" || path === "metadata" || path === "openGraph" || path === "seo")) return false;
    if (typeof endPath === "string" && denylist.has(endPath)) return false;
    return true;
};
const denylist = /* @__PURE__ */ new Set([
    "color",
    "colour",
    "currency",
    "email",
    "format",
    "gid",
    "hex",
    "href",
    "hsl",
    "hsla",
    "icon",
    "id",
    "index",
    "key",
    "language",
    "layout",
    "link",
    "linkAction",
    "locale",
    "lqip",
    "page",
    "path",
    "ref",
    "rgb",
    "rgba",
    "route",
    "secret",
    "slug",
    "status",
    "tag",
    "template",
    "theme",
    "type",
    "unit",
    "url",
    "username",
    "variant",
    "website"
]);
function isValidDate(dateString) {
    return /^\d{4}-\d{2}-\d{2}/.test(dateString) ? Boolean(Date.parse(dateString)) : false;
}
function isValidURL(url) {
    try {
        new URL(url, url.startsWith("/") ? "https://acme.com" : void 0);
    } catch  {
        return false;
    }
    return true;
}
const TRUNCATE_LENGTH = 20;
function stegaEncodeSourceMap(result, resultSourceMap, config) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const { filter, logger, enabled } = config;
    if (!enabled) {
        const msg = "config.enabled must be true, don't call this function otherwise";
        (_a = logger == null ? void 0 : logger.error) == null || _a.call(logger, "[@sanity/client/stega]: ".concat(msg), {
            result,
            resultSourceMap,
            config
        });
        throw new TypeError(msg);
    }
    if (!resultSourceMap) {
        (_b = logger == null ? void 0 : logger.error) == null || _b.call(logger, "[@sanity/client/stega]: Missing Content Source Map from response body", {
            result,
            resultSourceMap,
            config
        });
        return result;
    }
    if (!config.studioUrl) {
        const msg = "config.studioUrl must be defined";
        (_c = logger == null ? void 0 : logger.error) == null || _c.call(logger, "[@sanity/client/stega]: ".concat(msg), {
            result,
            resultSourceMap,
            config
        });
        throw new TypeError(msg);
    }
    const report = {
        encoded: [],
        skipped: []
    };
    const resultWithStega = encodeIntoResult(result, resultSourceMap, ({ sourcePath, sourceDocument, resultPath, value })=>{
        if ((typeof filter === "function" ? filter({
            sourcePath,
            resultPath,
            filterDefault,
            sourceDocument,
            value
        }) : filterDefault({
            sourcePath,
            resultPath,
            filterDefault,
            sourceDocument,
            value
        })) === false) {
            if (logger) report.skipped.push({
                path: prettyPathForLogging(sourcePath),
                value: "".concat(value.slice(0, TRUNCATE_LENGTH)).concat(value.length > TRUNCATE_LENGTH ? "..." : ""),
                length: value.length
            });
            return value;
        }
        if (logger) report.encoded.push({
            path: prettyPathForLogging(sourcePath),
            value: "".concat(value.slice(0, TRUNCATE_LENGTH)).concat(value.length > TRUNCATE_LENGTH ? "..." : ""),
            length: value.length
        });
        const { baseUrl, workspace, tool } = resolveStudioBaseRoute(typeof config.studioUrl === "function" ? config.studioUrl(sourceDocument) : config.studioUrl);
        if (!baseUrl) return value;
        const { _id: id, _type: type } = sourceDocument;
        return (0, _browserMiddlewareZDVeirriJs.b)(value, {
            origin: "sanity.io",
            href: createEditUrl({
                baseUrl,
                workspace,
                tool,
                id,
                type,
                path: sourcePath
            })
        }, // We use custom logic to determine if we should skip encoding
        false);
    });
    if (logger) {
        const isSkipping = report.skipped.length;
        const isEncoding = report.encoded.length;
        if (isSkipping || isEncoding) {
            (_d = (logger == null ? void 0 : logger.groupCollapsed) || logger.log) == null || _d("[@sanity/client/stega]: Encoding source map into result");
            (_e = logger.log) == null || _e.call(logger, "[@sanity/client/stega]: Paths encoded: ".concat(report.encoded.length, ", skipped: ").concat(report.skipped.length));
        }
        if (report.encoded.length > 0) {
            (_f = logger == null ? void 0 : logger.log) == null || _f.call(logger, "[@sanity/client/stega]: Table of encoded paths");
            (_g = (logger == null ? void 0 : logger.table) || logger.log) == null || _g(report.encoded);
        }
        if (report.skipped.length > 0) {
            const skipped = /* @__PURE__ */ new Set();
            for (const { path } of report.skipped)skipped.add(path.replace(reKeySegment, "0").replace(/\[\d+\]/g, "[]"));
            (_h = logger == null ? void 0 : logger.log) == null || _h.call(logger, "[@sanity/client/stega]: List of skipped paths", [
                ...skipped.values()
            ]);
        }
        if (isSkipping || isEncoding) (_i = logger == null ? void 0 : logger.groupEnd) == null || _i.call(logger);
    }
    return resultWithStega;
}
function prettyPathForLogging(path) {
    return toString(jsonPathToStudioPath(path));
}
var stegaEncodeSourceMap$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    stegaEncodeSourceMap: stegaEncodeSourceMap
});

},{"./browserMiddleware-zDVeirri.js":"c9zOR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2yZA2"], null, "parcelRequire1d06")

//# sourceMappingURL=stegaEncodeSourceMap-gZIRaYar.69764b48.js.map
