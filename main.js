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

// Create a 5 rounders game() function + score keeping
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let gameRound = 1; gameRound < 6; gameRound++) {
    let res = playRound();
    if (res === 1) {
      playerScore++;
      console.log(`Game Round: ${gameRound}`);
      console.log(`Player Score: ${playerScore}`);
      console.log(`Computer Score: ${computerScore}`);
      console.log("\n");
    }
    if (res === 0) {
      computerScore++;
      console.log(`Game Round: ${gameRound}`);
      console.log(`Player Score: ${playerScore}`);
      console.log(`Computer Score: ${computerScore}`);
      console.log("\n");
    }
    if (res === "=") {
      playerScore = playerScore;
      computerScore = computerScore;
      console.log(`Game Round: ${gameRound}`);
      console.log(`Player Score: ${playerScore}`);
      console.log(`Computer Score: ${computerScore}`);
      console.log("\n");
    }
  }
  if (playerScore > computerScore) {
    console.log(`Player Final Score: ${playerScore}`);
    console.log(`Computer Final Score: ${computerScore}`);
    console.log("Congratulations! You Win ^^");
  }
  if (playerScore < computerScore) {
    console.log(`Player Final Score: ${playerScore}`);
    console.log(`Computer Final Score: ${computerScore}`);
    console.log("Oh No! You Loose...");
  }
};

game();
