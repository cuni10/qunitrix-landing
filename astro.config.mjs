import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.qunitrix.com",
  integrations: [sitemap()],
  output: "static",
  server: {
    host: true,
    port: 4321,
  },
});
