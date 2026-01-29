import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Emergency.css';

const EmergencyWoundCare = () => (
  <motion.div 
    className="service-detail-page"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="title">Emergency Dental Care</h1>
    <p className="description">
      Same-day support for toothaches, fractures, and urgent infections with gentle pain relief and stabilization.
    </p>
    <ul className="benefits-list">
      <li>⏱ Rapid pain management</li>
      <li>🦷 Stabilization of chipped or broken teeth</li>
      <li>🛡️ Infection control and follow-up plan</li>
    </ul>
  </motion.div>
);

export default EmergencyWoundCare;
