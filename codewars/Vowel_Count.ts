export function countVowels(inputString: string): number {
    return inputString.toLowerCase().replace(/[^aeiou]/g, '').length;
}

// ตัวอย่างการใช้งานฟังก์ชัน
const input = "This is a test string"; 
// คือเอาค่าที่อยู่ countVowels ไปลบสระ(input) และเก็บค่าไว้ใน vowelCount เพื่อเอาไปแสดง
const vowelCount = countVowels(input);
console.log(`Number of vowels: ${vowelCount}`);
