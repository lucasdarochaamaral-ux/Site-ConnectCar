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
var Benefits = function () {
    var _a = (0, react_1.useState)([false, false, false, false, false]), visibleBenefits = _a[0], setVisibleBenefits = _a[1];
    var benefits = [
        {
            icon: <lucide_react_1.MapPin size={28} className="text-orange-600"/>,
            title: "Rastreamento em tempo real",
            description: "Acompanhe seu veículo em tempo real, com precisão e segurança."
        },
        {
            icon: <lucide_react_1.Shield size={28} className="text-orange-600"/>,
            title: "Bloqueio veicular pelo app",
            description: "Bloqueie seu veículo remotamente pelo aplicativo ou computador."
        },
        {
            icon: <lucide_react_1.Cpu size={28} className="text-orange-600"/>,
            title: "Chip multioperadora",
            description: "Mais sinal, mais precisão com nosso chip que funciona em múltiplas operadoras."
        },
        {
            icon: <lucide_react_1.Clock size={28} className="text-orange-600"/>,
            title: "Sem carência ou multas",
            description: "Cancelamento e reativação gratuitos, sem taxas adicionais."
        },
        {
            icon: <lucide_react_1.Smartphone size={28} className="text-orange-600"/>,
            title: "Acesso fácil",
            description: "Acesse pelo aplicativo ou pelo site, de qualquer lugar."
        }
    ];
    (0, react_1.useEffect)(function () {
        // Carregar automaticamente com animação similar ao "Como Funciona"
        // Animação sequencial com delay entre os blocos
        benefits.forEach(function (_, index) {
            setTimeout(function () {
                setVisibleBenefits(function (prev) {
                    var newState = __spreadArray([], prev, true);
                    newState[index] = true;
                    return newState;
                });
            }, index * 200); // 200ms de delay entre cada bloco
        });
    }, []);
    return (<section id="beneficios" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Nossos Diferenciais</h2>
          <p className="text-lg text-gray-600 dark:text-white dark:font-semibold max-w-2xl mx-auto transition-colors duration-300">
            Conheça as vantagens que fazem da ConnectCar a melhor opção para o rastreamento do seu veículo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(function (benefit, index) { return (<div key={index} data-benefit-card data-index={index} className={"bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 cursor-pointer group ".concat(visibleBenefits[index]
                ? 'opacity-100 transform translate-y-0 scale-100'
                : 'opacity-0 transform translate-y-8 scale-95')}>
              <div className={"mb-4 flex justify-center transition-all duration-500 ".concat(visibleBenefits[index]
                ? 'scale-100 opacity-100'
                : 'scale-75 opacity-50', " group-hover:scale-110 group-hover:animate-bounce")}>
                {benefit.icon}
              </div>
              <h3 className={"text-lg font-semibold text-gray-800 dark:text-white mb-2 text-center transition-all duration-500 ".concat(visibleBenefits[index] ? 'text-gray-800 dark:text-white' : 'text-gray-400 dark:text-gray-400', " group-hover:text-orange-600")}>
                {benefit.title}
              </h3>
              <p className={"text-gray-600 dark:text-white dark:font-semibold text-center text-sm transition-all duration-500 ".concat(visibleBenefits[index] ? 'text-gray-600 dark:text-white dark:font-semibold' : 'text-gray-400 dark:text-gray-400')}>
                {benefit.description}
              </p>
            </div>); })}
        </div>
      </div>

      {/* Estilos CSS para animações adicionais */}
      <style>{"\n        @keyframes bounce {\n          0%, 20%, 50%, 80%, 100% {\n            transform: translateY(0) scale(1.1);\n          }\n          40% {\n            transform: translateY(-8px) scale(1.1);\n          }\n          60% {\n            transform: translateY(-4px) scale(1.1);\n          }\n        }\n      "}</style>
    </section>);
};
exports.default = Benefits;
