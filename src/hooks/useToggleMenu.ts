import { useState, useCallback } from 'react';
import type { NavLink } from '../types/navbar.types';

interface UseToggleMenuProps {
  onLinkClick?: (link: NavLink) => void;
  onWhatsAppClick?: () => void;
}

export const useToggleMenu = ({ onLinkClick, onWhatsAppClick }: UseToggleMenuProps = {}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleLinkClick = useCallback((link: NavLink) => {
    onLinkClick?.(link);
    closeMenu();
  }, [onLinkClick, closeMenu]);

  const handleWhatsAppClick = useCallback(() => {
    onWhatsAppClick?.();
    closeMenu();
  }, [onWhatsAppClick, closeMenu]);

  return {
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu,
    handleLinkClick,
    handleWhatsAppClick,
  };
};
