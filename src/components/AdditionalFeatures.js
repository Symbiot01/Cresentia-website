import React from 'react';
import useScrollObserver from './ScrollObserver';
import './AdditionalFeatures.css';

import editImg from '../assets/edit.png';
import designImg from '../assets/design.png';
import presentImg from '../assets/present.png';

export default function About() {
  const ref = useScrollObserver();
  return (
    <section ref={ref} className="Section" id="about">
      <h2 className='heading'>Plan Bold. Present Better.</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>Who We Are</h3>
          <p>
            Crescentia is a design studio dedicated to creating beautiful, functional, and user-centered digital experiences. Our team of passionate designers and developers work collaboratively to bring your vision to life.
          </p>
        </div>
        <img src={editImg} alt="About Us" className="about-image" />
      </div>

      <div className="about-content">
        <img src={designImg} alt="Design" className="about-image" />
        <div className="about-text">
          <h3>Our Vision</h3>
          <p>
            We aim to deliver innovative digital solutions that make an impact and drive success for our clients.
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Our Process</h3>
          <p>
            From initial concepts to final delivery, we collaborate closely with you to ensure everything aligns perfectly with your goals.
          </p>
        </div>
        <img src={presentImg} alt="Presentation" className="about-image" />
      </div>
    </section>
  );
}
