import React, { useState, useEffect, useRef } from 'react';
import './TermsAndCondition.css';

const TermsAndCondition = () => {
    // State to track which section is currently active in the viewport
    const [activeSection, setActiveSection] = useState('section-1');
    
    // An array defining the sections for easier mapping in the JSX
    const sections = [
        { id: 'section-1', title: '1. Introduction' },
        { id: 'section-2', title: '2. Intellectual Property' },
        { id: 'section-3', title: '3. Restrictions' },
        { id: 'section-4', title: '4. Your Content' },
        { id: 'section-5', title: '5. No Warranties' },
        { id: 'section-6', title: '6. Limitation of Liability' },
        { id: 'section-7', title: '7. Governing Law' },
        { id: 'section-8', title: '8. Changes to Terms' }
    ];

    // This effect adds a specific class to the body for page-specific styles
    useEffect(() => {
        document.body.classList.add('terms-and-conditions-body');
        return () => {
            document.body.classList.remove('terms-and-conditions-body');
        };
    }, []);

    // This effect sets up the Intersection Observer to watch the sections
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // When a section is intersecting (visible), update the active state
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                // This creates a "trigger" area in the middle of the screen.
                rootMargin: '-20% 0px -79% 0px',
                threshold: 0
            }
        );

        // Tell the observer to watch each of the content sections
        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        // Cleanup function to stop observing when the component unmounts
        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return (
        <div className="terms-and-conditions-page-container">
            {/* Hero Section */}
            <header className="terms-and-conditions-hero">
                <div className="terms-and-conditions-hero-content terms-and-conditions-fade-in-down">
                    <h1>Terms & Conditions</h1>
                    <p>Last updated: November 15, 2025</p>
                </div>
            </header>

            {/* Main Content Layout */}
            <main className="terms-and-conditions-main-content">
                <div className="terms-and-conditions-container">
                    
                    {/* Left Sidebar for Navigation */}
                    <aside className="terms-and-conditions-sidebar">
                        <div className="terms-and-conditions-sidebar-inner">
                            <h3 className="terms-and-conditions-sidebar-title">Sections</h3>
                            <ul className="terms-and-conditions-sidebar-nav">
                                {sections.map(section => (
                                    <li key={section.id} className="terms-and-conditions-nav-item">
                                        <a 
                                            href={`#${section.id}`}
                                            className={`terms-and-conditions-nav-link ${activeSection === section.id ? 'active' : ''}`}
                                        >
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Right Side for Content */}
                    <div className="terms-and-conditions-content-section">
                        <div className="terms-and-conditions-content">
                            {/* Section 1 */}
                            <section id="section-1" className="terms-and-conditions-article">
                                <h2 className="terms-and-conditions-title">1. Introduction</h2>
                                <p>Welcome to our website. By accessing or using our website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our website.</p>
                            </section>

                            {/* Section 2 */}
                            <section id="section-2" className="terms-and-conditions-article">
                                <h2 className="terms-and-conditions-title">2. Intellectual Property Rights</h2>
                                <p>Other than the content you own, under these Terms, the Company and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.</p>
                            </section>
                            
                            {/* Section 3 */}
                            <section id="section-3" className="terms-and-conditions-article">
                                <h2 className="terms-and-conditions-title">3. Restrictions</h2>
                                <p>You are specifically restricted from all of the following:</p>
                                <ul className="terms-and-conditions-list">
                                    <li>Publishing any Website material in any other media.</li>
                                    <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
                                    <li>Publicly performing and/or showing any Website material.</li>
                                    <li>Using this Website in any way that is or may be damaging to this Website.</li>
                                    <li>Using this Website in any way that impacts user access to this Website.</li>
                                    <li>Engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website.</li>
                                </ul>
                            </section>

                            {/* Section 4 */}
                            <section id="section-4" className="terms-and-conditions-article">
                                <h2 className="terms-and-conditions-title">4. Your Content</h2>
                                <p>In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant the Company a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>
                            </section>
                            
                            {/* Section 5 */}
                            <section id="section-5" className="terms-and-conditions-article">
                                <h2 className="terms-and-conditions-title">5. No warranties</h2>
                                <p>This Website is provided “as is,” with all faults, and the Company expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>
                            </section>
                            
                            {/* Section 6 */}
                            <section id="section-6" className="terms-and-conditions-article">
                                <h2 className="terms-and-conditions-title">6. Limitation of liability</h2>
                                <p>In no event shall the Company, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. The Company, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
                            </section>

                            {/* Section 7 */}
                            <section id="section-7" className="terms-and-conditions-article">
                                <h2 className="terms-and-conditions-title">7. Governing Law & Jurisdiction</h2>
                                <p>These Terms will be governed by and interpreted in accordance with the laws of the designated State/Country, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the designated State/Country for the resolution of any disputes.</p>
                            </section>
                            
                            {/* Section 8 */}
                            <section id="section-8" className="terms-and-conditions-article">
                                <h2 className="terms-and-conditions-title">8. Changes to These Terms</h2>
                                <p>We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on this page. You are advised to review these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page.</p>
                            </section>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default TermsAndCondition;