export function breakChocolate(n: number, m: number): number {
    
    if (n <= 0 || m <= 0) {
        return 0;
    }

    
    return n * m - 1;
}

// การใช้งานตัวอย่าง
const n = 4;
const m = 2;
// คือเอาค่าที่อยู่ breakChocolate ไปคำนวณในสมาการ(n * m - 1) และเก็บค่าไว้ใน breaksNeeded เพื่อเอาไปแสดง
const breaksNeeded = breakChocolate(n, m);
console.log(`Minimum breaks needed: ${breaksNeeded}`);
