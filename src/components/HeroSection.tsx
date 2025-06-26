
import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-16 lg:py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            Best Interior Designers
            <br />
            <span className="text-red-600">In Bangalore</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-500 font-medium mb-8 animate-fade-in">
            Affordable – Quick – Premium
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>1000+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Award Winning Designs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
