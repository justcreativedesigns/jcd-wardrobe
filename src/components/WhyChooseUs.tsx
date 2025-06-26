
import React from 'react';
import CTAButton from './CTAButton';

const WhyChooseUs = () => {
  const features = [{
    icon: '🧊',
    title: '3D Design Before Payment'
  }, {
    icon: '💰',
    title: 'Accurate Price, No Surprise'
  }, {
    icon: '🧾',
    title: '100% Material Transparency'
  }, {
    icon: '🎨',
    title: '500+ Finish Choices'
  }, {
    icon: '🛡️',
    title: '10 Yrs Warranty'
  }, {
    icon: '⏱️',
    title: '35-Day Delivery, or ₹2k/day'
  }];

  return (
    <section className="px-6 bg-white overflow-hidden py-[31px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>
        
        <div className="relative">
          <div className="flex animate-[marquee_10s_linear_infinite] md:animate-marquee whitespace-nowrap">
            {[...features, ...features].map((feature, index) => (
              <div key={index} className="flex-none mx-8 text-center min-w-[200px]">
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <CTAButton />
      </div>
    </section>
  );
};

export default WhyChooseUs;
