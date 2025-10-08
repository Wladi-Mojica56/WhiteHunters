import React, { memo, useMemo } from 'react';
import styles from './Hero.module.css';
import type { HeroProps } from '../types/hero.types';
import { useHero } from '../hooks/useHero';
import { DEFAULT_HERO_CONFIG, mergeHeroConfig } from '../config/hero.config';
import ErrorBoundary from './ErrorBoundary';
import LogoWhite from '../assets/LogoWhite.svg';

const Hero: React.FC<HeroProps> = memo(({
  config,
  className = '',
  variant = 'default',
  size = 'md',
  onButtonClick,
  onStatClick,
  enableAnimations = true,
  enableIntersection = true,
}) => {
  const mergedConfig = useMemo(
    () => mergeHeroConfig(DEFAULT_HERO_CONFIG, config),
    [config]
  );

  const {
    isVisible,
    isInView,
    handleButtonClick,
    handleStatClick,
    heroRef,
    shouldAnimate,
  } = useHero(enableAnimations, enableIntersection, onButtonClick, onStatClick);

  const heroClasses = useMemo(() => {
    const baseClasses = [styles.hero];
    
    if (className) baseClasses.push(className);
    if (variant !== 'default') baseClasses.push(styles[`hero-${variant}`]);
    if (size !== 'md') baseClasses.push(styles[`hero-${size}`]);
    if (isInView) baseClasses.push(styles.heroInView);
    if (shouldAnimate) baseClasses.push(styles.heroAnimated);
    
    return baseClasses.join(' ');
  }, [className, variant, size, isInView, shouldAnimate]);

  const renderBadge = () => (
    <div className={styles.badge}>
      <span className={styles.badgeText}>{mergedConfig.badge.text}</span>
    </div>
  );

  const renderTitle = () => (
    <h1 className={styles.title}>
      <span className={styles.titleLine1}>{mergedConfig.title.line1}</span>
      <span className={styles.titleLine2}>
        <span className={styles.titleAccent}>
          {mergedConfig.title.accent}
        </span>
      </span>
    </h1>
  );

  const renderButtons = () => (
    <div className={styles.ctaButtons}>
      {mergedConfig.buttons.map((button) => (
        <button
          key={button.id}
          className={`${styles[`${button.variant}Button`]} ${
            button.disabled ? styles.buttonDisabled : ''
          }`}
          onClick={() => handleButtonClick(button)}
          disabled={button.disabled}
          aria-label={button.text}
        >
          <span className={styles.buttonText}>{button.text}</span>
        </button>
      ))}
    </div>
  );

  const renderStats = () => (
    <div className={styles.stats}>
      {mergedConfig.stats.map((stat) => (
        <div
          key={stat.id}
          className={styles.stat}
          onClick={() => handleStatClick(stat)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleStatClick(stat);
            }
          }}
          aria-label={`${stat.label}: ${stat.number}`}
        >
          <span className={styles.statNumber}>
            {stat.number}
            {stat.suffix && <span className={styles.statSuffix}>{stat.suffix}</span>}
          </span>
          <span className={styles.statLabel}>{stat.label}</span>
        </div>
      ))}
    </div>
  );

  const renderVisualElements = () => (
    <div className={styles.visualContent}>
      {mergedConfig.visualElements.map((element) => {
        const elementClasses = [
          styles[element.type],
          element.animation ? styles[`${element.type}${element.animation.charAt(0).toUpperCase() + element.animation.slice(1)}`] : '',
          styles[`${element.type}${element.position.charAt(0).toUpperCase() + element.position.slice(1).replace('-', '')}`],
        ].filter(Boolean).join(' ');

        return (
          <div
            key={element.id}
            className={elementClasses}
          >
            {element.type === 'cube' && (
              <>
                <div className={styles.cube}>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className={styles.cubeFace}></div>
                  ))}
                </div>
                <div className={styles.cubeGlow}></div>
              </>
            )}
            
            {element.type === 'dataflow' && (
              <div className={styles.dataFlow}>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className={styles.flowLine}></div>
                ))}
              </div>
            )}
            
            {element.type === 'grid' && (
              <div className={styles.gridOverlay}></div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <ErrorBoundary>
      <section 
        ref={heroRef}
        id="inicio" 
        className={heroClasses}
        role="banner"
        aria-label="Hero section"
      >
        <div className={styles.heroContainer}>
          {/* Background Elements */}
          <div className={styles.backgroundElements}>
            {renderVisualElements()}
          </div>

          {/* Main Content */}
          <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
            {/* Left Side - Text Content */}
            <div className={styles.textContent}>
              {renderBadge()}
              {renderTitle()}
              
              <p className={styles.description}>
                {mergedConfig.description}
              </p>
              
              {renderButtons()}
              {renderStats()}
            </div>

            {/* Right Side - Visual Elements */}
            <div className={styles.visualContent}>
              {/* Wolf Logo */}
              <div className={styles.wolfLogoContainer}>
                <img 
                  src={LogoWhite} 
                  alt="White Hunters Logo" 
                  className={styles.wolfLogo}
                />
                <div className={styles.logoGlow}></div>
              </div>
              
              <div className={styles.dataFlow}>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className={styles.flowLine}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
});

Hero.displayName = 'Hero';

export default Hero;