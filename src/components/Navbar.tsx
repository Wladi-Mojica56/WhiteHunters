import React, { memo, useMemo } from 'react';
import styles from './Navbar.module.css';
import type { NavbarProps } from '../types/navbar.types';
import { useNavbar } from '../hooks/useNavbar';
import { DEFAULT_NAVBAR_CONFIG, mergeNavbarConfig } from '../config/navbar.config';
import ErrorBoundary from './ErrorBoundary';
import ToggleMenu from './ToggleMenu';

const Navbar: React.FC<NavbarProps> = memo(({
  config,
  className = '',
  onLogoClick,
  onLinkClick,
  onWhatsAppClick,
  isSticky = true,
  variant = 'default',
  size = 'md',
}) => {
  const mergedConfig = useMemo(
    () => mergeNavbarConfig(DEFAULT_NAVBAR_CONFIG, config),
    [config]
  );

  const {
    isMenuOpen,
    isScrolled,
    activeLink,
    toggleMenu,
    handleLogoClick,
    handleLinkClick,
    handleWhatsAppClick,
  } = useNavbar(onLogoClick, onLinkClick, onWhatsAppClick);

  const navbarClasses = useMemo(() => {
    const baseClasses = [styles.navbar];
    
    if (className) baseClasses.push(className);
    if (variant !== 'default') baseClasses.push(styles[`navbar-${variant}`]);
    if (size !== 'md') baseClasses.push(styles[`navbar-${size}`]);
    if (isScrolled) baseClasses.push(styles.navbarScrolled);
    if (!isSticky) baseClasses.push(styles.navbarStatic);
    
    return baseClasses.join(' ');
  }, [className, variant, size, isScrolled, isSticky]);

  const renderLogo = () => (
    <div 
      className={styles.navbarLogo}
      onClick={handleLogoClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleLogoClick();
        }
      }}
      aria-label="Go to top"
    >
      <div className={styles.logoContainer}>
        <img 
          src={mergedConfig.logo.src} 
          alt={mergedConfig.logo.alt} 
          className={styles.logoImage}
          loading="eager"
        />
        <div className={styles.logoTextContainer}>
          <span className={styles.logoTextWhite}>
            {mergedConfig.brandName.primary}
          </span>
          <span className={styles.logoTextBlue}>
            {mergedConfig.brandName.secondary}
          </span>
        </div>
      </div>
    </div>
  );

  const renderDesktopLinks = () => (
    <nav className={styles.navbarLinks} role="navigation" aria-label="Main navigation">
      {mergedConfig.links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className={`${styles.navLink} ${
            activeLink === link.id.replace('#', '') ? styles.navLinkActive : ''
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick(link);
          }}
          target={link.target}
          rel={link.rel}
          aria-current={activeLink === link.id.replace('#', '') ? 'page' : undefined}
        >
          <span className={styles.navText}>{link.label}</span>
        </a>
      ))}
    </nav>
  );

  const renderWhatsAppButton = () => {
    const whatsappUrl = `${mergedConfig.whatsapp.url}?text=${mergedConfig.whatsapp.message}`;
    
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.navbarCta}
        onClick={handleWhatsAppClick}
        aria-label="Contact us via WhatsApp"
      >
        <span className={styles.ctaText}>{mergedConfig.whatsapp.label}</span>
      </a>
    );
  };

  return (
    <ErrorBoundary>
      <nav className={navbarClasses}>
        <div className={styles.navbarContainer}>
          {renderLogo()}
          {renderDesktopLinks()}
          
          <div className={styles.navbarActions}>
            {renderWhatsAppButton()}
          </div>

          <button 
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* ToggleMenu Component - Outside nav to avoid height constraints */}
      <ToggleMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        links={mergedConfig.links}
        whatsapp={mergedConfig.whatsapp}
        activeLink={activeLink || undefined}
        onLinkClick={handleLinkClick}
        onWhatsAppClick={handleWhatsAppClick}
      />
    </ErrorBoundary>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;