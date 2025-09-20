// Configuração da API RetroAchievements.org
export const RETRO_ACHIEVEMENTS_CONFIG = {
  // Sua chave API do RetroAchievements.org
  // Para obter: https://retroachievements.org/APIDemo.php
  API_KEY: process.env.REACT_APP_RETRO_ACHIEVEMENTS_API_KEY || 'wz2o51IJRBfUTSk6a5MFiXmGXOuSx20V',
  
  // URL base da API
  BASE_URL: 'https://retroachievements.org/API',
  
  // Endpoints disponíveis
  ENDPOINTS: {
    // Informações do usuário
    USER_INFO: '/API_GetUserInfo.php',
    
    // Lista de conquistas recentes
    RECENT_ACHIEVEMENTS: '/API_GetRecentAchievements.php',
    
    // Conquistas de um jogo específico
    GAME_ACHIEVEMENTS: '/API_GetGameInfoAndUserProgress.php',
    
    // Lista de jogos populares
    POPULAR_GAMES: '/API_GetMostPopularGames.php',
    
    // Buscar jogos
    SEARCH_GAMES: '/API_SearchGames.php',
    
    // Estatísticas globais
    GLOBAL_STATS: '/API_GetTopTenUsers.php'
  }
};

// Função para construir URL da API
export const buildApiUrl = (endpoint: string, params: Record<string, string> = {}) => {
  const url = new URL(`${RETRO_ACHIEVEMENTS_CONFIG.BASE_URL}${endpoint}`);
  
  // Adicionar chave API (parâmetro correto é 'y')
  url.searchParams.append('y', RETRO_ACHIEVEMENTS_CONFIG.API_KEY);
  
  // Adicionar parâmetros
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  
  return url.toString();
};

// Função para fazer requisições à API
export const fetchRetroAchievements = async (endpoint: string, params: Record<string, string> = {}) => {
  try {
    const url = buildApiUrl(endpoint, params);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados do RetroAchievements:', error);
    throw error;
  }
};
