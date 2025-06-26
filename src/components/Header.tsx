
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">JCD</span>
          </div>
          <div>
            <h1 className="font-semibold text-lg text-gray-900">Just</h1>
            <p className="text-sm text-gray-600 -mt-1">Creative Designs</p>
          </div>
        </div>
        
        <div className="hidden sm:flex items-center space-x-4">
          <Button variant="outline" className="font-medium">
            Contact Now
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 font-medium">
            Book Free Consultation
          </Button>
        </div>
        
        <div className="sm:hidden">
          <Button size="sm" className="bg-red-600 hover:bg-red-700">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
