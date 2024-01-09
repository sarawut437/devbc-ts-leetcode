import { expect, test } from "bun:test";
import { partsSums } from "./parts_Sums";

test("การtestที่ 1 คือการtest จำนวนที่ติดลบ", () => {
  expect( partsSums ([-1, -2, -3, -4, -5, -6] )).toEqual([ -21, -20, -18, -15, -11, -6, 0 ]);
});

test("การtestที่ 2 คือการtest  จำนวนเต็มบวก ", () => {
    expect( partsSums ([0, 1, 3, 6, 10] )).toEqual([ 20, 20, 19, 16, 10, 0 ]);
  });
