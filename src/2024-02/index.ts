function isSafe(report: number[]) {
  const isIncreasing = report[0] < report[1];
  const isDecreasing = report[0] > report[1];

  for (let i = 0; i < report.length - 1; i += 1) {
    const difference = report[i] - report[i + 1];

    if (difference === 0) {
      return false;
    } else if (Math.abs(difference) > 3) {
      return false;
    } else if (difference < 0 && !isIncreasing) {
      return false;
    } else if (difference > 0 && !isDecreasing) {
      return false;
    }
  }

  return true;
}

function isSafeDampened(report: number[]): boolean {
  for (let i = 0; i < report.length; i += 1) {
    const dampened = [
      ...report.slice(0, i),
      ...report.slice(i + 1, report.length),
    ];

    if (isSafe(dampened)) {
      return true;
    }
  }

  return false;
}

export function getAnswerPart1(lines: string[]): number {
  const parsed = lines.map((l) => {
    return l.split(' ').map((item) => parseInt(item, 10));
  });

  const filtered = parsed.filter((report) => isSafe(report));

  return filtered.length;
}

export function getAnswerPart2(lines: string[]): number {
  const parsed = lines.map((l) => {
    return l.split(' ').map((item) => parseInt(item, 10));
  });

  const filtered = parsed.filter((report) => isSafeDampened(report));

  return filtered.length;
}
