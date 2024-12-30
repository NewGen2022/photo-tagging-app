import { useTheme } from '../../hooks/useTheme.js';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer
            className={`flex items-center justify-center py-3 ${
                theme === 'dark' ? ' bg-slate-700' : ' bg-slate-200'
            } `}
        >
            <a
                href="https://github.com/NewGen2022?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 group transition-all"
            >
                <span
                    className={`cursor-pointer font-bold duration-500 ${
                        theme === 'dark'
                            ? 'hover:text-white'
                            : 'text-slate-600 hover:text-black'
                    } `}
                >
                    NewGen2022
                </span>

                <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub Logo"
                    className="w-6 h-6 rounded-full duration-700 group-hover:scale-110 group-hover:rotate-360 transition-transform"
                />
            </a>
        </footer>
    );
};

export default Footer;
