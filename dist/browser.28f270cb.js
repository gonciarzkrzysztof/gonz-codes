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
})({"bJrhW":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "593deb6a28f270cb";
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

},{}],"bnXli":[function(require,module,exports) {
module.exports = require("6453ea14c44ce599").EventSourcePolyfill;

},{"6453ea14c44ce599":"6j218"}],"6j218":[function(require,module,exports) {
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */ /*jslint indent: 2, vars: true, plusplus: true */ /*global setTimeout, clearTimeout */ (function(global) {
    "use strict";
    var setTimeout = global.setTimeout;
    var clearTimeout = global.clearTimeout;
    var XMLHttpRequest = global.XMLHttpRequest;
    var XDomainRequest = global.XDomainRequest;
    var ActiveXObject = global.ActiveXObject;
    var NativeEventSource = global.EventSource;
    var document = global.document;
    var Promise = global.Promise;
    var fetch = global.fetch;
    var Response = global.Response;
    var TextDecoder = global.TextDecoder;
    var TextEncoder = global.TextEncoder;
    var AbortController = global.AbortController;
    if (typeof window !== "undefined" && typeof document !== "undefined" && !("readyState" in document) && document.body == null) {
        document.readyState = "loading";
        window.addEventListener("load", function(event) {
            document.readyState = "complete";
        }, false);
    }
    if (XMLHttpRequest == null && ActiveXObject != null) XMLHttpRequest = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
    };
    if (Object.create == undefined) Object.create = function(C) {
        function F() {}
        F.prototype = C;
        return new F();
    };
    if (!Date.now) Date.now = function now() {
        return new Date().getTime();
    };
    // see #118 (Promise#finally with polyfilled Promise)
    // see #123 (data URLs crash Edge)
    // see #125 (CSP violations)
    // see pull/#138
    // => No way to polyfill Promise#finally
    if (AbortController == undefined) {
        var originalFetch2 = fetch;
        fetch = function(url, options) {
            var signal = options.signal;
            return originalFetch2(url, {
                headers: options.headers,
                credentials: options.credentials,
                cache: options.cache
            }).then(function(response) {
                var reader = response.body.getReader();
                signal._reader = reader;
                if (signal._aborted) signal._reader.cancel();
                return {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers,
                    body: {
                        getReader: function() {
                            return reader;
                        }
                    }
                };
            });
        };
        AbortController = function() {
            this.signal = {
                _reader: null,
                _aborted: false
            };
            this.abort = function() {
                if (this.signal._reader != null) this.signal._reader.cancel();
                this.signal._aborted = true;
            };
        };
    }
    function TextDecoderPolyfill() {
        this.bitsNeeded = 0;
        this.codePoint = 0;
    }
    TextDecoderPolyfill.prototype.decode = function(octets) {
        function valid(codePoint, shift, octetsCount) {
            if (octetsCount === 1) return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07FF;
            if (octetsCount === 2) return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xD7FF || codePoint >= 0xE000 >> shift && codePoint << shift <= 0xFFFF;
            if (octetsCount === 3) return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10FFFF;
            throw new Error();
        }
        function octetsCount(bitsNeeded, codePoint) {
            if (bitsNeeded === 6) return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
            if (bitsNeeded === 12) return codePoint > 15 ? 3 : 2;
            if (bitsNeeded === 18) return 3;
            throw new Error();
        }
        var REPLACER = 0xFFFD;
        var string = "";
        var bitsNeeded = this.bitsNeeded;
        var codePoint = this.codePoint;
        for(var i = 0; i < octets.length; i += 1){
            var octet = octets[i];
            if (bitsNeeded !== 0) {
                if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
                    bitsNeeded = 0;
                    codePoint = REPLACER;
                    string += String.fromCharCode(codePoint);
                }
            }
            if (bitsNeeded === 0) {
                if (octet >= 0 && octet <= 127) {
                    bitsNeeded = 0;
                    codePoint = octet;
                } else if (octet >= 192 && octet <= 223) {
                    bitsNeeded = 6;
                    codePoint = octet & 31;
                } else if (octet >= 224 && octet <= 239) {
                    bitsNeeded = 12;
                    codePoint = octet & 15;
                } else if (octet >= 240 && octet <= 247) {
                    bitsNeeded = 18;
                    codePoint = octet & 7;
                } else {
                    bitsNeeded = 0;
                    codePoint = REPLACER;
                }
                if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
                    bitsNeeded = 0;
                    codePoint = REPLACER;
                }
            } else {
                bitsNeeded -= 6;
                codePoint = codePoint << 6 | octet & 63;
            }
            if (bitsNeeded === 0) {
                if (codePoint <= 0xFFFF) string += String.fromCharCode(codePoint);
                else {
                    string += String.fromCharCode(0xD800 + (codePoint - 0xFFFF - 1 >> 10));
                    string += String.fromCharCode(0xDC00 + (codePoint - 0xFFFF - 1 & 0x3FF));
                }
            }
        }
        this.bitsNeeded = bitsNeeded;
        this.codePoint = codePoint;
        return string;
    };
    // Firefox < 38 throws an error with stream option
    var supportsStreamOption = function() {
        try {
            return new TextDecoder().decode(new TextEncoder().encode("test"), {
                stream: true
            }) === "test";
        } catch (error) {
            console.debug("TextDecoder does not support streaming option. Using polyfill instead: " + error);
        }
        return false;
    };
    // IE, Edge
    if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) TextDecoder = TextDecoderPolyfill;
    var k = function() {};
    function XHRWrapper(xhr) {
        this.withCredentials = false;
        this.readyState = 0;
        this.status = 0;
        this.statusText = "";
        this.responseText = "";
        this.onprogress = k;
        this.onload = k;
        this.onerror = k;
        this.onreadystatechange = k;
        this._contentType = "";
        this._xhr = xhr;
        this._sendTimeout = 0;
        this._abort = k;
    }
    XHRWrapper.prototype.open = function(method, url) {
        this._abort(true);
        var that = this;
        var xhr = this._xhr;
        var state = 1;
        var timeout = 0;
        this._abort = function(silent) {
            if (that._sendTimeout !== 0) {
                clearTimeout(that._sendTimeout);
                that._sendTimeout = 0;
            }
            if (state === 1 || state === 2 || state === 3) {
                state = 4;
                xhr.onload = k;
                xhr.onerror = k;
                xhr.onabort = k;
                xhr.onprogress = k;
                xhr.onreadystatechange = k;
                // IE 8 - 9: XDomainRequest#abort() does not fire any event
                // Opera < 10: XMLHttpRequest#abort() does not fire any event
                xhr.abort();
                if (timeout !== 0) {
                    clearTimeout(timeout);
                    timeout = 0;
                }
                if (!silent) {
                    that.readyState = 4;
                    that.onabort(null);
                    that.onreadystatechange();
                }
            }
            state = 0;
        };
        var onStart = function() {
            if (state === 1) {
                //state = 2;
                var status = 0;
                var statusText = "";
                var contentType = undefined;
                if (!("contentType" in xhr)) try {
                    status = xhr.status;
                    statusText = xhr.statusText;
                    contentType = xhr.getResponseHeader("Content-Type");
                } catch (error) {
                    // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
                    // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
                    // https://bugs.webkit.org/show_bug.cgi?id=29121
                    status = 0;
                    statusText = "";
                    contentType = undefined;
                // Firefox < 14, Chrome ?, Safari ?
                // https://bugs.webkit.org/show_bug.cgi?id=29658
                // https://bugs.webkit.org/show_bug.cgi?id=77854
                }
                else {
                    status = 200;
                    statusText = "OK";
                    contentType = xhr.contentType;
                }
                if (status !== 0) {
                    state = 2;
                    that.readyState = 2;
                    that.status = status;
                    that.statusText = statusText;
                    that._contentType = contentType;
                    that.onreadystatechange();
                }
            }
        };
        var onProgress = function() {
            onStart();
            if (state === 2 || state === 3) {
                state = 3;
                var responseText = "";
                try {
                    responseText = xhr.responseText;
                } catch (error) {
                // IE 8 - 9 with XMLHttpRequest
                }
                that.readyState = 3;
                that.responseText = responseText;
                that.onprogress();
            }
        };
        var onFinish = function(type, event) {
            if (event == null || event.preventDefault == null) event = {
                preventDefault: k
            };
            // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
            // IE 8 fires "onload" without "onprogress"
            onProgress();
            if (state === 1 || state === 2 || state === 3) {
                state = 4;
                if (timeout !== 0) {
                    clearTimeout(timeout);
                    timeout = 0;
                }
                that.readyState = 4;
                if (type === "load") that.onload(event);
                else if (type === "error") that.onerror(event);
                else if (type === "abort") that.onabort(event);
                else throw new TypeError();
                that.onreadystatechange();
            }
        };
        var onReadyStateChange = function(event) {
            if (xhr != undefined) {
                if (xhr.readyState === 4) {
                    if (!("onload" in xhr) || !("onerror" in xhr) || !("onabort" in xhr)) onFinish(xhr.responseText === "" ? "error" : "load", event);
                } else if (xhr.readyState === 3) {
                    if (!("onprogress" in xhr)) // and in Firefox 3.6
                    onProgress();
                } else if (xhr.readyState === 2) onStart();
            }
        };
        var onTimeout = function() {
            timeout = setTimeout(function() {
                onTimeout();
            }, 500);
            if (xhr.readyState === 3) onProgress();
        };
        // XDomainRequest#abort removes onprogress, onerror, onload
        if ("onload" in xhr) xhr.onload = function(event) {
            onFinish("load", event);
        };
        if ("onerror" in xhr) xhr.onerror = function(event) {
            onFinish("error", event);
        };
        // improper fix to match Firefox behaviour, but it is better than just ignore abort
        // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
        // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
        // https://code.google.com/p/chromium/issues/detail?id=153570
        // IE 8 fires "onload" without "onprogress
        if ("onabort" in xhr) xhr.onabort = function(event) {
            onFinish("abort", event);
        };
        if ("onprogress" in xhr) xhr.onprogress = onProgress;
        // IE 8 - 9 (XMLHTTPRequest)
        // Opera < 12
        // Firefox < 3.5
        // Firefox 3.5 - 3.6 - ? < 9.0
        // onprogress is not fired sometimes or delayed
        // see also #64 (significant lag in IE 11)
        if ("onreadystatechange" in xhr) xhr.onreadystatechange = function(event) {
            onReadyStateChange(event);
        };
        if ("contentType" in xhr || !("ontimeout" in XMLHttpRequest.prototype)) url += (url.indexOf("?") === -1 ? "?" : "&") + "padding=true";
        xhr.open(method, url, true);
        if ("readyState" in xhr) // workaround for Opera 12 issue with "progress" events
        // #91 (XMLHttpRequest onprogress not fired for streaming response in Edge 14-15-?)
        timeout = setTimeout(function() {
            onTimeout();
        }, 0);
    };
    XHRWrapper.prototype.abort = function() {
        this._abort(false);
    };
    XHRWrapper.prototype.getResponseHeader = function(name) {
        return this._contentType;
    };
    XHRWrapper.prototype.setRequestHeader = function(name, value) {
        var xhr = this._xhr;
        if ("setRequestHeader" in xhr) xhr.setRequestHeader(name, value);
    };
    XHRWrapper.prototype.getAllResponseHeaders = function() {
        // XMLHttpRequest#getAllResponseHeaders returns null for CORS requests in Firefox 3.6.28
        return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() || "" : "";
    };
    XHRWrapper.prototype.send = function() {
        // loading indicator in Safari < ? (6), Chrome < 14, Firefox
        // https://bugzilla.mozilla.org/show_bug.cgi?id=736723
        if ((!("ontimeout" in XMLHttpRequest.prototype) || !("sendAsBinary" in XMLHttpRequest.prototype) && !("mozAnon" in XMLHttpRequest.prototype)) && document != undefined && document.readyState != undefined && document.readyState !== "complete") {
            var that = this;
            that._sendTimeout = setTimeout(function() {
                that._sendTimeout = 0;
                that.send();
            }, 4);
            return;
        }
        var xhr = this._xhr;
        // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)
        if ("withCredentials" in xhr) xhr.withCredentials = this.withCredentials;
        try {
            // xhr.send(); throws "Not enough arguments" in Firefox 3.0
            xhr.send(undefined);
        } catch (error1) {
            // Safari 5.1.7, Opera 12
            throw error1;
        }
    };
    function toLowerCase(name) {
        return name.replace(/[A-Z]/g, function(c) {
            return String.fromCharCode(c.charCodeAt(0) + 0x20);
        });
    }
    function HeadersPolyfill(all) {
        // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
        var map = Object.create(null);
        var array = all.split("\r\n");
        for(var i = 0; i < array.length; i += 1){
            var line = array[i];
            var parts = line.split(": ");
            var name = parts.shift();
            var value = parts.join(": ");
            map[toLowerCase(name)] = value;
        }
        this._map = map;
    }
    HeadersPolyfill.prototype.get = function(name) {
        return this._map[toLowerCase(name)];
    };
    if (XMLHttpRequest != null && XMLHttpRequest.HEADERS_RECEIVED == null) XMLHttpRequest.HEADERS_RECEIVED = 2;
    function XHRTransport() {}
    XHRTransport.prototype.open = function(xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
        xhr.open("GET", url);
        var offset = 0;
        xhr.onprogress = function() {
            var responseText = xhr.responseText;
            var chunk = responseText.slice(offset);
            offset += chunk.length;
            onProgressCallback(chunk);
        };
        xhr.onerror = function(event) {
            event.preventDefault();
            onFinishCallback(new Error("NetworkError"));
        };
        xhr.onload = function() {
            onFinishCallback(null);
        };
        xhr.onabort = function() {
            onFinishCallback(null);
        };
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
                var status = xhr.status;
                var statusText = xhr.statusText;
                var contentType = xhr.getResponseHeader("Content-Type");
                var headers = xhr.getAllResponseHeaders();
                onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers));
            }
        };
        xhr.withCredentials = withCredentials;
        for(var name in headers)if (Object.prototype.hasOwnProperty.call(headers, name)) xhr.setRequestHeader(name, headers[name]);
        xhr.send();
        return xhr;
    };
    function HeadersWrapper(headers) {
        this._headers = headers;
    }
    HeadersWrapper.prototype.get = function(name) {
        return this._headers.get(name);
    };
    function FetchTransport() {}
    FetchTransport.prototype.open = function(xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
        var reader = null;
        var controller = new AbortController();
        var signal = controller.signal;
        var textDecoder = new TextDecoder();
        fetch(url, {
            headers: headers,
            credentials: withCredentials ? "include" : "same-origin",
            signal: signal,
            cache: "no-store"
        }).then(function(response) {
            reader = response.body.getReader();
            onStartCallback(response.status, response.statusText, response.headers.get("Content-Type"), new HeadersWrapper(response.headers));
            // see https://github.com/promises-aplus/promises-spec/issues/179
            return new Promise(function(resolve, reject) {
                var readNextChunk = function() {
                    reader.read().then(function(result) {
                        if (result.done) //Note: bytes in textDecoder are ignored
                        resolve(undefined);
                        else {
                            var chunk = textDecoder.decode(result.value, {
                                stream: true
                            });
                            onProgressCallback(chunk);
                            readNextChunk();
                        }
                    })["catch"](function(error) {
                        reject(error);
                    });
                };
                readNextChunk();
            });
        })["catch"](function(error) {
            if (error.name === "AbortError") return undefined;
            else return error;
        }).then(function(error) {
            onFinishCallback(error);
        });
        return {
            abort: function() {
                if (reader != null) reader.cancel(); // https://bugzilla.mozilla.org/show_bug.cgi?id=1583815
                controller.abort();
            }
        };
    };
    function EventTarget() {
        this._listeners = Object.create(null);
    }
    function throwError(e) {
        setTimeout(function() {
            throw e;
        }, 0);
    }
    EventTarget.prototype.dispatchEvent = function(event) {
        event.target = this;
        var typeListeners = this._listeners[event.type];
        if (typeListeners != undefined) {
            var length = typeListeners.length;
            for(var i = 0; i < length; i += 1){
                var listener = typeListeners[i];
                try {
                    if (typeof listener.handleEvent === "function") listener.handleEvent(event);
                    else listener.call(this, event);
                } catch (e) {
                    throwError(e);
                }
            }
        }
    };
    EventTarget.prototype.addEventListener = function(type, listener) {
        type = String(type);
        var listeners = this._listeners;
        var typeListeners = listeners[type];
        if (typeListeners == undefined) {
            typeListeners = [];
            listeners[type] = typeListeners;
        }
        var found = false;
        for(var i = 0; i < typeListeners.length; i += 1)if (typeListeners[i] === listener) found = true;
        if (!found) typeListeners.push(listener);
    };
    EventTarget.prototype.removeEventListener = function(type, listener) {
        type = String(type);
        var listeners = this._listeners;
        var typeListeners = listeners[type];
        if (typeListeners != undefined) {
            var filtered = [];
            for(var i = 0; i < typeListeners.length; i += 1)if (typeListeners[i] !== listener) filtered.push(typeListeners[i]);
            if (filtered.length === 0) delete listeners[type];
            else listeners[type] = filtered;
        }
    };
    function Event(type) {
        this.type = type;
        this.target = undefined;
    }
    function MessageEvent(type, options) {
        Event.call(this, type);
        this.data = options.data;
        this.lastEventId = options.lastEventId;
    }
    MessageEvent.prototype = Object.create(Event.prototype);
    function ConnectionEvent(type, options) {
        Event.call(this, type);
        this.status = options.status;
        this.statusText = options.statusText;
        this.headers = options.headers;
    }
    ConnectionEvent.prototype = Object.create(Event.prototype);
    function ErrorEvent(type, options) {
        Event.call(this, type);
        this.error = options.error;
    }
    ErrorEvent.prototype = Object.create(Event.prototype);
    var WAITING = -1;
    var CONNECTING = 0;
    var OPEN = 1;
    var CLOSED = 2;
    var AFTER_CR = -1;
    var FIELD_START = 0;
    var FIELD = 1;
    var VALUE_START = 2;
    var VALUE = 3;
    var contentTypeRegExp = /^text\/event\-stream(;.*)?$/i;
    var MINIMUM_DURATION = 1000;
    var MAXIMUM_DURATION = 18000000;
    var parseDuration = function(value, def) {
        var n = value == null ? def : parseInt(value, 10);
        if (n !== n) n = def;
        return clampDuration(n);
    };
    var clampDuration = function(n) {
        return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
    };
    var fire = function(that, f, event) {
        try {
            if (typeof f === "function") f.call(that, event);
        } catch (e) {
            throwError(e);
        }
    };
    function EventSourcePolyfill(url, options) {
        EventTarget.call(this);
        options = options || {};
        this.onopen = undefined;
        this.onmessage = undefined;
        this.onerror = undefined;
        this.url = undefined;
        this.readyState = undefined;
        this.withCredentials = undefined;
        this.headers = undefined;
        this._close = undefined;
        start(this, url, options);
    }
    function getBestXHRTransport() {
        return XMLHttpRequest != undefined && "withCredentials" in XMLHttpRequest.prototype || XDomainRequest == undefined ? new XMLHttpRequest() : new XDomainRequest();
    }
    var isFetchSupported = fetch != undefined && Response != undefined && "body" in Response.prototype;
    function start(es, url, options) {
        url = String(url);
        var withCredentials = Boolean(options.withCredentials);
        var lastEventIdQueryParameterName = options.lastEventIdQueryParameterName || "lastEventId";
        var initialRetry = clampDuration(1000);
        var heartbeatTimeout = parseDuration(options.heartbeatTimeout, 45000);
        var lastEventId = "";
        var retry = initialRetry;
        var wasActivity = false;
        var textLength = 0;
        var headers = options.headers || {};
        var TransportOption = options.Transport;
        var xhr = isFetchSupported && TransportOption == undefined ? undefined : new XHRWrapper(TransportOption != undefined ? new TransportOption() : getBestXHRTransport());
        var transport = TransportOption != null && typeof TransportOption !== "string" ? new TransportOption() : xhr == undefined ? new FetchTransport() : new XHRTransport();
        var abortController = undefined;
        var timeout = 0;
        var currentState = WAITING;
        var dataBuffer = "";
        var lastEventIdBuffer = "";
        var eventTypeBuffer = "";
        var textBuffer = "";
        var state = FIELD_START;
        var fieldStart = 0;
        var valueStart = 0;
        var onStart = function(status, statusText, contentType, headers) {
            if (currentState === CONNECTING) {
                if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
                    currentState = OPEN;
                    wasActivity = Date.now();
                    retry = initialRetry;
                    es.readyState = OPEN;
                    var event = new ConnectionEvent("open", {
                        status: status,
                        statusText: statusText,
                        headers: headers
                    });
                    es.dispatchEvent(event);
                    fire(es, es.onopen, event);
                } else {
                    var message = "";
                    if (status !== 200) {
                        if (statusText) statusText = statusText.replace(/\s+/g, " ");
                        message = "EventSource's response has a status " + status + " " + statusText + " that is not 200. Aborting the connection.";
                    } else message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? "-" : contentType.replace(/\s+/g, " ")) + ". Aborting the connection.";
                    close();
                    var event = new ConnectionEvent("error", {
                        status: status,
                        statusText: statusText,
                        headers: headers
                    });
                    es.dispatchEvent(event);
                    fire(es, es.onerror, event);
                    console.error(message);
                }
            }
        };
        var onProgress = function(textChunk) {
            if (currentState === OPEN) {
                var n = -1;
                for(var i = 0; i < textChunk.length; i += 1){
                    var c = textChunk.charCodeAt(i);
                    if (c === "\n".charCodeAt(0) || c === "\r".charCodeAt(0)) n = i;
                }
                var chunk = (n !== -1 ? textBuffer : "") + textChunk.slice(0, n + 1);
                textBuffer = (n === -1 ? textBuffer : "") + textChunk.slice(n + 1);
                if (textChunk !== "") {
                    wasActivity = Date.now();
                    textLength += textChunk.length;
                }
                for(var position = 0; position < chunk.length; position += 1){
                    var c = chunk.charCodeAt(position);
                    if (state === AFTER_CR && c === "\n".charCodeAt(0)) state = FIELD_START;
                    else {
                        if (state === AFTER_CR) state = FIELD_START;
                        if (c === "\r".charCodeAt(0) || c === "\n".charCodeAt(0)) {
                            if (state !== FIELD_START) {
                                if (state === FIELD) valueStart = position + 1;
                                var field = chunk.slice(fieldStart, valueStart - 1);
                                var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === " ".charCodeAt(0) ? 1 : 0), position);
                                if (field === "data") {
                                    dataBuffer += "\n";
                                    dataBuffer += value;
                                } else if (field === "id") lastEventIdBuffer = value;
                                else if (field === "event") eventTypeBuffer = value;
                                else if (field === "retry") {
                                    initialRetry = parseDuration(value, initialRetry);
                                    retry = initialRetry;
                                } else if (field === "heartbeatTimeout") {
                                    heartbeatTimeout = parseDuration(value, heartbeatTimeout);
                                    if (timeout !== 0) {
                                        clearTimeout(timeout);
                                        timeout = setTimeout(function() {
                                            onTimeout();
                                        }, heartbeatTimeout);
                                    }
                                }
                            }
                            if (state === FIELD_START) {
                                if (dataBuffer !== "") {
                                    lastEventId = lastEventIdBuffer;
                                    if (eventTypeBuffer === "") eventTypeBuffer = "message";
                                    var event = new MessageEvent(eventTypeBuffer, {
                                        data: dataBuffer.slice(1),
                                        lastEventId: lastEventIdBuffer
                                    });
                                    es.dispatchEvent(event);
                                    if (eventTypeBuffer === "open") fire(es, es.onopen, event);
                                    else if (eventTypeBuffer === "message") fire(es, es.onmessage, event);
                                    else if (eventTypeBuffer === "error") fire(es, es.onerror, event);
                                    if (currentState === CLOSED) return;
                                }
                                dataBuffer = "";
                                eventTypeBuffer = "";
                            }
                            state = c === "\r".charCodeAt(0) ? AFTER_CR : FIELD_START;
                        } else {
                            if (state === FIELD_START) {
                                fieldStart = position;
                                state = FIELD;
                            }
                            if (state === FIELD) {
                                if (c === ":".charCodeAt(0)) {
                                    valueStart = position + 1;
                                    state = VALUE_START;
                                }
                            } else if (state === VALUE_START) state = VALUE;
                        }
                    }
                }
            }
        };
        var onFinish = function(error) {
            if (currentState === OPEN || currentState === CONNECTING) {
                currentState = WAITING;
                if (timeout !== 0) {
                    clearTimeout(timeout);
                    timeout = 0;
                }
                timeout = setTimeout(function() {
                    onTimeout();
                }, retry);
                retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
                es.readyState = CONNECTING;
                var event = new ErrorEvent("error", {
                    error: error
                });
                es.dispatchEvent(event);
                fire(es, es.onerror, event);
                if (error != undefined) console.error(error);
            }
        };
        var close = function() {
            currentState = CLOSED;
            if (abortController != undefined) {
                abortController.abort();
                abortController = undefined;
            }
            if (timeout !== 0) {
                clearTimeout(timeout);
                timeout = 0;
            }
            es.readyState = CLOSED;
        };
        var onTimeout = function() {
            timeout = 0;
            if (currentState !== WAITING) {
                if (!wasActivity && abortController != undefined) {
                    onFinish(new Error("No activity within " + heartbeatTimeout + " milliseconds." + " " + (currentState === CONNECTING ? "No response received." : textLength + " chars received.") + " " + "Reconnecting."));
                    if (abortController != undefined) {
                        abortController.abort();
                        abortController = undefined;
                    }
                } else {
                    var nextHeartbeat = Math.max((wasActivity || Date.now()) + heartbeatTimeout - Date.now(), 1);
                    wasActivity = false;
                    timeout = setTimeout(function() {
                        onTimeout();
                    }, nextHeartbeat);
                }
                return;
            }
            wasActivity = false;
            textLength = 0;
            timeout = setTimeout(function() {
                onTimeout();
            }, heartbeatTimeout);
            currentState = CONNECTING;
            dataBuffer = "";
            eventTypeBuffer = "";
            lastEventIdBuffer = lastEventId;
            textBuffer = "";
            fieldStart = 0;
            valueStart = 0;
            state = FIELD_START;
            // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
            // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.
            var requestURL = url;
            if (url.slice(0, 5) !== "data:" && url.slice(0, 5) !== "blob:") {
                if (lastEventId !== "") {
                    // Remove the lastEventId parameter if it's already part of the request URL.
                    var i = url.indexOf("?");
                    requestURL = i === -1 ? url : url.slice(0, i + 1) + url.slice(i + 1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g, function(p, paramName) {
                        return paramName === lastEventIdQueryParameterName ? "" : p;
                    });
                    // Append the current lastEventId to the request URL.
                    requestURL += (url.indexOf("?") === -1 ? "?" : "&") + lastEventIdQueryParameterName + "=" + encodeURIComponent(lastEventId);
                }
            }
            var withCredentials = es.withCredentials;
            var requestHeaders = {};
            requestHeaders["Accept"] = "text/event-stream";
            var headers = es.headers;
            if (headers != undefined) {
                for(var name in headers)if (Object.prototype.hasOwnProperty.call(headers, name)) requestHeaders[name] = headers[name];
            }
            try {
                abortController = transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
            } catch (error) {
                close();
                throw error;
            }
        };
        es.url = url;
        es.readyState = CONNECTING;
        es.withCredentials = withCredentials;
        es.headers = headers;
        es._close = close;
        onTimeout();
    }
    EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
    EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
    EventSourcePolyfill.prototype.OPEN = OPEN;
    EventSourcePolyfill.prototype.CLOSED = CLOSED;
    EventSourcePolyfill.prototype.close = function() {
        this._close();
    };
    EventSourcePolyfill.CONNECTING = CONNECTING;
    EventSourcePolyfill.OPEN = OPEN;
    EventSourcePolyfill.CLOSED = CLOSED;
    EventSourcePolyfill.prototype.withCredentials = undefined;
    var R = NativeEventSource;
    if (XMLHttpRequest != undefined && (NativeEventSource == undefined || !("withCredentials" in NativeEventSource.prototype))) // Why replace a native EventSource ?
    // https://bugzilla.mozilla.org/show_bug.cgi?id=444328
    // https://bugzilla.mozilla.org/show_bug.cgi?id=831392
    // https://code.google.com/p/chromium/issues/detail?id=260144
    // https://code.google.com/p/chromium/issues/detail?id=225654
    // ...
    R = EventSourcePolyfill;
    (function(factory) {
        if (typeof module.exports === "object") {
            var v = factory(exports);
            if (v !== undefined) module.exports = v;
        } else if (typeof define === "function" && define.amd) define([
            "exports"
        ], factory);
        else factory(global);
    })(function(exports1) {
        exports1.EventSourcePolyfill = EventSourcePolyfill;
        exports1.NativeEventSource = NativeEventSource;
        exports1.EventSource = R;
    });
})(typeof globalThis === "undefined" ? typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : this : globalThis);

},{}]},["bJrhW"], null, "parcelRequire1d06")

//# sourceMappingURL=browser.28f270cb.js.map
