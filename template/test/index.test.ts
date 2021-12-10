import { getLines } from '../../utils'; // eslint-disable-line
import { getAnswerPart1, getAnswerPart2 } from '../index';

describe('getAnswerPart1', () => {
  const testCases: [string, number][] = [
    ['src/PLACEHOLDER/test/example-input.txt', 0],
    ['src/PLACEHOLDER/test/puzzle-input.txt', 0],
  ];

  test.each(testCases)('%s', (filename, expectedPart1) => {
    const lines = getLines(filename);
    expect(getAnswerPart1(lines)).toEqual(expectedPart1);
  });
});

describe('getAnswerPart2', () => {
  const testCases: [string, number][] = [
    ['src/PLACEHOLDER/test/example-input.txt', 0],
    ['src/PLACEHOLDER/test/puzzle-input.txt', 0],
  ];

  test.each(testCases)('%s', (filename, expectedPart1) => {
    const lines = getLines(filename);
    expect(getAnswerPart2(lines)).toEqual(expectedPart1);
  });
});
