
import React from 'react';

const QualityMaterials = () => {
  const brandLogos = [
    {
      name: 'Godrej',
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=100&fit=crop&crop=center',
      alt: 'Godrej Logo'
    },
    {
      name: 'Asian Paints',
      url: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=200&h=100&fit=crop&crop=center',
      alt: 'Asian Paints Logo'
    },
    {
      name: 'Kohler',
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&h=100&fit=crop&crop=center',
      alt: 'Kohler Logo'
    },
    {
      name: 'Hafele',
      url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=100&fit=crop&crop=center',
      alt: 'Hafele Logo'
    },
    {
      name: 'Sleepwell',
      url: 'https://images.unsplash.com/photo-1586227740560-8cf2732c1531?w=200&h=100&fit=crop&crop=center',
      alt: 'Sleepwell Logo'
    },
    {
      name: 'Century Ply',
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=100&fit=crop&crop=center',
      alt: 'Century Ply Logo'
    },
    {
      name: 'Wipro',
      url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center',
      alt: 'Wipro Logo'
    },
    {
      name: 'Hindware',
      url: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=200&h=100&fit=crop&crop=center',
      alt: 'Hindware Logo'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Quality Materials from Trusted Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with industry-leading brands to ensure every project uses premium materials 
            that combine durability, style, and value for your dream space.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* First Row - Left to Right */}
          <div className="flex overflow-hidden mb-8">
            <div className="flex animate-marquee">
              {brandLogos.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 w-48 h-24 flex items-center justify-center"
                >
                  <img
                    src={brand.url}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex animate-marquee">
              {brandLogos.map((brand, index) => (
                <div
                  key={`first-duplicate-${index}`}
                  className="flex-shrink-0 mx-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 w-48 h-24 flex items-center justify-center"
                >
                  <img
                    src={brand.url}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left (Reverse) */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee" style={{ animationDirection: 'reverse' }}>
              {brandLogos.slice().reverse().map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 w-48 h-24 flex items-center justify-center"
                >
                  <img
                    src={brand.url}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex animate-marquee" style={{ animationDirection: 'reverse' }}>
              {brandLogos.slice().reverse().map((brand, index) => (
                <div
                  key={`second-duplicate-${index}`}
                  className="flex-shrink-0 mx-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 w-48 h-24 flex items-center justify-center"
                >
                  <img
                    src={brand.url}
                    alt={brand.alt}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Assurance Text */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Quality Guaranteed
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every material is carefully selected and quality-tested to meet our high standards, 
            ensuring your investment lasts for years to come.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityMaterials;
