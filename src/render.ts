export const render = ctx => {
  const { canvas } = ctx;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, 100, 100);
};
