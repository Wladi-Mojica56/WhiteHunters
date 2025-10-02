import React, { useState, useEffect } from 'react';
import styles from './Services.module.css';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('servicios');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: 'Web Application Pentesting',
      description: 'Análisis exhaustivo de vulnerabilidades en aplicaciones web, incluyendo OWASP Top 10 y pruebas de inyección.',
      features: ['SQL Injection', 'XSS Testing', 'Authentication Bypass', 'Session Management'],
      color: '#dc2626'
    },
    {
      id: 2,
      title: 'Network Penetration Testing',
      description: 'Evaluación completa de la infraestructura de red, identificando puntos débiles y configuraciones inseguras.',
      features: ['Port Scanning', 'Vulnerability Assessment', 'Firewall Testing', 'Wireless Security'],
      color: '#ef4444'
    },
    {
      id: 3,
      title: 'Mobile Security Testing',
      description: 'Análisis de seguridad en aplicaciones móviles iOS y Android, incluyendo reverse engineering.',
      features: ['Static Analysis', 'Dynamic Testing', 'API Security', 'Data Protection'],
      color: '#f87171'
    },
    {
      id: 4,
      title: 'Social Engineering',
      description: 'Simulación de ataques de ingeniería social para evaluar la conciencia de seguridad de los empleados.',
      features: ['Phishing Campaigns', 'Physical Security', 'Pretexting', 'Training Programs'],
      color: '#dc2626'
    },
    {
      id: 5,
      title: 'Cloud Security Assessment',
      description: 'Evaluación de seguridad en entornos cloud (AWS, Azure, GCP) y configuraciones de contenedores.',
      features: ['IAM Review', 'Container Security', 'API Security', 'Data Encryption'],
      color: '#ef4444'
    },
    {
      id: 6,
      title: 'Red Team Operations',
      description: 'Simulación de ataques avanzados persistentes (APT) para evaluar la capacidad de detección y respuesta.',
      features: ['APT Simulation', 'Lateral Movement', 'Persistence', 'Data Exfiltration'],
      color: '#f87171'
    }
  ];

  return (
    <section id="servicios" className={styles.services}>
      <div className={styles.servicesContainer}>
        {/* Header */}
        <div className={`${styles.servicesHeader} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Nuestros Servicios</span>
          </div>
          
          <h2 className={styles.title}>
            Soluciones de <span className={styles.titleAccent}>Seguridad</span> Integral
          </h2>
          
          <p className={styles.description}>
            Ofrecemos servicios especializados de pentesting y ciberseguridad 
            para proteger tu infraestructura contra amenazas avanzadas.
          </p>
        </div>

        {/* Services Grid */}
        <div className={`${styles.servicesGrid} ${isVisible ? styles.visible : ''}`}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} ${activeService === service.id ? styles.active : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <div className={styles.serviceFeatures}>
                {service.features.map((feature, featureIndex) => (
                  <span 
                    key={featureIndex} 
                    className={styles.feature}
                    style={{ animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s` }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className={styles.cardFooter}>
                <button className={styles.learnMoreBtn}>
                  <span>Saber más</span>
                  <span className={styles.btnIcon}>→</span>
                </button>
              </div>
              
              <div 
                className={styles.cardGlow}
                style={{ '--service-color': service.color } as React.CSSProperties}
              ></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
