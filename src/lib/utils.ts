const getRandomIndexBetweenZeroAndN = (n: number) =>
  Math.floor(Math.random() * n);

const getAverage = (arr: number[] | string[]) =>
  arr.map(Number).reduce((prev, curr) => prev + curr) / arr.length;

const getMaxGlobalVar = <T>(fallback: T, globalVar: string): T =>
  eval(`typeof ${globalVar} !== 'undefined'`) ? eval(globalVar) : fallback;

export { getRandomIndexBetweenZeroAndN, getAverage, getMaxGlobalVar };
