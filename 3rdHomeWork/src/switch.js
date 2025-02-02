let age = 50;
let hasDiscountForCourse = true;

switch (true) {
  case (age < 18):
    console.log("You are a young student.");
    break;
  case (age > 18 && age < 25):
    console.log("You are an average student.");
    break;
  case (age >= 25 && age < 30):
    console.log(hasDiscountForCourse ? "You are an adult with a discount for the course." : "You are an adult without a discount for the course.");
    break;
  case (age >= 30 && age < 45):
    console.log("You are a experienced learner.");
    break;
  default:
    console.log("No match.");
}
