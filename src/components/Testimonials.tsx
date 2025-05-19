
import React from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: 'Ana Silva',
    position: 'CEO, TechCorp',
    image: '/placeholder.svg',
    content: 'A plataforma transformou completamente nossa operação. Conseguimos aumentar a produtividade em 40% já no primeiro mês de uso.',
    rating: 5,
  },
  {
    name: 'Carlos Mendes',
    position: 'Diretor de Marketing, Inova Inc',
    image: '/placeholder.svg',
    content: 'Solução intuitiva e com suporte excepcional. Resolveu todas as nossas necessidades e superou nossas expectativas.',
    rating: 5,
  },
  {
    name: 'Mariana Costa',
    position: 'Gerente de Projetos, Solutions Co',
    image: '/placeholder.svg',
    content: 'A facilidade de uso aliada à potência das ferramentas faz dessa solução a melhor escolha para qualquer negócio que busca crescer.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos de clientes reais que transformaram seus negócios com nossa solução.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
