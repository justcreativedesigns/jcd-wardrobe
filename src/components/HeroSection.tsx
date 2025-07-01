
import React from 'react';
import HeroImageSlideshow from './HeroImageSlideshow';
import HeroContent from './HeroContent';
import ConsultationFormCard from './ConsultationFormCard';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-6 pb-8">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left side - Image Slideshow */}
          <div className="order-2 lg:order-1">
            <HeroImageSlideshow />
          </div>

          {/* Right side - Content and Form */}
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4 lg:space-y-6">
            {/* Hero Content */}
            <HeroContent />
            
            {/* Consultation Form */}
            <div className="flex justify-center">
              <ConsultationFormCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
