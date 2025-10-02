import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Background Elements */}
        <div className={styles.backgroundElements}>
          <div className={styles.gridOverlay}></div>
          <div className={styles.floatingShapes}>
            <div className={styles.shape1}></div>
            <div className={styles.shape2}></div>
            <div className={styles.shape3}></div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
          {/* Left Side - Text Content */}
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <span className={styles.badgeText}>Red Team Security</span>
            </div>
            
            <h1 className={styles.title}>
              <span className={styles.titleLine1}>Tu socio en</span>
              <span className={styles.titleLine2}>
                <span className={styles.titleAccent}>ciberseguridad</span>
              </span>
            </h1>
            
            <p className={styles.description}>
              Especialistas en servicios de Pentesting y seguridad informática. 
              Protegemos tu infraestructura con las mejores prácticas de red team 
              y análisis de vulnerabilidades.
            </p>
            
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <span className={styles.buttonText}>Iniciar Pentest</span>
              </button>
              <button className={styles.secondaryButton}>
                <span className={styles.buttonText}>Ver Servicios</span>
              </button>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Pentests Realizados</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>99.9%</span>
                <span className={styles.statLabel}>Tasa de Detección</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Monitoreo</span>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className={styles.visualContent}>
            <div className={styles.cyberCube}>
              <div className={styles.cube}>
                <div className={styles.cubeFace}></div>
                <div className={styles.cubeFace}></div>
                <div className={styles.cubeFace}></div>
                <div className={styles.cubeFace}></div>
                <div className={styles.cubeFace}></div>
                <div className={styles.cubeFace}></div>
              </div>
              <div className={styles.cubeGlow}></div>
            </div>
            
            <div className={styles.securityShield}>
              <div className={styles.shield}>
                <div className={styles.shieldInner}></div>
                <div className={styles.shieldPulse}></div>
              </div>
            </div>
            
            <div className={styles.dataFlow}>
              <div className={styles.flowLine}></div>
              <div className={styles.flowLine}></div>
              <div className={styles.flowLine}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Scroll para descubrir</span>
          <div className={styles.scrollArrow}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
