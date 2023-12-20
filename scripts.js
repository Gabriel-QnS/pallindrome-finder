function palindrome(str) {
    return true;
  }
  
  palindrome("eye");

  const isString = (str) => (typeof str == 'string')? true : false;
  const toArray = (str) => Array.from(str);

  const isLowercaseLetter = (charCode) => (charCode >= 97 && charCode <= 122)? true : false;
  const isNumber = (charCode) => (charCode >= 48 && charCode <= 57)? true : false;

  // test area do not change

  console.log(isLetter('a'.charCodeAt(0)))
  console.log(isLetter('T'.charCodeAt(0)))
  console.log(isNumber('2'.charCodeAt(0)))
  console.log(isNumber('y'.charCodeAt(0)))