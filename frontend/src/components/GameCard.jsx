import PropTypes from 'prop-types';

const GameCard = ({ src, name, gameId }) => {
    return (
        <div className="flex flex-col items-center bg-slate-700 rounded-lg hover:shadow-lg hover:shadow-cyan-200 transition-shadow duration-300">
            <div className="w-80 h-60">
                <img
                    src={src}
                    alt="Game"
                    className="w-full h-full object-top object-cover rounded-md"
                />
            </div>
            <h3 className="mt-3 font-semibold text-slate-50">
                {name || 'No name'}
            </h3>
            <a
                href={`/game/${gameId}`}
                className="m-3 px-6 py-2 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-400 transition-colors ease-in-out duration-300"
            >
                Start
            </a>
        </div>
    );
};

GameCard.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gameId: PropTypes.string.isRequired,
};

export default GameCard;
