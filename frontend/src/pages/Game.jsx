import Layout from '../components/layout/Layout';
import useGame from '../hooks/useGame';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import gamesData from '../gameData';
import { handleImageCoords } from '../js/handleImage';
import Circle from '../components/Circle';
import CharactersDisplay from '../components/CharactersDisplay';
import NotFound from '../components/popup/NotFound';

const Game = () => {
    const { changeIsGame, setGameCharacters } = useGame();
    const { gameId } = useParams();
    const [circleVisible, setCircleVisible] = useState(false);
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 }); // normalized coordinates
    const imgRef = useRef(null);

    const game = gamesData.find((game) => game.id === gameId);

    const handleImgClick = (e) => {
        setCircleVisible(true);
        if (imgRef.current) {
            const { x, y } = handleImageCoords(e, imgRef);
            setCoordinates({ x, y });
        }
    };

    useEffect(() => {
        if (game) {
            setGameCharacters(game.characters);
            changeIsGame(true);
        }

        return () => {
            changeIsGame(false);
            setGameCharacters([]);
        };
    }, [game, setGameCharacters]);

    return (
        <Layout>
            {game ? (
                <div>
                    <img
                        ref={imgRef}
                        src={game.image}
                        alt={game.name}
                        className="object-cover"
                        onClick={handleImgClick}
                    />

                    {circleVisible && (
                        <>
                            <Circle coordinates={coordinates} imgRef={imgRef} />
                            <CharactersDisplay
                                coordinates={coordinates}
                                imgRef={imgRef}
                            />
                        </>
                    )}
                </div>
            ) : (
                <NotFound />
            )}
        </Layout>
    );
};

export default Game;
