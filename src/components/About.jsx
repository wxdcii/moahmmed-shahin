import { useEffect, useRef, useState } from 'react';
import { FaBrain, FaClinicMedical, FaUserMd, FaHandsHelping, FaAward, FaBookMedical, FaMicroscope } from 'react-icons/fa';
import '../styles/About.css';
import timeline from '../data/TimelineData';

export default function About() {
  const heroRef = useRef();
  const aboutRef = useRef();
  const specializationsRef = useRef();
  const timelineRef = useRef();
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    // Fade in animations for main sections
    const fadeInUp = (ref, transform = 'translateY(30px)', delay = 0) => {
      if (ref.current) {
        ref.current.style.opacity = 0;
        ref.current.style.transform = transform;
        setTimeout(() => {
          ref.current.style.transition = 'all 0.8s ease-out';
          ref.current.style.opacity = 1;
          ref.current.style.transform = 'none';
        }, delay);
      }
    };

    fadeInUp(heroRef);
    fadeInUp(aboutRef, 'translateY(20px)', 200);
    fadeInUp(specializationsRef, 'translateX(-20px)', 400);

    // Intersection Observer for timeline items
    if (timelineRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.dataset.index);
              setVisibleItems((prev) => 
                prev.includes(index) ? prev : [...prev, index]
              );
            }
          });
        },
        { threshold: 0.1 }
      );

      const items = timelineRef.current.querySelectorAll('.about-timeline-item');
      items.forEach((item, index) => {
        item.dataset.index = index;
        observer.observe(item);
      });

      return () => {
        items.forEach(item => observer.unobserve(item));
      };
    }
  }, []);

  const specializations = [
    { icon: <FaUserMd size={28} />, title: 'Preventive Dentistry', desc: 'Cleanings, oral exams, fluoride, and patient education.' },
    { icon: <FaClinicMedical size={28} />, title: 'Restorative Care', desc: 'Fillings, crowns, bridges, and tooth-colored restorations.' },
    { icon: <FaBrain size={28} />, title: 'Cosmetic Dentistry', desc: 'Smile design, whitening, veneers, and aesthetic upgrades.' },
    { icon: <FaMicroscope size={28} />, title: 'Implant & Prosthodontics', desc: 'Guidance on dental implants and long-term oral function.' }
  ];

  return (
    <div className="about-overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1 className="about-hero-title">Mohammad Shahin</h1>
            <p className="about-hero-subtitle">Dental Medicine Doctor</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="about-section">
        <h2 className="about-section-title">About Mohammad</h2>
        <p className="about-section-text">
          Mohammad Shahin is a dental medicine doctor focusing on preventive, restorative, and cosmetic dentistry with a patient-centred, education-first approach. He helps patients make confident choices about oral health while maintaining a warm, trustworthy chairside manner.
        </p>
        <div className="about-status-background">
          <div className="about-stats-grid">
            <div className="about-stat-card">
              <FaAward className="about-stat-icon" size={32} />
              <h3 className="about-stat-title">Patient-Centred</h3>
              <p className="about-stat-desc">Care plans tailored to each smile.</p>
            </div>
            <div className="about-stat-card">
              <FaBookMedical className="about-stat-icon" size={32} />
              <h3 className="about-stat-title">Evidence-Based</h3>
              <p className="about-stat-desc">Education grounded in current dental science.</p>
            </div>
            <div className="about-stat-card">
              <FaUserMd className="about-stat-icon" size={32} />
              <h3 className="about-stat-title">Gentle Care</h3>
              <p className="about-stat-desc">Comfort-focused treatment experience.</p>
            </div>
            <div className="about-stat-card">
              <FaHandsHelping className="about-stat-icon" size={32} />
              <h3 className="about-stat-title">Community Care</h3>
              <p className="about-stat-desc">Advocating dental health awareness for all ages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section ref={specializationsRef} className="about-specializations">
        <div className="about-specializations-container">
          <h2 className="about-specializations-title">Specializations</h2>
          <div className="about-specializations-grid">
            {specializations.map((item, index) => (
              <div key={index} className="about-specialization-card">
                <div className="about-specialization-icon">{item.icon}</div>
                <h3 className="about-specialization-name">{item.title}</h3>
                <p className="about-specialization-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="about-timeline-section">
        <h2 className="about-timeline-title">Career Timeline</h2>
        <div className="about-timeline-container">
          {timeline.map((item, index) => (
            <div 
              key={index} 
              className={`about-timeline-item ${visibleItems.includes(index) ? 'visible' : ''}`}
              data-index={index}
            >
              <p className="about-timeline-year">{item.year}</p>
              <p className="about-timeline-event">{item.event}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
