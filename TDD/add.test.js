const add  =  require("./add")

describe('String number Calculator', () => {
    it('should returns 0 for an empty string', () => {
      expect(add("")).toBe(0);
    });

    it("should returns the sum of comma-separated numbers", () => {
        expect(add("1,2,3")).toBe(6);
        expect(add("4,5")).toBe(9);
      });
})