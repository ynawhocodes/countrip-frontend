export const isEmptyArray = <T>(arr: T[]): boolean =>
  Array.isArray(arr) && arr.length === 0;

export const isEmptyValue = (value: any): boolean => {
  return value === undefined || value === null;
};
