const gameService = require('../../services/games/game-service');

async function createGameSession(req, res) {
    const data = req.body;
    try {
        const gameSession = await gameService.createGameSession(data);
        res.status(201).json(gameSession);
    }
    catch (err) {
        console.error('Error fetching genre transactions:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function createAchievement(req, res) {
    const data = req.body;
    try {
        const achievement = await gameService.createAchievement(data);
        res.status(201).json(achievement);
    }
    catch (err) {
        console.error('Error fetching genre transactions:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function unlockLevel(req, res) {
    const id = req.params.id;
    try {
        const level = await gameService.unlockLevel(id);
        res.status(200).json(level);
    }
    catch (err) {
        console.error('Error fetching genre transactions:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createGameSession,
    createAchievement,
    unlockLevel
};
