if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const o=e=>i(e,t),d={module:{uri:t},exports:n,require:o};s[t]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(c(...e),n)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/style.css",revision:"c2c7ab8f97d1f71ddec02ee3a53e7cdd"},{url:"assets/js/index.js",revision:"611433fc24dc413a4f5271cea2aecb42"},{url:"holder.min.js",revision:"5fbecbf6d588493f307103cc527e0af4"},{url:"index.html",revision:"1bdf0afe10b76cfad88e90ec9697cb91"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
