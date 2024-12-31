import moonIcon from '../../assets/icons/night.png';
import sunIcon from '../../assets/icons/sun.png';
import useTheme from '../../hooks/useTheme';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className={`flex items-center place-content-between px-16 min-h-16 transition-colors ease-in-out duration-300 ${
                theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'
            }`}
        >
            <a href="/" id="back-logo" className="flex items-center">
                <div
                    className={`text-2xl font-bold group hover:text-cyan-400 transition-colors ease-in-out duration-300 ${
                        theme === 'dark' ? '' : 'text-slate-700'
                    } `}
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
            <div></div>
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
    );
};

export default Header;
