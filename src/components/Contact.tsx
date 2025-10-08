import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contacto');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'contacto@whitehunters.com',
      description: 'Respuesta en 24 horas'
    },
    {
      title: 'Ubicación',
      value: 'Madrid, España',
      description: 'Oficina Central'
    },
    {
      title: 'Horarios',
      value: 'Lunes a Viernes',
      description: '9:00 AM - 6:00 PM'
    }
  ];

  const services = [
    'Web Application Pentesting',
    'Network Penetration Testing',
    'Mobile Security Testing',
    'Social Engineering',
    'Cloud Security Assessment',
    'Red Team Operations'
  ];

  return (
    <section id="contacto" className={styles.contact}>
      <div className={styles.contactContainer}>
        {/* Header */}
        <div className={`${styles.contactHeader} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Contacto</span>
          </div>
          
          <h2 className={styles.title}>
            ¿Listo para <span className={styles.titleAccent}>Proteger</span> tu Infraestructura?
          </h2>
          
          <p className={styles.description}>
            Contacta con nuestros expertos para una evaluación personalizada 
            de tus necesidades de seguridad.
          </p>
        </div>

        <div className={styles.contactContent}>
          {/* Contact Info */}
          <div className={`${styles.contactInfo} ${isVisible ? styles.visible : ''}`}>
            <h3 className={styles.sectionTitle}>Información de Contacto</h3>
            <div className={styles.infoGrid}>
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className={styles.infoCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className={styles.infoTitle}>{info.title}</h4>
                  <p className={styles.infoValue}>{info.value}</p>
                  <p className={styles.infoDescription}>{info.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${styles.contactForm} ${isVisible ? styles.visible : ''}`}>
            <h3 className={styles.sectionTitle}>Solicitar Consulta</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.label}>Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service" className={styles.label}>Servicio de Interés</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="">Seleccionar servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows={5}
                  placeholder="Describe brevemente tus necesidades de seguridad..."
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Enviar Consulta</span>
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>¿Listo para proteger tu infraestructura?</h3>
            <p className={styles.ctaDescription}>
              Contacta con nuestros expertos para una evaluación personalizada de tus necesidades de seguridad.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCta}>
                <span>Solicitar Consulta</span>
              </button>
              <button className={styles.secondaryCta}>
                <span>Ver Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;