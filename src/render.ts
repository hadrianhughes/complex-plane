import { lens } from './utils';

export const render = ctx => state => {
  const { canvas } = ctx;
  canvas.width = canvas.width;

  ctx.fillStyle = 'white';
  ctx.fillRect(10, 10, 50, 50);
};

export default render;
