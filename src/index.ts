import { listen } from './input';
import render from './render';
import update, { initialState, State } from './update';
import { diff } from './utils';

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
document.body.appendChild(canvas);

const r = render(context);

const loop = (lastState: State) => {
  const nextState = update(lastState);

  const didChange = diff(lastState, nextState);

  if (didChange) r(nextState);

  const nextLoop = () => loop(nextState);
  requestAnimationFrame(nextLoop);
};

listen();
loop(initialState);
