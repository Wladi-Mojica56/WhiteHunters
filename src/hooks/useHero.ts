import { useState, useEffect, useRef, useCallback } from 'react';
import { HeroButton, HeroStat } from '../types/hero.types';

export interface UseHeroReturn {
  isVisible: boolean;
  isInView: boolean;
  activeElement: string | null;
  handleButtonClick: (button: HeroButton) => void;
  handleStatClick: (stat: HeroStat) => void;
  handleScrollClick: () => void;
  heroRef: React.RefObject<HTMLElement>;
  shouldAnimate: boolean;
}

export const useHero = (
  enableAnimations = true,
  enableIntersection = true,
  onButtonClick?: (button: HeroButton) => void,
  onStatClick?: (stat: HeroStat) => void,
  onScrollClick?: () => void
): UseHeroReturn => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Animation visibility
  useEffect(() => {
    if (enableAnimations) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [enableAnimations]);

  // Intersection Observer for performance
  useEffect(() => {
    if (!enableIntersection || !heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveElement('hero');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, [enableIntersection]);

  // Performance optimization: Reduce animations on low-end devices
  const shouldAnimate = useCallback(() => {
    if (!enableAnimations) return false;
    
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    
    // Check device capabilities (basic heuristic)
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    return !isLowEndDevice;
  }, [enableAnimations]);

  const handleButtonClick = useCallback(
    (button: HeroButton) => {
      if (button.disabled) return;
      
      // Analytics tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'hero_button_click', {
          button_id: button.id,
          button_text: button.text,
        });
      }
      
      onButtonClick?.(button);
    },
    [onButtonClick]
  );

  const handleStatClick = useCallback(
    (stat: HeroStat) => {
      // Analytics tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'hero_stat_click', {
          stat_id: stat.id,
          stat_label: stat.label,
        });
      }
      
      onStatClick?.(stat);
    },
    [onStatClick]
  );

  const handleScrollClick = useCallback(() => {
    // Smooth scroll to next section
    const nextSection = document.querySelector('#servicios') || document.querySelector('main');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    onScrollClick?.();
  }, [onScrollClick]);

  return {
    isVisible,
    isInView,
    activeElement,
    handleButtonClick,
    handleStatClick,
    handleScrollClick,
    heroRef,
    shouldAnimate: shouldAnimate(),
  };
};
