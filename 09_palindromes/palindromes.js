const palindromes = function (str) {

//discard punctuation
  const validChar = 'abcdefghijklmnopqrstuvwxyz01233456789'
  
  let validString = str.toLowerCase();
  validString = validString.split('').filter((character) => validChar.includes(character)).join('');

  const reverseString = validString.split('').reverse().join(''); 

  return validString === reverseString;

};

// Do not edit below this line
module.exports = palindromes;
