import { getLines } from '../../utils';
import {
  getAnswerPart1,
  getAnswerPart2,
  multiplicativeInverse,
  additiveInverse,
} from '../index';

describe('multiplicativeInverse', () => {
  const testCases = [
    [2n, 7n, 4n],
    [4n, 7n, 2n],
    [2n, 13n, 7n],
    [9n, 13n, 3n],
    [247n, 17n, 2n],
    [9n, 17n, 2n],
  ];

  test.each(testCases)('%d mod %d', (input, modulo, expected) => {
    expect(multiplicativeInverse(input, modulo)).toEqual(expected);
  });
});

describe('additiveInverse', () => {
  const testCases = [
    [2n, 7n, 5n],
    [4n, 7n, 3n],
    [2n, 13n, 11n],
    [9n, 13n, 4n],
    [247n, 17n, 8n],
    [9n, 17n, 8n],
  ];

  test.each(testCases)('%d mod %d', (input, modulo, expected) => {
    expect(additiveInverse(input, modulo)).toEqual(expected);
  });
});

describe('getAnswerPart1', () => {
  const testCases: [string, number][] = [
    ['src/2020-13/test/example-input.txt', 295],
    ['src/2020-13/test/puzzle-input.txt', 4808],
  ];

  test.each(testCases)('%s', (filename, expected) => {
    const lines = getLines(filename);
    expect(getAnswerPart1(lines)).toEqual(expected);
  });
});

describe('getAnswerPart2', () => {
  const testCases: [string, bigint][] = [
    ['17,x,13,19', 3417n],
    ['67,7,59,61', 754018n],
    ['7,13,x,x,59,x,31,19', 1068781n],
    ['67,x,7,59,61', 779210n],
    ['67,7,x,59,61', 1261476n],
    ['1789,37,47,1889', 1202161486n],
    [getLines('src/2020-13/test/puzzle-input.txt')[1], 741745043105674n],
  ];

  test.each(testCases)('%s', (input, expected) => {
    expect(getAnswerPart2(input)).toEqual(expected);
  });
});
