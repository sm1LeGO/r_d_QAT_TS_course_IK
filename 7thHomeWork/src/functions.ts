function sumArray(count: (number | string)[]): number {
    let sum = 0;
    count.forEach(function (item) {
        const num = Number(item);
        sum += isNaN(num) ? 0 : num;
    });
    return sum;
}

const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: (number | string)[] = ['10', '20', '30', '40', 'abc'];

console.log('Sum of numberArray:', sumArray(numberArray));
console.log('Sum of stringArray:', sumArray(stringArray));
