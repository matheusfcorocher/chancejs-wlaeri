import { Generator } from "@chancejs/generator";
import { natural } from "@chancejs/natural";
import { PickOneOptions, IPickOneGenerator } from "./interfaces";

export class PickOneGenerator extends Generator implements IPickOneGenerator {
  public pickOne<T>(options: PickOneOptions<T>): T {
    const {array} = options;
    if (array.length === 0) {
      throw new RangeError("Chance: Cannot pickOne() from an empty array");
    }
    return array[natural({max: array.length - 1})];
  }
}
