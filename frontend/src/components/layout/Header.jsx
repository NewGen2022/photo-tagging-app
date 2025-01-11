import moonIcon from '../../assets/icons/night.png';
import sunIcon from '../../assets/icons/sun.png';
import useTheme from '../../hooks/useTheme';
import useGame from '../../hooks/useGame';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const { isGame, gameCharacters } = useGame();

    return (
        <div
            className={`sticky top-0 flex items-center place-content-between px-16 min-h-16 transition-colors ease-in-out duration-300 ${
                theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'
            } max-sm:flex-col max-sm:py-4 max-sm:gap-4`}
        >
            <a
                href="/"
                id="back-logo"
                className="flex items-center max-sm:py-2"
            >
                <div
                    className={`text-2xl font-bold group hover:text-cyan-400 transition-colors ease-in-out duration-300 ${
                        theme === 'dark' ? '' : 'text-slate-700'
                    } max-sm:text-4xl`}
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
            <div className="flex items-center gap-5 max-sm:flex-col max-sm:gap-4">
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
                                    className="text-center flex items-center gap-1 max-sm:flex-col"
                                >
                                    <img
                                        src={character.image}
                                        alt={character.name}
                                        className="w-[40px] h-[40px] rounded-md transform transition-transform duration-300 hover:scale-105"
                                    />
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
