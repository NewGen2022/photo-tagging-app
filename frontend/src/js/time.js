// Format elapsed time as HH:MM:SS
const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = Math.floor((time * 1000) % 1000); // Extract milliseconds

    return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds
        .toString()
        .padStart(3, '0')}`; // Always display 3-digit milliseconds
};

const formatEndTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = (time % 1).toFixed(3).slice(2); // Extract milliseconds, rounded to 3 decimal places

    // Determine the correct unit (hours, minutes, or seconds)
    let unit = 'seconds';
    if (hours > 0) {
        unit = hours === 1 ? 'hour' : 'hours';
    } else if (minutes > 0) {
        unit = minutes === 1 ? 'minute' : 'minutes';
    }

    // Format time components
    const timeParts = [];
    if (hours > 0) timeParts.push(String(hours).padStart(2, '0'));
    if (minutes > 0 || hours > 0)
        timeParts.push(String(minutes).padStart(2, '0'));
    timeParts.push(String(seconds).padStart(2, '0')); // Ensure two-digit seconds

    return `${timeParts.join(':')}.${milliseconds} ${unit}`;
};

const formatLeaderboardTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = (time % 1).toFixed(3).slice(2); // Extract milliseconds

    return `${
        minutes > 0 ? `${minutes} min ` : ''
    } ${seconds}.${milliseconds} sec`;
};

export { formatTime, formatEndTime, formatLeaderboardTime };
