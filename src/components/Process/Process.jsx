import React, { useState, useEffect, useRef } from 'react';
import './Process.css';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const steps = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We begin with an in-depth discovery session to understand your vision, goals, and requirements.",
      icon: "🔍",
      color: "#6366f1"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Our team crafts a comprehensive strategy and detailed project roadmap tailored to your needs.",
      icon: "📊",
      color: "#8b5cf6"
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description: "We create stunning visual designs and interactive prototypes for your approval.",
      icon: "🎨",
      color: "#ec4899"
    },
    {
      step: "04",
      title: "Development",
      description: "Expert developers bring your project to life using cutting-edge technologies.",
      icon: "💻",
      color: "#10b981"
    },
    {
      step: "05",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your product meets the highest quality standards.",
      icon: "✅",
      color: "#f59e0b"
    },
    {
      step: "06",
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support for optimal performance.",
      icon: "🚀",
      color: "#3b82f6"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate steps sequentially
          let currentStep = 0;
          const stepInterval = setInterval(() => {
            setActiveStep(currentStep);
            currentStep++;
            if (currentStep >= steps.length) {
              clearInterval(stepInterval);
            }
          }, 400);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <section id="process" className="process section" ref={sectionRef}>
      <div className="process-background">
        <div className="process-grid"></div>
        <div className="process-glow process-glow-1"></div>
        <div className="process-glow process-glow-2"></div>
      </div>
      
      <div className="container">
        <div className="process-header">
          <span className="section-label">Our Workflow</span>
          <h2 className="section-title">Streamlined Development Process</h2>
          <p className="section-subtitle">
            A proven methodology that transforms your vision into exceptional digital solutions
          </p>
        </div>
        
        <div className={`process-steps ${isVisible ? 'visible' : ''}`}>
          <div className="process-line"></div>
          
          <div className="steps-container">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`process-step ${index <= activeStep ? 'active' : ''} ${
                  index % 2 === 0 ? 'left' : 'right'
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="step-indicator">
                  <div className="step-number">{step.step}</div>
                  <div 
                    className="step-icon-container"
                    style={{ '--step-color': step.color }}
                  >
                    <div className="step-icon">{step.icon}</div>
                    <div className="step-glow"></div>
                  </div>
                </div>
                
                <div className="step-content">
                  <div 
                    className="step-card"
                    style={{ '--step-color': step.color }}
                  >
                    <div className="step-header">
                      <span className="step-badge">Step {step.step}</span>
                      <h3 className="step-title">{step.title}</h3>
                    </div>
                    <p className="step-description">{step.description}</p>
                    <div className="step-arrow"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="process-cta">
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's discuss how our process can bring your ideas to life</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">
                <span>Begin Your Journey</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn btn-secondary">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;