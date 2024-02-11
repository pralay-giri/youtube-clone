export const viewConveter = (count) => {
    if (count < 1000) {
        return count;
    } else if (count < 1000000 - 1) {
        return (count / 1000).toFixed(2) + "k";
    } else {
        return (count / 1000000).toFixed(2) + "m";
    }
};
