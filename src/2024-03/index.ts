function processMulCommand() {}

export function getAnswerPart1(contents: string): number {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/gm;
  const matches = contents.matchAll(regex);

  let total = 0;
  for (const match of matches) {
    total += parseInt(match[1], 10) * parseInt(match[2], 10);
  }

  return total;
}

export function getAnswerPart2(contents: string): number {
  const sanitized = contents
    .replace(/\n/g, '')
    .split("don't()")
    .map((s, index) => {
      if (index === 0) {
        // the first segment is enabled
        return s;
      }

      // discard first segment
      // disabled until the first do() command
      return s.split('do()').slice(1);
    })
    .flat()
    .join('');

  const regex = /mul\((\d{1,3}),(\d{1,3})\)/gm;
  const matches = sanitized.matchAll(regex);

  let total = 0;
  for (const match of matches) {
    total += parseInt(match[1], 10) * parseInt(match[2], 10);
  }

  return total;
}
