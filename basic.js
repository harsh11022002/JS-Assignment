// 1. Display the current day and time
let today = new Date();
let day = today.getDay();
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}
console.log(`Today is : ${dayList[day]}.`);
console.log(`Current time is : ${hour}${prepand} : ${minute} : ${second}`);

// 2. Print the contents of the current window
function printCurrentPage() {
    window.print();
}

// 3. Get the current date
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
console.log(today);

// 4. Find the area of a triangle
let a = 5;
let b = 6;
let c = 7;
let s = (a + b + c) / 2;
let area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
console.log(area);

// 5. Rotate the string 'w3resource'
function animateString(id) {
    let element = document.getElementById(id);
    let textNode = element.childNodes[0]; // assuming no other children
    let text = textNode.data;
    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}

// 6. Determine whether a given year is a leap year
function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(leapYear(2020)); // true

// 7. Find 1st January being a Sunday between 2014 and 2050
for (let year = 2014; year <= 2050; year++) {
    let d = new Date(year, 0, 1);
    if (d.getDay() === 0) {
        console.log(`1st January is being a Sunday  ${year}`);
    }
}

// 8. Random integer between 1 to 10
let num = Math.ceil(Math.random() * 10);
let gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num)
    console.log('Matched');
else
    console.log('Not matched, the number was ' + num);

// 9. Calculate days left until next Christmas
today = new Date();
let cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}
let one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime() - today.getTime()) / one_day) + " days left until Christmas!");

// 10. Calculate multiplication and division of two numbers
function multiplyBy() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

// 11. Convert temperatures to and from Celsius and Fahrenheit
function cToF(celsius) {
    let cTemp = celsius;
    let cToFahr = cTemp * 9 / 5 + 32;
    let message = cTemp + '°C is ' + cToFahr + ' °F.';
    console.log(message);
}

function fToC(fahrenheit) {
    let fTemp = fahrenheit;
    let fToCel = (fTemp - 32) * 5 / 9;
    let message = fTemp + '°F is ' + fToCel + ' °C.';
    console.log(message);
}
cToF(60);
fToC(45);

// 12. Get the website URL (loading page)
console.log(document.URL);