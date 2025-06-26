
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ConsultationForm = () => {
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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-md mx-auto">
          <Card className="border-green-200 shadow-lg animate-fade-in">
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
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-md mx-auto">
        <Card className="shadow-xl border-0 animate-fade-in">
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
      </div>
    </section>
  );
};

export default ConsultationForm;
