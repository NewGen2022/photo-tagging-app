import Layout from '../components/layout/Layout';
import useGame from '../hooks/useGame';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gamesData from '../gameData';

const Game = () => {
    const { changeIsGame, setGameCharacters } = useGame();
    const { gameId } = useParams();

    const game = gamesData.find((game) => game.id === gameId);

    useEffect(() => {
        if (game) {
            setGameCharacters(game.characters);
        }

        changeIsGame(true);

        return () => {
            changeIsGame(false);
            setGameCharacters([]);
        };
    }, [changeIsGame, game, setGameCharacters]);

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
