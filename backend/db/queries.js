const prisma = require('./prismaClient');

// GET QUERIES
const getUserTimeDB = async (gameId) => {
    console.log(gameId);
    return;
};

// POST QUERIES
const postUserTimeDB = async (gameId, time, username) => {
    console.log(gameId, time, username);
    return true;
};

module.exports = { getUserTimeDB, postUserTimeDB };
