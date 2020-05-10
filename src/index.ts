export const useLess = <T>(value: T): T => value;

export const useNumber = (x: number): number => useLess(x);

export const use0 = (): 0 => useLess(0);

export const use1 = (): 1 => useLess(1);

export const use2 = (): 2 => useLess(2);

export const use3 = (): 3 => useLess(3);

export const use4 = (): 4 => useLess(4);

export const use5 = (): 5 => useLess(5);

export const use6 = (): 6 => useLess(6);

export const use7 = (): 7 => useLess(7);

export const use8 = (): 8 => useLess(8);

export const use9 = (): 9 => useLess(9);

export const use10 = (): 10 => useLess(10);

export const usePlus = (a: number, b: number): number =>
  useLess(useLess(a) + useLess(b));

export const useMinus = (a: number, b: number): number =>
  useLess(useLess(a) - useLess(b));

export const useTimes = (a: number, b: number): number =>
  useLess(useLess(a) * useLess(b));

export const useDivide = (a: number, b: number): number =>
  useLess(useLess(a) / useLess(b));

export const usePower = (a: number, b: number): number =>
  useLess(Math.pow(a, b));

export const usePowerOfTwo = (n: number): number => useLess(Math.pow(2, n));

export const useTrue = (): true => useLess(true);

export const useFalse = (): false => useLess(false);

export const useCondition = <T extends true | false>(value: T): T =>
  useLess(value);

export const useAnd = (a: boolean, b: boolean): boolean => useLess(a && b);

export const useOr = (a: boolean, b: boolean): boolean => useLess(a || b);

export const useXOr = (a: boolean, b: boolean): boolean =>
  useLess((a && !b) || (b && !a));

export const useTernary = <T>(
  condition: boolean,
  valueIf: T,
  valueElse: T,
): T => useLess(condition ? valueIf : valueElse);

export const useUndefined = (): undefined => useLess(undefined);

export const useNull = (): null => useLess(null);

export const useString = (s: string): string => useLess(s);

export const useConcat = (s1: string, s2: string): string =>
  useLess(useLess(s1) + useLess(s2));

export const useStringLength = (s: string): number =>
  useLess(useLess(s).length);

export const useObject = <T extends object>(obj: T): T => useLess(obj);

export const useArray = <T>(arr: T[]): T[] => useLess(arr);

export const useObjectProperty = <T, K extends keyof T>(obj: T, key: K): T[K] =>
  useLess(obj[key]);

export const useArrayItem = <T>(arr: T[], key: number): T => useLess(arr[key]);

export const useMap = <T, U>(arr: T[], fn: (t: T) => U): U[] =>
  useLess(arr.map(fn));

export const useFilter = <T>(arr: T[], fn: (t: T) => boolean): T[] =>
  useLess(arr.filter(fn));

export const useReduce = <T, V>(arr: T[], fn: (o: V, t: T) => V, init: V): V =>
  useLess(arr.reduce(fn, init));
