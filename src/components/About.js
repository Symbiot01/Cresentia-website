import React from 'react';
import useScrollObserver from './ScrollObserver';
import './About.css';

export default function About() {
  const ref = useScrollObserver();
  return (
    <section ref={ref} className="Section" id="about">
      <h2>About Us</h2>
      <p>
        Crescentia was created by four college students driven by a shared frustration with the chaotic and outdated event planning process. With backgrounds in business and tech, the team united to build a solution that gives planners, designers, and agencies the ability to see their events before they happen. What started as a simple idea quickly evolved into a mission to redefine event planning. Fully remote and self-driven, the team has built Crescentia from the ground up to be an immersive, visual-first platform that brings creativity, collaboration, and clarity into one space. It’s a tool designed to change the way the event industry works — and it’s just the beginning.
      </p>
    </section>
  );
}
