
import React from 'react';

const HeroContent = () => {
  return (
    <div className="text-center lg:text-left">
      <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
        Best Interior Designers
        <br />
        <span className="text-red-500">In Bangalore</span>
      </h1>
      
      <p className="text-xl lg:text-2xl text-gray-200 font-medium mb-8 animate-fade-in" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
        Affordable – Quick – Premium
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in">
        <div className="flex items-center space-x-2 text-gray-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>10+ Years Experience</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>1000+ Happy Clients</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-300" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Award Winning Designs</span>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
