import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: "https://www.kokualabs.com",
  integrations: [
    astroI18next(),
    compress(),
    sitemap(),
    compressor({ gzip: true }),
  ],
});
