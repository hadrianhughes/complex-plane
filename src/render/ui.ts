import { State } from '../update';
import config from '../config';

export const renderToString = (state: State): string => `
  <button id="btnSettings" class="ui-button">Settings</button>
`;

export const getUIContainer = (): HTMLElement => {
  const el = document.getElementById(config.UI_CONTAINER_ID);
  if (el) return el;

  const newEl = document.createElement('div');
  newEl.id = config.UI_CONTAINER_ID;
  document.body.appendChild(newEl);

  return newEl;
};

export const addToDOM = (html: string): void => {
  const container = getUIContainer();

  container.innerHTML = html;
};

export const render = (state: State): void => {
  const html = renderToString(state);
  addToDOM(html);
};

export default render;
