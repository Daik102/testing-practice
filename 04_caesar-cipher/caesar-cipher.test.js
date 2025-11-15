const caesarCipher = require('./caesar-cipher.js');

  describe('caesarCipher', () => {
    test('wrapping-from-z-to-a', () => {
      expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('case-preservation', () => {
      expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('keep-punctuation', () => {
      expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
  });
