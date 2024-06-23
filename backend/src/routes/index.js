const { Router } = require('express');
const gameRoutes = require('./games/game-routes');
const indicatorRoutes = require('./indicators/indicator-routes');

const router = Router();

router.use('/games', gameRoutes);
router.use('/indicators', indicatorRoutes);

module.exports = router;
