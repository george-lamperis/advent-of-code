import { getFileContents } from '../../utils';
import { getAnswerPart1, getAnswerPart2 } from '../index';

describe('getAnswerPart1', () => {
  const testCases: [string, number][] = [
    ['src/2024-03/test/example-input1.txt', 161],
    ['src/2024-03/test/puzzle-input.txt', 170778545],
  ];

  test.each(testCases)('%s', (filename, expectedPart1) => {
    const contents = getFileContents(filename);
    expect(getAnswerPart1(contents)).toEqual(expectedPart1);
  });
});

describe('getAnswerPart2', () => {
  const testCases: [string, number][] = [
    ['src/2024-03/test/example-input2.txt', 48],
    ['src/2024-03/test/puzzle-input.txt', 82868252],
  ];

  test.each(testCases)('%s', (filename, expectedPart2) => {
    const contents = getFileContents(filename);
    expect(getAnswerPart2(contents)).toEqual(expectedPart2);
  });
});
