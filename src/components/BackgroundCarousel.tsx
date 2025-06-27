
import React, { useState, useEffect } from 'react';

const BackgroundCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    '/lovable-uploads/73641863-3569-4d16-b855-9099c7bae216.png',
    '/lovable-uploads/324ac00f-fc6e-4bd4-b861-950a793ddede.png',
    '/lovable-uploads/21de5a35-2d51-4f1e-be8e-320e3a3d3dd3.png',
    '/lovable-uploads/7cea7343-250c-4995-94ab-bcdcddb6cf11.png',
    '/lovable-uploads/4ae86f2e-98be-4379-8f9d-dfc6d1c18e80.png'
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
