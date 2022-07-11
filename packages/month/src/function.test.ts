import { times } from "@chancejs/generator";
import { month } from "./function";

describe("::Time ::month()", () => {
  describe("When month() executes", () => {
    describe("without raw arg", () => {
      it("returns month name", () => {
        times(1000, () => {
          let m = month();
          expect(typeof m).toBe("string");
        });
      });
    });
    describe("with raw arg", () => {
      it("returns month object", () => {
        times(1000, () => {
          let m = month({ raw: true });
          expect(typeof m == "string").toBe(false);
          expect(typeof m == "object").toBe(true);
        });
      });
    });
    describe("with only min arg", () => {
      it("returns correct result", () => {
        times(1000, () => {
          let m = month({ raw: true, min: 10 });
          expect(m.numeric >= 10 && m.numeric <= 12).toBe(true);
        });
      });
    });
    describe("with only max arg", () => {
      it("returns correct result", () => {
        times(1000, () => {
          let m = month({ raw: true, max: 10 });
          expect(m.numeric >= 1 && m.numeric <= 10).toBe(true);
        });
      });
    });
    describe("with max and min args", () => {
      it("returns correct result", () => {
        times(1000, () => {
          let m = month({ raw: true, min: 7, max: 10 });
          expect(m.numeric >= 7 && m.numeric <= 10).toBe(true);
        });
      });
    });
  });
  describe("When pass min arg", () => {
    describe("with value below 1", () => {
      it("throws error", () => {
        const fn = () => month({ min: 0 });
        expect(fn).toThrow(
          "Chance: Min cannot be less than 1 or greater than 12."
        );
      });
    });
    describe("with value greater than 12", () => {
      it("throws error", () => {
        const fn = () => month({ min: 13 });
        expect(fn).toThrow(
          "Chance: Min cannot be less than 1 or greater than 12."
        );
      });
    });
  });
  describe("When pass max arg", () => {
    describe("with value below 1", () => {
      it("throws error", () => {
        const fn = () => month({ max: 0 });
        expect(fn).toThrow(
          "Chance: Max cannot be less than 1 or greater than 12."
        );
      });
    });
    describe("with value greater than 12", () => {
      it("throws error", () => {
        const fn = () => month({ max: 13 });
        expect(fn).toThrow(
          "Chance: Max cannot be less than 1 or greater than 12."
        );
      });
    });
  });
  describe("When pass min arg with value greater than max arg", () => {
    it("throws error", () => {
      const fn = () => month({ min: 10, max: 5 });
      expect(fn).toThrow(
        "Chance: Min cannot be greater than Max."
      );
    });
  });
});
