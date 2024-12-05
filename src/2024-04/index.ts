function findByOffset(
  puzzle: string[],
  y: number,
  x: number,
  yOffset: number,
  xOffset: number,
  targetWord: string,
): number {
  if (y < 0 || y >= puzzle.length || x < 0 || x >= puzzle[y].length) {
    // index out of bounds
    return 0;
  }

  if (targetWord.length === 1 && puzzle[y][x] === targetWord) {
    // found the word
    return 1;
  }

  if (puzzle[y][x] === targetWord.at(0)) {
    const newTargetWord = targetWord.slice(1);

    return findByOffset(
      puzzle,
      y + yOffset,
      x + xOffset,
      yOffset,
      xOffset,
      newTargetWord,
    );
  }

  return 0;
}

export function getAnswerPart1(lines: string[]): number {
  let total = 0;
  for (let y = 0; y < lines.length; y += 1) {
    for (let x = 0; x < lines[y].length; x += 1) {
      total +=
        // horizontal foward
        findByOffset(lines, y, x, 0, 1, 'XMAS') +
        // horizontal backwards
        findByOffset(lines, y, x, 0, -1, 'XMAS') +
        // vertical downwards
        findByOffset(lines, y, x, 1, 0, 'XMAS') +
        // vertical upwards
        findByOffset(lines, y, x, -1, 0, 'XMAS') +
        // diagonal up-right
        findByOffset(lines, y, x, -1, 1, 'XMAS') +
        // diagonal up-left
        findByOffset(lines, y, x, -1, -1, 'XMAS') +
        // diagonal down-right
        findByOffset(lines, y, x, 1, 1, 'XMAS') +
        // diagonal down-left
        findByOffset(lines, y, x, 1, -1, 'XMAS');
    }
  }

  return total;
}

export function getAnswerPart2(lines: string[]): number {
  let total = 0;
  for (let y = 0; y < lines.length; y += 1) {
    for (let x = 0; x < lines[y].length; x += 1) {
      total +=
        // diagonal down-right
        (findByOffset(lines, y, x, 1, 1, 'MAS') ||
          findByOffset(lines, y, x, 1, 1, 'SAM')) &&
        // two squares down
        // diagonal up-right
        (findByOffset(lines, y + 2, x, -1, 1, 'MAS') ||
          findByOffset(lines, y + 2, x, -1, 1, 'SAM'));
    }
  }

  return total;
}
