//Generate random answer for computer
const computerPlay = () => {
  const arr = ["Rock", "Paper", "Scissors"];
  const randomAnswer = Math.floor(Math.random() * arr.length);
  return randomAnswer;
};

const getAnswer = () => {
  // Declare variables for play
  const playerSelection = prompt(
    "Enter Selection Number: 0.Rock - 1.Paper - 2.Scissors"
  );
  const computerSelection = computerPlay();
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

// 5 round game function
const game = () => {
  let count = 0;
  let playerScore = 0;
  let computerScore = 0;
  const selection = ["Rock", "Paper", "Scissors"];

  getAnswer();

  for (let i = 1; i <= 5; i++) {
    const round = playRound(playerSelection, computerSelection);
    if (playerSelection === round) {
      count += 1;
      console.log(`Count: ${count}`);
      getAnswer();
      playRound(playerSelection, computerSelection);
    }
    if (playerSelection > round) {
      count += 1;
      playerScore += 1;
      console.log(`Your answer is ${selection[playerSelection]}.`);
      console.log(`Count: ${count}`);
      console.log(`Player Score: ${playerScore}`);
      getAnswer();
      playRound(playerSelection, computerSelection);
    }
    if (playerSelection < round) {
      {
        count += 1;
        computerScore += 1;
        console.log(`The computer answer is ${selection[computerSelection]}.`);
        console.log(`Count: ${count}`);
        console.log(`Computer Score: ${computerScore}`);
        getAnswer();
        playRound(playerSelection, computerSelection);
      }
    }
  }
};

game();
