import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create the ThemeContext
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const [theme, setTheme] = useState(savedTheme);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

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
