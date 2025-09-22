import React from 'react';
import './Footer.css';
import logo from '../../assets/logofornav.png'



const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
    <img  className='logofornav'  src={logo} alt="" />
            </div>
            <p>Turning your ideas into digital reality with professional development services.</p>
           
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a href="#process" onClick={() => scrollToSection('process')}>Process</a></li>
              {/* <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li> */}
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Applications</a></li>
              <li><a href="#services">ai and ml</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">IOT</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📧 craft4uu@gmail.com</li>
            
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ProjectCraft. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;