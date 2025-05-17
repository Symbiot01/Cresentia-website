import React from 'react';
import useScrollObserver from './ScrollObserver';
import './Features.css';

const featuresData = [
  {
    title: '3D Drag-and-Drop Design Studio',
    description: 'Build layouts visually, just like you imagine them. Place objects, shift angles, and adjust spacing with ease.',
  },
  {
    title: 'Real-Time Visualization & Editing',
    description: 'See changes happen as you make them. No render delays. No confusion. Just instant clarity.',
  },
  {
    title: 'Curated Prop & Decor Library',
    description: 'Use pre-built assets or upload your own. A growing catalog for every theme, vibe, and venue.',
  },
  {
    title: 'Seamless Team Collaboration',
    description: 'Work together in one shared workspace. Designers, planners—all synced in real-time.',
  },
  {
    title: 'Fast Sharing & Approvals',
    description: 'Present visually. Approve confidently. No more misunderstood briefs or delayed feedback.',
  },
  {
    title: 'No-Training Dashboard',
    description: 'Simple. Intuitive. Frustration-free. Designed for planners, not engineers.',
  },
];

export default function Features() {
  const ref = useScrollObserver();

  return (
    <section ref={ref} className="Section Features" id="features">
      <h2>Where creative flow meets precision planning.</h2>
      <p>
        Imagine planning an event without back-and-forth emails, hand-drawn layouts, or “just trust me” presentations.<br />
        Imagine showing your client their event — before it’s built.<br /><br />
        With Crescentia, that’s no longer a dream. It’s your new workflow.
      </p>
      <div className="FeaturesGrid">
        {featuresData.map((feature, index) => (
          <div key={index} className="FeatureCard">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

