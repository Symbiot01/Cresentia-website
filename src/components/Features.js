import React from 'react';
import useScrollObserver from './ScrollObserver';
import './Features.css';

export default function Features() {
  const ref = useScrollObserver();
  return (
    <section ref={ref} className="Section" id="features">
      <h2>Where creative flow meets precision planning.</h2>
      <p>
        Imagine planning an event without back-and-forth emails, hand-drawn layouts, or “just trust me” presentations.<br />
        Imagine showing your client their event — before it’s built.<br /><br />
        With Crescentia, that’s no longer a dream. It’s your new workflow.
      </p>
      <ul>
        <li><strong>3D Drag-and-Drop Design Studio</strong><br />Build layouts visually, just like you imagine them. Place objects, shift angles, and adjust spacing with ease.</li>
        <li><strong>Real-Time Visualization & Editing</strong><br />See changes happen as you make them. No render delays. No confusion. Just instant clarity.</li>
        <li><strong>Curated Prop & Decor Library</strong><br />Use pre-built assets or upload your own. A growing catalog for every theme, vibe, and venue.</li>
        <li><strong>Seamless Team Collaboration</strong><br />Work together in one shared workspace. Designers, planners—all synced in real-time.</li>
        <li><strong>Fast Sharing & Approvals</strong><br />Present visually. Approve confidently. No more misunderstood briefs or delayed feedback.</li>
        <li><strong>No-Training Dashboard</strong><br />Simple. Intuitive. Frustration-free. Designed for planners, not engineers.</li>
      </ul>
    </section>
  );
}
