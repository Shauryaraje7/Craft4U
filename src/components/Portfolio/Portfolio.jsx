import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "web",
      description: "A full-featured online store with payment integration and admin dashboard",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      featured: true
    },
    {
      title: "Student Portal",
      category: "web",
      description: "A comprehensive portal for university students with course management",
      image: "🎓",
      technologies: ["Vue.js", "Express", "PostgreSQL", "JWT"],
      featured: false
    },
    {
      title: "Fitness Tracking App",
      category: "mobile",
      description: "Workout and nutrition tracking application with progress analytics",
      image: "💪",
      technologies: ["React Native", "Firebase", "Chart.js", "GPS"],
      featured: true
    },
    {
      title: "Restaurant Booking System",
      category: "web",
      description: "Reservation system with admin dashboard and customer notifications",
      image: "🍽️",
      technologies: ["Angular", "NestJS", "MySQL", "Twilio"],
      featured: false
    },
    {
      title: "Weather Application",
      category: "mobile",
      description: "Real-time weather forecasts with beautiful UI and location services",
      image: "🌤️",
      technologies: ["Flutter", "OpenWeather API", "Geolocation", "Animations"],
      featured: true
    },
    {
      title: "Inventory Management",
      category: "ai and ml",
      description: "System for small business inventory tracking with reporting features",
      image: "📦",
      technologies: ["Python", "Django", "SQLite", "Bootstrap"],
      featured: false
    },
    {
      title: "Social Media Dashboard",
      category: "web",
      description: "Analytics dashboard for social media metrics and engagement tracking",
      image: "📊",
      technologies: ["React", "D3.js", "REST API", "Material UI"],
      featured: true
    },
    {
      title: "Language Learning App",
      category: "mobile",
      description: "Interactive language learning with speech recognition and gamification",
      image: "🗣️",
      technologies: ["Swift", "Firebase", "AVFoundation", "GameKit"],
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { key: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { key: 'college', label: 'ai and ml', count: projects.filter(p => p.category === 'college').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('portfolio');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="portfolio-background">
        <div className="portfolio-particle portfolio-particle-1"></div>
        <div className="portfolio-particle portfolio-particle-2"></div>
        <div className="portfolio-particle portfolio-particle-3"></div>
      </div>
      
      <div className="container">
        <div className="portfolio-header">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">Explore our latest projects and see what we can create for you</p>
        </div>
        
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              <span className="filter-text">{filter.label}</span>
              <span className="filter-count">{filter.count}</span>
            </button>
          ))}
        </div>
        
        <div className={`portfolio-grid ${isVisible ? 'visible' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`portfolio-item glass-effect ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-image">
                <div className="project-icon">{project.image}</div>
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>Project Details</h4>
                    <div className="project-technologies">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <button className="view-project-btn">
                        <span>View Project</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button className="view-demo-btn">Live Demo</button>
                    </div>
                  </div>
                </div>
                {project.featured && <div className="featured-badge">Featured</div>}
              </div>
              <div className="portfolio-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="project-stats">
                    <span className="stat">⭐ 4.8</span>
                    <span className="stat">👁️ 1.2k</span>
                  </div>
                  <button className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="portfolio-cta glass-effect">
          <div className="cta-content">
            <h3>Ready to create something amazing?</h3>
            <p>Let's discuss your project and bring your ideas to life</p>
            <button className="btn-primary">
              <span>Start Your Project</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7L19 13M19 13L13 19M19 13H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="cta-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;