import { useState, useCallback, useEffect, useRef } from 'react';
import type { NavLink } from '../types/navbar.types';

export interface UseNavbarReturn {
  isMenuOpen: boolean;
  isScrolled: boolean;
  activeLink: string | null;
  toggleMenu: () => void;
  closeMenu: () => void;
  handleLogoClick: () => void;
  handleLinkClick: (link: NavLink) => void;
  handleWhatsAppClick: () => void;
  mobileMenuRef: React.RefObject<HTMLDivElement | null>;
}

export const useNavbar = (
  onLogoClick?: () => void,
  onLinkClick?: (link: NavLink) => void,
  onWhatsAppClick?: () => void
): UseNavbarReturn => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active link detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleLogoClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
    onLogoClick?.();
  }, [closeMenu, onLogoClick]);

  const handleLinkClick = useCallback(
    (link: NavLink) => {
      if (!link.external) {
        // Special handling for "Inicio" link - scroll to top like logo
        if (link.id === 'inicio') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
      closeMenu();
      onLinkClick?.(link);
    },
    [closeMenu, onLinkClick]
  );

  const handleWhatsAppClick = useCallback(() => {
    closeMenu();
    onWhatsAppClick?.();
  }, [closeMenu, onWhatsAppClick]);

  return {
    isMenuOpen,
    isScrolled,
    activeLink,
    toggleMenu,
    closeMenu,
    handleLogoClick,
    handleLinkClick,
    handleWhatsAppClick,
    mobileMenuRef,
  };
};
