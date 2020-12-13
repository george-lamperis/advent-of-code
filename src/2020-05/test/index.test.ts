import { getLines } from '../../utils';
import { getAnswerPart1, getAnswerPart2, getSeat, Seat } from '../index';

describe('getSeat', () => {
  const testCases: [string, Seat][] = [
    ['FBFBBFFRLR', { row: 44, column: 5, id: 357 }],
    ['BFFFBBFRRR', { row: 70, column: 7, id: 567 }],
    ['FFFBBBFRRR', { row: 14, column: 7, id: 119 }],
    ['BBFFBBFRLL', { row: 102, column: 4, id: 820 }],
  ];

  test.each(testCases)('%s', (pass, seat) => {
    expect(getSeat(pass)).toEqual(seat);
  });
});

describe('getAnswerPart1', () => {
  const testCases: [string, number][] = [
    ['src/2020-05/test/example-input.txt', 820],
    ['src/2020-05/test/puzzle-input.txt', 913],
  ];

  test.each(testCases)('%s', (filename, expectedPart1) => {
    const lines = getLines(filename);
    expect(getAnswerPart1(lines)).toEqual(expectedPart1);
  });
});

describe('getAnswerPart2', () => {
  test('getAnswerPart2', () => {
    const lines = getLines('src/2020-05/test/puzzle-input.txt');
    expect(getAnswerPart2(lines)).toEqual(717);
  });
});
