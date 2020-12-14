import fs from 'fs';

export function getLines(filename: string): string[] {
  let lines: string[] = [];

  try {
    const data = fs.readFileSync(filename, 'utf8');
    lines = data.trim().split('\n');
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
  }

  return lines;
}

export function getFileContents(filename: string): string {
  let contents = '';

  try {
    const data = fs.readFileSync(filename, 'utf8');
    contents = data.trim();
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
  }

  return contents;
}
