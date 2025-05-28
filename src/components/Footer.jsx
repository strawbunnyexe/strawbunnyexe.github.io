// Footer.js
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; 2025 Jennifer Pichardo</p>
        </div>
        
        <div className="footer-socials">
          <ul>
            <li>
              <a href="https://github.com/strawbunnyexe" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/jennifer-pichardo" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

