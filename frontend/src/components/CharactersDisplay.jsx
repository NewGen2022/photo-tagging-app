import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { placeItem } from '../js/handlePosition';

const CharactersDisplay = ({ characters, coordinates, imgRef }) => {
    const charactersRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    const initialScrollPosition = useRef(0);
    const TOLERANCE = 12;

    const handleScroll = () => {
        const roundedInitScroll = Math.round(initialScrollPosition.current);
        const roundedCurrentScroll = Math.round(window.scrollY);

        const scrollDifference = Math.abs(
            roundedInitScroll - roundedCurrentScroll
        );

        if (scrollDifference <= TOLERANCE) {
            setIsVisible(true); // Show characters if scroll positions are within tolerance
        } else {
            setIsVisible(false); // Hide characters if scroll positions differ more than tolerance
        }

        // Update the initial scroll position
        initialScrollPosition.current = window.scrollY;
    };

    const handleCharacterClick = (e) => {
        const characterName = e.target
            .closest('div')
            .querySelector('span').innerText;
        console.log(characterName);
        console.log(
            characters.find((character) => character.name === characterName)
                .marker
        );
    };

    useEffect(() => {
        placeItem(charactersRef, imgRef, coordinates);
    }, [coordinates, imgRef]);

    useEffect(() => {
        console.log(initialScrollPosition.current);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && (
            <div
                ref={charactersRef}
                className="absolute flex flex-col gap-1 bg-slate-700 p-4 translate-x-5 w-40 rounded-tl-lg
                rounded-xl opacity-90 transition-all ease-in-out duration-300"
            >
                {characters.map((character) => (
                    <div
                        key={character.name}
                        className="group flex justify-left items-center gap-1 cursor-pointer rounded-xl 
                        hover:font-bold hover:text-slate-700 hover:bg-slate-100 transition-all ease-in-out duration-300"
                        onClick={handleCharacterClick}
                    >
                        <img
                            src={character.image}
                            alt={character.name}
                            className="w-[40px] h-[40px] rounded-md group-hover:scale-105 transition-all ease-in-out duration-300"
                        />
                        <span>{character.name}</span>
                    </div>
                ))}
            </div>
        )
    );
};

CharactersDisplay.propTypes = {
    characters: PropTypes.array.isRequired,
    coordinates: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
    imgRef: PropTypes.object.isRequired,
};

export default CharactersDisplay;
