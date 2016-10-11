
var squareOne = document.getElementById('a');
var squareTwo = document.getElementById('b');
var squareThree = document.getElementById('c');
var squareFour = document.getElementById('d');
var squareFive = document.getElementById('e');
var squareSix = document.getElementById('f');
var squareSeven = document.getElementById('g');
var squareEight = document.getElementById('h');
var squareNine = document.getElementById('i');



var rowWinX = function() {

  // if three row X win

  if (squareOne.innerHTML === 'x' && squareTwo.innerHTML === 'x' && squareThree.innerHTML === 'x') {
    return 'win';
  }

  else if (squareFour.innerHTML === 'x' && squareFive.innerHTML === 'x' && squareSix.innerHTML === 'x') {
    return 'win';
  }

  else if (squareSeven.innerHTML === 'x' && squareEight.innerHTML === 'x' && squareNine.innerHTML === 'x') {
    return 'win';
  }

}

var columnWinX = function() {

  // if three column X win

  if (squareOne.innerHTML === 'x' && squareFour.innerHTML === 'x' && squareSeven.innerHTML === 'x') {
    return 'win';
  }

  else if (squareTwo.innerHTML === 'x' && squareFive.innerHTML === 'x' && squareEight.innerHTML === 'x') {
    return 'win';
  }

  else if (squareThree.innerHTML === 'x' && squareSix.innerHTML === 'x' && squareNine.innerHTML === 'x') {
    return 'win';
  }

}

var diagonalWinX = function() {

  // if three X diagonals win

  if (squareOne.innerHTML === 'x' && squareFive.innerHTML === 'x' && squareNine.innerHTML === 'x') {
    return 'win';
  }

  else if (squareThree.innerHTML === 'x' && squareFive.innerHTML === 'x' && squareSeven.innerHTML === 'x') {
    return 'win';
  }


}

var rowWinO = function() {

  // if three row O win

  if (squareOne.innerHTML === 'o' && squareTwo.innerHTML === 'o' && squareThree.innerHTML === 'o') {
    return 'win';
  }

  else if (squareFour.innerHTML === 'o' && squareFive.innerHTML === 'o' && squareSix.innerHTML === 'o') {
    return 'win';
  }

  else if (squareSeven.innerHTML === 'o' && squareEight.innerHTML === 'o' && squareNine.innerHTML === 'o') {
    return 'win';
  }
}

var columnWinO = function() {

  // if three column O win

  if (squareOne.innerHTML === 'o' && squareFour.innerHTML === 'o' && squareSeven.innerHTML === 'o') {
    return 'win';
  }

  else if (squareTwo.innerHTML === 'o' && squareFive.innerHTML === 'o' && squareEight.innerHTML === 'o') {
    return 'win';
  }

  else if (squareThree.innerHTML === 'o' && squareSix.innerHTML === 'o' && squareNine.innerHTML === 'o') {
    return 'win';
  }

}

var diagonalWinO = function() {

  // if three O diagonals win

  if (squareOne.innerHTML === 'o' && squareFive.innerHTML === 'o' && squareNine.innerHTML === 'o') {
    return 'win';
  }

  else if (squareThree.innerHTML === 'o' && squareFive.innerHTML === 'o' && squareSeven.innerHTML === 'o') {
    return 'win';
  }

}

var winnerX = function() {

  // determine if the winner is X

  if (rowWinX() === 'win' || columnWinX() === 'win' || diagonalWinX() === 'win') {
    return 'Winner is X';
  }

}

var winnerO = function() {

  //determine if the winner O
  if (rowWinO() === 'win' || columnWinO() === 'win' || diagonalWinO() === 'win') {
    return 'Winner is O';
  }

}

var winnerDraw = function() {

  // determine if the game is a draw
  if (winnerX() !== 'Winner is X' && winnerO() !== 'Winner is O') {
    console.log('The match was a draw!');
  }

}

var getWinner = function() {

  // Assign players a token
  var playerOne = 'x';
  var playerTwo = 'o';

  // find out which player wins the game
  if (playerOne === 'x' && winnerX() === 'Winner is X') {
    console.log('Player One Wins!');
  }

  else if (playerTwo === 'o' && winnerO() === 'Winner is O') {
    console.log('Player Two Wins!');
  }

  winnerDraw();

}







//
// var changeValueX = function() {
//   if (playerOne === 'X') {
//     document.getElementById('a').innerHTML = 'X';
//   }
// }
//
// var changeValueO = function() {
//   if (playerTwo === 'O') {
//     document.getElementById('c').innerHTML = 'O';
//   }
// }
//
// var changeA = document.getElementById('a');
// changeA.addEventListener('click', changeValueX);

//
// var changeC = document.getElementById('c');
// changeC.addEventListener('click', changeValueO);
//
// var changeE = document.getElementById('e');
// changeE.addEventListener('click', changeValueX);
