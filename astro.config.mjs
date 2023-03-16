import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
    site: 'https://www.kokualabs.com',
    integrations: [astroI18next()],
});
