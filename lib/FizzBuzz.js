/* Main FizzBuzz */

function FizzBuzz(){}


FizzBuzz.prototype.is_divisible_by_three = function(number) {
	return this._is_divisible(number,3);
}

FizzBuzz.prototype.is_divisible_by_five = function(number) {
	return this._is_divisible(number,5);
}

FizzBuzz.prototype.is_divisible_by_fifteen = function(number) {
	return this._is_divisible(number,15);
}

FizzBuzz.prototype.return_word = function(number) {

	if (this.is_divisible_by_fifteen(number)) return 'FizzBuzz'
	if (this.is_divisible_by_three(number)) return 'Fizz'
	if (this.is_divisible_by_five(number))  return 'Buzz'

	return number
}

FizzBuzz.prototype._is_divisible = function(number,divisor) {
  return number % divisor == 0
}

module.exports = FizzBuzz;