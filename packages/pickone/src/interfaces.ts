export interface PickOneOptions<T> {
  array: T[]
}

/**
   * Return a random element from array.
   *
   * @param { PickoneOptions} [options={}]
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { array }
   * @example
   * // returns 'b'.
   * pickOne({array: ['a','b','c','d']});
   */
export type PickOneGeneratorFunction = <T>(options: PickOneOptions<T>, seed?: number) => T;

export interface IPickOneGenerator {
  pickOne: PickOneGeneratorFunction;
}

// Given an array, returns a single random element

