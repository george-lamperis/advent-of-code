import { getLines } from '../../utils';
import {
  getCombinationsOf2,
  getCombinationsOf3,
  getAnswerPart1,
  getAnswerPart2,
} from '../index';

const inputData: [string, number, number][] = [
  ['src/2020-01/test/example-input.txt', 514579, 241861950],
  ['src/2020-01/test/puzzle-input.txt', 877971, 203481432],
];

function getNumbers(filename: string): number[] {
  return getLines(filename).map((i) => parseInt(i, 10));
}

describe('getAnswerPart1', () => {
  test.each(inputData)('%s', (filename, expectedPart1) => {
    const input = getNumbers(filename);
    expect(getAnswerPart1(input)).toEqual(expectedPart1);
  });
});

describe('getAnswerPart2', () => {
  test.each(inputData)('%s', (filename, expectedPart1, expectedPart2) => {
    const input = getNumbers(filename);
    expect(getAnswerPart2(input)).toEqual(expectedPart2);
  });
});

describe('getCombinationsOf2', () => {
  test('returns pairs of combinations correctly', () => {
    const input = [1, 2, 3, 4, 5];
    expect(getCombinationsOf2(input)).toEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 4],
      [2, 5],
      [3, 4],
      [3, 5],
      [4, 5],
    ]);
  });
});

describe('getCombinationsOf3', () => {
  test('returns pairs of combinations correctly', () => {
    const input = [1, 2, 3, 4, 5];
    expect(getCombinationsOf3(input)).toEqual([
      [1, 2, 3],
      [1, 2, 4],
      [1, 2, 5],
      [1, 3, 4],
      [1, 3, 5],
      [1, 4, 5],
      [2, 3, 4],
      [2, 3, 5],
      [2, 4, 5],
      [3, 4, 5],
    ]);
  });
});
