import { useState, useEffect } from 'react'
import { Upload, Gamepad2, Save, HardDrive } from 'lucide-react'

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalGames: 0,
    totalSaves: 0,
    totalConsoles: 0,
    totalStorage: 0
  })

  useEffect(() => {
    // Animar contadores
    const animateCounter = (key: keyof typeof stats, target: number) => {
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setStats(prev => ({ ...prev, [key]: target }))
          clearInterval(timer)
        } else {
          setStats(prev => ({ ...prev, [key]: Math.floor(current) }))
        }
      }, 30)
    }

    animateCounter('totalGames', 24)
    animateCounter('totalSaves', 67)
    animateCounter('totalConsoles', 4)
    animateCounter('totalStorage', 2)
  }, [])

  const statCards = [
    {
      icon: <Gamepad2 size={24} />,
      value: stats.totalGames,
      label: 'Total de Jogos',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: <Save size={24} />,
      value: stats.totalSaves,
      label: 'Saves Salvos',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: <Gamepad2 size={24} />,
      value: stats.totalConsoles,
      label: 'Consoles',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: <HardDrive size={24} />,
      value: stats.totalStorage,
      label: 'Armazenamento (GB)',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    }
  ]

  const recentActivities = [
    {
      icon: '🎮',
      title: 'Chrono Trigger - Save criado',
      time: '2 horas atrás'
    },
    {
      icon: '💾',
      title: 'Super Metroid - Upload realizado',
      time: '5 horas atrás'
    },
    {
      icon: '🔄',
      title: 'Sincronização automática',
      time: '1 dia atrás'
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Visão geral da sua coleção de saves retrô</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all duration-200 hover:transform hover:scale-105"
          >
            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
              <div className={stat.color}>
                {stat.icon}
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Atividades Recentes</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">{activity.title}</div>
                  <div className="text-gray-400 text-sm">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Upload */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Upload Rápido</h3>
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              <Upload className="mx-auto text-gray-400 group-hover:text-blue-500" />
            </div>
            <div className="text-white font-medium mb-2">Arraste seus saves aqui</div>
            <div className="text-gray-400 text-sm mb-4">ou clique para selecionar</div>
            <div className="flex gap-2 justify-center">
              <span className="px-2 py-1 bg-gray-700 text-blue-400 text-xs rounded border border-gray-600">
                .sav
              </span>
              <span className="px-2 py-1 bg-gray-700 text-blue-400 text-xs rounded border border-gray-600">
                .srm
              </span>
              <span className="px-2 py-1 bg-gray-700 text-blue-400 text-xs rounded border border-gray-600">
                .state
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
