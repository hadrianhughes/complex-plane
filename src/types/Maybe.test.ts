import { Maybe } from './Maybe';

describe('Maybe type', () => {
  it('Should accept any value as an argument and return an object with an extract function property', () => {
    const m = Maybe(1);
    expect(typeof Maybe(1)).toBe('object');
    expect(typeof m.extract).toBe('function');
  });

  it('Should have an extract function which returns the contained value', () => {
    expect(Maybe(1).extract()).toBe(1);
    expect(Maybe(null).extract()).toBe(null);
  });

  it('Should have a map function which accepts a function and returns a transformed Maybe value only if the original value argument was non-null', () => {
    const transformer = n => n + 1;

    const input1 = 1;
    const m1 = Maybe(input1);
    expect(m1.map(transformer).extract()).toBe(transformer(input1));

    const input2 = null;
    const m2 = Maybe(input2);
    expect(m2.map(transformer).extract()).toBe(input2);
  });

  it('Should have a pipe function which accepts any number of function arguments and returns a Maybe value transformed by the pipeline, only if the original value argument was non-null', () => {
    const t1 = n => n + 1;
    const t2 = n => n * n;
    const t3 = n => 'Value: ' + n.toString();

    const input1 = 1;
    const m1 = Maybe(input1);
    expect(m1.pipe(t1, t2, t3).extract()).toBe(t3(t2(t1(input1))));

    const input2 = null;
    const m2 = Maybe(input2);
    expect(m2.pipe(t1, t2, t3).extract()).toBe(input2);
  });

  it('Should have an isNothing function which returns true only if the contained value is nullish', () => {
    expect(Maybe(1).isNothing()).toBe(false);
    expect(Maybe(false).isNothing()).toBe(false);
    expect(Maybe('').isNothing()).toBe(false);
    expect(Maybe(null).isNothing()).toBe(true);
    expect(Maybe(undefined).isNothing()).toBe(true);
  });
});
