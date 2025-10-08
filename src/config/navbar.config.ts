import type { NavbarConfig } from '../types/navbar.types';
import logo from '../assets/LogoWhite.svg';

export const DEFAULT_NAVBAR_CONFIG: NavbarConfig = {
  links: [
    {
      id: 'inicio',
      href: '#top',
      label: 'Inicio',
      external: false,
    },
    {
      id: 'servicios',
      href: '#servicios',
      label: 'Servicios',
      external: false,
    },
    {
      id: 'nosotros',
      href: '#nosotros',
      label: 'Nosotros',
      external: false,
    },
    {
      id: 'contacto',
      href: '#contacto',
      label: 'Contacto',
      external: false,
    },
  ],
  whatsapp: {
    url: 'https://wa.me/1234567890',
    message: 'Hola%20WhiteHunters,%20me%20interesa%20conocer%20sus%20servicios%20de%20seguridad',
    label: 'WhatsApp',
  },
  logo: {
    src: logo,
    alt: 'WhiteHunters Logo',
  },
  brandName: {
    primary: 'White',
    secondary: 'Hunters',
    primaryColor: 'white', 
    secondaryColor: 'blue',
  },
};

export const mergeNavbarConfig = (
  defaultConfig: NavbarConfig,
  userConfig?: Partial<NavbarConfig>
): NavbarConfig => {
  if (!userConfig) return defaultConfig;

  return {
    ...defaultConfig,
    ...userConfig,
    links: userConfig.links || defaultConfig.links,
    whatsapp: { ...defaultConfig.whatsapp, ...userConfig.whatsapp },
    logo: { ...defaultConfig.logo, ...userConfig.logo },
    brandName: { ...defaultConfig.brandName, ...userConfig.brandName },
  };
};