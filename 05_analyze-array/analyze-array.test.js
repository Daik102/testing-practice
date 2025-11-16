const analyzeArray = require('./analyze-array.js');

  describe('analyze-array', () => {
    test('analyze-array', () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
    });

    test('invalid-input-01', () => {
      expect(analyzeArray('hello')).toBe('Invalid input');
    });

    test('invalid-input-02', () => {
      expect(analyzeArray([1, 2, 3, 4, 'hey', 6])).toBe('Invalid input');
    });

    test('display-two-decimals', () => {
      expect(analyzeArray([1, 8, 3, 4, 2, 5])).toEqual({ average: 3.83, min: 1, max: 8, length: 6 });
    });
  });
  