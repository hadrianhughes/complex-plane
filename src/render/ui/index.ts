import { State, dispatchType } from '../../update/state';
import button from './button';
import overlay from './overlay';
import slider from './slider';
import config from '../../config';
import { setSettingsOpen, setRealRange, setImaginaryRange } from '../../update/actions';
import { filter, truthy } from '../../utils';

export const buildUI = (state: State, dispatch: dispatchType): Array<HTMLElement> => {
  const btnSettings = button('Settings', () => dispatch(setSettingsOpen(true)));

  // Build settings overlay
  const realSlider = slider(
    'Real range',
    'real-range',
    config.MIN_REAL,
    config.MAX_REAL,
    state.realRange,
    e => dispatch(setRealRange(Number((e.target as HTMLInputElement).value))));

  const imaginarySlider = slider(
    'Imaginary range',
    'imaginary-range',
    config.MIN_IMAGINARY,
    config.MAX_IMAGINARY,
    state.imaginaryRange,
    e => dispatch(setImaginaryRange(Number((e.target as HTMLInputElement).value))));

  const settingsOverlay = state.settingsOpen ? overlay([
    realSlider,
    imaginarySlider
  ], () => dispatch(setSettingsOpen(false))) : null;

  return filter([
    btnSettings,
    settingsOverlay,
  ], truthy);
};

export const getUIContainer = (): HTMLElement => {
  const el = document.getElementById(config.UI_CONTAINER_ID);
  if (el) return el;

  const newEl = document.createElement('div');
  newEl.id = config.UI_CONTAINER_ID;
  document.body.appendChild(newEl);

  return newEl;
};

export const empty = (element: HTMLElement): void => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

export const addToDOM = (elements: Array<HTMLElement>): void => {
  const container = getUIContainer();
  empty(container);

  elements.forEach(e => container.appendChild(e));
};

export const render = (state: State, dispatch: dispatchType): void => {
  const ui = buildUI(state, dispatch);
  addToDOM(ui);
};

export type HTMLEventType = (this: GlobalEventHandlers,  ev: MouseEvent) => any;

export default render;
