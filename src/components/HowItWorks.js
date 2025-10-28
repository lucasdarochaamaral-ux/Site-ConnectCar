"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var HowItWorks = function () {
    var _a = (0, react_1.useState)([false, false, false]), visibleSteps = _a[0], setVisibleSteps = _a[1];
    var sectionRef = (0, react_1.useRef)(null);
    var steps = [
        {
            icon: <lucide_react_1.Package size={48} className="text-orange-600"/>,
            title: "Solicite e receba o aparelho",
            description: "Solicite seu rastreador ConnectCar e receba-o pronto para uso, com 1 ano de garantia."
        },
        {
            icon: <lucide_react_1.Wrench size={48} className="text-orange-600"/>,
            title: "Instale em poucos minutos",
            description: "A instalação é simples e rápida, sem necessidade de conhecimentos técnicos."
        },
        {
            icon: <lucide_react_1.MapPin size={48} className="text-orange-600"/>,
            title: "Acompanhe em tempo real",
            description: "Monitore seu veículo em tempo real pelo aplicativo ou site, de qualquer lugar."
        }
    ];
    (0, react_1.useEffect)(function () {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    // Resetar estado antes de iniciar animação
                    setVisibleSteps([false, false, false]);
                    // Ativar os números em sequência (apenas uma vez)
                    setTimeout(function () { return setVisibleSteps(function (prev) { return [true, prev[1], prev[2]]; }); }, 300);
                    setTimeout(function () { return setVisibleSteps(function (prev) { return [prev[0], true, prev[2]]; }); }, 800);
                    setTimeout(function () { return setVisibleSteps(function (prev) { return [prev[0], prev[1], true]; }); }, 1300);
                    // Desconectar observer após primeira execução
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return function () { return observer.disconnect(); };
    }, []);
    return (<section id="como-funciona" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Como Funciona</h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-2xl mx-auto transition-colors duration-300">
            Começar a usar o ConnectCar é simples e rápido. Veja como funciona em apenas 3 passos:
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Container dos passos */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 relative">

            {steps.map(function (step, index) { return (<div key={index} className={"flex-1 flex flex-col items-center text-center max-w-xs mx-auto relative z-10 group cursor-pointer transition-all duration-700 ".concat(visibleSteps[index]
                ? 'opacity-100 transform translate-y-0 scale-100'
                : 'opacity-0 transform translate-y-8 scale-95')}>
                {/* Número do passo com animação laranja */}
                <div className={"absolute -top-2 -left-2 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-20 shadow-lg transition-all duration-500 ".concat(visibleSteps[index]
                ? 'scale-100 shadow-2xl animate-pulse-orange'
                : 'scale-0', " group-hover:scale-125 group-hover:bg-orange-500 group-hover:shadow-2xl")}>
                  {index + 1}
                </div>
                
                {/* Container do ícone sem fundo bege */}
                <div className={"mb-6 p-6 rounded-full transition-all duration-700 shadow-md ".concat(visibleSteps[index]
                ? 'scale-100 shadow-xl'
                : 'scale-75', " group-hover:scale-110 group-hover:shadow-2xl group-hover:-translate-y-2")}>
                  <div className={"transition-all duration-500 ".concat(visibleSteps[index]
                ? 'scale-100 brightness-100'
                : 'scale-75 brightness-75', " group-hover:scale-110 group-hover:brightness-125")}>
                    {step.icon}
                  </div>
                </div>
                
                <h3 className={"text-xl font-semibold text-gray-800 dark:text-white mb-3 transition-all duration-500 ".concat(visibleSteps[index] ? 'text-gray-800 dark:text-white' : 'text-gray-400 dark:text-gray-400', " group-hover:text-orange-600")}>
                  {step.title}
                </h3>
                <p className={"text-gray-600 dark:text-white dark:font-semibold leading-relaxed transition-all duration-500 ".concat(visibleSteps[index] ? 'text-gray-600 dark:text-white dark:font-semibold' : 'text-gray-400 dark:text-gray-400', " group-hover:text-gray-700 dark:group-hover:text-white")}>
                  {step.description}
                </p>
              </div>); })}
          </div>

          {/* Linha conectora para mobile */}
          <div className="md:hidden flex flex-col items-center mt-8">
            {[0, 1].map(function (index) { return (<div key={index} className="w-1 h-16 bg-gray-200 rounded-full relative overflow-hidden my-4">
                <div className={"w-full h-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-full transition-all duration-1000 ".concat(visibleSteps[index] ? 'opacity-100' : 'opacity-30')}></div>
              </div>); })}
          </div>
        </div>
      </div>

      {/* Estilos CSS para animação pulse laranja */}
      <style>{"\n        @keyframes animate-pulse-orange {\n          0%, 100% {\n            opacity: 1;\n            box-shadow: 0 0 0 0 rgba(234, 88, 12, 0.7);\n          }\n          50% {\n            opacity: 0.8;\n            box-shadow: 0 0 0 10px rgba(234, 88, 12, 0);\n          }\n        }\n        \n        .animate-pulse-orange {\n          animation: animate-pulse-orange 2s infinite;\n        }\n      "}</style>
    </section>);
};
exports.default = HowItWorks;
