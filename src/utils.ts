import { Maybe } from './types/Maybe';

export const isNullish = value => value === null || value === undefined;

export const lens = (path: string[]) => (obj: object) =>
  Maybe(path.reduce((value, key) => {
    if (typeof value === 'object') {
      return value[key];
    }

    return undefined;
  }, obj));
