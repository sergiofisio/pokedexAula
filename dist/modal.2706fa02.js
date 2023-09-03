// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"functions/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTypeStyles = exports.createHTMLElement = void 0;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var createHTMLElement = function createHTMLElement(tag) {
  var _element$classList;
  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var element = document.createElement(tag);
  (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classes));
  return element;
};
exports.createHTMLElement = createHTMLElement;
var getTypeStyles = function getTypeStyles(type) {
  switch (type) {
    case "grass":
      return "green-500";
    case "fire":
      return "orange-500";
    case "water":
      return "blue-500";
    case "bug":
    case "poison":
      return "purple-500";
    case "electric":
      return "yellow-500";
    case "fairy":
      return "pink-500";
    case "psychic":
      return "indigo-500";
    case "dragon":
      return "red-500";
    default:
      return "gray-500";
  }
};
exports.getTypeStyles = getTypeStyles;
},{}],"assets/modal/pokeball.svg":[function(require,module,exports) {
module.exports = "/pokeball.6af132cb.svg";
},{}],"assets/modal/straighten.svg":[function(require,module,exports) {
module.exports = "/straighten.043e09f5.svg";
},{}],"assets/modal/weight.svg":[function(require,module,exports) {
module.exports = "/weight.f7a6f48e.svg";
},{}],"service/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openModal = void 0;
var _functions = require("../functions/functions");
var _pokeball = _interopRequireDefault(require("../assets/modal/pokeball.svg"));
var _straighten = _interopRequireDefault(require("../assets/modal/straighten.svg"));
var _weight = _interopRequireDefault(require("../assets/modal/weight.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var openModal = function openModal(pokemon) {
  var main = document.querySelector("main");
  console.log(pokemon);
  var div = (0, _functions.createHTMLElement)("div", ["flex", "flex-col", "justify-center", "items-center", "w-full", "h-full", "bg-gray-200", "bg-opacity-80", "fixed", "top-0", "right-0"]);
  var divModal = (0, _functions.createHTMLElement)("div", ["w-3/5", "h-4/5", "flex", "flex-col", "justify-between", "items-center", "border-2", "border-solid", "rounded-lg", "border-".concat((0, _functions.getTypeStyles)(pokemon.types[0].type.name)), "shadow-".concat((0, _functions.getTypeStyles)(pokemon.types[0].type.name)), "shadow-xl", "gap-2", "py-2", "shadow-2xl", "bg-".concat((0, _functions.getTypeStyles)(pokemon.types[0].type.name)), "relative", "bg-[url(" + _pokeball.default + ")]", "bg-opacity-70"]);
  var closeButton = (0, _functions.createHTMLElement)("h2", ["absolute", "top-2", "right-4", "text-red-600", "text-2xl", "cursor-pointer"]);
  closeButton.textContent = "X";
  closeButton.addEventListener("click", function () {
    div.remove();
  });
  var name = (0, _functions.createHTMLElement)("h1", ["font-bold", "text-2xl", "text-center", "uppercase", "text-white", "z-10", "text-center"]);
  name.textContent = pokemon.name;
  var img = (0, _functions.createHTMLElement)("img", ["drop-shadow-md", "h-1/3", "absolute", "-top-2"]);
  img.src = pokemon.sprites.other.home.front_default;
  img.alt = pokemon.name;
  var divAtributes = (0, _functions.createHTMLElement)("div", ["flex", "justify-around", "items-center", "gap-2", "w-1/2"]);
  var divHeight = (0, _functions.createHTMLElement)("div", ["flex", "flex-col", "justify-center", "items-center", "gap-2", "border-x-2", "border-solid", "border-gray-400", "w-full"]);
  var divInfoHeight = (0, _functions.createHTMLElement)("div", ["flex", "justify-center", "w-full"]);
  var imgHeight = (0, _functions.createHTMLElement)("img", []);
  imgHeight.src = _straighten.default;
  var height = (0, _functions.createHTMLElement)("h2");
  height.textContent = "".concat(pokemon.height, " cm");
  var h2Height = (0, _functions.createHTMLElement)("h2", ["font-bold", "text-[0.5rem]", "text-center"]);
  h2Height.textContent = "Height";
  var divWeight = (0, _functions.createHTMLElement)("div", ["flex", "flex-col", "justify-center", "items-center", "gap-2", "w-full"]);
  var divInfoWeight = (0, _functions.createHTMLElement)("div", ["flex", "justify-center", "w-full"]);
  var imgWeight = (0, _functions.createHTMLElement)("img", []);
  imgWeight.src = _weight.default;
  var weigth = (0, _functions.createHTMLElement)("h2", []);
  weigth.textContent = "".concat(pokemon.weight, " gr");
  var h2Weight = (0, _functions.createHTMLElement)("h2", ["font-bold", "text-[0.5rem]", "text-center"]);
  h2Weight.textContent = "Weight";
  var divTypes = (0, _functions.createHTMLElement)("div", ["flex", "justify-center", "items-center", "gap-2"]);
  var types = pokemon.types.map(function (type) {
    return type.type.name;
  });
  var type = types.map(function (type) {
    var divType = (0, _functions.createHTMLElement)("div", ["shadow-2xl", "border-".concat((0, _functions.getTypeStyles)(type)), "shadow-".concat((0, _functions.getTypeStyles)(type))]);
    var h2 = (0, _functions.createHTMLElement)("h2", ["w-20", "font-bold", "text-center", "uppercase", "text-white", "rounded-lg", "bg-".concat((0, _functions.getTypeStyles)(type))]);
    div.classList.add("border-".concat((0, _functions.getTypeStyles)(type)), "shadow-".concat((0, _functions.getTypeStyles)(type)));
    h2.textContent = type;
    divType.append(h2);
    return divType;
  });
  divTypes.append.apply(divTypes, _toConsumableArray(type));
  main.append(div);
  div.append(divModal);
  divModal.append(closeButton, name, img);
  var divInfo = (0, _functions.createHTMLElement)("div", ["flex", "flex-col", "gap-2", "items-center", "justify-center", "w-4/5", "bg-white", "h-3/4", "border-2", "border-solid", "shadow-2xl", "shadow-white", "rounded-lg"]);
  var abilities = (0, _functions.createHTMLElement)("div", ["w-full"]);
  var allAbilities = pokemon.abilities.map(function (ability) {
    var divAbility = (0, _functions.createHTMLElement)("div", ["gap-2", "py-2"]);
    var h2 = (0, _functions.createHTMLElement)("h2", ["w-20", "font-bold", "text-[0.625rem]", "text-center", "uppercase", "text-black", "rounded-lg"]);
    console.log(ability.ability.name);
    h2.textContent = ability.ability.name;
    divAbility.append(h2);
    return divAbility;
  });
  var titleStats = (0, _functions.createHTMLElement)("h2", ["font-bold", "text-2xl", "text-center", "text-[#B8B8B8]"]);
  titleStats.textContent = "Base Stats";
  var divStats = (0, _functions.createHTMLElement)("div", ["flex", "flex-col", "gap-2"]);
  var stats = pokemon.stats.map(function (stat) {
    console.log(stat);
    var divStat = (0, _functions.createHTMLElement)("div", ["flex", "justify-center", "items-center", "gap-2"]);
    var h2 = (0, _functions.createHTMLElement)("h2", ["w-20", "font-bold", "text-[0.625rem]", "text-center", "uppercase", "text-black", "rounded-lg"]);
    var statValue = (0, _functions.createHTMLElement)("h2", ["w-20", "font-bold", "text-[0.625rem]", "text-center", "uppercase", "text-black", "rounded-lg"]);
    statValue.textContent = stat.base_stat;
    h2.textContent = stat.stat.name;
    divStat.append(h2, statValue);
    return divStat;
  });
  divModal.append(divInfo);
  divInfo.append(divTypes, divAtributes, titleStats, divStats);
  divAtributes.append(divWeight, divHeight, abilities);
  divWeight.append(divInfoWeight, h2Weight);
  divInfoWeight.append(imgWeight, weigth);
  divHeight.append(divInfoHeight, h2Height);
  divInfoHeight.append(imgHeight, height);
  abilities.append.apply(abilities, _toConsumableArray(allAbilities));
  divStats.append.apply(divStats, _toConsumableArray(stats));
};
exports.openModal = openModal;
},{"../functions/functions":"functions/functions.js","../assets/modal/pokeball.svg":"assets/modal/pokeball.svg","../assets/modal/straighten.svg":"assets/modal/straighten.svg","../assets/modal/weight.svg":"assets/modal/weight.svg"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50596" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","service/modal.js"], null)
//# sourceMappingURL=/modal.2706fa02.js.map