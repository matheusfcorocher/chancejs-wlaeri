import { DataObject, GetDataReturn, SetOptions, UseData } from "./interfaces";
import { standardData } from "./standardData";

let data: DataObject = { ...standardData };
function get(): GetDataReturn<undefined>;
function get<T extends string>(fnName: T): GetDataReturn<T>;
function get(fnName?: string | undefined) {
  if (fnName === undefined) {
    return data;
  }
  const isKey = (str: string): str is keyof DataObject => {
    return str in data;
  };
  console.log(data);
  return isKey(fnName) ? data[fnName] : undefined;
}

export const useData: UseData = {
  get,
  set: function <T extends keyof DataObject>(options: SetOptions<T>): String {
    const { fnName, payload } = options;
    const replaceData = () => {
      const isKey = (str: string): str is keyof DataObject => {
        return str in data;
      };
      if (isKey(fnName)) {
        data[fnName] = payload;
        return true;
      }
      return false;
    };
    const result = replaceData();
    console.log(data);
    return result
      ? `Chancejs: data from ${fnName}() was changed!`
      : `Chancejs: ${fnName}() wasn't found in Chancejs!`;
  },
  reset: function (): String {
    data = { ...standardData };

    return "Chancejs: data was setted to standard data";
  },
};
