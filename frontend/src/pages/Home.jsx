import Layout from '../components/layout/Layout';
import GameCard from '../components/GameCard';
import useTheme from '../hooks/useTheme';
import gamesData from '../gameData';

const Home = () => {
    const { theme } = useTheme();

    return (
        <Layout>
            <div className="flex flex-col items-center mx-28">
                <h1
                    className={`font-bold text-4xl my-10 max-sm:my-6 ${
                        theme === 'light' && 'text-slate-600'
                    } transition-colors ease-in-out duration-300`}
                >
                    Games
                </h1>
                <div className="flex flex-wrap justify-center gap-5 mb-10">
                    {Object.keys(gamesData).map((gameId) => {
                        const game = gamesData[gameId];

                        return (
                            <GameCard
                                key={gameId}
                                src={game.image}
                                name={game.name}
                                gameId={game.id}
                            />
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Home;
