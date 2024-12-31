import useTheme from '../../hooks/useTheme';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer
            className={`flex items-center justify-center py-3 transition-all ease-in-out duration-300 ${
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
                            ? 'group-hover:text-white'
                            : 'text-slate-600 group-hover:text-black'
                    } `}
                >
                    NewGen2022
                </span>

                <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub Logo"
                    className="w-6 h-6 rounded-full group-hover:scale-110 group-hover:rotate-360 transition-transform duration-700"
                />
            </a>
        </footer>
    );
};

export default Footer;
