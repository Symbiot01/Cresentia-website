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

  // 1. Keep a stateful array for the carousel order
  const [carouselItems, setCarouselItems] = useState(features);

  // 2. Track which index (0…n−1) is currently closest to the container’s center
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(features.length / 2)
  );

  // 3. Track whether we need to rotate “left” or “right” after scroll settles
  //    ('right' means move first→end; 'left' means move last→front; null means no rotation)
  const pendingRotation = useRef(null);

  // 4. Debounce timer ID
  const debounceTimer = useRef(null);

  // 5. Convert vertical wheel into horizontal scroll
  const handleWheel = (e) => {
    const c = containerRef.current;
    if (!c) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      c.scrollBy({ left: e.deltaY, behavior: 'smooth' });
    }
  };

  // 6. Find which card is closest to container’s horizontal center and update activeIndex
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

  // 7. On scroll, update activeIndex immediately and mark if a boundary is reached
  const handleScroll = () => {
    updateActiveIndex();

    // Determine if we are “at” the first or last card
    // (so that after debouncing, we know which rotation to perform)
    if (activeIndex === carouselItems.length - 1) {
      pendingRotation.current = 'right';
    } else if (activeIndex === 0) {
      pendingRotation.current = 'left';
    } else {
      pendingRotation.current = null;
    }

    // Debounce: wait 100 ms after the last scroll event before actually rotating
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      boundaryCheck();
    }, 100);
  };

  // 8. Only rotate if activeIndex is exactly 0 or exactly lastIndex
  const boundaryCheck = () => {
    if (!pendingRotation.current) return;

    if (
      pendingRotation.current === 'right' &&
      activeIndex === carouselItems.length - 1
    ) {
      // Move first element to the end
      setCarouselItems((prev) => {
        if (prev.length <= 1) return prev;
        return [...prev.slice(1), prev[0]];
      });
      // We keep pendingRotation.current === 'right' so that useLayoutEffect can adjust scrollLeft
    } else if (
      pendingRotation.current === 'left' &&
      activeIndex === 0
    ) {
      // Move last element to the front
      setCarouselItems((prev) => {
        if (prev.length <= 1) return prev;
        return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
      });
      // pendingRotation.current === 'left' for useLayoutEffect adjustment
    } else {
      // If activeIndex changed meanwhile, don’t rotate
      pendingRotation.current = null;
    }
  };

  // 9. After React re‐renders (carouselItems changed), adjust scrollLeft in a layout effect
  useLayoutEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const gap = 32; // MUST match .features-container { gap: 32px; }

    // If we just rotated “right” (first→end), subtract (cardWidth + gap)
    if (pendingRotation.current === 'right') {
      const firstCard = c.querySelector('.feature-card');
      if (firstCard) {
        const cardW = firstCard.offsetWidth;
        c.scrollLeft -= cardW + gap;
      }
      pendingRotation.current = null;
      updateActiveIndex();
    }
    // If we just rotated “left” (last→front), add (cardWidth + gap)
    else if (pendingRotation.current === 'left') {
      const firstCard = c.querySelector('.feature-card');
      if (firstCard) {
        const cardW = firstCard.offsetWidth;
        c.scrollLeft += cardW + gap;
      }
      pendingRotation.current = null;
      updateActiveIndex();
    }
    // Otherwise, nothing to do
  }, [carouselItems, updateActiveIndex]);

  // 10. On mount (and whenever item count changes), center the “middle” card
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

      // Compute scrollLeft so that the middleIndex card is centered:
      const desiredScrollLeft =
        middleIndex * (cardW + gap) - (containerW - cardW) / 2;
      c.scrollLeft = desiredScrollLeft;

      updateActiveIndex();
    });
  }, [carouselItems.length, updateActiveIndex]);

  // 11. Attach scroll & resize listeners
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;

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
  }, [handleScroll, updateActiveIndex, carouselItems.length, activeIndex]);

  return (
    <div className="features-wrapper">
      <div
        className="features-container"
        ref={containerRef}
        onWheel={handleWheel}
      >
        {carouselItems.map((feature, idx) => (
          <div
            key={feature.id}
            className={`feature-card ${idx === activeIndex ? 'active' : ''}`}
            tabIndex="0"
          >
            <div className="image-wrapper">
              <img src={feature.imageUrl} alt={feature.title} loading="lazy" />
            </div>
            <div className="text-wrapper">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
