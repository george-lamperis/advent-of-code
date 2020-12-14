type Position = {
  x: number;
  y: number;
  heading: number;
};

type Waypoint = {
  x: number;
  y: number;
};

function getDirectionalActionFromHeading(position: Position): string {
  if (position.heading === 0) {
    return 'N';
  } else if (position.heading === 90) {
    return 'E';
  } else if (position.heading === 180) {
    return 'S';
  } else {
    return 'W';
  }
}

function calculateNewPosition(
  position: Position,
  action: string,
  value: number,
): Position {
  let newPosition = { ...position };
  switch (action) {
    case 'N':
      newPosition.y += value;
      break;
    case 'S':
      newPosition.y -= value;
      break;
    case 'E':
      newPosition.x += value;
      break;
    case 'W':
      newPosition.x -= value;
      break;
    case 'L':
      newPosition.heading = (position.heading - value) % 360;
      if (newPosition.heading < 0) {
        newPosition.heading += 360;
      }
      break;
    case 'R':
      newPosition.heading = (position.heading + value) % 360;
      break;
    case 'F':
      // eslint-disable-next-line no-case-declarations
      const newAction = getDirectionalActionFromHeading(position);
      newPosition = calculateNewPosition(position, newAction, value);
      break;
    default:
      throw Error(`unexpected action: ${action}`);
  }

  return newPosition;
}

export function getAnswerPart1(instructions: string[]): number {
  let position: Position = {
    x: 0,
    y: 0,
    heading: 90,
  };

  for (let i = 0; i < instructions.length; i += 1) {
    const action = instructions[i].substring(0, 1);
    const value = parseInt(instructions[i].substring(1), 10);
    position = calculateNewPosition(position, action, value);
  }

  return Math.abs(position.x) + Math.abs(position.y);
}

function rotateWaypoint(waypoint: Waypoint, degrees: number): Waypoint {
  const count = degrees / 90;
  const newWaypoint = { ...waypoint };

  for (let i = 0; i < count; i += 1) {
    // rotate 90 degrees clockwise
    const { x, y } = newWaypoint;
    newWaypoint.x = y;
    newWaypoint.y = x * -1;
  }

  return newWaypoint;
}

function calculateNewWaypointAndPosition(
  position: Position,
  waypoint: Waypoint,
  action: string,
  value: number,
): [Waypoint, Position] {
  const newPosition = { ...position };
  let newWaypoint = { ...waypoint };

  switch (action) {
    case 'N':
      newWaypoint.y += value;
      break;
    case 'S':
      newWaypoint.y -= value;
      break;
    case 'E':
      newWaypoint.x += value;
      break;
    case 'W':
      newWaypoint.x -= value;
      break;
    case 'L':
      newWaypoint = rotateWaypoint(waypoint, 360 - value);
      break;
    case 'R':
      newWaypoint = rotateWaypoint(waypoint, value);
      break;
    case 'F':
      newPosition.x += value * waypoint.x;
      newPosition.y += value * waypoint.y;
      break;
    default:
      throw Error(`unexpected action: ${action}`);
  }

  return [newWaypoint, newPosition];
}

export function getAnswerPart2(instructions: string[]): number {
  let waypoint = { x: 10, y: 1 };
  let position = { x: 0, y: 0, heading: 90 };
  // TODO
  for (let i = 0; i < instructions.length; i += 1) {
    const action = instructions[i].substring(0, 1);
    const value = parseInt(instructions[i].substring(1), 10);

    const result = calculateNewWaypointAndPosition(
      position,
      waypoint,
      action,
      value,
    );

    [waypoint, position] = result;
  }

  return Math.abs(position.x) + Math.abs(position.y);
}
