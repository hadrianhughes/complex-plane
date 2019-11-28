import { State } from '../update/state';
import { render as renderUI } from './ui';
import { render as renderCanvas } from './canvas';

const render = context => (state: State, dispatch: Function): void => {
  renderCanvas(context, state);
  renderUI(state, dispatch);
};

export default render;
