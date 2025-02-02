let stringArray = ["lections", "coding", "repeat", "javascript", "typescript", "playwright"];
stringArray.forEach(function(item) {
    console.log(item);
});

let uppercaseArray = stringArray.map(function(item) {
    return item.toUpperCase();
});
console.log(uppercaseArray);

let numberArray = [1, 3, 5, 7, 8, 10];
numberArray.forEach(function(item) {
    console.log(item * 10);
});

let squaredNumbers = numberArray.map(function(item) {
    return item * item;
});
console.log(squaredNumbers);

let booleanArray = [true, true, false, false];
booleanArray.forEach(function(item) {
    console.log(item ? "Yes" : "No");
});

let flippedBooleanArray = booleanArray.map(function(item) {
    return !item;
});
console.log(flippedBooleanArray);

let mixedArray = [4, "homework", true, [1, 2, 3], null];
mixedArray.forEach(function(item) {
    console.log(item);
});

let modifiedMixedArray = mixedArray.map(function(item) {
    return typeof item;
});
console.log(modifiedMixedArray);
