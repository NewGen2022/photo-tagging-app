import Layout from '../components/layout/Layout';
import useGame from '../hooks/useGame';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gamesData from '../gameData';

const Game = () => {
    const { changeIsGame } = useGame();
    const { gameId } = useParams();

    const game = gamesData.find((game) => game.id === gameId);

    useEffect(() => {
        if (game) {
            localStorage.setItem(
                'gameCharacters',
                JSON.stringify(game.characters)
            );
        }

        changeIsGame(true);

        return () => {
            changeIsGame(false);
            localStorage.removeItem('gameCharacters');
        };
    }, [changeIsGame, game]);

    return (
        <Layout>
            {game ? (
                <img
                    src={game.image}
                    alt={game.name}
                    className="object-cover"
                />
            ) : (
                <h1 className="text-2xl font-bold">Game not found</h1>
            )}
        </Layout>
    );
};

export default Game;
