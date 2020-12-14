// --- Day 8: Handheld Halting ---
import _ from 'lodash';

type Result = {
  terminated: boolean;
  accumulator: number;
};

export function executeInstructions(instructions: string[]): Result {
  const hasRunInstruction: { [key: string]: boolean } = {};
  let accumulator = 0;
  let counter = 0;

  while (counter < instructions.length && hasRunInstruction[counter] !== true) {
    hasRunInstruction[counter] = true;

    const operation = instructions[counter].substring(0, 3);
    const value = parseInt(instructions[counter].substring(4), 10);

    switch (operation) {
      case 'acc':
        accumulator += value;
        counter += 1;
        break;
      case 'jmp':
        counter += value;
        break;
      case 'nop':
        counter += 1;
        break;
      default:
        throw Error('invalid operation command!');
    }
  }

  return {
    terminated: counter === instructions.length,
    accumulator,
  };
}

export function getAnswerPart1(instructions: string[]): number {
  return executeInstructions(instructions).accumulator;
}

export function getAnswerPart2(instructions: string[]): number {
  const programs = instructions.map((val, index) => {
    const newInstructions = _.cloneDeep(instructions);

    if (newInstructions[index].includes('nop')) {
      newInstructions[index] = newInstructions[index].replace('nop', 'jmp');
    } else if (newInstructions[index].includes('jmp')) {
      newInstructions[index] = newInstructions[index].replace('jmp', 'nop');
    }
    return newInstructions;
  });

  const results = programs
    .map((p) => executeInstructions(p))
    .filter((result) => result.terminated);

  return results[0].accumulator;
}
