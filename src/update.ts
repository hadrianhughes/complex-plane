import { ComplexType, Complex } from './types/Complex';
import { getMouseLocation, getClicksSince } from './input';

export interface State {
  numbers: ComplexType[];
  realRange: number;
  imaginaryRange: number;
}

const update = (state: State): State => {
  if (state.numbers.length === 0) {
    return { ...state, numbers: [ Complex(3, -8) ] };
  }

  return state;
};

export const initialState: State = {
  numbers: [],
  realRange: 10,
  imaginaryRange: 10
};

export default update;
