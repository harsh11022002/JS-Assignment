//Compute factorial of a number (recursive)
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

//Compute sum of natural numbers up to n (recursive)
function sumTo(n) {
  if (n === 0) return 0;
  return n + sumTo(n - 1);
}

//Compute nth Fibonacci number (recursive)
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//Greatest Common Divisor (GCD) using Euclidean algorithm
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

//Convert decimal number to binary using recursion
function decimalToBinary(n) {
  if (n === 0) return "";
  return decimalToBinary(Math.floor(n / 2)) + (n % 2);
}

//Sum of digits of a number (recursive)
function sumOfDigits(n) {
  if (n < 10) return n;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

//Reverse a string (recursive)
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}

//Count digits in a number (recursive)
function countDigits(n) {
  if (n < 10) return 1;
  return 1 + countDigits(Math.floor(n / 10));
}

//Check if a string is a palindrome (recursive)
function isPalindromeRecursive(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindromeRecursive(str.slice(1, -1));
}

//Find LCM using recursion
function lcm(a, b) {
  function gcd(x, y) {
    if (y === 0) return x;
    return gcd(y, x % y);
  }
  return (a * b) / gcd(a, b);
}