import React, { useState, useEffect } from 'react';

interface DronefallPageProps {
  onEnterDashboard?: () => void;
}

const DronefallPage: React.FC<DronefallPageProps> = ({ onEnterDashboard }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) { // Só começa a esconder após 100px de scroll
        if (currentScrollY > lastScrollY && !isMenuOpen) {
          // Scrolling down
          setIsHeaderVisible(false);
        } else {
          // Scrolling up
          setIsHeaderVisible(true);
        }
      } else {
        // No topo da página, sempre mostrar
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY, isMenuOpen]);

  // Funções de navegação
  const handleEnterDashboard = () => {
    console.log('🎮 Navegando para biblioteca...');
    if (onEnterDashboard) {
      onEnterDashboard();
    } else {
      console.warn('⚠️ onEnterDashboard não está definido');
    }
  };

  const handleNavigateToLibrary = () => {
    console.log('📚 Ver Biblioteca clicado...');
    if (onEnterDashboard) {
      onEnterDashboard();
    } else {
      console.warn('⚠️ onEnterDashboard não está definido');
    }
  };

  return (
    <>
      {/* Background fixo e escuro */}
      <div 
        className="fixed inset-0 w-full h-full z-0" 
        style={{ 
          backgroundImage: "url(/bgrepeat.png)", 
          backgroundRepeat: "repeat",
          backgroundColor: "#0a0a0a",
          backgroundSize: "auto",
          filter: "brightness(0.7)",
          transform: "translateZ(0)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden"
        }}
      />
      
      <div className="min-h-screen text-white overflow-x-hidden relative z-10">
      
      {/* Conteúdo principal */}
      <div className="relative z-20">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800 transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h1-block">
                  <img 
                    src="/logoimagetransp.png" 
                    alt="RETROVAULT" 
                    className="h-8 w-auto"
                    style={{
                      filter: 'drop-shadow(1px 0 0 rgba(255, 255, 255, 0.9)) drop-shadow(-1px 0 0 rgba(255, 255, 255, 0.9)) drop-shadow(0 1px 0 rgba(255, 255, 255, 0.9)) drop-shadow(0 -1px 0 rgba(255, 255, 255, 0.9))'
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#mission" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Missão</a>
                <a href="#equipment" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Funcionalidades</a>
                <a href="#completed" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Estatísticas</a>
                <button onClick={handleNavigateToLibrary} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Biblioteca</button>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
              <a href="#mission" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Missão</a>
              <a href="#equipment" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Funcionalidades</a>
              <a href="#completed" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Estatísticas</a>
              <a href="#league" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Biblioteca</a>
            </div>
          </div>
        )}
        </div>
      </nav>

      {/* Hero Visual Section */}
      <section className="relative h-screen">
        <div className="w-layout-blockcontainer container w-container">
          <div className="content-block is--hero">
            <div className="hero-image relative w-full h-full" style={{ transform: 'translate(0px, 0px)', opacity: 1, willChange: 'transform', backfaceVisibility: 'hidden' }}>
              
              {/* Background Sky */}
              <img 
                src="/bgsky.png" 
              alt="" 
              className="image-part is--background absolute inset-0 w-full h-full object-cover"
                loading="eager"
                width="1440"
              style={{ 
                zIndex: 1,
                filter: 'hue-rotate(180deg) saturate(1.2) brightness(0.8) contrast(1.1)',
                mixBlendMode: 'multiply'
              }}
            />
            
              {/* Front Image */}
            <img 
                src="/retronew1.png" 
              alt="" 
              className="image-part is--front absolute inset-0 w-full h-full object-cover"
                loading="eager"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px"
              style={{ 
                zIndex: 2,
                filter: 'hue-rotate(200deg) saturate(1.3) brightness(0.9) contrast(1.2)',
                mixBlendMode: 'overlay'
              }}
            />
            
              {/* City 1 */}
            <img 
                src="/mountainbg.png" 
              alt="" 
              className="image-part is--city-1 absolute inset-0 w-full h-full object-cover"
                loading="eager"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px"
              style={{ 
                zIndex: 3,
                  mixBlendMode: 'screen'
              }}
            />
            
              {/* City 2 */}
            <img 
              src="/image1city2_1.webp" 
              alt="" 
              className="image-part is--city-2 absolute inset-0 w-full h-full object-cover"
                loading="eager"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px"
              style={{ 
                zIndex: 4,
                opacity: 0.4,
                filter: 'hue-rotate(300deg) saturate(1.5) brightness(0.6) contrast(1.4)',
                mixBlendMode: 'color-burn'
              }}
            />
            
            </div>
          </div>
          
          {/* Hero Text Block */}
          <div className="hero-text-block has--larger-margin absolute top-48 right-8" style={{ zIndex: 17 }}>
            <div className="hero-text-line flex items-center space-x-2 mb-2">
              <p className="hero-text is--smaller text-white text-6xl font-bold font-mono">[</p>
              <p className="hero-text has--right-margin text-white text-lg">THE SAFE DRIVE FOR</p>
            </div>
            <div className="hero-text-line flex items-center space-x-2">
              <p className="hero-text text-white text-2xl font-bold">ALL YOUR ADVENTURES</p>
              <p className="hero-text is--smaller text-white text-6xl font-bold font-mono">]</p>
            </div>
          </div>
          
          {/* Action Buttons - Top Right */}
          <div className="navlinks-wrapper absolute top-20 right-8" style={{ zIndex: 15 }}>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleEnterDashboard}
                className="custom-button"
              >
                Começar Agora
              </button>
              <button 
                onClick={handleNavigateToLibrary}
                className="custom-button-secondary"
              >
                Ver Biblioteca
              </button>
            </div>
          </div>

          {/* RETROVAULT Logo */}
          <div className="hero-bottom absolute -bottom-20 left-8 right-8 flex flex-col items-center" style={{ zIndex: 999 }}>
            <div className="h1-block mb-8">
              <h1 
                className="h1 is--smaller text-white text-8xl md:text-9xl lg:text-[300px] font-bold tracking-wider"
                style={{
                  background: 'none !important',
                  backgroundImage: 'none !important',
                  border: 'none !important',
                  fontSize: '8rem',
                  fontWeight: 'bold'
                }}
              >
                RETROVAULT
              </h1>
            </div>
          </div>

          {/* Retronew2 - Segundo Plano */}
          <img 
            src="/retronew2.png" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              zIndex: 14,
              opacity: 1
            }}
          />

          {/* Retronew1 - Primeiro Plano */}
          <img 
            src="/retronew1.png" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              zIndex: 15,
              opacity: 1
            }}
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-20">
        <div className="w-layout-blockcontainer container w-container">
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-center font-medium">
            A plataforma definitiva para armazenar, gerenciar e proteger o progresso dos seus jogos retrô. Nunca mais perca um save.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              NOSSA MISSÃO
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
              Revolucionar a preservação de jogos retrô através de tecnologia de ponta, armazenamento seguro e experiências imersivas que protegem suas conquistas para sempre.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-transparent backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="flex flex-col items-center text-center h-full">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <img src="/safetyimg.png" alt="Segurança" className="object-contain security-glow icon-hover-effect" style={{width: 'auto', height: '120px'}} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Segurança</h3>
                <p className="text-white/90 font-medium">Armazenamento criptografado e backup automático para proteger seus saves.</p>
              </div>
            </div>
            <div className="bg-transparent backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="flex flex-col items-center text-center h-full">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <img src="/acessibilityimg.png" alt="Acessibilidade" className="object-contain accessibility-pulse icon-hover-effect" style={{width: 'auto', height: '156px'}} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Acessibilidade</h3>
                <p className="text-white/90 font-medium">Acesse seus saves de qualquer dispositivo, a qualquer momento.</p>
              </div>
            </div>
            <div className="bg-transparent backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="flex flex-col items-center text-center h-full">
                <div className="flex-1 flex items-center justify-center mb-4">
                  <img src="/organizationimg.png" alt="Organização" className="object-contain organization-shine icon-hover-effect" style={{width: 'auto', height: '156px'}} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">Organização</h3>
                <p className="text-white/90 font-medium">Catálogo inteligente que organiza seus jogos por console e progresso.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="equipment" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              PRINCIPAIS FUNCIONALIDADES
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
              Tecnologia de ponta para preservação de jogos retrô. Upload inteligente, organização automática e acesso universal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="text-6xl mb-4 text-center">📁</div>
              <h3 className="text-xl font-bold mb-2 text-white">Upload Inteligente</h3>
              <p className="text-white/70 font-semibold mb-3">Upload</p>
              <p className="text-white/90 text-sm font-medium mb-4">Análise automática de pastas de emulador para identificar saves e capas</p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105">Experimentar</button>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="text-6xl mb-4 text-center">🎮</div>
              <h3 className="text-xl font-bold mb-2 text-white">Biblioteca Steam</h3>
              <p className="text-white/70 font-semibold mb-3">Interface</p>
              <p className="text-white/90 text-sm font-medium mb-4">Interface estilo Steam para navegar e organizar seus jogos retrô</p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105">Experimentar</button>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="text-6xl mb-4 text-center">☁️</div>
              <h3 className="text-xl font-bold mb-2 text-white">Sincronização</h3>
              <p className="text-white/70 font-semibold mb-3">Cloud</p>
              <p className="text-white/90 text-sm font-medium mb-4">Sincronização automática entre dispositivos e backup na nuvem</p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105">Experimentar</button>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="text-6xl mb-4 text-center">📚</div>
              <h3 className="text-xl font-bold mb-2 text-white">Catálogo Completo</h3>
              <p className="text-white/70 font-semibold mb-3">Database</p>
              <p className="text-white/90 text-sm font-medium mb-4">Base de dados com milhares de jogos e metadados automáticos</p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105">Experimentar</button>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="text-6xl mb-4 text-center">🔍</div>
              <h3 className="text-xl font-bold mb-2 text-white">Filtros Avançados</h3>
              <p className="text-white/70 font-semibold mb-3">Search</p>
              <p className="text-white/90 text-sm font-medium mb-4">Busca inteligente por console, gênero, progresso e tags</p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105">Experimentar</button>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="text-6xl mb-4 text-center">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-white">Conquistas</h3>
              <p className="text-white/70 font-semibold mb-3">Achievements</p>
              <p className="text-white/90 text-sm font-medium mb-4">Integração com RetroAchievements para tracking de progresso</p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105">Experimentar</button>
              </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="completed" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              ESTATÍSTICAS DA PLATAFORMA
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
              Acompanhe o crescimento da comunidade e o sucesso da plataforma.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="text-5xl font-bold text-white mb-2">15,247</div>
              <div className="text-white/90 font-medium">Saves Protegidos</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="text-5xl font-bold text-white mb-2">99.8%</div>
              <div className="text-white/90 font-medium">Taxa de Sucesso</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="text-5xl font-bold text-white mb-2">8,847</div>
              <div className="text-white/90 font-medium">Jogos Catalogados</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
              <div className="text-5xl font-bold text-white mb-2">1,242</div>
              <div className="text-white/90 font-medium">Usuários Ativos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section id="league" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              BIBLIOTECA RETROVAULT
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium">
              Explore sua coleção de jogos retrô. Organize, filtre e gerencie todos os seus saves em um só lugar.
            </p>
          </div>
          <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
            <div className="p-6 border-b border-white/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h3 className="text-2xl font-bold text-white">Status da Biblioteca</h3>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg transition-all duration-300 bg-white text-black font-bold hover:scale-105 shadow-lg">All</button>
                  <button className="px-4 py-2 rounded-lg transition-all duration-300 bg-white/10 text-white hover:bg-white hover:text-black font-medium hover:scale-105">Nintendo</button>
                  <button className="px-4 py-2 rounded-lg transition-all duration-300 bg-white/10 text-white hover:bg-white hover:text-black font-medium hover:scale-105">PlayStation</button>
                  <button className="px-4 py-2 rounded-lg transition-all duration-300 bg-white/10 text-white hover:bg-white hover:text-black font-medium hover:scale-105">Sega</button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Nome do Jogo</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Console</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Saves</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Progresso</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-white font-medium">Super Mario World</td>
                    <td className="px-6 py-4 text-sm text-white/90">Super Nintendo</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30">Completo</span></td>
                    <td className="px-6 py-4 text-sm text-white/90">3</td>
                    <td className="px-6 py-4 text-sm text-white/90">100%</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-white font-medium">Chrono Trigger</td>
                    <td className="px-6 py-4 text-sm text-white/90">Super Nintendo</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">Em Progresso</span></td>
                    <td className="px-6 py-4 text-sm text-white/90">2</td>
                    <td className="px-6 py-4 text-sm text-white/90">75%</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-white font-medium">Sonic 2</td>
                    <td className="px-6 py-4 text-sm text-white/90">Sega Genesis</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30">Completo</span></td>
                    <td className="px-6 py-4 text-sm text-white/90">1</td>
                    <td className="px-6 py-4 text-sm text-white/90">100%</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-white font-medium">Final Fantasy VII</td>
                    <td className="px-6 py-4 text-sm text-white/90">PlayStation</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30">Completo</span></td>
                    <td className="px-6 py-4 text-sm text-white/90">5</td>
                    <td className="px-6 py-4 text-sm text-white/90">100%</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm text-white font-medium">The Legend of Zelda</td>
                    <td className="px-6 py-4 text-sm text-white/90">Nintendo 64</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20">Em Progresso</span></td>
                    <td className="px-6 py-4 text-sm text-white/90">2</td>
                    <td className="px-6 py-4 text-sm text-white/90">60%</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="h1-block mb-4">
                <h3 className="h1 h1--small">RETROVAULT</h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                A plataforma definitiva para armazenar, gerenciar e proteger o progresso dos seus jogos retrô. Nunca mais perca um save.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/my.retrovault" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Plataforma</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Biblioteca</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Upload</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Catálogo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Conquistas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reportar Bugs</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 RetroVault. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <div className="noise-block"></div>
      </div>
      </div>
    </>
  );
};

export default DronefallPage;