
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Transforme Sua Experiência Digital Com Nossa Solução
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Uma plataforma completa que simplifica seu trabalho e maximiza seus resultados.
          Experimente agora e veja a diferença.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Começar Agora
          </Button>
          <Button 
            variant="outline" 
            className="text-lg px-8 py-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition duration-300 ease-in-out"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Saiba Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
