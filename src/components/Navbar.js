import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo_name from '../assets/logo_name.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img src={logo_name} alt="Logo" />
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
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
