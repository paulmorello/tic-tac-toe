#Tic-Tac-Toe

Tic tac toe is a game with two players that are aiming to connect three of the
of the same tokens.

## Installation guide:
Go to this link to play the game: [Game Link](https://paulmorello.github.io/tic-tac-toe/)

## Code Used:
This projects was coded with HTML, CSS, JavaScript and Jquery.

Jquery Library https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js

## Programs Used:
Atom Text Editor

Websites including:
* [Stack Overflow](http://stackoverflow.com/)
* [CSS Tricks](https://css-tricks.com/)
* [W3Schools](http://www.w3schools.com/)

## Approach Taken:
Prior to coding, I broke down the game on a notepad, drawing out the minimum display I wanted to achieve. Within the mockup was numbered elements that further broke down the logic of the game. This was helpful in understanding what my approach to coding the game would be.

First, I set up my HTML boilerplate and very basic css so I could see and visualise the game before getting into JavaScript.

Initially I decided to code the program entirely with JavaScript, to better understand the language. I used a number of large if/else statements and functions to determine the winner of a row, column or diagonal. This was split into two JS files, splitting up the game logic and user interactions.

The initial approach became too large and difficult to navigate through when problems occured. To combat this, I decided to implement Jquery to eliminate the multiple event listener functions called.

After the game logic was completed and the game worked, I upgraded my CSS and styles to a minimum level, upgrading the background colors and fonts. After completing the styling, I refactored my code again eliminating many unnecessary global variables and condensing my code further with loops and Jquery.

The final refactor of my JavaScript file was most if/else statements and replacing them with a multi-dimensional array that grabbed the variables from the DOM.

## Future Additions to the Game:
In the future I would like to add more functionality and features, such as AI or game timer.

## Conclusion

This project was created for the Web Development Immersive course in Melbourne.
