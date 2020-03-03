window.process = {env: {NODE_ENV: 'production'}};
var cdn;
if (window.__appCDN) {
  cdn = window.__appCDN;
}
else {
  cdn = './';
}
var def = document.getElementsByTagName('script')[0];
try {
  // if a dynamic import fails, we bail over to the compiled version
  new Function('import("");');
  // remove fallback cause if we passed dynamic import then we are evergreen
  document.body.removeChild(document.getElementById("haxcmsoutdatedfallback"));    
  // insert polyfille for web animations
  if(!('animate' in document.body)) {
    var ani = document.createElement('script');
    ani.src = cdn + 'build/es6/node_modules/web-animations-js/web-animations-next-lite.min.js';
    def.parentNode.insertBefore(ani, def);
  }
  var build = document.createElement('script');
  build.src = cdn + 'build/es6/dist/build.js';
  build.type = 'module';
  def.parentNode.insertBefore(build, def);
  var build2 = document.createElement('script');
  build2.src = './custom/build/custom.es6.js';
  build2.type = 'module';
  def.parentNode.insertBefore(build2, def);
} catch (err) {
  var ancient=false;
  try {
    if (typeof Symbol == "undefined") { // IE 11, at least try to serve a watered down site
      ancient = true;
    }
    new Function('let a;'); // bizarre but needed for Safari 9 bc of when it was made
  }
  catch (err) {
    ancient = true;
  }
  if (!ancient) {
    "use strict"; (function () { function a(a, b, c) { var d = a; if (d.state = b, d.stateData = c, 0 < d.onNextStateChange.length) { var e = d.onNextStateChange.slice(); d.onNextStateChange.length = 0; for (var f, g = 0, h = e; g < h.length; g++)f = h[g], f() } return d } function b(b) { function d() { try { document.head.removeChild(f) } catch (a) { } } var e = a(b, "Loading", void 0), f = document.createElement("script"); return f.src = b.url, null !== b.crossorigin && f.setAttribute("crossorigin", b.crossorigin), f.onload = function () { var a, b, f; void 0 === r ? (b = [], f = void 0) : (a = r(), b = a[0], f = a[1]), c(e, b, f), d() }, f.onerror = function () { g(b, new TypeError("Failed to fetch " + b.url)), d() }, document.head.appendChild(f), e } function c(b, c, e) { var f = d(b, c), g = f[0], h = f[1]; return a(b, "WaitingForTurn", { args: g, deps: h, moduleBody: e }) } function d(a, c) { for (var e, f = [], g = [], i = 0, j = c; i < j.length; i++) { if (e = j[i], "exports" === e) { f.push(a.exports); continue } if ("require" === e) { f.push(function (b, c, e) { var f = d(a, b), g = f[0], i = f[1]; h(i, function () { c && c.apply(null, g) }, e) }); continue } if ("meta" === e) { f.push({ url: !0 === a.isTopLevel ? a.url.substring(0, a.url.lastIndexOf("#")) : a.url }); continue } var l = k(n(a.urlBase, e), a.crossorigin); f.push(l.exports), g.push(l), "Initialized" === l.state && b(l) } return [f, g] } function e(b) { var c = a(b, "WaitingOnDeps", b.stateData); return h(b.stateData.deps, function () { return f(c) }, function (a) { return g(c, a) }), c } function f(b) { var c = b.stateData; if (null != c.moduleBody) try { c.moduleBody.apply(null, c.args) } catch (a) { return g(b, a) } return a(b, "Executed", void 0) } function g(b, c) { return !0 === b.isTopLevel && setTimeout(function () { throw c }), a(b, "Failed", c) } function h(a, b, c) { var d = a.shift(); return void 0 === d ? void (b && b()) : "WaitingOnDeps" === d.state ? (!1, void h(a, b, c)) : void i(d, function () { h(a, b, c) }, c) } function i(a, b, c) { switch (a.state) { case "WaitingForTurn": return e(a), void i(a, b, c); case "Failed": return void (c && c(a.stateData)); case "Executed": return void b(); case "Loading": case "WaitingOnDeps": return void a.onNextStateChange.push(function () { return i(a, b, c) }); case "Initialized": throw new Error("All dependencies should be loading already before pressureDependencyToExecute is called."); default: throw new Error("Impossible module state: " + a.state); } } function j(a, b) { switch (a.state) { case "Executed": case "Failed": return void b(); default: a.onNextStateChange.push(function () { return j(a, b) }); } } function k(a, b) { void 0 === b && (b = "anonymous"); var c = q[a]; return void 0 === c && (c = q[a] = { url: a, urlBase: m(a), exports: Object.create(null), state: "Initialized", stateData: void 0, isTopLevel: !1, crossorigin: b, onNextStateChange: [] }), c } function l(a) { return v.href = a, v.href } function m(a) { return a = a.split("?")[0], a = a.split("#")[0], a.substring(0, a.lastIndexOf("/") + 1) } function n(a, b) { return -1 === b.indexOf("://") ? l("/" === b[0] ? b : a + b) : b } function o() { return document.baseURI || (document.querySelector("base") || window.location).href } function p() { var b = document.currentScript; if (!b) return u; if (window.HTMLImports) { var c = window.HTMLImports.importForElement(b); return c ? c.href : u } var d = b.ownerDocument.createElement("a"); return d.href = "", d.href } if (!window.define) { var q = Object.create(null), r = void 0, s = 0, t = void 0, u = o(); window.define = function (a, b) { var d = !1; r = function () { return d = !0, r = void 0, [a, b] }; var f = p(), g = document.currentScript && document.currentScript.getAttribute("crossorigin") || "anonymous"; setTimeout(function () { if (!1 == d) { r = void 0; var h = f + "#" + s++, i = k(h, g); i.isTopLevel = !0; var l = c(i, a, b); void 0 === t ? e(l) : j(k(t), function () { e(l) }), t = h } }, 0) }, window.define._reset = function () { for (var a in q) delete q[a]; r = void 0, s = 0, t = void 0, u = o() }; var v = document.createElement("a") } })();
    document.getElementById('haxcmsoutdatedfallbacksuperold').style.display = 'none';
    var defs;
    // FF 6x.x can be given ES6 compliant code safely
    if (/Firefox\/6/.test(navigator.userAgent) || window.customElements) {
      defs = [
        cdn + "build/es6-amd/node_modules/web-animations-js/web-animations-next-lite.min.js",
        cdn + "assets/babel-top.js",
        cdn + "build/es6-amd/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js",
        cdn + "build/es6-amd/dist/build.js",
        "./custom/build/custom.es6-amd.js"
      ];
    }
    else {
      defs = [
        cdn + "build/es5-amd/node_modules/web-animations-js/web-animations-next-lite.min.js",
        cdn + "assets/babel-top.js",
        cdn + "build/es5-amd/node_modules/fetch-ie8/fetch.js",
        cdn + "build/es6/node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js",
        cdn + "build/es5-amd/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js",
      ];
      if (document.documentMode || /Edge/.test(navigator.userAgent)) { // stupid edge
        defs.push(cdn + "build/es5-amd/dist/build-legacy.js");
      }
      else {
        defs.push(cdn + "build/es5-amd/dist/build.js");
      }
    }
    define(defs, function () { "use strict" });
  }
  else {
    if (window.__appForceUpgrade) {
      window.location = "upgrade-browser.html";
    }
    // we bombed somewhere above, this implies that it's some odd between version
    // most likely Safari 9ish, IE pre 11 and anything uber old. Serve no JS variation
    document.getElementById('site').style.display = 'none';
    document.getElementById('haxcmsoutdatedfallbacksuperold').style.display = 'block';
    var path = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    if (path) {
      document.getElementById('content').src = 'pages/' + path + '/index.html';
    }
  }
}
// css files load faster when implemented this way
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = cdn + 'build/es6/node_modules/@lrnwebcomponents/haxcms-elements/lib/base.css';
link.type = 'text/css';
def.parentNode.insertBefore(link, def);
var link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.href = './theme/theme.css';
link2.type = 'text/css';
def.parentNode.insertBefore(link2, def);