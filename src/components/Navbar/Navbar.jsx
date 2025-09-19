import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-icon">🚀</span>
          <h2>Craft4U</h2>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Home</a>
          <a href="#services" className="nav-link" onClick={() => scrollToSection('services')}>Services</a>
          <a href="#process" className="nav-link" onClick={() => scrollToSection('process')}>Process</a>
          <a href="#portfolio" className="nav-link" onClick={() => scrollToSection('portfolio')}>Work</a>
          <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        
        <div className="nav-cta">
          <button className="btn-primary" onClick={() => scrollToSection('contact')}>Get Started</button>
        </div>
        
        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;