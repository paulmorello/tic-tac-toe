
// player total scores updated
var playerOneTotal = 0;
var playerTwoTotal = 0;
var tieTotal = 0;

// finding which player gets the win
var findWinner = function() {

 // locates the values inside each individual square on the board
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

  // object used to compare strings for an X win and a O win
  var win = {
    winX: ['x','x','x'],
    winO: ['o','o','o']
  }

  // iterates through the game board, joins the arrays into strings and
  // compares to find a win.
  for (var i = 0; i < boardData.length; i++) {
    if (boardData[i].join('') === win.winX.join('')) {
      return 'win x';
    }
    else if (boardData[i].join('') === win.winO.join('')) {
      return 'win o';
    }
  }
}

// updates displays and player scores
var updateWinner = function() {

  // Assign players a token
  var playerOne = 'x';
  var playerTwo = 'o';

  // find out which player wins the game
  if (findWinner() === 'win x' && playerOne === 'x') {

    // update player One total score and display winner
    playerOneTotal += 1;
    $('#player-one-total').html(playerOneTotal);
    screenDisplay.innerHTML = 'Player One Wins';

    // empty squares and remove board to start a new game
    setTimeout(function() {
      $('.square').empty();
      $('table').fadeOut('fast');
    }, 300);
    setTimeout(function() {
      screenDisplay.innerHTML = 'Play Again?';
    }, 1000);
    setTimeout(function() {
      $('table').fadeIn('fast');
      screenDisplay.innerHTML = 'Player One, it\'s your move!';
    }, 2000);
    moves = 0;
    token = 'o';
  }

  else if (findWinner() === 'win o' && playerTwo === 'o') {

    // update player Two total score
    playerTwoTotal += 1;
    $('#player-two-total').html(playerTwoTotal);
    screenDisplay.innerHTML = 'Player Two Wins';

    // empty squares and remove board to start a new game
    setTimeout(function() {
      $('.square').empty();
      $('table').fadeOut('fast');
    }, 300);
    setTimeout(function() {
      screenDisplay.innerHTML = 'Play Again?';
    }, 1000);
    setTimeout(function() {
      $('table').fadeIn('fast');
      screenDisplay.innerHTML = 'Player One, it\'s your move!';
    }, 2000);
    moves = 0;
    token = 'o';
  }

  // value used to find a tie game
  else {
    return false;
  }
}
