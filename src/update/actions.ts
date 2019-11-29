import { Action } from './state';

export const setSettingsOpen = (open: boolean): Action => ({
  type: 'SET_SETTINGS_OPEN',
  payload: open
});

export const setRealRange = (value: number): Action => ({
  type: 'SET_REAL_RANGE',
  payload: value
});

export const setImaginaryRange = (value: number): Action => ({
  type: 'SET_IMAGINARY_RANGE',
  payload: value
});
