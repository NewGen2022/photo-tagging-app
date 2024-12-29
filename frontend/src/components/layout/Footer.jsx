const Footer = () => {
    return (
        <footer className="flex items-center justify-center bg-slate-700 py-3">
            <a
                href="https://github.com/NewGen2022?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 group transition-all hover:text-white"
            >
                <span className="cursor-pointer font-bold duration-500">
                    NewGen2022
                </span>

                <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    alt="GitHub Logo"
                    className="w-6 h-6 rounded-full duration-700 group-hover:scale-110 group-hover:rotate-360"
                />
            </a>
        </footer>
    );
};

export default Footer;
