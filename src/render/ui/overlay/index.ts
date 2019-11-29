import './Overlay.scss';
import { dispatchType } from '../../../update/state';
import { clickEventType } from '../index';
import button from '../button';

const overlay = (contents: Array<HTMLElement>, onClose: clickEventType): HTMLElement => {
  const el = document.createElement('div');
  el.className = 'Overlay';

  const inner = document.createElement('div');
  inner.className = 'Overlay__inner';
  contents.forEach(c => inner.appendChild(c));

  const btnClose = button('Close', onClose, 'Overlay__close');
  inner.appendChild(btnClose);

  el.appendChild(inner);

  return el;
};

export default overlay;
