type NavigationItem = {
  [key: string]: {
    label: string;
    to: string;
    inHeader: boolean;
    inFooter: boolean;
  }[];
};

export const navigationItems: NavigationItem = {
  es: [
    {
      label: "Servicios",
      to: "/services",
      inHeader: true,
      inFooter: false,
    },
    {
      label: "Contacto",
      to: "/contact",
      inHeader: true,
      inFooter: false,
    },
    {
      label: "Política de Cookies",
      to: "/cookies-policy",
      inHeader: false,
      inFooter: true,
    },
    {
      label: "Aviso legal",
      to: "/legal-notice",
      inHeader: false,
      inFooter: true,
    },
  ],
  en: [
    { label: "Services", to: "/services", inHeader: true, inFooter: false },
    {
      label: "Contact",
      to: "/en/contact",
      inHeader: true,
      inFooter: false,
    },
    {
      label: "Cookies policy",
      to: "/cookies-policy",
      inHeader: false,
      inFooter: true,
    },
    {
      label: "Legal notice",
      to: "/en/legal-notice",
      inHeader: false,
      inFooter: true,
    },
  ],
};
