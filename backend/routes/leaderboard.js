const express = require('express');
const router = express.Router();

const {
    getUsersTime,
    postUserTime,
} = require('../controllers/leaderboardController');

router.get('/leaderboard', getUsersTime); // get leaderboard for specific game
router.post('/leaderboard/time', postUserTime); // add user new time

module.exports = router;
