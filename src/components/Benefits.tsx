
import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefitsData = [
  {
    title: 'Economize Tempo',
    description: 'Nossa solução automatiza processos repetitivos, permitindo que você foque no que realmente importa.',
    icon: 'check',
  },
  {
    title: 'Aumente Produtividade',
    description: 'Ferramentas otimizadas que ajudam a entregar mais resultados em menos tempo.',
    icon: 'check',
  },
  {
    title: 'Suporte Dedicado',
    description: 'Equipe especializada disponível para ajudar quando você precisar, em todos os momentos.',
    icon: 'check',
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefícios da Nossa Solução</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como nossa plataforma pode transformar sua experiência e trazer resultados reais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700 font-medium mb-6">
            Junte-se a milhares de clientes satisfeitos
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <span className="text-gray-400 text-lg font-bold">Empresa A</span>
            <span className="text-gray-400 text-lg font-bold">Empresa B</span>
            <span className="text-gray-400 text-lg font-bold">Empresa C</span>
            <span className="text-gray-400 text-lg font-bold">Empresa D</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
