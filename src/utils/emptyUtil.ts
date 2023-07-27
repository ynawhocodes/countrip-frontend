export const isEmptyArray = <T>(arr: T[]): boolean =>
  Array.isArray(arr) && arr.length === 0;

export const isEmptyValue = (value: any): boolean => {
  return value === undefined || value === null;
};

export const isAnyValueMissingInObject = (
  obj: Record<string, any>
): boolean => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key] === undefined || obj[key] === null) {
        return true;
      }
    }
  }
  return false;
};
