// Write your tests here!
const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("testSubstitutionEmpty", () => {
  it("should return false if no alphabet", () => {
    const input = "Hello There Zac!";
    const expected = false;
    const actual = substitution.substitution(input);
    expect(actual).to.equal(expected);
  });
});

describe("testSubstitutionLength", () => {
  it("should return false if alphabet length not equal to 26", () => {
    const input = "Hello There Zac!";
    const alphabet = "x$vutsrqpoomlkjihgfedcb";
    const expected = false;
    const actual = substitution.substitution(input);
    expect(actual).to.equal(expected);
  });
});

describe("testSubstitutionUnique", () => {
  it("should return false if alphabet is not unique", () => {
    const input = "Hello There Zac!";
    const alphabet = "x$vutsrqpoomlkjihgfedcbb";
    const expected = false;
    const actual = substitution.substitution(input);
    expect(actual).to.equal(expected);
  });
});

describe("testSubstitutionEncode", () => {
  it("should encode a message by using the substitution alphabet", () => {
    const input = "Hello There Z@ck!";
    const alphabet = "zyxwvutsrqponmlkjihgfedcba";
    const expected = "svool gsviv a@xp!";
    const actual = substitution.substitution(input, alphabet);
    expect(actual).to.equal(expected);
  });
});

describe("testSubstitutionDecode", () => {
  it("should decode a message using substitution alphabet", () => {
    const input = "svool gsviv a@xp!";
    const alphabet = "zyxwvutsrqponmlkjihgfedcba";
    const expected = "hello there z@ck!";
    const actual = substitution.substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });
});

describe("testSubstitutionDecodeWithSymbols", () => {
  it("should decode a message using substitution alphabet with symbols", () => {
    const input = "$z$ y@oovi!";
    const alphabet = "zyx$vutsrqponmlkjihgfedcba";
    const expected = "dad b@ller!";
    const actual = substitution.substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });
});

describe("testSubstitutionCapitals", () => {
  it("should ignore capital letters", () => {
    const input1 = "Hello There Zac!";
    const input2 = "hello there zac!";
    const expected = substitution.substitution(input1);
    const actual = substitution.substitution(input2);
    expect(actual).to.equal(expected);
  });
});
