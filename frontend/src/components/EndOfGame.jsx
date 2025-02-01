import useGame from '../hooks/useGame';
import { formatEndTime } from '../js/time';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const EndOfGame = () => {
    const { gameTime } = useGame();
    const { gameId } = useParams();
    const [username, setUsername] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(
                'http://localhost:1991/api/leaderboard/time',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        username,
                        time: gameTime,
                        gameId,
                    }),
                }
            );

            if (response.ok) {
                alert('Your time successfully saved');
                // Redirect to home after successful form submission
                window.location.href = '/';
            } else {
                alert('Failed to save your time. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center items-center fixed w-full h-full max-[740px]:top-48 z-[51] bg-slate-700 opacity-90">
            <div className="bg-slate-50 p-10 max-[740px]:-translate-y-36 -translate-y-20 rounded-lg shadow-lg text-start z-[52] text-slate-600">
                <div className="text-2xl font-bold self-center">
                    Congratulations
                </div>
                <div className="mt-2">
                    You finished in {formatEndTime(gameTime)}
                </div>
                <form onSubmit={handleSubmit} className="mt-2">
                    <label htmlFor="username" className="block">
                        Username
                    </label>
                    <input
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border-2 border-slate-500 p-1 px-3 rounded w-full mt-1 focus:outline-cyan-400 transition-all duration-200 ease-in-out"
                        required
                    />
                    <input name="time" type="hidden" value={gameTime} />
                    <input name="gameId" type="hidden" value={gameId} />
                    <div className="text-xs">
                        *If you do not submit form, result won&apos;t be saved
                    </div>
                    <div className="mt-4 flex justify-between ">
                        <a
                            href="/"
                            className="px-4 py-2 bg-slate-500 text-slate-50 rounded hover:bg-slate-600 transition-colors duration-200 ease-in-out"
                        >
                            Back to home
                        </a>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-cyan-400 text-white rounded hover:bg-cyan-600 transition-colors duration-200 ease-in-out"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EndOfGame;
