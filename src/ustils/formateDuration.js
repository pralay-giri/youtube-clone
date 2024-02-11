export const formatDuration = (duration) => {
    console.log(duration);
    if (!duration) return;
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;

    return `${hours ? hours + "h:" : ""}${minutes ? minutes + "m:" : ""}${
        seconds && seconds + "s"
    }`;
};
