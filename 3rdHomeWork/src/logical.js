const str = "100";
const num = 100;     
const isActive = true;

// Comparison operations
let comparison1 = num > 101;
let comparison2 = str === 100;
let comparison3 = num == "100";
let comparison4 = num < 101;

// Logical operations
let logical1 = isActive && (num >= 100);
let logical2 = isActive || (num < 0);
let logical3 = !isActive;


console.log("Comparison 1 (num > 101):", comparison1);
console.log("Comparison 2 (str === 100):", comparison2);
console.log("Comparison 3 (num == '100'):", comparison3);
console.log("Comparison 4 (num < 101):", comparison4);

console.log("Logical 1 (isActive && (num >= 100)):", logical1);
console.log("Logical 2 (isActive || (num < 0)):", logical2);
console.log("Logical 3 (!isActive):", logical3);
