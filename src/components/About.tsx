import React, { useState, useEffect } from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('nosotros');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'Lead Penetration Tester',
      experience: '8+ años',
      specialties: ['Web App Security', 'Network Pentesting', 'Red Team Operations']
    },
    {
      name: 'Maria Santos',
      role: 'Security Consultant',
      experience: '6+ años',
      specialties: ['Mobile Security', 'Cloud Security', 'Compliance']
    },
    {
      name: 'Carlos Mendez',
      role: 'Red Team Specialist',
      experience: '10+ años',
      specialties: ['APT Simulation', 'Social Engineering', 'Threat Intelligence']
    }
  ];

  const certifications = [
    { name: 'CEH', description: 'Certified Ethical Hacker' },
    { name: 'OSCP', description: 'Offensive Security Certified Professional' },
    { name: 'CISSP', description: 'Certified Information Systems Security Professional' },
    { name: 'CISM', description: 'Certified Information Security Manager' }
  ];

  return (
    <section id="nosotros" className={styles.about}>
      <div className={styles.aboutContainer}>
        {/* Header */}
        <div className={`${styles.aboutHeader} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Nuestro Equipo</span>
          </div>
          
          <h2 className={styles.title}>
            Expertos en <span className={styles.titleAccent}>Ciberseguridad</span>
          </h2>
          
          <p className={styles.description}>
            Un equipo de profesionales certificados con años de experiencia en 
            pentesting, red team operations y análisis de vulnerabilidades.
          </p>
        </div>

        {/* Team Section */}
        <div className={`${styles.teamSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.sectionTitle}>Nuestro Equipo</h3>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={styles.teamCard}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
              <div className={styles.memberAvatar}>
              </div>
                <h4 className={styles.memberName}>{member.name}</h4>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberExperience}>{member.experience}</p>
                <div className={styles.specialties}>
                  {member.specialties.map((specialty, specIndex) => (
                    <span key={specIndex} className={styles.specialty}>
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className={`${styles.certificationsSection} ${isVisible ? styles.visible : ''}`}>
          <h3 className={styles.sectionTitle}>Certificaciones</h3>
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className={styles.certCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.certIcon}></div>
                <h4 className={styles.certName}>{cert.name}</h4>
                <p className={styles.certDescription}>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`${styles.statsSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Proyectos Completados</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Años de Experiencia</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Clientes Satisfechos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>99%</span>
              <span className={styles.statLabel}>Tasa de Éxito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
