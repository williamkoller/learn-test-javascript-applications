const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'William',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=William&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'William',
      abilities: ['JS', 'TDD'],
    };
    expect(queryString(obj)).toBe('name=William&abilities=JS,TDD');
  });

  it('should throw an error when an object passed as value', () => {
    const obj = {
      name: 'William',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

// describe('Query string to object', () => {

// });
