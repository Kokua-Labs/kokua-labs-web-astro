type NavigationItem = {
  [key: string]: {
    label: string;
    to: string;
  }[];
};

export const navigationItems: NavigationItem = {
  es: [
    {
      label: "Política de Cookies",
      to: "/cookies-policy",
    },
    {
      label: "Aviso legal",
      to: "/legal-notice",
    },
  ],
  en: [
    {
      label: "Cookies policy",
      to: "/cookies-policy",
    },
    {
      label: "Legal notice",
      to: "/en/legal-notice",
    },
  ],
};
