// --- Day 15: Rambunctious Recitation ---

function getNthNumberSpoken(n: number, startingNumbers: number[]) {
  const ageMap = new Map<number, number>();
  for (let i = 0; i < startingNumbers.length - 1; i += 1) {
    ageMap.set(startingNumbers[i], i + 1);
  }
  let nextNumber = startingNumbers[startingNumbers.length - 1];
  for (let i = startingNumbers.length; i < n; i += 1) {
    if (!ageMap.has(nextNumber)) {
      ageMap.set(nextNumber, i);
      nextNumber = 0;
    } else {
      const age = i - ageMap.get(nextNumber);
      ageMap.set(nextNumber, i);
      nextNumber = age;
    }
  }

  return nextNumber;
}

export function getAnswerPart1(startingNumbers: number[]): number {
  return getNthNumberSpoken(2020, startingNumbers);
}

export function getAnswerPart2(startingNumbers: number[]): number {
  return getNthNumberSpoken(30000000, startingNumbers);
}
