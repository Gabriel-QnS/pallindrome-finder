function palindrome(str) {
    return true;
  }
  
  palindrome("eye");

  const isString = (str) => (typeof str == 'string')? true : false;
  const toArray = (str) => Array.from(str);

  const isLowercaseLetter = (charCode) => (charCode >= 97 && charCode <= 122)? true : false;
  const isNumber = (charCode) => (charCode >= 48 && charCode <= 57)? true : false;

  const cleanser = (str) => {
    const arr = toArray(str);
    const cleanArr = arr.filter((char) => {
      let x = char.charCodeAt(0);
      if (isNumber(x)) return char;
      else if (isLowercaseLetter(x)) return char;
      else;
    });
    return cleanArr.join('')
  };

  const isPallindrome = (str) => { // only use clean arrays

  }

  // test area do not change

console.log(cleanser('456/*1456'))