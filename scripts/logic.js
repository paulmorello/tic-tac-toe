// find squares on the board
var square = $('.square');

// player total scores updated
var playerOneTotal = 0;
var playerTwoTotal = 0;
var tieTotal = 0;


var rowWinX = function() {

  //if three row X win

  for (var i = 0; i < square.length; i++) {
    if (square[0].innerHTML === 'x' && square[1].innerHTML === 'x' && square[2].innerHTML === 'x') {
      return 'win';
    }
    else if (square[3].innerHTML === 'x' && square[4].innerHTML === 'x' && square[5].innerHTML === 'x') {
      return 'win';
    }
    else if (square[6].innerHTML === 'x' && square[7].innerHTML === 'x' & square[8].innerHTML === 'x') {
      return 'win';
    }
  }
}

var columnWinX = function() {

  // if three column X win

  for (var i = 0; i < square.length; i++) {
    if (square[0].innerHTML === 'x' && square[3].innerHTML === 'x' && square[6].innerHTML === 'x') {
      return 'win';
    }
    else if (square[1].innerHTML === 'x' && square[4].innerHTML === 'x' && square[7].innerHTML === 'x') {
      return 'win';
    }
    else if (square[3].innerHTML === 'x' && square[5].innerHTML === 'x' && square[8].innerHTML === 'x') {
      return 'win';
    }
  }
}

var diagonalWinX = function() {

  // if three X diagonals win

  for (var i = 0; i < square.length; i++) {
    if (square[0].innerHTML === 'x' && square[4].innerHTML === 'x' && square[8].innerHTML === 'x') {
      return 'win';
    }
    else if (square[2].innerHTML === 'x' && square[4].innerHTML === 'x' && square[6].innerHTML === 'x') {
      return 'win';
    }
  }
}

var rowWinO = function() {

  // if three row O win

  for (var i = 0; i < square.length; i++) {
    if (square[0].innerHTML === 'o' && square[1].innerHTML === 'o' && square[2].innerHTML === 'o') {
      return 'win';
    }
    else if (square[3].innerHTML === 'o' && square[4].innerHTML === 'o' && square[5].innerHTML === 'o') {
      return 'win';
    }
    else if (square[6].innerHTML === 'o' && square[7].innerHTML === 'o' & square[8].innerHTML === 'o') {
      return 'win';
    }
  }
}

var columnWinO = function() {

  // if three column O win

  for (var i = 0; i < square.length; i++) {
    if (square[0].innerHTML === 'o' && square[3].innerHTML === 'o' && square[6].innerHTML === 'o') {
      return 'win';
    }
    else if (square[1].innerHTML === 'o' && square[4].innerHTML === 'o' && square[7].innerHTML === 'o') {
      return 'win';
    }
    else if (square[3].innerHTML === 'o' && square[5].innerHTML === 'o' && square[8].innerHTML === 'o') {
      return 'win';
    }
  }
}

var diagonalWinO = function() {

  // if three O diagonals win

  for (var i = 0; i < square.length; i++) {
    if (square[0].innerHTML === 'o' && square[4].innerHTML === 'o' && square[8].innerHTML === 'o') {
      return 'win';
    }
    else if (square[2].innerHTML === 'o' && square[4].innerHTML === 'o' && square[6].innerHTML === 'o') {
      return 'win';
    }
  }
}

var getWinner = function() {

  // Assign players a token
  var playerOne = 'x';
  var playerTwo = 'o';

  // find out which player wins the game
  if (rowWinX() === 'win' || columnWinX() === 'win' || diagonalWinX() === 'win' && playerOne === 'x') {

    // update player One total score
    playerOneTotal += 1;
    $('#player-one-total').html(playerOneTotal);
    screenDisplay.innerHTML = 'Player One Wins';

    setTimeout(function() {
      $('.square').empty();
      screenDisplay.innerHTML = 'Play Again? Player One Move.';
    }, 1000);
    moves = 0;
    token = 'o';
  }

  else if (rowWinO() === 'win' || columnWinO() === 'win' || diagonalWinO() === 'win' && playerTwo === 'o') {

    // update player Two total score
    playerTwoTotal += 1;
    $('#player-two-total').html(playerTwoTotal);
    screenDisplay.innerHTML = 'Player One Wins';

    setTimeout(function() {
      $('.square').empty();
      screenDisplay.innerHTML = 'Play Again? Player One Move.';
    }, 1000);
    moves = 0;
    token = 'o';
  }
  
  else {
    return false;
  }

}
