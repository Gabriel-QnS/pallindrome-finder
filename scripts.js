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

  const palindromeCheckerScript = (str) => {
    if (!isString(str)) return false;
    let clean = cleanser(str);
    return isPallindrome(clean)
  }

  const isPall = palindromeCheckerScript;


  // test area do not change

// console.log(isPall('123'))
// console.log(isPall('12321'))
// console.log(isPall('racecar'))
// console.log(isPall('Able was I ere I saw Elba.'))

// for the dom

const runBtn = document.querySelector('#check-btn');
const input = document.querySelector('#text-input');

const buttonModule = (()=>{

  // defining sources

  function getInput(){
    return input.value
  }

  function isEmpty(input){
    if(input.length < 1){
      alert('Please input a value.')
      return true
    } else return false
  }

  function reset(){

  }

  function checkPallindrome(){
    const input = getInput();
    if(isEmpty(input)) return;
    const result = isPall(input);
    console.log(result)
    return isPall(result);
  }

  return {
    check: checkPallindrome
  }
})();

runBtn.onclick = buttonModule.check
