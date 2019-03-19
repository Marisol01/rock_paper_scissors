// caching DOM
let userScore = 0;
let computerScore = 0;
let tieScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const tieScore_span = document.getElementById("tie-score")
const scoreBoard_div = document.querySelector(".score-board");
const results_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "rock";
  if (letter === "p") return "paper";
  else return "scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  results_p.innerHTML = "You chose " + convertToWord(userChoice) + ".  Computer chose " + convertToWord(computerChoice) + ". You win!!!";
///////////
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  results_p.innerHTML = "You chose " + convertToWord(userChoice) + ". Computer chose " + convertToWord(computerChoice) + ". You lose...";
}

function tie(userChoice, computerChoice) {
  tieScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  tieScore_span.innerHTML = tieScore
  results_p.innerHTML = "You chose " + convertToWord(userChoice) + ". Computer chose " + convertToWord(computerChoice) + ". It's a tie.";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
  case "rs":
  case "pr":
  case "sp":
    win(userChoice, computerChoice);
    break;
  case "rp":
  case "ps":
  case "sr":
    lose(userChoice, computerChoice);
    break;
  case "rr":
  case "pp":
  case "ss": 
    tie(userChoice, computerChoice);
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r")

})

  paper_div.addEventListener('click', function() {
    game("p")

})

  scissors_div.addEventListener('click', function() {
    game("s")

})
}


main()