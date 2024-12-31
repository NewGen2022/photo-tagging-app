import Layout from '../components/layout/Layout';

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center">
                <div className="font-bold text-4xl my-10 max-sm:my-6">
                    Games
                </div>
                <div>game cards</div>
            </div>
        </Layout>
    );
};

export default Home;
