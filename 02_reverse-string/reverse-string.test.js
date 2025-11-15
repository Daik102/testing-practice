const reverseString = require('./reverse-string.js');

  test('reverse-string', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });
