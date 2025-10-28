import React, { useRef, useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import trackerDevice from '../assets/images/tracker-device.jpg';

const Pricing: React.FC = () => {
  const checkRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentDeviceIndex, setCurrentDeviceIndex] = useState(0);

  // Funções do carrossel de aparelhos
  const nextDevice = () => {
    setCurrentDeviceIndex((prev) => (prev + 1) % 3);
  };

  const prevDevice = () => {
    setCurrentDeviceIndex((prev) => (prev - 1 + 3) % 3);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const index = parseInt(element.dataset.index || '0');
            element.style.animation = `checkAnimationSpring 1.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards`;
            element.style.animationDelay = `${index * 0.4}s`;
          }
        });
      },
      { threshold: 0.1 }
    );

    checkRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    "Rastreamento em tempo real",
    "Bloqueio veicular remoto", 
    "Acesso via aplicativo e site",
    "Suporte técnico humanizado",
    "Sem fidelidade"
  ];

  return (
    <section id="planos" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Planos e Preços</h2>
          <p className="text-lg text-gray-600 dark:text-white dark:font-semibold max-w-2xl mx-auto transition-colors duration-300">
            Oferecemos planos acessíveis e sem fidelidade. Cancele ou pause quando quiser.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <div className="w-full lg:w-1/2 max-w-md">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="bg-orange-700 text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Plano Mensal</h3>
                <div className="mt-4 flex items-center justify-center">
                  <span className="text-4xl font-bold">R$ 38,80</span>
                  <span className="ml-2 text-orange-200">/mês</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div 
                        ref={(el) => (checkRefs.current[index] = el)}
                        className="opacity-0 transform scale-0"
                        data-index={index}
                      >
                        <Check size={20} className="text-orange-600 mr-2 mt-1 flex-shrink-0" />
                      </div>
                      <span className="text-gray-800 dark:text-white transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <a 
                    href="https://api.whatsapp.com/send?phone=5511917487107&text=Bom%20dia,%20tudo%20bem!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20rastreamento.&utm_source=site&utm_medium=botao&utm_campaign=geral" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all w-full hover:scale-105 transform"
                  >
                    Contratar Agora
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 max-w-md flex flex-col items-center">
            {/* Carrossel de Aparelhos Rastreadores */}
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 w-full mb-6 transition-colors duration-300">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center transition-colors duration-300">Aparelhos Rastreadores</h3>
              
              <div className="relative overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentDeviceIndex * 100}%)` }}>
                  {/* Aparelho 1 - Principal */}
                  <div className="w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-4">
                    <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg">
                      <img 
                        src={trackerDevice} 
                        alt="Rastreador ConnectCar Principal" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 transition-colors duration-300">ConnectCar Pro</h4>
                      <p className="text-sm text-gray-600 dark:text-white mb-2 transition-colors duration-300">Modelo principal com GPS avançado</p>
                      <div className="flex items-center justify-center md:justify-start">
                        <span className="text-lg font-bold text-orange-700">R$ 89,80</span>
                      </div>
                    </div>
                  </div>

                  {/* Aparelho 2 - Compacto */}
                  <div className="w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-4">
                    <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                      <div className="w-16 h-12 bg-gray-800 dark:bg-gray-300 rounded flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 transition-colors duration-300">ConnectCar Compact</h4>
                      <p className="text-sm text-gray-600 dark:text-white mb-2 transition-colors duration-300">Versão compacta e discreta</p>
                      <div className="flex items-center justify-center md:justify-start">
                        <span className="text-lg font-bold text-orange-700">R$ 79,80</span>
                      </div>
                    </div>
                  </div>

                  {/* Aparelho 3 - Premium */}
                  <div className="w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-4">
                    <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                      <div className="w-18 h-14 bg-gray-900 rounded flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 transition-colors duration-300">ConnectCar Premium</h4>
                      <p className="text-sm text-gray-600 dark:text-white mb-2 transition-colors duration-300">Modelo premium com recursos avançados</p>
                      <div className="flex items-center justify-center md:justify-start">
                        <span className="text-lg font-bold text-orange-700">R$ 99,80</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Controles do carrossel */}
                <button 
                  onClick={prevDevice}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
                <button 
                  onClick={nextDevice}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>

                {/* Indicadores */}
                <div className="flex justify-center mt-4 space-x-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentDeviceIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentDeviceIndex === index ? 'bg-orange-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-orange-100 rounded-lg p-4 w-full">
              <p className="text-center text-orange-800 dark:text-gray-700 dark:font-semibold font-medium transition-colors duration-300">
                Sem carência. Cancele ou pause quando quiser.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS para animações */}
      <style>{`
        @keyframes checkAnimationSpring {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-180deg);
          }
          30% {
            opacity: 0.7;
            transform: scale(0.6) rotate(-90deg);
          }
          60% {
            opacity: 0.9;
            transform: scale(1.3) rotate(-10deg);
          }
          75% {
            opacity: 1;
            transform: scale(0.85) rotate(5deg);
          }
          85% {
            transform: scale(1.15) rotate(-2deg);
          }
          95% {
            transform: scale(0.95) rotate(1deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;

