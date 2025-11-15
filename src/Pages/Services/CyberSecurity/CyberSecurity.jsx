import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './CyberSecurity.css';

// Reusable hook for intersection observer
const useAnimatedInView = (threshold = 0.2) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true,
  });
  return [ref, inView];
};

// --- SVG Icons for Services ---
const ThreatIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.007H12v-.007z" /></svg>;
const VulnerabilityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>;
const PenetrationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>;
const IncidentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>;
const ConsultingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.28a4.5 4.5 0 00-1.88-2.218a4.5 4.5 0 00-6.42 0a4.5 4.5 0 00-1.88 2.218A4.5 4.5 0 003 13.5V18a1.5 1.5 0 001.5 1.5h15A1.5 1.5 0 0021 18v-4.5a4.5 4.5 0 00-1.88-3.729z" /></svg>;
const ManagedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>;


const CyberSecurity = () => {
  // Add and remove a prefixed class to the body tag
  useEffect(() => {
    document.body.classList.add('cyber-security-service-body');
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('cyber-security-service-body');
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // --- Intersection observers for animations ---
  const [introRef, isIntroVisible] = useAnimatedInView();
  const [servicesRef, areServicesVisible] = useAnimatedInView(0.1); // Observer for services
  const [processRef, isProcessVisible] = useAnimatedInView(0.4);
  const [spotlight1Ref, isSpotlight1Visible] = useAnimatedInView(0.3);
  const [spotlight2Ref, isSpotlight2Visible] = useAnimatedInView(0.3);
  const [spotlight3Ref, isSpotlight3Visible] = useAnimatedInView(0.3);

  return (
    <div className="cyber-security-service-page-container">
      {/* Hero Section */}
      <header className="cyber-security-service-hero-section">
        <div className="cyber-security-service-hero-section-content">
          <h1>Cyber Security Services</h1>
          <ol className="cyber-security-service-breadcrumb">
            <li><a href="/">Home</a></li>
            <li>Cyber Security</li>
          </ol>
        </div>
      </header>

      {/* --- Section 1: Intro Section --- */}
      <section ref={introRef} className={`cs-intro-section ${isIntroVisible ? 'is-visible' : ''}`}>
        <div className="cs-intro-container">
          <div className="cs-intro-image-container">
            <img src="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cyber security professional at work" />
          </div>
          <div className="cs-intro-text-content">
            <h2>Fortifying Your Digital Frontier, Together.</h2>
            <p>
              In today's interconnected landscape, a reactive security approach is a risk you can't afford. We provide a comprehensive suite of proactive, intelligence-driven cybersecurity services designed to protect your critical assets, anticipate threats, and ensure operational resilience.
            </p>
            <p>
              From identifying vulnerabilities to managing incidents, our expert team becomes an extension of yours, building a robust security posture that empowers you to innovate and grow with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 2: Core Services Grid --- */}
      <section ref={servicesRef} className={`cs-core-services-section ${areServicesVisible ? 'is-visible' : ''}`}>
        <div className="cs-section-heading">
          <h2>Our Comprehensive Security Portfolio</h2>
        </div>
        <div className={`cs-services-container ${areServicesVisible ? 'is-visible' : ''}`}>
          {/* Card 1 */}
          <div className="cs-feature-box-wrapper">
            <div className="cs-feature-box">
              <div className="cs-feature-content">
                <div className="cs-feature-icon"><ThreatIcon /></div>
                <h3>Threat Intelligence</h3>
                <p>Leverage proactive threat data and analysis to stay ahead of adversaries and make informed security decisions.</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="cs-feature-box-wrapper">
            <div className="cs-feature-box">
              <div className="cs-feature-content">
                <div className="cs-feature-icon"><VulnerabilityIcon /></div>
                <h3>Vulnerability Management</h3>
                <p>Systematically identify, assess, and remediate security weaknesses across your entire digital infrastructure.</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="cs-feature-box-wrapper">
            <div className="cs-feature-box">
              <div className="cs-feature-content">
                <div className="cs-feature-icon"><PenetrationIcon /></div>
                <h3>Penetration Testing</h3>
                <p>Simulate real-world attacks to rigorously test your defenses and uncover exploitable security gaps.</p>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="cs-feature-box-wrapper">
            <div className="cs-feature-box">
              <div className="cs-feature-content">
                <div className="cs-feature-icon"><IncidentIcon /></div>
                <h3>Incident Response</h3>
                <p>Minimize the impact of a breach with our rapid-response team, available 24/7 to contain and eradicate threats.</p>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="cs-feature-box-wrapper">
            <div className="cs-feature-box">
              <div className="cs-feature-content">
                <div className="cs-feature-icon"><ConsultingIcon /></div>
                <h3>Security Consulting</h3>
                <p>Gain strategic guidance to build mature security programs, achieve compliance, and manage risk effectively.</p>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="cs-feature-box-wrapper">
            <div className="cs-feature-box">
              <div className="cs-feature-content">
                <div className="cs-feature-icon"><ManagedIcon /></div>
                <h3>Managed Security (SOC)</h3>
                <p>Offload the burden of 24/7 monitoring and threat detection to our state-of-the-art Security Operations Center.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Service Spotlight 1 --- */}
      <section ref={spotlight1Ref} className={`cs-spotlight-section ${isSpotlight1Visible ? 'is-visible' : ''}`}>
        <div className="cs-spotlight-container">
          <div className="cs-spotlight-image">
            <img src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Offensive Security"/>
          </div>
          <div className="cs-spotlight-text">
            <span className="cs-spotlight-tag">Offensive Security</span>
            <h3>Uncover Your Weaknesses Before Attackers Do</h3>
            <p>Our offensive security services, including penetration testing and red teaming, mimic the tactics of real-world adversaries. We identify and exploit vulnerabilities in your network, applications, and cloud environments to provide a true measure of your security effectiveness.</p>
            <ul>
              <li>Network & Web Application Penetration Testing</li>
              <li>Mobile & API Security Assessments</li>
              <li>Red & Purple Team Exercises</li>
              <li>Social Engineering Simulations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Section 4: Service Spotlight 2 (Reversed) --- */}
      <section ref={spotlight2Ref} className={`cs-spotlight-section reversed ${isSpotlight2Visible ? 'is-visible' : ''}`}>
        <div className="cs-spotlight-container">
          <div className="cs-spotlight-image">
            <img src="https://images.pexels.com/photos/3829227/pexels-photo-3829227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Defensive Security"/>
          </div>
          <div className="cs-spotlight-text">
            <span className="cs-spotlight-tag">Defensive Security</span>
            <h3>Build an Impenetrable Digital Fortress</h3>
            <p>A strong defense is built on visibility and control. Our defensive security services focus on building and managing robust security architectures, implementing 24/7 monitoring, and ensuring you can detect and respond to threats at machine speed.</p>
            <ul>
              <li>24/7/365 SOC Monitoring</li>
              <li>Managed Detection and Response (MDR)</li>
              <li>Security Architecture & Design</li>
              <li>Cloud Security Posture Management (CSPM)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Section 5: Our Methodology --- */}
      <section ref={processRef} className={`cs-process-section ${isProcessVisible ? 'is-visible' : ''}`}>
        <div className="cs-section-heading">
          <h2>Our Proven Security Methodology</h2>
          <p className="cs-section-desc">A continuous, cyclical approach to building and maintaining security resilience.</p>
        </div>
        <div className={`cs-process-steps-container ${isProcessVisible ? 'is-visible' : ''}`}>
          {/* Step 1 */}
          <article className="cs-card-wrapper">
            <div className="cs-card">
              <h3 className="cs-card-title">Assess & Identify</h3>
              <p className="cs-card-desc">We begin by understanding your unique risk profile through comprehensive assessments, threat modeling, and vulnerability scanning.</p>
            </div>
          </article>
          {/* Step 2 */}
          <article className="cs-card-wrapper">
            <div className="cs-card">
              <h3 className="cs-card-title">Protect & Remediate</h3>
              <p className="cs-card-desc">Based on our findings, we help you implement robust controls, patch vulnerabilities, and harden your systems against attack.</p>
            </div>
          </article>
          {/* Step 3 */}
          <article className="cs-card-wrapper">
            <div className="cs-card">
              <h3 className="cs-card-title">Detect & Respond</h3>
              <p className="cs-card-desc">Through continuous monitoring and advanced threat hunting, we detect malicious activity and respond swiftly to contain incidents.</p>
            </div>
          </article>
        </div>
      </section>

      {/* --- Section 6: Service Spotlight 3 --- */}
       <section ref={spotlight3Ref} className={`cs-spotlight-section ${isSpotlight3Visible ? 'is-visible' : ''}`}>
        <div className="cs-spotlight-container">
          <div className="cs-spotlight-image">
            <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Risk and Compliance"/>
          </div>
          <div className="cs-spotlight-text">
            <span className="cs-spotlight-tag">Risk & Compliance</span>
            <h3>Navigate the Regulatory Landscape with Ease</h3>
            <p>Achieving and maintaining compliance with standards like ISO 27001, SOC 2, or GDPR can be daunting. Our advisory services demystify the process, helping you build a security program that not only meets regulatory requirements but also genuinely reduces risk.</p>
            <ul>
              <li>Compliance Gap Analysis & Readiness</li>
              <li>Virtual CISO (vCISO) Services</li>
              <li>Security Policy & Procedure Development</li>
              <li>Third-Party Risk Management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Section 7: Call to Action --- */}
      <section className="cs-cta-section">
        <div className="cs-cta-content">
          <h2>Ready to Elevate Your Security?</h2>
          <p>Let's discuss how our tailored cybersecurity solutions can protect your business and enable your success. Reach out for a complimentary consultation.</p>
          <button className="cs-cta-button">Get a Quote</button>
        </div>
      </section>

    </div>
  );
}

export default CyberSecurity;