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

  // 1. Stateful carousel items
  const [carouselItems, setCarouselItems] = useState(features);

  // 2. Track active index closest to center
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(features.length / 2)
  );

  // 3. Rotation direction ref
  const pendingRotation = useRef(null);

  // 4. Debounce timer ref
  const debounceTimer = useRef(null);

  // 5. Vertical wheel → horizontal scroll
  const handleWheel = (e) => {
    const c = containerRef.current;
    if (!c) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      c.scrollBy({ left: e.deltaY, behavior: 'smooth' });
    }
  };

  // 6. Memoized updateActiveIndex
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

  // 7 & 8. Attach scroll listener, define handleScroll and boundaryCheck inside useEffect
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;

    // boundaryCheck moves carouselItems for infinite scroll effect
    const boundaryCheck = () => {
      if (!pendingRotation.current) return;

      if (
        pendingRotation.current === 'right' &&
        activeIndex === carouselItems.length - 1
      ) {
        setCarouselItems((prev) => {
          if (prev.length <= 1) return prev;
          return [...prev.slice(1), prev[0]];
        });
      } else if (
        pendingRotation.current === 'left' &&
        activeIndex === 0
      ) {
        setCarouselItems((prev) => {
          if (prev.length <= 1) return prev;
          return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
        });
      } else {
        pendingRotation.current = null;
      }
    };

    // handleScroll uses latest activeIndex and carouselItems
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

  // 9. Adjust scrollLeft after rotation to make it seamless
  useLayoutEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const gap = 32; // must match CSS gap

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

  // 10. On mount or carouselItems length change, center middle card
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
