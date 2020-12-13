// --- Day 7: Handy Haversacks ---

type Rule = {
  type: string;
  capacity: Array<{
    type: string;
    number: number;
  }>;
};

export function parseRule(rule: string): Rule {
  const typeRegex = /(\w+ \w+) bags? contain/;
  const typeMatches = typeRegex.exec(rule);
  const type = typeMatches?.[1] ?? '';

  const capacityRegex = /(\d) (\w+ \w+) bags?[.,]/g;
  const capacity = [];
  let matches;
  do {
    matches = capacityRegex.exec(rule);

    if (matches !== null) {
      capacity.push({
        type: matches[2],
        number: parseInt(matches[1], 10),
      });
    }
  } while (matches !== null);

  return {
    type,
    capacity,
  };
}

export function canContainBag(
  rule: Rule | undefined,
  type: string,
  rules: Rule[],
): boolean {
  if (rule === undefined) {
    throw Error('undefined rule!');
  } else if (rule.capacity.length === 0) {
    return false;
  } else if (rule.capacity.some((i) => i.type === type)) {
    return true;
  } else {
    return rule.capacity.some((i) => {
      const nextRule = rules.find((j) => i.type === j.type);
      return canContainBag(nextRule, type, rules);
    });
  }
}

export function getAnswerPart1(lines: string[]): number {
  const rules = lines.map((line) => parseRule(line));

  const matches = rules.filter((rule) =>
    canContainBag(rule, 'shiny gold', rules),
  );

  return matches.length;
}

export function countNestedBags(type: string, rules: Rule[]): number {
  const thisBag = rules.find((i: Rule) => i.type === type);

  if (thisBag === undefined) {
    return 0;
  } else if (thisBag.capacity.length === 0) {
    return 0;
  } else {
    return thisBag.capacity.reduce(
      (accumulator, bag) =>
        accumulator + bag.number * (countNestedBags(bag.type, rules) + 1),
      0,
    );
  }
}

export function getAnswerPart2(lines: string[]): number {
  const rules = lines.map((line) => parseRule(line));
  return countNestedBags('shiny gold', rules);
}
