const { Router } = require('express');
const gameController = require('../../controllers/games/game-controller');

const router = Router();

router.post('/game-sessions', gameController.createGameSession);
router.post('/achievements', gameController.createAchievement);
router.post('/levels/unlock', gameController.unlockLevel);
router.get('/:id/levels', gameController.gameLevels);
router.get('/:id/indicators', gameController.getGameIndicators);
router.get('/:name', gameController.getGameByName);

module.exports = router;