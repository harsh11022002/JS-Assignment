// 1. Check if a string is a string or not
function is_string(input) {
  return typeof input === 'string';
}
console.log(is_string('w3resource')); // true
console.log(is_string([1, 2, 4, 0])); // false

// 2. Check if a string is blank or not
function is_Blank(str) {
  return str.trim() === '';
}
console.log(is_Blank('')); // true
console.log(is_Blank('abc')); // false

// 3. Split a string and convert it into an array of words
function string_to_array(str) {
  return str.split(' ');
}
console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]

// 4. Remove specified number of characters from a string
function truncate_string(str, num) {
  return str.substring(0, num);
}
console.log(truncate_string("Robin Singh", 4)); // "Robi"

// 5. Convert a string in abbreviated form
function abbrev_name(str) {
  const words = str.split(' ');
  return words[0] + ' ' + words[1].charAt(0) + '.';
}
console.log(abbrev_name("Robin Singh")); // "Robin S."

// 6. Hide email addresses to protect from unauthorized user
function protect_email(email) {
  const [local, domain] = email.split('@');
  return local.substring(0, 3) + '...' + '@' + domain;
}
console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"

// 7. Parameterize a string
function string_parameterize(str) {
  return str.replace(/\s+/g, '-').toLowerCase();
}
console.log(string_parameterize("Robin Singh from USA.")); // "robin-singh-from-usa"

// 8. Capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('js string exercises')); // "Js string exercises"

// 9. Capitalize the first letter of each word in a string
function capitalize_Words(str) {
  return str.split(' ').map(word => capitalize(word)).join(' ');
}
console.log(capitalize_Words('js string exercises')); // "Js String Exercises"

// 10. Swap case of a string
function swapcase(str) {
  return str.replace(/[a-z]/g, c => c.toUpperCase()).replace(/[A-Z]/g, c => c.toLowerCase());
}
console.log(swapcase('AaBbc')); // "aAbBC"

// 11. Convert a string into camel case
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}
console.log(camelize("JavaScript Exercises")); // "javascriptExercises"
console.log(camelize("JavaScript exercises")); // "javascriptExercises"
console.log(camelize("JavaScriptExercises")); // "javascriptExercises"

// 12. Uncamelize a string
function uncamelize(str, separator = ' ') {
  return str.replace(/([A-Z])/g, `$${separator}$1`).toLowerCase();
}
console.log(uncamelize('helloWorld')); // "hello world"
console.log(uncamelize('helloWorld', '-')); // "hello-world"
console.log(uncamelize('helloWorld', '_')); // "hello_world"

// 13. Concatenate a string n times
function repeat(str, n = 1) {
  return Array(n + 1).join(str);
}
console.log(repeat('Ha!')); // "Ha!"
console.log(repeat('Ha!', 2)); // "Ha!Ha!"
console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"

// 14. Insert a string within a string at a particular position
function insert(str, insertStr, pos = 1) {
  return str.substring(0, pos) + insertStr + str.substring(pos);
}
console.log(insert('We are doing some exercises.')); // "We are doing some exercises."
console.log(insert('We are doing some exercises.', 'JavaScript ')); // "JavaScript We are doing some exercises."
console.log(insert('We are doing some exercises.', 'JavaScript ', 18)); // "We are doing some JavaScript exercises."

// 15. Humanize number (Formats a number to a human-readable string)
function humanize_format(num) {
  const suffixes = ['st', 'nd', 'rd'];
  const numStr = num.toString();
  const lastDigit = numStr[numStr.length - 1];
  if (lastDigit === '1' && numStr!== '11') {
    return numStr + 't';
  } else if (lastDigit === '2' && numStr!== '12') {
    return numStr + 'nd';
  } else if (lastDigit === '3' && numStr!== '13') {
    return numStr + 'rd';
  } else {
    return numStr + 'th';
  }
}
console.log(humanize_format()); // "1st"
console.log(humanize_format(1)); // "1st"
console.log(humanize_format(8)); // "8th"
console.log(humanize_format(301)); // "301st"
console.log(humanize_format(402)); // "402nd"

// 16. Truncate a string if it is longer than the specified number of characters
function text_truncate(str, length = 30, truncateStr = '…') {
  return str.length > length? str.substring(0, length) + truncateStr : str;
}
console.log(text_truncate('We are doing JS string exercises.')); // "We are doing JS string exercises."
console.log(text_truncate('We are doing JS string exercises.', 19)); // "We are doing JS..."
console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); // "We are doing!!"

// 17. Chop a string into chunks of a given length
function string_chop(str, length = 1) {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
}
console.log(string_chop('w3resource')); // ["w3resource"]
console.log(string_chop('w3resource', 2)); // ["w3", "re", "so", "ur", "ce"]
console.log(string_chop('w3resource', 3)); // ["w3r", "eso", "urc", "e"]

// 18. Count the occurrence of a substring in a string
function count(str, substr, caseSensitive = true) {
  const regex = caseSensitive? new RegExp(substr, 'g') : new RegExp(substr, 'gi');
  return (str.match(regex) || []).length;
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the')); // 2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false)); // 1

// 19. Escape a HTML string
function escape_HTML(str) {
  return str.replace(/[&<>"']/g, c => {
    switch (c) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case '\'':
        return '&#39;';
    }
  });
}
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">')); // "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"

// 20. Pad a string to get to a determined length
function formatted_string(str, length, padChar = '0', direction = 'r') {
  if (str.length >= length) {
    return str;
  }
  const padding = Array(length - str.length + 1).join(padChar);
  return direction === 'r'? str + padding : padding + str;
}
console.log(formatted_string('0000', 123, 'l')); // "0123"
console.log(formatted_string('00000000', 123, '')); // "12300000"

// 21. Repeat a string a specified times
function repeat_string(str, count) {
  if (!str ||!count) {
    return 'Error in string or count.';
  }
  return Array(count + 1).join(str);
}
console.log(repeat_string('a', 4)); // "aaaa"
console.log(repeat_string('a')); // "Error in string or count."

// 22. Get a part of a string after a specified character
function subStrAfterChars(str, char, num) {
  const index = str.indexOf(char);
  if (index === -1) {
    return str;
  }
  return str.substring(index + num);
}
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a')); // "w3resource"
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b')); // "xercises"

// 23. Convert a string to uppercase
function to_upper_case(str) {
  return str.toUpperCase();
}
console.log(to_upper_case("hello world")); // "HELLO WORLD"

// 24. Truncate a string to a certain number of words
function truncate(str, num) {
  const words = str.split(' ');
  return words.slice(0, num).join(' ');
}
console.log(truncate('The quick brown fox jumps over the lazy dog', 4)); // "The quick brown fox"

// 25. Alphabetize a given string
function alphabetize_string(str) {
  return str.split('').sort().join('');
}
console.log(alphabetize_string('United States')); // "SUadeeinsttt"

// 26. Remove the first occurrence of a given 'search string' from a string
function remove_first_occurrence(str, search) {
  const index = str.indexOf(search);
  if (index === -1) {
    return str;
  }
  return str.substring(0, index) + str.substring(index + search.length);
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the')); // "The quick brown fox jumps over lazy dog"

// 27. Convert ASCII to Hexadecimal format
function ascii_to_hexa(str) {
  return str.split('').map(c => c.charCodeAt(0).toString(16)).join('');
}
console.log(ascii_to_hexa('12')); // "3132"
console.log(ascii_to_hexa('100')); // "313030"

// 28. Convert Hexadecimal to ASCII format
function hex_to_ascii(str) {
  return str.match(/.{2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
}
console.log(hex_to_ascii('3132')); // "12"
console.log(hex_to_ascii('313030')); // "100"