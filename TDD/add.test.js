const add  =  require("./add")

describe('String number Calculator', () => {
    test('returns 0 for an empty string', () => {
      expect(add("")).toBe(0);
    });
})