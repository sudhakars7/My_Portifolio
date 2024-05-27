
import React from 'react';
import './Contact.css';
import './Animations.css'; 
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-content">
        <div className="contact-options">
          <div className="contact-option">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:youremail@example.com">sudhakargudavallis7@gmail.com</a>
          </div>
          <div className="contact-option">
            <FaPhone className="contact-icon" />
            <span>+91 8340077001</span>
          </div>
          <div className="contact-option">
            <FaWhatsapp className="contact-icon" />
            <span>+91 8340077001</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
