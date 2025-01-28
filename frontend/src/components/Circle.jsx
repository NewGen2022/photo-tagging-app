import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { placeItem } from '../js/handlePosition';
import useTheme from '../hooks/useTheme';

// circle component, appears when user clicks on the screen
const Circle = ({ coordinates, imgRef }) => {
    const circleRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        // places circle at the position where user clicked
        placeItem(circleRef, imgRef, coordinates);
    }, [coordinates, imgRef]);

    return (
        <div
            ref={circleRef}
            className={`z-40 absolute w-12 h-12 ${
                theme === 'dark'
                    ? 'bg-slate-800 border-slate-100'
                    : 'border-slate-800 bg-slate-200'
            } 
            border-2 0 rounded-full pointer-events-none transform -translate-x-1/2 
            -translate-y-1/2 opacity-70 transition-all ease-in-out duration-300`}
        ></div>
    );
};

Circle.propTypes = {
    coordinates: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
    imgRef: PropTypes.object.isRequired,
};

export default Circle;
