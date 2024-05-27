
import React from 'react';
import './Project.css'

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>TODO-APP</h3>
          <p>
            Created a robust todo management web application using React.js and Node.js. Integrated MongoDB
            for seamless data storage and retrieval, ensuring scalability. Implemented user-friendly features such as real-time task
            updates and deletion functionality. Demonstrated proficiency in front-end and back-end development, delivering a
            dynamic and efficient solution for task management.
          </p>
          <a href="https://github.com/sudhakars7/MERN-APP" target="_blank" rel="noopener noreferrer" className="project-link">Try it here</a>
        </div>
        <div className="project-card">
          <h3>Digital Clock</h3>
          <p>
            Developed a digital clock web application using React.js, featuring real-time updates and customizable
            time formats. Ensured cross-device compatibility and internationalization support, while implementing robust error
            handling mechanisms. Delivered the project within deadlines, receiving positive feedback for its intuitive design and
            smooth performance.
          </p>
          <a href="https://github.com/sudhakars7/MERN-APP" target="_blank" rel="noopener noreferrer" className="project-link">Try it here</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
