/*
* This takes in a date string such as 2023-01-01
* and outputs a data from a year ago such as 2022-01-01
*/
export const subtractOneYear = (date) => {
    const jsDate = new Date(date);
    jsDate.setFullYear(jsDate.getFullYear() - 1);
    return jsDate.toISOString()
}