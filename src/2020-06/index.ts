// --- Day 6: Custom Customs ---
import _ from 'lodash';

export function getAnswerPart1(answers: string): number {
  const sums = answers
    .split('\n\n') // split at blank lines
    .map((group: string) => {
      const noNewLines = group.replace(/\n/g, '');
      return _.uniq(noNewLines).length;
    });

  return sums.reduce((accumulator, val) => accumulator + val, 0);
}

export function getAnswerPart2(answers: string): number {
  const sums = answers
    .split('\n\n') // split at blank lines
    .map((group: string) => {
      const uniqueLetters = _.uniq(group.replace(/\n/g, ''));
      const individuals = group.split('\n');

      const commonLetters = uniqueLetters.filter((letter) =>
        individuals.every((i) => i.includes(letter)),
      );

      return commonLetters.length;
    });

  return sums.reduce((accumulator, val) => accumulator + val, 0);
}
