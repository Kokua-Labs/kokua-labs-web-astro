/** @type {import('astro-i18next').AstroI18nextConfig} */

export default {
  defaultLocale: "es",
  locales: ["es", "en"],
  namespaces: ["home", "legal", "common", "cookies", "contact", "services"],
  i18nextServer: {
    returnObjects: true,
    debug: true,
    cache: false,
  },
};
