import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const GameContext = createContext();

const GameProvider = ({ children }) => {
    const [isGame, setIsGame] = useState(false);
    const [gameCharacters, setGameCharacters] = useState([]);
    const [gameTime, setGameTime] = useState(0); // New state to hold the game time

    const changeIsGame = (value) => setIsGame(value);

    const updateGameTime = (time) => setGameTime(time); // Method to update gameTime

    return (
        <GameContext.Provider
            value={{
                isGame,
                changeIsGame,
                gameCharacters,
                setGameCharacters,
                gameTime,
                updateGameTime,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

GameProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { GameProvider, GameContext };
