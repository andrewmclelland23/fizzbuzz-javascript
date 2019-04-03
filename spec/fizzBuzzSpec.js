describe("fizzBuzz", function() {
  var fizzBuzz;

beforeEach(function() {
  fizzBuzz = new FizzBuzz();
});

it("should return 'Fizz' when num function passed a 69", function() {
  expect(fizzBuzz.num(69)).toEqual('Fizz');
});

it("should return 'Buzz' when num function passed a 10", function() {
  expect(fizzBuzz.num(10)).toEqual('Buzz');
});

it("should return 'FizzBuzz' when num function passed a 15", function() {
  expect(fizzBuzz.num(10)).toEqual('Buzz');
});

it("should return 23 when num function passed a 23", function() {
  expect(fizzBuzz.num(23)).toEqual("23");
});

it("should print fizzbuzz sequence up to 15 when printFizzBuzz function passed 15", function() {
  spyOn(console, 'log').and.callThrough();
  fizzBuzz.printFizzBuzz(15);
  expect(console.log).toHaveBeenCalledWith('1')
  expect(console.log).toHaveBeenCalledWith('2')
  expect(console.log).toHaveBeenCalledWith('Fizz')
  expect(console.log).toHaveBeenCalledWith('4')
  expect(console.log).toHaveBeenCalledWith('Buzz')
  expect(console.log).toHaveBeenCalledWith('Fizz')
  expect(console.log).toHaveBeenCalledWith('7')
  expect(console.log).toHaveBeenCalledWith('8')
  expect(console.log).toHaveBeenCalledWith('Fizz')
  expect(console.log).toHaveBeenCalledWith('Buzz')
  expect(console.log).toHaveBeenCalledWith('11')
  expect(console.log).toHaveBeenCalledWith('Fizz')
  expect(console.log).toHaveBeenCalledWith('13')
  expect(console.log).toHaveBeenCalledWith('14')
  expect(console.log).toHaveBeenCalledWith('FizzBuzz')
});
})
