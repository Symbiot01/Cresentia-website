import React from 'react';
import useScrollObserver from './ScrollObserver';
import './CTA.css';

export default function CTA() {
  const ref = useScrollObserver();
  return (
    <section ref={ref} className="Section" id="cta">
      <h2>Be the first to design the future of events.</h2>
      <button className="button-primary">Join the Waitlist</button>
      <p>Get early access, exclusive previews, and a front-row seat to the new era of event planning.</p>
    </section>
  );
}
