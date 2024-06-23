async function createGameSession(data) {
    const { user_id, game_id, session_start, session_end } = data;
    try {
        const query = `INSERT INTO game_sessions (user_id, game_id, session_start, session_end) 
                       VALUES (${user_id}, ${game_id}, ${session_start}, ${session_end}) RETURNING *`;

        await client.execute(query);

        const gameSession = {
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
        const query = `INSERT INTO achievements (user_id, game_id, achievement_name, achievement_date) 
                       VALUES (${user_id}, ${game_id}, ${achievement_name}, ${achievement_date}) RETURNING *`;

        await client.execute(query);

        const achievement = {
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

async function unlockLevel(id) {
    try {
        const query = `INSERT INTO unlocked_levels (level_id) VALUES (${id}) RETURNING *`;

        await client.execute(query);

        const level = {
            id,
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
