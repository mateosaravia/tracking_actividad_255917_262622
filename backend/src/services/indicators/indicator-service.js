const { v4: uuidv4 } = require('uuid'); 
const client = require('../../config/cassandra-config');

async function createIndicator(data) {
    const { game_id, indicator_name, indicator_value } = data;
    const recorded_at = new Date().getDate();
    try {
        const indicator_id = uuidv4();
        const query = `INSERT INTO indicators (indicator_id, game_id, indicator_name, indicator_value, recorded_at) 
                       VALUES (${indicator_id}, ${game_id}, '${indicator_name}', '${indicator_value}', '${recorded_at}')`;

        await client.execute(query);

        const indicator = {
            indicator_id,
            game_id,
            indicator_name,
            indicator_value,
            recorded_at
        };

        return indicator;
    }
    catch (err) {
        console.error('Error creating indicator:', err);
        throw new Error('Error creating indicator');
    }
};

module.exports = {
    createIndicator
};