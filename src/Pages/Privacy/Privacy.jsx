import React, { useState, useEffect } from 'react';
import './Privacy.css';

const Privacy = () => {
    // State to track which section is currently active in the viewport
    const [activeSection, setActiveSection] = useState('section-1');
    
    // An array defining the sections for easier mapping in the JSX
    const sections = [
        { id: 'section-1', title: '1. Introduction' },
        { id: 'section-2', title: '2. Information We Collect' },
        { id: 'section-3', title: '3. How We Use Your Information' },
        { id: 'section-4', title: '4. How We Share Information' },
        { id: 'section-5', title: '5. Cookies & Tracking' },
        { id: 'section-6', title: '6. Data Security' },
        { id: 'section-7', title: '7. Data Retention' },
        { id: 'section-8', title: '8. Your Rights & Choices' },
        { id: 'section-9', title: '9. Third-Party Links' },
        { id: 'section-10', title: '10. Children’s Privacy' },
        { id: 'section-11', title: '11. International Data Transfers' },
        { id: 'section-12', title: '12. Changes to This Policy' },
        { id: 'section-13', title: '13. Contact Us' }
    ];

    // This effect adds a specific class to the body for page-specific styles
    useEffect(() => {
        document.body.classList.add('privacy-and-policy-body');
        return () => {
            document.body.classList.remove('privacy-and-policy-body');
        };
    }, []);

    // This effect sets up the Intersection Observer to watch the sections
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -79% 0px',
                threshold: 0
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div className="privacy-and-policy-page-container">
            {/* Hero Section */}
            <header className="privacy-and-policy-hero">
                <div className="privacy-and-policy-hero-content privacy-and-policy-fade-in-down">
                    <h1>Privacy Policy</h1>
                    <p>Last Updated: November 15, 2025</p>
                </div>
            </header>

            {/* Main Content Layout */}
            <main className="privacy-and-policy-main-content">
                <div className="privacy-and-policy-container">
                    
                    {/* Left Sidebar */}
                    <aside className="privacy-and-policy-sidebar">
                        <div className="privacy-and-policy-sidebar-inner">
                            <h3 className="privacy-and-policy-sidebar-title">Disclaimer</h3>
                            <ul className="privacy-and-policy-sidebar-nav">
                                {sections.map(section => (
                                    <li key={section.id} className="privacy-and-policy-nav-item">
                                        <a 
                                            href={`#${section.id}`}
                                            className={`privacy-and-policy-nav-link ${activeSection === section.id ? 'active' : ''}`}
                                        >
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Right Side for Content */}
                    <div className="privacy-and-policy-content-section">
                        <div className="privacy-and-policy-content">
                            <p className="privacy-and-policy-intro">
                                <strong>VirtualentSecurity (“we”, “our”, “us”)</strong> is a global cybersecurity startup established in 2023 by experts with decades of experience in Network, Telecom, Maritime, Automotive, and Blockchain security. We are committed to protecting your privacy and ensuring the highest level of data security across all our services. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website, use our services, or interact with us.
                            </p>

                            <section id="section-1" className="privacy-and-policy-article">
                                <h2 className="privacy-and-policy-title">1. Introduction</h2>
                                <p>By accessing our website or using our services, you agree to the terms outlined in this Privacy Policy. We are dedicated to maintaining transparency and safeguarding your personal information.</p>
                            </section>

                            <section id="section-2" className="privacy-and-policy-article">
                                <h2 className="privacy-and-policy-title">2. Information We Collect</h2>
                                <h3 className="privacy-and-policy-subtitle">2.1 Personal Information</h3>
                                <p>We may collect the following personal information when you interact with us:</p>
                                <ul className="privacy-and-policy-list">
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Company name</li>
                                    <li>Job title</li>
                                    <li>Billing details (if applicable)</li>
                                    <li>Any information submitted through contact forms or service inquiries</li>
                                </ul>
                                <h3 className="privacy-and-policy-subtitle">2.2 Technical / Non-Personal Information</h3>
                                <p>Automatically collected data:</p>
                                <ul className="privacy-and-policy-list">
                                    <li>IP address</li>
                                    <li>Browser type</li>
                                    <li>Device information</li>
                                    <li>Pages visited</li>
                                    <li>Cookies and tracking data</li>
                                </ul>
                                <h3 className="privacy-and-policy-subtitle">2.3 Sensitive or Security-Related Data</h3>
                                <p>For cybersecurity services, we may process limited technical data from systems, networks, or environments solely for assessment or protection purposes. We do not store or misuse sensitive business data beyond the agreed service scope.</p>
                            </section>
                            
                            <section id="section-3" className="privacy-and-policy-article">
                                <h2 className="privacy-and-policy-title">3. How We Use Your Information</h2>
                                <p>We use your data to:</p>
                                <ul className="privacy-and-policy-list">
                                    <li>Provide and manage our cybersecurity services</li>
                                    <li>Respond to your inquiries and service requests</li>
                                    <li>Conduct risk assessments and security audits</li>
                                    <li>Improve website performance and user experience</li>
                                    <li>Send updates, reports, proposals, or newsletters</li>
                                    <li>Maintain legal compliance and security obligations</li>
                                </ul>
                            </section>

                            <section id="section-4" className="privacy-and-policy-article">
                                <h2 className="privacy-and-policy-title">4. How We Share Your Information</h2>
                                <p>We may share information only under the following conditions:</p>
                                <h3 className="privacy-and-policy-subtitle">4.1 Service Providers</h3>
                                <p>Trusted partners who assist with:</p>
                                <ul className="privacy-and-policy-list">
                                    <li>Cloud hosting</li>
                                    <li>Payment processing</li>
                                    <li>Email communication</li>
                                    <li>Security operations</li>
                                </ul>
                                <h3 className="privacy-and-policy-subtitle">4.2 Legal or Compliance Requirements</h3>
                                <p>We may share data when required to:</p>
                                <ul className="privacy-and-policy-list">
                                    <li>Comply with legal processes</li>
                                    <li>Protect rights, safety, or prevent fraud</li>
                                </ul>
                                <h3 className="privacy-and-policy-subtitle">4.3 Business Transfers</h3>
                                <p>In case of mergers, acquisitions, or restructuring, data may be transferred as part of assets.</p>
                            </section>
                            
                            <section id="section-5" className="privacy-and-policy-article">
                                <h2 className="privacy-and-policy-title">5. Cookies & Tracking Technologies</h2>
                                <p>We use cookies to:</p>
                                <ul className="privacy-and-policy-list">
                                    <li>Measure website traffic</li>
                                    <li>Improve navigation</li>
                                    <li>Customize user experience</li>
                                </ul>
                                <p>Users can disable cookies through browser settings.</p>
                            </section>

                            <section id="section-6" className="privacy-and-policy-article">
                                <h2 className="privacy-and-policy-title">6. Data Security</h2>
                                <p>As a cybersecurity company, we implement advanced technical and organizational measures to protect your data, including:</p>
                                <ul className="privacy-and-policy-list">
                                    <li>Encryption</li>
                                    <li>Access controls</li>
                                    <li>Network monitoring</li>
                                    <li>Secure data processing protocols</li>
                                </ul>
                            </section>

                            <section id="section-7" className="privacy-and-policy-article">
                                <h2 className="privacy-and-policy-title">7. Data Retention</h2>
                                <p>We retain your information only for:</p>
                                <ul className="privacy-and-policy-list">
                                    <li>The duration necessary for the purpose collected</li>
                                    <li>Legal or contractual obligations</li>
                                    <li>Service delivery completeness</li>
                                </ul>
                            </section>
                            
                            <section id="section-8" className="privacy-and-policy-article">
                                <h2 className="privacy-and-policy-title">8. Your Rights & Choices</h2>
                                <p>Depending on your region, you may have rights to:</p>
                                <ul className="privacy-and-policy-list">
                                    <li>Access your personal data</li>
                                    <li>Update or correct information</li>
                                    <li>Request deletion</li>
                                    <li>Restrict processing</li>
                                    <li>Opt-out of marketing communication</li>
                                </ul>
                                <p>To exercise these rights, contact us at: <a href="mailto:contact@virtualentsecurity.com" className="privacy-and-policy-link">contact@virtualentsecurity.com</a></p>
                            </section>

                            <section id="section-9" className="privacy-and-policy-article">
                                <h2 className="privacy-and-policy-title">9. Third-Party Links</h2>
                                <p>Our website may contain external links. We are not responsible for the privacy practices of third-party sites.</p>
                            </section>

                            <section id="section-10" className="privacy-and-policy-article">
                                <h2 className="privacy-and-policy-title">10. Children’s Privacy</h2>
                                <p>We do not knowingly collect data from children under 16. If such information is discovered, we will delete it immediately.</p>
                            </section>

                            <section id="section-11" className="privacy-and-policy-article">
                                <h2 className="privacy-and-policy-title">11. International Data Transfers</h2>
                                <p>Your data may be processed outside your home country with appropriate safeguards to ensure data protection.</p>
                            </section>

                            <section id="section-12" className="privacy-and-policy-article">
                                <h2 className="privacy-and-policy-title">12. Changes to This Privacy Policy</h2>
                                <p>We may update this Privacy Policy periodically. The latest version will always be available on this page.</p>
                            </section>
                            
                            <section id="section-13" className="privacy-and-policy-article">
                                <h2 className="privacy-and-policy-title">13. Contact Us</h2>
                                <p>For any questions regarding this Privacy Policy, please contact us:</p>
                                <div className="privacy-and-policy-contact-details">
                                    <div className="privacy-and-policy-contact-item">
                                        <strong>Our Office:</strong>
                                        <span>Soukya Rd Whitefield, Bengaluru,<br/>Karnataka 562114, India</span>
                                    </div>
                                    <div className="privacy-and-policy-contact-item">
                                        <strong>Call to ask any question:</strong>
                                        <span>+91 63770 65766</span>
                                    </div>
                                    <div className="privacy-and-policy-contact-item">
                                        <strong>Email to get a free quote:</strong>
                                        <span><a href="mailto:contact@virtualentsecurity.com" className="privacy-and-policy-link">contact@virtualentsecurity.com</a></span>
                                        <span><a href="mailto:emea@virtualentsecurity.com" className="privacy-and-policy-link">emea@virtualentsecurity.com</a></span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Privacy;