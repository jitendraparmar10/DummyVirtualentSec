import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Assets/logo.webp'; // Your logo import
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  
  const location = useLocation();

  // This effect correctly locks the navbar open when the mobile menu is active, even at the top of the page.
  useEffect(() => {
    const handleScroll = () => {
      const isCurrentlyScrolled = window.scrollY > 20 || menuOpen;
      if (isCurrentlyScrolled !== scrolled) {
        setScrolled(isCurrentlyScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <nav className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''} ${menuOpen ? 'navbar-menu-is-open' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-logo-container">
          <img
            src={logo}
            alt="VirtualentSecurity Logo"
            className="navbar-logo"
          />
          <span className="navbar-company-name">
            VirtualentSecurity
          </span>
        </div>

        <div className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'navbar-link-active' : ''} onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'navbar-link-active' : ''} onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/blog" className={location.pathname === '/blog' ? 'navbar-link-active' : ''} onClick={handleLinkClick}>
            Blog
          </Link>

          <div 
            className={`navbar-dropdown-container ${servicesDropdownOpen ? 'dropdown-open' : ''}`}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <a href="/services" onClick={toggleServicesDropdown} className={location.pathname.startsWith('/services') ? 'navbar-link-active' : ''}>
              Services
              <span className="dropdown-arrow">&#9662;</span>
            </a>
            <div className="services-dropdown">
              {/* MODIFIED: Added active class logic to each dropdown link */}
              <Link to="/services/cyber-security" className={location.pathname === '/services/cyber-security' ? 'navbar-link-active' : ''} onClick={handleLinkClick}>Cyber Security Service</Link>
              <Link to="/services/maritime-telecom" className={location.pathname === '/services/maritime-telecom' ? 'navbar-link-active' : ''} onClick={handleLinkClick}>Maritime / Telecom Security</Link>
              <Link to="/services/risk-advisory" className={location.pathname === '/services/risk-advisory' ? 'navbar-link-active' : ''} onClick={handleLinkClick}>Risk Advisory Services</Link>
              <Link to="/services/managed-security" className={location.pathname === '/services/managed-security' ? 'navbar-link-active' : ''} onClick={handleLinkClick}>Managed Security Services</Link>
              <Link to="/services/cloud-security" className={location.pathname === '/services/cloud-security' ? 'navbar-link-active' : ''} onClick={handleLinkClick}>Cloud Security Service</Link>
              <Link to="/services/trainings" className={location.pathname === '/services/trainings' ? 'navbar-link-active' : ''} onClick={handleLinkClick}>Trainings</Link>
            </div>
          </div>

          <Link to="/contact" className={location.pathname === '/contact' ? 'navbar-link-active' : ''} onClick={handleLinkClick}>
            Contact
          </Link>
        </div>

        <div className="navbar-hamburger" onClick={() => { setMenuOpen(!menuOpen); if (menuOpen) setServicesDropdownOpen(false); }}>
          <div className={`navbar-hamburger-line ${menuOpen ? 'navbar-hamburger-line-open' : ''}`}></div>
          <div className={`navbar-hamburger-line ${menuOpen ? 'navbar-hamburger-line-open' : ''}`}></div>
          <div className={`navbar-hamburger-line ${menuOpen ? 'navbar-hamburger-line-open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;