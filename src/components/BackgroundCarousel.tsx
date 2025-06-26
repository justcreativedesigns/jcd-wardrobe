
import React, { useState, useEffect } from 'react';

const BackgroundCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1920&h=1080&fit=crop'
  ];

  // Auto-advance background carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <div className="absolute inset-0 z-0">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Interior design ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {/* Transparent black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
    </div>
  );
};

export default BackgroundCarousel;
