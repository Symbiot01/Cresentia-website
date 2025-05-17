// src/components/Footer.js
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h4>Get in Touch</h4>
        <p>Email: <a href="mailto:hello@crescentia.design">hello@crescentia.design</a></p>
      </div>

      <div className="footer-links">
        <h4>Quick Links</h4>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#cta">Get Started</a>
        <a href="#faq">FAQ</a>
        <a href="#privacy">Privacy Policy</a>
      </div>

      <div className="footer-social">
        <h4>Follow Us</h4>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Crescentia. All rights reserved.
      </div>
    </footer>
);
}
