import { useEffect, useRef } from 'react';
import { 
  FaTooth,
  FaClinicMedical, 
  FaSmile,
  FaHeartbeat,
  FaUserMd
} from 'react-icons/fa';
import '../styles/Services.css';
import { Link } from 'react-router-dom';

export default function Services() {
  const servicesRef = useRef([]);
  const addToRefs = el => {
    if (el && !servicesRef.current.includes(el)) {
      servicesRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, { threshold: 0.2 });

    servicesRef.current.forEach(el => {
      observer.observe(el);
    });

    return () => {
      servicesRef.current.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const services = [
    {
      icon: <FaTooth size={40} />,
      title: "Preventive & Oral Hygiene",
      description: "Cleanings, exams, fluoride treatments, and patient education for lifelong oral health.",
      items: [
        "Comprehensive check-ups",
        "Scaling & polishing",
        "Sealants and fluoride",
        "Personalized home-care plans"
      ]
    },
    {
      icon: <FaClinicMedical size={40} />,
      title: "Restorative Dentistry",
      description: "Tooth-colored fillings, crowns, bridges, and functional smile restoration.",
      items: [
        "Composite restorations",
        "Crowns & bridges",
        "Inlays / onlays",
        "Bite rehabilitation"
      ]
    },
    {
      icon: <FaSmile size={40} />,
      title: "Cosmetic Dentistry",
      description: "Smile design, whitening, veneers, and aesthetic contouring for confident smiles.",
      items: [
        "Professional whitening",
        "Porcelain / composite veneers",
        "Smile makeovers",
        "Minor aesthetic recontouring"
      ]
    },
    {
      icon: <FaHeartbeat size={40} />,
      title: "Emergency & Pain Relief",
      description: "Gentle, prompt care for dental emergencies and urgent pain management.",
      items: [
        "Toothache relief",
        "Chipped / broken tooth care",
        "Infection control",
        "Same-day urgent visits"
      ]
    },
    {
      icon: <FaTooth size={40} />,
      title: "Implant & Prosthetic Guidance",
      description: "Planning for dental implants and long-term oral function with trusted partners.",
      items: [
        "Implant readiness assessments",
        "Bone and soft-tissue planning",
        "Prosthetic options review",
        "Maintenance education"
      ]
    },
    {
      icon: <FaUserMd size={40} />,
      title: "Patient Education",
      description: "Workshops and 1:1 guidance on oral health, dental care, and preventive habits.",
      items: [
        "Nutrition for oral health",
        "Home hygiene techniques",
        "Post-procedure care",
        "Family dental education"
      ]
    }
  ];

  return (
    <div className="services-page">
      <section ref={el => addToRefs(el)} className="services-hero">
        <div className="services-hero-content">
          <h1>Our Dental Services</h1>
          <p>Friendly, evidence-based care for healthy, confident smiles</p>
        </div>
      </section>
      <section className="services-main-container">
        <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => addToRefs(el)}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-items">
                {service.items.map((item, i) => (
                  <li key={i}>
                    <FaUserMd className="item-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="service-cta">
                Learn More
                <span className="hover-effect"></span>
              </button>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section ref={el => addToRefs(el)} className="services-cta">
        <h2>Ready to Discuss Your Dental Options?</h2>
        <p>Schedule a consultation with Mohammad Shahin today</p>
        <button className="apl-button pulse">
         <Link to="/appointment" >Book Appointment </Link>
        </button>
      </section>
    </div>
  );
}
