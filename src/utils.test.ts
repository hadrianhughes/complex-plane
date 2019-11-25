import { isNullish } from './utils';

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
