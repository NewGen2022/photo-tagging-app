// Format elapsed time as HH:MM:SS
const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const formatEndTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    // Determine the correct word based on the largest non-zero unit
    let unit = 'seconds';
    if (hours > 0) {
        unit = hours === 1 ? 'hour' : 'hours';
    } else if (minutes > 0) {
        unit = minutes === 1 ? 'minute' : 'minutes';
    }

    const timeParts = [];
    if (hours > 0) timeParts.push(String(hours).padStart(2, '0'));
    if (minutes > 0 || hours > 0)
        timeParts.push(String(minutes).padStart(2, '0'));
    timeParts.push(seconds);

    return `${timeParts.join(':')} ${unit}`;
};

export { formatTime, formatEndTime };
