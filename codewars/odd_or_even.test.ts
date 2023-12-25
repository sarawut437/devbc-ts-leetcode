import { expect, test } from "bun:test";
import { determineSumOddOrEven } from "./odd_or_even";

test("test ที่1  จะทดสอบว่าเป็นเลขคี่ไหม(ต้องหาผลรวมของตัวเลขก่อนถึงจะทราบได้ว่าเลขเป็รคี่หรือคู่) ", () => {
    expect( determineSumOddOrEven([0,1,4])).toEqual( "odd");
  });

  test("test ที่1  จะทดสอบว่าเป็นเลขคู่ไหม(ต้องหาผลรวมของตัวเลขก่อนถึงจะทราบได้ว่าเลขเป็รคี่หรือคู่) ", () => {
    expect( determineSumOddOrEven([0, -1, -5])).toEqual( "even");
  });


  