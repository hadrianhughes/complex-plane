import './Button.scss';
import { clickEventType } from '../index';

const button = (text: string, onClick: clickEventType, className?: string): HTMLButtonElement => {
  const el = document.createElement('button');
  el.className = className || 'Button';
  el.innerHTML = text;
  el.onclick = onClick;
  return el;
};

export default button;
