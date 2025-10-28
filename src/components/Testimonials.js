"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var google_logo_png_1 = require("../assets/images/google-logo.png");
var Testimonials = function () {
    var testimonials = [
        {
            id: 1,
            name: "Carlos Silva",
            rating: 5,
            comment: "Excelente serviço de rastreamento! O ConnectCar me deu total tranquilidade. O aplicativo é muito fácil de usar e o suporte técnico é sempre prestativo. Já indiquei para vários amigos e todos ficaram satisfeitos.",
            date: "há 2 meses"
        },
        {
            id: 2,
            name: "Ana Oliveira",
            rating: 5,
            comment: "Muito satisfeita com o ConnectCar. A instalação foi super rápida, em menos de 30 minutos estava tudo funcionando. O preço é justo e não tem fidelidade, o que é ótimo. Recomendo para todas as mulheres que querem se sentir mais seguras.",
            date: "há 1 mês"
        },
        {
            id: 3,
            name: "Roberto Santos",
            rating: 5,
            comment: "Ótimo custo-benefício! Já salvou meu carro duas vezes de tentativas de furto. O bloqueio remoto funciona perfeitamente e consigo acompanhar tudo em tempo real. Vale muito a pena investir na segurança do veículo.",
            date: "há 3 semanas"
        },
        {
            id: 4,
            name: "Bruno Prado",
            rating: 4,
            comment: "Comecei usando para controlar minha frota de entregas e hoje não abro mão. Aplicativo prático, rastreamento em tempo real e suporte rápido!",
            date: "há 2 semanas"
        },
        {
            id: 5,
            name: "Caique Severino",
            rating: 5,
            comment: "Me surpreendi com a qualidade e custo-benefício. Instalei em todos os veículos da empresa e ainda consegui economizar com seguro.",
            date: "há 1 semana"
        },
        {
            id: 6,
            name: "Maria Costa",
            rating: 5,
            comment: "Serviço confiável e suporte sempre disponível quando preciso. Minha família toda usa ConnectCar nos carros. A tecnologia é moderna e nunca tivemos problemas. É uma empresa séria e comprometida com a qualidade.",
            date: "há 1 semana"
        },
        {
            id: 7,
            name: "João Pereira",
            rating: 5,
            comment: "Para quem tem frota como eu, é essencial ter o ConnectCar. Controlo todos os 8 veículos da empresa em tempo real, vejo rotas, velocidade, tudo. Aumentou muito a produtividade e diminuiu os custos operacionais.",
            date: "há 2 semanas"
        },
        {
            id: 8,
            name: "Fernanda Lima",
            rating: 5,
            comment: "Instalação super simples e funciona perfeitamente. Me sinto muito mais segura agora, principalmente quando viajo sozinha. O aplicativo é intuitivo e posso compartilhar minha localização com a família. Excelente investimento!",
            date: "há 4 dias"
        },
        {
            id: 9,
            name: "Paulo Mendes",
            rating: 5,
            comment: "Preço justo e qualidade excelente. O bloqueio remoto já me ajudou muito quando esqueci onde estacionei. O histórico de rotas é muito útil para controle de quilometragem. Recomendo sem dúvidas!",
            date: "há 1 semana"
        },
        {
            id: 10,
            name: "Luciana Rodrigues",
            rating: 5,
            comment: "Atendimento nota 10! Desde a contratação até o pós-venda, tudo perfeito. O rastreador é discreto e eficiente. Já recuperei meu carro em menos de 2 horas após um furto. ConnectCar salvou meu patrimônio!",
            date: "há 5 dias"
        }
    ];
    var _a = (0, react_1.useState)(0), currentSlide = _a[0], setCurrentSlide = _a[1];
    var _b = (0, react_1.useState)(3), slidesToShow = _b[0], setSlidesToShow = _b[1];
    // Responsividade - 3 comentários (web) / 1 comentário (mobile)
    (0, react_1.useEffect)(function () {
        var updateSlidesToShow = function () {
            var isMobile = window.innerWidth <= 768;
            setSlidesToShow(isMobile ? 1 : 3); // 1 no mobile, 3 no desktop
        };
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return function () { return window.removeEventListener('resize', updateSlidesToShow); };
    }, []);
    // Auto-play com transição aleatória
    (0, react_1.useEffect)(function () {
        var interval = setInterval(function () {
            setCurrentSlide(function (prev) {
                // Calcular o número máximo de slides válidos
                var maxSlide = Math.max(0, Math.ceil(testimonials.length / slidesToShow) - 1);
                if (maxSlide === 0)
                    return 0; // Se só há um grupo, fica no 0
                // Transição aleatória dentro dos slides válidos
                var randomSlide;
                do {
                    randomSlide = Math.floor(Math.random() * (maxSlide + 1));
                } while (randomSlide === prev && maxSlide > 0);
                return randomSlide;
            });
        }, 8000); // 8 segundos
        return function () { return clearInterval(interval); };
    }, [slidesToShow, testimonials.length]);
    var nextSlide = function () {
        var maxSlide = Math.max(0, Math.ceil(testimonials.length / slidesToShow) - 1);
        setCurrentSlide(function (prev) { return (prev >= maxSlide ? 0 : prev + 1); });
    };
    var prevSlide = function () {
        var maxSlide = Math.max(0, Math.ceil(testimonials.length / slidesToShow) - 1);
        setCurrentSlide(function (prev) { return (prev <= 0 ? maxSlide : prev - 1); });
    };
    var goToSlide = function (index) {
        var maxSlide = Math.max(0, Math.ceil(testimonials.length / slidesToShow) - 1);
        setCurrentSlide(Math.min(index, maxSlide));
    };
    var renderStars = function (rating) {
        return Array.from({ length: 5 }, function (_, i) { return (<lucide_react_1.Star key={i} size={16} className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}/>); });
    };
    return (<section id="depoimentos" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600 dark:text-white dark:font-semibold max-w-2xl mx-auto transition-colors duration-300">
            Veja os depoimentos de quem já confia na ConnectCar para proteger seus veículos.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carrossel */}
          <div className="overflow-hidden px-12 md:px-16">
            <div className="flex transition-transform duration-700 ease-in-out" style={{
            transform: "translateX(-".concat(currentSlide * 100, "%)"),
            width: "".concat(Math.ceil(testimonials.length / slidesToShow) * 100, "%")
        }}>
              {testimonials.map(function (testimonial) { return (<div key={testimonial.id} className="px-1 md:px-2" style={{
                width: "".concat(100 / slidesToShow, "%"),
                flexShrink: 0
            }}>
                  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 md:p-5 h-full hover:shadow-xl hover:scale-[1.005] transition-all duration-300 transform-gpu mx-2 md:mx-3">
                    {/* Header com info */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-orange-600 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white font-bold text-lg md:text-xl">
                          {testimonial.name === "Luciana Rodrigues" ? "L" : testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 dark:text-white text-base md:text-lg mb-1 transition-colors duration-300">{testimonial.name}</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {renderStars(testimonial.rating)}
                          </div>
                          <img src={google_logo_png_1.default} alt="Google" className="w-4 h-4 md:w-5 md:h-5"/>
                          <span className="text-xs md:text-sm text-gray-500 dark:text-white transition-colors duration-300">Google</span>
                        </div>
                      </div>
                    </div>

                    {/* Comentário */}
                    <p className="text-gray-600 dark:text-white dark:font-semibold mb-4 leading-relaxed text-sm md:text-base transition-colors duration-300">
                      "{testimonial.comment}"
                    </p>

                    {/* Data */}
                    <p className="text-xs md:text-sm text-gray-400 dark:text-white transition-colors duration-300">{testimonial.date}</p>
                  </div>
                </div>); })}
            </div>
          </div>

          {/* Controles de navegação */}
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 md:p-3 hover:bg-opacity-70 transition-all hover:scale-110 z-10" aria-label="Depoimento anterior">
            <lucide_react_1.ChevronLeft size={16} className="md:w-5 md:h-5"/>
          </button>
          
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 md:p-3 hover:bg-opacity-70 transition-all hover:scale-110 z-10" aria-label="Próximo depoimento">
            <lucide_react_1.ChevronRight size={16} className="md:w-5 md:h-5"/>
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }, function (_, index) { return (<button key={index} onClick={function () { return goToSlide(index); }} className={"w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ".concat(currentSlide === index
                ? 'bg-orange-600 w-4 md:w-8'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500')} aria-label={"Ir para grupo ".concat(index + 1, " de depoimentos")}/>); })}
          </div>
        </div>
      </div>
    </section>);
};
exports.default = Testimonials;
