if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-5f5b08d6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Wy_Uy8Dzl14IWb-okzQZe/_buildManifest.js",revision:"235a7f4603777c81ccbeae4329054b0c"},{url:"/_next/static/Wy_Uy8Dzl14IWb-okzQZe/_middlewareManifest.js",revision:"468e9a0ecca0c65bcb0ee673b762445d"},{url:"/_next/static/Wy_Uy8Dzl14IWb-okzQZe/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/chunks/0c428ae2-fba91171518a9d21.js",revision:"fba91171518a9d21"},{url:"/_next/static/chunks/261-1610da467da173ed.js",revision:"1610da467da173ed"},{url:"/_next/static/chunks/886-46700f7d3a8db2f2.js",revision:"46700f7d3a8db2f2"},{url:"/_next/static/chunks/987-0a050c9ec961cde8.js",revision:"0a050c9ec961cde8"},{url:"/_next/static/chunks/d7eeaac4-8685a4eb4cecce68.js",revision:"8685a4eb4cecce68"},{url:"/_next/static/chunks/framework-3581bb99e4b98af8.js",revision:"3581bb99e4b98af8"},{url:"/_next/static/chunks/main-5ee444dc49d9d3af.js",revision:"5ee444dc49d9d3af"},{url:"/_next/static/chunks/pages/_app-a052f3d4fb1fdd2d.js",revision:"a052f3d4fb1fdd2d"},{url:"/_next/static/chunks/pages/_error-6e6353f79838677c.js",revision:"6e6353f79838677c"},{url:"/_next/static/chunks/pages/busca-6d64b7aad9f60f69.js",revision:"6d64b7aad9f60f69"},{url:"/_next/static/chunks/pages/index-92f0e6c49091326d.js",revision:"92f0e6c49091326d"},{url:"/_next/static/chunks/pages/livro-4f960cc566885b48.js",revision:"4f960cc566885b48"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-3373b0f21806983f.js",revision:"3373b0f21806983f"},{url:"/_next/static/css/19540d6b31ad491c.css",revision:"19540d6b31ad491c"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/img/baixo.png",revision:"60f6dbdd03b141a442058edf5412f754"},{url:"/img/github.png",revision:"b37b05a713d8eebcbb475119e587859b"},{url:"/img/left-arrow.png",revision:"1a052aa2330e5a5aae28b91f8c7ee947"},{url:"/img/left-arrow2.png",revision:"6235f870b2d2aa6be7fec856798b335e"},{url:"/img/loading.gif",revision:"32146f139deb5b5a5bd6403c5537ccbd"},{url:"/img/logo.png",revision:"d7619f1ecb31a82ece7f31fe0705dd30"},{url:"/img/lupa.png",revision:"ab417fd2a710fa024c5b4e3362c9805a"},{url:"/img/top.png",revision:"4da604ee241d7eaa259da39487e5d6e7"},{url:"/manifest.json",revision:"fd49d20fd4a688c9135158f0472b456e"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
