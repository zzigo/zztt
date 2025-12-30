import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import node from "@astrojs/node";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import fs from "fs";

import remarkQuoteCallout from "./remark-quote-callout.mjs";
import remarkWikilinks from "./remark-wikilinks.mjs";

export default defineConfig({
  // Hybrid is now implicit
  output: "server",

  adapter: node({
    mode: "standalone",
  }),

  site: "https://zztt.org",
  base: "/",

  redirects: JSON.parse(fs.readFileSync("./src/redirects.json", "utf-8")),

  integrations: [
    mdx({
      remarkPlugins: [
        remarkMath,
        remarkQuoteCallout,
        remarkWikilinks,
      ],
      rehypePlugins: [
        rehypeKatex,
      ],
    }),
    sitemap(),
    react(),
  ],

  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkWikilinks,
      remarkQuoteCallout,
    ],
    rehypePlugins: [
      rehypeKatex,
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