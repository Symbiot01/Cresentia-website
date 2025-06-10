import React from 'react';
import './About.css';
import aboutImage from '../assets/about-us.png';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Team collaboration illustration" />
        </div>

        <div className="about-text">
          <p><strong>Crescentia</strong> was created by four college students driven by a shared frustration with the chaotic and outdated event planning process.</p>
          <p>With backgrounds in business and tech, the team united to build a 3D event design platform that gives planners, designers, and agencies the ability to visualize event layouts before they happen. What started as a simple idea quickly evolved into a mission to redefine immersive event planning. Fully remote and self-driven, the team has built Crescentia from the ground up to be a visual-first, collaborative event tool that brings creativity, real-time collaboration, and clarity into one space.</p>
          <p>It’s a tool designed to change the way the event industry works and it’s just the beginning.</p>
        </div>

        <h2 className="about-heading">About Us</h2>
      </div>
    </section>
  );
};

export default About;
