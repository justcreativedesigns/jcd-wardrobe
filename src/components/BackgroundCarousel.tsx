
import React, { useState, useEffect } from 'react';

const BackgroundCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    '/lovable-uploads/bc205c6a-93c7-4f1e-bad2-5f22f3ccc6d8.png',
    '/lovable-uploads/d11344c6-baec-4f37-a670-7552a6c6bbc5.png',
    '/lovable-uploads/d0be9860-953b-49bf-9312-f0b10d4baa9d.png',
    '/lovable-uploads/9a4e98c1-26f2-4b17-8752-e090f6713c30.png',
    '/lovable-uploads/36ee9d46-07ee-434f-9f89-c51e9c48cdd6.png'
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
