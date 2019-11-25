export interface ComplexType {
  real: number;
  imaginary: number;
  add: (ComplexType) => ComplexType;
  subtract: (ComplexType) => ComplexType;
  map: (Function) => ComplexType;
  square: () => ComplexType;
}

export const Complex = (real = 0, imaginary = 0): ComplexType => ({
  real,
  imaginary,
  add: (x: ComplexType): ComplexType => Complex(real + x.real, imaginary + x.imaginary),
  subtract: (x: ComplexType): ComplexType => Complex(real - x.real, imaginary - x.imaginary),
  map: (fn: Function): ComplexType => fn(Complex(real, imaginary)),
  square: () => {
    const imIsNegative = imaginary < 0;

    if (imIsNegative) {
      return Complex(real * real + imaginary * imaginary);
    } else {
      return Complex(real * real - imaginary * imaginary, 2 * real * imaginary);
    }
  }
});
