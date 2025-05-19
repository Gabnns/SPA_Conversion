
import React from 'react';
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Não Perca Mais Tempo
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Junte-se a milhares de clientes satisfeitos e transforme seu negócio hoje mesmo.
          Nossa plataforma foi desenvolvida para facilitar seu trabalho diário.
        </p>
        <Button 
          className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Começar Gratuitamente
        </Button>
        <p className="mt-6 text-gray-600">Sem necessidade de cartão de crédito • Cancele a qualquer momento</p>
      </div>
    </section>
  );
};

export default FinalCTA;
