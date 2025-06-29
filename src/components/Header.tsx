
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const handleBookConsultation = () => {
    // Find the consultation form element
    const consultationForm = document.querySelector('[data-consultation-form]');
    
    if (consultationForm) {
      // Smooth scroll to the form
      consultationForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Trigger the glow effect after a short delay for the scroll to start
      setTimeout(() => {
        // Dispatch a custom event that the form component will listen to
        window.dispatchEvent(new CustomEvent('highlight-consultation-form'));
      }, 300);
    }
  };

  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/c73dd433-5a99-425a-b09e-601397bfbf09.webp" 
            alt="Just Creative Designs" 
            className="h-10 w-auto"
          />
        </div>
        
        <div className="hidden sm:flex items-center space-x-4">
          <Button variant="outline" className="font-medium" asChild>
            <a href="tel:+918884456466">Contact Now</a>
          </Button>
          <Button 
            className="bg-red-600 hover:bg-red-700 font-medium"
            onClick={handleBookConsultation}
          >
            Book Free Consultation
          </Button>
        </div>
        
        <div className="sm:hidden">
          <Button 
            size="sm" 
            className="bg-red-600 hover:bg-red-700"
            onClick={handleBookConsultation}
          >
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
