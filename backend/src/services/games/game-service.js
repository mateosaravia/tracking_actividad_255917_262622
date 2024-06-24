const { v4: uuidv4 } = require('uuid');
const client = require('../../config/cassandra-config');

async function createGameSession(data) {
    const { user_id, game_id, session_start, session_end } = data;
    try {
        const session_id = uuidv4();
        const query = `INSERT INTO game_sessions (session_id, user_id, game_id, session_start, session_end) 
                       VALUES (${session_id}, ${user_id}, ${game_id}, '${session_start}', '${session_end}');`;

        await client.execute(query);

        const gameSession = {
            session_id,
            user_id,
            game_id,
            session_start,
            session_end,
        };

        return gameSession;
    }
    catch (err) {
        console.error('Error creating game session:', err);
        throw new Error('Error creating game session');
    }
};

async function createAchievement(data) {
    const { user_id, game_id, achievement_name, achievement_date } = data;
    try {
        const achievement_id = uuidv4();
        const query = `INSERT INTO achievements (achievement_id, user_id, game_id, achievement_name, achievement_date) 
                       VALUES (${achievement_id}, ${user_id}, ${game_id}, '${achievement_name}', '${achievement_date}');`;

        await client.execute(query);

        const achievement = {
            achievement_id,
            user_id,
            game_id,
            achievement_name,
            achievement_date,
        };

        return achievement;
    }
    catch (err) {
        console.error('Error creating achievement:', err);
        throw new Error('Error creating achievement');
    }
};

async function unlockLevel(data) {
    const { user_id, game_id, level_id } = data;
    try {
        const query = `INSERT INTO unlocked_levels (level_id, game_id, user_id) 
        VALUES (${level_id}, ${game_id}, ${user_id});`;

        await client.execute(query);

        const level = {
            level_id,
            game_id,
            user_id,
        };

        return level;
    }
    catch (err) {
        console.error('Error unlocking level:', err);
        throw new Error('Error unlocking level');
    }
};

async function gameLevels(id) {
    try {
        const query = `SELECT * FROM levels WHERE game_id = ${id};`;
        const levelsResult = await client.execute(query);

        const levels = levelsResult.rows.map(row => {
            return {
                user_id: row.user_id,
                game_id: row.game_id,
                level_id: row.level_id,
                level_name: row.level_name,
            };
        });

        return levels;
    }
    catch (err) {
        console.error('Error fetching game levels:', err);
        throw new Error('Error fetching game levels');
    }
};

async function getGameByName(name) {
    try {
        const query = `SELECT * FROM games WHERE game_name = '${name}';`;
        const gameResult = await client.execute(query);

        const game = gameResult.rows.map(row => {
            return {
                game_id: row.game_id.toString(),
                game_name: row.game_name,
                game_description: row.game_description,
                game_category: row.game_category,
                game_release_date: row.game_release_date.toISOString(),
                game_price: row.game_price,
                game_version: row.game_version
            };
        });

        return game[0];
    }
    catch (err) {
        console.error('Error fetching game:', err);
        throw new Error('Error fetching game');
    }
};

async function getGameIndicators(id) {
    try {
        const query = `SELECT * FROM indicators WHERE game_id = ${id};`;
        const indicatorsResult = await client.execute(query);

        const indicators = indicatorsResult.rows.map(row => {
            return {
                indicator_id: row.indicator_id,
                game_id: row.game_id,
                indicator_name: row.indicator_name,
                indicator_value: row.indicator_value,
                recorded_at: row.recorded_at.toISOString(),
            };
        });

        return indicators;
    }
    catch (err) {
        console.error('Error fetching game indicators:', err);
        throw new Error('Error fetching game indicators');
    }
};

module.exports = {
    createGameSession,
    createAchievement,
    unlockLevel,
    gameLevels,
    getGameByName,
    getGameIndicators
};
