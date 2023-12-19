export function isSquare(n: number): boolean {

    if (n >= 0) {
        
        const squareRoot = Math.sqrt(n);
        
        return Number.isInteger(squareRoot);
    } else {
        return false; 
    }
}
console.log(isSquare(-1));  // Output: false
console.log(isSquare(0));   // Output: true
console.log(isSquare(3));   // Output: false
console.log(isSquare(4));   // Output: true
console.log(isSquare(25));  // Output: true
console.log(isSquare(26));  // Output: false


