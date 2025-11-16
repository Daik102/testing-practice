const analyzeArray = (array) => {
  if (!Array.isArray(array)) {
    return 'Invalid input';
  }

  for (const item of array) {
    if (isNaN(Number(item))) {
      return 'Invalid input';
    }
  }

  const average = +(array.reduce((acc, cur) => acc + cur, 0) / array.length).toFixed(2);
  const min = array.sort((a, b) => a - b)[0];
  const max = array.sort((a, b) => b - a)[0];
  const length = array.length;

  return { 
    average, 
    min, 
    max, 
    length 
  };
}

module.exports = analyzeArray;
