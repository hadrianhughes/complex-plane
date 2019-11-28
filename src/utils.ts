import { Maybe } from './types/Maybe';

export const isNullish = value => value === null || value === undefined;

export const lens = (path: string[]) => (obj: object) =>
  Maybe(path.reduce((value, key) => {
    if (typeof value === 'object') {
      return value[key];
    }

    return undefined;
  }, obj));

export const diffArray = (arr1: Array<any>, arr2: Array<any>): boolean => {
  if (arr1.length !== arr2.length) return true;

  for (let i = 0;i < arr1.length;i += 1) {
    if (typeof arr1[i] !== typeof arr2[i]) return true;

    if (typeof arr1[i] === 'object' && diff(arr1[i], arr2[i])) return true;

    if (arr1[i] !== arr2[i]) return true;
  }

  return false;
};

export const diffObject = (obj1: object, obj2: object): boolean => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (diffArray(keys1, keys2)) return true;

  for (let i = 0;i < keys1.length;i += 1) {
    const key = keys1[i];
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (typeof val1 !== typeof val2) return true;

    if (typeof val1 === 'object' && diff(val1, val2)) return true;

    if (val1 !== val2) return true;
  }

  return false;
};

export const diff = (obj1, obj2): boolean => {
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return true;

  return Array.isArray(obj1) ? diffArray(obj1, obj2) : diffObject(obj1, obj2);
};
