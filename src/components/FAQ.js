import React from 'react';
import useScrollObserver from './ScrollObserver';
import './FAQ.css';

export default function FAQ() {
  const ref = useScrollObserver();
  return (
    <section ref={ref} className="Section" id="faq">
      <h2>You’ve got questions. We’ve got answers.</h2>
      <dl>
        <dt>What is Crescentia?</dt>
        <dd>Crescentia is an immersive 3D event design platform that replaces static sketches and guesswork with a drag-and-drop studio.</dd>
        <dt>Who is Crescentia for?</dt>
        <dd>Event planners, designers, creative agencies, and production teams looking for a visual-first, collaborative way to plan and present event layouts.</dd>
        <dt>Do I need to know design software to use it?</dt>
        <dd>Not at all. Crescentia was designed to be intuitive and requires zero prior design or tech experience.</dd>
        <dt>What kind of events can I plan with Crescentia?</dt>
        <dd>Anything — from intimate weddings to large-scale expos. The platform is flexible for any size or style of event.</dd>
        <dt>When is Crescentia launching?</dt>
        <dd>We’re currently in pre-launch. Join the waitlist for early access!</dd>
      </dl>
    </section>
  );
}
