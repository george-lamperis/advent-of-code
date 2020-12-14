import { getLines } from '../../utils';
import { getAnswerPart1, getAnswerPart2 } from '../index';

describe('getAnswerPart1', () => {
  const testCases: [string, number][] = [
    ['src/2020-07/test/example-input.txt', 0],
    ['src/2020-07/test/puzzle-input.txt', 0],
  ];

  test.each(testCases)('%s', (filename, expectedPart1) => {
    const lines = getLines(filename);
    expect(getAnswerPart1(lines)).toEqual(expectedPart1);
  });
});

describe('getAnswerPart2', () => {
  const testCases: [string, number][] = [
    ['src/2020-07/test/example-input.txt', 0],
    ['src/2020-07/test/puzzle-input.txt', 0],
  ];

  test.each(testCases)('%s', (filename, expectedPart1) => {
    const lines = getLines(filename);
    expect(getAnswerPart2(lines)).toEqual(expectedPart1);
  });
});
