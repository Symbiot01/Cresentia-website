import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'What is Crescentia?',
    answer: 'Crescentia is an immersive 3D event design platform that replaces static sketches and guesswork with a drag-and-drop studio.',
  },
  {
    question: 'Who is Crescentia for?',
    answer: 'Event planners, designers, creative agencies, and production teams looking for a visual-first, collaborative way to plan and present event layouts.',
  },
  {
    question: 'Do I need to know design software to use it?',
    answer: 'Not at all. Crescentia was designed to be intuitive and requires zero prior design or tech experience.',
  },
  {
    question: 'What kind of events can I plan with Crescentia?',
    answer: 'Anything — from intimate weddings to large-scale expos. The platform is flexible for any size or style of event.',
  },
  {
    question: 'When is Crescentia launching?',
    answer: 'We’re currently in pre-launch. Join the waitlist for early access!',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2>You’ve got questions. We’ve got answers.</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              <svg
                className={`arrow-icon ${openIndex === index ? 'open' : ''}`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 15.5l-7-7 1.41-1.41L12 12.67l5.59-5.58L19 8.5l-7 7z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <div
              className={`faq-answer ${openIndex === index ? 'visible' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
