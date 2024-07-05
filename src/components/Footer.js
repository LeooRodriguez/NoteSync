import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-buttons">
        <a href="https://www.linkedin.com/in/leonardo-rodr%C3%ADguez-4560b4224/" target="_blank" rel="noopener noreferrer" className="footer-button linkedin">
          LinkedIn
        </a>
        <a href="https://github.com/LeooRodriguez" target="_blank" rel="noopener noreferrer" className="footer-button github">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
