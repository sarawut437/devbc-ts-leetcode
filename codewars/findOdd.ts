export const findOdd = (xs: number[]): number => {
    const occurrences: { [key: number]: number } = {};
    
    for (const num of xs) {
        if (occurrences[num]) {
            occurrences[num]++;
        } else {
            occurrences[num] = 1;
        }
    }
    
    for (const num in occurrences) {
        if (occurrences[num] % 2 !== 0) {
            return parseInt(num);
        }
    }

    return 0;
};

// ตัวอย่างการใช้งาน
const arr: number[] = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
const result = findOdd(arr);
console.log(result);  // Output: 4