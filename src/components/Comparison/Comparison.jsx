import React, { useState } from 'react';
import './Comparison.css';

const Comparison = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      category: 'web',
      title: 'Website Development',
      icon: '💻',
      marketPrice: '₹15,000',
      yourPrice: '₹2,500',
      savings: '83%'
    },
    {
      category: 'mobile',
      title: 'Mobile Applications',
      icon: '📱',
      marketPrice: '₹25,000',
      yourPrice: '₹4,500',
      savings: '82%'
    },
    {
      category: 'college',
      title: 'College Projects',
      icon: '🎓',
      marketPrice: '₹8,000',
      yourPrice: '₹1,500',
      savings: '81%'
    },
    {
      category: 'design',
      title: 'UI/UX Design',
      icon: '🎨',
      marketPrice: '₹12,000',
      yourPrice: '₹2,000',
      savings: '83%'
    },
    {
      category: 'consultation',
      title: 'Project Consultation',
      icon: '💡',
      marketPrice: '₹3,000',
      yourPrice: '₹500',
      savings: '83%'
    },
    {
      category: 'maintenance',
      title: 'Maintenance & Support',
      icon: '🔧',
      marketPrice: '₹5,000/mo',
      yourPrice: '₹1,000/mo',
      savings: '80%'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'college', label: 'College Projects' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="comparison" className="comparison section">
      <div className="container">
        <div className="comparison-header">
          <h2 className="section-title">Price Comparison</h2>
          <p className="section-subtitle">Premium quality at a fraction of the cost</p>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="comparison-grid">
          {filteredServices.map((service, index) => (
            <div key={index} className="comparison-card glass-effect">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              
              <div className="price-comparison">
                <div className="market-price-section">
                  <span className="price-label">Market Price</span>
                  <span className="market-price">{service.marketPrice}</span>
                </div>
                
                <div className="price-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="your-price-section">
                  <span className="price-label">Our Price</span>
                  <span className="your-price">{service.yourPrice}</span>
                </div>
              </div>
              
              <div className="savings-badge">
                Save {service.savings}
              </div>
            </div>
          ))}
        </div>

        <div className="comparison-cta">
          <h3>Ready to save on your project?</h3>
          <p>Get premium quality work at unbeatable prices</p>
          <button className="btn-primary">Get Started Today</button>
        </div>
      </div>
    </section>
  );
};

export default Comparison;