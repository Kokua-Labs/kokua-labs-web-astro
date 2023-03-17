/** @type {import('astro-i18next').AstroI18nextConfig} */

export default {
  defaultLocale: "es",
  locales: ["es", "en"],
  namespaces: ["home", "common", "parking"],
  defaultNamespace: "common",
  i18nextServer: {
    debug: true,
    cache: false,
  },
};
