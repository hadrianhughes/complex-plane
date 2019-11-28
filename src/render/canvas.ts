import { State } from '../update';

const AXIS_PADDING = 50;

export const render = (ctx, state: State): void => {
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

  const notchSize = 10;
  const notchThickness = 2;

  // Draw notches on real axis
  for (let i = 0;i < state.realRange;i += 1) {
    const middle = canvas.width / 2;
    const offset = ((realAxisSize / 2) / state.realRange) * (i + 1);
    const notchOffset = canvas.height / 2 - notchSize / 2;
    const textOffset = canvas.height / 2 + notchSize * 2;

    ctx.fillRect(
      middle - offset,
      notchOffset,
      notchThickness,
      notchSize);
    ctx.fillText(`-${i + 1}`, middle - offset - 4, textOffset);

    ctx.fillRect(
      middle + offset,
      notchOffset,
      notchThickness,
      notchSize);
    ctx.fillText(i + 1, middle + offset - 2, textOffset);
  }

  // Draw notches on imaginary axis
  for (let i = 0;i < state.realRange;i += 1) {
    const middle = canvas.height / 2;
    const offset = ((imaginaryAxisSize / 2) / state.imaginaryRange) * (i + 1);
    const notchOffset = canvas.width / 2 - notchSize / 2;
    const textOffset = canvas.width / 2 + notchSize + 2;

    ctx.fillRect(
      notchOffset,
      middle - offset,
      notchSize,
      notchThickness);
    ctx.fillText(i + 1, textOffset, middle - offset + 4);

    ctx.fillRect(
      notchOffset,
      middle + offset,
      notchSize,
      notchThickness);
    ctx.fillText(`-${i + 1}`, textOffset, middle + offset + 3);
  }

  // Draw numbers
  state.numbers.forEach(n => {
    const realCell = n.real + state.realRange;
    const imaginaryCell = n.imaginary + state.imaginaryRange;
    const realCellSize = (realAxisSize / 2) / state.realRange;
    const imaginaryCellSize = (imaginaryAxisSize / 2) / state.imaginaryRange;

    ctx.fillStyle = 'red';
    ctx.arc(
      AXIS_PADDING + realCell * realCellSize,
      (canvas.height - AXIS_PADDING) - imaginaryCell * imaginaryCellSize,
      5, 0, 2 * Math.PI);
    ctx.fill();
  });
};

export default render;
