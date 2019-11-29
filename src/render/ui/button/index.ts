import './Button.scss';

const button = (text: string, onClick: (this: GlobalEventHandlers, ev: MouseEvent) => any): HTMLButtonElement => {
  const el = document.createElement('button');
  el.className = 'Button';
  el.innerHTML = text;
  el.onclick = onClick;
  return el;
};

export default button;
