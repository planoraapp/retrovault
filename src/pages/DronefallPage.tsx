import React, { useState } from 'react';

const DronefallPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative" style={{ backgroundImage: "url(/bgrepeat.png)", backgroundRepeat: "repeat" }}>
      
      {/* Conteúdo principal */}
      <div className="relative z-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h1-block">
                  <img 
                    src="/logopixeltransparent.png" 
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
                <a href="#league" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Biblioteca</a>
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
            <div className="hero-image relative w-full h-full" style={{ transform: 'translate(0px, 0px)', opacity: 1 }}>
              
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
          <div className="hero-text-block has--larger-margin absolute top-32 left-8" style={{ zIndex: 17 }}>
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
              <button className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors shadow-lg">
                Começar Agora
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-colors shadow-lg">
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
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            A plataforma definitiva para armazenar, gerenciar e proteger o progresso dos seus jogos retrô. Nunca mais perca um save.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">NOSSA</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">MISSÃO</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolucionar a preservação de jogos retrô através de tecnologia de ponta, armazenamento seguro e experiências imersivas que protegem suas conquistas para sempre.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-2xl font-bold mb-4">Segurança</h3>
              <p className="text-gray-300">Armazenamento criptografado e backup automático para proteger seus saves.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4">Acessibilidade</h3>
              <p className="text-gray-300">Acesse seus saves de qualquer dispositivo, a qualquer momento.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-colors">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold mb-4">Organização</h3>
              <p className="text-gray-300">Catálogo inteligente que organiza seus jogos por console e progresso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="equipment" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">PRINCIPAIS</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">FUNCIONALIDADES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tecnologia de ponta para preservação de jogos retrô. Upload inteligente, organização automática e acesso universal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4 text-center">📁</div>
              <h3 className="text-xl font-bold mb-2">Upload Inteligente</h3>
              <p className="text-green-400 font-semibold mb-3">Upload</p>
              <p className="text-gray-300 text-sm">Análise automática de pastas de emulador para identificar saves e capas</p>
              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">Experimentar</button>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4 text-center">🎮</div>
              <h3 className="text-xl font-bold mb-2">Biblioteca Steam</h3>
              <p className="text-green-400 font-semibold mb-3">Interface</p>
              <p className="text-gray-300 text-sm">Interface estilo Steam para navegar e organizar seus jogos retrô</p>
              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">Experimentar</button>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4 text-center">☁️</div>
              <h3 className="text-xl font-bold mb-2">Sincronização</h3>
              <p className="text-green-400 font-semibold mb-3">Cloud</p>
              <p className="text-gray-300 text-sm">Sincronização automática entre dispositivos e backup na nuvem</p>
              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">Experimentar</button>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4 text-center">📚</div>
              <h3 className="text-xl font-bold mb-2">Catálogo Completo</h3>
              <p className="text-green-400 font-semibold mb-3">Database</p>
              <p className="text-gray-300 text-sm">Base de dados com milhares de jogos e metadados automáticos</p>
              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">Experimentar</button>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4 text-center">🔍</div>
              <h3 className="text-xl font-bold mb-2">Filtros Avançados</h3>
              <p className="text-green-400 font-semibold mb-3">Search</p>
              <p className="text-gray-300 text-sm">Busca inteligente por console, gênero, progresso e tags</p>
              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">Experimentar</button>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4 text-center">🏆</div>
              <h3 className="text-xl font-bold mb-2">Conquistas</h3>
              <p className="text-green-400 font-semibold mb-3">Achievements</p>
              <p className="text-gray-300 text-sm">Integração com RetroAchievements para tracking de progresso</p>
              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">Experimentar</button>
              </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="completed" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">ESTATÍSTICAS</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">DA PLATAFORMA</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Acompanhe o crescimento da comunidade e o sucesso da plataforma.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">15,247</div>
              <div className="text-gray-300">Saves Protegidos</div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">99.8%</div>
              <div className="text-gray-300">Taxa de Sucesso</div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">8,847</div>
              <div className="text-gray-300">Jogos Catalogados</div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">1,242</div>
              <div className="text-gray-300">Usuários Ativos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section id="league" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">BIBLIOTECA</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">RETROVAULT</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore sua coleção de jogos retrô. Organize, filtre e gerencie todos os seus saves em um só lugar.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h3 className="text-2xl font-bold">Status da Biblioteca</h3>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg transition-colors bg-white text-black">All</button>
                  <button className="px-4 py-2 rounded-lg transition-colors bg-gray-700 text-white hover:bg-gray-600">Nintendo</button>
                  <button className="px-4 py-2 rounded-lg transition-colors bg-gray-700 text-white hover:bg-gray-600">PlayStation</button>
                  <button className="px-4 py-2 rounded-lg transition-colors bg-gray-700 text-white hover:bg-gray-600">Sega</button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Nome do Jogo</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Console</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Saves</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Progresso</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-white font-medium">Super Mario World</td>
                    <td className="px-6 py-4 text-sm text-gray-300">Super Nintendo</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300">Completo</span></td>
                    <td className="px-6 py-4 text-sm text-gray-300">3</td>
                    <td className="px-6 py-4 text-sm text-gray-300">100%</td>
                  </tr>
                  <tr className="hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-white font-medium">Chrono Trigger</td>
                    <td className="px-6 py-4 text-sm text-gray-300">Super Nintendo</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-900 text-yellow-300">Em Progresso</span></td>
                    <td className="px-6 py-4 text-sm text-gray-300">2</td>
                    <td className="px-6 py-4 text-sm text-gray-300">75%</td>
                  </tr>
                  <tr className="hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-white font-medium">Sonic 2</td>
                    <td className="px-6 py-4 text-sm text-gray-300">Sega Genesis</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300">Completo</span></td>
                    <td className="px-6 py-4 text-sm text-gray-300">1</td>
                    <td className="px-6 py-4 text-sm text-gray-300">100%</td>
                  </tr>
                  <tr className="hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-white font-medium">Final Fantasy VII</td>
                    <td className="px-6 py-4 text-sm text-gray-300">PlayStation</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300">Completo</span></td>
                    <td className="px-6 py-4 text-sm text-gray-300">5</td>
                    <td className="px-6 py-4 text-sm text-gray-300">100%</td>
                  </tr>
                  <tr className="hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-white font-medium">The Legend of Zelda</td>
                    <td className="px-6 py-4 text-sm text-gray-300">Nintendo 64</td>
                    <td className="px-6 py-4 text-sm"><span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-900 text-yellow-300">Em Progresso</span></td>
                    <td className="px-6 py-4 text-sm text-gray-300">2</td>
                    <td className="px-6 py-4 text-sm text-gray-300">60%</td>
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"></path>
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
  );
};

export default DronefallPage;