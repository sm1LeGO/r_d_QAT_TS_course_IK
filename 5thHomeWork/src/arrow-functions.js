const sumArray = (arr) => {
    let sum = 0;
    arr.forEach((item) => {
        sum += isNaN(item) ? 0 : Number(item);
    });
    return sum;
};

const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["abc", "20", "30", "40", "50"];

console.log("Sum of numberArray:", sumArray(numberArray));
console.log("Sum of stringArray:", sumArray(stringArray));
