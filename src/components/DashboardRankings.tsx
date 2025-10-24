import React, { useState } from 'react'
import { Gamepad2, Upload } from 'lucide-react'
import RankingsContent from './RankingsContent'

interface DashboardRankingsProps {
  onUploadClick?: () => void
  onLibraryClick?: () => void
}

// Componente para a Aba de Dashboard Original
const DashboardContent = ({ onUploadClick, onLibraryClick }: DashboardRankingsProps) => {
  const [stats, setStats] = useState({
    totalGames: 0,
    totalSaves: 0,
    totalConsoles: 0,
    totalStorage: 0
  })

  const recentActivities = [
    { id: 1, game: 'Super Mario Bros', console: 'nes', action: 'Save uploaded', time: '2 hours ago' },
    { id: 2, game: 'The Legend of Zelda: A Link to the Past', console: 'snes', action: 'Save downloaded', time: '5 hours ago' },
    { id: 3, game: 'Sonic the Hedgehog', console: 'mega-drive', action: 'Save uploaded', time: '1 day ago' },
    { id: 4, game: 'Final Fantasy VII', console: 'playstation', action: 'Save downloaded', time: '2 days ago' }
  ]

  const statCards = [
    { title: 'Total de Jogos', value: stats.totalGames, icon: Gamepad2, color: 'text-white' },
    { title: 'Saves Salvos', value: stats.totalSaves, icon: Upload, color: 'text-white' },
    { title: 'Consoles', value: stats.totalConsoles, icon: Gamepad2, color: 'text-white' },
    { title: 'Armazenamento', value: `${stats.totalStorage}GB`, icon: Upload, color: 'text-white' }
  ]

  // Simular carregamento de dados
  React.useEffect(() => {
    setStats({
      totalGames: 156,
      totalSaves: 423,
      totalConsoles: 12,
      totalStorage: 2.4
    })
  }, [])

  return (
    <div className="space-y-6 px-2 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="hero-section-container">
        <div className="grid grid-cols-1 md:grid md:grid-cols-12 gap-5">
          <div className="relative z-20 hero-homepage-title-wrapper md:col-span-7">
            <div className="flex flex-col h-full gap-5">
              <div className="flex flex-col h-full relative justify-between">
                <div className="absolute -z-10 hero-homepage-title-wrapper-background" style={{pointerEvents: 'none'}}>
                  <div className="absolute bottom-0 right-0 w-5 h-5 hero-homepage-title-wrapper-fix"></div>
                </div>
                
                <div className="mb-5 md:mb-20 title-big-banner px-5 md:px-10 pt-10 md:pt-20">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Dashboard
                  </h1>
                </div>
                
                <p className="mb-10 description-banner px-5 md:px-10 text-white max-w-[45ch]">
                  Gerencie sua coleção de saves de jogos retrô com facilidade e segurança.
                </p>
              </div>
              
              <div className="hidden md:block mt-auto pr-8">
                <div className="relative grid w-full h-full grid-cols-2 gap-3 md:gap-5 pointer-events-auto" style={{zIndex: 2}}>
                  <div className="hidden md:block l-shaped-box-fix-1 safari-fix"></div>
                  <div className="hidden md:block l-shaped-box-fix-2 safari-fix"></div>
                  
                  {/* Card Upload */}
                  <div 
                    onClick={onUploadClick}
                    className="flex flex-row justify-between h-full p-3 md:p-5 cta-card cta-card-verde-claro cursor-pointer transition-all duration-200 hover:transform hover:scale-105 hover:shadow-lg group"
                  >
                    <p className="button-title" style={{maxWidth: '8ch'}}>Upload Save</p>
                    <div className="flex justify-end">
                      <button className="block w-8 h-8 cta-arrow-btn cta-arrow-verde-claro">
                        <div className="flex items-center justify-center background-shadow">
                          <div className="p-2" style={{display: 'block', height: '100%'}}>
                            <svg style={{height: '100%', width: 'auto', maxHeight: '100%', maxWidth: '100%'}} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M8.17973 4.94461L4.82729 1.67783L5.59968 0.884766L9.92831 5.10116C9.98134 5.15276 10.0235 5.21447 10.0523 5.28264C10.0811 5.35081 10.0959 5.42406 10.0959 5.49806C10.0959 5.57205 10.0811 5.6453 10.0523 5.71347C10.0235 5.78164 9.98134 5.84335 9.92831 5.89496L5.59968 10.1113L4.82655 9.31828L8.17899 6.05224H0.884857V4.94461H8.17973Z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </div>
                        <span style={{display: 'block'}}>
                          <svg style={{height: '100%', width: 'auto', maxHeight: '100%', maxWidth: '100%'}} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.17973 4.94461L4.82729 1.67783L5.59968 0.884766L9.92831 5.10116C9.98134 5.15276 10.0235 5.21447 10.0523 5.28264C10.0811 5.35081 10.0959 5.42406 10.0959 5.49806C10.0959 5.57205 10.0811 5.6453 10.0523 5.71347C10.0235 5.78164 9.98134 5.84335 9.92831 5.89496L5.59968 10.1113L4.82655 9.31828L8.17899 6.05224H0.884857V4.94461H8.17973Z" fill="currentColor"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Card Biblioteca */}
                  <div 
                    onClick={onLibraryClick}
                    className="flex flex-row justify-between h-full gap-5 p-3 md:p-5 cta-card cta-card-verde-forte-pastel cursor-pointer transition-all duration-200 hover:transform hover:scale-105 hover:shadow-lg group"
                  >
                    <p className="button-title" style={{maxWidth: '8ch'}}>Biblioteca</p>
                    <div className="flex justify-end">
                      <button className="block w-8 h-8 cta-arrow-btn cta-arrow-verde-forte-pastel">
                        <div className="flex items-center justify-center background-shadow">
                          <div className="p-2" style={{display: 'block', height: '100%'}}>
                            <svg style={{height: '100%', width: 'auto', maxHeight: '100%', maxWidth: '100%'}} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M8.17973 4.94461L4.82729 1.67783L5.59968 0.884766L9.92831 5.10116C9.98134 5.15276 10.0235 5.21447 10.0523 5.28264C10.0811 5.35081 10.0959 5.42406 10.0959 5.49806C10.0959 5.57205 10.0811 5.6453 10.0523 5.71347C10.0235 5.78164 9.98134 5.84335 9.92831 5.89496L5.59968 10.1113L4.82655 9.31828L8.17899 6.05224H0.884857V4.94461H8.17973Z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </div>
                        <span style={{display: 'block', height: '12px'}}>
                          <svg style={{height: '100%', width: 'auto', maxHeight: '100%', maxWidth: '100%'}} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.17973 4.94461L4.82729 1.67783L5.59968 0.884766L9.92831 5.10116C9.98134 5.15276 10.0235 5.21447 10.0523 5.28264C10.0811 5.35081 10.0959 5.42406 10.0959 5.49806C10.0959 5.57205 10.0811 5.6453 10.0523 5.71347C10.0235 5.78164 9.98134 5.84335 9.92831 5.89496L5.59968 10.1113L4.82655 9.31828L8.17899 6.05224H0.884857V4.94461H8.17973Z" fill="currentColor"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Logo/Image Section */}
          <div className="md:col-span-5 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-gray-500 to-gray-400 rounded-full flex items-center justify-center">
                <Gamepad2 className="w-16 h-16 md:w-24 md:h-24 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Cards Mobile */}
        <div className="block md:hidden px-5">
          <div className="relative grid w-full h-full grid-cols-2 gap-3 md:gap-5" style={{zIndex: 2}}>
            <div className="hidden md:block l-shaped-box-fix-1 safari-fix"></div>
            <div className="hidden md:block l-shaped-box-fix-2 safari-fix"></div>
            
            {/* Card Upload Mobile */}
            <div 
              onClick={onUploadClick}
              className="flex flex-row justify-between h-full p-3 pb-10 md:p-5 md:pb-16 cta-card cta-card-verde-claro cursor-pointer transition-all duration-200 hover:transform hover:scale-105 hover:shadow-lg group border border-white"
            >
              <p className="button-title" style={{maxWidth: '8ch'}}>Upload Save</p>
              <div className="flex justify-end">
                <button className="block w-8 h-8 cta-arrow-btn cta-arrow-verde-claro">
                  <div className="flex items-center justify-center background-shadow">
                    <div className="p-2" style={{display: 'block', height: '100%'}}>
                      <svg style={{height: '100%', width: 'auto', maxHeight: '100%', maxWidth: '100%'}} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.17973 4.94461L4.82729 1.67783L5.59968 0.884766L9.92831 5.10116C9.98134 5.15276 10.0235 5.21447 10.0523 5.28264C10.0811 5.35081 10.0959 5.42406 10.0959 5.49806C10.0959 5.57205 10.0811 5.6453 10.0523 5.71347C10.0235 5.78164 9.98134 5.84335 9.92831 5.89496L5.59968 10.1113L4.82655 9.31828L8.17899 6.05224H0.884857V4.94461H8.17973Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <span style={{display: 'block'}}>
                    <svg style={{height: '100%', width: 'auto', maxHeight: '100%', maxWidth: '100%'}} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.17973 4.94461L4.82729 1.67783L5.59968 0.884766L9.92831 5.10116C9.98134 5.15276 10.0235 5.21447 10.0523 5.28264C10.0811 5.35081 10.0959 5.42406 10.0959 5.49806C10.0959 5.57205 10.0811 5.6453 10.0523 5.71347C10.0235 5.78164 9.98134 5.84335 9.92831 5.89496L5.59968 10.1113L4.82655 9.31828L8.17899 6.05224H0.884857V4.94461H8.17973Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            
            {/* Card Biblioteca Mobile */}
            <div 
              onClick={onLibraryClick}
              className="flex flex-row justify-between h-full gap-5 p-3 pb-10 md:p-5 md:pb-16 cta-card cta-card-verde-forte-pastel cursor-pointer transition-all duration-200 hover:transform hover:scale-105 hover:shadow-lg group border border-white"
            >
              <p className="button-title" style={{maxWidth: '8ch'}}>Biblioteca</p>
              <div className="flex justify-end">
                <button className="block w-8 h-8 cta-arrow-btn cta-arrow-verde-forte-pastel">
                  <div className="flex items-center justify-center background-shadow">
                    <div className="p-2" style={{display: 'block', height: '100%'}}>
                      <svg style={{height: '100%', width: 'auto', maxHeight: '100%', maxWidth: '100%'}} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.17973 4.94461L4.82729 1.67783L5.59968 0.884766L9.92831 5.10116C9.98134 5.15276 10.0235 5.21447 10.0523 5.28264C10.0811 5.35081 10.0959 5.42406 10.0959 5.49806C10.0959 5.57205 10.0811 5.6453 10.0523 5.71347C10.0235 5.78164 9.98134 5.84335 9.92831 5.89496L5.59968 10.1113L4.82655 9.31828L8.17899 6.05224H0.884857V4.94461H8.17973Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <span style={{display: 'block', height: '12px'}}>
                    <svg style={{height: '100%', width: 'auto', maxHeight: '100%', maxWidth: '100%'}} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8.17973 4.94461L4.82729 1.67783L5.59968 0.884766L9.92831 5.10116C9.98134 5.15276 10.0235 5.21447 10.0523 5.28264C10.0811 5.35081 10.0959 5.42406 10.0959 5.49806C10.0959 5.57205 10.0811 5.6453 10.0523 5.71347C10.0235 5.78164 9.98134 5.84335 9.92831 5.89496L5.59968 10.1113L4.82655 9.31828L8.17899 6.05224H0.884857V4.94461H8.17973Z" fill="currentColor"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="dashboard-section-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-8">
        {statCards.map((stat, index) => (
          <div
            key={index}
              className="bg-gray-800 rounded-lg p-6 border border-white hover:border-gray-300 transition-all duration-200 hover:transform hover:scale-105 cursor-pointer hover:ring-2 hover:ring-orange-400"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          ))}
          </div>
      </div>
    </div>
  )
}

// Componente principal - apenas Rankings
export default function DashboardRankings({ onUploadClick, onLibraryClick }: DashboardRankingsProps) {
  return (
    <div className="space-y-6">
      {/* Content - apenas Rankings */}
      <RankingsContent />
      
      {/* Background granular */}
      <div className="noise-block"></div>
    </div>
  )
}
