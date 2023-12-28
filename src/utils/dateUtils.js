export const subtractOneYear = (date) => {
    const jsDate = new Date(date);
    jsDate.setFullYear(jsDate.getFullYear() - 1);
    return jsDate.toISOString() //.toLocaleDateString().replaceAll('/', '-');
}