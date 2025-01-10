import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext';
import { GameProvider } from './context/GameContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <GameProvider>
                    <App />
                </GameProvider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);
