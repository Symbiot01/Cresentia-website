import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">Crescentia</div>
      <div className={`links ${open ? 'open' : ''}`}>
        <a href="#hero">Home</a>
        <a href="#features">Features</a>
        <a href="#cta">Get Started</a>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}