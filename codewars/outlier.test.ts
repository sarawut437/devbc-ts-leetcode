import { expect, test } from "bun:test";
import { findOutlier } from "./outlier";

test("test ที่จะได้ outlier ที่จะได้ตัวเลขคี่ ", () => {
  expect( findOutlier([2, 4, 0, 100, 4, 11])).toEqual(11);
});

test("test ที่จะได้ outlier ที่จะได้ตัวเลขคู่", () => {
    expect( findOutlier([3,5,7,10,11])).toEqual(10);
  });