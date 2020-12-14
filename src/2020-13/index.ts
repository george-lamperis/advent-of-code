import _ from 'lodash';

function parseBusIDs(busLines: string): number[] {
  const idStrings = busLines.replace(/x,/g, '').split(',');
  return idStrings.map((id) => parseInt(id, 10));
}

export function getAnswerPart1(lines: string[]): number {
  const earliest = parseInt(lines[0], 10);
  const busLines = parseBusIDs(lines[1]).map((id) => ({
    id,
    waitTime: id - (earliest % id),
  }));

  const answer = _.minBy(busLines, (bus) => bus.waitTime);
  return answer.id * answer.waitTime;
}

export function multiplicativeInverse(n: bigint, modulo: bigint): bigint {
  return (n % modulo) ** (modulo - 2n) % modulo;
}

export function additiveInverse(n: bigint, modulo: bigint): bigint {
  return (modulo - (n % modulo)) % modulo;
}

export function getAnswerPart2(schedule: string): bigint {
  const filtered = schedule
    .split(',')
    .map((id, offset) => ({
      id: parseInt(id, 10),
      offset,
    }))
    .filter(({ id }) => !Number.isNaN(id))
    .map(({ id, offset }) => ({
      id: BigInt(id),
      offset: BigInt(offset),
    }));

  const product = filtered.reduce((accumulator, value) => {
    return accumulator * value.id;
  }, BigInt(1));

  let sum = 0n;
  for (let i = 0; i < filtered.length; i += 1) {
    // Chinese Remainder Theorem
    // solving the system of modular equations
    //
    //       x = 0 (mod m_1)      x = 0 (mod m_1)
    //       ...              =>  ...
    // x + a_i = 0 (mod m_i)      x = -a_i (mod m_i)
    //
    // where:
    // a_1 is the offset ==> need to calculate additive inverse
    // m_1 is the id of the bus

    const m = filtered[i].id;
    const a = additiveInverse(filtered[i].offset, m);

    const b = product / m;
    const bInverse = multiplicativeInverse(b, m);

    sum += a * b * bInverse;
  }

  return sum % product;
}
