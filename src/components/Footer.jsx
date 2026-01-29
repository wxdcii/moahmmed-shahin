import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight
} from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      
      <div className="footer-container">
    
        <div className="footer-column">
          <h3 className="footer-title">Mohammad Shahin</h3>
          <p className="footer-about">
            Dental medicine professional focused on oral health, cosmetic dentistry, dental implants, and patient education with a friendly, trustworthy approach.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/mohammad-shahin-a2324a32b" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/dds.moshahin/" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/962782667321" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/"><FaArrowRight className="link-icon" /> Home</a></li>
            <li><a href="/about"><FaArrowRight className="link-icon" /> About Mohammad</a></li>
            <li><a href="/blog"><FaArrowRight className="link-icon" /> Blog</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-column">
          <h3 className="footer-title">Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <FaWhatsapp className="contact-icon" />
              <span>
                <strong>WhatsApp:</strong> <a href="https://wa.me/962782667321">+962 78 266 7321</a>
              </span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>
                <strong>Phone:</strong> <a href="tel:+962782667321">+962 78 266 7321</a>
              </span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>
                <strong>Email:</strong> <a href="mailto:mohd.n.shahin@gmail.com">mohd.n.shahin@gmail.com</a>
              </span>
            </li>
          </ul>
        </div>
       
        </div>      
        <div className="custom-divider"></div>
        <div className="footer-bottom-container">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Mohammad Shahin. All Rights Reserved.
          </p>
     
      </div>

      {/* Footer Bottom */}
     
    </footer>
  );
}
