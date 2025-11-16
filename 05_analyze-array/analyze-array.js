const analyzeArray = (array) => {
  if (!Array.isArray(array)) {
    return 'Invalid input';
  }

  for (const item of array) {
    if (isNaN(Number(item))) {
      return 'Invalid input';
    }
  }

  const result = {};
  const average = +(array.reduce((acc, cur) => acc + cur, 0) / array.length).toFixed(2);
  const min = array.sort((a, b) => a - b)[0];
  const max = array.sort((a, b) => b - a)[0];
  const length = array.length;

  result.average = average;
  result.min = min;
  result.max = max;
  result.length = length;

  return result;
}

module.exports = analyzeArray;
