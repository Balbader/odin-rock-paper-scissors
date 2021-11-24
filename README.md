# PROJECT: ROCK PAPER SCISSORS

## Assignment

1. Start a new Git repo for your project.<br>
   <br>
2. Create a blank HTML document with a script tag (Hint: it is best practice
   to link an external .js file). This game is going to be played completely from
   the console, so don’t worry about putting anything else in there.<br>
   <br>
3. Your game is going to play against the computer, so begin with a function
   called `computerPlay` that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
   We’ll use this function in the game to make the computer’s play.
   _Tip: use the console to make sure this is returning the expected
   output before moving to the next step!_<br>
   <br>
4. Write a function that plays a single round of Rock Paper Scissors. The function
   should take two parameters - the `playerSelection` and `computerSelection` -
   and then return a string that declares the winner of the round like
   so: `"You Lose! Paper beats Rock"`<br>
   <br>
   1. Make your function’s playerSelection parameter case-insensitive
      (so users can input `rock`, `ROCK`, `RocK` or any other variation).<br>
      <br>
5. **Important Note:** you want to `return` the results of this function call,
   not `console.log()` them. To test this function console.log the results:<br>
   <br>
   ```javascript
   function playRound(playerSelection, computerSelection) {
     // your code here!
   }
   const playerSelection = "rock";
   const computerSelection = computerPlay();
   console.log(playRound(playerSelection, computerSelection));
   ```
   <br>
6. Write a NEW function called `game()`. Use the previous function inside of
   this one to play a 5 round game that keeps score and reports a winner or loser
   at the end.<br>
   <br>
   1. You have not officially learned how to “loop” over code to repeat function
      calls… if you already know about loops from somewhere else (or if you feel
      like doing some more learning) feel free to use them. If not, don’t worry!
      Just call your `playRound` function 5 times in a row. Loops are covered in
      the next lesson.<br>
      <br>
   2. At this point you should be using `console.log()` to display the results
      of each round and the winner at the end.<br>
      <br>
   3. Use `prompt()` to get input from user.<br>
      <br>
   4. Feel free to re-work your previous functions if you need to. Specifically,
      you might want to change the return value to something more useful.<br>
      <br>
   5. Feel free to create more “helper” functions if you think it would be useful.
