// 1. Write a JavaScript program to list the properties of a JavaScript object.
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(Object.keys(student)); 
// Output: ["name", "sclass", "rollno"]

// 2. Write a JavaScript program to delete the rollno property from the following object.
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log("Before deleting rollno property: ", student);
delete student.rollno;
console.log("After deleting rollno property: ", student);
// Output: 
// Before deleting rollno property:  { name: 'David Rayy', sclass: 'VI', rollno: 12 }
// After deleting rollno property:  { name: 'David Rayy', sclass: 'VI' }

// 3. Write a JavaScript program to get the length of an JavaScript object.
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(Object.keys(student).length); 
// Output: 3

// 4. Write a JavaScript program to display the reading status of the following books.
var library = [
  { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];
library.forEach(book => console.log(`Book: ${book.title}, Author: ${book.author}, Reading Status: ${book.readingStatus}`));
// Output:
// Book: The Road Ahead, Author: Bill Gates, Reading Status: true
// Book: Walter Isaacson, Author: Steve Jobs, Reading Status: true
// Book: Mockingjay: The Final Book of The Hunger Games, Author: Suzanne Collins, Reading Status: false

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    return Math.PI * Math.pow(this.radius, 2) * this.height;
  }
}
var cylinder = new Cylinder(5, 10);
console.log(cylinder.getVolume().toFixed(4)); 
// Output: 785.3981

// 6. Write a Bubble Sort algorithm in JavaScript.
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([6, 4, 0, 3, -2, 1])); 
// Output: [-2, 0, 1, 3, 4, 6]

// 7. Write a JavaScript program which returns a subset of a string.
function getSubsets(str) {
  var subsets = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j <= str.length; j++) {
      subsets.push(str.substring(i, j));
    }
  }
  return subsets;
}
console.log(getSubsets("dog")); 
// Output: ["d", "do", "dog", "o", "og", "g"]

// 8. Write a JavaScript program to create a Clock.
setInterval(function() {
  var date = new Date();
  console.log(date.toLocaleTimeString());
}, 1000);

// 9. Write a JavaScript program to calculate the area and perimeter of a circle.
function Circle(radius) {
  this.radius = radius;
  this.area = function() {
    return Math.PI * Math.pow(this.radius, 2);
  };
  this.perimeter = function() {
    return 2 * Math.PI * this.radius;
  };
}
var circle = new Circle(5);
console.log("Area: ", circle.area().toFixed(4));
console.log("Perimeter: ", circle.perimeter().toFixed(4));
// Output:
// Area:  78.5398
// Perimeter:  31.4159


// 10. Write a JavaScript program to sort an array of JavaScript objects.
var library = [
  { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
];
library.sort(function(a, b) {
  return a.libraryID - b.libraryID;
});
console.log(library);
// Output:
// [{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
//  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 },
//  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }]

// 11. Write a JavaScript function to print all the methods in an JavaScript object.
function all_properties(obj) {
  var properties = [];
  for (var property in obj) {
    if (typeof obj[property] === 'function') {
      properties.push(property);
    }
  }
  return properties;
}
console.log(all_properties(Array)); 
// Output: ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

// 12. Write a JavaScript function to parse an URL.
function parse_URL(url) {
  var parser = document.createElement('a');
  parser.href = url;
  return {
    file: parser.pathname.split('/').pop(),
    hash: parser.hash,
    host: parser.host,
    params: (function() {
      var params = {};
      var query = parser.search.substring(1);
      var vars = query.split('&');
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = pair[1];
      }
      return params;
    })(),
    path: parser.pathname,
    port: parser.port,
    protocol: parser.protocol,
    query: parser.search,
    relative: parser.href,
    segments: parser.pathname.replace(/^\//, '').split('/'),
    source: url
  };
}
console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));
// Output:
// { file: "search",
//   hash: "",
//   host: "github.com",
//   params: { utf8: "%E2%9C%93", q: "python" },
//   path: "/pubnub/python/search",
//   port: "",
//   protocol: "https:",
//   query: "?utf8=%E2%9C%93&q=python",
//   relative: "/pubnub/python/search?utf8=%E2%9C%93&q=python",
//   segments: ["pubnub", "python", "search"],
//   source:"https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python" }