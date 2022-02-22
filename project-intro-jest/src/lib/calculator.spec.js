const { sum, division } = require('./calculator');

describe('Calculator', () => {
  describe('sum()', () => {
    it('should sum 2 and 2 and the result must be 4', () => {
      expect(sum(2, 2)).toBe(4);
    });

    it('should sum 2 and 2 even if one of them is a string and the result must be 4', () => {
      expect(sum('2', '2')).toBe(4)
    });

    it('should throw an error if what is provided to the method cannot be summed', () => {
      expect(() => {
        sum('', '1');
      }).toThrowError();

      expect(() => {
        sum([2, 2]);
      }).toThrowError();

      expect(() => {
        sum({});
      }).toThrowError();

      expect(() => {
        sum();
      }).toThrowError();
    });
  });

  describe('division()', () => {
    it('should division 2 and 2 and the result must be 1', () => {
      expect(division(2, 2)).toBe(1)
    });

    it('should division 2 and 2 even if one of them is a string and the result must be 1', () => {
      expect(division('2', '2')).toBe(1);

      expect(() => {
        sum([2, 2]);
      }).toThrowError();

      expect(() => {
        sum({});
      }).toThrowError();

      expect(() => {
        sum();
      }).toThrowError();
    });
    
  });
  
});

