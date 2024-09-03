let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const computerScorePara = document.querySelector("#computer-score")

const generateComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  msg.innerText = "Game draw! Play again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win. Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `You lose.  ${computerChoice} beats your${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
//   console.log("user choice = ", userChoice);
  // Generate computer choice
  const computerChoice = generateComputerChoice();
//   console.log("Computer choice = ", computerChoice); 

  if (userChoice === computerChoice) {
    // Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissor" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("Id");
    // console.log("Choice was clicked", userChoice);
    playGame(userChoice);
  });
});
