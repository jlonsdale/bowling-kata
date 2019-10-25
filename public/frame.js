function Frame(number=1) {
  this.number = number; //the index of which frame we are on, 1-->10
  this.roll1=0; //score for roll1
  this.roll2=0; //score for roll2
  this.totalPins = 10; //the total pins for each frame
  this.score='x';
};

//Set the value for the first roll
Frame.prototype.setRoll1 = function(pins) {
  //knock down the pins
  this.totalPins -= pins;
  //catch condition for invalid rolls
  if(this.totalPins<0) {throw "you cant knock down more than 10 pins"}
  //set the roll1 value
  this.roll1 = pins;
};

//Set the value for the second roll
Frame.prototype.setRoll2 = function(pins) {
  //Knock down the pins
  this.totalPins -= pins;
  //edge cases for illegal rolls
  if(this.totalPins<0) {
    throw "you cant knock down more than 10 pins";
  };
  //set the roll value
  this.roll2 = pins;
};

Frame.prototype.isComplete = function() {
  if(this.roll1!=0 &&this.roll2!=0) {
    return true
  }
  else {return false}

}

Frame.prototype.setScore =function(score) {
  this.score = score;
}

//Calculate the sum of the rolls
Frame.prototype.addRolls = function() {
  return this.roll1+this.roll2;
}

//Strike checker
Frame.prototype.isStrike = function() {
  if(this.roll1==10) {
    return true;
  }
  else {
    return false;
  }
}

//Spare checker
Frame.prototype.isSpare = function() {
  if(this.roll1+this.roll2==10) {
    return true;
  }
  else {
    return false;
  }
}
