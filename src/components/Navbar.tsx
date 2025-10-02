import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <div className={styles.navbarLogo}>
          <span className={styles.logoText}>White</span>
          <span className={styles.logoAccent}>Hunters</span>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navbarLinks}>
          <a href="#inicio" className={styles.navLink}>
            <span className={styles.navText}>Inicio</span>
          </a>
          <a href="#servicios" className={styles.navLink}>
            <span className={styles.navText}>Servicios</span>
          </a>
          <a href="#nosotros" className={styles.navLink}>
            <span className={styles.navText}>Nosotros</span>
          </a>
          <a href="#contacto" className={styles.navLink}>
            <span className={styles.navText}>Contacto</span>
          </a>
        </div>

        {/* Right side actions */}
        <div className={styles.navbarActions}>
          <button 
            className={styles.navbarCta}
            onClick={() => {
              const contactSection = document.getElementById('contacto');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className={styles.ctaText}>¡Comenzar!</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <div className={styles.mobileMenuContent}>
          <a href="#inicio" className={styles.mobileNavLink}>Inicio</a>
          <a href="#servicios" className={styles.mobileNavLink}>Servicios</a>
          <a href="#nosotros" className={styles.mobileNavLink}>Nosotros</a>
          <a href="#contacto" className={styles.mobileNavLink}>Contacto</a>
          <button 
            className={styles.mobileCta}
            onClick={() => {
              const contactSection = document.getElementById('contacto');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
              setIsMenuOpen(false); // Cerrar el menú móvil después del click
            }}
          >
            ¡Comenzar!
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
