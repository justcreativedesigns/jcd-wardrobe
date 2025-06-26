
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ClientStories = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Bangalore Client Stories
        </h2>
        <p className="text-gray-600 mb-12">
          Our clients share why they loved doing their home with Truwv
        </p>
        
        <Card className="overflow-hidden shadow-xl border-0 max-w-2xl mx-auto">
          <CardContent className="p-0">
            <div className="relative">
              <img 
                src="/lovable-uploads/be1862a9-91b8-428b-a580-584cb9bd2ea9.png" 
                alt="Kritika & Shikhar testimonial video"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all">
                  <svg className="w-6 h-6 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="p-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-2">
                Kritika & Shikhar
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Owner at SJR Bluewaters
              </p>
              <p className="text-gray-700 italic">
                "We got lucky when we found Truwv. The quality that we got after their 
                handover is commendable."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClientStories;
