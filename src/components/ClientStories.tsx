
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ClientStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const stories = [
    {
      id: 1,
      name: "Kritika & Shikhar",
      location: "Owner at SJR Bluewaters",
      testimonial: "We got lucky when we found Creative Designs. The quality that we got after their handover is commendable.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Priya & Rajesh",
      location: "Homeowners at Prestige Lakeside",
      testimonial: "Creative Designs transformed our 3BHK into a dream home. Their attention to detail is exceptional.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Anita Sharma",
      location: "Villa Owner at Whitefield",
      testimonial: "Professional service, on-time delivery, and beautiful designs. Highly recommend Creative Designs!",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Vikram & Sunita",
      location: "Apartment at Brigade Gateway",
      testimonial: "From modular kitchen to bedroom interiors, everything was perfectly executed by Creative Designs team.",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=400&fit=crop"
    }
  ];

  const STORY_DURATION = 4000; // 4 seconds per story

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, STORY_DURATION);

    return () => clearInterval(timer);
  }, [isPaused, stories.length]);

  const goToStory = (index: number) => {
    setCurrentStory(index);
  };

  return (
    <>
      <style>
        {`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
          
          .progress-active {
            animation: progress 4s linear forwards;
          }
        `}
      </style>
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Bangalore Client Stories
          </h2>
          <p className="text-gray-600 mb-12">
            Our clients share why they loved doing their home with Creative Designs
          </p>
          
          <Card 
            className="overflow-hidden shadow-xl border-0 max-w-md mx-auto relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Progress bars */}
            <div className="absolute top-0 left-0 right-0 z-10 flex gap-1 p-3">
              {stories.map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-1 bg-black bg-opacity-20 rounded-full overflow-hidden cursor-pointer"
                  onClick={() => goToStory(index)}
                >
                  <div
                    className={`h-full bg-white transition-all duration-300 ${
                      index < currentStory 
                        ? 'w-full' 
                        : index === currentStory 
                          ? 'progress-active' 
                          : 'w-0'
                    }`}
                  />
                </div>
              ))}
            </div>

            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={stories[currentStory].image}
                  alt={`${stories[currentStory].name} testimonial`}
                  className="w-full aspect-square object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <div className="text-white p-6 w-full">
                    <h3 className="text-xl font-semibold mb-1">
                      {stories[currentStory].name}
                    </h3>
                    <p className="text-sm text-gray-200 mb-3">
                      {stories[currentStory].location}
                    </p>
                    <p className="text-white italic text-sm">
                      "{stories[currentStory].testimonial}"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>

            {/* Navigation arrows */}
            <button
              onClick={() => goToStory((currentStory - 1 + stories.length) % stories.length)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all z-10"
            >
              ‹
            </button>
            <button
              onClick={() => goToStory((currentStory + 1) % stories.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all z-10"
            >
              ›
            </button>
          </Card>

          {/* Story indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStory(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentStory 
                    ? 'bg-red-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientStories;
