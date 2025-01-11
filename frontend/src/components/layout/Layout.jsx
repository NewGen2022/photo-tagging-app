import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';
import useTheme from '../../hooks/useTheme';

const Layout = ({ children }) => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main
                className={`flex-grow ${
                    theme === 'light' && 'bg-slate-300'
                } transition-colors ease-in-out duration-300`}
            >
                {children}
            </main>

            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
