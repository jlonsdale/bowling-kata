function Game(frame_object = Frame, last_frame_object = LastFrame, roll_object = Roll) {
  //Counter variables for the frames and rolls
  this.frameCounter = 0;
  this.rollCounter = 0;
  //Arrays to store frames and rolls
  this.frames = [];
  this.rolls = [];
  this.totalScore = 0;
  //Fill the frame array with empty frame objects (used polymorphism for the lastFrame object)
  for (var i = 0; i < 9; i++) {
    this.frames.push(new frame_object(i));
  };
  this.frames.push(new last_frame_object(9));
  //Fill the roll array with empty roll objects
  for (var i = 0; i < 21; i++) {
    this.rolls.push(new roll_object(i));
  };
  //variable for the current total
};

Game.prototype.scoreCalculator = function(frameCounter,rollCounter) {
    //access the currentFrame
    //(i.e. the last frame you have updated)
    //and currentRoll (i.e. the last roll you updated)
    currentFrame = this.frames[frameCounter];
    currentRoll = this.rolls[rollCounter];
    //if we have a strike or a spare add a bonus maker to the next roll or 2 rolls
    if (currentFrame.isStrike()) {
      this.rolls[rollCounter+2].setBonus('strike')
    }
    else if (currentFrame.isSpare()) {
      this.rolls[rollCounter+1].setBonus('spare')
    }
    else if (currentFrame.isComplete()){ //else calculate the score as normal
      currentFrame.setScore(currentFrame.addRolls());
      this.totalScore+=currentFrame.score
    }
    //if the current roll has a bonus, the previous (or second previous) frame's score must be updated
    if (currentRoll.bonus == 'strike') {
      previousRoll = this.rolls[rollCounter-1];
      previous2Roll = this.rolls[rollCounter-2];
      frameOfPrevious2Roll = this.frames[previous2Roll.frameNumber]
      frameOfPrevious2Roll.setScore(frameOfPrevious2Roll.addRolls() + currentRoll.value+previousRoll.value);
      this.totalScore+=frameOfPrevious2Roll.addRolls() + currentRoll.value+previousRoll.value
    }
    else if (currentRoll.bonus == 'spare') {
      previousRoll = this.rolls[rollCounter-1];
      frameOfPreviousRoll = this.frames[previousRoll.frameNumber]
      frameOfPreviousRoll.setScore(frameOfPreviousRoll.addRolls() + currentRoll.value);
      this.totalScore+=frameOfPreviousRoll.addRolls() + currentRoll.value
    }
};

Game.prototype.makeATurn = function(roll1,roll2=null) {
  frames = this.frames;
  rolls = this.rolls;
  if(roll2==null) {
    roll1 = parseInt(roll1)
    rolls[this.rollCounter].setValue(roll1,this.frameCounter)
    frames[this.frameCounter].setRoll1(roll1)
    this.scoreCalculator(this.frameCounter,this.rollCounter)
    this.rollCounter+=1
  }
  else {
    roll1 = parseInt(roll1)
    roll2 = parseInt(roll2)
    rolls[this.rollCounter].setValue(roll1,this.frameCounter)
    frames[this.frameCounter].setRoll1(roll1)
    this.scoreCalculator(this.frameCounter,this.rollCounter)
    this.rollCounter+=1

    rolls[this.rollCounter].setValue(roll2,this.frameCounter)
    frames[this.frameCounter].setRoll2(roll2)
    this.scoreCalculator(this.frameCounter,this.rollCounter)
    this.rollCounter+=1
  }
  this.frameCounter+=1
};

Game.prototype.makeALastRoll =function(roll3) {
  roll3 = parseInt(roll3)
  rolls[this.rollCounter].setValue(roll3)
  this.frames[9].setRoll3(roll3)
  this.frames[9].setScore(this.frames[9].addRolls())
  this.totalScore+=roll3
}





function test() {
  game = new Game();
  game.makeATurn(10)
  console.log(game.frames[0])
  game.makeATurn(10)
  console.log(game.frames[1])
  game.makeATurn(10)
  console.log(game.frames[2])
  game.makeATurn(10)
  console.log(game.frames[3])
  game.makeATurn(10)
  console.log(game.frames[4])
  game.makeATurn(10)
  console.log(game.frames[5])
  game.makeATurn(10)
  console.log(game.frames[6])
  game.makeATurn(10)
  console.log(game.frames[7])
  game.makeATurn(10)
  console.log(game.frames[8])
  game.makeATurn(10,10)
  console.log(game.frames[9])
  game.makeALastRoll(10)
  console.log(game.totalScore)





}
