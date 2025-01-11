import { createContext } from 'react';
import PropTypes from 'prop-types';
import useThemeUpdate from '../hooks/useThemeUpdate';

// Create the ThemeContext
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const { theme, toggleTheme } = useThemeUpdate();

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
