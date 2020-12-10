import { getLines } from '../../utils';
import { countCollisions, getAnswerPart1, getAnswerPart2 } from '../index';

describe('countCollisions', () => {
  const forestMap = getLines('src/2020-03/test/example-input.txt');
  const testCases = [
    [1, 1, 2],
    [3, 1, 7],
    [5, 1, 3],
    [7, 1, 4],
    [1, 2, 2],
  ];

  test.each(testCases)('Right %d, Down %d', (right, down, expected) => {
    expect(countCollisions(forestMap, right, down)).toEqual(expected);
  });
});

describe('getAnswerPart1', () => {
  const testCases: [string, number][] = [
    ['src/2020-03/test/example-input.txt', 7],
    ['src/2020-03/test/puzzle-input.txt', 211],
  ];
  test.each(testCases)('%s', (filename, expectedPart1) => {
    const forestMap = getLines(filename);
    expect(getAnswerPart1(forestMap)).toEqual(expectedPart1);
  });
});

describe('getAnswerPart2', () => {
  const testCases: [string, number][] = [
    ['src/2020-03/test/example-input.txt', 336],
    ['src/2020-03/test/puzzle-input.txt', 3584591857],
  ];
  test.each(testCases)('%s', (filename, expectedPart1) => {
    const forestMap = getLines(filename);
    expect(getAnswerPart2(forestMap)).toEqual(expectedPart1);
  });
});
