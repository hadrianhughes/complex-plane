export interface ComplexType {
  real: number;
  imaginary: number;
  add: (ComplexType) => ComplexType;
  subtract: (ComplexType) => ComplexType;
  map: (Function) => ComplexType;
  square: () => ComplexType;
}

export const Complex = (real: number, imaginary: number) => ({
  real,
  imaginary,
  add: (x: ComplexType) => Complex(real + x.real, imaginary + x.imaginary),
  subtract: (x: ComplexType) => Complex(real - x.real, imaginary - x.imaginary),
  map: (fn: Function) => fn(Complex(real, imaginary)),
  square: () => {
    console.warn('UNFINISHED');
    return Complex(real, imaginary);
  }
});
