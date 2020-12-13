import { getLines } from '../../utils';
import { getAnswerPart1, getAnswerPart2, parseRule } from '../index';

describe('parseRule', () => {
  test('correctly parses rules file', () => {
    const lines = getLines('src/2020-07/test/example-input.txt');
    expect(lines.map(parseRule)).toEqual([
      {
        type: 'light red',
        capacity: [
          { type: 'bright white', number: 1 },
          { type: 'muted yellow', number: 2 },
        ],
      },
      {
        type: 'dark orange',
        capacity: [
          { type: 'bright white', number: 3 },
          { type: 'muted yellow', number: 4 },
        ],
      },
      {
        type: 'bright white',
        capacity: [{ type: 'shiny gold', number: 1 }],
      },
      {
        type: 'muted yellow',
        capacity: [
          { type: 'shiny gold', number: 2 },
          { type: 'faded blue', number: 9 },
        ],
      },
      {
        type: 'shiny gold',
        capacity: [
          { type: 'dark olive', number: 1 },
          { type: 'vibrant plum', number: 2 },
        ],
      },
      {
        type: 'dark olive',
        capacity: [
          { type: 'faded blue', number: 3 },
          { type: 'dotted black', number: 4 },
        ],
      },
      {
        type: 'vibrant plum',
        capacity: [
          { type: 'faded blue', number: 5 },
          { type: 'dotted black', number: 6 },
        ],
      },
      {
        type: 'faded blue',
        capacity: [],
      },
      {
        type: 'dotted black',
        capacity: [],
      },
    ]);
  });
});

describe('getAnswerPart1', () => {
  const testCases: [string, number][] = [
    ['src/2020-07/test/example-input.txt', 4],
    ['src/2020-07/test/puzzle-input.txt', 115],
  ];

  test.each(testCases)('%s', (filename, expectedPart1) => {
    const lines = getLines(filename);
    expect(getAnswerPart1(lines)).toEqual(expectedPart1);
  });
});

describe('getAnswerPart2', () => {
  const testCases: [string, number][] = [
    ['src/2020-07/test/example-input.txt', 32],
    ['src/2020-07/test/example-input-2.txt', 126],
    ['src/2020-07/test/puzzle-input.txt', 1250],
  ];

  test.each(testCases)('%s', (filename, expectedPart1) => {
    const lines = getLines(filename);
    expect(getAnswerPart2(lines)).toEqual(expectedPart1);
  });
});
