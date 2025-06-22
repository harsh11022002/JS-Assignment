// 1. string is uppercase or not
function isFirstCharUppercase(str) {
    return /^[A-Z]/.test(str);
  }
  console.log(isFirstCharUppercase("Hello")); 
  console.log(isFirstCharUppercase("hello"));
  // 2. Check a credit card number
  function isValidCreditCardNumber(cardNumber) {
    return /^\d{16}$/.test(cardNumber);//16 digits
  }
  console.log(isValidCreditCardNumber("1234567812345678"));  // true
  console.log(isValidCreditCardNumber("12345678123456"));    // false

  // 3. Pattern to match email addresses
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // 4. Search a date within a string
  function findDateInString(str) {
    return str.match(/\d{1,2}\/\d{1,2}\/\d{4}/g);
  }
  console.log(findDateInString("Meeting on 05/15/2023 and 06/01/2024")); // ["05/15/2023", "06/01/2024"]
  //5. trim
  function customTrim(str) {
    return str.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
  }
  console.log(customTrim("   Hello    World   ")); // "Hello World"
  
  // 6. Count number of words in a string
  function countWords(str) {
    str = str.trim().replace(/\s{2,}/g, ' ');
    return str.split(' ').length;
  }
  
  console.log(countWords("   Hello    World   ")); // 2
  
  // 7. Check if a value is an IP address
  function isIPAddress(value) {
    return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(value);
  }
  
  console.log(isIPAddress("192.168.0.1")); // true
  console.log(isIPAddress("256.1.1.1"));   // false
  
  // 8. Count number of vowels in a string
  function countVowels(str) {
    return str.replace(/[^aeiouAEIOU]/g, "").length;
  }
  
  console.log(countVowels("Hello World")); // 3
  // 9. Check if a value is a valid URL
  function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }
  console.log(isValidURL("https://example.com"));
  console.log(isValidURL("example.com"));
  
  // 10. Check if a value is alphanumeric
  function isAlphaNumeric(value) {
    return /^[a-zA-Z0-9]+$/.test(value);
  }
  console.log(isAlphaNumeric("Hello123")); // true
  console.log(isAlphaNumeric("Hello@123")); // false
  
  // 11. Check if a value is a time string (HH:MM:SS)
  function isTimeString(value) {
    return /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(value);
  }
  console.log(isTimeString("14:30:45")); // true
  console.log(isTimeString("25:30:45")); // false
  
  // 12. Check if a value is a US zip code (5 digits)
  function isUSZipCode(value) {
    return /^\d{5}$/.test(value);
  }
  console.log(isUSZipCode("12345"));  // true
  console.log(isUSZipCode("123456")); // false
  
  // 13. Check if a value is a UK Post Code
  function isUKPostCode(value) {
    return /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i.test(value);
  }
  
  console.log(isUKPostCode("SW1A 1AA")); // true
  console.log(isUKPostCode("W12 7RJ"));  // true
  console.log(isUKPostCode("W127RJ"));   // false
  
  // 14. Check if a value is a Canada Post Code
  function isCanadaPostCode(value) {
    return /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/i.test(value);
  }
  console.log(isCanadaPostCode("K1A 0B1")); // true
  console.log(isCanadaPostCode("K1A0B1"));  // false
  
  // 15. Check if a value is a Social Security Number (SSN)
  function isSSN(value) {
    return /^\d{3}-\d{2}-\d{4}$/.test(value);
  }
  console.log(isSSN("123-45-6789")); // true
  console.log(isSSN("123456789"));   // false
  
  // 16. Check if a value is a hexadecimal value
  function isHexadecimal(value) {
    return /^[0-9A-F]+$/i.test(value);
  }
    console.log(isHexadecimal("1A2B3F")); // true
  console.log(isHexadecimal("XYZ123")); // false
  
  // 17. Check if a value is a hexcolor value (#rrggbb)
  function isHexColor(value) {
    return /^#([0-9A-F]{3}){1,2}$/i.test(value);
  }
  console.log(isHexColor("#1a3"));    // true
  console.log(isHexColor("#1A3B5C")); // true
  console.log(isHexColor("#FFG123")); // false
  
  // 18. Check if a value represents a domain
  function isDomain(value) {
    return /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(value);
  }
  console.log(isDomain("example.com"));    // true
  console.log(isDomain("sub.example.co.uk")); // true
  console.log(isDomain("example"));       // false
  
  // 19. Check if a value is HTML
  function isHTML(value) {
    return /<[a-z][\s\S]*>/i.test(value);
  }
  console.log(isHTML("<div>Hello</div>")); // true
  console.log(isHTML("Hello World"));      // false
  
  // 20. Check if a value contains alpha, dash, and underscore
  function containsAlphaDashUnderscore(value) {
    return /^[a-zA-Z_-]+$/.test(value);
  }
  console.log(containsAlphaDashUnderscore("hello_world")); // true
  console.log(containsAlphaDashUnderscore("hello-world")); // true
  console.log(containsAlphaDashUnderscore("hello123"));    // false
  
  // 21. Print an integer with commas as thousands separators
  function thousandsSeparators(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  console.log(thousandsSeparators(1000)); 
  console.log(thousandsSeparators(10000.23));
  console.log(thousandsSeparators(100000)); 