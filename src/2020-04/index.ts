// --- Day 4: Passport Processing ---

function isValidPassport(passport: string): boolean {
  return (
    passport.includes('byr') &&
    passport.includes('iyr') &&
    passport.includes('eyr') &&
    passport.includes('hgt') &&
    passport.includes('hcl') &&
    passport.includes('ecl') &&
    passport.includes('pid')
  );
}

export function getAnswerPart1(batch: string): number {
  const passports = batch.split('\n\n'); // split at blank lines
  return passports.filter(isValidPassport).length;
}

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
export function hasValidBirthYear(passport: string): boolean {
  const regex = /byr:(\d+)/;
  const result = regex.exec(passport);
  const birthYear = result !== null ? parseInt(result[1], 10) : -1;
  return birthYear >= 1920 && birthYear <= 2002;
}

// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
export function hasValidIssueYear(passport: string): boolean {
  const regex = /iyr:(\d+)/;
  const result = regex.exec(passport);
  const issueYear = result !== null ? parseInt(result[1], 10) : -1;
  return issueYear >= 2010 && issueYear <= 2020;
}

// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
export function hasValidExpirationYear(passport: string): boolean {
  const regex = /eyr:(\d+)/;
  const result = regex.exec(passport);
  const expirationYear = result !== null ? parseInt(result[1], 10) : -1;
  return expirationYear >= 2020 && expirationYear <= 2030;
}

// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
export function hasValidHeight(passport: string): boolean {
  const regex = /hgt:(\d+)(cm|in)/;
  const result = regex.exec(passport);
  if (result !== null) {
    const height = parseInt(result[1], 10);
    const unit = result[2];

    if (unit === 'cm') {
      return height >= 150 && height <= 193;
    }
    return height >= 59 && height <= 76;
  }

  return false;
}

// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
export function hasValidHairColor(passport: string): boolean {
  const regex = /hcl:#(?:[a-f0-9]{6})\b/;
  const result = regex.exec(passport);
  return result !== null;
}

// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
export function hasValidEyeColor(passport: string): boolean {
  const regex = /ecl:(?:amb|blu|brn|gry|grn|hzl|oth)/;
  const result = regex.exec(passport);
  return result !== null;
}

// pid (Passport ID) - a nine-digit number, including leading zeroes.
export function hasValidPassportID(passport: string): boolean {
  const regex = /pid:\d{9}\b/;
  const result = regex.exec(passport);
  return result !== null;
}

export function getAnswerPart2(batch: string): number {
  const passports = batch.split('\n\n');

  return passports.filter(
    (passport) =>
      hasValidBirthYear(passport) &&
      hasValidIssueYear(passport) &&
      hasValidExpirationYear(passport) &&
      hasValidHeight(passport) &&
      hasValidHairColor(passport) &&
      hasValidEyeColor(passport) &&
      hasValidPassportID(passport),
  ).length;
}
