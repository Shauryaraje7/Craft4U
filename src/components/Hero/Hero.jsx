import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Mark typing as complete after animation duration
    const timer = setTimeout(() => {
      setIsTypingComplete(true);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-orbit hero-orbit-1"></div>
        <div className="hero-orbit hero-orbit-2"></div>
        <div className="hero-orbit hero-orbit-3"></div>
        <div className="hero-particle hero-particle-1"></div>
        <div className="hero-particle hero-particle-2"></div>
        <div className="hero-particle hero-particle-3"></div>
        <div className="hero-particle hero-particle-4"></div>
        <div className="hero-particle hero-particle-5"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Turn Your <span className="gradient-text">Ideas</span> Into 
            <span className={`typing-text ${isTypingComplete ? 'typing-complete' : ''}`}>
              Digital Reality
            </span>
          </h1>
          <p className="hero-description">
            We craft exceptional websites, mobile apps, and college projects tailored to your vision. 
            From concept to deployment, we bring your ideas to life with cutting-edge technology.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('contact')}>
              Start Your Project
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('comparison')}>
              See Prices
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">💻</div>
            <h4>Web Development</h4>
            <p>Modern, responsive websites</p>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">📱</div>
            <h4>Mobile Apps</h4>
            <p>iOS & Android applications</p>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🎓</div>
            <h4>College Projects</h4>
            <p>Academic excellence</p>
          </div>
          <div className="hero-main-card">
            <div className="main-card-content">
            
              <h3>Let's Build Something Amazing</h3>
              <p>Get a free consultation for your project idea today</p>
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;