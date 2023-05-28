var player1 = diceRandomRoll();
var player2 = diceRandomRoll();

function diceRandomRoll() {
  var randomDiceNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomDiceNumber);

  return randomDiceNumber;
}
document
  .querySelector(".dice .img2")
  .setAttribute("src", "images/dice" + player2 + ".png");
document
  .querySelector(".dice .img1")
  .setAttribute("src", "images/dice" + player1 + ".png");

if (player1 > player2) {
  document.querySelector("h1").innerHTML = "The winner is player 1";
} else if (player1 < player2) {
  document.querySelector("h1").innerHTML = "the winner is player 2";
} else {
  document.querySelector("h1").innerHTML = "It is a Tie!";
}
