import React from 'react';
import useScrollObserver from './ScrollObserver';
import './AdditionalFeatures.css';

import editImg from '../assets/value-1.png';
import designImg from '../assets/value-2.png';
import presentImg from '../assets/value-3.png';

export default function About() {
  const ref = useScrollObserver();
  return (
    <section ref={ref} className="Section" id="about">
      <h2 className="heading">Plan Bold. Present Better.</h2>

      <div className="addfeature-content">
        <div className="addfeature-text">
          <h3>Edit Faster. Approve Sooner.</h3>
          <p>
            No more static PDFs or chaotic email threads. Make real-time changes, get instant feedback, and collaborate live. Crescentia accelerates event revisions and approvals, helping planners focus more on what matters: creativity and experience.
          </p>
        </div>
        <img src={editImg} alt="About Us" className="addfeature-image" />
      </div>

      <div className="addfeature-content reverse">
        <div className="addfeature-text">
          <h3>Present Confidently</h3>
          <p>
            Don’t just describe your event concept - show it. Pitch clients using immersive 3D walkthroughs layered over venue videos. With AR/VR integration, let them explore the full layout virtually, just as it will appear on the big day.
          </p>
        </div>
        <img src={designImg} alt="Design" className="addfeature-image" />
      </div>

      <div className="addfeature-content">
        <div className="addfeature-text">
          <h3>Design Visually</h3>
          <p>
            Bring ideas to life with Crescentia’s real-time 3D event layout builder. From weddings and corporate launches to festivals and expos, our platform lets you drag, drop, and perfect every detail, all before a single item is set up.
          </p>
        </div>
        <img src={presentImg} alt="Presentation" className="addfeature-image" />
      </div>
    </section>
  );
}
