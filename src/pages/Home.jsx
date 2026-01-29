import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.css';
import QualificationAwards from './Qualification';
import { Link } from 'react-router-dom';
import Services_section from './Service-section';

const Home = () => {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsQuoteVisible(!isQuoteVisible);
    }, isQuoteVisible ? 6000 : 1000);

    return () => clearTimeout(timer);
  }, [isQuoteVisible]);

  return (
    <>
      <section className="hero-container">
        <img src="/images/heartbeat.svg" alt="heartbeat" className="heartbeat-line" />

        <div className="hero-content">
          <div className="hero-left">
            <div className="intro-badge">Hi, I’m</div>
            <h1>
              Mohammad Shahin<br />
              <span>Dental Medicine Doctor</span>
            </h1>
            <p>
              Focused on oral health, dental care, and patient education. Serving local & international patients with a
              friendly, trustworthy approach to dentistry and confident smiles.
            </p>
            {/* CTA removed per request */}
          </div>

          <div className="hero-right">
            <div className="doctor-section">
              <div className="doctor-bg-shape"></div>
              <img src="/images/doctor.png" alt="Mohammad Shahin" className="doctor-img" />
            </div>
            <div className="quote-area">
              <div
                className={`quote-box ${isQuoteVisible ? 'slide-in' : 'slide-out'}`}
                onMouseEnter={() => setIsQuoteVisible(true)}
                onMouseLeave={() => setTimeout(() => setIsQuoteVisible(false), 1000)}
              >
                <p>
                  "Every smile deserves clear guidance, gentle care, and a plan that keeps oral health strong for life."
                </p>
                <span>— Mohammad Shahin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-schedule-section">
        <div className="container">
          <div className="about-schedule-grid">
            <div className="schedule-card">
              <h3>Professional Focus</h3>
              <div className="divider"></div>
              <ul className="schedule-item">
                <li>Preventive & patient-centered dental care</li>
                <li>Oral health education & awareness</li>
                <li>Evidence-based treatment planning</li>
                <li>Gentle, communication-driven approach</li>
              </ul>
              <div className="social-row">
                <a href="tel:+962782667321" className="social-link">Call me</a>
                <a href="https://wa.me/962782667321" target="_blank" rel="noreferrer" className="social-link">WhatsApp me</a>
              </div>
            </div>

              <div className="about-details">
              <div className="about-badge">💙 My Journey</div>
              <p>
                I'm Mohammad Shahin, a dental medicine doctor focused on oral health, dental
                care, and patient education. My approach is patient-centred and prevention-first, helping people
                understand their options while creating healthy, confident smiles.
              </p>
              <p>
                From routine hygiene to cosmetic dentistry and dental implant guidance, I focus on clear communication,
                gentle care, and evidence-based plans that keep patients involved every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Services_section />
      <QualificationAwards />
    </>
  );
};

export default Home;
