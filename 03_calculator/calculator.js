const calculator = (num1, num2, operator) => {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Invalid input';
  }

  if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
    return 'Invalid input';
  }

  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  }
}

module.exports = calculator;
