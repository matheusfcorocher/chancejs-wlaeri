import { pickOne } from "./function";
import { times } from "@chancejs/generator";

describe("::Helpers ::pickOne", () => {
  it('returns a single element', () => {
    const arr = ['a', 'b', 'c', 'd']
    times(1000, () => {
        const picked = pickOne({array: arr})
        expect(picked).toMatch(/[a-d]/);
        expect(Array.isArray(picked)).toBe(false);
    })
  })
  
  it('throws if zero elements in array', () => {
    const fn = () => pickOne({array: []})
    expect(fn).toThrow('Chance: Cannot pickOne() from an empty array')
  })
});

