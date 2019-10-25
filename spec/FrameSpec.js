
  beforeEach(function() {
    frame = new Frame();
  });

describe('Frame', function() {

  describe('Setting rolls...', function() {

     it('can set the value for roll1', function() {
       frame.setRoll1(1);
       expect(frame.roll1).toEqual(1);
     });

     it('wont let you set an invalid value for roll1', function() {
       expect(function()
       {frame.setRoll1(11)}).toThrow("you cant knock down more than 10 pins")
     });

     it('can set the value for roll2', function() {
       frame.setRoll1(1);
       frame.setRoll2(2);
       expect(frame.roll2).toEqual(2);
     });


    it('wont let you set an invalid value for roll2', function() {
      frame.setRoll1(9);
      expect(function()
      {frame.setRoll2(5)}).toThrow("you cant knock down more than 10 pins")
    });

    it('wont let you roll in the same frame if you rolled a strike', function() {
      frame.setRoll1(10);
      expect(function()
      {frame.setRoll2(5)}).toThrow("last roll was a strike")
    });

  });

  describe('.dddRolls', function() {
    frame.setRoll1(5);
    frame.setRoll2(4);
    expect(frame.addRolls()).toEqual(9);

  });

});
