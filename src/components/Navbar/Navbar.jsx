import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logofornav.png';
import PopupForm from '../PopupForm/PopupForm'; // Import the popup form

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); // State for form visibility

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

  const openForm = () => {
    setIsFormOpen(true);
    setIsMenuOpen(false);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <img className='logofornav' src={logo} alt="" />
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Home</a>
            <a href="#services" className="nav-link" onClick={() => scrollToSection('services')}>Services</a>
            <a href="#process" className="nav-link" onClick={() => scrollToSection('process')}>Process</a>
            <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          
          <div className="nav-cta">
            {/* Updated button to open form */}
            <button className="btn-primary" onClick={openForm}>Get Started</button>
          </div>
          
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Popup Form */}
      <PopupForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
};

export default Navbar;