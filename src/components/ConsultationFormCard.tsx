
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ConsultationFormCard = () => {
  const [step, setStep] = useState(1);
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();

  const propertyTypes = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Villa', 'Duplex'];

  const handlePropertyTypeSelect = (type: string) => {
    setSelectedPropertyType(type);
  };

  const handleNext = () => {
    if (!selectedPropertyType) {
      toast({
        title: "Please select a property type",
        variant: "destructive"
      });
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    console.log('Form submitted:', { ...formData, propertyType: selectedPropertyType });
    setShowThankYou(true);
    
    toast({
      title: "Consultation booked successfully!",
      description: "Our team will reach out to you soon."
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (showThankYou) {
    return (
      <Card className="border-green-200 shadow-lg animate-fade-in w-full max-w-sm md:max-w-md mx-auto" data-consultation-form>
        <CardContent className="text-center p-6 md:p-8">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Thank you for your interest! Our team will reach out to you soon.
          </p>
          <Button 
            onClick={() => {
              setShowThankYou(false);
              setStep(1);
              setSelectedPropertyType('');
              setFormData({ name: '', email: '', phone: '' });
            }}
            variant="outline"
            className="w-full h-10 md:h-12"
          >
            Book Another Consultation
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-xl border-0 animate-fade-in w-full max-w-sm md:max-w-md mx-auto" data-consultation-form>
      <CardHeader className="text-center bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg p-4 md:p-6">
        <CardTitle className="text-lg md:text-xl font-semibold">
          Get a Free Design Consultation
        </CardTitle>
        <p className="text-red-100 text-xs md:text-sm font-medium mt-2 animate-pulse">
          ⚡ Last 3 spots left this month!
        </p>
      </CardHeader>
      
      <CardContent className="p-4 md:p-6">
        {step === 1 && (
          <div className="animate-slide-in-right">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Property type</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
              {propertyTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedPropertyType === type ? "default" : "outline"}
                  className={`h-10 md:h-12 text-sm md:text-base font-medium transition-all duration-200 ${
                    selectedPropertyType === type 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'hover:border-red-300 hover:text-red-600'
                  }`}
                  onClick={() => handlePropertyTypeSelect(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
            <Button 
              onClick={handleNext}
              className="w-full h-10 md:h-12 bg-gray-900 hover:bg-gray-800 font-medium text-sm md:text-base"
            >
              Next
            </Button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 animate-slide-in-right">
            <div className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
              Property Type: <span className="font-semibold text-red-600">{selectedPropertyType}</span>
            </div>
            
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="h-10 md:h-12 text-sm md:text-base"
                required
              />
            </div>
            
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="h-10 md:h-12 text-sm md:text-base"
                required
              />
            </div>
            
            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="h-10 md:h-12 text-sm md:text-base"
                required
              />
            </div>
            
            <div className="flex gap-2 md:gap-3 pt-2">
              <Button 
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="flex-1 h-10 md:h-12 text-sm md:text-base"
              >
                Back
              </Button>
              <Button 
                type="submit"
                className="flex-1 h-10 md:h-12 bg-red-600 hover:bg-red-700 font-medium text-sm md:text-base"
              >
                Book Free Consultation
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ConsultationFormCard;
