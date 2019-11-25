import { ComplexType, Complex } from './types/Complex';
import { getMouseLocation, getClicksSince } from './input';

interface State {
  numbers: ComplexType[];
}

const update = (state: State): State => {
  if (state.numbers.length === 0) {
    return { numbers: [ Complex(50, 100) ] };
  }

  return state;
};

export const initialState = {
  numbers: []
};

export default update;
