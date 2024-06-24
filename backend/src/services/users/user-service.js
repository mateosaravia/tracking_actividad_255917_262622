const client = require('../../config/cassandra-config');

async function getUserByName(username) {
    try {
        const query = `SELECT * FROM users WHERE user_name = '${username}'`;
        const user = await client.execute(query);
        return user;
    }
    catch (err) {
        console.error('Error fetching user:', err);
        throw new Error('Error fetching user');
    }
};

async function getUserGames(id) {
    try {
        const queryGamesIds = `SELECT played_games FROM users WHERE user_id = ${id};`;
        const gamesIdsResult = await client.execute(queryGamesIds);

        const gamesIds = gamesIdsResult.rows[0].played_games;

        const games = await Promise.all(gamesIds.map(async gameId => {
            const query = `SELECT * FROM games WHERE game_id = ${gameId};`;
            const resultGame = await client.execute(query);

            const game = resultGame.rows.map(row => {
                return {
                    game_id: row.game_id.toString(),
                    game_category: row.game_category,
                    game_description: row.game_description,
                    game_name: row.game_name,
                    game_price: row.game_price,
                    game_release_date: row.game_release_date.toISOString(),
                    game_version: row.game_version
                };
            });

            return game[0];
        }));
        return games;
    }
    catch (err) {
        console.error('Error fetching user games:', err);
        throw new Error('Error fetching user games');
    }
};

async function getUserAchievements(id) {
    try {
        const queryAchievements = `SELECT * FROM achievements WHERE user_id = ${id} ALLOW FILTERING;`;
        const achievementsResult = await client.execute(queryAchievements);

        const achievements = achievementsResult.rows.map(row => {
            return {
                achievement_id: row.achievement_id.toString(),
                user_id: row.user_id.toString(),
                game_id: row.game_id.toString(),
                achievement_name: row.achievement_name,
                achievement_date: row.achievement_date.toISOString()
            };
        });

        return achievements;
    }
    catch (err) {
        console.error('Error fetching user achievements:', err);
        throw new Error('Error fetching user achievements');
    }
};

async function getUnlockedLevels(id) {
    try {
        const queryLevels = `SELECT * FROM unlocked_levels WHERE user_id = ${id} ALLOW FILTERING;`;
        const levelsResult = await client.execute(queryLevels);

        const levels = levelsResult.rows.map(row => {
            return {
                level_id: row.level_id.toString(),
                user_id: row.user_id.toString(),
                game_id: row.game_id.toString(),
                level_name: row.level_name
            };
        });

        return levels;
    }
    catch (err) {
        console.error('Error fetching user levels:', err);
        throw new Error('Error fetching user levels');
    }
};

async function getUserGameSessions(id) {
    try {
        const querySessions = `SELECT * FROM game_sessions WHERE user_id = ${id} ALLOW FILTERING;`;
        const sessionsResult = await client.execute(querySessions);

        const sessions = sessionsResult.rows.map(row => {
            return {
                session_id: row.session_id.toString(),
                user_id: row.user_id.toString(),
                game_id: row.game_id.toString(),
                session_start: row.session_start.toISOString(),
                session_end: row.session_end.toISOString()
            };
        });

        return sessions;
    }
    catch (err) {
        console.error('Error fetching user sessions:', err);
        throw new Error('Error fetching user sessions');
    }
};

module.exports = {
    getUserByName,
    getUserGames,
    getUserAchievements,
    getUnlockedLevels,
    getUserGameSessions
};