// Function 1: Reverse a number
function reverseNumber(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''));
    return reversed;
}
console.log("Reverse a number:");
console.log(reverseNumber(32243)); // Output: 34223
console.log(reverseNumber(123));   // Output: 321

// Function 2: Check if a string is palindrome
function isPalindrome(str) {
    const len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log("\n Check if a string is palindrome:");
console.log(isPalindrome('madam'));          // Output: true
console.log(isPalindrome('nurses run'));     // Output: true
console.log(isPalindrome('hello'));          // Output: false


// Function 3: Generate all combinations of a string
function generateCombinations(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}

console.log("\nGenerate all combinations of a string:");
console.log(generateCombinations('dog'));    // Output: ["d", "do", "dog", "o", "og", "g"]
console.log(generateCombinations('abc'));    // Output: ["a", "ab", "abc", "b", "bc", "c"]


// Function 4: Sort letters of a string alphabetically
function sortString(str) {
    return str.split('').sort().join('');
}

console.log("\nSort letters of a string alphabetically:");
console.log(sortString('webmaster'));        // Output: "abeemrstw"
console.log(sortString('javascript'));       // Output: "aacijprstv"


// Function 5: Convert first letter of each word to uppercase
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}

console.log("\n Convert first letter of each word to uppercase:");
console.log(titleCase('the quick brown fox'));   // Output: "The Quick Brown Fox"


// Function 6: Find the longest word in a string
function longestWord(str) {
    const words = str.split(' ');
    let longest = words[0];
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log("\n Find the longest word in a string:");
console.log(longestWord('Web Development Tutorial'));   // Output: "Development"


// Function 7: Count the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log("\n Count the number of vowels in a string:");
console.log(countVowels('The quick brown fox'));   // Output: 5

// Function 8: Check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}
console.log("\n Check if a number is prime:");
console.log(isPrime(17));   // Output: true
console.log(isPrime(15));   // Output: false



// Function 9: Get the type of the argument
function getType(arg) {
    return typeof arg;
}
console.log("\n  Get the type of the argument:");
console.log(getType('Hello'));   // Output: "string"
console.log(getType(123));       // Output: "number"
console.log(getType(true));      // Output: "boolean"

// Function 10: Generate an n x n identity matrix
function identityMatrix(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(Array(n).fill(0));
        result[i][i] = 1;
    }
    return result;
}

console.log("\n Generate an n x n identity matrix:");
console.log(identityMatrix(3));  // Output: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
console.log(identityMatrix(5));  // Output: [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]



// Function 11: Find the second lowest and second greatest numbers in an array
function findSecondNumbers(arr) {
    arr = Array.from(new Set(arr)); // Remove duplicates
    arr.sort((a, b) => a - b);
    return [arr[1], arr[arr.length - 2]];
}
console.log("\n Find the second lowest and second greatest numbers in an array:");
console.log(findSecondNumbers([1, 2, 3, 4, 5]));    // Output: [2, 4]
console.log(findSecondNumbers([12, 5, 7, 3, 8]));   // Output: [5, 8]



// Function 12: Check if a number is perfect
function isPerfect(num) {
    if (num <= 1) return false;
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i * i !== num) {
                sum += num / i;
            }
        }
    }
    return sum === num;
}

console.log("\n Check if a number is perfect:");
console.log(isPerfect(6));     // Output: true (6 = 1 + 2 + 3)
console.log(isPerfect(28));    // Output: true (28 = 1 + 2 + 4 + 7 + 14)
console.log(isPerfect(12));    // Output: false


// Function 13: Compute the factors of a positive integer
function getFactors(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log("\n Compute the factors of a positive integer:");
console.log(getFactors(28));   // Output: [1, 2, 4, 7, 14, 28]
console.log(getFactors(12));   // Output: [1, 2, 3, 4, 6, 12]


// Function 14: Convert an amount to coins
function amountToCoins(amount, coins) {
    const result = [];
    for (let coin of coins) {
        const count = Math.floor(amount / coin);
        for (let i = 0; i < count; i++) {
            result.push(coin);
        }
        amount %= coin;
    }
    return result;
}
console.log("\nConvert an amount to coins:");
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));   // Output: [25, 10, 10, 1]
console.log(amountToCoins(73, [50, 20, 10, 5, 1]));  // Output: [50, 20, 1, 1, 1]


// Function 15: Compute the value of b^n
function power(base, exponent) {
    return base ** exponent;
}
console.log("\n Compute the value of b^n:");
console.log(power(2, 5));    // Output: 32
console.log(power(3, 4));    // Output: 81


// Function 16: Extract unique characters from a string
function uniqueCharacters(str) {
    return Array.from(new Set(str)).join('');
}
console.log("\n Extract unique characters from a string:");
console.log(uniqueCharacters('thequickbrownfoxjumpsoverthelazydog'));   // Output: "thequickbrownfxjmpsvlazydg"

// Function 17: Get the number of occurrences of each letter in a string
function countLetters(str) {
    const counts = {};
    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) {
            counts[char] = counts[char] ? counts[char] + 1 : 1;
        }
    }
    return counts;
}

console.log("\n Get the number of occurrences of each letter in a string:");
console.log(countLetters('hello world'));   // Output: {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}


// Function 18: Binary search in JavaScript arrays
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log("\n Binary search in JavaScript arrays:");
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));   // Output: 4 (index of 5 in the array)



// Function 19: Return array elements larger than a number
function elementsLargerThan(arr, num) {
    return arr.filter(item => item > num);
}

console.log("\n Return array elements larger than a number:");
console.log(elementsLargerThan([1, 2, 3, 4, 5, 6, 7], 3));   // Output: [4, 5, 6, 7]
console.log(elementsLargerThan([-10, 0, 10, 20, 30], 15));   // Output: [20, 30]



// Function 20: Generate a random string id of specified length
function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
console.log("\n Generate a random string id of specified length:");
console.log(generateRandomId(8));   // Output: "Vh7oB9rK"


// Function 21: Get all possible subsets of fixed length from an array
function getSubsets(arr, length) {
    const subsets = [];
    const helper = (start, subset) => {
        if (subset.length === length) {
            subsets.push(subset.slice());
            return;
        }
        for (let i = start; i < arr.length; i++) {
            subset.push(arr[i]);
            helper(i + 1, subset);
            subset.pop();
        }
    };
    helper(0, []);
    return subsets;
}

console.log("\n Get all possible subsets of fixed length from an array:");
console.log(getSubsets([1, 2, 3], 2));   // Output: [[1, 2], [1, 3], [2, 3]]

// Function 22: Count occurrences of a letter in a string
function countOccurrences(str, letter) {
    let count = 0;
    for (let char of str) {
        if (char === letter) {
            count++;
        }
    }
    return count;
}
console.log("\n Count occurrences of a letter in a string:");
console.log(countOccurrences('w3resource.com', 'o'));   // Output: 2

// Function 23: Find the first not repeated character in a string
function firstNotRepeated(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log("\n Find the first not repeated character in a string:");
console.log(firstNotRepeated('abacddbec'));   // Output: "e"



// Function 24: Bubble sort algorithm
function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log("\n Apply Bubble Sort algorithm:");
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
// Output: [1, 4, 9, 12, 23, 64, 84, 98, 122, 213, 234, 345, 455, 546, 3223]


// Function 25: Find the longest country name in an array
function longestCountryName(countries) {
    return countries.reduce((longest, country) => country.length > longest.length ? country : longest, '');
}

console.log("\n Find the longest country name in an array:");
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));
// Output: "United States of America"

// Function 26: Find longest substring without repeating characters
function longestSubstringWithoutRepeating(str) {
    let longest = '';
    let current = '';
    for (let char of str) {
        const index = current.indexOf(char);
        if (index !== -1) {
            current = current.slice(index + 1);
        }
        current += char;
        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest;
}
console.log("\n Find longest substring without repeating characters:");
console.log(longestSubstringWithoutRepeating('abcabcbb'));   // Output: "abc"
console.log(longestSubstringWithoutRepeating('bbbbb'));      // Output: "b"

// Function 27: Find longest palindrome in a string
function longestPalindrome(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            const substr = str.slice(i, j);
            if (substr === substr.split('').reverse().join('') && substr.length > longest.length) {
                longest = substr;
            }
        }
    }
    return longest;
}

console.log("\n Find longest palindrome in a string:");
console.log(longestPalindrome('bananas'));   // Output: "anana"
console.log(longestPalindrome('abracadabra'));   // Output: "aca"

// Function 28: Pass a JavaScript function as parameter
function executeFunction(func) {
    return func();
}


console.log("\n Pass a JavaScript function as parameter:");
console.log(executeFunction(() => 'Hello, World!'));   // Output: "Hello, World!"


// Function 29: Get the function name
function getFunctionName(func) {
    return func.name;
}


console.log("\n Get the function name:");
console.log(getFunctionName(reverseNumber));   // Output: "reverseNumber"
console.log(getFunctionName(isPalindrome));    // Output: "isPalindrome"