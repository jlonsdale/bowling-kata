function Roll() {
  this.value;
  this.bonus;
  this.frameNumber;
}

Roll.prototype.setValue = function(value, frameNumber) {
  this.value=value;
  this.frameNumber=frameNumber;
}

Roll.prototype.setBonus = function(bonus) {
  this.bonus=bonus;
}
