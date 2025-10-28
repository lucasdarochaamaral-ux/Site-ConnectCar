import React, { useState, useEffect } from 'react';
import rfxRastreamento from '../assets/images/carousel/rfx_rastreamento.png';
import ondeEstaCar from '../assets/images/carousel/onde_esta_car.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const images = [
    { src: rfxRastreamento, alt: "RFX Rastreamento Veicular" },
    { src: ondeEstaCar, alt: "Onde Está Car Rastreamento" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Função para avançar para o próximo slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Função para voltar ao slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Avançar automaticamente a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="pt-20 md:pt-10 pb-0 md:pb-0 bg-gradient-to-br from-gray-900 to-orange-900 text-white">
      <div className="container mx-auto px-4 max-w-screen-xl flex flex-col md:flex-row items-center min-h-[35vh] md:min-h-[45vh]">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="relative inline-block group">
              <span className="relative z-10 text-white font-extrabold transition-all duration-300 group-hover:scale-105 drop-shadow-lg">
                Controle total do seu veículo
              </span>
              <span className="absolute inset-0 bg-orange-600 opacity-20 blur-sm rounded-lg transform scale-110 transition-all duration-300 group-hover:opacity-30 group-hover:blur-md group-hover:rotate-1"></span>
            </span>
            <br />
            <span className="text-white">na palma da mão</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-200">
            Segurança, tecnologia e economia para seu veículo e sua frota.
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=5511917487107&text=Bom%20dia,%20tudo%20bem!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20rastreamento.&utm_source=site&utm_medium=botao&utm_campaign=geral" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all hover:scale-105 hover:shadow-lg"
          >
            Solicite um orçamento
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-xl">
            {/* Efeito de brilho */}
            <div className="absolute -inset-1 bg-orange-500 rounded-lg blur opacity-20"></div>
            
            {/* Carrossel com as novas imagens - tamanho dobrado */}
            <div className="relative overflow-hidden rounded-lg z-10">
              {/* Container de slides com transição suave */}
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 flex items-center justify-center bg-transparent py-4">
                    {/* Wrapper para padronizar dimensões - tamanho dobrado */}
                    <div className="relative w-full h-80 md:h-96 lg:h-[28rem] flex items-center justify-center">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="max-h-full max-w-full object-contain"
                        style={{ filter: 'drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.4))' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Controles de navegação */}
              <button 
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-20"
                aria-label="Slide anterior"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all z-20"
                aria-label="Próximo slide"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Indicadores */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? 'bg-orange-400 w-6' : 'bg-white bg-opacity-50'
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

