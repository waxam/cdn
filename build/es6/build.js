window.process={env:{NODE_ENV:"production"}};var e="./";window.WCGlobalCDNPath&&(e=window.WCGlobalCDNPath),window.__appCDN&&(e=window.__appCDN);var t="wc-registry.json";window.WCGlobalRegistryFileName&&(t=window.WCGlobalRegistryFileName),window.WCAutoloadRegistryFile=e+t;try{var o=document.getElementsByTagName("script")[0];if(new Function("import('');"),!Element.prototype.animate){var n=document.createElement("script");n.src=e+"build/es6/node_modules/web-animations-js/web-animations-next-lite.min.js",o.parentNode.insertBefore(n,o)}var a=document.createElement("script");a.src=e+"build/es6/node_modules/@lrnwebcomponents/wc-autoload/wc-autoload.js",a.type="module",o.parentNode.insertBefore(a,o)}catch(t){var i=document.createElement("script");i.src=e+"assets/build-legacy.js",o.parentNode.insertBefore(i,o)}