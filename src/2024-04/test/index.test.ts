import { getLines } from '../../utils';
import { getAnswerPart1, getAnswerPart2 } from '../index';

describe('getAnswerPart1', () => {
  const testCases: [string, number][] = [
    ['src/2024-04/test/example-input.txt', 18],
    ['src/2024-04/test/puzzle-input.txt', 2583],
  ];

  test.each(testCases)('%s', (filename, expectedPart1) => {
    const lines = getLines(filename);
    expect(getAnswerPart1(lines)).toEqual(expectedPart1);
  });
});

describe('getAnswerPart2', () => {
  const testCases: [string, number][] = [
    ['src/2024-04/test/example-input.txt', 9],
    ['src/2024-04/test/puzzle-input.txt', 1978],
  ];

  test.each(testCases)('%s', (filename, expectedPart1) => {
    const lines = getLines(filename);
    expect(getAnswerPart2(lines)).toEqual(expectedPart1);
  });
});
