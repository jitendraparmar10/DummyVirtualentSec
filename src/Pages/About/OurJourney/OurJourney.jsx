import React from 'react';
import './OurJourney.css';

function OurJourney() {
  // Add the new classes here to apply the scoped base styles
  return (
    <div className="our-journey-scoped-html our-journey-scoped-body our-journey-container">
      <h1 className="our-journey-main-heading">Our Journey</h1>
      <div className="our-journey-bubble">
        <div className="our-journey-content">
          <h2>2023</h2>
          <p>Established in 2023, by thought of experts and pioneers with decades of experience in Network, Telecom, & Maritime security, VirtualentSecurity is a global cybersecurity startup firm focused on Blockchain security, Telecom security, Maritime security & Automative Security.</p>
        </div>
      </div>

      <div className="our-journey-bubble">
        <div className="our-journey-content">
          <h2>2024</h2>
          <p>Welcome to our world of innovation and creativity! We are a team of passionate individuals who are committed to delivering top-notch solutions to our clients. Our journey began with a simple idea: to make a difference in the world by providing innovative security solutions and services that address their diverse requirements, enabling them to evolve securely with a competitive edge.</p>
        </div>
      </div>

      <div className="our-journey-bubble">
        <div className="our-journey-content">
          <h2>2025</h2>
          <p>Whether you are a small startup or a large corporation, We have a wide range of cyber security services and solutions tailored to meet your unique business requirements that help to take your business to the next level. Our expert team is dedicated to helping you mitigate cyber risks and safeguard your valuable assets.</p>
        </div>
      </div>
    </div>
  );
}

export default OurJourney;