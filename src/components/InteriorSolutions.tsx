
import React from 'react';
import { ChefHat, Shirt, Sofa, Baby, Paintbrush } from 'lucide-react';

const InteriorSolutions = () => {
  const solutions = [
    {
      icon: ChefHat,
      title: 'Kitchen',
      description: 'Modern kitchen designs with smart storage solutions'
    },
    {
      icon: Shirt,
      title: 'Wardrobe',
      description: 'Custom wardrobes designed for your space and style'
    },
    {
      icon: Sofa,
      title: 'Furniture',
      description: 'Premium furniture for every room in your home'
    },
    {
      icon: Baby,
      title: 'Kids Room',
      description: 'Creative and safe designs for your little ones'
    },
    {
      icon: Paintbrush,
      title: 'Wallpaper',
      description: 'Transform your walls with stunning wallpaper designs'
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          End-to-End Interior Solutions for Every Space
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-white text-gray-900 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteriorSolutions;
