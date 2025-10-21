import React from 'react';

interface LandingPageProps {
  onEnterDashboard: () => void;
  onNavigateToDronefall: () => void;
}

export default function LandingPage({ onEnterDashboard, onNavigateToDronefall }: LandingPageProps) {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-5 md:px-20">
      {/* Header / Navbar */}
      <header className="py-6 md:py-5">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="./logoimagetransp.png" 
              alt="RetroVault Logo" 
              className="w-16 h-16 object-contain"
            />
            <img 
              src="./logopixeltransparent.png" 
              alt="RetroVault Text Logo" 
              className="h-10 object-contain"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Funcionalidades</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Preços</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Comunidade</a>
            <button 
              onClick={onNavigateToDronefall}
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
            >
              Dronefall
            </button>
          </div>
          <button 
            onClick={onEnterDashboard}
            className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-transform hover:scale-105"
          >
            Começar Agora
          </button>
        </nav>
      </header>

      {/* Seção Hero */}
      <main className="py-10 md:py-20">
        <div className="relative w-full h-full">
          {/* Container unificado que conecta ambas as seções */}
          <div className="hero-unified-container relative w-full h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden">
            
            {/* Seção da Esquerda: Texto */}
            <div className="absolute left-0 top-0 w-full md:w-7/12 h-full">
              <div className="flex flex-col h-full p-8 md:p-12">
                {/* Container com efeito roxo que cobre apenas os textos */}
                <div className="hero-text-container relative flex-1 mb-6">
                  <div className="relative z-10">
                    <div className="h1-block mb-4">
                      <h1 className="h1 h1--medium" style={{fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'}}>
                        Seus saves.
                      </h1>
                    </div>
                    <div className="h1-block">
                      <h1 className="h1 h1--medium" style={{fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'}}>
                        <span className="gradient-text">Para Sempre.</span>
                      </h1>
                    </div>
                  </div>
                  <p className="text-lg text-white max-w-[45ch] relative z-10 mt-4">
                    A plataforma definitiva para armazenar, gerenciar e proteger o progresso dos seus jogos retrô. Falhas de hardware e baterias fracas não são mais o fim do jogo.
                  </p>
                </div>
                
                {/* Botões fora do container roxo - sem background */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={onEnterDashboard}
                    className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-lg text-center hover:bg-indigo-700 transition-transform hover:scale-105 shadow-lg shadow-indigo-500/20"
                  >
                    Criar minha Retroteca Grátis
                  </button>
                  <button 
                    onClick={onEnterDashboard}
                    className="bg-gray-200 text-gray-800 font-semibold px-8 py-4 rounded-lg text-center hover:bg-gray-300 transition-transform hover:scale-105"
                  >
                    Ver o Catálogo
                  </button>
                </div>
              </div>
            </div>

            {/* Elemento de conexão visual entre as seções */}
            <div className="hidden md:block l-shaped-box-fix-2 safari-fix"></div>

            {/* Seção da Direita: Visual */}
            <div className="absolute right-0 top-0 w-full md:w-5/12 h-full">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 w-full h-full flex items-center justify-center">
                <img 
                  src="./logoimagetransp.png" 
                  alt="RetroVault Logo" 
                  className="w-48 h-48 object-contain drop-shadow-lg"
                />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Seção de Funcionalidades */}
      <section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Um Cofre para Cada Conquista</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Tudo que você precisa para uma experiência de jogo retrô moderna e segura.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="feature-card bg-white p-8 rounded-2xl border border-gray-200 transition-shadow">
            <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Nuvem Segura e Ilimitada</h3>
            <p className="text-gray-600">
              Faça upload de quantos saves quiser. Seus dados são criptografados e armazenados com segurança, acessíveis apenas por você.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="feature-card bg-white p-8 rounded-2xl border border-gray-200 transition-shadow">
            <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Acesso de Onde Estiver</h3>
            <p className="text-gray-600">
              Comece um jogo no seu PC e continue no notebook. Seus saves sincronizados em qualquer dispositivo com acesso à internet.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="feature-card bg-white p-8 rounded-2xl border border-gray-200 transition-shadow">
            <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Catálogo Inteligente</h3>
            <p className="text-gray-600">
              Navegue por um vasto catálogo de jogos, descubra novos clássicos e organize seus saves por console, gênero ou status.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Final de CTA */}
      <section className="py-20">
        <div className="bg-gray-800 text-white rounded-2xl p-10 md:p-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Pronto para nunca mais perder um save?</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Crie sua conta gratuita no RetroVault hoje mesmo e comece a construir sua biblioteca de saves eterna.
          </p>
          <div className="mt-8">
            <button 
              onClick={onEnterDashboard}
              className="bg-indigo-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-indigo-600 transition-transform hover:scale-105 shadow-lg shadow-indigo-500/30"
            >
              Começar Agora, é Grátis!
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-5 md:px-20 py-10 text-center text-gray-500">
          <p>&copy; 2025 RetroVault. Todos os direitos reservados. Um projeto feito por fãs para fãs.</p>
        </div>
      </footer>
    </div>
  );
}
