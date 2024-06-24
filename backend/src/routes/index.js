const { Router } = require('express');
const gameRoutes = require('./games/game-routes');
const indicatorRoutes = require('./indicators/indicator-routes');
const userRoutes = require('./users/user-routes');

const router = Router();

router.use('/games', gameRoutes);
router.use('/indicators', indicatorRoutes);
router.use('/users', userRoutes);

module.exports = router;
