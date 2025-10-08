import type { HeroConfig } from '../types/hero.types';

export const DEFAULT_HERO_CONFIG: HeroConfig = {
  badge: {
    text: 'CIBERSEGURIDAD',
  },
  title: {
    line1: 'Protege tu empresa',
    line2: 'con expertos en ciberseguridad',
    accent: 'ciberseguridad',
  },
  description: 'Servicios profesionales de ciberseguridad para empresas. Evaluación de vulnerabilidades, pentesting y consultoría en seguridad informática. Tu empresa merece la mejor protección.',
  buttons: [
    {
      id: 'contact',
      text: 'CONTACTAR',
      variant: 'primary',
    },
    {
      id: 'services',
      text: 'VER SERVICIOS',
      variant: 'secondary',
    },
  ],
  stats: [
    {
      id: 'experience',
      number: '5+',
      label: 'Años de experiencia',
    },
    {
      id: 'certifications',
      number: '3+',
      label: 'Certificaciones',
    },
    {
      id: 'availability',
      number: '24/7',
      label: 'Disponibilidad',
    },
  ],
  visualElements: [
    {
      id: 'grid',
      type: 'grid',
      position: 'center',
      animation: 'pulse',
    },
    {
      id: 'cube',
      type: 'cube',
      position: 'top-right',
      animation: 'rotate',
      delay: 0,
    },
    {
      id: 'dataflow',
      type: 'dataflow',
      position: 'center',
      animation: 'slide',
      delay: 2,
    },
  ],
  scrollIndicator: {
    text: 'Scroll para descubrir',
    enabled: true,
  },
  background: {
    pattern: 'grid',
    opacity: 0.4,
  },
};

export const mergeHeroConfig = (
  defaultConfig: HeroConfig,
  userConfig?: Partial<HeroConfig>
): HeroConfig => {
  if (!userConfig) return defaultConfig;

  return {
    ...defaultConfig,
    ...userConfig,
    badge: { ...defaultConfig.badge, ...userConfig.badge },
    title: { ...defaultConfig.title, ...userConfig.title },
    buttons: userConfig.buttons || defaultConfig.buttons,
    stats: userConfig.stats || defaultConfig.stats,
    visualElements: userConfig.visualElements || defaultConfig.visualElements,
    scrollIndicator: { ...defaultConfig.scrollIndicator, ...userConfig.scrollIndicator },
    background: { ...defaultConfig.background, ...userConfig.background },
  };
};