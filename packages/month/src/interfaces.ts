import { Month } from '@chancejs/data';

type MonthName = string;

export type MonthOrName<T extends boolean> = T extends true
  ? Month
  : MonthName;

  export interface MonthOptions<Raw extends boolean> {
    min?: number;
    max?: number;
    raw?: Raw;
  }

export interface MonthGeneratorFunction {
  /**
   * Return a random month.
   *
   * @param { MonthOptions} [options={}]
   * @param options.min - specify the minimum value that month can be generated. Default is 1.
   * @param options.max - specify the maximum value that month can be generated. Default is 12.
   * @param options.raw - when true, returns a month object. Default returns a string representing the month name.
   * @param {number} [seed] A numeric seed to pass to the pseudo-random number generator.
   * @return { number }
   * @example
   * 
   * // returns 'October'
   * month()
   * 
   * // {name: 'October', short_name: 'Oct', numeric: 10, days: 31}
   * month({raw: true});
   * 
   * // returns 'May
   * month({min: 3, max: 6})
   */
  <T extends boolean>(options?: MonthOptions<T>, seed?: number): MonthOrName<T>;
}

export interface IMonthGenerator {
  month: MonthGeneratorFunction;
}
