import React from 'react';
import './About.css';
import aboutImage from '../assets/about-us.png'; // Place your image in `src/assets/`

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Team collaboration illustration" />
        </div>
        <div className="about-text">
            <div className="paragraph">
          <p><strong>Crescentia</strong> was created by four college students driven by a shared frustration with the chaotic and outdated event planning process.</p>
          <p>With backgrounds in business and tech, the team united to build a solution that gives planners, designers, and agencies the ability to see their events before they happen. What started as a simple idea quickly evolved into a mission to redefine event planning. Fully remote and self-driven, the team has built Crescentia from the ground up to be an immersive, visual-first platform that brings creativity, collaboration, and clarity into one space.</p>
          <p>It’s a tool designed to change the way the event industry works and it’s just the beginning.</p>
            </div>
          <h2>About Us</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
