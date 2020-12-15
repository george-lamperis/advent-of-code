import { getLines } from '../../utils';
import { getAnswerPart1, getAnswerPart2 } from '../index';

describe('getAnswerPart1', () => {
  const testCases: [string, number][] = [
    ['0,3,6', 436],
    ['1,3,2', 1],
    ['2,1,3', 10],
    ['1,2,3', 27],
    ['2,3,1', 78],
    ['3,2,1', 438],
    ['3,1,2', 1836],
    ['13,0,10,12,1,5,8', 260],
  ];

  test.each(testCases)('%s', (input, expected) => {
    const numbers = input.split(',').map((i) => parseInt(i, 10));
    expect(getAnswerPart1(numbers)).toEqual(expected);
  });
});

describe('getAnswerPart2', () => {
  const testCases: [string, number][] = [
    ['0,3,6', 175594],
    ['1,3,2', 2578],
    ['2,1,3', 3544142],
    ['1,2,3', 261214],
    ['2,3,1', 6895259],
    ['3,2,1', 18],
    ['3,1,2', 362],
    ['13,0,10,12,1,5,8', 950],
  ];

  test.each(testCases)('%s', (input, expected) => {
    const numbers = input.split(',').map((i) => parseInt(i, 10));
    expect(getAnswerPart2(numbers)).toEqual(expected);
  });
});
