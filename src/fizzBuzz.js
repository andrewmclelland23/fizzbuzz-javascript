function FizzBuzz() {
  this.num = function(number) {
     if (number % 15 === 0 ) {
       return 'FizzBuzz'
     }
     else if (number % 3 === 0) {
       return 'Fizz'
     }
     else if (number % 5 === 0) {
       return 'Buzz'
     }
     else {
       return number.toString()
     }
   }

   this.printFizzBuzz = function(number) {
     for (var i = 1; i <= number; i++) {
      console.log(this.num(i))
     }
   }
}
