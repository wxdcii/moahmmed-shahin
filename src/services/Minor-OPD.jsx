import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Miner.css';

const MinorOPDProcedures = () => (
  <motion.div 
    className="service-detail-page"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="title">Restorative Dentistry</h1>
    <p className="description">
      Tooth-colored fillings, crowns, and bridges that restore function and aesthetics with minimal discomfort.
    </p>
    <ul className="benefits-list">
      <li>🦷 Conservative, aesthetic restorations</li>
      <li>🛠️ Durable materials tailored to your bite</li>
      <li>🙂 Comfort-focused chairside experience</li>
    </ul>
  </motion.div>
);

export default MinorOPDProcedures;
