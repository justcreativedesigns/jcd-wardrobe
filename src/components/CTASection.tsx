
import React from 'react';
import ConsultationFormCard from './ConsultationFormCard';

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Create Your
              <br />
              <span className="text-red-600">Dream Home Together</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl">
              Transform your space with our expert interior design services. 
              From concept to completion, we'll bring your vision to life with 
              style, functionality, and unmatched craftsmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Free Design Consultation</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">45-Day Completion</span>
              </div>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 max-w-md mx-auto lg:mx-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700 font-medium">
                    Limited Time: Get 15% off on bookings this month!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex justify-center lg:justify-end">
            <ConsultationFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
