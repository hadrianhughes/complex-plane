import { Action } from './state';

export const setSettingsOpen = (open: boolean): Action => ({
  type: 'SET_SETTINGS_OPEN',
  payload: open
});
