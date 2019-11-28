import {
  isNullish,
  lens,
  diffArray,
  diffObject,
  diff
} from './utils';

describe('isNullish function', () => {
  it('Should accept any type of value without throwing an error', () => {
    expect(() => isNullish(1)).not.toThrow();
    expect(() => isNullish(true)).not.toThrow();
    expect(() => isNullish('test')).not.toThrow();
    expect(() => isNullish(['test'])).not.toThrow();
    expect(() => isNullish({ foo: 'bar' })).not.toThrow();
    expect(() => isNullish(null)).not.toThrow();
    expect(() => isNullish(undefined)).not.toThrow();
    expect(() => isNullish(() => {})).not.toThrow();
  });

  it('Should return true only if the given value is null or undefined', () => {
    expect(isNullish(null)).toBe(true);
    expect(isNullish(undefined)).toBe(true);
    expect(isNullish(false)).toBe(false);
    expect(isNullish(0)).toBe(false);
    expect(isNullish('')).toBe(false);
    expect(isNullish({})).toBe(false);
  });
});

describe('lens function', () => {
  it('Should accept a path array and an object and return a Maybe containing the value at that path', () => {
    const obj = {
      foo: {
        bar: 'baz'
      }
    };

    expect(lens(['foo', 'bar'])(obj).extract()).toBe(obj.foo.bar);
    expect(lens(['foo', 'baz'])(obj).isNothing()).toBe(true)
  });
});

describe('diffArray function', () => {
  it('Should return false if two arrays are identical', () => {
    const input1 = ['one', 'two', 'three'];
    expect(diffArray(input1, input1)).toBe(false);

    const input2 = [1, 2, 3];
    expect(diffArray(input2, input2)).toBe(false);

    const input3 = ['first', { foo: { bar: 'baz' } }];
    expect(diffArray(input3, input3)).toBe(false);
  });

  it('Should return true if two arrays are not identical', () => {
    const input1 = ['one', 'two', 'three'];
    const input2 = ['two', 'three', 'one'];

    expect(diffArray(input1, input2)).toBe(true);
  });
});

describe('diffObject function', () => {
  it('Should perform a deep comparison and return false only if the two objects are identical', () => {
    const input = {
      foo: 'bar',
      bar: {
        baz: [1, 2, 3]
      }
    };

    expect(diffObject(input, input)).toBe(false);
  });

  it('Should return true if the two objects are not identical', () => {
    const input1 = {
      foo: 'bar',
      bar: {
        baz: [1, 2, 3]
      }
    };

    const input2 = {
      foo: 'bar',
      bar: {
        bas: [1, 2, 3]
      }
    };

    expect(diffObject(input1, input2)).toBe(true);
  });

  it('Should return true if one of the objects contains additional properties', () => {
    const input1 = { foo: 'bar' };
    const input2 = { foo: 'bar', bar: 2 };

    expect(diffObject(input1, input2)).toBe(true);
  });
});

describe('diff function', () => {
  const inputObj = { foo: 'bar', bar: 'baz' };
  const inputArr = [1, 2, 3];

  it('Should accept two arrays or objects and return false if they are identical', () => {
    expect(diff(inputObj, inputObj)).toBe(false);
  });

  it('Should return true if they are not identical', () => {
    expect(diff(inputObj, { something: 'else' })).toBe(true);
  });

  it('Should return true if the given arguments are not homogeneous', () => {
    expect(diff(inputObj, inputArr)).toBe(true);
  });
});
