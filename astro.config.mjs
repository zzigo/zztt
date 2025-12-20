import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import remarkQuoteCallout from "./remark-quote-callout.mjs";
import { remarkObsidianPdf } from "./remark-obsidian-pdf.mjs";

export default defineConfig({
  output: "static",
  site: "https://a.zztt.org",
  base: "/",

  integrations: [
    mdx({
      remarkPlugins: [
        remarkQuoteCallout,
        remarkObsidianPdf, // applies to .mdx
      ],
    }),
    sitemap(),
    react(),
  ],

  markdown: {
    remarkPlugins: [
      remarkQuoteCallout,
      remarkObsidianPdf, // applies to .md
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