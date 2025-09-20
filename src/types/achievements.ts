// Tipos para integração com RetroAchievements.org

export interface RetroAchievement {
  id: number;
  title: string;
  description: string;
  points: number;
  badgeName: string;
  isAwarded: boolean;
  dateAwarded?: string;
  hardcoreAchieved?: boolean;
  displayOrder: number;
}

export interface GameAchievements {
  gameId: number;
  title: string;
  consoleName: string;
  imageIcon: string;
  achievements: RetroAchievement[];
  totalAchievements: number;
  earnedAchievements: number;
  completionPercentage: number;
}

export interface UserInfo {
  username: string;
  totalPoints: number;
  totalSoftcorePoints: number;
  totalTruePoints: number;
  totalGamesPlayed: number;
  totalAchievements: number;
  memberSince: string;
  lastActivity: string;
  avatarUrl: string;
}

export interface RecentAchievement {
  id: number;
  title: string;
  description: string;
  points: number;
  badgeName: string;
  gameTitle: string;
  consoleName: string;
  dateAwarded: string;
  hardcoreAchieved: boolean;
}

export interface PopularGame {
  id: number;
  title: string;
  consoleName: string;
  imageIcon: string;
  totalAchievements: number;
  points: number;
  numAchievers: number;
}

export interface AchievementStats {
  totalUsers: number;
  totalGames: number;
  totalAchievements: number;
  totalPoints: number;
  recentAchievements: RecentAchievement[];
  popularGames: PopularGame[];
}
