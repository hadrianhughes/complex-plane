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

const update = (state: State, action: Action): State => {
  switch (action.type) {
    case A.SET_SETTINGS_OPEN: {
      return { ...state, settingsOpen: Boolean(action.payload) };
    }
    case A.SET_REAL_RANGE: {
      return { ...state, realRange: roundNearest(5)(Number(action.payload)) };
    }
    case A.SET_IMAGINARY_RANGE: {
      return { ...state, imaginaryRange: roundNearest(5)(Number(action.payload)) };
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
