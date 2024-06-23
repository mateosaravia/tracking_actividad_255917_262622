import handleError from '../errors/handle-errors';
import axios from '../axios';

async function createGameSession(data) {
    return await axios
        .post(`/games/game-sessions`, data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

async function createAchievement(data) {
    return await axios
        .post(`/games/achievements`, data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

async function unlockLevel(data) {
    return await axios
        .post(`/games/levels/unlock`, data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

export {
    createGameSession,
    createAchievement,
    unlockLevel
};