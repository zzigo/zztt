import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  output: "static",
  site: "https://a.zztt.org",
  base: "/",
  integrations: [mdx(), sitemap(), react()], // Ensure plugins are invoked properly
  vite: {
    ssr: {
      noExternal: ["three", "tone", "@tweenjs/tween.js"],
    },
    resolve: {
      dedupe: ["three"],
    },
    optimizeDeps: {
      include: ["three", "tone"],
    },
  },
});
