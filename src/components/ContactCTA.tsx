import React, { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import appDashboard from '../assets/images/app-dashboard.png';

const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setStatus(prevStatus => ({ 
      ...prevStatus, 
      submitting: true,
      info: { error: false, msg: null }
    }));

    try {
      // Configuração do EmailJS
      const serviceID = 'service_g3qcijm';
      const templateID = 'template_5l5zjfl';
      const publicKey = 'lWr4FDwEmFJBRrC5Q';

      // Enviar e-mail usando EmailJS
      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        e.currentTarget,
        publicKey
      );

      console.log('E-mail enviado com sucesso:', result.text);
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { 
          error: false, 
          msg: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
        }
      });

      // Limpar formulário após envio bem-sucedido
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      
      setStatus({
        submitted: false,
        submitting: false,
        info: { 
          error: true, 
          msg: 'Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.' 
        }
      });
    }
  };

  return (
    <section id="contato" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em contato</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para atender você e oferecer a melhor solução para o rastreamento do seu veículo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
              
              {status.info.msg && (
                <div className={`mb-4 p-4 rounded ${status.info.error ? 'bg-red-500/20 text-red-200' : 'bg-orange-500/20 text-orange-200'}`}>
                  {status.info.msg}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-500"
                    required
                    disabled={status.submitting}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-500"
                    required
                    disabled={status.submitting}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-500"
                    required
                    disabled={status.submitting}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-500"
                    required
                    disabled={status.submitting}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status.submitting}
                >
                  {status.submitting ? (
                    <>
                      <span className="animate-spin mr-2">⟳</span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="mb-8">
              <img 
                src={appDashboard} 
                alt="ConnectCar Dashboard" 
                className="rounded-lg shadow-lg max-w-full mx-auto"
                style={{ maxHeight: '300px' }}
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center hover:scale-105 transition-transform duration-300">
                <div className="bg-orange-600 p-3 rounded-full mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">WhatsApp</h4>
                  <a 
                    href="https://api.whatsapp.com/send?phone=5511917487107&text=Bom%20dia,%20tudo%20bem!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20rastreamento.&utm_source=site&utm_medium=botao&utm_campaign=geral" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Clique para conversar
                  </a>
                </div>
              </div>
              
              <div className="flex items-center hover:scale-105 transition-transform duration-300">
                <div className="bg-orange-600 p-3 rounded-full mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">E-mail</h4>
                  <a 
                    href="mailto:contato@connectcar123.com.br" 
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    contato@connectcar123.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

