import React from 'react';
import { motion } from 'framer-motion';
import '../styles/General.css'; 

const GeneralSurgery = () => (
  <motion.div 
    className="service-detail-page"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="title">Comprehensive Dental Care</h1>
    <p className="description">
      Preventive, restorative, and cosmetic dental services focused on comfort, function, and confident smiles. Mohammad Shahin provides gentle, patient-centred plans for every stage of care.
    </p>
    <ul className="benefits-list">
      <li>🦷 Preventive cleanings & exams</li>
      <li>😃 Tooth-colored restorations</li>
      <li>✨ Cosmetic smile enhancements</li>
    </ul>
  </motion.div>
);

export default GeneralSurgery;
