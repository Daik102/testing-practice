const calculator = require('./calculator.js');

  describe('calculator', () => {
    test('add', () => {
      expect(calculator(3, 5, '+')).toBe(8);
    });

    test('subtract', () => {
      expect(calculator(8, 2, '-')).toBe(6);
    });

    test('multiply', () => {
      expect(calculator(4, 7, '*')).toBe(28);
    });

    test('divide', () => {
      expect(calculator(9, 3, '/')).toBe(3);
    });

    test('invalid-input-1', () => {
      expect(calculator('hello', 'world', '+')).toBe('Invalid input');
    });

    test('invalid-input-2', () => {
      expect(calculator(2, 4, '!')).toBe('Invalid input');
    });
  });
