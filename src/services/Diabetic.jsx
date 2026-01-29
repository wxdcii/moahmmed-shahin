import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Diabetic.css'; // Assuming you have a CSS file for styles
const DiabeticUlcerManagement = () => (
  <motion.div 
    className="service-detail-page"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="title">Dental Implant Planning</h1>
    <p className="description">
      Guidance on implant readiness, bone support, and long-term prosthetic options to restore function and confidence, coordinated with trusted implant partners.
    </p>
    <ul className="benefits-list">
      <li>🦷 Implant suitability assessments</li>
      <li>🗺️ Treatment roadmap & timelines</li>
      <li>🧭 Maintenance and aftercare guidance</li>
    </ul>
  </motion.div>
);

export default DiabeticUlcerManagement;
