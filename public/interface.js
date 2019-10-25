let game = new Game();
let counter = 1;

$(document).ready( function() {

  updateScores = function() {
    for (var i = 0; i < 10; i++) {
      $('#'+(i+1)).html(game.frames[i].score);
    };
    $("#CURRENTTOTAL").html(game.totalScore);
  };

  updateScores()
  $("#currentframe").text("Currently on frame number: "+counter)
  $("#bonusroll").hide()

  $("#form").submit(function(event) {
    event.preventDefault();
    let roll1 = $(this).find("[name=roll1]").val();
    let roll2 = $(this).find("[name=roll2]").val();
    if(roll2=="") {game.makeATurn(roll1)}
    else {game.makeATurn(roll1,roll2)}
    updateScores()
    counter+=1
    $("#currentframe").text("Currently on frame number: "+counter)
    if (counter>10) {
      $("#currentframe").text("Game Over")
    if(game.frames[9].allowedBonusRoll()==true)
     {$("#bonusroll").show()}
      $("#form").hide()
      $("#currentframe").text("Make a last roll")
    };
    updateScores()
  });

  $("#bonusroll").submit(function(event) {
    $("#currentframe").text("Game Over")
    updateScores()
    event.preventDefault();
    let roll3 = $(this).find("[name=roll3]").val();
    game.makeALastRoll(roll3)
    updateScores()
    $("#CURRENTTOTAL").html(game.totalScore);
    {$("#bonusroll").hide()}
    });



});
