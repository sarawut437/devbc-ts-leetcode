import { expect, test } from "bun:test";
import { countVowels } from "./Vowel_Count";


test("การทดสอบที่ 1 คือการทดสอบการลบสระออก", () => {
	expect(countVowels("This is a test string")).toEqual(5);
});

test("การทดสอบที่ 2 คือทดสอบว่าถ้าเป็นพิมพ์ใหญ่จะทกสอบผ่านไหม", () => {
	expect(countVowels("AEIOU")).toEqual(5);
});

test("การทดสอบที่ 3 คือการทดสอบว่าถ้าเป็นพิมพ์เล็กจะทกสอบผ่านไหม", () => {
	expect(countVowels("aeiou")).toEqual(5);
});