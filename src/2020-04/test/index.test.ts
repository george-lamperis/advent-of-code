import { getFileContents } from '../../utils';
import {
  getAnswerPart1,
  getAnswerPart2,
  hasValidBirthYear,
  hasValidIssueYear,
  hasValidExpirationYear,
  hasValidHeight,
  hasValidHairColor,
  hasValidEyeColor,
  hasValidPassportID,
} from '../index';

describe('hasValidBirthYear', () => {
  it('should return false if birth year is missing', () => {
    expect(hasValidBirthYear('iyr:2020')).toEqual(false);
    expect(hasValidBirthYear('byr: iyr:2020')).toEqual(false);
  });

  it('should return false if birth year not numeric', () => {
    expect(hasValidBirthYear('byr:asdf')).toEqual(false);
  });

  it('should return false if birth year is out of range', () => {
    expect(hasValidBirthYear('byr:1919')).toEqual(false);
    expect(hasValidBirthYear('byr:2003')).toEqual(false);
  });

  it('should return true if birth year is within range', () => {
    expect(hasValidBirthYear('byr:1920')).toEqual(true);
    expect(hasValidBirthYear('byr:2002')).toEqual(true);
    expect(hasValidBirthYear('byr:1984')).toEqual(true);
  });
});

describe('hasValidIssueYear', () => {
  it('should return false if issue year is missing', () => {
    expect(hasValidBirthYear('byr:2020')).toEqual(false);
    expect(hasValidBirthYear('byr:2020 iyr:')).toEqual(false);
  });

  it('should return false if issue year not numeric', () => {
    expect(hasValidIssueYear('iyr:asdf')).toEqual(false);
  });

  it('should return false if issue year is out of range', () => {
    expect(hasValidIssueYear('iyr:2009')).toEqual(false);
    expect(hasValidIssueYear('iyr:2021')).toEqual(false);
  });

  it('should return true if issue year is within range', () => {
    expect(hasValidIssueYear('iyr:2010')).toEqual(true);
    expect(hasValidIssueYear('iyr:2020')).toEqual(true);
    expect(hasValidIssueYear('iyr:2015')).toEqual(true);
  });
});

describe('hasValidExpirationYear', () => {
  it('should return false if expiration year is missing', () => {
    expect(hasValidBirthYear('byr:2020')).toEqual(false);
    expect(hasValidBirthYear('byr:2020 eyr:')).toEqual(false);
  });

  it('should return false if expiration year not numeric', () => {
    expect(hasValidExpirationYear('eyr:asdf')).toEqual(false);
  });

  it('should return false if expiration year is out of range', () => {
    expect(hasValidExpirationYear('eyr:2019')).toEqual(false);
    expect(hasValidExpirationYear('eyr:2031')).toEqual(false);
  });

  it('should return true if expiration year is within range', () => {
    expect(hasValidExpirationYear('eyr:2020')).toEqual(true);
    expect(hasValidExpirationYear('eyr:2030')).toEqual(true);
    expect(hasValidExpirationYear('eyr:2025')).toEqual(true);
  });
});

describe('hasValidHeight', () => {
  it('should return false if height is missing', () => {
    expect(hasValidHeight('byr:2020')).toEqual(false);
    expect(hasValidHeight('byr:2020 hgt:')).toEqual(false);
    expect(hasValidHeight('byr:2020 hgt:cm')).toEqual(false);
  });

  it('should return false if using invalid unit', () => {
    expect(hasValidHeight('hgt:123sz')).toEqual(false);
    expect(hasValidHeight('hgt:123')).toEqual(false);
  });

  it('should return false if height is out of range', () => {
    expect(hasValidHeight('hgt:149cm')).toEqual(false);
    expect(hasValidHeight('hgt:194cm')).toEqual(false);

    expect(hasValidHeight('hgt:58in')).toEqual(false);
    expect(hasValidHeight('hgt:77in')).toEqual(false);
  });

  it('should return true if height is within range', () => {
    expect(hasValidHeight('hgt:150cm')).toEqual(true);
    expect(hasValidHeight('hgt:193cm')).toEqual(true);
    expect(hasValidHeight('hgt:175cm')).toEqual(true);

    expect(hasValidHeight('hgt:59in')).toEqual(true);
    expect(hasValidHeight('hgt:76in')).toEqual(true);
    expect(hasValidHeight('hgt:65in')).toEqual(true);
  });
});

describe('hasValidHairColor', () => {
  it('should return false if hair color is missing', () => {
    expect(hasValidHairColor('byr:2020')).toEqual(false);
    expect(hasValidHairColor('byr:2020 hcl:')).toEqual(false);
  });

  it('should return false when # is missing', () => {
    expect(hasValidHairColor('hcl:abcdef')).toEqual(false);
  });

  it('should return false when hair color is invalid length', () => {
    expect(hasValidHairColor('hcl:#abcde')).toEqual(false);
    expect(hasValidHairColor('hcl:#abcdef1')).toEqual(false);
  });

  it('should return false when invalid characters are given', () => {
    expect(hasValidHairColor('hcl:#abcdeg')).toEqual(false);
  });

  it('should return true when a six digit hex code is given', () => {
    expect(hasValidHairColor('hcl:#abcdef')).toEqual(true);
    expect(hasValidHairColor('hcl:#123456')).toEqual(true);
  });
});

describe('hasValidEyeColor', () => {
  it('should return false if hair color is missing', () => {
    expect(hasValidEyeColor('byr:2020')).toEqual(false);
    expect(hasValidEyeColor('byr:2020 ecl:')).toEqual(false);
  });

  it('should return false if eye color is an unexpected value', () => {
    expect(hasValidEyeColor('ecl:asdf')).toEqual(false);
  });

  it('should return true if hair color is of of expected values', () => {
    expect(hasValidEyeColor('ecl:amb')).toEqual(true);
    expect(hasValidEyeColor('ecl:blu')).toEqual(true);
    expect(hasValidEyeColor('ecl:brn')).toEqual(true);
    expect(hasValidEyeColor('ecl:gry')).toEqual(true);
    expect(hasValidEyeColor('ecl:grn')).toEqual(true);
    expect(hasValidEyeColor('ecl:hzl')).toEqual(true);
    expect(hasValidEyeColor('ecl:oth')).toEqual(true);
  });
});

describe('hasValidPassportID', () => {
  it('should return false if passport id is missing', () => {
    expect(hasValidPassportID('byr:2020')).toEqual(false);
    expect(hasValidPassportID('byr:2020 pid:')).toEqual(false);
  });

  it('should return false when passport id is invalid length', () => {
    expect(hasValidPassportID('pid:12345678')).toEqual(false);
    expect(hasValidPassportID('pid:1234567890 bry:2020')).toEqual(false);
  });

  it('should return false if passport id is an unexpected value', () => {
    expect(hasValidPassportID('pid:asdfghjkl')).toEqual(false);
  });

  it('should return true if passport id contains nine digits', () => {
    expect(hasValidPassportID('pid:123456789 byr:202')).toEqual(true);
    expect(hasValidPassportID('pid:987654321')).toEqual(true);
  });
});

describe('getAnswerPart1', () => {
  const testCases: [string, number][] = [
    ['src/2020-04/test/example-input.txt', 2],
    ['src/2020-04/test/puzzle-input.txt', 233],
  ];
  test.each(testCases)('%s', (filename, expectedPart1) => {
    const contents = getFileContents(filename);
    expect(getAnswerPart1(contents)).toEqual(expectedPart1);
  });
});

describe('getAnswerPart2', () => {
  const testCases: [string, number][] = [
    ['src/2020-04/test/example-input-valid.txt', 4],
    ['src/2020-04/test/example-input-invalid.txt', 0],
    ['src/2020-04/test/puzzle-input.txt', 111],
  ];
  test.each(testCases)('%s', (filename, expectedPart1) => {
    const contents = getFileContents(filename);
    expect(getAnswerPart2(contents)).toEqual(expectedPart1);
  });
});
