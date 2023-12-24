export  function removeVowels(s: string): string {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return s.split('').filter(char => !vowels.includes(char)).join('');
  }
  
//   // Example usage:
//   inputString ใช้เก็บค่าstring
  const inputString: string = "I Love CODEIHN";
//   คือเอาค่าที่อยู่ inputString ไปลบสระในremoveVowels และเก็บค่าไว้ในoutputString
  const outputString: string = removeVowels(inputString);
//   ก็แสดงผลค่าที่อยู่ใน outputString
  console.log(outputString); // Output: "Ths wbst s fr lsrs LL!"
  