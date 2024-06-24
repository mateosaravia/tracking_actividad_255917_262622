const { Router } = require('express');
const userController = require('../../controllers/users/user-controller');

const router = Router();

router.get('/:username', userController.getUserByName);
router.get('/:id/games', userController.getUserGames);
router.get('/:id/achievements', userController.getUserAchievements);
router.get('/:id/unlocked-levels', userController.getUnlockedLevels);
router.get('/:id/game-sessions', userController.getUserGameSessions);

module.exports = router;
