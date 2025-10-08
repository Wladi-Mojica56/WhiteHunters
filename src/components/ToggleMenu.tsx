import React, { memo, useRef, useEffect } from 'react';
import styles from './ToggleMenu.module.css';
import type { NavLink, WhatsAppConfig } from '../types/navbar.types';

interface ToggleMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  whatsapp: WhatsAppConfig;
  activeLink?: string;
  onLinkClick?: (link: NavLink) => void;
  onWhatsAppClick?: () => void;
  className?: string;
}

const ToggleMenu: React.FC<ToggleMenuProps> = memo(({
  isOpen,
  onClose,
  links,
  whatsapp,
  activeLink,
  onLinkClick,
  onWhatsAppClick,
  className = '',
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Cerrar menú con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevenir scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        overlayRef.current &&
        overlayRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (link: NavLink) => {
    onLinkClick?.(link);
    onClose();
  };

  const handleWhatsAppClick = () => {
    onWhatsAppClick?.();
    onClose();
  };

  const whatsappUrl = `${whatsapp.url}?text=${whatsapp.message}`;

  const menuClasses = [
    styles.toggleMenu,
    isOpen ? styles.active : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <>
      {/* Overlay */}
      <div 
        ref={overlayRef}
        className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      
      {/* Menu */}
      <div 
        ref={menuRef}
        className={menuClasses}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-label="Navigation menu"
      >
        <div className={styles.menuContent}>
          {/* Header */}
          <div className={styles.menuHeader}>
            <div className={styles.menuTitleContainer}>
              <h2 className={styles.menuTitle}>White Hunters</h2>
              <p className={styles.menuSubtitle}>Ciberseguridad Profesional</p>
            </div>
            <button 
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Cerrar menú"
            >
              <span className={styles.closeIcon}>×</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className={styles.menuNav} role="navigation" aria-label="Mobile navigation">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`${styles.menuLink} ${
                  activeLink === link.id.replace('#', '') ? styles.menuLinkActive : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
                target={link.target}
                rel={link.rel}
                aria-current={activeLink === link.id.replace('#', '') ? 'page' : undefined}
              >
                <span className={styles.linkText}>{link.label}</span>
                <span className={styles.linkIcon}>→</span>
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className={styles.menuCta}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
              onClick={handleWhatsAppClick}
              aria-label="Contactar por WhatsApp"
            >
              <span className={styles.whatsappIcon}>💬</span>
              <span className={styles.whatsappText}>{whatsapp.label}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
});

ToggleMenu.displayName = 'ToggleMenu';

export default ToggleMenu;
