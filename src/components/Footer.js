import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo_name.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left side: Logo + Email */}
        <div className="footer-left">
          <img src={logo} alt="Crescentia Logo" className="footer-logo" />
          <p className="footer-email">
            Contact us:{' '}
            <a href="mailto:crescentia@gmail.com">crescentia@gmail.com</a>
          </p>
        </div>

        {/* Right side: Social Icons */}
        <div className="footer-right">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-icon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
