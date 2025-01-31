import { useState, useEffect } from 'react';
import useGame from '../../hooks/useGame';
import { formatTime } from '../../js/time';
import useTheme from '../../hooks/useTheme';

const StopWatch = () => {
    const { isGame, gameTime, updateGameTime } = useGame(); // Access context
    const [elapsedTime, setElapsedTime] = useState(gameTime); // Sync with gameTime from context
    const { theme } = useTheme();

    // Start the timer automatically when isGame is true
    useEffect(() => {
        if (isGame) {
            const timerID = setInterval(() => {
                setElapsedTime((prevTime) => {
                    const newTime = prevTime + 1;
                    return newTime; // Update the local state first
                });
            }, 1000);

            // Update gameTime in context when elapsedTime changes
            const timeInterval = setInterval(() => {
                updateGameTime(elapsedTime); // Update context with elapsedTime
            }, 1000);

            // Clean up the interval and log time when the game ends
            return () => {
                clearInterval(timerID);
                clearInterval(timeInterval); // Clear context update interval
            };
        }
    }, [isGame, elapsedTime, updateGameTime]);

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

export default StopWatch;
