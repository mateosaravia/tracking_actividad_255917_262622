const { Router } = require('express');
const userController = require('../../controllers/users/user-controller');

const router = Router();

router.get('/:username', userController.getUserByName);
router.get('/:id/games', userController.getUserGames);

module.exports = router;
