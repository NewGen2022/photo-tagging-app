import Layout from '../components/layout/Layout';
import useGame from '../hooks/useGame';
import { useEffect } from 'react';

const Game = () => {
    const { changeIsGame } = useGame();

    useEffect(() => {
        changeIsGame(true);
        return () => changeIsGame(false);
    }, [changeIsGame]);

    return <Layout>GAME</Layout>;
};

export default Game;
