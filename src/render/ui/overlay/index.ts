import './Overlay.scss';

const overlay = (contents: Array<HTMLElement>): HTMLElement => {
  const el = document.createElement('div');
  el.className = 'Overlay';

  const inner = document.createElement('div');
  inner.className = 'Overlay__inner';
  contents.forEach(c => inner.appendChild(c));

  el.appendChild(inner);

  return el;
};

export default overlay;
