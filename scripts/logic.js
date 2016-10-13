
// find squares on the board
var square = $('.square');

// player total scores updated
var playerOneTotal = 0;
var playerTwoTotal = 0;
var tieTotal = 0;


var rowWinX = function() {

  // if three row X win

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
      screenDisplay.innerHTML = 'Play Again?';
    }, 2000);
    setTimeout(function() {
      $('.square').empty();
      screenDisplay.innerHTML = 'Player One, it\'s your move!';
    }, 4000);
    moves = 0;
    token = 'o';
  }

  else if (rowWinO() === 'win' || columnWinO() === 'win' || diagonalWinO() === 'win' && playerTwo === 'o') {

    // update player Two total score
    playerTwoTotal += 1;
    $('#player-two-total').html(playerTwoTotal);
    screenDisplay.innerHTML = 'Player Two Wins';

    setTimeout(function() {
      $('.square').empty();
      screenDisplay.innerHTML = 'Play Again?';
    }, 2000);
    setTimeout(function() {
      $('.square').empty();
      screenDisplay.innerHTML = 'Player One, it\'s your move!';
    }, 4000);
    moves = 0;
    token = 'o';
  }

  else {
    return false;
  }
}

// var winningX = function() {
//
//   var boardData = [
//     [square[0].innerHTML,square[1].innerHTML,square[2].innerHTML],
//     [square[3].innerHTML,square[4].innerHTML,square[5].innerHTML],
//     [square[6].innerHTML,square[7].innerHTML,square[8].innerHTML]
//   ];
//
//   var win = {
//     winX: ['x','x','x'],
//     winO: ['o','o','o']
//   }
//
//   for (var i = 0; i < boardData.length; i++) {
//     if (boardData[i].join('') === win.winX.join('')) {
//       return 'win';
//     }
//     else {
//       return 'no match';
//     }
//   }
// }
//
// var winningO = function() {
//
//   var boardData = [
//     [square[0].innerHTML,square[1].innerHTML,square[2].innerHTML],
//     [square[3].innerHTML,square[4].innerHTML,square[5].innerHTML],
//     [square[6].innerHTML,square[7].innerHTML,square[8].innerHTML]
//   ];
//
//   var win = {
//     winX: ['x','x','x'],
//     winO: ['o','o','o']
//   }
//
//   for (var i = 0; i < boardData.length; i++) {
//     if (boardData[i].join('') === win.winO.join('')) {
//       return 'win';
//     }
//   }
// }


// // if three row X win
// a = [
//   ['x', 'x', 'x'],
//   ['o', 'x', 'x'],
//   ['x', 'o', 'x']
// ];
// win = ['x', 'x', 'x'];
// for (var i = 0; i < a.length; i++) {
//   if (a[i].join('') === win.join('')) {
//     console.log('match!');
//   } else {
//     console.log('no match...');
//   }
// }
//
// a = {
//   letters: ['a', 'b', 'c'],
//   fruit: ['apple', 'sj', 'sdf'],
//   something: ['SJ', 'SDF', 'sdf']
// }
