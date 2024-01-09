export function formatNumber(num: number): string {
    if (num === 0) {
      return '0';
    }
  
    const abbreviations: [number, string][] = [
      [1e30, 'zz'],
      [1e27, 'zy'],
      [1e24, 'zx'],
      [1e21, 'zw'],
      [1e18, 'zv'],
      [1e15, 'zu'],
      [1e12, 'zt'],
      [1e9, 'B'],
      [1e6, 'M'],
      [1e3, 'K'],
    ];
  
    for (const [value, symbol] of abbreviations) {
      if (Math.abs(num) >= value) {
        const formatted = num / value;
        const rounded = Math.floor(formatted * 1000) / 1000; 
        if (rounded === Math.floor(rounded)) {
            return `${rounded}${symbol}`;
        } else {
            return `${rounded.toFixed(2)}${symbol}`;
        }
      }
    }
  
    return '0';
  }
  
 
  // ตัวอย่างใช้งาน
const numberToFormat = 1248;
console.log(formatNumber(numberToFormat)); // Output: 1.25K

const negativeNumber = -987654321;
console.log(formatNumber(negativeNumber)); // Output: -987.65M

const decimalNumber = 1234.56789;
console.log(formatNumber(decimalNumber)); // Output: 1.23K