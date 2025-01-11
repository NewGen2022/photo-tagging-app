import { useContext } from 'react';
import { GameContext } from '../context/GameContext.jsx';

const useGame = () => useContext(GameContext);

export default useGame;
