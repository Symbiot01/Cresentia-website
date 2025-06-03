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
            No more static PDFs or back-and-forth chaos. Make quick changes, get instant feedback, and collaborate live. Crescentia speeds up revisions and approvals, giving you more time to focus on what matters: creativity.
          </p>
        </div>
        <img src={editImg} alt="About Us" className="addfeature-image" />
      </div>

      <div className="addfeature-content reverse">
        <div className="addfeature-text">
          <h3>Present Confidently</h3>
          <p>
            Don’t just explain your vision instead show it. Pitch to clients with high-quality visual walkthroughs. Upload your venue video and see your design layered directly into it. Let clients view it through AR or VR, exactly how it will feel on the day.
          </p>
        </div>
        <img src={designImg} alt="Design" className="addfeature-image" />
      </div>

      <div className="addfeature-content">
        <div className="addfeature-text">
          <h3>Design Visually</h3>
          <p>
            Go from ideas to immersive layouts without lifting a hammer. With Crescentia, you can drag, drop, and arrange your event space in real-time 3D. Whether it’s a wedding, a launch, or a gala, your full layout comes to life, before a single setup begins.
          </p>
        </div>
        <img src={presentImg} alt="Presentation" className="addfeature-image" />
      </div>
    </section>
  );
}
