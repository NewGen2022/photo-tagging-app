import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const GameContext = createContext();

const GameProvider = ({ children }) => {
    const [isGame, setIsGame] = useState(false);
    const [gameCharacters, setGameCharacters] = useState([]);

    const changeIsGame = (value) => setIsGame(value);

    return (
        <GameContext.Provider
            value={{ isGame, changeIsGame, gameCharacters, setGameCharacters }}
        >
            {children}
        </GameContext.Provider>
    );
};

GameProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { GameProvider, GameContext };
