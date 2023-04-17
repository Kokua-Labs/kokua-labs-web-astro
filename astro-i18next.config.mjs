/** @type {import('astro-i18next').AstroI18nextConfig} */

export default {
  defaultLocale: "es",
  locales: ["es", "en"],
  namespaces: ["home", "legal", "cookies", "contact", "services"],
  i18nextServer: {
    returnObjects: true,
    debug: false,
    cache: false,
  },
};
