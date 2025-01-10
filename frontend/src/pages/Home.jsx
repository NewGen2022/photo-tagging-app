import Layout from '../components/layout/Layout';
import GameCard from '../components/GameCard';
import gameImg1 from '../assets/games/game_1.jfif';

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center mx-28">
                <h1 className="font-bold text-4xl my-10 max-sm:my-6">Games</h1>
                <div className="flex flex-wrap justify-center gap-5 mb-10">
                    <GameCard
                        src={gameImg1}
                        name={"Dragon Charmer's Island"}
                        gameId={'1'}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
