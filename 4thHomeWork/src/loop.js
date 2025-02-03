for (let i = 0; i <= 9; i++) {
    console.log(i);
}

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of numbers) {
    console.log(num);
}

const student = { name: "Ilja", age: 34, course: "QAT TypeScript" };
for (const key in student) {
    console.log(key + ": " + student[key]);
}

let x = 0;
while (x <= 9) {
    console.log(x);
    x++;
}

let y = 100;
do {
    console.log(y);
    y -= 10;
} while (y >= 0);
