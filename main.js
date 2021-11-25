//Generate random answer for computer
const computerPlay = () => {
  const arr = ["Rock", "Paper", "Scissors"];
  const randomAnswer = Math.floor(Math.random() * arr.length);
  return randomAnswer;
};

const playerSelection = 1;
const computerSelection = computerPlay();

//Function that plays a single round of the game
const playRound = (playerSelection, computerSelection) => {
  const selection = ["Rock", "Paper", "Scissors"];
  if (playerSelection > computerSelection) {
    console.log(`computerPlay: ${selection[computerSelection]}`);
    console.log(`playerSelection: ${selection[playerSelection]}`);
    console.log(
      `You Win! ${selection[playerSelection]} beats ${selection[computerSelection]}`
    );
    return 1;
  } else if (playerSelection < computerSelection) {
    console.log(`computerPlay: ${selection[computerSelection]}`);
    console.log(`playerSelection: ${selection[playerSelection]}`);
    console.log(
      `You Loose! ${selection[computerSelection]} beats ${selection[playerSelection]}`
    );
    return 0;
  } else {
    console.log("Try again! You both picked the same answer.");
    return "=";
  }
};

playRound(playerSelection, computerSelection);
