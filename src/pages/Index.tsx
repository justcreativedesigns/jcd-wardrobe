
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import InteriorSolutions from '../components/InteriorSolutions';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientStories from '../components/ClientStories';
import ProcessSection from '../components/ProcessSection';
import GoogleReviews from '../components/GoogleReviews';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <InteriorSolutions />
      <WhyChooseUs />
      <ClientStories />
      <ProcessSection />
      <GoogleReviews />
      <Footer />
    </div>
  );
};

export default Index;
