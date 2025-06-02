import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo_name from '../assets/logo_name.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
  }, [open]);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#hero">
          <img src={logo_name} alt="Crescentia logo" />
          <span className="sr-only">Crescentia</span>
        </a>
      </div>
      <div className={`links ${open ? 'open' : ''}`}>
        <a href="#hero">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
      </div>
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
