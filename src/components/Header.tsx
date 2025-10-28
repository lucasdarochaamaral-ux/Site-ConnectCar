import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import logoConnectCar from '../assets/images/LogoConnectCar.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    // Verificar tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Debounce para scroll mais suave
    let scrollTimeout: number;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Cabeçalho sticky desde o primeiro scroll (10px)
        if (window.scrollY > 10) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        // Scroll spy para detectar seção ativa - CORRIGIDO para detectar topo corretamente
        const sections = ['inicio', 'beneficios', 'como-funciona', 'about-team', 'planos', 'faq', 'contato'];
        let currentSection = 'inicio'; // Default para início

        // Se estiver no topo da página (primeiros 100px), sempre manter "inicio"
        if (window.scrollY <= 100) {
          currentSection = 'inicio';
        } else {
          // Para outras seções, verificar qual está ativa
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const element = document.getElementById(section);
            if (element) {
              const offsetTop = element.offsetTop;
              // Ajustado offset para considerar nova altura do header fixo
              const scrollPosition = window.scrollY + 120; 
              
              if (scrollPosition >= offsetTop) {
                currentSection = section;
                break;
              }
            }
          }
        }

        // Sempre atualizar para garantir que a animação funcione corretamente
        setActiveSection(currentSection);
      }, 15); // Debounce de 15ms para transições suaves
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Fechar menu mobile ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const target = event.target as Element;
        const menuButton = document.querySelector('[aria-label="Menu de navegação"]');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (menuButton && mobileMenu && 
            !menuButton.contains(target) && 
            !mobileMenu.contains(target)) {
          setIsMenuOpen(false);
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Componente para item de menu com animação MELHORADA
  const MenuLink: React.FC<{ href: string; children: React.ReactNode; sectionId: string }> = ({ href, children, sectionId }) => {
    const isActive = activeSection === sectionId;
    const [showActiveAnimation, setShowActiveAnimation] = React.useState(false);
    
    // Efeito para controlar a animação quando a seção se torna ativa - MELHORADO
    React.useEffect(() => {
      if (isActive) {
        // Delay reduzido e transição mais suave
        const timer = setTimeout(() => {
          setShowActiveAnimation(true);
        }, 20);
        return () => clearTimeout(timer);
      } else {
        setShowActiveAnimation(false);
      }
    }, [isActive]);
    
    return (
      <a 
        href={href} 
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(sectionId);
          // Para cliques diretos, ativar animação imediatamente
          setShowActiveAnimation(true);
        }}
        className={`font-medium text-white hover:text-white transition-all duration-200 relative group`}
      >
        {children}
        {/* Linha para hover - só aparece quando não está ativo */}
        {!isActive && (
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-200 ease-in-out group-hover:w-full"></span>
        )}
        {/* Linha para seção ativa com animação gradual - MELHORADA */}
        {isActive && (
          <span 
            className={`absolute bottom-0 left-0 h-0.5 bg-orange-400 transition-all duration-300 ease-in-out ${
              showActiveAnimation ? 'w-full' : 'w-0'
            }`}
          ></span>
        )}
      </a>
    );
  };

  return (
    <>
      {/* Header Wrapper para evitar salto de layout */}
      <div className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'h-12 md:h-14' 
          : 'h-14 md:h-16'
      }`}></div>
      
      <header 
        className={`fixed w-full z-[1000] transition-all duration-300 top-0 ${
          isScrolled 
            ? 'bg-gray-900/90 dark:bg-gray-950/90 backdrop-blur-md shadow-lg py-2 md:py-2'
            : 'bg-gray-900/95 dark:bg-gray-950/95 backdrop-blur-sm shadow-md py-3 md:py-3'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src={logoConnectCar} 
              alt="ConnectCar" 
              className={`w-auto transition-all duration-300 ${
                isScrolled 
                  ? 'h-6 md:h-8'
                  : 'h-7 md:h-9'
              }`}
              style={{ maxHeight: '36px' }}
            />
          </a>
        </div>

        {/* Desktop Menu - CORRIGIDO com todas as seções */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <MenuLink href="#inicio" sectionId="inicio">Início</MenuLink>
          <MenuLink href="#beneficios" sectionId="beneficios">Benefícios</MenuLink>
          <MenuLink href="#como-funciona" sectionId="como-funciona">Como Funciona</MenuLink>
          <MenuLink href="#about-team" sectionId="about-team">Sobre Nós</MenuLink>
          <MenuLink href="#planos" sectionId="planos">Planos</MenuLink>
          <MenuLink href="#faq" sectionId="faq">FAQ</MenuLink>
          <MenuLink href="#contato" sectionId="contato">Contato</MenuLink>
        </nav>

        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Botão de alternância de tema */}
          <button
            onClick={toggleTheme}
            className="p-1.5 md:p-2 rounded-full text-white hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-300 hover:scale-110"
            aria-label="Alternar tema"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* WhatsApp Button - REDUZIDO EM 20% */}
          <a 
            href="https://api.whatsapp.com/send?phone=5511917487107&text=Bom%20dia,%20tudo%20bem!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20rastreamento.&utm_source=site&utm_medium=botao&utm_campaign=geral" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-3 py-1.5 rounded-full transition-all relative text-sm font-medium min-w-[100px]"
            >
              <div className="relative mr-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z"/>
                </svg>
                <Phone size={8} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <span>WhatsApp</span>
            </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-1.5 rounded-md text-white hover:bg-gray-800 hover:bg-opacity-50 transition-colors"
            aria-label="Menu de navegação"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          </div>
      </div>

      {/* Mobile Menu - CORRIGIDO com todas as seções */}
      <div className={`md:hidden bg-white dark:bg-gray-800 shadow-lg absolute top-full left-0 w-full transition-all duration-300 ease-in-out mobile-menu ${
        isMenuOpen 
          ? 'opacity-100 transform translate-y-0 visible' 
          : 'opacity-0 transform -translate-y-4 invisible'
      }`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#inicio" className="text-gray-800 dark:text-gray-200 hover:text-orange-700 dark:hover:text-orange-400 font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('inicio'); toggleMenu(); }}>Início</a>
          <a href="#beneficios" className="text-gray-800 dark:text-gray-200 hover:text-orange-700 dark:hover:text-orange-400 font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('beneficios'); toggleMenu(); }}>Benefícios</a>
          <a href="#como-funciona" className="text-gray-800 dark:text-gray-200 hover:text-orange-700 dark:hover:text-orange-400 font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('como-funciona'); toggleMenu(); }}>Como Funciona</a>
          <a href="#about-team" className="text-gray-800 dark:text-gray-200 hover:text-orange-700 dark:hover:text-orange-400 font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('about-team'); toggleMenu(); }}>Sobre Nós</a>
          <a href="#planos" className="text-gray-800 dark:text-gray-200 hover:text-orange-700 dark:hover:text-orange-400 font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('planos'); toggleMenu(); }}>Planos</a>
          <a href="#faq" className="text-gray-800 dark:text-gray-200 hover:text-orange-700 dark:hover:text-orange-400 font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); toggleMenu(); }}>FAQ</a>
          <a href="#contato" className="text-gray-800 dark:text-gray-200 hover:text-orange-700 dark:hover:text-orange-400 font-medium transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); toggleMenu(); }}>Contato</a>
          
          {/* Botão de tema no mobile */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center space-x-2 text-gray-800 dark:text-gray-200 hover:text-orange-700 dark:hover:text-orange-400 font-medium transition-colors py-2"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{isDarkMode ? 'Modo Claro' : 'Modo Escuro'}</span>
          </button>
          
          <a 
            href="https://api.whatsapp.com/send?phone=5511917487107&text=Bom%20dia,%20tudo%20bem!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o%20de%20rastreamento.&utm_source=site&utm_medium=botao&utm_campaign=geral" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-4 py-2.5 rounded-full transition-all relative font-medium"
            onClick={() => toggleMenu()}
            >
              <div className="relative mr-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63z"/>
                </svg>
                <Phone size={9} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

