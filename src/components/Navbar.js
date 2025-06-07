import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo_name from '../assets/logo_name.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setContactOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img src={logo_name} alt="Logo" />
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={closeMenu} className={menuOpen ? 'mobile-link' : ''}>Home</a>
          <a href="#features" onClick={closeMenu} className={menuOpen ? 'mobile-link' : ''}>Features</a>
          <a href="#about" onClick={closeMenu} className={menuOpen ? 'mobile-link' : ''}>About</a>
          <a href="#faq" onClick={closeMenu} className={menuOpen ? 'mobile-link' : ''}>FAQ</a>

          <div className={`contact-us-container ${menuOpen ? 'mobile-link' : ''}`}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setContactOpen(!contactOpen);
              }}
            >
              Contact Us
            </a>
            {contactOpen && (
              <div className={`contact-dropdown ${menuOpen ? 'mobile-link' : ''}`}>
                <a href="https://x.com/Crescentia_org" target="_blank" rel="noopener noreferrer" className="contact-link">Twitter</a>
                <a href="https://www.instagram.com/crescentia.digital/" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a>
                <a href="https://www.linkedin.com/company/crescentiadigital" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
                <a href="mailto:info.crescentia.digital@gmail.com" className="contact-link">Email</a>
              </div>
            )}
          </div>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
}
