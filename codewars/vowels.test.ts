import { expect, test } from "bun:test";
import { removeVowels } from "./vowels";

test("การtestที่ 1 ที่จะได้ ประโยคที่ไม่มีสระออกมา", () => {
  expect(removeVowels("This website is for losers LOL")).toEqual("Ths wbst s fr lsrs LL");
});


test("การtestที่ 2 ที่จะtest ว่าสระเป็นตัวพิมพ์ใหญ่จะtestผ่านไหม", () => {
    expect(removeVowels("This website is for losers LOOOL")).toEqual("Ths wbst s fr lsrs LL");
  });


  test("การtestที่ 3 ที่จะtest  ว่าสระเป็นตัวพิมพ์เล็กจะtestผ่านไหม", () => {
    expect(removeVowels("This website is for losers LoooL")).toEqual("Ths wbst s fr lsrs LL");
  });
