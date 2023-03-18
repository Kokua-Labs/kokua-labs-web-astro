type NavigationItem = {
  [key: string]: {
    label: string;
    to: string;
  }[];
};

export const navigationItems: NavigationItem = {
  es: [
    {
      label: "Contacto",
      to: "/contact",
    },
    {
      label: "Contacto",
      to: "/contact",
    },
  ],
  en: [
    {
      label: "Contact",
      to: "/en/contact",
    },
  ],
};
