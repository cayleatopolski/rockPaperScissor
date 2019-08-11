let userWins = 0;
let computerWins = 0;

function userPrompt() {
  return (userChoice = prompt("Choose rock, paper or scissors."));
}

function computerChoice() {
  let gameOptions = ["rock", "paper", "scissors"];
  return (randomCompChoice =
    gameOptions[Math.floor(Math.random() * gameOptions.length)]);
}
//so I know it aint CHEATIN' :\
console.log(computerChoice());

while (userWins < 5 || computerWins < 5) {
  userPrompt();
  computerChoice();
  console.log(computerChoice());
  whoWins();
}

function whoWins() {
  if (userChoice === "rock" && randomCompChoice === "scissors") {
    alert("You win this round!"), userWins++;
  } else if (userChoice === "paper" && randomCompChoice === "rock") {
    alert("You win this round! Keep it up!!"), userWins++;
  } else if (userChoice === "scissors" && randomCompChoice === "paper") {
    alert("You win this round! waow."), userWins++;
  } else if (userChoice === "rock" && randomCompChoice === "rock") {
    alert("It's a DRAW! Shoot again.");
  } else if (userChoice === "paper" && randomCompChoice === "paper") {
    alert("It's a DRAW! Shoot again.");
  } else if (userChoice === "scissors" && randomCompChoice === "scissors") {
    alert("It's a DRAW! Shoot again.");
  } else {
    alert("The pooter won"), computerWins++;
  }
  checkWins();
}

function checkWins() {
  if (userWins === 5) {
    alert("You win!! GG.");
  } else if (computerWins === 5) {
    alert("You lost the RNG fight T-T");
  }
  console.log("Your wins: " + userWins);
  console.log("Enemy wins: " + computerWins);
}
