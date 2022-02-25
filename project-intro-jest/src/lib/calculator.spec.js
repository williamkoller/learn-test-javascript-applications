const { sum, division, subtraction, multiplication } = require('./calculator');

describe('Calculator', () => {
  describe('sum() +', () => {
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

  describe('division() /', () => {
    it('should division 2 and 2 and the result must be 1', () => {
      expect(division(2, 2)).toBe(1)
    });

    it('should division 2 and 2 even if one of them is a string and the result must be 1', () => {
      expect(division('2', '2')).toBe(1);
    });

    it('should throw an error if what is provided to the method cannot be split', () => {
      expect(() => {
        division('', '1');
      }).toThrowError();

      expect(() => {
        division([2, 2]);
      }).toThrowError();

      expect(() => {
        division({});
      }).toThrowError();

      expect(() => {
        division();
      }).toThrowError();
    });
    
  });

  describe('subtraction() -', () => {
    it('should subtraction 2 and 2 and the result must be 0', () => {
      expect(subtraction(2, 2)).toBe(0)
    });

    it('should subtraction 2 and 2 even if one of them is a string and the result must be 0', () => {
      expect(subtraction('2', '2')).toBe(0)
    });

    it('should throw an error if what is provided to the method cannot be subtraction', () => {
      expect(() => {
        subtraction('', '1');
      }).toThrowError();

      expect(() => {
        subtraction([2, 2]);
      }).toThrowError();

      expect(() => {
        subtraction({});
      }).toThrowError();

      expect(() => {
        subtraction();
      }).toThrowError();
    });
  });

  describe('multiplication() *', () => {
    it('should multiplication 2 and 3 and the result must be 6', () => {
      expect(multiplication(2, 3)).toBe(6)
    });
  });
  
});

