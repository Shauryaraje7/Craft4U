import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact');
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
    <section id="contact" className="contact section">
      <div className="contact-background">
        <div className="contact-orbit contact-orbit-1"></div>
        <div className="contact-orbit contact-orbit-2"></div>
        <div className="contact-particle contact-particle-1"></div>
        <div className="contact-particle contact-particle-2"></div>
        <div className="contact-particle contact-particle-3"></div>
      </div>
      
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Ready to start your project? Contact us today for a free consultation.</p>
        </div>
        
        <div className={`contact-content ${isVisible ? 'visible' : ''}`}>
          <div className="contact-info">
            <div className="info-section">
              <h3>Let's Start a Conversation</h3>
              <p>We're excited to hear about your project ideas and help bring them to life with our expertise.</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <div className="info-icon">📧</div>
                    <div className="icon-pulse"></div>
                  </div>
                  <div className="info-content">
                    <h4>Email Us</h4>
                    <p>hello@projectcraft.com</p>
                    <span className="info-subtext">We'll respond within 24 hours</span>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <div className="info-icon">📞</div>
                    <div className="icon-pulse"></div>
                  </div>
                  <div className="info-content">
                    <h4>Call Us</h4>
                    <p>+1 (555) 123-4567</p>
                    <span className="info-subtext">Mon-Fri from 9AM to 6PM</span>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon-wrapper">
                    <div className="info-icon">💬</div>
                    <div className="icon-pulse"></div>
                  </div>
                  <div className="info-content">
                    <h4>Live Chat</h4>
                    <p>Available 24/7</p>
                    <span className="info-subtext">Get instant answers</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="social-section">
              <h4>Follow Our Journey</h4>
              <div className="social-links">
                <a href="#" className="social-link">
                  <span className="social-icon">📘</span>
                  <span className="social-text">Facebook</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">📸</span>
                  <span className="social-text">Instagram</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">🐦</span>
                  <span className="social-text">Twitter</span>
                </a>
                <a href="#" className="social-link">
                  <span className="social-icon">💼</span>
                  <span className="social-text">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container glass-effect">
            <div className="form-header">
              <h3>Start Your Project</h3>
              <p>Fill out the form and we'll get back to you ASAP</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={formData.name ? 'has-value' : ''}
                />
                <label htmlFor="name">Full Name</label>
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={formData.email ? 'has-value' : ''}
                />
                <label htmlFor="email">Email Address</label>
              </div>
              
              <div className="form-group">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className={formData.projectType ? 'has-value' : ''}
                >
                  <option value=""></option>
                  <option value="website">Website Development</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="college-project">College Project</option>
                  <option value="ui-design">UI/UX Design</option>
                  <option value="consultation">Project Consultation</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="projectType">Project Type</label>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={formData.message ? 'has-value' : ''}
                ></textarea>
                <label htmlFor="message">Project Details</label>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="submit-message success">
                  <span>✓</span>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="submit-message error">
                  <span>⚠</span>
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;