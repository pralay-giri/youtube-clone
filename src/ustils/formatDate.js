export const formatDate = (dateString) => {
    const currentDate = new Date();
    const inputDate = new Date(dateString);

    // Calculate the difference in milliseconds
    let differenceInMilliseconds = currentDate - inputDate;

    // Calculate the time differences in various units
    const millisecondsInSecond = 1000;
    const millisecondsInMinute = millisecondsInSecond * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;
    const millisecondsInMonth = millisecondsInDay * 30.436875; // Approximate number of days in a month
    const millisecondsInYear = millisecondsInDay * 365.25; // Approximate number of days in a year

    const years = Math.floor(differenceInMilliseconds / millisecondsInYear);
    differenceInMilliseconds %= millisecondsInYear;

    const months = Math.floor(differenceInMilliseconds / millisecondsInMonth);
    differenceInMilliseconds %= millisecondsInMonth;

    const days = Math.floor(differenceInMilliseconds / millisecondsInDay);
    differenceInMilliseconds %= millisecondsInDay;

    const hours = Math.floor(differenceInMilliseconds / millisecondsInHour);
    differenceInMilliseconds %= millisecondsInHour;

    const minutes = Math.floor(differenceInMilliseconds / millisecondsInMinute);
    differenceInMilliseconds %= millisecondsInMinute;

    const seconds = Math.floor(differenceInMilliseconds / millisecondsInSecond);

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
    };
};
