import { State, dispatchType } from '../update/state';
import { performExample } from '../update/actions';
import config from '../config';

export const button = (text: string, onClick: (this: GlobalEventHandlers, ev: MouseEvent) => any): HTMLButtonElement => {
  const el = document.createElement('button');
  el.className = 'ui-button';
  el.innerHTML = text;
  el.onclick = onClick;
  return el;
};

export const buildUI = (state: State, dispatch: dispatchType): Array<HTMLElement> => {
  const btnSettings = button('Settings', () => dispatch(performExample()));

  return [btnSettings];
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

export default render;
