import useGame from '../hooks/useGame';
import { formatEndTime } from '../js/time';

const EndOfGame = () => {
    const { gameTime } = useGame();

    return (
        <div className="flex justify-center items-center fixed w-full h-full max-[740px]:top-48 z-[51] bg-slate-700 opacity-90">
            <div className="bg-slate-50 p-10 max-[740px]:-translate-y-36 -translate-y-20 rounded-lg shadow-lg text-start z-[52] text-slate-600">
                <div className="text-2xl font-bold self-center">
                    Congratulations
                </div>
                <div className="mt-2">
                    You finished in {formatEndTime(gameTime)}
                </div>
                <form className="mt-2">
                    <label htmlFor="username" className="block">
                        Username
                    </label>
                    <input
                        name="username"
                        className="border-2 border-slate-500 p-1 px-3 rounded w-full mt-1 focus:outline-cyan-400 transition-all duration-200 ease-in-out"
                    />
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
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EndOfGame;
