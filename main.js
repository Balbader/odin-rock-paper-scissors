//Generate random answer for computer
const computerPlay = () => {
  const arr = ["Rock", "Paper", "Scissors"];
  const randomAnswer = Math.floor(Math.random() * arr.length);
  return randomAnswer;
};

//Function that plays a single round of the game
const playRound = (playerSelection, computerSelection) => {
  const selection = ["Rock", "Paper", "Scissors"];
  if (playerSelection == computerSelection)
    return "Try again! You both picked the same answer.";
  else if (playerSelection > computerSelection)
    return `You Win! ${selection[playerSelection]} beats ${selection[computerSelection]}`;
  else if (playerSelection < computerSelection)
    return `You Loose! ${selection[computerSelection]} beats ${selection[playerSelection]}`;
};

// Declare variables for play
//const array = ["Rock", "Paper", "Scissors"];
//const playerSelection = prompt(
//"Enter Selection Number: 0.Rock - 1.Paper - 2.Scissors"
//);
//const computerSelection = computerPlay();
//console.log(`Your answer is ${array[playerSelection]}.`);
//console.log(`The computer answer is ${array[computerSelection]}.`);
//console.log(playRound(playerSelection, computerSelection));

// 5 round game function
const game = () => {};
