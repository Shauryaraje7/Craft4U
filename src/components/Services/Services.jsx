import React, { useState, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const services = [
    {
      title: "Website Development",
      description: "Professional websites, e-commerce platforms, and web applications tailored to your needs.",
      icon: "💻",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Fast Loading"]
    },
    {
      title: "Mobile Applications",
      description: "Cross-platform mobile apps for iOS and Android with modern UI/UX design.",
      icon: "📱",
      features: ["iOS & Android", "Cross-Platform", "User-Friendly", "App Store Ready"]
    },
    {
      title: "College Projects",
      description: "Help with academic projects, thesis websites, and programming assignments.",
      icon: "🎓",
      features: ["Documentation", "Source Code", "Presentation", "1-on-1 Support"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive interfaces that enhance user experience and engagement.",
      icon: "🎨",
      features: ["Wireframing", "Prototyping", "User Testing", "Modern Design"]
    },
    {
      title: "Project Consultation",
      description: "Expert advice on technology stack, architecture, and project planning.",
      icon: "💡",
      features: ["Tech Stack", "Architecture", "Planning", "Best Practices"]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance for your projects.",
      icon: "🔧",
      features: ["Bug Fixes", "Updates", "Security", "24/7 Support"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="services section">
      <div className="services-background">
        <div className="services-particle services-particle-1"></div>
        <div className="services-particle services-particle-2"></div>
        <div className="services-particle services-particle-3"></div>
      </div>
      
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We bring your ideas to life with cutting-edge technology and creative solutions</p>
        </div>
        
        <div className={`services-grid ${isVisible ? 'visible' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card glass-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon-container">
                <div className="service-icon">{service.icon}</div>
              
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-btn">
                <span>Learn More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;