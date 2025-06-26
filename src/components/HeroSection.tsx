
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
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

  return (
    <section className="py-16 lg:py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
              Best Interior Designers
              <br />
              <span className="text-red-600">In Bangalore</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-500 font-medium mb-8 animate-fade-in">
              Affordable – Quick – Premium
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in">
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>1000+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Award Winning Designs</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex justify-center lg:justify-end">
            {showThankYou ? (
              <Card className="border-green-200 shadow-lg animate-fade-in w-full max-w-md">
                <CardContent className="text-center p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
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
                    className="w-full"
                  >
                    Book Another Consultation
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-xl border-0 animate-fade-in w-full max-w-md">
                <CardHeader className="text-center bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                  <CardTitle className="text-xl font-semibold">
                    Get a Free Design Consultation
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6">
                  {step === 1 && (
                    <div className="animate-slide-in-right">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Property type</h3>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {propertyTypes.map((type) => (
                          <Button
                            key={type}
                            variant={selectedPropertyType === type ? "default" : "outline"}
                            className={`h-12 font-medium transition-all duration-200 ${
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
                        className="w-full h-12 bg-gray-900 hover:bg-gray-800 font-medium"
                      >
                        Next
                      </Button>
                    </div>
                  )}

                  {step === 2 && (
                    <form onSubmit={handleSubmit} className="space-y-4 animate-slide-in-right">
                      <div className="text-sm text-gray-600 mb-4">
                        Property Type: <span className="font-semibold text-red-600">{selectedPropertyType}</span>
                      </div>
                      
                      <div>
                        <Input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>
                      
                      <div>
                        <Input
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>
                      
                      <div>
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>
                      
                      <div className="flex gap-3 pt-2">
                        <Button 
                          type="button"
                          variant="outline"
                          onClick={() => setStep(1)}
                          className="flex-1 h-12"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit"
                          className="flex-1 h-12 bg-red-600 hover:bg-red-700 font-medium"
                        >
                          Book Your Free Consultation
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
