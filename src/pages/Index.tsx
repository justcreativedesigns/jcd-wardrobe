
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ConsultationForm from '../components/ConsultationForm';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientStories from '../components/ClientStories';
import GoogleReviews from '../components/GoogleReviews';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ConsultationForm />
      <WhyChooseUs />
      <ClientStories />
      <GoogleReviews />
      <Footer />
    </div>
  );
};

export default Index;
