import React, { useState } from 'react';
import useScrollObserver from './ScrollObserver';
import './Hero.css';
import WaitlistForm from './WaitlistForm';
import heroImage from '../assets/hero-visual.png';

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
        <h1>Design smarter. Plan faster. Execute flawlessly.</h1>
        <p className="subheadline">Welcome to Crescentia — your immersive 3D event design platform.</p>
        <p>
          The best events begin long before guests arrive.<br />
          They start in the mind of a planner — visualizing every chair, every light, every detail.<br />
          But until now, the tools just couldn’t keep up with that vision.<br />
          Crescentia replaces static sketches and endless guesswork with a drag-and-drop 3D design studio tailored for event creators. Whether you’re building a wedding in Tuscany or a trade show in Berlin, Crescentia lets you visualize it before it’s real — and get every stakeholder aligned, fast.
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
