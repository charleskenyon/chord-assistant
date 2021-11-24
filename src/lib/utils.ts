const getRandomIndexBetweenZeroAndN = (n: number) =>
  Math.floor(Math.random() * n);

const getAverage = (arr: number[] | string[]) =>
  arr.map(Number).reduce((prev, curr) => prev + curr) / arr.length;

export { getRandomIndexBetweenZeroAndN, getAverage };
