for (i = 0; i < 5; i++) {}
let userChoice = prompt("Choose rock, paper or scissors.");
let gameOptions = ["rock", "paper", "scissors"];
let userWins = 0;
let computerWins = 0;

const randomCompChoice =
  gameOptions[Math.floor(Math.random() * gameOptions.length)];
//random computer throw is working

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
}

// for (i = 0; userWins < 5 || computerWins < 5; i++) {
//   whoWins();
//   break;
// }

// whoWins();
