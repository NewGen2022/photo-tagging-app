import { useState, useEffect } from 'react';
import useGame from '../../hooks/useGame';
import { formatTime } from '../../js/time';
import useTheme from '../../hooks/useTheme';

const StopWatch = () => {
    const { isGame, gameTime, updateGameTime } = useGame(); // Access context
    const [elapsedTime, setElapsedTime] = useState(gameTime * 1000); // Convert to milliseconds
    const { theme } = useTheme();

    useEffect(() => {
        if (isGame) {
            const startTime = performance.now() - elapsedTime; // Track time accurately
            const timerID = setInterval(() => {
                setElapsedTime(performance.now() - startTime);
            }, 10); // Update every 10ms

            return () => clearInterval(timerID);
        }
    }, [isGame]);

    useEffect(() => {
        updateGameTime(elapsedTime / 1000); // Convert back to seconds for context
    }, [elapsedTime, updateGameTime]);

    return (
        <div
            className={`font-bold text-lg ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-600'
            }`}
        >
            {formatTime(elapsedTime / 1000)} {/* Convert back to seconds */}
        </div>
    );
};

export default StopWatch;
