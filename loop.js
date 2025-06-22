// 1. Display the larger of two integers
function larger(a, b) {
  if (a > b) {
    alert(`The larger number is ${a}`);
  } else {
    alert(`The larger number is ${b}`);
  }
}

larger(5, 10); // Output: The larger number is 10

// 2. Find the sign of the product of three numbers
function signOfProduct(a, b, c) {
  let product = a * b * c;
  if (product > 0) {
    alert("The sign is +");
  } else if (product < 0) {
    alert("The sign is -");
  } else {
    alert("The sign is 0");
  }
}

signOfProduct(3, -7, 2); // Output: The sign is -

// 3. Sort three numbers
function sortNumbers(a, b, c) {
  let arr = [a, b, c];
  arr.sort((x, y) => x - y);
  alert(`The sorted numbers are ${arr.join(", ")}`);
}

sortNumbers(0, -1, 4); // Output: The sorted numbers are -1, 0, 4

// 4. Find the largest of five numbers
function largestOfFive(a, b, c, d, e) {
  let max = Math.max(a, b, c, d, e);
  alert(`The largest number is ${max}`);
}

largestOfFive(-5, -2, -6, 0, -1); // Output: The largest number is 0

// 5. Iterate from 0 to 15 and check if each number is odd or even
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// 6. Compute the average marks and determine the grade
let students = [
  { name: "David", marks: 80 },
  { name: "Vinoth", marks: 77 },
  { name: "Divya", marks: 88 },
  { name: "Ishitha", marks: 95 },
  { name: "Thomas", marks: 68 }
];

let totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
let averageMarks = totalMarks / students.length;

let grade;
if (averageMarks < 60) {
  grade = "F";
} else if (averageMarks < 70) {
  grade = "D";
} else if (averageMarks < 80) {
  grade = "C";
} else if (averageMarks < 90) {
  grade = "B";
} else {
  grade = "A";
}

alert(`The average marks are ${averageMarks} and the grade is ${grade}`);

// 7. FizzBuzz program
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 8. Find the first 5 happy numbers
function isHappyNumber(n) {
  let seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = n.toString().split("").reduce((acc, digit) => acc + Math.pow(parseInt(digit), 2), 0);
  }
  return n === 1;
}

let happyNumbers = [];
let i = 1;
while (happyNumbers.length < 5) {
  if (isHappyNumber(i)) {
    happyNumbers.push(i);
  }
  i++;
}

alert(`The first 5 happy numbers are ${happyNumbers.join(", ")}`);

// 9. Find the Armstrong numbers of 3 digits
function isArmstrongNumber(n) {
  let sum = n.toString().split("").reduce((acc, digit) => acc + Math.pow(parseInt(digit), 3), 0);
  return sum === n;
}

let armstrongNumbers = [];
for (let i = 100; i < 1000; i++) {
  if (isArmstrongNumber(i)) {
    armstrongNumbers.push(i);
  }
}

alert(`The Armstrong numbers of 3 digits are ${armstrongNumbers.join(", ")}`);

// 10. Construct a pattern using a nested for loop
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

// Output:
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

// 11. Compute the greatest common divisor (GCD) of two positive integers
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

let num1 = 12;
let num2 = 15;
let result = gcd(num1, num2);
alert(`The GCD of ${num1} and ${num2} is ${result}`);

// 12. Sum the multiples of 3 and 5 under 1000
let sum = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
alert(`The sum of multiples of 3 and 5 under 1000 is ${sum}`);