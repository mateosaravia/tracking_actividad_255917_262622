const { Router } = require('express');
const indicatorController = require('../../controllers/indicators/indicator-controller');

const router = Router();

router.post('', indicatorController.createIndicator);

module.exports = router;