// set countdown timer
var timeClock = 10;

// function to start the countdown timer
var startTimer = function() {

  // displays the time and replaces the stopwatch image
  var timer = setInterval(function() {
    var $newSpan = $('<span>').attr('class', 'timer');
    $('a').empty();
    $('a').append($newSpan).text(timeClock);
    timeClock -= 1;

    //clears the timer when it reaches 0 and empty squares and remove board to start a new game
    if (timeClock === -1) {
      timeClock = 'Game Over';
      timeClock = '10';

      // stop the timer counting down past 0
      setTimeout(function() {
        clearInterval(timer);
      }, 1000);

      // removes the board and starts a new game
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

      // sets the timer back to 10
      setTimeout(function() {
        timeClock = 10;
      }, 3000);
    }
  }, 1000);
}

// When user clicks the stopwatch the timer begins to count down
$('a').on('click', function(event) {

  startTimer();

});
