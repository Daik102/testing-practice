const caesarCipher = (string, shift) => {
  const lowerCaseArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
  const upperCaseArray = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  const result = [];
  
  for (let i = 0; i < string.length; i++) {
    const char = string.split('')[i];
    let index = 0;

    if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      index = lowerCaseArray.indexOf(char) + shift;
      
      if (index >= 26) {
        index -= 26;
      }

      result.push(lowerCaseArray[index]);
    } else if (char !== char.toLowerCase() && char === char.toUpperCase()) {
      index = upperCaseArray.indexOf(char) + shift;
      
      if (index >= 26) {
        index -= 26;
      }

      result.push(upperCaseArray[index]);
    } else {
      result.push(char);
    }
  }

  return result.join('');
}

module.exports = caesarCipher;
