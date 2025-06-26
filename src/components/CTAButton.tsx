
import React from 'react';
import { Button } from '@/components/ui/button';

const CTAButton = () => {
  const scrollToForm = () => {
    const formElement = document.querySelector('[data-consultation-form]');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div className="text-center py-8">
      <Button 
        onClick={scrollToForm}
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        Get a Free Design Consultation
      </Button>
    </div>
  );
};

export default CTAButton;
