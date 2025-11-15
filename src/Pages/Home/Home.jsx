import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Home.css';

// Images for the hero slider
import img1 from '../../Assets/home/1.avif';
import img2 from '../../Assets/home/2.avif';
import img3 from '../../Assets/home/3.avif';
import img4 from '../../Assets/home/4.avif';

const images = [img1, img2, img3, img4];

// --- Content for the about section ---
const headingText = "Your Trusted Partner for Comprehensive Cyber Security Services & Solutions.";
const paragraphText = "At our company, we don't just provide cyber security services, we transform your entire security posture to empower your business and mitigate risks. Our goal is to bolster your security resilience and minimize the frequency of attacks, threats, and risks, so you can focus on driving change, innovating, and accelerating growth on your own terms. Let us help you build a solid foundation for your digital future, and achieve success without compromise.";

// Data for the services slider
const services = [
  {
    bgUrl: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbUrl: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Cyber Security Service",
    desc: "Managing security assessments to align with your application release cycles.",
  },
  {
    bgUrl: "https://images.pexels.com/photos/5935791/pexels-photo-5935791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbUrl: "https://images.pexels.com/photos/4389667/pexels-photo-4389667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Flagship Security",
    desc: "Identifying threats in the Telecom, Maritime, Aviation, & Satellite industries.",
  },
  {
    bgUrl: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbUrl: "https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Risk Advisory Services",
    desc: "Achieve compliance and overcome risks by deploying and managing security programs.",
  },
  {
    bgUrl: "https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbUrl: "https://images.pexels.com/photos/2454635/pexels-photo-2454635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Managed Security",
    desc: "Detect, monitor, and respond to threats by continuously monitoring your IT assets.",
  },
  {
    bgUrl: "https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbUrl: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Cloud Security Service",
    desc: "Accelerate your growth by managing cloud security risks and protecting your cloud assets.",
  },
  {
    bgUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbUrl: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Training",
    desc: "Providing comprehensive training programs to manage security risks effectively.",
  },
];

// --- SVG Icons for the Features Section ---
const IdentifyIcon = () => (
  <svg className="home-feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const RemediateIcon = () => (
  <svg className="home-feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
  </svg>
);

const PrepareIcon = () => (
  <svg className="home-feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const SupportIcon = () => (
  <svg className="home-feature-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5a6 6 0 00-6-6v1.5a6 6 0 00-6 6v1.5a6 6 0 006 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 13.5L18 12v-1.5a3 3 0 00-3-3H9a3 3 0 00-3 3V12l1.5 1.5" />
  </svg>
);


/**
 * AnimatedText Component (REWRITTEN)
 * Animates text color from grey to black letter by letter when it becomes visible.
 */
const AnimatedText = ({ text, startAnimation, onAnimationComplete = () => {} }) => {
    const letters = text.split('');
    const [animatedIndex, setAnimatedIndex] = useState(-1);
    const [isAnimating, setIsAnimating] = useState(false);
  
    useEffect(() => {
      if (startAnimation && !isAnimating) {
        setIsAnimating(true);
        const intervalId = setInterval(() => {
          setAnimatedIndex((prevIndex) => {
            const nextIndex = prevIndex + 1;
            if (nextIndex >= letters.length) {
              clearInterval(intervalId);
              onAnimationComplete();
              return prevIndex;
            }
            return nextIndex;
          });
        }, 15); // Speed of letter animation
  
        return () => clearInterval(intervalId);
      }
    }, [startAnimation, isAnimating, letters.length, onAnimationComplete]);
  
    return (
      <div className="home-animated-text-container">
        {letters.map((letter, index) => (
          <span
            key={index}
            className={`home-animated-letter ${index <= animatedIndex ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 10}ms` }} // Optional: adds a subtle cascade
          >
            {letter}
          </span>
        ))}
      </div>
    );
  };
  

const Home = () => {
  // --- State and Logic for the Image Slider ---
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const heroTimeoutRef = useRef(null);

  const resetHeroTimeout = () => {
    if (heroTimeoutRef.current) {
      clearTimeout(heroTimeoutRef.current);
    }
  };

  const handleHeroTransition = useCallback((newIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setTimeout(() => {
        setIsTransitioning(false);
    }, 1000); // Match transition duration in CSS
  }, [isTransitioning]);

  const goToNextHero = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    handleHeroTransition(newIndex);
  }, [currentIndex, handleHeroTransition]);

  useEffect(() => {
    resetHeroTimeout();
    heroTimeoutRef.current = setTimeout(goToNextHero, 5000); // Changed to 5 seconds
    return () => resetHeroTimeout();
  }, [currentIndex, goToNextHero]);

  const goToPreviousHero = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    handleHeroTransition(newIndex);
  };

  // --- State and Logic for the Animated Text Section ---
  const [startHeading, setStartHeading] = useState(false);
  const [startParagraph, setStartParagraph] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false); 
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartHeading(true);
          setIsAboutVisible(true); 
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = aboutSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // --- State and Logic for the Services Slider ---
  const [currentService, setCurrentService] = useState(0);
  const trackRef = useRef(null);
  const servicesSliderRef = useRef(null);

  const isMobile = useCallback(() => window.matchMedia("(max-width: 767px)").matches, []);

  const centerCard = useCallback((cardIndex) => {
    const track = trackRef.current;
    const slider = servicesSliderRef.current;
    if (!track || !slider) return;

    const card = track.children[cardIndex];
    if (!card) return;
    
    const axis = isMobile() ? "top" : "left";
    const size = isMobile() ? "clientHeight" : "clientWidth";
    const start = isMobile() ? card.offsetTop : card.offsetLeft;
    
    slider.scrollTo({
      [axis]: start - (slider[size] / 2 - card[size] / 2),
      behavior: "smooth"
    });
  }, [isMobile]);
  
  const activateService = useCallback((index) => {
    if (index === currentService) return;
    setCurrentService(index);
    centerCard(index);
  }, [currentService, centerCard]);
  
  const goService = useCallback((step) => {
    const newIndex = Math.min(Math.max(currentService + step, 0), services.length - 1);
    activateService(newIndex);
  }, [currentService, activateService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) goService(1);
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) goService(-1);
    };

    const handleResize = () => centerCard(currentService);

    let sx = 0, sy = 0;
    const handleTouchStart = (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    };
    
    const handleTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (isMobile() ? Math.abs(dy) > 60 : Math.abs(dx) > 60) {
        goService((isMobile() ? dy : dx) > 0 ? -1 : 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    const track = trackRef.current;
    if (track) {
      track.addEventListener("touchstart", handleTouchStart, { passive: true });
      track.addEventListener("touchend", handleTouchEnd, { passive: true });
    }
    
    centerCard(currentService);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      if (track) {
        track.removeEventListener("touchstart", handleTouchStart);
        track.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [currentService, goService, centerCard, isMobile]);


  return (
    <>
      {/* --- Hero Section Slider --- */}
      <div className="home-herosection-slider">
        <div className="home-herosection-slide-container">
          {images.map((image, index) => (
            <div
              className={`home-herosection-slide ${index === currentIndex ? 'active' : ''}`}
              key={index}
              style={{ zIndex: index === currentIndex ? 2 : 1 }}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="home-herosection-arrow home-herosection-left-arrow" onClick={goToPreviousHero}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button className="home-herosection-arrow home-herosection-right-arrow" onClick={goToNextHero}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* --- About Section --- */}
      <section className="home-about-section" ref={aboutSectionRef}>
        <div className="home-background-image-container" />
        <div className="home-background-overlay" />
        <div className="home-about-content-grid">
          <div className="home-text-content">
            <h1 className="home-about-heading">
              <AnimatedText
                text={headingText}
                startAnimation={startHeading}
                onAnimationComplete={() => setStartParagraph(true)}
              />
            </h1>
            <div className="home-about-paragraph">
              <AnimatedText
                text={paragraphText}
                startAnimation={startParagraph}
              />
            </div>
          </div>
          <div className="home-image-content">
            <div className={`home-image-frame ${isAboutVisible ? 'animate-all' : ''}`}>
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=3540&auto=format&fit=crop"
                alt="Cyber security team working in a modern office"
                className="home-styled-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Professional Services Section --- */}
      <section className="home-services-section">
        <div className="home-head">
          <div className="home-head-content">
            <h2>Explore Our Professional Services</h2>
          </div>
          <div className="home-controls">
            <button id="prev" className="home-nav-btn" aria-label="Prev" onClick={() => goService(-1)} disabled={currentService === 0}>‹</button>
            <button id="next" className="home-nav-btn" aria-label="Next" onClick={() => goService(1)} disabled={currentService === services.length - 1}>›</button>
          </div>
        </div>

        <div className="home-slider" ref={servicesSliderRef}>
          <div className="home-track" id="track" ref={trackRef}>
            {services.map((service, index) => (
              <article
                key={index}
                className="home-project-card"
                active={index === currentService ? "true" : undefined}
                onClick={() => activateService(index)}
                onMouseEnter={() => window.matchMedia("(hover:hover)").matches && activateService(index)}
              >
                <img className="home-project-card__bg" src={service.bgUrl} alt={`${service.title} background`} />
                <div className="home-project-card__content">
                  <img className="home-project-card__thumb" src={service.thumbUrl} alt={`${service.title} thumbnail`} />
                  <div>
                    <h3 className="home-project-card__title">{service.title}</h3>
                    <p className="home-project-card__desc">{service.desc}</p>
                    <button className="home-project-card__btn">Details</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="home-features-section">
        <div className="home-section-heading">
          <h2>We Are Here to Grow Your Security Exponentially</h2>
        </div>
        <div className="home-features-container">
          <div className="home-feature-box-wrapper">
            <div className="home-feature-box">
              <div className="home-feature-content">
                <IdentifyIcon />
                <h3>Identify and Prioritize</h3>
                <p>Offer a broad spectrum of capabilities to detect potential threats and devise an action blueprint, ensuring a proactive approach towards cybersecurity.</p>
              </div>
            </div>
          </div>

          <div className="home-feature-box-wrapper">
            <div className="home-feature-box">
              <div className="home-feature-content">
                <RemediateIcon />
                <h3>Remediate and Manage</h3>
                <p>Helps you design and integrate advanced cybersecurity programs informed by roadmaps, regulations and assessments.</p>
              </div>
            </div>
          </div>

          <div className="home-feature-box-wrapper">
            <div className="home-feature-box">
              <div className="home-feature-content">
                <PrepareIcon />
                <h3>Prepare and Optimize</h3>
                <p>Helps you improve your preparation for evolving cyberthreat motivations and capabilities with a multi-year roadmap.</p>
              </div>
            </div>
          </div>

          <div className="home-feature-box-wrapper">
            <div className="home-feature-box">
              <div className="home-feature-content">
                <SupportIcon />
                <h3>One Call Support</h3>
                <p>Assist you in proactive network intrusion dection andrespond 24/7. Assist you in using tabletop exercises, drills, and red teaming to help improve your cybersecurity readiness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW: Pricing Section --- */}
      <section className="home-pricing-section">
        <div className="home-section-heading">
            <h2>Affordable Pricing Plans</h2>
        </div>
        <div className="home-pricing-container">
            {/* Card 1: Basic */}
            <div className="home-pricing-card">
            <div className="home-card-header-wrapper">
                <div className="home-card-header home-basic">
                <h3>BASIC</h3>
                </div>
            </div>
            <div className="home-card-body">
                <h4>Economic</h4>
                <div className="home-price-container">
                <span className="home-price">₹799</span>
                <span className="home-price-details">/Month</span>
                </div>
                <p className="home-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit do.</p>
                <button className="home-select-button">Select</button>
            </div>
            </div>

            {/* Card 2: Premium */}
            <div className="home-pricing-card home-premium">
            <div className="home-card-header-wrapper">
                <div className="home-card-header home-premium-header">
                <h3>PREMIUM</h3>
                </div>
            </div>
            <div className="home-card-body">
                <h4>The Best</h4>
                <div className="home-price-container">
                <span className="home-price">₹1599</span>
                <span className="home-price-details">/Month</span>
                </div>
                <p className="home-description">Nullam blandit malesuada aliquet integer dictum.</p>
                <button className="home-select-button-premium">Select</button>
            </div>
            </div>

            {/* Card 3: Pro */}
            <div className="home-pricing-card">
            <div className="home-card-header-wrapper">
                <div className="home-card-header home-pro">
                <h3>PRO</h3>
                </div>
            </div>
            <div className="home-card-body">
                <h4>Business</h4>
                <div className="home-price-container">
                <span className="home-price">₹2499</span>
                <span className="home-price-details">/Month</span>
                </div>
                <p className="home-description">Praesent eleifend suscipit eleifend incididunt ut labore.</p>
                <button className="home-select-button">Select</button>
            </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;