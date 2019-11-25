import { lens } from './utils';
import { State } from './update';

const AXIS_PADDING = 30;

export const render = ctx => (state: State) => {
  const { canvas } = ctx;
  canvas.width = canvas.width;

  // Draw axes
  ctx.strokeStyle = 'white';

  ctx.moveTo(canvas.width / 2, AXIS_PADDING);
  ctx.lineTo(canvas.width / 2, canvas.height - AXIS_PADDING);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(AXIS_PADDING, canvas.height / 2);
  ctx.lineTo(canvas.width - AXIS_PADDING, canvas.height / 2);
  ctx.stroke();
};

export default render;
