let age = 34;
let isStudent = true;
let hasDiscountForCourse = false;

switch (true) {
  case (age < 25 && isStudent):
    console.log("You are an average student.");
    break;
  case (age >= 25 && hasDiscountForCourse):
    console.log("You are an adult with a discount for course.");
    break;
  case (age >= 25 && !hasDiscountForCourse):
    console.log("You are an adult without a discount for course.");
    break;
  default:
    console.log("You are an average student without any special privileges.");
}
