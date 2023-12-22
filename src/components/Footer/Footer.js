import React from 'react';
import './styles.css'; // Import the CSS file

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
     
      <div>
        <p>&copy; {new Date().getFullYear()} Your Website Name</p>
      </div>
    </footer>
  );
};

