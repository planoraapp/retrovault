import React, { useState, useEffect } from 'react';
import { AchievementsService } from '../services/achievementsService';
import type { AchievementStats, RecentAchievement, PopularGame } from '../types/achievements';

export default function AchievementsSection() {
  const [stats, setStats] = useState<AchievementStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const data = await AchievementsService.getGlobalStats();
        setStats(data);
      } catch (err) {
        setError('Erro ao carregar conquistas. Verifique sua chave API.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-gray-200">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-gray-200">
        <div className="text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Conquistas RetroAchievements</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
            <h4 className="font-semibold text-yellow-800 mb-2">Como configurar:</h4>
            <ol className="text-sm text-yellow-700 space-y-1">
              <li>1. Acesse: https://retroachievements.org/APIDemo.php</li>
              <li>2. Obtenha sua chave API</li>
              <li>3. Adicione no arquivo .env: REACT_APP_RETRO_ACHIEVEMENTS_API_KEY=sua_chave</li>
              <li>4. Reinicie o servidor</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Estatísticas Gerais */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">🏆 Conquistas RetroAchievements</h2>
        <p className="text-gray-600 mb-6">
          Conecte-se com a comunidade global de retrogamers e acompanhe suas conquistas!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              {stats?.recentAchievements.length || 0}
            </div>
            <div className="text-sm text-indigo-700">Conquistas Recentes</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {stats?.popularGames.length || 0}
            </div>
            <div className="text-sm text-purple-700">Jogos Populares</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              🌐
            </div>
            <div className="text-sm text-green-700">Comunidade Global</div>
          </div>
        </div>
      </div>

      {/* Conquistas Recentes */}
      {stats?.recentAchievements && stats.recentAchievements.length > 0 && (
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Conquistas Recentes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.recentAchievements.slice(0, 6).map((achievement) => (
              <div key={achievement.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <img 
                  src={`https://retroachievements.org/Badge/${achievement.badgeName}.png`}
                  alt={achievement.title}
                  className="w-12 h-12 rounded"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.gameTitle}</p>
                  <p className="text-xs text-gray-500">{achievement.consoleName}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-indigo-600">{achievement.points}pts</div>
                  {achievement.hardcoreAchieved && (
                    <div className="text-xs text-red-600">💀 Hardcore</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Jogos Populares */}
      {stats?.popularGames && stats.popularGames.length > 0 && (
        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🔥 Jogos Populares</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.popularGames.slice(0, 9).map((game) => (
              <div key={game.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <img 
                  src={game.imageIcon}
                  alt={game.title}
                  className="w-12 h-12 rounded"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{game.title}</h4>
                  <p className="text-sm text-gray-600">{game.consoleName}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {game.totalAchievements} conquistas
                    </span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      {game.numAchievers} jogadores
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Background granular */}
      <div className="noise-block"></div>
    </div>
  );
}
