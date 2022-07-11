import Chance from "..";
import { times } from "@chancejs/generator";

describe("::Chance ::Helpers ::pickOne", () => {
  let chance: Chance;
  beforeEach(() => {
    chance = new Chance();
  });

  it("returns a single element", () => {
    const arr = ["a", "b", "c", "d"];
    times(1000, () => {
      const picked = chance.pickOne({ array: arr });
      expect(picked).toMatch(/[a-d]/);
      expect(Array.isArray(picked)).toBe(false);
    });
  });

  it("throws if zero elements in array", () => {
    const fn = () => chance.pickOne({ array: [] });
    expect(fn).toThrow("Chance: Cannot pickOne() from an empty array");
  });
});
