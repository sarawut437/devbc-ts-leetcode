import { expect, test } from "bun:test";
import { formatNumber } from "./Number";

test("การทดสอบที่ 1 คือการทดสอบเมื่อเป็น0", () => {
  expect(formatNumber(0)).toEqual("0");
});

test("การทดสอบที่ 1 คือการทดสอบตัวเลขที่ติดลบ", () => {
    expect(formatNumber(-987654321)).toEqual("-987.65M");
  });

test("การทดสอบที่ 1 คือการทดสอบตัวเลขที่มีทศนิยม", () => {
    expect(formatNumber(1234.56789)).toEqual("1.23K");
  });