describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function(){ fizzBuzz = new FizzBuzz() })

  describe('when is divisible by', function() {
    
    it('the number 3', function() {
      
      expect(fizzBuzz.is_divisible_by_three(3)).toBe(true);
    });

    it('the number 5', function() {
      
      expect(fizzBuzz.is_divisible_by_five(5)).toBe(true);
    });

    it('the number 15', function() {
        
      expect(fizzBuzz.is_divisible_by_fifteen(15)).toBe(true);
    });
  });

  describe('when is not divisible by', function() {

    it('the number 3', function() {
      
      expect(fizzBuzz.is_divisible_by_three(1)).toBe(false);
    });

    it('the number 5', function(){

      expect(fizzBuzz.is_divisible_by_five(1)).toBe(false);
    });

    it('the number 15', function() {
      
      expect(fizzBuzz.is_divisible_by_fifteen(1)).toBe(false);
    });
  });

  describe('saying FizzBuzz', function() {
    
    it('says Fizz when is divisible by 3', function() {
      expect(fizzBuzz.return_word(3)).toEqual('Fizz')
    });

    it('says Buzz when is divisible by 5', function() {
      expect(fizzBuzz.return_word(5)).toEqual('Buzz')
    });

    it('says FizzBuzz when is divisible by 15', function() {
      expect(fizzBuzz.return_word(15)).toEqual('FizzBuzz')
    });
  });
});