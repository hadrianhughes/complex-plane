import { Action } from './state';
import { ActionType as A } from '../config';

export const setSettingsOpen = (open: boolean): Action => ({
  type: A.SET_SETTINGS_OPEN,
  payload: open
});
