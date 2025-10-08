import React from 'react';
import styles from './Background.module.css';

interface BackgroundProps {
  variant?: 'default' | 'minimal' | 'cyber';
  className?: string;
}

const Background: React.FC<BackgroundProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const backgroundClasses = [
    styles.background,
    styles[`background-${variant}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={backgroundClasses}>
      <div className={styles.backgroundOverlay} />
      <div className={styles.backgroundPattern} />
      
      {/* Elementos flotantes */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingShape1} />
        <div className={styles.floatingShape2} />
        <div className={styles.floatingShape3} />
        <div className={styles.floatingShape4} />
        <div className={styles.floatingShape5} />
      </div>
    </div>
  );
};

export default Background;