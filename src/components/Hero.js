import React, { useState } from 'react';
import useScrollObserver from './ScrollObserver';
import './Hero.css';
import WaitlistForm from './WaitlistForm';
import heroImage from '../assets/page-1.png';

export default function Hero() {
  const ref = useScrollObserver();
  const [showForm, setShowForm] = useState(false);

  // Toggle button → form
  const handleCTAClick = () => {
    setShowForm((prev) => !prev);
  };

  // Passed down to close the form on successful submit
  const handleFormSuccess = () => {
    setShowForm(false);
  };

  return (
    <section ref={ref} className="hero-container" id="hero">
      <div className="hero-content">
        <h1>Design smarter. Plan faster.<br /> Execute flawlessly.</h1>
        <p className="subheadline">
          Welcome to <strong>Crescentia</strong> — your immersive 3D event design platform.
        </p>

         {/*
          4. Conditional rendering here:
            • If showForm is false, show the CTA button
            • If showForm is true, render the WaitlistForm component
        */}
         <div className="cta-wrapper">
          {/* Always render the toggle button, text depends on state */}
          <button
            className="button-primary cta-button"
            onClick={handleCTAClick}
          >
            {showForm
              ? 'Close Waitlist Form'
              : 'Join the Waitlist — Be the first to design the future of events'}
          </button>

          {/* Render the form only when showForm is true */}
          {showForm && <WaitlistForm onSuccess={handleFormSuccess} />}
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Event planning visualization" />
      </div>
    </section>
  );
}
