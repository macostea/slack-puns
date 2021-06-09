var assert = require("assert");
var getRandomPun = require("../punOfTheDay").getRandomPun;
var fetch = require("node-fetch");

describe("punOfTheDay", () => {
  describe("#getRandomPun()", () => {
    it("should return a non-empty string", () => {
      return getRandomPun(fetch).then(result => {
        assert.notStrictEqual(result.length, 0);
      });
    });
  });
});
