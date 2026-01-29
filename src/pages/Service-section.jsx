import '../styles/ServicesSection.css';
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import services from '../data/servicesData';


const Services_section = () => {
  return (
    <section className="services-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.span 
          className="section-tag" 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >💙 Services I Provide</motion.span>
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Dental Services I Provide
        </motion.h2>
      </motion.div>

      <div className="services-selection-grid">
        {services.map((service, idx) => (
          <motion.div
            className="service-selection-card" // fixed spelling
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.15)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <span></span>
            <div className="content">
              <div className="icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="read-more">READ MORE</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services_section;
