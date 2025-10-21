import React from 'react'
import ConsoleIcon from './ConsoleIcon'

const RankingsContent = () => {
  return (
    <>
      {/* Header da Seção */}
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Suas Conquistas</h1>
        <p className="mt-2 text-lg text-gray-400">Compare seu progresso com a comunidade global do RetroAchievements.</p>
      </header>

      {/* SEÇÃO HERO (Inspirada em bentoml.com) */}
      <section className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 items-stretch">
        
        {/* Box da Esquerda: Informações Principais */}
        <div className="md:col-span-7 bg-gray-800 p-8 md:p-10 rounded-2xl border border-gray-700 flex flex-col">
          <div className="flex-grow">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
              Olá, <span className="text-white">Jogador!</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-prose">
              Este é o seu centro de comando. Acompanhe suas estatísticas, veja seu progresso e compare suas habilidades com a comunidade global.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                <p className="text-sm text-gray-400">Pontos Totais</p>
                <p className="text-2xl font-bold text-indigo-400">45,300</p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                <p className="text-sm text-gray-400">Conquistas</p>
                <p className="text-2xl font-bold text-indigo-400">1,250</p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600">
                <p className="text-sm text-gray-400">Ranking Global</p>
                <p className="text-2xl font-bold text-indigo-400">#5,421</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-700">
            <a href="#" className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
              Ver perfil completo no RetroAchievements &rarr;
            </a>
          </div>
        </div>

        {/* Box da Direita: Elemento Visual (Jogo Recente) */}
        <div className="md:col-span-5 bg-gray-800 text-white p-8 rounded-2xl flex flex-col justify-between border border-gray-700">
          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-300">Em Progresso</h3>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-lg shadow-lg bg-gradient-to-br from-gray-700 to-gray-900 p-2 flex items-center justify-center">
              <img 
                  src="https://retroachievements.org/Images/093950.png" 
                  className="w-full h-full object-contain" 
                alt="Capa Chrono Trigger" 
              />
              </div>
              <div>
                <p className="font-bold text-xl text-white">Chrono Trigger</p>
                <p className="text-md text-gray-400">Super Nintendo</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm text-gray-400 mb-2">Conquistas Desbloqueadas (75%)</p>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-4 rounded-full transition-all duration-300" 
                style={{width: "75%"}}
              ></div>
            </div>
          </div>
          <a 
            href="#" 
            className="mt-8 w-full bg-indigo-500 text-white font-semibold py-3 rounded-lg text-center hover:bg-indigo-600 transition-colors block"
          >
            Ver Conquistas do Jogo
          </a>
        </div>
      </section>

      {/* Seção Biblioteca de Conquistas */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Sua Biblioteca</h2>
        
        {/* Grid de Cards Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card: Super Mario World */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
              <img 
                src="https://retroachievements.org/Images/109856.png" 
                className="w-full h-full object-contain p-4" 
                alt="Capa Super Mario World" 
              />
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-xs font-bold text-white">90% Completo</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0">
                  <ConsoleIcon consoleId="snes" size="md" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white leading-tight">Super Mario World</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Super Nintendo</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Conquistas</span>
                  <span className="text-indigo-400 font-bold">45 / 50</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{width: "90%"}}></div>
                </div>
              </div>
              
              <div className="bg-white/10 p-2 rounded-lg border border-white/20 mb-3">
                <p className="text-xs text-white/90">Última: Yoshi!!! (+5 pts)</p>
              </div>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                Ver Conquistas
              </button>
            </div>
          </div>

          {/* Card: Zelda */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
              <img 
                src="https://retroachievements.org/Images/022504.png" 
                className="w-full h-full object-contain p-4" 
                alt="Capa Zelda" 
              />
              <div className="absolute top-2 right-2 bg-yellow-500/80 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-xs font-bold text-white">Em Progresso</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0">
                  <ConsoleIcon consoleId="snes" size="md" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white leading-tight">The Legend of Zelda</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Super Nintendo</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Conquistas</span>
                  <span className="text-indigo-400 font-bold">15 / 60</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: "25%"}}></div>
                </div>
              </div>
              
              <div className="bg-white/10 p-2 rounded-lg border border-white/20 mb-3">
                <p className="text-xs text-white/90">Última: Master Sword (+10 pts)</p>
              </div>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                Ver Conquistas
              </button>
            </div>
          </div>

          {/* Card: Chrono Trigger */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
              <img 
                src="https://retroachievements.org/Images/000222.png" 
                className="w-full h-full object-contain p-4" 
                alt="Capa Chrono Trigger" 
              />
              <div className="absolute top-2 right-2 bg-yellow-500/80 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-xs font-bold text-white">Em Progresso</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0">
                  <ConsoleIcon consoleId="snes" size="md" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white leading-tight">Chrono Trigger</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Super Nintendo</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Conquistas</span>
                  <span className="text-indigo-400 font-bold">48 / 64</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: "75%"}}></div>
                </div>
              </div>
              
              <div className="bg-white/10 p-2 rounded-lg border border-white/20 mb-3">
                <p className="text-xs text-white/90">Última: Time Traveler (+15 pts)</p>
              </div>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                Ver Conquistas
              </button>
            </div>
          </div>

          {/* Card: Final Fantasy VII */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
              <img 
                src="https://retroachievements.org/Images/072390.png" 
                className="w-full h-full object-contain p-4" 
                alt="Capa Final Fantasy VII" 
              />
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-xs font-bold text-white">35% Completo</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0">
                  <ConsoleIcon consoleId="playstation" size="md" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white leading-tight">Final Fantasy VII</h3>
                  <p className="text-gray-400 text-sm mt-0.5">PlayStation</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Conquistas</span>
                  <span className="text-indigo-400 font-bold">28 / 80</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{width: "35%"}}></div>
                </div>
              </div>
              
              <div className="bg-white/10 p-2 rounded-lg border border-white/20 mb-3">
                <p className="text-xs text-white/90">Última: Materia Hunter (+5 pts)</p>
              </div>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                Ver Conquistas
              </button>
            </div>
          </div>

          {/* Card: Sonic 2 */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
              <img 
                src="https://retroachievements.org/Images/051848.png" 
                className="w-full h-full object-contain p-4" 
                alt="Capa Sonic 2" 
              />
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-xs font-bold text-white">60% Completo</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0">
                  <ConsoleIcon consoleId="mega-drive" size="md" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white leading-tight">Sonic 2</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Sega Genesis</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Conquistas</span>
                  <span className="text-indigo-400 font-bold">18 / 30</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{width: "60%"}}></div>
                </div>
              </div>
              
              <div className="bg-white/10 p-2 rounded-lg border border-white/20 mb-3">
                <p className="text-xs text-white/90">Última: Super Sonic (+20 pts)</p>
              </div>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                Ver Conquistas
              </button>
            </div>
          </div>

          {/* Card: Pokémon Red */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
              <img 
                src="https://retroachievements.org/Images/117104.png" 
                className="w-full h-full object-contain p-4" 
                alt="Capa Pokémon Red" 
              />
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-xs font-bold text-white">15% Completo</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0">
                  <ConsoleIcon consoleId="game-boy" size="md" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white leading-tight">Pokémon Red</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Game Boy</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Conquistas</span>
                  <span className="text-indigo-400 font-bold">23 / 150</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{width: "15%"}}></div>
                </div>
              </div>
              
              <div className="bg-white/10 p-2 rounded-lg border border-white/20 mb-3">
                <p className="text-xs text-white/90">Última: Gym Leader (+10 pts)</p>
              </div>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                Ver Conquistas
              </button>
            </div>
          </div>

          {/* Card: Street Fighter II */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
              <img 
                src="https://retroachievements.org/Images/060824.png" 
                className="w-full h-full object-contain p-4" 
                alt="Capa Street Fighter II" 
              />
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-xs font-bold text-white">50% Completo</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0">
                  <ConsoleIcon consoleId="snes" size="md" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white leading-tight">Street Fighter II</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Super Nintendo</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Conquistas</span>
                  <span className="text-indigo-400 font-bold">25 / 50</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{width: "50%"}}></div>
                </div>
              </div>
              
              <div className="bg-white/10 p-2 rounded-lg border border-white/20 mb-3">
                <p className="text-xs text-white/90">Última: Hadouken! (+5 pts)</p>
              </div>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                Ver Conquistas
              </button>
          </div>
        </div>

          {/* Card: Metroid */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
              <img 
                src="https://retroachievements.org/Images/013238.png" 
                className="w-full h-full object-contain p-4" 
                alt="Capa Metroid" 
              />
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-xs font-bold text-white">40% Completo</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0">
                  <ConsoleIcon consoleId="nes" size="md" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white leading-tight">Metroid</h3>
                  <p className="text-gray-400 text-sm mt-0.5">NES</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Conquistas</span>
                  <span className="text-indigo-400 font-bold">12 / 30</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{width: "40%"}}></div>
                </div>
              </div>
              
              <div className="bg-white/10 p-2 rounded-lg border border-white/20 mb-3">
                <p className="text-xs text-white/90">Última: Screw Attack (+15 pts)</p>
              </div>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                Ver Conquistas
              </button>
            </div>
          </div>

          {/* Card: Castlevania */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
              <img 
                src="https://retroachievements.org/Images/071768.png" 
                className="w-full h-full object-contain p-4" 
                alt="Capa Castlevania" 
              />
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-xs font-bold text-white">80% Completo</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-shrink-0">
                  <ConsoleIcon consoleId="nes" size="md" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white leading-tight">Castlevania</h3>
                  <p className="text-gray-400 text-sm mt-0.5">NES</p>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Conquistas</span>
                  <span className="text-indigo-400 font-bold">32 / 40</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{width: "80%"}}></div>
                </div>
              </div>
              
              <div className="bg-white/10 p-2 rounded-lg border border-white/20 mb-3">
                <p className="text-xs text-white/90">Última: Vampire Killer (+10 pts)</p>
              </div>
              
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                Ver Conquistas
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default RankingsContent
