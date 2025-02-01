import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { placeItem, moveItem } from '../js/handlePosition';
import useTheme from '../hooks/useTheme';
import debounce from 'lodash.debounce';
import useGame from '../hooks/useGame';
import Success from './popup/Success';
import Failure from './popup/Failure';

const CharactersDisplay = ({ coordinates, imgRef }) => {
    const { changeIsGame, gameCharacters, setGameCharacters, setEndGame } =
        useGame();
    const { theme } = useTheme();
    const charactersRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    const initialScrollPosition = useRef(window.scrollY || 0);
    const scrollTimeout = useRef(null); // To track scroll idle state
    const [characterBoardPosition, setCharacterBoardPosition] = useState({
        translateX: 'translate-x-5',
        translateY: 'translate-y-0',
    });
    const [foundCharacter, setFoundCharacter] = useState(null);
    const [wrongCharacter, setWrongCharacter] = useState(null);

    // Hide characters board if user scrolls
    const handleScroll = () => {
        const previousScrollPosition = initialScrollPosition.current;
        const currentScrollPosition = window.scrollY;

        // Hide when scrolling
        if (previousScrollPosition !== currentScrollPosition) {
            if (isVisible) {
                setIsVisible(false);
            }

            // Clear the previous timeout and set a new one to detect scroll end
            clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
                setIsVisible(true); // Show after scrolling stops
            }, 100); // Adjust delay for "scroll stopped" detection
        }

        // Update scroll position
        initialScrollPosition.current = currentScrollPosition;
    };

    // Check if all characters are found
    const allCharactersFound = gameCharacters.every(
        (character) => character.found
    );

    // Handles user click on the characters that are not found yet
    const handleCharacterClick = (e) => {
        const characterName = e.target
            .closest('div')
            .querySelector('span').innerText;
        const characterIndex = gameCharacters.findIndex(
            (character) => character.name === characterName
        );
        const { x: savedX, y: savedY } = gameCharacters[characterIndex].marker;

        const x = coordinates.x;
        const y = coordinates.y;
        const tolerance = 50; // tolerance margin

        // Check if clicked character's coordinates are within the bounds
        if (
            savedX >= x - tolerance &&
            savedX <= x + tolerance &&
            savedY >= y - tolerance &&
            savedY <= y + tolerance
        ) {
            // Update the 'found' state of the character
            setGameCharacters((prevState) => {
                const updatedState = [...prevState];
                updatedState[characterIndex] = {
                    ...updatedState[characterIndex],
                    found: true,
                };
                return updatedState;
            });

            setWrongCharacter(null);
            setFoundCharacter(characterName);
            setTimeout(() => {
                setFoundCharacter(null);
            }, 3000);
        } else {
            setFoundCharacter(null);
            setWrongCharacter(characterName);
            setTimeout(() => {
                setWrongCharacter(null);
            }, 3000);
        }
    };

    // Correctly display the character board
    useEffect(() => {
        if (charactersRef.current && imgRef.current) {
            // Place not-found characters at the position near circle
            placeItem(charactersRef, imgRef, coordinates);
            // Move character board to the convenient place to display correctly
            moveItem(
                charactersRef,
                imgRef,
                coordinates,
                setCharacterBoardPosition
            );

            // Adjust translateX based on the number of characters
            const numCharacters = gameCharacters.filter(
                (character) => !character.found
            ).length;

            // Preserve translateX and only adjust translateY
            setCharacterBoardPosition((prevState) => {
                if (numCharacters === 1 || numCharacters === 0) {
                    return {
                        translateX: prevState.translateX, // Keep previous translateX
                        translateY: '-translate-y-20', // smaller gap for one character
                    };
                } else if (numCharacters === 2) {
                    return {
                        translateX: prevState.translateX, // Keep previous translateX
                        translateY: '-translate-y-32', // slightly larger gap for two characters
                    };
                }
                return prevState;
            });
        }
    }, [coordinates, imgRef]);

    // Updates characters board visible/invisible state
    useEffect(() => {
        const debouncedScroll = debounce(handleScroll, 100);
        window.addEventListener('scroll', debouncedScroll);
        return () => window.removeEventListener('scroll', debouncedScroll);
    }, []);

    // check if all characters are found
    useEffect(() => {
        if (allCharactersFound) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
            setEndGame(true);
            changeIsGame(false);
        }
    }, [allCharactersFound]);

    return (
        isVisible && (
            <>
                {foundCharacter && <Success characterName={foundCharacter} />}
                {wrongCharacter && <Failure characterName={wrongCharacter} />}

                <div
                    ref={charactersRef}
                    className={`absolute flex flex-col gap-1 font-medium p-4 ${
                        theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'
                    } ${characterBoardPosition.translateX} ${
                        characterBoardPosition.translateY
                    } w-40 rounded-tl-lg rounded-xl opacity-90 transition-all ease-in-out duration-300`}
                >
                    {allCharactersFound && (
                        <span
                            className={`${
                                theme === 'dark'
                                    ? ' text-slate-200'
                                    : 'text-slate-700'
                            }`}
                        >
                            All is find
                        </span>
                    )}

                    {gameCharacters.map(
                        (character) =>
                            !character.found && (
                                <div
                                    key={character.name}
                                    className={`group flex justify-left items-center gap-1 cursor-pointer rounded-xl hover:font-bold 
                        ${
                            theme === 'dark'
                                ? 'hover:text-slate-700 hover:bg-slate-100 active:bg-slate-500'
                                : 'text-slate-700 hover:text-slate-200 hover:bg-slate-600 active:bg-slate-700'
                        } active:scale-90 select-none transition-all ease-in-out duration-300`}
                                    onClick={handleCharacterClick}
                                >
                                    <img
                                        src={character.image}
                                        alt={character.name}
                                        className="w-[40px] h-[40px] rounded-md group-hover:scale-105 transition-all ease-in-out duration-300"
                                    />
                                    <span>{character.name}</span>
                                </div>
                            )
                    )}
                </div>
            </>
        )
    );
};

CharactersDisplay.propTypes = {
    coordinates: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
    imgRef: PropTypes.object.isRequired,
};

export default CharactersDisplay;
