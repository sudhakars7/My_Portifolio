import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
    
    <div className='footer-container'>
    <div className='social-media'>
    <a href="https://www.linkedin.com/in/sudhakar-gudavalli-ase/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/sudhakars7" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCELJg3eVa1tZzyJHE9PxwBg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
    </div>
    <div className="contact-info">
    <p>Email: <a href="mailto:your.email@example.com">sudhakargudavallis7@gmail.com</a></p>
  </div>
      
    </div>
    </footer>
  );
};

export default Footer
