import React from 'react';
import FeaturesCarousel from './FeaturesCarousel';
import './Features.css';


const featureData = [
  // First set
  { id: 1, imageUrl: require('../assets/feature-1.png') },
  { id: 2, imageUrl: require('../assets/feature-2.png') },
  { id: 3, imageUrl: require('../assets/feature-3.png') },
  { id: 4, imageUrl: require('../assets/feature-4.png') },
  { id: 5, imageUrl: require('../assets/feature-5.png') },
  { id: 6, imageUrl: require('../assets/feature-6.png') },

  // Second set
  { id: 7, imageUrl: require('../assets/feature-1.png') },
  { id: 8, imageUrl: require('../assets/feature-2.png') },
  { id: 9, imageUrl: require('../assets/feature-3.png') },
  { id: 10, imageUrl: require('../assets/feature-4.png') },
  { id: 11, imageUrl: require('../assets/feature-5.png') },
  { id: 12, imageUrl: require('../assets/feature-6.png') },

  // Third set
  { id: 13, imageUrl: require('../assets/feature-1.png') },
  { id: 14, imageUrl: require('../assets/feature-2.png') },
  { id: 15, imageUrl: require('../assets/feature-3.png') },
  { id: 16, imageUrl: require('../assets/feature-4.png') },
  { id: 17, imageUrl: require('../assets/feature-5.png') },
  { id: 18, imageUrl: require('../assets/feature-6.png') },
];


export default function Features() {
  return (
    <div className="features-page">
      <h2 className="features-heading">Our Features</h2>
      <FeaturesCarousel features={featureData} />
    </div>
  );
}
