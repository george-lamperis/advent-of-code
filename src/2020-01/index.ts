// --- Day 1: Report Repair ---

export function getCombinationsOf2(input: number[]): Array<[number, number]> {
  const combinations: Array<[number, number]> = [];

  for (let i = 0; i < input.length; i += 1) {
    for (let j = i + 1; j < input.length; j += 1) {
      combinations.push([input[i], input[j]]);
    }
  }

  return combinations;
}

export function getCombinationsOf3(
  input: number[],
): Array<[number, number, number]> {
  const combinations: Array<[number, number, number]> = [];

  for (let i = 0; i < input.length; i += 1) {
    for (let j = i + 1; j < input.length; j += 1) {
      for (let k = j + 1; k < input.length; k += 1) {
        combinations.push([input[i], input[j], input[k]]);
      }
    }
  }

  return combinations;
}

export function getAnswerPart1(input: number[]): number {
  const combinations = getCombinationsOf2(input);
  const filtered: Array<[number, number]> = combinations.filter(
    ([elem1, elem2]) => elem1 + elem2 === 2020,
  );

  return filtered[0][0] * filtered[0][1];
}

export function getAnswerPart2(input: number[]): number {
  const combinations = getCombinationsOf3(input);
  const filtered: Array<[number, number, number]> = combinations.filter(
    ([elem1, elem2, elem3]) => elem1 + elem2 + elem3 === 2020,
  );

  return filtered[0][0] * filtered[0][1] * filtered[0][2];
}
