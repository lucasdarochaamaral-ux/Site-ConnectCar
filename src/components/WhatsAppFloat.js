"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react"); // Importar o ícone de telefone
var WhatsAppFloat = function () {
    var _a = (0, react_1.useState)(false), isPopupOpen = _a[0], setIsPopupOpen = _a[1];
    var _b = (0, react_1.useState)(false), showTyping = _b[0], setShowTyping = _b[1];
    var _c = (0, react_1.useState)(false), showMessage1 = _c[0], setShowMessage1 = _c[1];
    var _d = (0, react_1.useState)(false), showMessage2 = _d[0], setShowMessage2 = _d[1];
    var _e = (0, react_1.useState)(false), typingShown = _e[0], setTypingShown = _e[1];
    (0, react_1.useEffect)(function () {
        // Verificar se a animação de digitação já foi mostrada
        var hasTypingShown = sessionStorage.getItem('typingShown') === 'true';
        setTypingShown(hasTypingShown);
        // Abrir popup após scroll (5 segundos)
        var hasScrolled = false;
        var handleScroll = function () {
            if (!hasScrolled && !sessionStorage.getItem('popupShown')) {
                hasScrolled = true;
                setTimeout(function () {
                    openPopup();
                    sessionStorage.setItem('popupShown', 'true');
                }, 5000);
            }
        };
        // Abrir popup quando mouse sai da página (exit intent)
        var handleMouseOut = function (e) {
            if (!sessionStorage.getItem('popupShown') && e.clientY < 0) {
                openPopup();
                sessionStorage.setItem('popupShown', 'true');
            }
        };
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mouseout', handleMouseOut);
        return function () {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);
    var getGreeting = function () {
        var hour = new Date().getHours();
        if (hour >= 5 && hour < 12)
            return "Bom dia!";
        else if (hour >= 12 && hour < 18)
            return "Boa tarde!";
        else
            return "Boa noite!";
    };
    var openPopup = function () {
        setIsPopupOpen(true);
        if (!typingShown) {
            setTypingShown(true);
            sessionStorage.setItem('typingShown', 'true');
            // Mostrar animação de digitação
            setShowTyping(true);
            setTimeout(function () {
                setShowTyping(false);
                setShowMessage1(true);
                setTimeout(function () {
                    setShowMessage2(true);
                }, 1000);
            }, 3000);
        }
        else {
            // Se já foi mostrado antes, mostrar mensagens diretamente
            setShowMessage1(true);
            setTimeout(function () {
                setShowMessage2(true);
            }, 1000);
        }
    };
    var closePopup = function () {
        setIsPopupOpen(false);
        setShowTyping(false);
        setShowMessage1(false);
        setShowMessage2(false);
    };
    var togglePopup = function () {
        if (isPopupOpen) {
            closePopup();
        }
        else {
            openPopup();
        }
    };
    var handleStartChat = function () {
        // Google Analytics tracking
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({ event: 'clique_whatsapp_flutuante' });
        }
    };
    return (<>
      {/* Botão Flutuante - Tamanho reduzido */}
      <div onClick={togglePopup} className="fixed bottom-5 left-5 rounded-full shadow-lg flex items-center justify-center cursor-pointer z-50 hover:scale-105 transition-transform" style={{
            backgroundColor: '#40E070', // Clareado de #25D366 para #40E070
            width: '70px',
            height: '70px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.4)',
            animation: 'pulse 2s infinite'
        }}>
        {/* Ícone do WhatsApp como fundo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="45" height="45" viewBox="0 0 24 24" fill="white" className="opacity-20">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z"/>
          </svg>
        </div>
        
        {/* Ícone de telefone no centro */}
        <lucide_react_1.Phone size={24} color="white" className="z-10"/>
      </div>

      {/* Popup */}
      {isPopupOpen && (<div className="fixed bottom-24 left-5 w-75 bg-white rounded-xl shadow-2xl z-50 overflow-hidden" style={{
                width: '300px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                animation: 'fadeIn 0.5s ease forwards'
            }}>
          {/* Header */}
          <div className="flex items-center justify-center relative p-3 text-white font-bold" style={{ backgroundColor: '#25D366' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="absolute left-3 w-6 h-6"/>
            <span className="text-base">Atendimento ConnectCar</span>
            <button onClick={closePopup} className="absolute right-3 bg-transparent border-none text-white text-xl cursor-pointer hover:opacity-80">
              ×
            </button>
          </div>

          {/* Body */}
          <div className="p-2.5" style={{ backgroundColor: '#e5ddd5' }}>
            {/* Mensagem de digitação */}
            {showTyping && (<div className="mb-2.5 p-2.5 rounded-lg text-sm max-w-4/5 relative" style={{
                    backgroundColor: '#DCF8C6',
                    borderRadius: '8px 8px 8px 0',
                    animation: 'fadeInMessage 0.5s ease forwards'
                }}>
                <p className="m-0 font-normal">
                  Digitando
                  <span className="inline-block ml-1">
                    <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>.</span>
                    <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>.</span>
                    <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>.</span>
                  </span>
                </p>
              </div>)}

            {/* Primeira mensagem */}
            {showMessage1 && (<div className="mb-2.5 p-2.5 rounded-lg text-sm max-w-4/5 relative" style={{
                    backgroundColor: '#DCF8C6',
                    borderRadius: '8px 8px 8px 0',
                    animation: 'fadeInMessage 0.5s ease forwards'
                }}>
                <p className="m-0 font-normal">
                  {getGreeting()} Acompanhe seu veículo ou frota em tempo real através do celular e do computador.
                </p>
                <span className="text-xs text-gray-500 mt-1 block text-right">Agora</span>
              </div>)}

            {/* Segunda mensagem */}
            {showMessage2 && (<div className="mb-2.5 p-2.5 rounded-lg text-sm max-w-4/5 relative" style={{
                    backgroundColor: '#DCF8C6',
                    borderRadius: '8px 8px 8px 0',
                    animation: 'fadeInMessage 0.5s ease forwards'
                }}>
                <p className="m-0 font-normal">
                  Receba um orçamento sem compromisso, contrate sem carência ou taxas, cancele e reative sem custos.
                </p>
                <span className="text-xs text-gray-500 mt-1 block text-right">Agora</span>
              </div>)}
          </div>

          {/* Footer */}
          <div className="p-2.5 text-center" style={{ backgroundColor: '#f0f0f0' }}>
            <a href="https://api.whatsapp.com/send?phone=5511917487107&text=Bom%20dia,%20tudo%20bem!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20rastreamento.&utm_source=site&utm_medium=botao&utm_campaign=geral" target="_blank" rel="noopener noreferrer" onClick={handleStartChat} className="text-white font-bold py-2 px-4 rounded no-underline hover:opacity-90 transition-opacity" style={{ backgroundColor: '#25D366' }}>
              Iniciar Conversa
            </a>
          </div>
        </div>)}

      {/* Estilos CSS inline para animações */}
      <style>{"\n        @keyframes pulse {\n          0% { box-shadow: 0 0 0 0 rgba(64, 224, 112, 0.7); }\n          70% { box-shadow: 0 0 0 10px rgba(64, 224, 112, 0); }\n          100% { box-shadow: 0 0 0 0 rgba(64, 224, 112, 0); }\n        }\n\n        @keyframes fadeIn {\n          from { opacity: 0; transform: translateY(20px); }\n          to { opacity: 1; transform: translateY(0); }\n        }\n\n        @keyframes fadeInMessage {\n          from { opacity: 0; transform: translateY(10px); }\n          to { opacity: 1; transform: translateY(0); }\n        }\n      "}</style>
    </>);
};
exports.default = WhatsAppFloat;
