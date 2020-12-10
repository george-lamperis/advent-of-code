import { getLines } from '../../utils';
import { getAnswerPart1, getAnswerPart2 } from '..';

const testCases: [string, number, number][] = [
  ['src/2020-02/test/example-input.txt', 2, 1],
  ['src/2020-02/test/puzzle-input.txt', 483, 482],
];

describe('getAnswerPart1', () => {
  test.each(testCases)('%s', (filename, expectedPart1) => {
    const lines = getLines(filename);
    expect(getAnswerPart1(lines)).toEqual(expectedPart1);
  });
});

describe('getAnswerPart2', () => {
  test.each(testCases)('%s', (filename, expectedPart1, expectedPart2) => {
    const lines = getLines(filename);
    expect(getAnswerPart2(lines)).toEqual(expectedPart2);
  });
});
