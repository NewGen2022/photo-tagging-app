import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

const useTheme = () => useContext(ThemeContext);

export { useTheme };
