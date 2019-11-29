import { ComplexType, Complex } from '../types/Complex';

export interface State {
  numbers: ComplexType[];
  realRange: number;
  imaginaryRange: number;
  settingsOpen: boolean;
}

export interface Action {
  type: string;
  payload: any;
}

export type dispatchType = (action: Action) => void;

const update = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_SETTINGS_OPEN': {
      return { ...state, settingsOpen: Boolean(action.payload) };
    }
    case 'SET_REAL_RANGE': {
      return { ...state, realRange: Number(action.payload) };
    }
    case 'SET_IMAGINARY_RANGE': {
      return { ...state, imaginaryRange: Number(action.payload) };
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
