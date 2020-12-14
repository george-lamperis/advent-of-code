import { getFileContents } from '../../utils';
import { getAnswerPart1, getAnswerPart2 } from '../index';

describe('getAnswerPart1', () => {
  const testCases: [string, number][] = [
    ['src/2020-06/test/example-input.txt', 11],
    ['src/2020-06/test/puzzle-input.txt', 6726],
  ];

  test.each(testCases)('%s', (filename, expectedPart1) => {
    const answers = getFileContents(filename);
    expect(getAnswerPart1(answers)).toEqual(expectedPart1);
  });
});

describe('getAnswerPart2', () => {
  const testCases: [string, number][] = [
    ['src/2020-06/test/example-input.txt', 6],
    ['src/2020-06/test/puzzle-input.txt', 3316],
  ];

  test.each(testCases)('%s', (filename, expectedPart1) => {
    const answers = getFileContents(filename);
    expect(getAnswerPart2(answers)).toEqual(expectedPart1);
  });
});
