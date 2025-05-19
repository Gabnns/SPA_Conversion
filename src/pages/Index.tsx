
import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <HowItWorks />
      <FinalCTA />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
