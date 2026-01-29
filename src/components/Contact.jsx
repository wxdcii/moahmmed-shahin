import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane
} from 'react-icons/fa';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with Mohammad Shahin for dental care and consultations</p>
        </div>
      </section>

      {/* Contact Grid */}
      <div className="contact-container">
        {/* Contact Form */}
        <section className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span className="input-highlight"></span>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="input-highlight"></span>
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <span className="input-highlight"></span>
            </div>

            <div className="form-group">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select Subject</option>
                <option value="appointment">Appointment Booking</option>
                <option value="consultation">Second Opinion</option>
                <option value="general">General Inquiry</option>
                <option value="billing">Billing Question</option>
              </select>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <span className="input-highlight"></span>
            </div>

            <button type="submit" className="submit-btn">
              Send Message <FaPaperPlane className="send-icon" />
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <section className="contact-info-section">
          <h2>Contact Information</h2>
          
          <div className="contact-info-card">
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Serving local & international patients.<br />Clinic location shared upon appointment confirmation.</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+10000000000">+1 (000) 000-0000</a><br />
                  <a href="https://wa.me/10000000000">WhatsApp Consults</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:care@mohammadshahin.com">care@mohammadshahin.com</a><br />
                  <a href="mailto:appointments@mohammadshahin.com">appointments@mohammadshahin.com</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-content">
                <h3>Working Hours</h3>
                <p>
                  Monday-Friday: 9AM - 6PM<br />
                  Saturday-Sunday: 9AM - 6PM<br />
                  Emergency: 24/7
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div className="map-container">
            <iframe 
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789012!2d77.12345678901234!3d12.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
    </>
  );
}
