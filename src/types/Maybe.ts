import { isNullish } from '../utils';

export interface MaybeType {
  isNothing: () => boolean;
  extract: () => any;
  map: (Function) => MaybeType;
  pipe: (...Function) => MaybeType;
}

export const Maybe = (value: any): MaybeType => ({
  isNothing: () => isNullish(value),
  extract: () => value,
  map: (fn: Function): MaybeType => Maybe(isNullish(value) ? value : fn(value)),
  pipe: (...fns: [Function]): MaybeType => Maybe(
    isNullish(value) ? value :
    fns.reduce((acc, fn) => fn(acc), value)
  )
});
