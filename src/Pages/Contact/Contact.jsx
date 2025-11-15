import React, { useState, useEffect } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', message: ''
  });

  const [phoneNumber, setPhoneNumber] = useState('+91');
  const [errors, setErrors] = useState({});
  const [isFormActive, setIsFormActive] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'success'
  const [titleText, setTitleText] = useState('Get in Touch');

  // Add and remove a prefixed class to the body tag
  useEffect(() => {
    document.body.classList.add('contact-us-body');
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('contact-us-body');
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Reset title if form is closed manually without submitting
  useEffect(() => {
    if (!isFormActive && submissionStatus !== 'success') {
      setTitleText('Get in Touch');
    }
  }, [isFormActive, submissionStatus]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name' && !/^[a-zA-Z\s]*$/.test(value)) {
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!phoneNumber || phoneNumber.length < 10) {
      newErrors.phoneNumber = 'A valid contact number is required';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submissionStatus !== 'idle' || !validateForm()) {
      console.log('Form has validation errors or is already submitting.');
      return;
    }
    
    setSubmissionStatus('success');
    
    setTimeout(() => {
      setIsFormActive(false);
      setTitleText('Successfully Submitted!');
    }, 1500);

    setTimeout(() => {
      setTitleText('Get in Touch');
      setSubmissionStatus('idle');
      setFormData({ name: '', email: '', company: '', message: '' });
      setPhoneNumber('+91');
      setErrors({});
    }, 6500);
  };

  return (
    <div className="contact-us-page-container">
      {/* Hero Section */}
      <header className="contact-us-hero-section">
        <div className="contact-us-hero-section-content">
          <h1>Contact Us</h1>
        </div>
      </header>

      {/* Combined Info & Details Section */}
      <section className="contact-us-intro-section">
        <h2 className="contact-us-info-banner-heading">
          Thank You For Your Interest. If You Have Any Query, Get in Touch Anytime, Anywhere.
        </h2>
        <div className="contact-us-details-container">
          <div className="contact-us-detail-card">
            <svg className="contact-us-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <h3>Our Office</h3>
            <p>Soukya Rd Whitefield, Bengaluru,<br/>Karnataka 562114, India</p>
          </div>
          <div className="contact-us-detail-card">
            <svg className="contact-us-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <h3>Call to ask any question</h3>
            <p>+91 63770 65766</p>
          </div>
          <div className="contact-us-detail-card">
            <svg className="contact-us-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <h3>Email to get free quote</h3>
            <p>contact@virtualentsecurity.com</p>
            <p>emea@virtualentsecurity.com</p>
          </div>
        </div>
      </section>

      {/* Interactive Form Section */}
      <section className="contact-us-interactive-form-section">
        <div 
          className={`contact-us-form-container ${isFormActive ? 'contact-us-form-active' : ''} ${submissionStatus === 'success' ? 'contact-us-submission-success' : ''}`}
          onMouseEnter={() => !isFormActive && submissionStatus === 'idle' && setIsFormActive(true)}
        >
          <h2 className="contact-us-form-title">
            {isFormActive ? 'Get in Touch' : titleText}
          </h2>
          <form className="contact-us-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-us-form-group">
              <label htmlFor="contact-us-name">Name<span className="contact-us-required-star">*</span></label>
              <input type="text" id="contact-us-name" name="name" value={formData.name} onChange={handleInputChange} className={errors.name ? 'contact-us-input-error' : ''} />
              {errors.name && <span className="contact-us-error-message">{errors.name}</span>}
            </div>
            <div className="contact-us-form-group">
              <label htmlFor="contact-us-email">Email<span className="contact-us-required-star">*</span></label>
              <input type="email" id="contact-us-email" name="email" value={formData.email} onChange={handleInputChange} className={errors.email ? 'contact-us-input-error' : ''} />
              {errors.email && <span className="contact-us-error-message">{errors.email}</span>}
            </div>
            <div className="contact-us-form-group">
              <label htmlFor="contact-us-contactNumber">Contact Number<span className="contact-us-required-star">*</span></label>
              <PhoneInput id="contact-us-contactNumber" international defaultCountry="IN" value={phoneNumber} onChange={setPhoneNumber} className={errors.phoneNumber ? 'contact-us-input-error' : ''} />
              {errors.phoneNumber && <span className="contact-us-error-message">{errors.phoneNumber}</span>}
            </div>
            <div className="contact-us-form-group">
              <label htmlFor="contact-us-company">Company or Organization (Optional)</label>
              <input type="text" id="contact-us-company" name="company" value={formData.company} onChange={handleInputChange} />
            </div>
            <div className="contact-us-form-group">
              <label htmlFor="contact-us-message">How can we help you?<span className="contact-us-required-star">*</span></label>
              <textarea id="contact-us-message" name="message" rows="5" value={formData.message} onChange={handleInputChange} className={errors.message ? 'contact-us-input-error' : ''}></textarea>
              {errors.message && <span className="contact-us-error-message">{errors.message}</span>}
            </div>
            <button 
              type="submit" 
              className={`contact-us-submit-button ${submissionStatus === 'success' ? 'contact-us-success' : ''}`}
              disabled={submissionStatus === 'success'}
            >
              <span>
                {submissionStatus === 'success' ? 'Message Sent!' : 'Submit'}
              </span>
            </button>
          </form>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="contact-us-google-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.624139294524!2d82.7499714149349!3d21.06800738600588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f063d62e7f2176d%3A0x91b5d878ce28cc!2sVirtualent%20Security%20LLP!5e0!3m2!1sen!2sin!4v1671542824765!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Virtualent Security LLP Location"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;