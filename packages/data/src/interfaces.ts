import { Month } from "./datatypes";

export interface DataObject {
  month: Array<Month>;
};

export type GetDataReturn<T extends string | undefined> = T extends undefined
? DataObject
: T extends keyof DataObject
  ? DataObject[T]
  : undefined

export interface SetOptions<T extends keyof DataObject> {
  fnName: string;
  payload: DataObject[T];
}

/**
   * Return data that is used for generate random values.
   *
   * @param { DataOptions} [options={}]
   * @return { Data }
   * @example
   * 
   * // returns {month: [...], timezones: [...], ...}
   * data.get()
   * 
*/
export type UseData = {
  get: <T extends string | undefined>(fnName: T) => GetDataReturn<T>;
  set: <T extends keyof DataObject>(options: SetOptions<T>) => String;
  reset: () => String;
}