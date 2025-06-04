import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from 'react';
import './FeaturesCarousel.css';

export default function FeaturesCarousel({ features }) {
  const containerRef = useRef(null);
  const [carouselItems, setCarouselItems] = useState(features);
  const [activeIndex, setActiveIndex] = useState(Math.floor(features.length / 2));
  const pendingRotation = useRef(null);
  const debounceTimer = useRef(null);

  // Horizontal scroll on vertical wheel
  const handleWheelManual = useCallback((e) => {
    const c = containerRef.current;
    if (!c) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      c.scrollBy({ left: e.deltaY, behavior: 'smooth' });
    }
  }, []);

  // Determine closest card to center
  const updateActiveIndex = useCallback(() => {
    const c = containerRef.current;
    if (!c) return;

    const rect = c.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;

    let closest = 0;
    let minDist = Infinity;
    const cards = c.querySelectorAll('.feature-card');

    cards.forEach((cardNode, idx) => {
      const r = cardNode.getBoundingClientRect();
      const cardCenter = r.left + r.width / 2;
      const dist = Math.abs(centerX - cardCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = idx;
      }
    });

    setActiveIndex(closest);
  }, []);

  // Scroll and boundary logic
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;

    const boundaryCheck = () => {
      if (!pendingRotation.current) return;

      if (
        pendingRotation.current === 'right' &&
        activeIndex === carouselItems.length - 1
      ) {
        setCarouselItems((prev) => [...prev.slice(1), prev[0]]);
      } else if (
        pendingRotation.current === 'left' &&
        activeIndex === 0
      ) {
        setCarouselItems((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
      } else {
        pendingRotation.current = null;
      }
    };

    const handleScroll = () => {
      updateActiveIndex();

      if (activeIndex === carouselItems.length - 1) {
        pendingRotation.current = 'right';
      } else if (activeIndex === 0) {
        pendingRotation.current = 'left';
      } else {
        pendingRotation.current = null;
      }

      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
      debounceTimer.current = setTimeout(() => {
        boundaryCheck();
      }, 100);
    };

    updateActiveIndex();
    c.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveIndex);

    return () => {
      c.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveIndex);
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [activeIndex, carouselItems.length, updateActiveIndex]);

  // Adjust scroll to maintain seamless transition
  useLayoutEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const gap = 32;

    if (pendingRotation.current === 'right') {
      const firstCard = c.querySelector('.feature-card');
      if (firstCard) {
        const cardW = firstCard.offsetWidth;
        c.scrollLeft -= cardW + gap;
      }
      pendingRotation.current = null;
      updateActiveIndex();
    } else if (pendingRotation.current === 'left') {
      const firstCard = c.querySelector('.feature-card');
      if (firstCard) {
        const cardW = firstCard.offsetWidth;
        c.scrollLeft += cardW + gap;
      }
      pendingRotation.current = null;
      updateActiveIndex();
    }
  }, [carouselItems, updateActiveIndex]);

  // Initial center scroll
  useEffect(() => {
    const c = containerRef.current;
    if (!c || carouselItems.length === 0) return;

    requestAnimationFrame(() => {
      const firstCard = c.querySelector('.feature-card');
      if (!firstCard) return;

      const gap = 32;
      const cardW = firstCard.offsetWidth;
      const containerW = c.offsetWidth;
      const middleIndex = Math.floor(carouselItems.length / 2);

      const desiredScrollLeft =
        middleIndex * (cardW + gap) - (containerW - cardW) / 2;
      c.scrollLeft = desiredScrollLeft;

      updateActiveIndex();
    });
  }, [carouselItems.length, updateActiveIndex]);

  // Attach non-passive wheel listener manually
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;

    c.addEventListener('wheel', handleWheelManual, { passive: false });
    return () => c.removeEventListener('wheel', handleWheelManual);
  }, [handleWheelManual]);

  return (
    <div className="features-wrapper">
      <div className="features-container" ref={containerRef}>
        {carouselItems.map((feature, idx) => (
          <div
            key={feature.id}
            className={`feature-card ${idx === activeIndex ? 'active' : ''}`}
            tabIndex="0"
          >
            <div className="image-wrapper">
              <img
                src={feature.imageUrl}
                alt={feature.title}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
