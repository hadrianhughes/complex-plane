import { ComplexType, Complex } from '../types/Complex';

export interface State {
  numbers: ComplexType[];
  realRange: number;
  imaginaryRange: number;
}

export interface Action {
  type: string;
  payload: object;
}

const update = (state: State, action: Action): State => {
  switch (action.type) {
    case 'EXAMPLE': {
      return { ...state, numbers: [ Complex(3, -8) ] };
    }
  }

  return state;
};

export const initialState: State = {
  numbers: [],
  realRange: 10,
  imaginaryRange: 10
};

export default update;
