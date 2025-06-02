import React from 'react';
import FeaturesCarousel from './FeaturesCarousel';
import './Features.css'; // Optional: page‐level CSS

const featureData = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/400x225.png?text=Feature+1',
    title: 'Feature One',
    description: 'This is the first feature description.',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/400x225.png?text=Feature+2',
    title: 'Feature Two',
    description: 'This is the second feature description.',
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/400x225.png?text=Feature+3',
    title: 'Feature Three',
    description: 'This is the third feature description.',
  },
  {
    id: 4,
    imageUrl: 'https://via.placeholder.com/400x225.png?text=Feature+4',
    title: 'Feature Four',
    description: 'This is the fourth feature description.',
  },
  {
    id: 5,
    imageUrl: 'https://via.placeholder.com/400x225.png?text=Feature+5',
    title: 'Feature Five',
    description: 'This is the fifth feature description.',
  },
];

export default function Features() {
  return (
    <div
      className="features-page">
      <h2
        className="features-heading"      >
        Our Features
      </h2>
      <FeaturesCarousel features={featureData} />
    </div>
  );
}
