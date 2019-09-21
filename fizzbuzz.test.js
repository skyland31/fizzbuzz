const FizzBuzz = require("./fizzbuzz");

describe("Test FizzBuzz", () => {
  test("Test 1 expect 1", () => {
    const result = FizzBuzz.say(1);
    expect(result).toEqual(1); //Assert Function
  });
});
describe("Test FizzBuzz", () => {
  test("Test 2 expect 2", () => {
    const result = FizzBuzz.say(2);
    expect(result).toEqual(2); //Assert Function
  });
});
describe("Test FizzBuzz", () => {
  test("Test 3 expect Fizz", () => {
    const result = FizzBuzz.say(3);
    expect(result).toEqual("Fizz"); //Assert Function
  });
});
describe("Test FizzBuzz", () => {
  test("Test 5 expect Buzz", () => {
    const result = FizzBuzz.say(5);
    expect(result).toEqual("Buzz"); //Assert Function
  });
});
describe("Test FizzBuzz", () => {
  test("Test 15 expect FizzBuzz", () => {
    const result = FizzBuzz.say(15);
    expect(result).toEqual("FizzBuzz"); //Assert Function
  });
});
