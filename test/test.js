var assert = require('assert');
var getRandomPun = require('../punOfTheDay').getRandomPun

describe('punOfTheDay', () => {
  describe('#getRandomPun()', () => {
    it('should return a non-empty string', () => {
      return getRandomPun().then(result => {
          assert.notStrictEqual(result.length, 0)
      })
    });
  });
});
