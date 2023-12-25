export function determineSumOddOrEven(nums: number[]): string {
    const sum: number = nums.reduce((acc, curr) => acc + curr, 0);
    return (sum % 2 === 0 ? "even" : "odd");
}

// ตัวอย่างการใช้งาน
console.log(determineSumOddOrEven([0])); // ผลลัพธ์: "even"
console.log(determineSumOddOrEven([0, 1, 4])); // ผลลัพธ์: "odd"
console.log(determineSumOddOrEven([0, -1, -5])); // ผลลัพธ์: "even"
