function parseLists(lines: string[]) {
  const leftList: number[] = [];
  const rightList: number[] = [];

  lines.forEach((line) => {
    const [l, r] = line.split('   ');
    leftList.push(parseInt(l, 10));
    rightList.push(parseInt(r, 10));
  });

  leftList.sort();
  rightList.sort();

  return {
    leftList,
    rightList,
  };
}

function sumArray(array: number[]): number {
  return array.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);
}

export function getAnswerPart1(lines: string[]): number {
  const { leftList, rightList } = parseLists(lines);

  const differences = leftList.map((leftItem, i) => {
    return Math.abs(leftItem - rightList[i]);
  });

  return sumArray(differences);
}

export function getAnswerPart2(lines: string[]): number {
  const { leftList, rightList } = parseLists(lines);

  const similarityScores = leftList.map((leftItem) => {
    const firstIndex = rightList.indexOf(leftItem);
    const lastIndex = rightList.lastIndexOf(leftItem);

    if (firstIndex === -1 || lastIndex === -1) {
      return 0;
    } else {
      return leftItem * (lastIndex - firstIndex + 1);
    }
  });

  return sumArray(similarityScores);
}
