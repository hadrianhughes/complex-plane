import { lens } from './utils';

export const render = ctx => state => {
  const { canvas } = ctx;
  canvas.width = canvas.width;

  ctx.fillStyle = 'white';

  state.numbers.forEach(n => {
    ctx.arc(n.real, n.imaginary, 5, 0, 2 * Math.PI);
    ctx.fill();
  });
};

export default render;
