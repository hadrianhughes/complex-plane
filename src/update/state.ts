import { ComplexType, Complex } from '../types/Complex';
import { ActionType as A } from '../config';
import { roundNearest } from '../utils';

export interface State {
  numbers: ComplexType[];
  realRange: number;
  imaginaryRange: number;
  settingsOpen: boolean;
}

export interface Action {
  type: A;
  payload: any;
}

export type dispatchType = (action: Action) => void;

const roundRange = (n: number): number => {
  if (n >= 300) return roundNearest(100)(n);
  if (n >= 100) return roundNearest(10)(n);
  return roundNearest(5)(n);
};

const update = (state: State, action: Action): State => {
  switch (action.type) {
    case A.SET_SETTINGS_OPEN: {
      return { ...state, settingsOpen: Boolean(action.payload) };
    }
    case A.SET_REAL_RANGE: {
      const n = Number(action.payload);
      return { ...state, realRange: roundRange(n) };
    }
    case A.SET_IMAGINARY_RANGE: {
      const n = Number(action.payload);
      return { ...state, imaginaryRange: roundRange(n) };
    }
  }

  return state;
};

export const initialState: State = {
  numbers: [],
  realRange: 10,
  imaginaryRange: 10,
  settingsOpen: false
};

export default update;
