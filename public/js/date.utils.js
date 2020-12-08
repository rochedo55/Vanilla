var months = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

function getFormatedDate(dateStr) {
    let date = new Date(dateStr);

    let newDateFormated = (date.getDate() + 1)+ " " + months[date.getMonth()];

    return newDateFormated;
}   


function compareDates(date1, date2) {
    let [day1, monthStr1] = date1.split(" ");
    let [day2, monthStr2] = date2.split(" ");

    day1 = Number(day1);
    day2 = Number(day2);

    let month1Index = months.findIndex((month) => month === monthStr1);
    let month2Index = months.findIndex((month) => month === monthStr2);

    
    let res = 0;

    if (month1Index < month2Index) {
        res =  -1;
    } else if (month1Index > month2Index) {
        res =  1;
    } else {
        if (day1 < day2) {
            res =  -1;
        } else {
            res =  1;
        }
    }
    
    return res;
}