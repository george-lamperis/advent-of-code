import fs from 'fs';

// eslint-disable-next-line import/prefer-default-export
export function getLines(filename: string): string[] {
  let lines: string[] = [];

  try {
    const data = fs.readFileSync(filename, 'utf8');
    lines = data.trim().split('\n');
  } catch (err) {
    console.error(err);
  }

  return lines;
}
