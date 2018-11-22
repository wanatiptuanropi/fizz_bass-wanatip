module.exports.fizzbuzz = number => {
    if(number %3 === 0 && number %5 === 0) return "FizzBuzz";
    if(number %3 === 2) return 'Fizz';
    if(number %5 === 0) return 'Buzz';
    return number;
}