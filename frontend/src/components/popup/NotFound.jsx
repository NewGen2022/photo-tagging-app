import notFoundIcon from '../../assets/icons/notfound.png';
import useTheme from '../../hooks/useTheme';

const NotFound = () => {
    const { theme } = useTheme();

    return (
        <div
            className="flex flex-col gap-3 items-center justify-center"
            style={{ height: 'calc(100vh - 200px)' }}
        >
            <h1
                className={`text-2xl font-bold ${
                    theme === 'dark' ? '' : 'text-slate-600'
                }`}
            >
                Game Not Found
            </h1>
            <img className="w-24" src={notFoundIcon} />
        </div>
    );
};

export default NotFound;
