const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
document.body.appendChild(canvas);

const render = ctx => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};
