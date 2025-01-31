import moonIcon from '../../assets/icons/night.png';
import sunIcon from '../../assets/icons/sun.png';
import useTheme from '../../hooks/useTheme';
import useGame from '../../hooks/useGame';
import StopWatch from '../time/StopWatch';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { isGame, gameCharacters } = useGame();

    return (
        // header main container
        <div
            className={`select-none z-50 sticky top-0 flex items-center place-content-between 
                px-16 min-h-16 transition-colors ease-in-out duration-300 ${
                    theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'
                } max-[740px]:flex-col max-[740px]:py-4 max-[740px]:gap-4`}
        >
            {/* app logo that navigates back to home */}
            <a
                href="/"
                id="back-logo"
                className="flex items-center max-[740px]:py-2"
            >
                <div
                    className={`text-2xl font-bold group hover:text-cyan-400 transition-colors ease-in-out duration-300 ${
                        theme === 'dark' ? '' : 'text-slate-700'
                    } max-[740px]:text-4xl`}
                >
                    Pixel
                    <span
                        className={`text-cyan-400 group-hover:text-slate-100 transition-colors ease-in-out duration-300 ${
                            theme === 'dark' ? '' : 'group-hover:text-slate-700'
                        } `}
                    >
                        Find
                    </span>
                </div>
            </a>

            {/* Stop watch */}
            {isGame && <StopWatch />}

            {/* leaderboard/game characters and toggle theme button container */}
            <div className="flex items-center gap-5 max-[740px]:flex-col max-[740px]:gap-4">
                {/* displaying of leaderboard if game not started, 
                otherwise display game characters which to find */}
                {!isGame ? (
                    <a
                        href="/leaderboard"
                        className={`font-semibold transition-all ease-in-out duration-500 px-3 py-2 rounded-md ${
                            theme === 'dark'
                                ? 'hover:text-white hover:bg-slate-800'
                                : 'text-slate-600 hover:text-black hover:bg-slate-50 hover:shadow-md hover:shadow-slate-800'
                        }`}
                    >
                        Leaderboard
                    </a>
                ) : (
                    gameCharacters.length > 0 && (
                        <div className="flex w-full gap-2">
                            {gameCharacters.map((character) => (
                                <div
                                    key={character.name}
                                    className="text-center flex items-center gap-1 max-[740px]:flex-col relative"
                                >
                                    {/* Character Image with Red Cross Overlay */}
                                    <div className="relative w-[40px] h-[40px]">
                                        <img
                                            src={character.image}
                                            alt={character.name}
                                            className="w-full h-full rounded-md transform transition-transform duration-300 hover:scale-105"
                                        />
                                        {character.found && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-rose-900 bg-opacity-70 rounded-md">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6 text-rose-500"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <line
                                                        x1="18"
                                                        y1="6"
                                                        x2="6"
                                                        y2="18"
                                                    />
                                                    <line
                                                        x1="6"
                                                        y1="6"
                                                        x2="18"
                                                        y2="18"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    {/* Character Name */}
                                    <div
                                        className={`${
                                            theme === 'light' &&
                                            'text-slate-600 font-medium'
                                        } transition-colors ease-in-out duration-300`}
                                    >
                                        {character.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                )}

                {/* displaying toggle theme button */}
                <div
                    onClick={toggleTheme}
                    className={`cursor-pointer border-2 p-2 rounded-lg transition-colors ease-in-out duration-300 ${
                        theme === 'dark'
                            ? 'border-yellow-300 bg-yellow-700 hover:bg-yellow-800'
                            : 'border-slate-500 bg-slate-300 hover:bg-slate-600'
                    } `}
                >
                    <img
                        src={theme === 'dark' ? sunIcon : moonIcon}
                        className="w-5"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
