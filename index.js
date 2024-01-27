//ROCK PAPER SCISSORS - GAME//

const options = [`rock`,`paper`,`scissors`];

function getcomputerSelection() { 
  const choice = options[Math.floor(Math.random()* options.length)];
  return choice;

}
function checkWinner(playerSelection,computerSelection) {
 if (playerSelection == computerSelection){
  return "Tie";
  }
  else if (
    (playerSelection == "rock" && computerSelection =="scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ){
    return "Player";
  }
  else {
    return "Computer";
  }
}    
function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection);
  if(result == "Tie"){
    return "It's a Tie!"
  }
  else if(result == "Player"){
    return `Congratulations! You Win! ${playerSelection} beats ${computerSelection}`

  }
  else{
    return `You lose! Better luck next time! ${computerSelection} beats ${playerSelection}`
  }
} 


function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
      const choice = prompt("It's time to duel! Choose, rock paper or scissors!");
      if (choice == null){
        continue;
      }
      const choiceInLower = choice.toLowerCase();
      if(options.includes(choiceInLower)){
        validatedInput = true;
        return choiceInLower;
      }
    }
}

function game (){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!")

    while (scorePlayer < 5 && scoreComputer < 5){
        const playerSelection = getPlayerChoice();
        const computerSelection = getcomputerSelection();

        const winner = checkWinner(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection, winner));

        if (winner === "Player"){
            scorePlayer++;
        }
        else if (winner === "Computer"){
            scoreComputer++;
        }
    
  console.log (winner,"player_score:", + scorePlayer,"computer_score:", + scoreComputer)
    }


    console.log("Game Over");

    if (scorePlayer === 5){
        console.log ("Player was the winner!")
    }
    else if (scoreComputer === 5 && scorePlayer !== 5 ){
        console.log("Computer was the winner");
    }   
}

game()

