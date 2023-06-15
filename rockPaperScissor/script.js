let playerChoice = document.getElementById("choice");
//playerChoice is linked to the button with the id of "choice"

playerChoice.addEventListener("click", Round);
//we add an eventlistner to the button. when it is clicked this function is ran.

function randomChoice(){

  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];

}
//generates a random choice between rock, paper, and scissor. The value will then be inputted into the variable computerSelection


  function Round(){

    var computerSelection = randomChoice();
    playerSelection = prompt('Enter your choice');

    // rock vs paper
    if(playerSelection === "rock" && computerSelection === "paper")
    playerChoice = document.getElementById("output").innerHTML = 'you lost! ' + computerSelection + ' wins!';

    // rock vs scissors
    else if(playerSelection === "rock" && computerSelection === "scissors")
    playerChoice = document.getElementById("output").innerHTML = 'you won! ' + computerSelection + ' loses!';
    
    // rock vs rock
    else if(playerSelection === "rock" && computerSelection === "rock")
    playerChoice = document.getElementById("output").innerHTML = "it's a tie!";
   
     // paper vs rock
     else if(playerSelection === "paper" && computerSelection === "rock")
     playerChoice = document.getElementById("output").innerHTML = 'you won! ' + computerSelection + ' loses!';

    // paper vs scissors
    else if(playerSelection === "paper" && computerSelection === "scissors")
    playerChoice = document.getElementById("output").innerHTML = 'you lost! ' + computerSelection + ' wins!';
    
    // paper vs paper
    else if(playerSelection === "paper" && computerSelection === "paper")
    playerChoice = document.getElementById("output").innerHTML = "it's a tie!";

    // scissors vs rock
    else if(playerSelection === "scissors" && computerSelection === "rock")
    playerChoice = document.getElementById("output").innerHTML = 'you lost! ' + computerSelection + ' wins!';

    // scissors vs paper
    else if(playerSelection === "scissors" && computerSelection === "paper")
    playerChoice = document.getElementById("output").innerHTML = 'you win! ' + computerSelection + ' loses!';
    
    // scissors vs scissors
    else if(playerSelection === "scissors" && computerSelection === "scissors")
    playerChoice = document.getElementById("output").innerHTML = "it's a tie!";
    


}





