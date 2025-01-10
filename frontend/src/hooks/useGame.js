import { useContext } from 'react';
import { GameContext } from '../context/GameContext.jsx';

const useGame = () => {
    return useContext(GameContext);
};

export default useGame;
