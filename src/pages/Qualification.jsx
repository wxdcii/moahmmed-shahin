import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Qualification.css';
import qualificationsData from '../data/qualificationsData';

const QualificationAwards = () => {
  return (
    <section className="qualification-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.span 
          className="section-tag"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >💙 My Qualification</motion.span>
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Qualification & Awards
        </motion.h2>
      </motion.div>

     
      <div className="qualification-grid-wrapper">
        <div className="qualification-grid">
          {[...qualificationsData.qualifications, ...qualificationsData.qualifications].map((item, idx) => (
            <div className="qualification-card" key={idx}>
              <div className="uni-name"><h3>{item.institution}</h3></div>
              <div className="degree">{item.degree}</div>
              <div className="duration">{item.duration}</div>
            </div>
          ))}
        </div>
      </div>

      
        
     
    </section>
  );
};

export default QualificationAwards;
