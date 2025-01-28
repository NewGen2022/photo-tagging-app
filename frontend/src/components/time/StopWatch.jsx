import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { formatTime } from '../../js/time';

const StopWatch = ({ isGame, theme }) => {
    const [elapsedTime, setElapsedTime] = useState(0);

    // Start the timer automatically when isGame is true
    useEffect(() => {
        if (isGame) {
            const timerID = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 1);
            }, 1000);

            // when the game is over (isGame becomes false)
            // pass time to the time context
            return () => {
                clearInterval(timerID);
                if (!isGame) {
                    console.log('Time:', formatTime(elapsedTime)); // Log the final time when the game ends
                }
            };
        }
    }, [isGame, elapsedTime]);

    return (
        <div
            className={`font-bold text-lg ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-600'
            }`}
        >
            {formatTime(elapsedTime)}
        </div>
    );
};

StopWatch.propTypes = {
    isGame: PropTypes.bool.isRequired,
    theme: PropTypes.string.isRequired,
};

export default StopWatch;
