export function partsSums(ls: number[]): number[] {
    const length = ls.length;
    const sums: number[] = new Array(length + 1).fill(0);

    for (let i = length - 1; i >= 0; i--) {
        sums[i] = sums[i + 1] + ls[i];
    }

    return sums;
}

// ตัวอย่างการใช้งาน
const ls1: number[] = [0, 1, 3, 6, 10];
const ls2: number[] = [-1, -2, -3, -4, -5, -6];

console.log(partsSums(ls1)); // [20, 20, 19, 16, 10, 0]
console.log(partsSums(ls2)); // [21, 20, 18, 15, 11, 6, 0]
