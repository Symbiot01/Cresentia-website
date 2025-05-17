import React from 'react';
import useScrollObserver from './ScrollObserver';
import './Hero.css';

export default function Hero() {
  const ref = useScrollObserver();
  return (
    <section ref={ref} className="Section" id="hero">
      <h1>Design smarter. Plan faster. Execute flawlessly.</h1>
      <p className="subheadline">Welcome to Crescentia — your immersive 3D event design platform.</p>
      <p>
        The best events begin long before guests arrive.<br />
        They start in the mind of a planner — visualizing every chair, every light, every detail.<br /><br />
        But until now, the tools just couldn’t keep up with that vision.<br /><br />
        Crescentia replaces static sketches and endless guesswork with a drag-and-drop 3D design studio tailored for event creators. Whether you’re building a wedding in Tuscany or a trade show in Berlin, Crescentia lets you visualize it before it’s real — and get every stakeholder aligned, fast.
      </p>
      <button className="button-primary">Join the Waitlist — Be the first to design the future of events</button>
    </section>
  );
}
