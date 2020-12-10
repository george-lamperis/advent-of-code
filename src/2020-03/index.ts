// --- Day 3: Toboggan Trajectory ---

export function countCollisions(
  forestMap: string[],
  slopeRight: number,
  slopeDown: number,
): number {
  const lineLength = forestMap[0].length;
  let count = 0;

  for (let i = 1; i * slopeDown < forestMap.length; i += 1) {
    const x = (i * slopeRight) % lineLength;
    const y = i * slopeDown;
    const hasTree = forestMap[y].charAt(x) === '#';

    if (hasTree) {
      count += 1;
    }
  }

  return count;
}

export function getAnswerPart1(forestMap: string[]): number {
  return countCollisions(forestMap, 3, 1);
}

export function getAnswerPart2(forestMap: string[]): number {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  return slopes
    .map(([right, down]) => countCollisions(forestMap, right, down))
    .reduce((accumulator, count) => accumulator * count);
}
