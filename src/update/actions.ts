import { Action } from './state';
import { ActionType as A } from '../config';

export const setSettingsOpen = (open: boolean): Action => ({
  type: A.SET_SETTINGS_OPEN,
  payload: open
});

export const setRealRange = (value: number): Action => ({
  type: A.SET_REAL_RANGE,
  payload: value
});

export const setImaginaryRange = (value: number): Action => ({
  type: A.SET_IMAGINARY_RANGE,
  payload: value
});
