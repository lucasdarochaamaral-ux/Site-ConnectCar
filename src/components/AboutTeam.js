"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var AboutTeam = function () {
    var _a = (0, react_1.useState)(false), isVisible = _a[0], setIsVisible = _a[1];
    var sectionRef = (0, react_1.useRef)(null);
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
    return (<section ref={sectionRef} className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="about-team">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título da seção */}
        <div className={"text-center mb-16 transition-all duration-1000 ".concat(isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Conheça melhor quem cuida do seu{' '}
            <span className="text-orange-500">rastreamento</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A ConnectCar acredita que sua missão é proporcionar segurança e tranquilidade 
            através de soluções de rastreamento que realmente protegem seu patrimônio.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className={"text-center transition-all duration-1000 delay-200 ".concat(isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
            <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <lucide_react_1.Award className="w-8 h-8 text-orange-500"/>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">desde 2018</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              protegendo veículos
            </div>
          </div>

          <div className={"text-center transition-all duration-1000 delay-400 ".concat(isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
            <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <lucide_react_1.Users className="w-8 h-8 text-orange-500"/>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">mais de 5.000</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              clientes atendidos
            </div>
          </div>

          <div className={"text-center transition-all duration-1000 delay-600 ".concat(isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
            <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <lucide_react_1.TrendingUp className="w-8 h-8 text-orange-500"/>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">EXPERIÊNCIA</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">
              e ESTRUTURA em todo Brasil
            </div>
          </div>
        </div>

        {/* Imagens da equipe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={"transition-all duration-1000 delay-800 ".concat(isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8')}>
            <img src="/api/placeholder/600/400" alt="Clientes satisfeitos da ConnectCar demonstrando segurança e confiança" className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"/>
          </div>

          <div className={"transition-all duration-1000 delay-1000 ".concat(isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8')}>
            <img src="/api/placeholder/600/400" alt="Equipe profissional da ConnectCar trabalhando em soluções de rastreamento" className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"/>
          </div>
        </div>

        {/* Texto adicional */}
        <div className={"text-center mt-12 transition-all duration-1000 delay-1200 ".concat(isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Com anos de experiência no mercado de rastreamento veicular, nossa equipe especializada 
            trabalha incansavelmente para oferecer as melhores soluções de segurança. Utilizamos 
            tecnologia de ponta e um atendimento humanizado para garantir que seu veículo esteja 
            sempre protegido, onde quer que você esteja.
          </p>
        </div>
      </div>
    </section>);
};
exports.default = AboutTeam;
