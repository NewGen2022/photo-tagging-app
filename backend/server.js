require('dotenv').config();
const express = require('express');
const server = express();
const leaderboardRouter = require('./routes/leaderboard');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:7456',
    methods: ['GET', 'POST'],
    credentials: true,
};

server.use(cors(corsOptions));

// Middleware to parse JSON requests and form data
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/api', leaderboardRouter);

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
