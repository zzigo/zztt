import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_exFWZteE.mjs';
import { manifest } from './manifest_BhtwN9Z3.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/ascii.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page5 = () => import('./pages/calendar.astro.mjs');
const _page6 = () => import('./pages/events.astro.mjs');
const _page7 = () => import('./pages/events/_---slug_.astro.mjs');
const _page8 = () => import('./pages/list-of-works.astro.mjs');
const _page9 = () => import('./pages/listen.astro.mjs');
const _page10 = () => import('./pages/research.astro.mjs');
const _page11 = () => import('./pages/research/_---slug_.astro.mjs');
const _page12 = () => import('./pages/rss.xml.astro.mjs');
const _page13 = () => import('./pages/works.astro.mjs');
const _page14 = () => import('./pages/works/_---slug_.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/ascii.astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/calendar.astro", _page5],
    ["src/pages/events/index.astro", _page6],
    ["src/pages/events/[...slug].astro", _page7],
    ["src/pages/list-of-works.astro", _page8],
    ["src/pages/listen.astro", _page9],
    ["src/pages/research/index.astro", _page10],
    ["src/pages/research/[...slug].astro", _page11],
    ["src/pages/rss.xml.js", _page12],
    ["src/pages/works/index.astro", _page13],
    ["src/pages/works/[...slug].astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8b4c4bdc-0add-4aad-af62-abf40e67e347",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
