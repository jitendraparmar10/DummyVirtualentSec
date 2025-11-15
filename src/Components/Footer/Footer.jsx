import React from 'react';
import './Footer.css';
import logo from '../../Assets/logo.webp'; // Your logo import
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Latest Twitter (X) icon
import { MdLocationOn, MdEmail, MdCall } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container-fullscreen">
      {/* NEW: Quick Links Section (Moved to Top) */}
      <div className="footer-quick-links">
        <a href="/careers">Careers</a>
        <a href="/knowledge-center">Knowledge Center</a>
        <a href="/meet-the-team">Meet The Team</a>
        <a href="/subscription">Subscription</a>
      </div>

      {/* Background Faded Logo */}
      <div className="footer-bg-logo">
        <img src={logo} alt="VirtualantSecurity Faded Logo" />
      </div>

      {/* Main Content Area (Original three-column layout) */}
      <div className="footer-main-content">
        {/* Left Side: Get in Touch & Social Media */}
        <div className="footer-side-content footer-left-contact">
          <h4 className="footer-side-heading">Get In Touch</h4>
          <div className="footer-content-wrapper">
            <div className="footer-contact-details">
              <div className="footer-contact-item-fullscreen">
                <MdLocationOn className="footer-contact-icon-fullscreen" />
                <span>Soukya Rd Whitefield, Bengaluru, <br /> Karnataka 562114, India</span>
              </div>
              <div className="footer-contact-item-fullscreen">
                <MdEmail className="footer-contact-icon-fullscreen" />
                <a href="mailto:contact@virtualentsecurity.com">contact@virtualentsecurity.com</a>
              </div>
              <div className="footer-contact-item-fullscreen">
                <MdCall className="footer-contact-icon-fullscreen" />
                <a href="tel:+916377065766">+91 63770 65766</a>
              </div>
            </div>
            <div>
              <h5 className="footer-social-heading">Social</h5>
              <div className="footer-social-links-fullscreen">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaXTwitter /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="footer-center-content">
          <img src={logo} alt="VirtualantSecurity Logo" className="footer-main-logo" />
          <h1 className="footer-company-name-main">VirtualentSecurity</h1>
        </div>

        {/* Right Side: Our Offices */}
        <div className="footer-side-content footer-right-offices">
          <h4 className="footer-side-heading">Our Offices</h4>
          <div className="footer-content-wrapper">
            <div className="footer-office-regions-container">
              <div className="footer-office-region">
                <h5>Asia Region</h5>
                <p>India &nbsp;&nbsp; Vietnam &nbsp;&nbsp; Armenia</p>
              </div>
              <div className="footer-office-region">
                <h5>Middle East</h5>
                <p>UAE &nbsp;&nbsp; Qatar</p>
              </div>
              <div className="footer-office-region">
                <h5>Africa Region</h5>
                <p>Nigeria &nbsp;&nbsp; Rwanda</p>
              </div>
              <div className="footer-office-region">
                <h5>Europe Region</h5>
                <p>Serbia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar for Copyright and Legal Links */}
      <div className="footer-bottom-bar">
        <div className="footer-copyright">
          &copy; {currentYear} VirtualentSecurity | Jitendra Parmar — All Rights Reserved.
        </div>
        <div className="footer-legal-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;