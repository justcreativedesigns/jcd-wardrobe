
import React from 'react';
import { Home, PenTool, Hammer, CheckCircle, Sparkles } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Home,
      title: "Tell Us Your Storage Needs",
      description: "Book your free consultation and share your vision"
    },
    {
      icon: PenTool,
      title: "Finalize the design",
      description: "We'll craft a design that fits your style and needs"
    },
    {
      icon: Hammer,
      title: "Let's start building",
      description: "Our team gets to work, bringing your dream wardrobe to life."
    },
    {
      icon: CheckCircle,
      title: "Final installations",
      description: "We take care of every detail to ensure perfection."
    },
    {
      icon: Sparkles,
      title: "Enjoy a Clutter-Free, Stylish Wardrobe!",
      description: "Welcome to your beautifully designed wardrobe."
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Your Dream Home, Ready Simple Steps
          </h2>
        </div>

        <div className="relative">
          {/* Desktop View */}
          <div className="hidden lg:flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center">
                  <div 
                    className="flex flex-col items-center text-center max-w-xs animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Icon Circle */}
                    <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center mb-6 transition-all duration-500 hover:scale-110 ${
                      index === steps.length - 1 
                        ? 'bg-red-50 border-red-200' 
                        : 'bg-white border-gray-200'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        index === steps.length - 1 ? 'text-red-600' : 'text-gray-600'
                      }`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (except for last item) */}
                  {index < steps.length - 1 && (
                    <div 
                      className="mx-6 text-gray-400 animate-fade-in"
                      style={{ animationDelay: `${(index + 0.5) * 0.2}s` }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Icon Circle */}
                  <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-500 hover:scale-110 ${
                    index === steps.length - 1 
                      ? 'bg-red-50 border-red-200' 
                      : 'bg-white border-gray-200'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      index === steps.length - 1 ? 'text-red-600' : 'text-gray-600'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
