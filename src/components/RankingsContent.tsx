import React from 'react'

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
        <div className="md:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-gray-200 flex flex-col">
          <div className="flex-grow">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900">
              Olá, <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">SeuNomeDeJogador!</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-prose">
              Este é o seu centro de comando. Acompanhe suas estatísticas, veja seu progresso e compare suas habilidades com a comunidade global.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500">Pontos Totais</p>
                <p className="text-2xl font-bold text-indigo-600">45,300</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500">Conquistas</p>
                <p className="text-2xl font-bold text-indigo-600">1,250</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500">Ranking Global</p>
                <p className="text-2xl font-bold text-indigo-600">#5,421</p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <a href="#" className="text-indigo-600 font-semibold hover:underline">
              Ver perfil completo no RetroAchievements &rarr;
            </a>
          </div>
        </div>

        {/* Box da Direita: Elemento Visual (Jogo Recente) */}
        <div className="md:col-span-5 bg-gray-800 text-white p-8 rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-xl mb-4 text-gray-300">Em Progresso</h3>
            <div className="flex items-center space-x-4">
              <img 
                src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg" 
                className="w-20 h-20 rounded-lg shadow-lg object-cover" 
                alt="Capa Chrono Trigger" 
              />
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
        
        <div className="bg-white p-6 rounded-2xl border border-gray-200 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg" 
                className="w-16 h-16 rounded-lg object-cover" 
                alt="Capa Super Mario World" 
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Super Mario World</h3>
                <p className="text-gray-500">Super Nintendo</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-indigo-600 text-lg">45 / 50 Conquistas</p>
              <p className="text-sm text-gray-500">90% Completo</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg border border-green-200">
              <p className="font-medium text-green-800">Yoshi!!! - Encontre e monte em um Yoshi.</p>
              <span className="text-sm font-bold text-green-600">+5 Pontos</span>
            </div>
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg border border-gray-200 opacity-60">
              <p className="font-medium text-gray-600">Mestre das 96 Saídas - Complete todas as saídas do jogo.</p>
              <span className="text-sm font-bold text-gray-500">+100 Pontos</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1wx0.jpg" 
                className="w-16 h-16 rounded-lg object-cover" 
                alt="Capa Zelda" 
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">The Legend of Zelda: A Link to the Past</h3>
                <p className="text-gray-500">Super Nintendo</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-indigo-600 text-lg">15 / 60 Conquistas</p>
              <p className="text-sm text-gray-500">25% Completo</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg border border-green-200">
              <p className="font-medium text-green-800">É Perigoso Ir Sozinho - Obtenha a Master Sword.</p>
              <span className="text-sm font-bold text-green-600">+10 Pontos</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RankingsContent
