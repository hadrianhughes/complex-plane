import { listen } from './input';
import render from './render';
import update, { initialState, State, Action } from './update/state';
import { diff } from './utils';
import './styles/global.scss';

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
document.body.appendChild(canvas);

const r = render(context);

const loop = (state: State) => {
  const dispatch = (action: Action): void => {
    const nextState = update(state, action);
    const nextLoop = () => loop(nextState);
    requestAnimationFrame(nextLoop);
  };

  r(state, dispatch);
};

listen();
loop(initialState);
