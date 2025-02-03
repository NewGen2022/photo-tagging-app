const prisma = require('./prismaClient');

// GET QUERIES
const getUserTimeDB = async (gameId) => {
    if (!gameId) throw new Error('gameId is missing');

    try {
        return await prisma.leaderboard.findMany({
            where: { gameId: gameId },
            orderBy: { time: 'asc' },
        });
    } catch (err) {
        throw new Error(
            `Error getting leaderboard for game with id ${gameId}: ` +
                err.message
        );
    }
};

// POST QUERIES
const postUserTimeDB = async (username, time, gameId) => {
    if (!gameId) throw new Error('GameId is missing');
    if (!time) throw new Error('Time is missing');
    if (!username) throw new Error('Username is missing');

    try {
        return await prisma.leaderboard.create({
            data: { username, time, gameId },
        });
    } catch (err) {
        throw new Error('Error adding user time: ' + err.message);
    }
};

module.exports = { getUserTimeDB, postUserTimeDB };
