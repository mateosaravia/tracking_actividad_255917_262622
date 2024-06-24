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

async function getGameLevels(id) {
    return await axios
        .get(`/games/${id}/levels`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
};

async function getGameByName(name) {
    return await axios
        .get(`/games/${name}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            handleError(error);
            return error;
        });
}

async function getGameIndicators(id) {
    return await axios
        .get(`/games/${id}/indicators`)
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
    unlockLevel,
    getGameLevels,
    getGameByName,
    getGameIndicators
};