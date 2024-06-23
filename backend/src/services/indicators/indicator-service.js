async function createIndicator(data) {
    const { game_id, indicator_name, indicator_value } = data;
    try {
        const query = `INSERT INTO indicators (game_id, indicator_name, indicator_value) 
                       VALUES (${game_id}, ${indicator_name}, ${indicator_value}) RETURNING *`;

        await client.execute(query);

        const indicator = {
            game_id,
            indicator_name,
            indicator_value,
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