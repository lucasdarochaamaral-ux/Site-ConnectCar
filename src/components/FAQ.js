"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var FAQ = function () {
    var _a = (0, react_1.useState)([]), openItems = _a[0], setOpenItems = _a[1];
    var _b = (0, react_1.useState)(false), isVisible = _b[0], setIsVisible = _b[1];
    var sectionRef = (0, react_1.useRef)(null);
    var faqItems = [
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
    (0, react_1.useEffect)(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.1 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return function () {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    var toggleItem = function (index) {
        setOpenItems(function (prev) {
            return prev.includes(index)
                ? prev.filter(function (item) { return item !== index; })
                : __spreadArray(__spreadArray([], prev, true), [index], false);
        });
    };
    return (<section ref={sectionRef} className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título da seção */}
        <div className={"text-center mb-16 transition-all duration-1000 ".concat(isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-orange-500">FAQ</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de rastreamento veicular
          </p>
        </div>

        {/* Lista de perguntas */}
        <div className="max-w-4xl mx-auto">
          {faqItems.map(function (item, index) { return (<div key={index} className={"mb-4 transition-all duration-1000 ".concat(isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ transitionDelay: "".concat(index * 100 + 200, "ms") }}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button onClick={function () { return toggleItem(index); }} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (<lucide_react_1.ChevronUp className="w-5 h-5 text-orange-500"/>) : (<lucide_react_1.ChevronDown className="w-5 h-5 text-orange-500"/>)}
                  </div>
                </button>
                
                <div className={"overflow-hidden transition-all duration-300 ease-in-out ".concat(openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
                  <div className="px-6 pb-4 pt-2">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>); })}
        </div>

        {/* Call to action */}
        <div className={"text-center mt-12 transition-all duration-1000 delay-1000 ".concat(isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Não encontrou a resposta que procurava?
          </p>
          <a href="#contato" className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200">
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>);
};
exports.default = FAQ;
