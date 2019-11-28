import { State } from '../update';
import { render as renderUI } from './ui';
import { render as renderCanvas } from './canvas';

const render = context => (state: State): void => {
  renderCanvas(context, state);
  renderUI(state);
};

export default render;
