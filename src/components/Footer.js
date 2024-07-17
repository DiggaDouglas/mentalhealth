import React from 'react';
import logo from '../Assets/WhatsApp Image 2024-06-13 at 22.32.21_7b087006.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src={logo} alt="Logo" style={{ height: '50px' }} />
        <p>&copy; 2024 Lamedaqui Mental Health. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
