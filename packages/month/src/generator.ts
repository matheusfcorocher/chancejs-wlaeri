import { useData, Month } from "@chancejs/data";
import { Generator } from "@chancejs/generator";
import { pickOne } from "@chancejs/pickone";
import { MonthOptions, IMonthGenerator, MonthOrName } from "./interfaces";

export class MonthGenerator extends Generator implements IMonthGenerator {
  public month<T extends boolean>(options: MonthOptions<T> = {}): MonthOrName<T> {
    const { min, max, raw } = options;
    const months = useData.get('month');
    const numerics = months.map(d => d.numeric);
    const minNumeric = Math.min(...numerics);
    const maxNumeric = Math.max(...numerics);
    const minMonth = min ?? minNumeric;
    const maxMonth = max ?? maxNumeric;

    this.testRange(minMonth < minNumeric || minMonth > maxNumeric, `Chance: Min cannot be less than ${minNumeric} or greater than ${maxNumeric}.`);
    this.testRange(maxMonth < minNumeric || maxMonth > maxNumeric, `Chance: Max cannot be less than ${minNumeric} or greater than ${maxNumeric}.`);
    this.testRange(
      minMonth > maxMonth,
      "Chance: Min cannot be greater than Max."
    );
    

    const month : Month = pickOne({array: months.slice(minMonth - 1, maxMonth)});
    return raw ? <MonthOrName<T>>month : <MonthOrName<T>>month.name;
  }

  private testRange(test: boolean, errorMessage: string) {
    if (test) {
      throw new RangeError(errorMessage);
    }
  }
}
