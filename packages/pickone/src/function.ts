import { PickOneGenerator } from "./generator";
import { PickOneOptions } from "./interfaces";

export const pickOne = <T,>(
  options: PickOneOptions<T>,
  seed?: number
): T => {
  const pickOneGenerator = new PickOneGenerator({ seed });
  return pickOneGenerator.pickOne(options);
};
