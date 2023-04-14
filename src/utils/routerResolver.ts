import i18next from "i18next";

export const routerResolver = (to: string): string => {
  const lang = i18next.language;
  return lang === "es" ? `/${to}` : `/${lang}/${to}`;
};
