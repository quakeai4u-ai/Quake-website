// ============================================
// Astro Configuration
// ============================================
// This file tells Astro how to build your site.
// You'll rarely need to change this.
// ============================================

import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // TODO: Replace with your actual domain before launch
  // This is used to generate correct URLs in the sitemap
  site: "https://www.quakeai.store",

  // Plugins that add features to your site
  integrations: [
    sitemap(), // Generates sitemap.xml for search engines
  ],
});
