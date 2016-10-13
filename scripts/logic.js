
// find squares on the board
var square = $('.square');

// player total scores updated
var playerOneTotal = 0;
var playerTwoTotal = 0;
var tieTotal = 0;


var winningX = function() {

  var boardData = [
    [$('#a').text(),$('#b').text(),$('#c').text()],
    [$('#d').text(),$('#e').text(),$('#f').text()],
    [$('#g').text(),$('#h').text(),$('#i').text()],
    [$('#a').text(),$('#d').text(),$('#g').text()],
    [$('#b').text(),$('#e').text(),$('#h').text()],
    [$('#c').text(),$('#f').text(),$('#i').text()],
    [$('#a').text(),$('#e').text(),$('#i').text()],
    [$('#c').text(),$('#e').text(),$('#g').text()]
  ];

  var win = {
    winX: ['x','x','x'],
    winO: ['o','o','o']
  }

  for (var i = 0; i < boardData.length; i++) {
    if (boardData[i].join('') === win.winX.join('')) {
      return 'win';
    }
  }
}

var winningO = function() {

  var boardData = [
    [$('#a').text(),$('#b').text(),$('#c').text()],
    [$('#d').text(),$('#e').text(),$('#f').text()],
    [$('#g').text(),$('#h').text(),$('#i').text()],
    [$('#a').text(),$('#d').text(),$('#g').text()],
    [$('#b').text(),$('#e').text(),$('#h').text()],
    [$('#c').text(),$('#f').text(),$('#i').text()],
    [$('#a').text(),$('#e').text(),$('#i').text()],
    [$('#c').text(),$('#e').text(),$('#g').text()]
  ];

  var win = {
    winX: ['x','x','x'],
    winO: ['o','o','o']
  }

  for (var i = 0; i < boardData.length; i++) {
    if (boardData[i].join('') === win.winO.join('')) {
      return 'win';
    }
  }
}

var getWinner = function() {

  // Assign players a token
  var playerOne = 'x';
  var playerTwo = 'o';

  // find out which player wins the game
  if (winningX() === 'win' && playerOne === 'x') {

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

  else if (winningO() === 'win' && playerTwo === 'o') {

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
