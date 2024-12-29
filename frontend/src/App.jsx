import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';

const App = () => {
    return (
        <Routes>
            {/* Home route */}
            <Route path="/" element={<Home />} />

            {/* Game routes */}
            <Route path="/g1" element={<Game />} />
        </Routes>
    );
};

export default App;
