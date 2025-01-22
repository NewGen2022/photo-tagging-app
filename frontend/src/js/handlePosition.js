import { unnormalizeCoords } from './handleImage';

// converts normalized coordinates and position item at
// the specified place at the image
const placeItem = (itemRef, imgRef, coordinates) => {
    const item = itemRef.current;

    if (item && imgRef.current) {
        // Unnormalize the coordinates
        const unnormalizedCoords = unnormalizeCoords(
            coordinates.x,
            coordinates.y,
            imgRef
        );

        // Position the item
        item.style.left = `${unnormalizedCoords.x}px`;
        item.style.top = `${unnormalizedCoords.y}px`;
    }
};

export { placeItem };
