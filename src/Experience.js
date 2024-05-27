
import React from 'react';
import './Experience.css';
import './Animations.css'; 
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaTasks } from 'react-icons/fa';

const Experience = () => {
  return (
    <section className="experience-section animated fadeInUp">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-content">
        <div className="job">
          <FaBriefcase className="job-icon" />
          <div className="job-details">
            <h3>Associate Software Engineer</h3>
            <h4>Napier Healthcare Solutions (India) Pvt. Ltd</h4>
            <p className="job-duration"><FaCalendarAlt className="icon" /> Mar 2022 - Apr 2023</p>
            <p className="job-location"><FaMapMarkerAlt className="icon" /> Hyderabad, India</p>
            <ul className="job-responsibilities">
              <li><FaTasks className="icon" /> Developed a custom dashboard for user management, improving efficiency by 30%.</li>
              <li><FaTasks className="icon" /> Collaborated with designers, back-end developers, and stakeholders weekly to ensure seamless UI integration.</li>
              <li><FaTasks className="icon" /> Utilized fetch to implement API services and integrated third-party NPM packages.</li>
              <li><FaTasks className="icon" /> Spearheaded migration from AngularJS to ReactJS, improving performance and maintainability by 30%.</li>
              <li><FaTasks className="icon" /> Developed multiple modules including Doctor Accounting, Billing, and Nursing Station, contributing up to 40%.</li>
              <li><FaTasks className="icon" /> Designed and implemented a user-friendly leaves screen within the user module.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
