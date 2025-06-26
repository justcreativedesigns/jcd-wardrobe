
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientStories from '../components/ClientStories';
import GoogleReviews from '../components/GoogleReviews';
import ProcessSection from '../components/ProcessSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <ClientStories />
      <GoogleReviews />
      <ProcessSection />
      <Footer />
    </div>
  );
};

export default Index;
