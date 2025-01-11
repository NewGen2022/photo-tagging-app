import PropTypes from 'prop-types';
import useTheme from '../hooks/useTheme';
import { Link } from 'react-router-dom';

const GameCard = ({ src, name, gameId }) => {
    const { theme } = useTheme();

    return (
        <div
            className={`flex flex-col items-center ${
                theme === 'dark'
                    ? 'bg-slate-700'
                    : 'bg-slate-100 hover:shadow-cyan-500'
            }  rounded-lg hover:shadow-lg hover:shadow-cyan-200 transition-all ease-in-out duration-300`}
        >
            <div className="w-80 h-60">
                <img
                    src={src}
                    alt="Game"
                    className="w-full h-full object-top object-cover rounded-md"
                />
            </div>
            <h3
                className={`mt-3 font-semibold  ${
                    theme === 'dark' ? 'text-slate-50' : 'text-slate-600'
                } transition-colors ease-in-out duration-300`}
            >
                {name || 'No name'}
            </h3>
            <Link
                to={`/game/${gameId}`}
                className="m-3 px-6 py-2 bg-cyan-500 text-white font-semibold rounded-md hover:bg-cyan-400 transition-colors ease-in-out duration-300"
            >
                Start
            </Link>
        </div>
    );
};

GameCard.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gameId: PropTypes.string.isRequired,
};

export default GameCard;
