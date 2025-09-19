import React, { useState, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const services = [
    {
      title: "Website Development",
      description: "Professional websites, e-commerce platforms, and web applications tailored to your needs.",
      icon: "💻",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized", "Fast Loading"],
      details: "Our website development service creates stunning, functional websites that represent your brand perfectly. We use modern frameworks like React and Next.js to build fast, SEO-optimized sites that convert visitors into customers. From simple landing pages to complex e-commerce platforms, we've got you covered.",
      pricing: "Starting at 2000rs",
      timeline: "2-4 weeks"
    },
    {
      title: "Mobile Applications",
      description: "Cross-platform mobile apps for iOS and Android with modern UI/UX design.",
      icon: "📱",
      features: ["iOS & Android", "Cross-Platform", "User-Friendly", "App Store Ready"],
      details: "We develop beautiful, high-performance mobile applications using React Native and Flutter. Our apps are designed with user experience as the top priority, ensuring intuitive navigation and engagement. We handle the entire process from concept to deployment on app stores.",
      pricing: "Starting at 2000rs",
      timeline: "4-8 weeks"
    },
    {
      title: "College Projects",
      description: "Help with academic projects, thesis websites, and programming assignments.",
      icon: "🎓",
      features: ["Documentation", "Source Code", "Presentation", "1-on-1 Support"],
      details: "Struggling with your computer science project? We provide comprehensive assistance with coding, documentation, and presentation preparation. Our experts will guide you through complex concepts and help you achieve academic success while ensuring you understand the material.",
      pricing: "Starting at 2000rs",
      timeline: "Varies by project"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive interfaces that enhance user experience and engagement.",
      icon: "🎨",
      features: ["Wireframing", "Prototyping", "User Testing", "Modern Design"],
      details: "Our UI/UX design service focuses on creating interfaces that are not only visually stunning but also incredibly intuitive. We conduct user research, create wireframes and prototypes, and perform usability testing to ensure your product delivers an exceptional user experience.",
      pricing: "Starting at 2000rs",
      timeline: "2-3 weeks"
    },
    {
      title: "Project Consultation",
      description: "Expert advice on technology stack, architecture, and project planning.",
      icon: "💡",
      features: ["Tech Stack", "Architecture", "Planning", "Best Practices"],
      details: "Not sure which technology to use for your project? Our consultation service provides expert guidance on technology selection, system architecture, project planning, and implementation strategies. We'll help you avoid common pitfalls and set your project up for success.",
      pricing: "2000rs",
      timeline: "As needed"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance for your projects.",
      icon: "🔧",
      features: ["Bug Fixes", "Updates", "Security", "24/7 Support"],
      details: "Keep your digital products running smoothly with our maintenance and support plans. We offer regular updates, security patches, bug fixes, and performance optimization. Choose from different tiers of support based on your needs, including 24/7 emergency support.",
      pricing: "Starting at 2000rs",
      timeline: "Ongoing"
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

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

  // Close modal when clicking outside content
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isModalOpen && e.target.classList.contains('modal-overlay')) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isModalOpen]);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (isModalOpen && e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  return (
    <>
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
                <button className="service-btn" onClick={() => openModal(service)}>
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

      {/* Modal Popup */}
      {isModalOpen && selectedService && (
        <div className="modal-overlay">
          <div className="modal-content glass-effect">
            <button className="modal-close" onClick={closeModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="24" height="24" rx="4" fill="#333"/>
  <path d="M18 6L6 18M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>
            
            <div className="modal-header">
              <div className="modal-icon">{selectedService.icon}</div>
              <h2>{selectedService.title}</h2>
              <p>{selectedService.description}</p>
            </div>
            
            <div className="modal-body">
              <div className="modal-details">
                <h3>Service Details</h3>
                <p>{selectedService.details}</p>
              </div>
              
              <div className="modal-features">
                <h3>What's Included</h3>
                <ul>
                  {selectedService.features.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-info-grid">
                <div className="modal-info-item">
                  <h4>Pricing</h4>
                  <p>{selectedService.pricing}</p>
                </div>
                <div className="modal-info-item">
                  <h4>Timeline</h4>
                  <p>{selectedService.timeline}</p>
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="modal-cta-btn">Get Started</button>
              <button className="modal-secondary-btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;