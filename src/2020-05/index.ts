// --- Day 5: Binary Boarding ---

export type Seat = {
  row: number;
  column: number;
  id: number;
};

export function getSeat(pass: string): Seat {
  const parsedRow = pass.substring(0, 7);
  const parsedColumn = pass.substring(7);

  const binaryRow = parsedRow.replace(/F/g, '0').replace(/B/g, '1');
  const binaryColumn = parsedColumn.replace(/L/g, '0').replace(/R/g, '1');

  const row = parseInt(binaryRow, 2);
  const column = parseInt(binaryColumn, 2);

  return {
    row,
    column,
    id: row * 8 + column,
  };
}

export function getAnswerPart1(lines: string[]): number {
  const seatIDs = lines.map((pass) => getSeat(pass).id);
  return Math.max(...seatIDs);
}

export function getAnswerPart2(lines: string[]): number {
  const seatIDs = lines.map((pass) => getSeat(pass).id).sort();

  let missingSeatID = -1;
  for (let i = 0; i < seatIDs.length - 1; i += 1) {
    if (seatIDs[i] + 2 === seatIDs[i + 1]) {
      missingSeatID = seatIDs[i] + 1;
    }
  }

  return missingSeatID;
}
