import { times } from "@chancejs/generator";
import { month } from "@chancejs/month";
import { useData } from "./function";

describe("::Data ::useData", () => {
  describe("When pass function that don't exist in set() data pool", () => {
    describe("It doesn't change data of function", () => {
      it("returns correct result", () => {
        expect(
          useData.set({
            fnName: "bill",
            payload: [
              {
                name: "Poctober",
                shortName: "Pol",
                numeric: 1,
                days: 30,
              },
              {
                name: "Lunary",
                shortName: "Lun",
                numeric: 2,
                days: 31,
              },
            ],
          })
        ).toEqual(`Chancejs: bill() wasn't found in Chancejs!`);
      });
    });
    describe("and function returns its default data", () => {
      it("returns correct result", () => {
        times(1000, () => {
          let m = month({ raw: true });
          expect(typeof m == "string").toBe(false);
          expect(typeof m == "object").toBe(true);
          expect(m.numeric >= 1 && m.numeric <= 12).toBe(true);
        });
      });
    });
  });
  describe("When pass function that already exist in set() data pool", () => {
    describe("It changes data of function", () => {
      it("returns correct result", () => {
        expect(
          useData.set({
            fnName: "month",
            payload: [
              {
                name: "Poctober",
                shortName: "Pol",
                numeric: 1,
                days: 30,
              },
              {
                name: "Lunary",
                shortName: "Lun",
                numeric: 2,
                days: 31,
              },
            ],
          })
        ).toEqual(`Chancejs: data from month() was changed!`);
      });
    });
    describe("and function starts to return the data that was passed", () => {
      it.only("returns correct result", () => {
        useData.set({
          fnName: "month",
          payload: [
            {
              name: "Poctober",
              shortName: "Pol",
              numeric: 1,
              days: 30,
            },
            {
              name: "Lunary",
              shortName: "Lun",
              numeric: 2,
              days: 31,
            },
          ],
        })
        times(1000, () => {
          let m = month({ raw: true });
          expect(typeof m == "string").toBe(false);
          expect(typeof m == "object").toBe(true);
          expect(m.numeric >= 1 && m.numeric <= 2).toBe(true);
        });
      });
    });
  });
});
