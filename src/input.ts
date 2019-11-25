/*
 * HERE BE DRAGONS
 * Side effects implicated by `addEventListener` are contained within this file
 * */

import { Maybe, MaybeType } from './types/Maybe';

interface Click {
  time: number;
  x: number;
  y: number;
}

let mouseLocation = { x: 0, y: 0 };
let clicks: Click[] = [];

const getSince = (arr: Click[]) => (time: number) => {
  let since = [];

  for (let i = 0;i < arr.length;i += 1) {
    if (arr[i].time > time) since.push(arr[i]);
    else return since;
  }
};


export const getMouseLocation = (): MaybeType => Maybe(
  mouseLocation.x && mouseLocation.y
    ? { x: mouseLocation.x, y: mouseLocation.y } : null
);

export const getClicksSince = getSince(clicks);

export const listen = () => {
  window.addEventListener('mousemove', e => {
    mouseLocation.x = e.clientX;
    mouseLocation.y = e.clientY;
  });

  window.addEventListener('mousedown', () => {
    const { x, y } = mouseLocation;

    clicks.push({ time: Date.now(), x, y });
  });
};
