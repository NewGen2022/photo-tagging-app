import { useState, useEffect } from 'react';

const useThemeUpdate = (defaultValue = 'dark') => {
    const savedTheme = localStorage.getItem('theme') || defaultValue;
    const [theme, setTheme] = useState(savedTheme);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return { theme, toggleTheme };
};

export default useThemeUpdate;
