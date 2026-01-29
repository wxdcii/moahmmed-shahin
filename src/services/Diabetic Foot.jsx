import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ServiceDetail.css';

const DiabeticFootSurgery = () => {
  return (
    <motion.div 
      className="service-detail-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="title">Preventive Dentistry</h1>
      <p className="description">
        Comprehensive cleanings, exams, fluoride, and sealants designed to keep teeth healthy and prevent future dental issues. Every visit includes clear guidance on home care and oral health habits.
      </p>
      <ul className="benefits-list">
        <li>🦷 Thorough cleanings & polishing</li>
        <li>🛡️ Fluoride and sealants for protection</li>
        <li>📘 Personalized home-care education</li>
      </ul>
    </motion.div>
  );
};

export default DiabeticFootSurgery;
