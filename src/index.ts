import { listen, getMouseLocation, getClicksSince } from './input';
import render from './render';
import update, { initialState } from './update';

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
document.body.appendChild(canvas);

const loop = lastState => {
  const nextState = update(lastState);
  render(context)(nextState);

  const nextLoop = () => loop(nextState);
  requestAnimationFrame(nextLoop);
};

listen();
loop(initialState);
