import handleError from '../errors/handle-errors';
import axios from '../axios';

async function getUserByName(username) {
    try {
        const response = await axios.get(`/users/${username}`);
        return response.data;
    }
    catch (error) {
        handleError(error);
        return error;
    }
};

async function getUserGames(id) {
    try {
        const response = await axios.get(`/users/${id}/games`);
        return response.data;
    }
    catch (error) {
        handleError(error);
        return error;
    }
};

async function getUserAchievements(id) {
    try {
        const response = await axios.get(`/users/${id}/achievements`);
        return response.data;
    }
    catch (error) {
        handleError(error);
        return error;
    }
};

async function getUnlockedLevels(id) {
    try {
        const response = await axios.get(`/users/${id}/unlock-levels`);
        return response.data;
    }
    catch (error) {
        handleError(error);
        return error;
    }
}

async function getUserGameSessions(id) {
    try {
        const response = await axios.get(`/users/${id}/game-sessions`);
        return response.data;
    }
    catch (error) {
        handleError(error);
        return error;
    }
};

export {
    getUserByName,
    getUserGames,
    getUserAchievements,
    getUnlockedLevels,
    getUserGameSessions
};
