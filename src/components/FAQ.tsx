import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Quanto tempo leva para instalar o rastreador?",
      answer: "A instalação é rápida e simples, normalmente entre 30 minutos a 1 hora, dependendo do modelo do veículo e do tipo de rastreador escolhido."
    },
    {
      question: "Posso acompanhar meu veículo pelo celular?",
      answer: "Sim! Você terá acesso ao nosso aplicativo móvel para acompanhar seu veículo em tempo real, receber alertas e gerenciar todas as funcionalidades do rastreador."
    },
    {
      question: "O rastreador funciona em todo o Brasil?",
      answer: "Sim, nossos rastreadores funcionam em todo território nacional através da rede de telefonia móvel, garantindo cobertura completa."
    },
    {
      question: "Vocês oferecem suporte técnico?",
      answer: "Sim, oferecemos suporte técnico completo durante todo o período de uso, incluindo atendimento via WhatsApp, telefone e chat online."
    },
    {
      question: "É possível cancelar o serviço a qualquer momento?",
      answer: "Sim! Nossos planos são sem fidelidade. Você pode cancelar ou pausar o serviço quando quiser, sem taxas de cancelamento."
    },
    {
      question: "O que acontece se o rastreador apresentar defeito?",
      answer: "Oferecemos garantia completa do equipamento e, em caso de defeito, realizamos a troca sem custo adicional durante o período de garantia."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
      id="faq"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Título da seção */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-orange-500">FAQ</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de rastreamento veicular
          </p>
        </div>

        {/* Lista de perguntas */}
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`mb-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-orange-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-orange-500" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Não encontrou a resposta que procurava?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

