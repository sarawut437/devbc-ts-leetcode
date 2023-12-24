export function findOutlier(integers: number[]): number {

    const evens = integers.filter(num => num % 2 === 0);
   const odds = integers.filter(num => num % 2 !== 0);
 
   return evens.length === 1 ? evens[0] : odds[0];
 }
// เพื่อตวรจดูว่าโค้ดทำงานได้จริงไหม
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));  //  11 (the only odd number)
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));  //  160 (the only even number)

 

