import { ComplexType, Complex } from './types/Complex';
import { getMouseLocation, getClicksSince } from './input';

export interface State {
  numbers: ComplexType[];
  realInView: number;
  imaginaryInView: number;
}

const update = (state: State): State => {
  if (state.numbers.length === 0) {
    return { ...state, numbers: [ Complex(50, 100) ] };
  }

  return state;
};

export const initialState: State = {
  numbers: [],
  realInView: 10,
  imaginaryInView: 10
};

export default update;
