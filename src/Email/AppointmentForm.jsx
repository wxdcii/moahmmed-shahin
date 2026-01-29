import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/AppointmentForm.css';

const AppointmentForm = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const userData = {
      name: form.current.name.value,
      email: form.current.email.value,
      title: form.current.title.value,
      message: form.current.message.value || 'No additional message provided',
    };

    
    emailjs.sendForm(
      'service_uapfgjq',
      'template_wlox6ud',
      form.current,
      'hs3C69LVPswM8pJVh'
    ).then(
      (result) => {
        console.log("Appointment sent to doctor:", result.text);

        
        emailjs.send(
          'service_uapfgjq',
          'template_2ckfqej',
          userData,
          'hs3C69LVPswM8pJVh'
        ).then(() => {
          console.log("Auto-reply sent to user.");
        }).catch((err) => {
          console.error("Auto-reply failed:", err.text);
        });

        alert("Appointment request sent successfully!");
        setSubmitted(true);
        form.current.reset();
      },
      (error) => {
        console.error("Appointment send error:", error.text);
        alert("Failed to send appointment. Please try again.");
      }
    );
  };

  return (
    <section className="appointment-section">
      <h2>Book an Appointment</h2>
      <form className="appointment-form" ref={form} onSubmit={sendEmail}>
        <div className="form-grid">
          <div>
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="text" name="title" placeholder="Subject (e.g. Appointment with Mohammad Shahin)" required />
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
          <div>
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <select name="service" required>
              <option value="">Select Service</option>
              <option value="Diabetic Foot Surgery">Diabetic Foot Surgery</option>
              <option value="General Surgery">General Surgery</option>
              <option value="Emergency Wound Care">Emergency Wound Care</option>
              <option value="Minor OPD Procedures">Minor OPD Procedures</option>
              <option value="Post-Surgical Care & Dressing">Post-Surgical Care & Dressing</option>
            </select>
            <input type="date" name="date" required />
          </div>
        </div>
        <textarea name="message" placeholder="Additional message..." rows="4" />
        <button type="submit">Book Appointment</button>
      </form>
    </section>
  );
};

export default AppointmentForm;
