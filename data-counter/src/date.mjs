export default function getDates(dateInterval) {
    const date = new Date();
    const dateObj = createDateObj(date);

    const newDate = new Date(date.getTime() + dateInterval *24*60*60*1000);
    const newDateObj = createDateObj(newDate);

    return [dateObj, newDateObj];
}

function createDateObj (date) {
    const year = date.getUTCFullYear();

    let month = date.getUTCMonth() + 1;
    const monthOfTheYear = getMonthLocale(month);
    month = month < 10 ? ["0", month].join("") : month;

    let dayNumber = date.getUTCDate();
    dayNumber = dayNumber < 10 ? ["0", dayNumber].join("") : dayNumber;

    const dayIndex = date.getDay();
    const dayOfTheWeek = getDayLocale(dayIndex);

    return {
        year,
        month,
        dayNumber,
        dayOfTheWeek,
        monthOfTheYear,
        dayIndex,
    };
}


function getMonthLocale(month) {
    switch (month) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "Dezember";
    }
}

function getDayLocale(day) {
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}