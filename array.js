// 1. Check if an input is an array or not
function is_array(input) {
  return Array.isArray(input);
}

console.log(is_array('w3resource')); // false
console.log(is_array([1, 2, 4, 0])); // true

// 2. Clone an array
function array_Clone(arr) {
  return arr.slice();
}

console.log(array_Clone([1, 2, 4, 0])); // [1, 2, 4, 0]
console.log(array_Clone([1, 2, [4, 0]])); // [1, 2, [4, 0]]

// 3. Get the first element(s) of an array
function first(arr, n) {
  if (n === undefined) return arr[0];
  return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2])); // 7
console.log(first([], 3)); // []
console.log(first([7, 9, 0, -2], 3)); // [7, 9, 0]
console.log(first([7, 9, 0, -2], 6)); // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3)); // []

// 4. Get the last element(s) of an array
function last(arr, n) {
  if (n === undefined) return arr[arr.length - 1];
  return arr.slice(-n);
}

console.log(last([7, 9, 0, -2])); // -2
console.log(last([7, 9, 0, -2], 3)); // [9, 0, -2]
console.log(last([7, 9, 0, -2], 6)); // [7, 9, 0, -2]

// 5. Join all elements of an array into a string
var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(',')); // "Red,Green,White,Black"
console.log(myColor.join('+')); // "Red+Green+White+Black"

// 6. Insert dashes between each two even numbers
function insertDashes(num) {
  var str = num.toString();
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (i > 0 && str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
      result += '-';
    }
    result += str[i];
  }
  return result;
}

console.log(insertDashes(25468)); // "0-254-6-8"

// 7. Sort the items of an array
var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort((a, b) => a - b);
console.log(arr1); // [-4, 1, 2, 3, 3, 5, 6, 7, 8]

// 8. Find the most frequent item of an array
function mostFrequent(arr) {
  var freq = {};
  for (var i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]]++;
    } else {
      freq[arr[i]] = 1;
    }
  }
  var maxFreq = 0;
  var mostFreqItem;
  for (var key in freq) {
    if (freq[key] > maxFreq) {
      maxFreq = freq[key];
      mostFreqItem = key;
    }
  }
  return mostFreqItem + '' + maxFreq + 'imes)';
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr1)); // "a (5 times)"

// 9. Swap the case of each character in a string
function swapCase(str) {
  return str.split('').map(c => c.toUpperCase() === c? c.toLowerCase() : c.toUpperCase()).join('');
}

console.log(swapCase('The Quick Brown Fox')); // "tHE qUICK bROWN fOX"

// 10. Print the elements of a 2D array using nested for loops
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for (var i = 0; i < a.length; i++) {
  console.log('row ' ,i);
  for (var j = 0; j < a[i].length; j++) {
    console.log(' ' ,a[i][j]);
  }
}
// 11. Sum of squares of a numeric vector
function sumOfSquares(arr) {
  return arr.reduce(function(sum, num) {
    return sum + num * num;
  }, 0);
}
console.log(sumOfSquares([1, 2, 3])); // 14


// 12. Sum and product of an array of integers
function sumAndProduct(arr) {
  var sum = arr.reduce(function(total, num) {
    return total + num;
  }, 0);
  var product = arr.reduce(function(total, num) {
    return total * num;
  }, 1);
  return { sum: sum, product: product };
}
console.log(sumAndProduct([1, 2, 3, 4]));

// 14. Remove duplicate items from an array (ignore case sensitivity)
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item.toLowerCase()) === index);
}

console.log(removeDuplicates(["apple", "banana", "apple", "orange", "banana"])); // ["apple", "banana", "orange"]

// 15. Display colors with ordinal numbers
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];
for(let i = 0; i < color.length; i++) {
    let ordinal = i + 1;
    let suffix = ordinal % 10 === 1 && ordinal % 100!== 11? o[1] : ordinal % 10 === 2 && ordinal % 100!== 12? o[2] : ordinal % 10 === 3 && ordinal % 100!== 13? o[3] : o[0];
    console.log(`${ordinal}${suffix} choice is ${color[i]}.`);
}

// 16. Find leap years in a given range of years
function findLeapYears(start, end) {
    let leapYears = [];
    for(let year = start; year <= end; year++) {
        if((year % 4 === 0 && year % 100!== 0) || year % 400 === 0) {
            leapYears.push(year);
        }
    }
    return leapYears;
}

console.log(findLeapYears(2000, 2020)); // [2000, 2004, 2008, 2012, 2016, 2020]

// 17. Shuffle an array
function shuffleArray(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5])); // [3, 1, 5, 2, 4] (random output)

// 18. Perform a binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 5)); // 4

// 19. Compute the sum of each individual index value from the given arrays
function sumArrays(arr1, arr2) {
    let maxLength = Math.max(arr1.length, arr2.length);
    let result = new Array(maxLength);
    for(let i = 0; i < maxLength; i++) {
        result[i] = (arr1[i] || 0) + (arr2[i] || 0);
    }
    return result;
}

console.log(sumArrays([1,0,2,3,4], [3,5,6,7,8,13])); // [4, 5, 8, 10, 12, 13]

// 20. Find duplicate values in a JavaScript array
function findDuplicates(arr) {
    let duplicates = {};
    for(let i = 0; i < arr.length; i++) {
        if(duplicates[arr[i]]) {
            duplicates[arr[i]]++;
        } else {
            duplicates[arr[i]] = 1;
        }
    }
    let result = [];
    for(let key in duplicates) {
        if(duplicates[key] > 1) {
            result.push(key);
        }
    }
    return result;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 5])); // ["2", "5"]

// 21. Flatten a nested array
function flatten(arr, shallow) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            if(shallow) {
                result = result.concat(arr[i]);
            } else {
                result = result.concat(flatten(arr[i], shallow));
            }
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flatten([1, [2], [3, [[4]]],[5,6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true)); // [1, 2, 3, [[4]], 5, 6]

// 22. Compute the union of two arrays
function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

console.log(union([1, 2, 3], [100, 2, 1, 10])); // [1, 2, 3, 10, 100]

// 23. Find the difference of two arrays
function difference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item)).concat(arr2.filter(item => !arr1.includes(item))).map(String);
}

console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); // ["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["3", "10", "100"]

// 24. Remove 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array
function removeFalsyValues(arr) {
    return arr.filter(item => ![null, 0, "", false, undefined, NaN].includes(item));
}

console.log(removeFalsyValues([NaN, 0, 15, false, -22, '',undefined, 47, null])); // [15, -22, 47]



// 26. Find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.
function findPair(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}

console.log(findPair([10,20,10,40,50,60,70], 50)); // [3, 4]

// 27. Retrieve the value of a given property from all elements in an array.
function retrieveProperty(arr) {
    return arr.filter(item => item !== null && item !== 0 && item !== "" && item !== false && item !== undefined && !isNaN(item));
}

console.log(retrieveProperty([NaN, 0, 15, false, -22, '',undefined, 47, null])); // [15, -22, 47]

// 28. Find the longest common starting substring in a set of strings.
function longestCommonStartingSubstring(arr) {
    let shortestStr = arr.reduce((a, b) => a.length < b.length ? a : b);
    for(let i = shortestStr.length; i > 0; i--) {
        let substr = shortestStr.substring(0, i);
        if(arr.every(str => str.startsWith(substr))) {
            return substr;
        }
    }
    return "";
}

console.log(longestCommonStartingSubstring(['go', 'google'])); // "go"

// 29. Fill an array with values (numeric, string with one character) on supplied bounds.
function numStringRange(start, end, step) {
    let result = [];
    for(let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
        result.push(String.fromCharCode(i));
    }
    return result;
}

console.log(numStringRange('a', "z", 2)); // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

// 30. Merge two arrays and removes all duplicates elements.
function mergeArray(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(mergeArray(array1, array2)); // [1, 2, 3, 30]

// 31. Remove a specific element from an array.
function removeArrayElement(arr, element) {
    return arr.filter(item => item !== element);
}

console.log(removeArrayElement([2, 5, 9, 6], 5)); // [2, 9, 6]

// 32. Find an array contains a specific element.
function containsElement(arr, element) {
    return arr.includes(element);
}

console.log(containsElement([2, 5, 9, 6], 5)); // true

// 33. Empty an array keeping the original.
function emptyArray(arr) {
    let original = [...arr];
    arr.length = 0;
    return original;
}

let arr = [1, 2, 3];
console.log(emptyArray(arr)); // [1, 2, 3]
console.log(arr); // []

// 34. Get nth largest element from an unsorted array.
function nthLargest(arr, n) {
    return arr.sort((a, b) => b - a)[n - 1];
}

console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); // 89

// 35. Get a random item from an array.
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandomItem([1, 2, 3, 4, 5])); // random item from the array

// 36. Create a specified number of elements with pre-filled numeric value array.
function arrayFilled(n, value) {
    return new Array(n).fill(value);
}

console.log(arrayFilled(6, 0)); // [0, 0, 0, 0, 0, 0]
console.log(arrayFilled(4, 11)); // [11, 11, 11, 11]

// 37. Create a specified number of elements with pre-filled string value array.
function arrayFilledString(n, value) {
    return new Array(n).fill(value);
}

console.log(arrayFilledString(3, 'default value')); //["default value", "default value", "default value"]
console.log(arrayFilledString(4, 'password')); // ["password", "password", "password", "password"]

// 38. Move an array element from one position to another.
function move(arr, from, to) {
    let element = arr[from];
    arr.splice(from, 1);
    arr.splice(to, 0, element);
    return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2)); // [20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2)); // [10, 20, 30, 50, 40]

// 39. Filter false, null, 0 and blank values from an array.
function filterArrayValues(arr) {
    return arr.filter(item => item!== null && item!== 0 && item!== "" && item!== false && item!== undefined &&!isNaN(item));
}

console.log(filterArrayValues([58, '', 'abcd', true, null, false, 0])); // [58, "abcd", true]

// 40. Generate an array of specified length, filled with integer numbers, increase by one from starting position.
function arrayRange(start, length) {
    return new Array(length).fill(0).map((_, i) => start + i);
}

console.log(arrayRange(1, 4)); // [1, 2, 3, 4]
console.log(arrayRange(-6, 4)); // [-6, -5, -4, -3]

// 41. Generate an array between two integers of 1 step length.
function rangeBetween(start, end) {
    return new Array(end - start + 1).fill(0).map((_, i) => start + i);
}

console.log(rangeBetween(4, 7)); // [4, 5, 6, 7]
console.log(rangeBetween(-4, 7)); // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

// 42. Find the unique elements from two arrays.
function difference(arr1, arr2) {
    return [...new Set([...arr1,...arr2])].map(String);
}

console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["1", "2", "3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); // ["1", "2", "3", "4", "5", "6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["1", "2", "3", "10", "100"]