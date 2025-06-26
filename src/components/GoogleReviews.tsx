
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GoogleReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      name: "Ashish Desai",
      time: "4 weeks ago",
      rating: 5,
      review: "I'm thoroughly impressed with Truwv Interiors exceptional work on my home interior project! Right from the project manager, and his team delivered outstanding results, showcasing their..."
    },
    {
      name: "Varsha Anandani", 
      time: "3 weeks ago",
      rating: 5,
      review: "We came across Truwv interiors Indiranagar through Instagram and from the first meeting they got us convinced that is truly professional and transparent throughout the process. Every request was..."
    },
    {
      name: "Keshav Mukati",
      time: "a month ago", 
      rating: 5,
      review: "I recently booked my interior with Truwv and had an amazing experience. The team was professional and efficient throughout the process. Every request was handled with the utmost care and..."
    },
    {
      name: "Priya Sharma",
      time: "2 weeks ago",
      rating: 5,
      review: "Excellent service and quality work. The team was very professional and completed the project on time. Highly recommend Just Creative Designs for interior work."
    },
    {
      name: "Raj Kumar",
      time: "1 week ago",
      rating: 5,
      review: "Outstanding interior design services. The attention to detail and creative solutions exceeded our expectations. Great value for money and timely delivery."
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Google Reviews
        </h2>
        
        <div className="relative">
          <div className="flex items-center justify-center">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReview}
              className="absolute left-0 z-10 bg-white shadow-lg hover:shadow-xl"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-12">
              {reviews.slice(currentReview, currentReview + 3).map((review, index) => (
                <Card key={currentReview + index} className="shadow-lg border-0 animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.time}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="text-sm font-medium text-gray-700">{review.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {review.review}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextReview}
              className="absolute right-0 z-10 bg-white shadow-lg hover:shadow-xl"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
