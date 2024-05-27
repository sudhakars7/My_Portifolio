
import React from 'react';
import './Skills.css';
import './Animations.css'; 
import { FaReact, FaNodeJs,FaDatabase , FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiMysql, SiKubernetes, SiJenkins } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="skills-section animated fadeInUp">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-content">
        <div className="skill">
          <FaReact className="skill-icon" />
          <h3>Frontend Development</h3>
          <p>React,HTML, CSS, JavaScript</p>
        </div>
        <div className="skill">
          <FaNodeJs className="skill-icon" />
          <h3>Backend Development</h3>
          <p>Node.js, Express,core java,spring boot </p>
        </div>
        <div className="skill">
        <FaDatabase className="skill-icon" />
        <h3>Databases</h3>
        <p>MongoDB, SQL</p>
      </div>
        <div className="skill">
          <FaGitAlt className="skill-icon" />
          <h3>Other Skills</h3>
          <p>Git,GitHub Agile Methodologies, Jira</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
