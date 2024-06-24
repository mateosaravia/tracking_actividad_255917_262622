const indicatorService = require('../../services/indicators/indicator-service');

async function createIndicator(req, res) {
    const data = req.body;
    try {
        const indicator = await indicatorService.createIndicator(data);
        res.status(201).json(indicator);
    }
    catch (err) {
        console.error('Error fetching genre transactions:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createIndicator
};
