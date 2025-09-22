import React, { useState, useEffect } from 'react';
import './Process.css';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const steps = [
    {
      step: "01",
      title: "Submit Your Idea",
      description: "Share your vision through our intuitive form or schedule a discovery call.",
      icon: "📝",
      color: "#4f46e5"
    },
    {
      step: "02",
      title: "Consultation & Strategy",
      description: "We analyze your needs, propose tailored solutions, and craft a detailed plan.",
      icon: "🤝",
      color: "#7c3aed"
    },
    {
      step: "03",
      title: "Proposal & Agreement",
      description: "Receive a clear, itemized quote and project timeline for approval.",
      icon: "📋",
      color: "#db2777"
    },
    {
      step: "04",
      title: "Development Phase",
      description: "Our team builds your solution with regular updates and agile sprints.",
      icon: "💻",
      color: "#059669"
    },
    {
      step: "05",
      title: "Review & Refinement",
      description: "Test the product, provide feedback, and we'll refine until it's perfect.",
      icon: "🔍",
      color: "#d97706"
    },
    {
      step: "06",
      title: "Launch & Support",
      description: "We deploy your project and offer ongoing support for success.",
      icon: "🚀",
      color: "#2563eb"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('process');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.8) {
          setIsVisible(true);
          
          const interval = setInterval(() => {
            setActiveStep(prev => {
              if (prev >= steps.length - 1) {
                clearInterval(interval);
                return prev;
              }
              return prev + 1;
            });
          }, 400);
          
          return () => clearInterval(interval);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section id="process" className="process">
      <div className="process-bg">
        <div className="process-orbit orbit-1"></div>
        <div className="process-orbit orbit-2"></div>
        <div className="process-particle particle-1"></div>
        <div className="process-particle particle-2"></div>
      </div>
      
      <div className="container">
        <div className="process-header">
          <h2>Our Process</h2>
          <p>Transforming your ideas into reality with a proven, seamless approach</p>
        </div>
        
        <div className={`process-timeline ${isVisible ? 'visible' : ''}`}>
          <div className="timeline-line"></div>
          
          {steps.map((item, index) => (
            <div 
              key={index} 
              className={`process-step ${index <= activeStep ? 'active' : ''}`}
              style={{ '--step-color': item.color }}
              onMouseEnter={() => setActiveStep(index)}
              onFocus={() => setActiveStep(index)}
            >
              <div className="step-marker">
                <span className="step-number">{item.step}</span>
                <div className="step-icon-wrapper">
                  <span className="step-icon">{item.icon}</span>
                  <div className="step-glow"></div>
                </div>
              </div>
              
              <div className="step-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="step-connector"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="process-cta">
          <h3>Ready to Bring Your Vision to Life?</h3>
          <p>Partner with us to create something extraordinary</p>
          <button className="cta-button">Start Your Project</button>
        </div>
      </div>
    </section>
  );
};

export default Process;