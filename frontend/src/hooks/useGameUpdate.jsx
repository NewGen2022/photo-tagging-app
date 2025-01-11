import { useState } from 'react';

const useGameUpdate = (value = false) => {
    const [isGame, setIsGame] = useState(value);

    const changeIsGame = (value) => {
        if (typeof value === 'boolean') {
            setIsGame(value);
        } else {
            setIsGame((prev) => !prev);
        }
    };

    return { isGame, changeIsGame };
};

export default useGameUpdate;
