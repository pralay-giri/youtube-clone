const formatDateTotext = (dateObj) => {
    if (dateObj.years) {
        return dateObj.years > 1
            ? `${dateObj.years} years ago`
            : `${dateObj.years} year ago`;
    }
    if (dateObj.months) {
        return dateObj.months > 1
            ? `${dateObj.months} months ago`
            : `${dateObj.months} month ago`;
    }
    if (dateObj.days) {
        return dateObj.days > 1
            ? `${dateObj.days} days ago`
            : `${dateObj.days} day ago`;
    }
    if (dateObj.hours) {
        return dateObj.hours > 1
            ? `${dateObj.hours} hours ago`
            : `${dateObj.hours} hour ago`;
    }
    if (dateObj.minutes) {
        return dateObj.minutes > 1
            ? `${dateObj.minutes} minutes ago`
            : `${dateObj.minutes} minute ago`;
    }
    if (dateObj.seconds) {
        return dateObj.seconds > 1 && `${dateObj.seconds} second ago`;
    }
};

export default formatDateTotext;
