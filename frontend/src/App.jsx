import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';

const App = () => {
    return (
        <Routes>
            {/* Home route */}
            <Route path="/" element={<Home />} />

            {/* Game routes */}
            <Route path="/g1" element={<Game />} />

            {/* Leaderboard routes */}
            <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
    );
};

export default App;
