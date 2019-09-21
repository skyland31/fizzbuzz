class FizzBuzz {
  static say(number) {
    // if (number % 3 == 0 && number % 5 == 0) {
    //   return "FizzBuzz";
    // } else if (number % 5 == 0) {
    //   return "Buzz";
    // } else if (number % 3 == 0) {
    //   return "Fizz";
    // }
    switch (true) {
      case number % 3 === 0 && number % 5 === 0:
        return "FizzBuzz";
      case number % 5 === 0:
        return "Buzz";
      case number % 3 === 0:
        return "Fizz";
      default:
        return number;
    }
  }
}
module.exports = FizzBuzz;
