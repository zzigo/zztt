import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import remarkQuoteCallout from "./remark-quote-callout.mjs";
import remarkWikilinks from "./remark-wikilinks.mjs";

export default defineConfig({
  output: "static",
  site: "https://a.zztt.org",
  base: "/",

  integrations: [
    mdx({
      remarkPlugins: [
        remarkQuoteCallout,
        remarkWikilinks,
      ],
    }),
    sitemap({
      // Customize sitemap here if needed:
      // filter: (page) => !page.includes('/private/'), // Exclude certain pages
      // changefreq: 'weekly',
      // priority: 0.7,
      // lastmod: new Date(),
    }),
    react(),
  ],

  markdown: {
    remarkPlugins: [
      remarkWikilinks,
    // remarkQuoteCallout,
    // remarmermaid, 
    ],
  },

  vite: {
    ssr: {
      noExternal: [
        "three",
        "tone",
        "@tweenjs/tween.js",
        "react-pdf",
        "pdfjs-dist",
      ],
    },
    resolve: {
      dedupe: ["three"],
    },
    optimizeDeps: {
      include: ["three", "tone"],
    },
  },
});
