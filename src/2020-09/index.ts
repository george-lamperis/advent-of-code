// --- Day 9: Encoding Error ---
import _ from 'lodash';

export function getAnswerPart1(
  preambleLength: number,
  lines: string[],
): number {
  const numbers = lines.map((l) => parseInt(l, 10));
  let invalidNumber = -1;

  for (let i = preambleLength; i < numbers.length; i += 1) {
    const previous = numbers.slice(i - preambleLength, i);
    const isValidNumber = previous.some((p) => {
      return previous.includes(numbers[i] - p);
    });

    if (!isValidNumber) {
      invalidNumber = numbers[i];
      break;
    }
  }

  return invalidNumber;
}

export function getAnswerPart2(target: number, lines: string[]): number {
  const numbers = lines.map((l) => parseInt(l, 10));
  let contiguousSet;

  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < numbers.length; j += 1) {
      const set = numbers.slice(i, j + 1);
      const sum = _.sum(set);

      if (sum === target) {
        contiguousSet = set;
      }

      if (sum >= target) {
        break;
      }
    }

    if (contiguousSet) {
      break;
    }
  }

  const min = _.min(contiguousSet);
  const max = _.max(contiguousSet);

  return min + max;
}
