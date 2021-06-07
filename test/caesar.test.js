// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("testCaesarPostitiveShift", () => {
  it("should shift the string correctly (including past z)", () => {
    const string = "Hello There Zac!";
    const shift = 6;
    const expected = "nkrru znkxk fgi!";
    const actual = caesar.caesar(string, shift);
    expect(actual).to.equal(expected);
  });
});

describe("testCaesarNegativeShift", () => {
  it("should shift the string negatively correctly (including past a)", () => {
    const string = "Hello There Zac!";
    const shift = -3;
    const expected = "ebiil qebob wxz!";
    const actual = caesar.caesar(string, shift);
    expect(actual).to.equal(expected);
  });
});

describe("testCaesarDecode", () => {
  it("should decode the string correctly", () => {
    const string = "Nkrru Znkxk Fgi!";
    const shift = 6;
    const expected = "hello there zac!";
    const actual = caesar.caesar(string, shift, false);
    expect(actual).to.equal(expected);
  });
});

describe("testCaesarDecodeNegative", () => {
  it("should decode the string correctly using a negative shift", () => {
    const string = "Ebiil Qebob Wxz!";
    const shift = -3;
    const expected = "hello there zac!";
    const actual = caesar.caesar(string, shift, false);
    expect(actual).to.equal(expected);
  });
});

describe("testCaesarRange", () => {
  it("should report false for over 25", () => {
    const string = "Hello There!";
    const shift = 26;
    const expected = false;
    const actual = caesar.caesar(string, shift);
    expect(actual).to.equal(expected);
  });
});

describe("testCaesarRange", () => {
  it("should report false for less than -25", () => {
    const string = "Hello There!";
    const shift = -26;
    const expected = false;
    const actual = caesar.caesar(string, shift);
    expect(actual).to.equal(expected);
  });
});

describe("testCaesarRange", () => {
  it("should report false if shift equals zero", () => {
    const string = "Hello There!";
    const shift = 0;
    const expected = false;
    const actual = caesar.caesar(string, shift);
    expect(actual).to.equal(expected);
  });
});

describe("testCaesarCapitals", () => {
  it("should ignore capital letters", () => {
    const string1 = "Hello There Zac!";
    const string2 = "hello there zac!";
    const shift = 6;
    const expected = caesar.caesar(string1, shift);
    const actual = caesar.caesar(string2, shift);
    expect(actual).to.equal(expected);
  });
});
