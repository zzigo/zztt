import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import fs from "fs";

import remarkQuoteCallout from "./remark-quote-callout.mjs";
import remarkWikilinks from "./remark-wikilinks.mjs";

export default defineConfig({
  // ✅ STATIC OUTPUT — no server, no functions
  output: "static",

  // ✅ Required for sitemap + canonical URLs
  site: "https://zztt.org",
  base: "/",

  // ✅ Redirects (static-safe)
  // redirects: JSON.parse(
  //   fs.readFileSync("./src/redirects.json", "utf-8")
  // ),

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

  // ✅ Client-side only Vite config
  vite: {
    resolve: {
      dedupe: ["three"],
    },
    optimizeDeps: {
      include: ["three", "tone"],
    },
  },
});