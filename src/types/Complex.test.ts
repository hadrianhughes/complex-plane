import { Complex } from './Complex';

describe('Complex type', () => {
  it('Should accept two arguments of type `number` and return an object', () => {
    const arg1 = 1;
    const arg2 = 2;

    const result = Complex(arg1, arg2);

    expect(typeof result).toBe('object');
    expect(result.real).toBe(arg1);
    expect(result.imaginary).toBe(arg2);
  });

  it('Should have an add function which accepts a Complex and returns a new Complex', () => {
    const z1r = 2;
    const z1i = 3;
    const z1 = Complex(z1r, z1i);

    const z2r = 5;
    const z2i = 5;
    const z2 = Complex(z2r, z2i);

    const result = z1.add(z2);

    expect(result.real).toBe(z1r + z2r);
    expect(result.imaginary).toBe(z1i + z2i);
  });

  it('Should have a subtract function which accepts a Complex and returns a new Complex', () => {
    const z1r = 5;
    const z1i = 5;
    const z1 = Complex(z1r, z1i);

    const z2r = 2;
    const z2i = 3;
    const z2 = Complex(z2r, z2i);

    const result = z1.subtract(z2);

    expect(result.real).toBe(z1r - z2r);
    expect(result.imaginary).toBe(z1i - z2i);
  });

  it('Should have a square function which takes no arguments and returns a new squared version of the Complex', () => {
    const z1r = 2;
    const z1i = 3;
    const z1 = Complex(z1r, z1i);

    const result1 = z1.square();

    expect(result1.real).toBe(-5);
    expect(result1.imaginary).toBe(12);

    const z2r = 3;
    const z2i = -5;
    const z2 = Complex(z2r, z2i);

    const result2 = z2.square();

    expect(result2.real).toBe(34)
    expect(result2.imaginary).toBe(0);
  });
});
