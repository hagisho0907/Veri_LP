'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Card {
  id: number;
  image: string;
  title: string;
}

interface SmallCardCarouselProps {
  reasonNumber?: 1 | 3;
}

const SmallCardCarousel: React.FC<SmallCardCarouselProps> = ({ reasonNumber = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const cards: Card[] = reasonNumber === 1 ? [
    { id: 1, image: '/images/reason/1/1-1.PNG', title: 'Akihabara Model Course' },
    { id: 2, image: '/images/reason/1/1-2.PNG', title: 'Recommended Lunch Options' },
  ] : [
    { id: 1, image: '/images/reason/3/3-1.PNG', title: 'Save Money Guide' },
    { id: 2, image: '/images/reason/3/3-2.PNG', title: 'Deeper Experience Tips' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="carousel-container relative w-full max-w-[300px] mx-auto h-[450px] flex items-center justify-center" style={{touchAction: 'pan-y'}}>
      {/* Cards stack */}
      <div className="relative w-56 h-[400px]">
        {cards.map((card, index) => {
          const offset = (index - currentIndex + cards.length) % cards.length;
          const isActive = offset === 0;
          const isNext = offset === 1;
          
          return (
            <motion.div
              key={card.id}
              className="absolute inset-0"
              animate={{
                x: isNext ? 30 : 0,
                y: isNext ? 10 : 0,
                scale: isActive ? 1 : 0.95,
                opacity: isActive ? 1 : 0.6,
                rotate: isNext ? 8 : 0,
                zIndex: isActive ? 20 : 10,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              onClick={isActive ? undefined : () => setCurrentIndex(index)}
              style={{ cursor: isActive ? 'default' : 'pointer' }}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full h-full border-4 border-yellow-400">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-50"
        aria-label="Previous card"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-50"
        aria-label="Next card"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-brand-red w-6' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SmallCardCarousel;