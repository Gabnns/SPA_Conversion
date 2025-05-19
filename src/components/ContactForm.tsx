
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Formulário enviado!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({ name: '', email: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto Para Começar?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para oferecer acesso exclusivo.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Profissional
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                {loading ? 'Enviando...' : 'Quero Começar Agora'}
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Ao se cadastrar, você concorda com nossos Termos de Serviço e Política de Privacidade.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
