import { fetchRetroAchievements } from '../config/api';
import type { 
  UserInfo, 
  GameAchievements, 
  RecentAchievement, 
  PopularGame, 
  AchievementStats 
} from '../types/achievements';

export class AchievementsService {
  // Buscar informações do usuário
  static async getUserInfo(username: string): Promise<UserInfo> {
    const data = await fetchRetroAchievements('/API_GetUserInfo.php', { u: username });
    
    return {
      username: data.Username,
      totalPoints: parseInt(data.TotalPoints),
      totalSoftcorePoints: parseInt(data.TotalSoftcorePoints),
      totalTruePoints: parseInt(data.TotalTruePoints),
      totalGamesPlayed: parseInt(data.TotalGamesPlayed),
      totalAchievements: parseInt(data.TotalAchievements),
      memberSince: data.MemberSince,
      lastActivity: data.LastActivity,
      avatarUrl: `https://retroachievements.org${data.UserPic}`
    };
  }

  // Buscar conquistas recentes
  static async getRecentAchievements(count: number = 10): Promise<RecentAchievement[]> {
    const data = await fetchRetroAchievements('/API_GetRecentAchievements.php', { 
      minutes: '60', 
      count: count.toString() 
    });
    
    return data.map((achievement: any) => ({
      id: parseInt(achievement.ID),
      title: achievement.Title,
      description: achievement.Description,
      points: parseInt(achievement.Points),
      badgeName: achievement.BadgeName,
      gameTitle: achievement.GameTitle,
      consoleName: achievement.ConsoleName,
      dateAwarded: achievement.DateAwarded,
      hardcoreAchieved: achievement.HardcoreAchieved === '1'
    }));
  }

  // Buscar conquistas de um jogo específico
  static async getGameAchievements(gameId: number, username?: string): Promise<GameAchievements> {
    const params: Record<string, string> = { g: gameId.toString() };
    if (username) {
      params.u = username;
    }
    
    const data = await fetchRetroAchievements('/API_GetGameInfoAndUserProgress.php', params);
    
    return {
      gameId: parseInt(data.ID),
      title: data.Title,
      consoleName: data.ConsoleName,
      imageIcon: `https://retroachievements.org${data.ImageIcon}`,
      achievements: data.Achievements.map((achievement: any) => ({
        id: parseInt(achievement.ID),
        title: achievement.Title,
        description: achievement.Description,
        points: parseInt(achievement.Points),
        badgeName: achievement.BadgeName,
        isAwarded: achievement.DateAwarded !== null,
        dateAwarded: achievement.DateAwarded,
        hardcoreAchieved: achievement.HardcoreAchieved === '1',
        displayOrder: parseInt(achievement.DisplayOrder)
      })),
      totalAchievements: parseInt(data.TotalAchievements),
      earnedAchievements: username ? parseInt(data.NumAwarded) : 0,
      completionPercentage: username ? parseFloat(data.PercentageCompleted) : 0
    };
  }

  // Buscar jogos populares
  static async getPopularGames(count: number = 20): Promise<PopularGame[]> {
    const data = await fetchRetroAchievements('/API_GetMostPopularGames.php', { 
      count: count.toString() 
    });
    
    return data.map((game: any) => ({
      id: parseInt(game.ID),
      title: game.Title,
      consoleName: game.ConsoleName,
      imageIcon: `https://retroachievements.org${game.ImageIcon}`,
      totalAchievements: parseInt(game.TotalAchievements),
      points: parseInt(game.Points),
      numAchievers: parseInt(game.NumAchievers)
    }));
  }

  // Buscar estatísticas globais
  static async getGlobalStats(): Promise<AchievementStats> {
    const [recentAchievements, popularGames] = await Promise.all([
      this.getRecentAchievements(20),
      this.getPopularGames(10)
    ]);
    
    return {
      totalUsers: 0, // Não disponível na API
      totalGames: 0, // Não disponível na API
      totalAchievements: 0, // Não disponível na API
      totalPoints: 0, // Não disponível na API
      recentAchievements,
      popularGames
    };
  }

  // Buscar jogos por termo
  static async searchGames(query: string): Promise<PopularGame[]> {
    const data = await fetchRetroAchievements('/API_SearchGames.php', { y: query });
    
    return data.map((game: any) => ({
      id: parseInt(game.ID),
      title: game.Title,
      consoleName: game.ConsoleName,
      imageIcon: `https://retroachievements.org${game.ImageIcon}`,
      totalAchievements: parseInt(game.TotalAchievements),
      points: parseInt(game.Points),
      numAchievers: parseInt(game.NumAchievers)
    }));
  }
}
