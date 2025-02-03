const stringArray = ["lections", "coding", "repeat", "javascript", "typescript", "playwright"];
stringArray.forEach(function(item) {
    console.log(item);
});

const uppercaseArray = stringArray.map(function(item) {
    return item.toUpperCase();
});
console.log(uppercaseArray);

const numberArray = [1, 3, 5, 7, 8, 10];
numberArray.forEach(function(item) {
    console.log(item * 10);
});

const squaredNumbers = numberArray.map(function(item) {
    return item * item;
});
console.log(squaredNumbers);

const booleanArray = [true, true, false, false];
booleanArray.forEach(function(item) {
    console.log(item ? "Yes" : "No");
});

const flippedBooleanArray = booleanArray.map(function(item) {
    return !item;
});
console.log(flippedBooleanArray);

const mixedArray = [4, "homework", true, [1, 2, 3], null];
mixedArray.forEach(function(item) {
    console.log(item);
});

const modifiedMixedArray = mixedArray.map(function(item) {
    return typeof item;
});
console.log(modifiedMixedArray);
