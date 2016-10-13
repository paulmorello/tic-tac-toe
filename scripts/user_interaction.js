//declare the player token
var token = 'o';

// total moves played
var moves = 0;

// find the display
var screenDisplay = document.getElementsByClassName('display')[0];

// initial delay for the screen before it tells user what to do
setTimeout(function() {
  screenDisplay.innerHTML = 'It\'s Player One\'s Turn';
}, 1000);

var userDisplay = function() {

  // changes display on top of the screen depending on user
  if (token === 'o') {

    // changes token to O and player Two's turn
    screenDisplay.innerHTML = 'It\'s Player Two\'s Turn';
    token = 'x';
  }

  else if (token === 'x') {

    // changes token to O and player Two's turn
    token = 'o';
    screenDisplay.innerHTML = 'It\'s Player One\'s Turn'
  }
}

// check for a tie
var checkTie = function() {

  // check made moves
  moves += 1;
  if (getWinner() === false) {
    getWinner();
    if (moves === 9) {
      tieTotal += 1;
      $('#tie-total').html(tieTotal);
      screenDisplay.innerHTML = 'This Game is a Tie!';

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
  }
}

$('tbody').on('click', '.square', function(event) {

  // update the display, value in the square and check for a tie
  userDisplay();
  event.target.innerHTML = token;
  checkTie();

});
