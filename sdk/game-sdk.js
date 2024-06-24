import axios from 'axios';

class GameSDK {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL,
    });
  }

  async registerGameSession(userId, gameId, sessionId, startTime, endTime) {
    try {
      const response = await this.api.post('/games/game-sessions', {
        user_id: userId,
        game_id: gameId,
        session_id: sessionId,
        session_start: startTime,
        session_end: endTime,
      });
      return response.data;
    } catch (error) {
      console.error('Error registering game session:', error);
      throw error;
    }
  }

  async registerAchievement(userId, gameId, achievementName, achievedAt) {
    try {
      const response = await this.api.post('/games/achievements', {
        user_id: userId,
        game_id: gameId,
        achievement_name: achievementName,
        achievement_date: achievedAt,
      });
      return response.data;
    } catch (error) {
      console.error('Error registering achievement:', error);
      throw error;
    }
  }

  async registerUnlockedLevel(userId, gameId, levelId) {
    try {
      const response = await this.api.post('/games/levels/unlock', {
        user_id: userId,
        game_id: gameId,
        level_id: levelId,
      });
      return response.data;
    } catch (error) {
      console.error('Error registering unlocked level:', error);
      throw error;
    }
  }

  async registerCustomIndicator(gameId, indicatorName, indicatorValue, recordedAt) {
    try {
      const response = await this.api.post('/indicators', {
        game_id: gameId,
        indicator_name: indicatorName,
        indicator_value: indicatorValue,
        recorded_at: recordedAt,
      });
      return response.data;
    } catch (error) {
      console.error('Error registering custom indicator:', error);
      throw error;
    }
  }
}

export default GameSDK;
