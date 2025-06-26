
import React from 'react';
import BackgroundCarousel from './BackgroundCarousel';
import HeroContent from './HeroContent';
import ConsultationFormCard from './ConsultationFormCard';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-8 md:py-16 lg:py-24 px-4 md:px-6 overflow-hidden">
      {/* Background Carousel */}
      <BackgroundCarousel />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-3 md:gap-6 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="order-1">
            <HeroContent />
          </div>

          {/* Right side - Form */}
          <div className="order-2 flex justify-center lg:justify-end">
            <ConsultationFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
