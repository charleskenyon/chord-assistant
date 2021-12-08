const getRandomIndexBetweenZeroAndN = (n: number) =>
  Math.floor(Math.random() * n);

const getMaxGlobalVar = <T>(fallback: T, globalVar: string): T =>
  eval(`typeof ${globalVar} !== 'undefined'`) ? eval(globalVar) : fallback;

export { getRandomIndexBetweenZeroAndN, getMaxGlobalVar };
