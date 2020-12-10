// --- Day 2: Password Philosophy ---

type PasswordInfo = {
  min: number;
  max: number;
  letter: string;
  password: string;
};

export function getMatchingLetterCount(input: string, letter: string): number {
  const letterCountRegex = new RegExp(`${letter}`, 'g');
  return input.match(letterCountRegex)?.length || 0;
}

export function parsePasswordAndPolicy(line: string): PasswordInfo {
  const parsingRegex = /(?<min>\d+)-(?<max>\d+) (?<letter>\w): (?<password>\w+)/;
  const matches = parsingRegex.exec(line);
  const { min, max, letter, password } = matches?.groups || {};

  return {
    min: parseInt(min, 10),
    max: parseInt(max, 10),
    letter,
    password,
  };
}

export function getAnswerPart1(input: string[]): number {
  const validPasswords = input.filter((line) => {
    const { min, max, letter, password } = parsePasswordAndPolicy(line);

    const letterCountRegex = new RegExp(`${letter}`, 'g');
    const letterCount = password.match(letterCountRegex)?.length || 0;
    return min <= letterCount && letterCount <= max;
  });

  return validPasswords.length;
}

export function getAnswerPart2(input: string[]): number {
  const validPasswords = input.filter((line) => {
    const { min, max, letter, password } = parsePasswordAndPolicy(line);

    return (
      (password.charAt(min - 1) === letter &&
        password.charAt(max - 1) !== letter) ||
      (password.charAt(min - 1) !== letter &&
        password.charAt(max - 1) === letter)
    );
  });

  return validPasswords.length;
}
