import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'What is Crescentia?',
    answer: 'Crescentia is a 3D event design and planning platform that replaces static sketches with an interactive drag-and-drop studio.',
  },
  {
    question: 'Who is Crescentia for?',
    answer: 'Ideal for event planners, designers, creative agencies, and production teams who need a visual-first, collaborative way to design and present event layouts.',
  },
  {
    question: 'Do I need to know design software to use it?',
    answer: 'Not at all. Crescentia is beginner-friendly, with an intuitive interface that requires no prior design or tech experience.',
  },
  {
    question: 'What kind of events can I plan with Crescentia?',
    answer: 'From weddings and galas to expos and conferences; Crescentia is flexible and scalable for events of any size or style.',
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
      <h2 className='heading'>You’ve got questions. We’ve got answers.</h2>
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
            <hr className="faq-separator" />
          </div>
        ))}
      </div>
    </section>
  );
}
