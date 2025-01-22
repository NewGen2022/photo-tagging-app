// returns normalized coordinates (x, y) for all possible sizes of image
const handleImageCoords = (e, imgRef) => {
    // Get the image element
    const img = imgRef.current;

    // Get the image's position and dimensions relative to the viewport
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left; // X coordinate of the click relative to the image
    const y = e.clientY - rect.top; // Y coordinate of the click relative to the image

    // Get the natural size of the image (original size)
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;

    // Get the actual size of the image in the current viewport
    const imgWidth = rect.width;
    const imgHeight = rect.height;

    // Normalize the coordinates based on the image's current size in the viewport
    const normalizedX = (x / imgWidth) * naturalWidth;
    const normalizedY = (y / imgHeight) * naturalHeight;

    return { x: normalizedX, y: normalizedY };
};

const unnormalizeCoords = (normalizedX, normalizedY, imgRef) => {
    const img = imgRef.current;
    const rect = img.getBoundingClientRect();

    // Get the width and height of the image relative to the viewport
    const x = (normalizedX / img.naturalWidth) * rect.width;
    const y = (normalizedY / img.naturalHeight) * rect.height;

    // Add the image's position relative to the viewport
    const unnormalizedX = rect.left + x;
    const unnormalizedY = rect.top + y + window.scrollY; // Account for page scrolling

    return { x: unnormalizedX, y: unnormalizedY };
};

export { handleImageCoords, unnormalizeCoords };
