export interface HeroStat {
  id: string;
  number: string;
  label: string;
  suffix?: string;
  onClick?: () => void;
}

export interface HeroButton {
  id: string;
  text: string;
  variant: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  external?: boolean;
  disabled?: boolean;
}

export interface HeroVisualElement {
  id: string;
  type: 'cube' | 'dataflow' | 'particles' | 'grid';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  animation?: 'float' | 'pulse' | 'rotate' | 'glow' | 'slide';
  delay?: number;
}

export interface HeroConfig {
  badge: {
    text: string;
    variant?: 'default' | 'minimal' | 'cyber';
  };
  title: {
    line1: string;
    line2: string;
    accent: string;
    variant?: 'default' | 'minimal' | 'cyber';
  };
  description: string;
  buttons: HeroButton[];
  stats: HeroStat[];
  visualElements: HeroVisualElement[];
  scrollIndicator: {
    text: string;
    enabled: boolean;
  };
  background: {
    variant?: 'default' | 'minimal' | 'cyber';
    pattern?: 'grid' | 'dots' | 'lines' | 'none';
    opacity?: number;
  };
}

export interface HeroProps {
  config?: Partial<HeroConfig>;
  className?: string;
  variant?: 'default' | 'minimal' | 'cyber' | 'corporate';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onButtonClick?: (button: HeroButton) => void;
  onStatClick?: (stat: HeroStat) => void;
  onScrollClick?: () => void;
  enableAnimations?: boolean;
  enableIntersection?: boolean;
}