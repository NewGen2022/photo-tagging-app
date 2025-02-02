const { getUserTimeDB, postUserTimeDB } = require('../db/queries');

const getUsersTime = async (req, res) => {
    const { gameId } = req.query;

    try {
        // successfully get time for game
        const leaderboard = await getUserTimeDB(gameId);
        return res.status(200).json(leaderboard);
    } catch (err) {
        // error occurred getting game time
        return res
            .status(500)
            .json({ error: err.message || 'Internal Server Error' });
    }
};

const postUserTime = async (req, res) => {
    const { username, time, gameId } = req.body;

    const trimmedUsername = username.trim(); // remove all trailing spaces
    const numericTime = parseFloat(time); // Convert string back to number

    try {
        // successfully saved user time
        await postUserTimeDB(trimmedUsername, numericTime, gameId);
        return res.status(200).json({ message: 'Time successfully saved!' });
    } catch (err) {
        // error occurred saving user time
        return res
            .status(500)
            .json({ error: err.message || 'Internal Server Error' });
    }
};

module.exports = { getUsersTime, postUserTime };
