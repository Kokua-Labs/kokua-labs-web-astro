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
      to: "services",
      inHeader: true,
      inFooter: true,
    },
    {
      label: "Contacto",
      to: "contact",
      inHeader: true,
      inFooter: true,
    },
    {
      label: "Política de Cookies",
      to: "cookies-policy",
      inHeader: false,
      inFooter: true,
    },
    {
      label: "Aviso legal",
      to: "legal-notice",
      inHeader: false,
      inFooter: true,
    },
  ],
  en: [
    { label: "Services", to: "services", inHeader: true, inFooter: true },
    {
      label: "Contact",
      to: "contact",
      inHeader: true,
      inFooter: true,
    },
    {
      label: "Cookies policy",
      to: "cookies-policy",
      inHeader: false,
      inFooter: true,
    },
    {
      label: "Legal notice",
      to: "legal-notice",
      inHeader: false,
      inFooter: true,
    },
  ],
};
