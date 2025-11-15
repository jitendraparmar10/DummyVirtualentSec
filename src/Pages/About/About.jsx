import React from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';
import OurJourney from './OurJourney/OurJourney';
import CompanyLogo from './CompanyLogo/CompanyLogo';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.4, // Trigger animation when 40% of the section is visible
    triggerOnce: false, // Allow animation to trigger every time it comes into view
  });

  return (
    <div className="page-container">
      {/* Hero Section */}
      <header className="about-us-hero-section">
        <div className="about-us-hero-section-content">
          <h1>About Us</h1>
        </div>
      </header>

      {/* Detailed Company Info Section */}
      <section
        ref={ref}
        className={`about-us-detailed-of-company ${inView ? 'is-visible' : ''}`}
      >
        <div className="about-us-detailed-of-company-container">
          <div className="about-us-detailed-of-company-image-container">
            <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team collaborating" />
          </div>
          <div className="about-us-detailed-of-company-text-content">
            <h2>Pioneering Digital Security in a Connected World</h2>
            <p>
              Born in 2023 from the collective vision of seasoned experts in Network, Telecom, and Maritime security, VirtualentSecurity is a global cybersecurity startup on a mission to redefine safety in our increasingly digital world. We are innovators and creative thinkers, a team of passionate individuals committed to delivering top-notch, future-proof security solutions.
            </p>
            <p>
              Our journey began with a singular goal: to empower organizations to navigate the complexities of the digital age with confidence. We specialize in pioneering security for Blockchain, Telecommunications, Maritime, and Automotive sectors, offering a suite of services and solutions that address diverse requirements and enable our clients to evolve securely with a competitive edge.
            </p>
            <p>
              Whether you're a burgeoning startup or a global enterprise, we provide tailored cybersecurity services that will elevate your business to the next level of security and success.
            </p>
            <button className="about-us-detailed-of-company-cta-button">GET A QUOTE</button>
          </div>
        </div>
      </section>
      <OurJourney />
      <CompanyLogo />
    </div>
  );
}

export default About;