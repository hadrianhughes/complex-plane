import { lens } from './utils';
import { State } from './update';

const AXIS_PADDING = 50;

export const render = ctx => (state: State) => {
  const { canvas } = ctx;
  canvas.width = canvas.width;

  // Draw axes
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';

  // Draw imaginary axis
  ctx.fillRect(
    canvas.width / 2,
    AXIS_PADDING,
    1,
    canvas.height - AXIS_PADDING * 2);

  // Draw real axis
  ctx.fillRect(
    AXIS_PADDING,
    canvas.height / 2,
    canvas.width - AXIS_PADDING * 2,
    1);

  const realAxisSize = canvas.width - AXIS_PADDING * 2;
  const imaginaryAxisSize = canvas.height - AXIS_PADDING * 2;

  for (let i = 0;i < state.realRange;i += 1) {
    ctx.fillRect(
      AXIS_PADDING + ((realAxisSize / 2) / state.realRange) * i,
      canvas.height / 2 - 5, 1, 10);

    ctx.fillRect(
      (canvas.width - AXIS_PADDING) - ((realAxisSize / 2) / state.realRange) * i,
      canvas.height / 2 - 5, 1, 10);
  }

  for (let i = 0;i < state.realRange;i += 1) {
    ctx.fillRect(
      canvas.width / 2 - 5,
      AXIS_PADDING + ((imaginaryAxisSize / 2) / state.imaginaryRange) * i,
      10, 1);

    ctx.fillRect(
      canvas.width / 2 - 5,
      (canvas.height - AXIS_PADDING) - ((imaginaryAxisSize / 2) / state.imaginaryRange) * i,
      10, 1);
  }
};

export default render;
