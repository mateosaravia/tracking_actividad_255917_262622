const userService = require('../../services/users/user-service');

async function getUserByName(req, res) {
    const { username } = req.params;
    try {
        const user = await userService.getUserByName(username);

        if (user.rowLength === 0) {
            return res.status(404).json({ result: 'User not found' });
        }

        res.status(200).json(user.rows[0]);
    }
    catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function getUserGames(req, res) {
    const { id } = req.params;
    try {
        const games = await userService.getUserGames(id);

        res.status(200).json(games);
    }
    catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function getUserAchievements(req, res) {
    const { id } = req.params;
    try {
        const achievements = await userService.getUserAchievements(id);

        res.status(200).json(achievements);
    }
    catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function getUnlockedLevels(req, res) {
    const { id } = req.params;
    try {
        const levels = await userService.getUnlockedLevels(id);

        res.status(200).json(levels);
    }
    catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function getUserGameSessions(req, res) {
    const { id } = req.params;
    try {
        const gameSessions = await userService.getUserGameSessions(id);

        res.status(200).json(gameSessions);
    }
    catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getUserByName,
    getUserGames,
    getUserAchievements,
    getUnlockedLevels,
    getUserGameSessions
};