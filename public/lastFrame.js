function LastFrame(number) {
  this.number = number; //the index of which frame we are on, 1-->10
  this.roll1=0; //score for roll1
  this.roll2=0; //score for roll2
  this.roll3=0; //score for roll2
  this.totalPins = 10; //the total pins for each frame
  this.bonus = null; //this stores which kind of bonus we have, null strike or spare
  this.score='x';
};

//Set the value for the first roll.
LastFrame.prototype.setRoll1 = function(pins) {
  this.totalPins -= pins
  this.roll1 = pins;
  if(this.bonus == 'spare') {this.bonusValue = this.roll1}
  if(this.bonus == 'strike' && this.isStrike()==true) {
    this.bonusValue = this.roll1
  }
}

//Set the value for the second roll.
LastFrame.prototype.setRoll2 = function(pins) {
  if (this.roll1==10) { //if you roll a strike in the previous frame the number of pins is reset and you get 2 more rolls
    this.totalPins = 10
  }
  this.totalPins -= pins
  if(this.totalPins<0) {
    throw "you cant knock down more than 10 pins";
  };
  this.roll2 = pins;
  if(this.bonus == 'strike') {this.bonusValue = this.addRolls()}
}

//Set the value for the third roll.
LastFrame.prototype.setRoll3 = function(pins) {
  if(this.roll1+this.roll<10) {throw "you needed a strike or a spare to roll for a 3rd time";}
  if(this.roll2==10) { //if you roll a strike in the previous frame the number of pins is reset and you get 1 more roll
    this.totalPins = 10
  }
  this.roll3 = pins;
}

LastFrame.prototype.allowedBonusRoll =function() {
  if(this.roll1+this.roll2>10) {return true}
  else {return false}
}

LastFrame.prototype.isComplete = function() {
  if(this.roll1!=0 &&this.roll2!=0) {
    return true
  }
  else {return false}

}

LastFrame.prototype.setScore =function(score) {
  this.score = score;
}

//Calculate the sum of the rolls
LastFrame.prototype.addRolls = function() {
  return this.roll1+this.roll2+this.roll3;
}

//Strike checker
LastFrame.prototype.isStrike = function() {
    return false;
}

//Spare checker
LastFrame.prototype.isSpare = function() {
    return false;
}
