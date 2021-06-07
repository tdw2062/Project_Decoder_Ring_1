// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("testPolybius", () => {
  it("should translate a message by number pairs", () => {
    const string = "Jim is rad";
    const expected = "424223 4234 241141";
    const actual = polybius.polybius(string);
    expect(actual).to.equal(expected);
  });
});

describe("testPolybius", () => {
  it("should decode a message by number pairs", () => {
    const string = "424223 4234 241141";
    const expected = "(i/j)(i/j)m (i/j)s rad";
    const actual = polybius.polybius(string, false);
    expect(actual).to.equal(expected);
  });
});

describe("testPolybius", () => {
  it("should return false if the length of number is odd", () => {
    const string = "424223423424114";
    const expected = false;
    const actual = polybius.polybius(string, false);
    expect(actual).to.equal(expected);
  });
});

describe("testPolybiusCapitals", () => {
  it("should ignore capital letters", () => {
    const string1 = "Jim is Rad";
    const string2 = "jim is rad";
    const expected = polybius.polybius(string1);
    const actual = polybius.polybius(string2);
    expect(actual).to.equal(expected);
  });
});
