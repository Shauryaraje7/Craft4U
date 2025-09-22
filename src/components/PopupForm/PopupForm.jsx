import React, { useState } from 'react';
import './PopupForm.css';

const PopupForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    projectDetails: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual Google Apps Script Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxkKvnd5vCFWYoHenep7kxlihiNVWiXY-e9UigRgFwJ-T7LLGhXXCBQ_Z-n5pPLqc3g/exec';
      
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'popup'
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          projectType: '',
          projectDetails: ''
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 3000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="popup-close" onClick={onClose}>
          <span className="popup-close-icon">×</span>
        </button>

        {/* Form Header */}
        <div className="popup-header">
          <div className="popup-icon">💡</div>
          <h2 className="popup-title">Start Your Project</h2>
          <p className="popup-subtitle">Tell us about your project and we'll get back to you within 24 hours</p>
        </div>

        {/* Form */}
        <form className="popup-form" onSubmit={handleSubmit}>
          <div className="popup-form-group">
            <label htmlFor="name" className="popup-label">Your Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="popup-input"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="popup-form-group">
            <label htmlFor="email" className="popup-label">Your Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="popup-input"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="popup-form-group">
            <label htmlFor="projectType" className="popup-label">Project Type</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="popup-select"
              required
              disabled={isSubmitting}
            >
              <option value="">Select Project Type</option>
              <option value="web-development">💻 Website Development</option>
              <option value="mobile-app">📱 Mobile Application</option>
              <option value="college-project">🎓 College Project</option>
              <option value="ui-ux">🎨 UI/UX Design</option>
              <option value="consultation">💡 Project Consultation</option>
              <option value="maintenance">🔧 Maintenance & Support</option>
            </select>
          </div>

          <div className="popup-form-group">
            <label htmlFor="projectDetails" className="popup-label">Project Details</label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleInputChange}
              placeholder="Tell us about your project goals, timeline, and any specific requirements..."
              className="popup-textarea"
              rows="4"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Status Messages */}
          {submitStatus === 'success' && (
            <div className="popup-status-message success">
              ✅ Thank you! Your message has been sent successfully. We'll contact you within 24 hours.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="popup-status-message error">
              ❌ Something went wrong. Please try again or contact us directly at craft4uu@gmail.com
            </div>
          )}

          <button 
            type="submit" 
            className={`popup-submit ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="popup-spinner"></div>
                Sending...
              </>
            ) : (
              <>
                <span className="popup-submit-text">Send Message</span>
                <span className="popup-submit-icon">🚀</span>
              </>
            )}
          </button>
        </form>

        {/* Form Footer */}
        <div className="popup-footer">
          <p className="popup-footer-text">📧 We'll respond within 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;