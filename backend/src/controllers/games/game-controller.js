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
    const data = req.body;
    try {
        const level = await gameService.unlockLevel(data);
        res.status(200).json(level);
    }
    catch (err) {
        console.error('Error fetching genre transactions:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function gameLevels(req, res) {
    const { id } = req.params;
    try {
        const levels = await gameService.gameLevels(id);
        res.status(200).json(levels);
    }
    catch (err) {
        console.error('Error fetching genre transactions:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function getGameByName(req, res) {
    const { name } = req.params;
    try {
        const game = await gameService.getGameByName(name);

        if (!game) {
            return res.status(404).json({ result: 'Game not found' });
        }

        res.status(200).json(game);
    }
    catch (err) {
        console.error('Error fetching genre transactions:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function getGameIndicators(req, res) {
    const { id } = req.params;
    try {
        const indicators = await gameService.getGameIndicators(id);
        res.status(200).json(indicators);
    }
    catch (err) {
        console.error('Error fetching genre transactions:', err);
        res.status(500).json({ error: 'Internal server error' });
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
