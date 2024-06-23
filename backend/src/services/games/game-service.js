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

module.exports = {
    createGameSession,
    createAchievement,
    unlockLevel
};
