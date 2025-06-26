
import React from 'react';
import BackgroundCarousel from './BackgroundCarousel';
import HeroContent from './HeroContent';
import ConsultationFormCard from './ConsultationFormCard';

const HeroSection = () => {
  return (
    <section className="relative py-16 lg:py-24 px-6 overflow-hidden">
      {/* Background Carousel */}
      <BackgroundCarousel />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <HeroContent />

          {/* Right side - Form */}
          <div className="flex justify-center lg:justify-end">
            <ConsultationFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
