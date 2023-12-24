import { expect, test } from "bun:test";
import { breakChocolate } from "./Chocolate";

test("การtestที่ 1 ที่จะได้ 2*2-1 จะได้คำตอบ =3", () => {
  expect( breakChocolate (2,2 )).toEqual(3);
});

test("การtestที่ 2 ถ้ามีตัวแปร n หรือ m เป็น0คำตอบที่ได้จะเท่ากับ 0  ", () => {
    expect( breakChocolate (2,0 )).toEqual(0);
  });
