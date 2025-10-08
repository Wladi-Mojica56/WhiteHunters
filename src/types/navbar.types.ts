export interface NavLink {
  id: string;
  href: string;
  label: string;
  external?: boolean;
  target?: '_blank' | '_self';
  rel?: string;
}

export interface WhatsAppConfig {
  url: string;
  message: string;
  label: string;
}

export interface LogoConfig {
  src: string;
  alt: string;
  onClick?: () => void;
}

export interface NavbarConfig {
  links: NavLink[];
  whatsapp: WhatsAppConfig;
  logo: LogoConfig;
  brandName: {
    primary: string;
    secondary: string;
    primaryColor: string;
    secondaryColor: string;
  };
}

export interface NavbarProps {
  config?: Partial<NavbarConfig>;
  className?: string;
  onLogoClick?: () => void;
  onLinkClick?: (link: NavLink) => void;
  onWhatsAppClick?: () => void;
  isSticky?: boolean;
  variant?: 'default' | 'transparent' | 'solid';
  size?: 'sm' | 'md' | 'lg';
}
