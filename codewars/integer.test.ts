import { expect, test } from "bun:test";
import { isSquare } from "./integer";

test("should get false from input '-1'", () => {
  expect(isSquare(-1)).toEqual(false);
});

test("should get true from input '0'", () => {
  expect(isSquare(0)).toEqual(true);
});

test("should get false from input '3'", () => {
  expect(isSquare(3)).toEqual(false);
});

test("should get true from input '4'", () => {
  expect(isSquare(4)).toEqual(true);
});

test("should get true from input '25'", () => {
  expect(isSquare(25)).toEqual(true);
});

test("should get false from input '26'", () => {
  expect(isSquare(26)).toEqual(false);
});
