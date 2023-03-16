import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
    site: 'http://www.kokualabs.com',
    base: '/',
    integrations: [astroI18next()],
});
