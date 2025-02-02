import Layout from '../components/layout/Layout';
import gamesData from '../gameData';
import { useState } from 'react';
import useTheme from '../hooks/useTheme';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState(null);
    const [activeGameId, setActiveGameId] = useState(null);
    const { theme } = useTheme();

    const handleGameClick = async (gameId) => {
        setActiveGameId(gameId);

        try {
            const response = await fetch(
                `http://localhost:1991/api/leaderboard?gameId=${gameId}`,
                {
                    method: 'GET',
                }
            );

            if (response.ok) {
                setLeaderboard(await response.json());
            } else {
                alert(
                    'Failed to get leaderboard for this game. Please try again.'
                );
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error getting game leaderboard.');
        }
    };

    return (
        <Layout>
            <div className="flex m-10 gap-10 max-[650px]:flex-col max-[650px]:gap-2">
                <div className="flex flex-col max-[650px]:flex-row max-[650px]:justify-between">
                    {gamesData.map((game) => (
                        <div
                            onClick={() => handleGameClick(game.id)}
                            key={game.id}
                            className={`w-40 mt-1 p-3 rounded-md cursor-pointer select-none transition-colors duration-200 ease-in-out 
                            ${
                                theme === 'dark'
                                    ? 'hover:bg-slate-700'
                                    : 'hover:bg-slate-100'
                            } 
                            ${
                                activeGameId === game.id
                                    ? `${
                                          theme === 'dark'
                                              ? 'bg-slate-600 '
                                              : 'bg-slate-200 '
                                      }`
                                    : ''
                            }`}
                        >
                            <img
                                src={game.image}
                                alt={`Game ${game.name}`}
                                className="rounded-md "
                            />
                            <div
                                className={`mt-4 transition-colors duration-200 ease-in-out ${
                                    theme === 'dark' ? '' : 'text-slate-600'
                                } `}
                            >
                                {game.name}
                            </div>
                        </div>
                    ))}
                </div>

                {leaderboard && leaderboard.length > 0 ? (
                    <table className="max-h-5 flex-1 mt-2 border border-slate-700 bg-slate-900">
                        <thead>
                            <tr
                                className={`transition-colors duration-300 ease-in-out ${
                                    theme === 'dark'
                                        ? 'bg-slate-800'
                                        : 'bg-slate-200 text-slate-600'
                                }`}
                            >
                                <th className="px-4 py-2 border-b border-slate-700">
                                    Username
                                </th>
                                <th className="px-4 py-2 border-b border-slate-700">
                                    Time (in seconds)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboard.map((leader) => (
                                <tr
                                    key={leader.id}
                                    className={`${
                                        theme === 'dark'
                                            ? 'hover:bg-slate-700'
                                            : 'text-slate-800'
                                    }`}
                                >
                                    <td
                                        className={`max-w-14 overflow-hidden whitespace-nowrap text-ellipsis px-4 py-2 border-b border-slate-700 transition-colors duration-300 ease-in-out
                                        ${
                                            theme === 'dark'
                                                ? ''
                                                : 'bg-slate-300'
                                        }`}
                                    >
                                        {leader.username}
                                    </td>
                                    <td
                                        className={`px-4 py-2 border-b border-gray-700 transition-colors duration-300 ease-in-out
                                        ${
                                            theme === 'dark'
                                                ? ''
                                                : 'bg-slate-300'
                                        }`}
                                    >
                                        {leader.time}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div
                        className={`mt-10 text-center w-full ${
                            theme === 'dark' ? '' : 'text-slate-600 font-bold'
                        }`}
                    >
                        No leaderboard data yet
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Leaderboard;
