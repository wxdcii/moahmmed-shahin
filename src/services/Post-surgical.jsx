import React from 'react';
import { motion } from 'framer-motion';
import '../styles/post-surgical.css'; 

const PostSurgicalCare = () => (
  <motion.div 
    className="service-detail-page"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className="title">Cosmetic & Restorative Aftercare</h1>
    <p className="description">
      Personalized follow-up for whitening, veneers, crowns, and implant restorations to keep results comfortable and long lasting.
    </p>
    <ul className="benefits-list">
      <li>🔁 Regular fit and comfort checks</li>
      <li>🧴 Sensitivity and hygiene guidance</li>
      <li>📊 Maintenance plans for lasting results</li>
    </ul>
  </motion.div>
);

export default PostSurgicalCare;
