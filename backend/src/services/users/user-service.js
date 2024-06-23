const client = require('../../config/cassandra-config');

async function getUserByName(username) {
    try {
        const query = `SELECT * FROM users WHERE user_name = '${username}'`;
        const user = await client.execute(query);
        return user;
    }
    catch (err) {
        console.error('Error fetching user:', err);
        throw new Error('Error fetching user');
    }
};

async function getUserGames(id) {
    try {
        const queryGamesIds = `SELECT played_games FROM users WHERE user_id = ${id};`;
        const gamesIdsResult = await client.execute(queryGamesIds);

        const gamesIds = gamesIdsResult.rows[0].played_games;

        const games = await Promise.all(gamesIds.map(async gameId => {
            const query = `SELECT * FROM games WHERE game_id = ${gameId};`;
            const resultGame = await client.execute(query);

            const game = resultGame.rows.map(row => {
                return {
                    game_id: row.game_id.toString(),
                    game_category: row.game_category,
                    game_description: row.game_description,
                    game_name: row.game_name,
                    game_price: row.game_price,
                    game_release_date: row.game_release_date.toISOString(),
                    game_version: row.game_version
                };
            });

            return game[0];
        }));
        return games;
    }
    catch (err) {
        console.error('Error fetching user games:', err);
        throw new Error('Error fetching user games');
    }
};

module.exports = {
    getUserByName,
    getUserGames
};