import { expect, test } from "bun:test";
import { findOdd } from "./findOdd";

test("การtestที่ 1 คือการtest ผ่านการนับจำนวนแล้วไม่มีเลขคี่", () => {
  expect( findOdd ([2,2] )).toEqual(0);
});

test("การtestที่ 2 คือการtest ผ่านการนับจำนวนแล้วที่มีเลขคี่  ", () => {
    expect( findOdd ([2,3,3] )).toEqual(2);
  });
