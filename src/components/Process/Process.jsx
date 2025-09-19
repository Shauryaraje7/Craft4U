import React, { useState, useEffect } from 'react';
import './Process.css';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const steps = [
    {
      step: "01",
      title: "Submit Your Idea",
      description: "Tell us about your project through our simple form or by scheduling a call.",
      icon: "📝",
      color: "#6366f1"
    },
    {
      step: "02",
      title: "Consultation & Planning",
      description: "We discuss your requirements, suggest solutions, and create a project plan.",
      icon: "🤝",
      color: "#8b5cf6"
    },
    {
      step: "03",
      title: "Quote & Agreement",
      description: "We provide a transparent quote and timeline for your project.",
      icon: "📋",
      color: "#ec4899"
    },
    {
      step: "04",
      title: "Development",
      description: "Our team builds your project with regular updates and progress reports.",
      icon: "💻",
      color: "#10b981"
    },
    {
      step: "05",
      title: "Review & Revisions",
      description: "You review the work and request changes until you're completely satisfied.",
      icon: "🔍",
      color: "#f59e0b"
    },
    {
      step: "06",
      title: "Delivery & Launch",
      description: "We deliver the final product and provide support for a smooth launch.",
      icon: "🚀",
      color: "#3b82f6"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('process');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
          
          // Set up step animation sequence
          const interval = setInterval(() => {
            setActiveStep(prev => {
              if (prev >= steps.length - 1) {
                clearInterval(interval);
                return prev;
              }
              return prev + 1;
            });
          }, 300);
          
          return () => clearInterval(interval);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section id="process" className="process section">
      <div className="process-background">
        <div className="process-orbit process-orbit-1"></div>
        <div className="process-orbit process-orbit-2"></div>
        <div className="process-particle process-particle-1"></div>
        <div className="process-particle process-particle-2"></div>
        <div className="process-particle process-particle-3"></div>
      </div>
      
      <div className="container">
        <div className="process-header">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">A streamlined approach to turning your ideas into reality</p>
        </div>
        
        <div className={`process-timeline ${isVisible ? 'visible' : ''}`}>
          <div className="timeline-line"></div>
          
          {steps.map((item, index) => (
            <div 
              key={index} 
              className={`process-step ${index <= activeStep ? 'active' : ''}`}
              style={{ '--step-color': item.color }}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className="step-marker">
                <div className="step-number">{item.step}</div>
                <div className="step-icon-circle">
                  <div className="step-icon">{item.icon}</div>
                  <div className="step-pulse"></div>
                </div>
              </div>
              
              <div className="step-card glass-effect">
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="step-arrow"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="process-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>Join dozens of satisfied clients who have brought their ideas to life with our process</p>
          <button className="btn-primary">Begin Your Journey</button>
        </div>
      </div>
    </section>
  );
};

export default Process;