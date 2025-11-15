const capitalize = require('./capitalize.js');

  test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
