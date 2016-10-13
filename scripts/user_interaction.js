//declare the player token
var token = 'o';

// total moves played, to determine a tie
var moves = 0;

// find the display
var screenDisplay = document.getElementsByClassName('display')[0];

// initial delay for the screen before it tells user what to do
setTimeout(function() {
  screenDisplay.innerHTML = 'It\'s Player One\'s Turn';
}, 1000);

//  updates display to tell user who's turn it is
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

  // check made moves to determine a tie
  moves += 1;

  // should no winner be found, run the update winner function again
  if (updateWinner() === false) {
    updateWinner();

    // if moves is at 9, the game is declared a tie
    if (moves === 9) {
      tieTotal += 1;
      $('#tie-total').html(tieTotal);
      screenDisplay.innerHTML = 'This Game is a Tie!';

      // empty squares and remove board to start a new game
      setTimeout(function() {
        $('.square').empty();
        $('table').fadeOut('fast');
      }, 300);
      setTimeout(function() {
        screenDisplay.innerHTML = 'Play Again?';
      }, 1100);
      setTimeout(function() {
        $('table').fadeIn('fast');
        screenDisplay.innerHTML = 'Player One, it\'s your move!';
      }, 2000);
      moves = 0;
      token = 'o';
    }
  }
}

// event listeners, runs functions on each users click
$('tbody').on('click', '.square', function(event) {

  // update the display, value in the square and check for a tie
  userDisplay();
  event.target.innerHTML = token;
  checkTie();

});
