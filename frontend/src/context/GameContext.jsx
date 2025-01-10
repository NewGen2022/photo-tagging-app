import { createContext } from 'react';
import PropTypes from 'prop-types';
import useGameUpdate from '../hooks/useGameUpdate';

const GameContext = createContext();

const GameProvider = ({ children }) => {
    const { isGame, changeIsGame } = useGameUpdate();

    return (
        <GameContext.Provider value={{ isGame, changeIsGame }}>
            {children}
        </GameContext.Provider>
    );
};

GameProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { GameProvider, GameContext };
