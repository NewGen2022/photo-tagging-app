import { unnormalizeCoords } from './handleImage';

// converts normalized coordinates and position item at
// the specified place at the image
const placeItem = (itemRef, imgRef, coordinates) => {
    if (!itemRef.current || !imgRef.current) return;

    const { x, y } = unnormalizeCoords(coordinates.x, coordinates.y, imgRef);
    itemRef.current.style.left = `${x}px`;
    itemRef.current.style.top = `${y}px`;
};

// moves item to the right/left/top/bottom according
// to the user click place
const moveItem = (itemRef, imgRef, coordinates, setPosition) => {
    if (!itemRef.current || !imgRef.current) return;

    const { x, y } = unnormalizeCoords(coordinates.x, coordinates.y, imgRef);

    const isRightSide = x > imgRef.current.offsetWidth / 2;
    const isBottomSide = y > imgRef.current.offsetHeight / 2;

    setPosition({
        translateX: isRightSide ? '-translate-x-44' : 'translate-x-5',
        translateY: isBottomSide ? '-translate-y-40' : 'translate-y-0',
    });
};

export { placeItem, moveItem };
