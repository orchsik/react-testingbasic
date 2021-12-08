const stats = require("./stats");

describe("stats", () => {
  const numbers = [3, 4, 1, 2, 5];

  it("gets sum value", () => {
    expect(stats.sum(numbers)).toBe(15);
  });
  it("gets maximum value", () => {
    expect(stats.max(numbers)).toBe(5);
  });
  it("gets minimum value", () => {
    expect(stats.min(numbers)).toBe(1);
  });
  it("gets average value", () => {
    expect(stats.avg(numbers)).toBe(3);
  });

  describe("median", () => {
    it("sorts the array", () => {
      expect(stats.sort(numbers)).toEqual([1, 2, 3, 4, 5]);
    });
    it("gets the median for odd length", () => {
      expect(stats.median(numbers)).toBe(3);
    });
    it("gets the median for even length", () => {
      expect(stats.median([...numbers, 6])).toBe(3.5);
    });
  });

  describe("mode", () => {
    it("has one mode", () => {
      expect(stats.mode([1, 2, 2, 2, 3])).toBe(2);
    });
    it("has no mode", () => {
      expect(stats.mode([1, 2, 3])).toBe(null);
    });
    it("has multiple mode", () => {
      expect(stats.mode([1, 2, 2, 3, 3])).toEqual([2, 3]);
    });
  });
});
