/** @type {import('astro-i18next').AstroI18nextConfig} */

export default {
    defaultLocale: "es",
    locales: ["es", "en"],
    i18nextServer: {
      debug: true,
      cache: false
    }
  };