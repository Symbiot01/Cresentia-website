import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
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
            <a href="mailto:info.crescentia.digital@gmail.com">info.crescentia.digital@gmail.com</a>
          </p>
        </div>

        {/* Right side: Social Icons */}
        <div className="footer-right">
          <a
            href="https://www.linkedin.com/company/crescentiadigital"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="footer-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/crescentia.digital/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="footer-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/Crescentia_org" // Replace with actual handle
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="footer-icon"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
