/*
*Create a program that determines whether a given year is a leap year.
A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. 
Use an if-else statement to make this determination.
*/
isLeapYear(2024);

function isLeapYear(year) {
    if ((year % 4 && year % 400) === 0) {
        console.log("it is a leap year");
    } else {
        console.log("non leap year");
    }
}