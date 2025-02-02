let age = 18;
let isStudent = true;
let hasDiscountForCourse = true;

if (age >= 25) {
  console.log("It's adults life");
} else {
  console.log("Enjoy your time fellow");
}

if (age < 25 && isStudent) {
  console.log("You are a average student.");
} else if (age >= 25 && hasDiscountForCourse) {
  console.log("You are an adult without a discount for course.");
} else if (age >= 25 && !hasDiscountForCourse) {
  console.log("You are an adult with a discount for course.");
} else {
  console.log("You are a average student without any special privileges.");
}
