import { getLines } from '../../utils';
import { getAnswerPart1, getAnswerPart2 } from '../index';

describe('getAnswerPart1', () => {
  const testCases: [string, number, number][] = [
    ['src/2020-09/test/example-input.txt', 5, 127],
    ['src/2020-09/test/puzzle-input.txt', 25, 167829540],
  ];

  test.each(testCases)('%s', (filename, preambleLength, expected) => {
    const lines = getLines(filename);
    expect(getAnswerPart1(preambleLength, lines)).toEqual(expected);
  });
});

describe('getAnswerPart2', () => {
  const testCases: [string, number, number][] = [
    ['src/2020-09/test/example-input.txt', 127, 62],
    ['src/2020-09/test/puzzle-input.txt', 167829540, 28045630],
  ];

  test.each(testCases)('%s', (filename, target, expected) => {
    const lines = getLines(filename);
    expect(getAnswerPart2(target, lines)).toEqual(expected);
  });
});
