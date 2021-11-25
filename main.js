//Generate random answer for computer
const computerPlay = () => {
  const arr = ["Rock", "Paper", "Scissors"];
  const randomAnswer = Math.floor(Math.random() * arr.length);
  return randomAnswer;
};

//Function that plays a single round of the game
const playRound = () => {
  let playerSelection = prompt(
    "Enter Selection: 0.Rock - 1.Paper - 2.Scissors"
  );
  const computerSelection = computerPlay();
  const selection = ["Rock", "Paper", "Scissors"];
  if (playerSelection > 2) {
    while (playerSelection > 2) {
      playerSelection = prompt(
        `Please Select a number between 0 and 2.\n0.Rock - 1.Paper - 2.Scissors`
      );
    }
  }
  if (playerSelection >= 0 && playerSelection <= 2) {
    if (playerSelection > computerSelection) {
      console.log(`Computer Selection: ${selection[computerSelection]}`);
      console.log(`Player Selection: ${selection[playerSelection]}`);
      console.log(
        `You Win! ${selection[playerSelection]} beats ${selection[computerSelection]}`
      );
      return 1;
    } else if (playerSelection < computerSelection) {
      console.log(`Computer Selection: ${selection[computerSelection]}`);
      console.log(`Player Selection: ${selection[playerSelection]}`);
      console.log(
        `You Loose! ${selection[computerSelection]} beats ${selection[playerSelection]}`
      );
      return 0;
    } else {
      console.log("Try again! You both picked the same answer.");
      return "=";
    }
  }
};

const game = () => {};
