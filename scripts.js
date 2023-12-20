  const isString = (str) => (typeof str == 'string')? true : false;
  const toArray = (str) => Array.from(str.toLowerCase());

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
    const reverse = Array.from(str).reverse().join('');
    console.log('REVERSED', str, reverse)
    return str == reverse? true : false
  }

  const palindrome = (str) => {
    if (!isString(str)) return false;
    let clean = cleanser(str);
    return isPallindrome(clean)
  }


  // test area do not change

console.log(palindrome('123'))
console.log(palindrome('12321'))
console.log(palindrome('racecar'))
console.log(palindrome('Able was I ere I saw Elba.'))