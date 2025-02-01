const { getUserTimeDB, postUserTimeDB } = require('../db/queries');

const getUsersTime = async (req, res) => {
    console.log(req.body);
    // getUserTimeDB(gameId);
};

const postUserTime = async (req, res) => {
    const { username, time, gameId } = req.body;

    await postUserTimeDB(gameId, username, time);
    return res.status(200).json({ message: 'Time successfully saved!' });
};

module.exports = { getUsersTime, postUserTime };
