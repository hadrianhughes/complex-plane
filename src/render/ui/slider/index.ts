import './Slider.scss';
import { HTMLEventType } from '../index';

const slider = (
  label: string,
  id: string,
  min: number,
  max: number,
  value: number,
  onChange: HTMLEventType
): HTMLElement => {
  const el = document.createElement('div');
  el.className = 'Slider';

  const labelEl = document.createElement('label');
  labelEl.className = 'Slider__label';
  labelEl.innerHTML = label + ':';
  labelEl.htmlFor = id;
  el.appendChild(labelEl);

  const input = document.createElement('input');
  input.className = 'Slider__input';
  input.id = id;
  input.type = 'range';
  input.onchange = onChange;
  input.value = String(value);
  el.appendChild(input);

  return el;
};

export default slider;
