
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Cadastro Simples',
    description: 'Crie sua conta em menos de 2 minutos e tenha acesso imediato à plataforma.',
  },
  {
    number: '02',
    title: 'Personalize',
    description: 'Adapte a ferramenta de acordo com as necessidades específicas do seu negócio.',
  },
  {
    number: '03',
    title: 'Comece a Usar',
    description: 'Integre facilmente com seus sistemas atuais e veja resultados imediatos.',
  },
  {
    number: '04',
    title: 'Escale Seu Negócio',
    description: 'Utilize dados e insights para tomar decisões estratégicas e crescer.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funciona</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simples e eficiente para começar a transformar seu negócio hoje mesmo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative"
            >
              <div className="absolute top-0 left-0 -mt-4 -ml-4 bg-blue-600 text-white text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-full">
                {step.number}
              </div>
              <div className="bg-gray-50 p-8 pt-12 rounded-xl shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-12 h-2 bg-gray-200 translate-x-6">
                  <div className="w-3 h-3 bg-blue-600 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">O Que Você Vai Receber</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            <div className="flex items-start p-4">
              <div className="w-1 h-8 bg-blue-600 mr-4"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Dashboard Personalizado</h4>
                <p className="text-gray-600">Acompanhe seu progresso em tempo real</p>
              </div>
            </div>
            <div className="flex items-start p-4">
              <div className="w-1 h-8 bg-blue-600 mr-4"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Ferramentas Avançadas</h4>
                <p className="text-gray-600">Automatize tarefas repetitivas facilmente</p>
              </div>
            </div>
            <div className="flex items-start p-4">
              <div className="w-1 h-8 bg-blue-600 mr-4"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Suporte Prioritário</h4>
                <p className="text-gray-600">Atendimento personalizado quando precisar</p>
              </div>
            </div>
            <div className="flex items-start p-4">
              <div className="w-1 h-8 bg-blue-600 mr-4"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Atualizações Contínuas</h4>
                <p className="text-gray-600">Acesso às novidades assim que lançadas</p>
              </div>
            </div>
            <div className="flex items-start p-4">
              <div className="w-1 h-8 bg-blue-600 mr-4"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Integração Total</h4>
                <p className="text-gray-600">Conecte com suas ferramentas favoritas</p>
              </div>
            </div>
            <div className="flex items-start p-4">
              <div className="w-1 h-8 bg-blue-600 mr-4"></div>
              <div>
                <h4 className="font-semibold text-gray-900">Relatórios Detalhados</h4>
                <p className="text-gray-600">Dados e insights para decisões estratégicas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
