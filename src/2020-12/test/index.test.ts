import { getLines } from '../../utils';
import { getAnswerPart1, getAnswerPart2 } from '../index';

describe('getAnswerPart1', () => {
  const testCases: [string, number][] = [
    ['src/2020-12/test/example-input.txt', 25],
    ['src/2020-12/test/puzzle-input.txt', 820],
  ];

  test.each(testCases)('%s', (filename, expected) => {
    const lines = getLines(filename);
    expect(getAnswerPart1(lines)).toEqual(expected);
  });
});

describe('getAnswerPart2', () => {
  const testCases: [string, number][] = [
    ['src/2020-12/test/example-input.txt', 286],
    ['src/2020-12/test/puzzle-input.txt', 66614],
  ];

  test.each(testCases)('%s', (filename, expected) => {
    const lines = getLines(filename);
    expect(getAnswerPart2(lines)).toEqual(expected);
  });
});
