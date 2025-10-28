"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var connectcar_logo_new_png_1 = require("../assets/images/connectcar_logo_new.png");
var Footer = function () {
    return (<footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-2">
              <img src={connectcar_logo_new_png_1.default} alt="ConnectCar" className="h-16 w-auto"/>
            </div>
            <p className="text-gray-400 mb-4">
              Rastreamento Automotivo para carros, motos, frotas e máquinas com tecnologia de ponta e preço justo.
            </p>
            <div className="flex space-x-4 items-center">
              {/* Apenas ícone do Google Meu Negócio */}
              <a href="https://www.google.com/maps/place/Rastreamento+Automotivo+ConnectCar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700 group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2 group-hover:scale-110 transition-transform">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-sm font-medium group-hover:text-orange-400 transition-colors">Avalie no Google</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#planos" className="text-gray-400 hover:text-white transition-colors">Planos</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <lucide_react_1.MapPin size={18} className="text-orange-500 mr-2 mt-1 flex-shrink-0"/>
                <span className="text-gray-400 dark:text-white transition-colors duration-300">
                  Rua Barão do Rio Branco, 1121 - Stella Maris - Peruíbe/SP
                </span>
              </li>
              <li className="flex items-center">
                <lucide_react_1.Phone size={18} className="text-orange-500 mr-2 flex-shrink-0"/>
                <a href="tel:+5500000000000" className="text-gray-400 dark:text-white hover:text-white transition-colors">
                  (00) 00000-0000
                </a>
              </li>
              <li className="flex items-center">
                <lucide_react_1.Mail size={18} className="text-orange-500 mr-2 flex-shrink-0"/>
                <a href="mailto:contato@connectcar123.com.br" className="text-gray-400 dark:text-white hover:text-white transition-colors">
                  contato@connectcar123.com.br
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 dark:text-white hover:text-white transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-white hover:text-white transition-colors">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-white hover:text-white transition-colors">Política de Cookies</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-white text-sm mb-4 md:mb-0 transition-colors duration-300">
              &copy; {new Date().getFullYear()} ConnectCar. Todos os direitos reservados. CNPJ: 30.761.459/0001-79
            </p>
            <div className="text-gray-500 dark:text-white text-sm transition-colors duration-300">
              <span>Desenvolvido por </span>
              <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors">
                ConnectCar
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>);
};
exports.default = Footer;
